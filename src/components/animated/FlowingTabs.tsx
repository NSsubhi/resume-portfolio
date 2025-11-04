"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export type Tab = {
  id: string;
  label: string;
};

type FlowingTabsProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
};

export function FlowingTabs({ tabs, activeTab, onTabChange, className }: FlowingTabsProps) {
  return (
    <div className={className || "flex w-full justify-center"}>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative z-10 px-6 py-2.5 text-sm font-medium transition-colors duration-300"
              style={{
                color: isActive ? "white" : "rgba(255,255,255,0.6)",
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="flowing-tab-indicator"
                  className="absolute inset-0 z-0 rounded-full bg-white/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                  transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FlowingTabs;





