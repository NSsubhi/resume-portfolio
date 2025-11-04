"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("#home");

  // Track hash to set active item on navigation
  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash || "#home";
      setActive(h);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const items = useMemo(() => NAV_ITEMS, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="#home" className="font-semibold tracking-tight text-white">
          YourName
        </Link>

        <div className="rounded-full border border-white/10 bg-white/5 p-1">
          <ul className="relative flex items-center gap-1">
            {items.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 z-0 rounded-full bg-white/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.6 }}
                    />
                  )}
                  <Link
                    href={item.href}
                    onClick={() => setActive(item.href)}
                    onMouseEnter={() => setActive(item.href)}
                    className={
                      "relative z-10 block rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}


