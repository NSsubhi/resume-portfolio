"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardSwap, { Card } from "@/components/animated/CardSwap";
import { experiences, education, projects } from "@/data/resume";
import type { Experience, Education, Project } from "@/data/resume";

type ResumeSectionProps = {
  activeTab?: string | null;
  onClose?: () => void;
};

export default function ResumeSection({ activeTab: propActiveTab, onClose }: ResumeSectionProps) {
  const [activeTab, setActiveTab] = useState<string | null>(propActiveTab || null);

  // Update activeTab when prop changes
  React.useEffect(() => {
    setActiveTab(propActiveTab || null);
  }, [propActiveTab]);

  const getActiveData = () => {
    switch (activeTab) {
      case "experience":
        return experiences;
      case "education":
        return education;
      case "projects":
        return projects;
      default:
        return [];
    }
  };

  const activeData = getActiveData();

  if (!activeTab || activeData.length === 0) {
    return null;
  }

  const sectionTitle = activeTab === "experience" ? "Work Experience" 
    : activeTab === "education" ? "Education"
    : activeTab === "projects" ? "Projects"
    : "";

  return (
    <AnimatePresence>
      {activeTab && (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget && onClose) {
              onClose();
            }
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* CardSwap Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10"
            style={{ height: "600px", width: "100%", maxWidth: "800px" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">
                {sectionTitle}
              </h2>
              <button
                onClick={() => {
                  if (onClose) {
                    onClose();
                  }
                }}
                className="rounded-full border border-white/20 bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
              width={600}
              height={450}
            >
              {activeData.map((item, idx) => (
                <Card
                  key={idx}
                  customClass="p-8 text-white"
                >
                  {activeTab === "experience" && (
                    <ExperienceCardContent item={item as Experience} />
                  )}
                  {activeTab === "education" && (
                    <EducationCardContent item={item as Education} />
                  )}
                  {activeTab === "projects" && (
                    <ProjectCardContent item={item as Project} />
                  )}
                </Card>
              ))}
            </CardSwap>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ExperienceCardContent({ item }: { item: Experience }) {
  return (
    <div className="space-y-4 h-full overflow-y-auto">
      <div>
        <h3 className="text-2xl font-bold text-white">{item.company}</h3>
        <p className="mt-1 text-lg font-medium text-zinc-300">{item.role}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
          <span>{item.location}</span>
          <span className="text-zinc-600">•</span>
          <span>{item.period}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {item.highlights.map((highlight, idx) => (
          <li key={idx} className="flex gap-3 text-zinc-300 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EducationCardContent({ item }: { item: Education }) {
  return (
    <div className="space-y-4 h-full overflow-y-auto">
      <div>
        <h3 className="text-2xl font-bold text-white">{item.institution}</h3>
        <p className="mt-1 text-lg font-medium text-zinc-300">{item.degree}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
          <span>{item.location}</span>
          <span className="text-zinc-600">•</span>
          <span>{item.period}</span>
        </div>
      </div>
      <div className="rounded-lg border border-white/20 bg-white/5 p-4">
        <p className="text-sm font-medium text-zinc-400">GPA</p>
        <p className="mt-1 text-2xl font-bold text-white">{item.gpa}</p>
      </div>
    </div>
  );
}

function ProjectCardContent({ item }: { item: Project }) {
  return (
    <div className="space-y-4 h-full overflow-y-auto">
      <div>
        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
        <p className="mt-2 text-sm font-medium text-zinc-400">{item.tech}</p>
      </div>
      <ul className="space-y-2">
        {item.highlights.map((highlight, idx) => (
          <li key={idx} className="flex gap-3 text-zinc-300 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
      {item.links && (
        <div className="flex flex-wrap gap-3 pt-2">
          {item.links.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              GitHub
            </a>
          )}
          {item.links.live && (
            <a
              href={item.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
