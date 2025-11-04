"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type MenuItem = {
  id: string;
  label: string;
};

type HorizontalScrollMenuProps = {
  items: MenuItem[];
  activeItem: string;
  onItemClick: (itemId: string) => void;
};

export function HorizontalScrollMenu({ items, activeItem, onItemClick }: HorizontalScrollMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div
        ref={containerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className="group relative shrink-0 overflow-hidden rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`relative px-12 py-8 transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 backdrop-blur-md"
                    : "bg-white/5 backdrop-blur-sm hover:bg-white/8"
                }`}
              >
                {/* Animated border */}
                <div
                  className={`absolute inset-0 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                      : "border-white/10 group-hover:border-white/20"
                  }`}
                />

                {/* Shimmer effect on hover */}
                {!isActive && (
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                )}

                <h3
                  className={`relative z-10 text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {item.label}
                </h3>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Scroll indicator gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}

export default HorizontalScrollMenu;





