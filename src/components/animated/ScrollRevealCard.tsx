"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

export interface ScrollRevealCardProps {
  children: ReactNode;
  index?: number;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const ScrollRevealCard: React.FC<ScrollRevealCardProps> = ({
  children,
  index = 0,
  className = "",
  delay = 0,
  staggerDelay = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3, y: 30, scale: 0.98 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0.3, y: 30, scale: 0.98 }
      }
      transition={{
        duration: 0.4,
        delay: delay + index * staggerDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealCard;


