"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

type ParticlesProps = {
  className?: string;
  /** Number of particles rendered */
  quantity?: number;
  /** Particle base size in pixels */
  size?: number;
  /** Hex or rgb(a) color string */
  color?: string;
  /** Motion intensity when following cursor (0 = static) */
  staticity?: number;
  /** How quickly particles ease toward their targets (0-1) */
  ease?: number;
  /** Whether to enable mouse repulsion effect */
  repulse?: boolean;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  size: number;
};

export function Particles({
  className,
  quantity = 120,
  size = 2,
  color = "rgba(255,255,255,0.5)",
  staticity = 40,
  ease = 0.2,
  repulse = true,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

  const getCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return { width: 0, height: 0 };
    const { width, height } = canvas.getBoundingClientRect();
    return { width, height };
  }, []);

  const setCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = getCanvasSize();
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
  }, [dpr, getCanvasSize]);

  const createParticles = useCallback(() => {
    const { width, height } = getCanvasSize();
    const count = Math.max(0, quantity);
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const px = Math.random() * width;
      const py = Math.random() * height;
      particles.push({
        x: px,
        y: py,
        vx: 0,
        vy: 0,
        baseX: px,
        baseY: py,
        size: size + Math.random() * size,
      });
    }
    particlesRef.current = particles;
  }, [getCanvasSize, quantity, size]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;

    const m = mouseRef.current;

    for (const p of particlesRef.current) {
      // Ease back toward base position
      const dxBase = p.baseX * dpr - p.x;
      const dyBase = p.baseY * dpr - p.y;
      p.vx += dxBase * ease * 0.01;
      p.vy += dyBase * ease * 0.01;

      // Mouse influence
      if (m) {
        const dx = m.x * dpr - p.x;
        const dy = m.y * dpr - p.y;
        const distSq = dx * dx + dy * dy + 0.001;
        const dist = Math.sqrt(distSq);

        // Follow mouse slightly
        p.vx += (dx / dist) * (1 / Math.max(staticity, 1));
        p.vy += (dy / dist) * (1 / Math.max(staticity, 1));

        // Repulse effect
        if (repulse) {
          const influence = Math.max(0, 90 - Math.min(90, dist)) / 90; // within 90px
          const repel = 2.5 * influence;
          p.vx -= (dx / dist) * repel;
          p.vy -= (dy / dist) * repel;
        }
      }

      // Apply velocity and gentle damping
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.92;
      p.vy *= 0.92;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * dpr, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [color, dpr, ease, repulse, staticity]);

  const loop = useCallback(() => {
    draw();
    animationRef.current = requestAnimationFrame(loop);
  }, [draw]);

  // Resize handling
  useEffect(() => {
    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [createParticles, setCanvasSize]);

  // Mouse tracking
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleLeave = () => {
      mouseRef.current = null;
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Animation lifecycle
  useEffect(() => {
    // Recreate particles if quantity/size changes
    createParticles();
  }, [createParticles]);

  useEffect(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [loop]);

  const cn = useMemo(() => className ?? "", [className]);

  return (
    <canvas
      ref={canvasRef}
      className={
        cn ||
        "pointer-events-none absolute inset-0 h-full w-full [contain:strict]"
      }
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default Particles;


