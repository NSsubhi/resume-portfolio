"use client";

import { forwardRef, useMemo, useRef, useEffect, MutableRefObject, CSSProperties, HTMLAttributes } from "react";
import { motion } from "framer-motion";

function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    let frameId: number;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef: MutableRefObject<HTMLElement | null>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev: MouseEvent) => updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: MutableRefObject<HTMLElement | null>;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = "linear",
    className = "",
    onClick,
    style,
    ...restProps
  } = props;

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const interpolatedSettingsRef = useRef<string[]>([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr: string) =>
      new Map(
        settingsStr
          .split(",")
          .map((s) => s.trim())
          .map((s) => {
            const [name, value] = s.split(" ");
            return [name.replace(/['"]/g, ""), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = (distance: number) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);

    switch (falloff) {
      case "exponential":
        return norm ** 2;
      case "gaussian":
        return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case "linear":
      default:
        return norm;
    }
  };

  useAnimationFrame(() => {
    if (!containerRef?.current) return;

    const { x, y } = mousePositionRef.current;
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      return;
    }
    lastPositionRef.current = { x, y };

    const containerRect = containerRef.current.getBoundingClientRect();

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(mousePositionRef.current.x, mousePositionRef.current.y, letterCenterX, letterCenterY);

      const falloffValue = distance >= radius ? 0 : calculateFalloff(distance);

      const newSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
          return `'${axis}' ${interpolatedValue}`;
        })
        .join(", ");

      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.transition = "font-weight 0.15s ease-out, font-size 0.15s ease-out, font-variation-settings 0.15s ease-out";
      letterRef.style.fontVariationSettings = newSettings;
      
      // Also apply font-weight as fallback for better visibility
      const wghtSetting = parsedSettings.find((s) => s.axis === "wght");
      if (wghtSetting) {
        const interpolatedWeight = Math.round(wghtSetting.fromValue + (wghtSetting.toValue - wghtSetting.fromValue) * falloffValue);
        letterRef.style.fontWeight = `${interpolatedWeight}`;
      }
    });
  });

  const words = label.split(" ");
  let letterIndex = 0;

  // Initialize interpolatedSettingsRef for all letters
  useEffect(() => {
    const totalLetters = label.split("").filter((char) => char !== " ").length;
    for (let i = 0; i < totalLetters; i++) {
      if (!interpolatedSettingsRef.current[i]) {
        interpolatedSettingsRef.current[i] = fromFontVariationSettings;
      }
    }
  }, [label, fromFontVariationSettings]);

  return (
    <span
      ref={ref}
      onClick={onClick}
      style={{
        display: "inline",
        fontFamily: '"Roboto Flex", sans-serif',
        ...style,
      }}
      className={className}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
          style={{
            wordBreak: "keep-all",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          {word.split("").map((letter) => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={(el) => {
                  letterRefs.current[currentLetterIndex] = el;
                  if (el && !interpolatedSettingsRef.current[currentLetterIndex]) {
                    interpolatedSettingsRef.current[currentLetterIndex] = fromFontVariationSettings;
                    el.style.transition = "font-weight 0.15s ease-out, font-size 0.15s ease-out, font-variation-settings 0.15s ease-out";
                    el.style.fontVariationSettings = fromFontVariationSettings;
                    // Set initial font-weight
                    const wghtMatch = fromFontVariationSettings.match(/'wght'\s+(\d+)/);
                    if (wghtMatch) {
                      el.style.fontWeight = wghtMatch[1];
                    }
                  }
                }}
                style={{
                  display: "inline-block",
                  fontVariationSettings: interpolatedSettingsRef.current[currentLetterIndex] || fromFontVariationSettings,
                  fontWeight: (() => {
                    const current = interpolatedSettingsRef.current[currentLetterIndex] || fromFontVariationSettings;
                    const wghtMatch = current.match(/'wght'\s+(\d+)/);
                    return wghtMatch ? wghtMatch[1] : "400";
                  })(),
                  transition: "font-weight 0.15s ease-out, font-size 0.15s ease-out, font-variation-settings 0.15s ease-out",
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = "VariableProximity";

export default VariableProximity;

