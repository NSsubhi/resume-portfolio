"use client";

import TextPressure from "@/components/animated/TextPressure";
import ShinyText from "@/components/animated/ShinyText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Name with TextPressure */}
          <TextPressure
            text="Subhiksha Seshadri Nallore"
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
          />

          {/* Tagline with ShinyText */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-zinc-100 sm:text-3xl">
              <ShinyText text="Software Engineer | ML/AI Focus" />
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
              Currently pursuing <ShinyText text="Master of Computer Science at NYU" />{" "}
              (GPA 3.7). Previously at Oracle, building intelligent systems with ML/AI—from
              revenue forecasting to RAG-powered support systems.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <a
              href="mailto:ssn9077@nyu.edu"
              className="transition-colors hover:text-white"
            >
              ssn9077@nyu.edu
            </a>
            <span className="text-zinc-600">|</span>
            <span>(+1) 718-930-9779</span>
            <span className="text-zinc-600">|</span>
            <span>New York, NY 11228</span>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
            >
              <span className="relative z-10">Get in Touch</span>
            </a>
            <a
              href="https://linkedin.com/in/subhiksha-seshadri"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
            >
              <span className="relative z-10">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}





