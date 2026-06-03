"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "Who We Are" },
  { id: "services", label: "Services" },
  { id: "why-partner", label: "Why Partner" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function ScrollProgressTimeline() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const observers = sections.map((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sec.id);
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px", // Trigger when the section occupies the center of the viewport
          threshold: 0,
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const progressPercent = (activeIndex / (sections.length - 1)) * 100;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end pointer-events-none select-none">
      <div className="relative flex flex-col items-center gap-7 py-4 px-3 rounded-full bg-slate-900/10 dark:bg-white/5 backdrop-blur-md border border-slate-200/30 dark:border-white/10 pointer-events-auto shadow-2xl">
        
        {/* Track Line */}
        <div className="absolute w-[2px] bg-slate-300/30 dark:bg-white/10 top-6 bottom-6 left-1/2 -translate-x-1/2 z-0 rounded-full" />
        
        {/* Filled Progress Line */}
        <motion.div
          className="absolute w-[2px] bg-gradient-to-b from-blue-500 to-indigo-500 left-1/2 -translate-x-1/2 top-6 z-0 rounded-full shadow-[0_0_8px_#3b82f6]"
          style={{ height: `${progressPercent}%`, maxHeight: "calc(100% - 48px)" }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
        />

        {/* Section Dots */}
        {sections.map((sec, idx) => {
          const isActive = sec.id === activeSection;
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={sec.id}
              className="relative flex items-center justify-center h-4 w-4 cursor-pointer group"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => handleScrollTo(sec.id)}
            >
              {/* Dot Element */}
              <motion.div
                className={`relative z-10 h-2 w-2 rounded-full transition-colors duration-300 ${
                  isActive
                    ? "bg-blue-500 shadow-[0_0_12px_#3b82f6]"
                    : "bg-slate-400/60 dark:bg-white/30 group-hover:bg-slate-600 dark:group-hover:bg-white/70"
                }`}
                animate={{
                  scale: isActive ? 1.5 : isHovered ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Glowing ring around active/hovered dot */}
              {isActive && (
                <motion.div
                  layoutId="activeGlow"
                  className="absolute h-5 w-5 rounded-full border border-blue-500/40 bg-blue-500/5 -z-10"
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.6, 1, 0.6] }}
                  style={{ originX: 0.5, originY: 0.5 }}
                />
              )}

              {/* Tooltip Label */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: -14, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-full mr-2 px-3 py-1.5 rounded-lg border text-[10px] font-bold tracking-wider uppercase whitespace-nowrap backdrop-blur-md shadow-xl pointer-events-none
                      bg-white/90 border-slate-100 text-slate-800 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-200"
                  >
                    {sec.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
