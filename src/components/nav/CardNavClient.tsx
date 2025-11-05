"use client";

import { useEffect } from "react";
import CardNav, { CardNavItem } from "./CardNav";

const menuItems: CardNavItem[] = [
  {
    label: "Experience",
    bgColor: "rgba(139, 92, 246, 0.1)",
    textColor: "#fff",
    links: [
      { label: "Work Experience", href: "#experience", ariaLabel: "View Work Experience" },
      { label: "Education", href: "#education", ariaLabel: "View Education" },
    ],
  },
  {
    label: "Projects",
    bgColor: "rgba(139, 92, 246, 0.15)",
    textColor: "#fff",
    links: [
      { label: "Featured Projects", href: "#projects", ariaLabel: "View Featured Projects" },
      { label: "All Projects", href: "#projects", ariaLabel: "View All Projects" },
    ],
  },
  {
    label: "Contact",
    bgColor: "rgba(139, 92, 246, 0.2)",
    textColor: "#fff",
    links: [
      { label: "Email", href: "#contact", ariaLabel: "Go to Contact Section" },
      { label: "LinkedIn", href: "#contact", ariaLabel: "Go to Contact Section" },
      { label: "GitHub", href: "#contact", ariaLabel: "Go to Contact Section" },
    ],
  },
];

export default function CardNavClient() {
  useEffect(() => {
    // Initialize CSS variable
    document.documentElement.style.setProperty("--nav-height", "120px");
  }, []);

  const handleExpandedChange = (isExpanded: boolean, height: number) => {
    // Calculate padding: nav total height + consistent spacing below
    // When closed: nav is 60px, spacing is 60px, total = 120px
    // When expanded: nav is height, spacing is 60px, total = height + 60px
    const spacing = 60; // Space between nav bottom and content
    const paddingTop = height + spacing;
    document.documentElement.style.setProperty("--nav-height", `${paddingTop}px`);
  };

  return (
    <CardNav
      logo=""
      logoAlt="Subhiksha Seshadri Nallore"
      items={menuItems}
      baseColor="rgba(0, 0, 0, 0.7)"
      menuColor="#fff"
      buttonBgColor="rgba(139, 92, 246, 0.3)"
      buttonTextColor="#fff"
      ease="power3.out"
      className="backdrop-blur-md border border-white/10"
      onExpandedChange={handleExpandedChange}
    />
  );
}

