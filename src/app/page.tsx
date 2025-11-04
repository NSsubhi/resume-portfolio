"use client";

import { useRef, MutableRefObject, useState } from "react";
import { motion } from "framer-motion";
import Galaxy from "@/components/animated/Galaxy";
import GlareHover from "@/components/animated/GlareHover";
import TextPressure from "@/components/animated/TextPressure";
import RotatingText from "@/components/animated/RotatingText";
import VariableProximity from "@/components/animated/VariableProximity";
import ScrollRevealCard from "@/components/animated/ScrollRevealCard";
import GradientText from "@/components/animated/GradientText";
import SplitText from "@/components/animated/SplitText";
import MagneticCard from "@/components/animated/MagneticCard";
import Dock from "@/components/animated/Dock";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "@/contexts/ThemeContext";
import { 
  FaBriefcase, FaGraduationCap, FaTrophy, FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCode,
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt
} from "react-icons/fa";
import { 
  SiSpringboot, SiTypescript, SiNextdotjs, SiPostgresql, SiMongodb, SiKubernetes, SiJenkins
} from "react-icons/si";
import { 
  MdWork, MdSchool, MdEmojiEvents, MdLocationOn, MdDateRange, MdContactMail, 
  MdSettings, MdDarkMode, MdLightMode, MdFolderSpecial, MdArchitecture
} from "react-icons/md";
import { VscFolderLibrary, VscProject, VscMail, VscSettingsGear } from "react-icons/vsc";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement | null>;
  const { theme, toggleTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeExperienceFilter, setActiveExperienceFilter] = useState<string>("All");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const dockItems = [
    { 
      icon: <VscFolderLibrary size={20} className="text-purple-400" />, 
      label: 'Work Experience', 
      onClick: () => scrollToSection('experience') 
    },
    { 
      icon: <VscProject size={20} className="text-purple-400" />, 
      label: 'Projects', 
      onClick: () => scrollToSection('projects') 
    },
    { 
      icon: <MdSettings size={20} className="text-purple-400" />, 
      label: 'Skills', 
      onClick: () => scrollToSection('skills') 
    },
    { 
      icon: <VscMail size={20} className="text-purple-400" />, 
      label: 'Contact', 
      onClick: () => scrollToSection('contact') 
    },
    { 
      icon: theme === 'dark' ? <MdLightMode size={20} className="text-purple-400" /> : <MdDarkMode size={20} className="text-purple-400" />, 
      label: theme === 'dark' ? 'Light Mode' : 'Dark Mode', 
      onClick: toggleTheme 
    },
  ];

  // Icon mapping for skills
  const skillIcons: Record<string, React.ReactNode> = {
    "Java": <FaJava className="text-3xl text-purple-600 dark:text-purple-400" />,
    "Spring Boot": <SiSpringboot className="text-3xl text-purple-600 dark:text-purple-400" />,
    "Python": <FaPython className="text-3xl text-purple-600 dark:text-purple-400" />,
    "JavaScript": <FaJs className="text-3xl text-purple-600 dark:text-purple-400" />,
    "TypeScript": <SiTypescript className="text-3xl text-purple-600 dark:text-purple-400" />,
    "React": <FaReact className="text-3xl text-purple-600 dark:text-purple-400" />,
    "Next.js": <SiNextdotjs className="text-3xl text-purple-600 dark:text-purple-400" />,
    "Node.js": <FaNodeJs className="text-3xl text-purple-600 dark:text-purple-400" />,
    "PostgreSQL": <SiPostgresql className="text-3xl text-purple-600 dark:text-purple-400" />,
    "MongoDB": <SiMongodb className="text-3xl text-purple-600 dark:text-purple-400" />,
    "Docker": <FaDocker className="text-3xl text-purple-600 dark:text-purple-400" />,
    "Kubernetes": <SiKubernetes className="text-3xl text-purple-600 dark:text-purple-400" />,
    "AWS": <FaAws className="text-3xl text-purple-600 dark:text-purple-400" />,
    "Git": <FaGitAlt className="text-3xl text-purple-600 dark:text-purple-400" />,
    "CI/CD": <SiJenkins className="text-3xl text-purple-600 dark:text-purple-400" />,
    "Microservices": <MdArchitecture className="text-3xl text-purple-600 dark:text-purple-400" />,
  };

  return (
      <div className={`relative min-h-screen w-full overflow-x-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Background Galaxy - Full Screen */}
      <div className={`fixed inset-0 w-full h-full ${theme === 'light' ? 'opacity-10' : 'opacity-100'}`} style={{ zIndex: 1 }}>
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={theme === 'light' ? 0.1 : 0.5}
          saturation={theme === 'light' ? 0.2 : 0.8}
          hueShift={240}
        />
      </div>

      {/* Hero Section */}
      <div
        ref={containerRef}
        className="relative flex items-start justify-between min-h-screen px-8 md:px-16"
        style={{ zIndex: 10, position: "relative", paddingTop: "var(--nav-height, 120px)", transition: "padding-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
      >
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl text-gray-900 dark:text-white mt-4">
          {/* Name with TextPressure */}
          <div style={{ position: "relative", height: "180px", marginBottom: "0" }}>
            <TextPressure
              text="Hello! I'm Subhiksha"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={80}
            />
          </div>

          {/* Title with Rotating Text */}
          <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 -mt-2">
            <RotatingText
              texts={["Software Engineer", "student at NYU"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-purple-400/20 text-purple-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              auto={true}
            />
          </div>

          {/* Description with VariableProximity */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-300 max-w-3xl mb-6 mt-2" style={{ position: "relative", wordBreak: "keep-all", overflowWrap: "normal", minWidth: "100%" }}>
            <VariableProximity
              label="Results-oriented Software Engineer specializing in building reliable, low-latency backend systems and microservices in Java Spring Boot, with deep focus on concurrency, performance tuning, database optimization, and scalable API design. Experienced in cloud platforms, containerized deployments, observability, and CI/CD — driving measurable improvements in uptime, stability, and user experience across production environments."
              className="variable-proximity-demo text-gray-800 dark:text-gray-300"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 700, 'opsz' 30"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
              style={{ transition: "font-weight 0.2s ease, font-size 0.2s ease", display: "inline-block", whiteSpace: "normal" }}
            />
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-4">
            {/* Resume */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/10 border-2 border-gray-300 dark:border-white/20 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition-colors shadow-md dark:shadow-none"
              aria-label="Resume"
            >
              <svg
                className="w-8 h-8 text-gray-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/10 border-2 border-gray-300 dark:border-white/20 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition-colors shadow-md dark:shadow-none"
              aria-label="GitHub"
            >
              <svg
                className="w-8 h-8 text-gray-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/subhiksha-seshadri"
            target="_blank"
            rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/10 border-2 border-gray-300 dark:border-white/20 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition-colors shadow-md dark:shadow-none"
              aria-label="LinkedIn"
            >
              <svg
                className="w-8 h-8 text-gray-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Contact */}
            <a
              href="mailto:ssn9077@nyu.edu"
              className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/10 border-2 border-gray-300 dark:border-white/20 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition-colors shadow-md dark:shadow-none"
              aria-label="Contact"
            >
              <svg
                className="w-8 h-8 text-gray-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Image with Glare Hover */}
        <div className="flex-shrink-0">
          <div
            style={{
              height: "600px",
              position: "relative",
              backdropFilter: "blur(10px)",
            }}
            className="p-4"
          >
            {/* Glass morphism frame */}
            <div
              className="absolute inset-0 rounded-2xl border-2 border-white/30"
              style={{
                background: "rgba(139, 92, 246, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(139, 92, 246, 0.2), 0 0 60px rgba(139, 92, 246, 0.1)",
                zIndex: 0,
              }}
            />
            
            {/* Image container */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                width="auto"
                height="auto"
                background="transparent"
                borderColor="transparent"
                borderRadius="12px"
              >
                <div
                  className="relative"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(139, 92, 246, 0.3))",
                  }}
                >
                  <img
                    src="/sub.jpg"
                    alt="Profile"
                    className="object-contain rounded-xl"
                    style={{
                      maxHeight: "550px",
                      display: "block",
                      opacity: 0.95,
                      mixBlendMode: "normal",
                    }}
                  />
                  {/* Subtle overlay gradient */}
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)",
                    }}
                  />
                </div>
              </GlareHover>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Sections */}
      <div className="relative w-full" style={{ zIndex: 10 }}>
        {/* Work Experience Section */}
        <section id="experience" className="relative w-full py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex items-center gap-4 mb-12 group">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-purple-400/30 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-300">
                <MdWork className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <SplitText
                text="Work Experience"
                tag="h2"
                className="text-5xl font-bold text-gray-900 dark:text-white drop-shadow-sm"
                delay={50}
                duration={0.6}
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.15}
                rootMargin="-150px"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["All", "Full-time", "Internship", "Contract"].map((filter) => {
                const isActive = activeExperienceFilter === filter;
                return (
                  <motion.button
                    key={filter}
                    onClick={() => setActiveExperienceFilter(filter)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeExperienceFilter"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 border border-purple-400/30 shadow-lg shadow-purple-500/25"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-xl bg-gray-100 dark:bg-black/40 border-2 border-gray-300 dark:border-white/10 backdrop-blur-sm" />
                    )}
                    <span className="relative z-10">{filter}</span>
                  </motion.button>
                );
              })}
            </div>

            <div className="space-y-8">
              <ScrollRevealCard
                index={0}
                className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none"
              >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 shadow-md shadow-purple-500/10">
                      <FaBriefcase className="text-3xl text-purple-400" />
                    </div>
                  <div className="flex-1">
                    <GradientText
                      colors={["#a78bfa", "#ec4899", "#a78bfa", "#ec4899", "#a78bfa"]}
                      animationSpeed={4}
                      showBorder={false}
                      className="text-3xl font-bold mb-2 drop-shadow-sm"
                    >
                      Software Engineer
                    </GradientText>
                    <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 mb-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-lg" />
                        <GradientText
                          colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                          animationSpeed={5}
                          showBorder={false}
                          className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                        >
                          Company Name
                        </GradientText>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-lg" />
                        <GradientText
                          colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                          animationSpeed={5}
                          showBorder={false}
                          className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                        >
                          2023 - Present
                        </GradientText>
                      </div>
                    </div>
                    <GradientText
                      colors={["#ddd6fe", "#fae8ff", "#ddd6fe", "#fae8ff", "#ddd6fe"]}
                      animationSpeed={6}
                      showBorder={false}
                      className="text-lg leading-relaxed text-gray-300"
                    >
                      Developed scalable backend systems using Java Spring Boot, optimized database queries, and implemented microservices architecture. Led performance tuning initiatives that improved response times by 40%.
                    </GradientText>
                  </div>
                </div>
              </ScrollRevealCard>

              <ScrollRevealCard
                index={1}
                className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none"
              >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 shadow-md shadow-purple-500/10">
                      <FaBriefcase className="text-3xl text-purple-400" />
                    </div>
                  <div className="flex-1">
                    <GradientText
                      colors={["#a78bfa", "#ec4899", "#a78bfa", "#ec4899", "#a78bfa"]}
                      animationSpeed={4}
                      showBorder={false}
                      className="text-3xl font-bold mb-2 drop-shadow-sm"
                    >
                      Junior Developer
                    </GradientText>
                    <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 mb-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-lg" />
                        <GradientText
                          colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                          animationSpeed={5}
                          showBorder={false}
                          className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                        >
                          Previous Company
                        </GradientText>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-lg" />
                        <GradientText
                          colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                          animationSpeed={5}
                          showBorder={false}
                          className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                        >
                          2022 - 2023
                        </GradientText>
                      </div>
                    </div>
                    <GradientText
                      colors={["#ddd6fe", "#fae8ff", "#ddd6fe", "#fae8ff", "#ddd6fe"]}
                      animationSpeed={6}
                      showBorder={false}
                      className="text-lg leading-relaxed text-gray-300"
                    >
                      Built RESTful APIs, collaborated with cross-functional teams, and implemented CI/CD pipelines. Contributed to code reviews and helped mentor new team members.
                    </GradientText>
                  </div>
                </div>
              </ScrollRevealCard>

              <ScrollRevealCard
                index={2}
                className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none"
              >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 shadow-md shadow-purple-500/10">
                      <FaBriefcase className="text-3xl text-purple-400" />
                    </div>
                  <div className="flex-1">
                    <GradientText
                      colors={["#a78bfa", "#ec4899", "#a78bfa", "#ec4899", "#a78bfa"]}
                      animationSpeed={4}
                      showBorder={false}
                      className="text-3xl font-bold mb-2 drop-shadow-sm"
                    >
                      Intern
                    </GradientText>
                    <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 mb-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-lg" />
                        <GradientText
                          colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                          animationSpeed={5}
                          showBorder={false}
                          className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                        >
                          Startup Company
                        </GradientText>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-lg" />
                        <GradientText
                          colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                          animationSpeed={5}
                          showBorder={false}
                          className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                        >
                          2021 - 2022
                        </GradientText>
                      </div>
                    </div>
                    <GradientText
                      colors={["#ddd6fe", "#fae8ff", "#ddd6fe", "#fae8ff", "#ddd6fe"]}
                      animationSpeed={6}
                      showBorder={false}
                      className="text-lg leading-relaxed text-gray-300"
                    >
                      Gained hands-on experience with modern web technologies, participated in agile development practices, and contributed to production code.
                    </GradientText>
                  </div>
                </div>
              </ScrollRevealCard>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative w-full py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex items-center gap-4 mb-12 group">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-300">
                <VscProject className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <SplitText
                text="Projects"
                tag="h2"
                className="text-5xl font-bold text-gray-900 dark:text-white drop-shadow-sm"
                delay={50}
                duration={0.6}
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.15}
                rootMargin="-150px"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["All", "Computer Vision", "Deep Learning", "Frontend", "Generative AI", "Machine Learning"].map((category) => {
                const isActive = activeCategory === category;
                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 border border-purple-400/30 shadow-lg shadow-purple-500/25"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-xl bg-gray-100 dark:bg-black/40 border-2 border-gray-300 dark:border-white/10 backdrop-blur-sm" />
                    )}
                    <span className="relative z-10">{category}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Deep Learning Model",
                  category: "Deep Learning",
                  description: "Built a neural network for image classification using TensorFlow and PyTorch.",
                  tech: ["Python", "TensorFlow", "PyTorch"],
                  link: "#",
                },
                {
                  title: "Computer Vision App",
                  category: "Computer Vision",
                  description: "Real-time object detection application using YOLO and OpenCV.",
                  tech: ["Python", "OpenCV", "YOLO"],
                  link: "#",
                },
                {
                  title: "React Portfolio",
                  category: "Frontend",
                  description: "Modern portfolio website with animated components and smooth transitions.",
                  tech: ["React", "Next.js", "TypeScript"],
                  link: "#",
                },
                {
                  title: "Generative AI Tool",
                  category: "Generative AI",
                  description: "Text-to-image generation tool using Stable Diffusion API.",
                  tech: ["Python", "Stable Diffusion", "FastAPI"],
                  link: "#",
                },
                {
                  title: "ML Prediction System",
                  category: "Machine Learning",
                  description: "Time series forecasting model for stock price prediction.",
                  tech: ["Python", "Scikit-learn", "Pandas"],
                  link: "#",
                },
                {
                  title: "Vision Transformer",
                  category: "Computer Vision",
                  description: "Implemented Vision Transformer for image recognition tasks.",
                  tech: ["Python", "PyTorch", "Transformers"],
                  link: "#",
                },
              ]
                .filter((project) => activeCategory === "All" || project.category === activeCategory)
                .map((project, index) => (
                  <ScrollRevealCard
                    key={project.title}
                    index={index}
                    className="p-6 rounded-[30px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none"
                  >
                    <div className="flex flex-col h-full">
                      <GradientText
                        colors={["#a78bfa", "#ec4899", "#a78bfa", "#ec4899", "#a78bfa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="text-2xl font-bold mb-3 drop-shadow-sm"
                      >
                        {project.title}
                      </GradientText>
                      <GradientText
                        colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                        animationSpeed={5}
                        showBorder={false}
                        className="text-sm font-medium mb-4 text-purple-700 dark:text-purple-300 font-semibold"
                      >
                        {project.category}
                      </GradientText>
                      <GradientText
                        colors={["#ddd6fe", "#fae8ff", "#ddd6fe", "#fae8ff", "#ddd6fe"]}
                        animationSpeed={6}
                        showBorder={false}
                        className="text-base leading-relaxed mb-4 flex-grow"
                      >
                        {project.description}
                      </GradientText>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-500/20 border-2 border-purple-300 dark:border-purple-400/30 text-xs text-purple-800 dark:text-purple-300 font-semibold shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors text-sm font-semibold"
                      >
                        View Project
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </ScrollRevealCard>
                ))}
            </div>
          </div>
        </section>

        {/* Education & Achievements Section */}
        <section id="education" className="relative w-full py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
              {/* Education Column */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 group mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-300">
                    <MdSchool className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <SplitText
                    text="Education"
                    tag="h2"
                    className="text-5xl font-bold text-gray-900 dark:text-white drop-shadow-sm"
                    delay={50}
                    duration={0.6}
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.3}
                  rootMargin="-300px"
                  />
                </div>
                <ScrollRevealCard
                  index={0}
                  className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:shadow-[0_12px_48px_rgba(139,92,246,0.25)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 shadow-md shadow-purple-500/10">
                      <FaGraduationCap className="text-3xl text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <GradientText
                        colors={["#a78bfa", "#ec4899", "#a78bfa", "#ec4899", "#a78bfa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="text-3xl font-bold mb-2 drop-shadow-sm"
                      >
                        Master of Science in Computer Science
                      </GradientText>
                      <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <MdLocationOn className="text-lg text-purple-600 dark:text-purple-400" />
                          <GradientText
                            colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                            animationSpeed={5}
                            showBorder={false}
                            className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                          >
                            New York University (NYU)
                          </GradientText>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdDateRange className="text-lg text-purple-600 dark:text-purple-400" />
                          <GradientText
                            colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                            animationSpeed={5}
                            showBorder={false}
                            className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                          >
                            2023 - 2025
                          </GradientText>
                        </div>
                      </div>
                      <GradientText
                        colors={["#ddd6fe", "#fae8ff", "#ddd6fe", "#fae8ff", "#ddd6fe"]}
                        animationSpeed={6}
                        showBorder={false}
                        className="text-lg leading-relaxed text-gray-800 dark:text-gray-300"
                      >
                        Specialized in distributed systems, machine learning, and software engineering. Relevant coursework includes Advanced Algorithms, Database Systems, and Cloud Computing.
                      </GradientText>
                    </div>
                  </div>
                </ScrollRevealCard>

                <ScrollRevealCard
                  index={1}
                  className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 shadow-md shadow-purple-500/10">
                      <FaGraduationCap className="text-3xl text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <GradientText
                        colors={["#a78bfa", "#ec4899", "#a78bfa", "#ec4899", "#a78bfa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="text-3xl font-bold mb-2 drop-shadow-sm"
                      >
                        Bachelor of Science in Computer Science
                      </GradientText>
                      <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <MdLocationOn className="text-lg text-purple-600 dark:text-purple-400" />
                          <GradientText
                            colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                            animationSpeed={5}
                            showBorder={false}
                            className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                          >
                            University Name
                          </GradientText>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdDateRange className="text-lg text-purple-600 dark:text-purple-400" />
                          <GradientText
                            colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                            animationSpeed={5}
                            showBorder={false}
                            className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                          >
                            2019 - 2023
                          </GradientText>
                        </div>
                      </div>
                      <GradientText
                        colors={["#ddd6fe", "#fae8ff", "#ddd6fe", "#fae8ff", "#ddd6fe"]}
                        animationSpeed={6}
                        showBorder={false}
                        className="text-lg leading-relaxed text-gray-800 dark:text-gray-300"
                      >
                        Graduated with honors. Focused on software engineering, data structures, and algorithms. Active member of the Computer Science Club.
                      </GradientText>
                    </div>
                  </div>
                </ScrollRevealCard>
              </div>

              {/* Decorative Divider */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px pointer-events-none" style={{ transform: 'translateX(-50%)', zIndex: 0 }}>
                <div className="h-full w-full bg-gradient-to-b from-transparent via-purple-400/30 dark:via-purple-500/20 to-transparent" />
              </div>

              {/* Achievements Column */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 group mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-300">
                    <MdEmojiEvents className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <SplitText
                    text="Achievements"
                    tag="h2"
                    className="text-5xl font-bold text-gray-900 dark:text-white drop-shadow-sm"
                    delay={50}
                    duration={0.6}
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.3}
                  rootMargin="-300px"
                  />
                </div>
                <ScrollRevealCard
                  index={0}
                  className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:shadow-[0_12px_48px_rgba(139,92,246,0.25)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 shadow-md shadow-purple-500/10">
                      <FaTrophy className="text-3xl text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <GradientText
                        colors={["#a78bfa", "#ec4899", "#a78bfa", "#ec4899", "#a78bfa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="text-3xl font-bold mb-2 drop-shadow-sm"
                      >
                        Hackathon Winner
                      </GradientText>
                      <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <MdDateRange className="text-lg text-purple-600 dark:text-purple-400" />
                          <GradientText
                            colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                            animationSpeed={5}
                            showBorder={false}
                            className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                          >
                            2024
                          </GradientText>
                        </div>
                      </div>
                      <GradientText
                        colors={["#ddd6fe", "#fae8ff", "#ddd6fe", "#fae8ff", "#ddd6fe"]}
                        animationSpeed={6}
                        showBorder={false}
                        className="text-lg leading-relaxed text-gray-800 dark:text-gray-300"
                      >
                        Won first place in a 48-hour hackathon by building an innovative solution using machine learning and cloud technologies. Recognized for technical excellence and creative problem-solving.
                      </GradientText>
                    </div>
                  </div>
                </ScrollRevealCard>

                <ScrollRevealCard
                  index={1}
                  className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 shadow-md shadow-purple-500/10">
                      <FaTrophy className="text-3xl text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <GradientText
                        colors={["#a78bfa", "#ec4899", "#a78bfa", "#ec4899", "#a78bfa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="text-3xl font-bold mb-2 drop-shadow-sm"
                      >
                        Dean's List
                      </GradientText>
                      <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <MdDateRange className="text-lg text-purple-600 dark:text-purple-400" />
                          <GradientText
                            colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                            animationSpeed={5}
                            showBorder={false}
                            className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                          >
                            2023 - 2024
                          </GradientText>
                        </div>
                      </div>
                      <GradientText
                        colors={["#ddd6fe", "#fae8ff", "#ddd6fe", "#fae8ff", "#ddd6fe"]}
                        animationSpeed={6}
                        showBorder={false}
                        className="text-lg leading-relaxed text-gray-800 dark:text-gray-300"
                      >
                        Maintained exceptional academic performance, achieving Dean's List recognition for multiple semesters. Demonstrated excellence in both theoretical knowledge and practical application.
                      </GradientText>
                    </div>
                  </div>
                </ScrollRevealCard>

                <ScrollRevealCard
                  index={2}
                  className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 shadow-md shadow-purple-500/10">
                      <FaTrophy className="text-3xl text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <GradientText
                        colors={["#a78bfa", "#ec4899", "#a78bfa", "#ec4899", "#a78bfa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="text-3xl font-bold mb-2 drop-shadow-sm"
                      >
                        Open Source Contributor
                      </GradientText>
                      <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <MdDateRange className="text-lg text-purple-600 dark:text-purple-400" />
                          <GradientText
                            colors={["#c4b5fd", "#f0abfc", "#c4b5fd"]}
                            animationSpeed={5}
                            showBorder={false}
                            className="text-base font-medium text-gray-800 dark:text-gray-300 font-semibold"
                          >
                            2022 - Present
                          </GradientText>
                        </div>
                      </div>
                      <GradientText
                        colors={["#ddd6fe", "#fae8ff", "#ddd6fe", "#fae8ff", "#ddd6fe"]}
                        animationSpeed={6}
                        showBorder={false}
                        className="text-lg leading-relaxed text-gray-800 dark:text-gray-300"
                      >
                        Active contributor to multiple open-source projects. Made significant contributions to popular frameworks and libraries, helping improve developer experience for thousands of users.
                      </GradientText>
                    </div>
                  </div>
                </ScrollRevealCard>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative w-full py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex items-center gap-4 mb-12 group">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-300">
                <MdSettings className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <SplitText
                text="Skills & Technologies"
                tag="h2"
                className="text-5xl font-bold text-gray-900 dark:text-white drop-shadow-sm"
                delay={50}
                duration={0.6}
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.15}
                rootMargin="-150px"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "Java", category: "Language" },
                { name: "Spring Boot", category: "Framework" },
                { name: "Python", category: "Language" },
                { name: "JavaScript", category: "Language" },
                { name: "TypeScript", category: "Language" },
                { name: "React", category: "Framework" },
                { name: "Next.js", category: "Framework" },
                { name: "Node.js", category: "Runtime" },
                { name: "PostgreSQL", category: "Database" },
                { name: "MongoDB", category: "Database" },
                { name: "Docker", category: "Tool" },
                { name: "Kubernetes", category: "Tool" },
                { name: "AWS", category: "Cloud" },
                { name: "Git", category: "Tool" },
                { name: "CI/CD", category: "Tool" },
                { name: "Microservices", category: "Architecture" },
              ].map((skill, index) => (
                <MagneticCard
                  key={skill.name}
                  className="p-6 rounded-[30px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3">
                      {skillIcons[skill.name] || <FaCode className="text-3xl text-purple-600 dark:text-purple-400" />}
                    </div>
                    <SplitText
                      text={skill.name}
                      tag="h3"
                      className="text-xl font-bold mb-1 text-white"
                      delay={30}
                      duration={0.4}
                      splitType="chars"
                      from={{ opacity: 0, y: 10 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.15}
                  rootMargin="-150px"
                    />
                    <SplitText
                      text={skill.category}
                      tag="span"
                      className="text-sm text-gray-400"
                      delay={20}
                      duration={0.3}
                      splitType="chars"
                      from={{ opacity: 0, y: 5 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.15}
                  rootMargin="-150px"
                    />
                  </div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Let's Work Together Section */}
        <section id="contact" className="relative w-full py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex items-center gap-4 mb-12 group">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-300">
                <MdContactMail className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <SplitText
                text="Let's Work Together"
                tag="h2"
                className="text-5xl font-bold text-gray-900 dark:text-white drop-shadow-sm"
                delay={50}
                duration={0.6}
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.15}
                rootMargin="-150px"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Info */}
              <ScrollRevealCard
                index={0}
                className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none"
              >
                <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                <p className="text-lg leading-relaxed text-gray-300 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:ssn9077@nyu.edu"
                        className="text-lg text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        ssn9077@nyu.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/subhiksha-seshadri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        /in/subhiksha-seshadri
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a
                        href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
                        className="text-lg text-purple-400 hover:text-purple-300 transition-colors"
          >
                        github.com
          </a>
        </div>
                  </div>
                </div>
              </ScrollRevealCard>

              {/* Right Side - Form */}
              <ScrollRevealCard
                index={1}
                className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md border-2 border-purple-500/30 text-white shadow-none"
              >
                <ContactForm />
              </ScrollRevealCard>
            </div>
          </div>
        </section>
      </div>

      {/* Dock Navigation */}
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}
