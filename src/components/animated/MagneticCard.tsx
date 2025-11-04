"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticCard({ 
  children, 
  className = "", 
  strength = 0.15 
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = -y * strength;
      const rotateY = x * strength;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={{
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}


