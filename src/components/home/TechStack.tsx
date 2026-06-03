"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    glowColor: "rgba(255, 255, 255, 0.15)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="white" />
        <path d="M149.508 157.52L69.142 54H54V126H65.117V70.8222L137.95 164.298C142.138 162.298 145.986 160.038 149.508 157.52Z" fill="black" />
        <path d="M115.2 54H126.317V126H115.2V54Z" fill="black" />
      </svg>
    ),
  },
  {
    name: "React",
    glowColor: "rgba(14, 165, 233, 0.25)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff"/>
        <g stroke="#00d8ff" strokeWidth="1.1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    glowColor: "rgba(37, 99, 235, 0.25)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#3178C6" rx="12" />
        <path d="M56.8 69.8H65.3V82.7C62.7 83.6 59.8 84.1 56.6 84.1C47.2 84.1 41.7 78.4 41.7 69.2C41.7 59.7 48 53.8 57.5 53.8C60.4 53.8 62.8 54.3 64.7 55.1V67.8H56.5V62.4C55.3 61.9 53.9 61.7 52.4 61.7C48.6 61.7 46.1 64.2 46.1 69C46.1 73.7 48.7 76.1 52.5 76.1C54.1 76.1 55.6 75.8 56.8 75.3V69.8ZM74.5 54.6H84V63.5H74.5V77.7C74.5 79.4 75.3 80.1 76.8 80.1C77.9 80.1 78.9 79.9 79.6 79.6V83.6C78.4 84.1 76.7 84.3 75 84.3C70.6 84.3 68.6 81.8 68.6 77.2V63.5H62.9V54.6H68.6V44H74.5V54.6Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    glowColor: "rgba(6, 182, 212, 0.25)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 0C36 0 41.25 4.5 42.75 13.5C36 20.25 29.25 21.75 22.5 18C18 15.5 15.75 14.25 12.75 14.25C6.75 14.25 3.375 17.625 2.625 24.375C9.375 17.625 16.125 16.125 22.875 19.875C27.375 22.375 29.625 23.625 32.625 23.625C38.625 23.625 42 20.25 42.75 13.5C41.25 22.5 36 27 27 27C18 27 12.75 22.5 11.25 13.5C18 6.75 24.75 5.25 31.5 9C36 11.5 38.25 12.75 41.25 12.75C47.25 12.75 50.625 9.375 51.375 2.625C44.625 9.375 37.875 10.875 31.125 7.125C26.625 4.625 24.375 3.375 21.375 3.375C15.375 3.375 12 6.75 11.25 13.5C12.75 4.5 18 0 27 0Z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    glowColor: "rgba(34, 197, 94, 0.25)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 25.586L46.883 72.414V166.07L128 212.898L209.117 166.07V72.414L128 25.586ZM128 2.372L227.172 59.628V174.156L128 231.412L28.828 174.156V59.628L128 2.372Z" fill="#339933" />
        <path d="M128 41.606L60.916 80.334V157.792L128 196.52L195.084 157.792V80.334L128 41.606Z" fill="#339933" />
      </svg>
    ),
  },
  {
    name: "Docker",
    glowColor: "rgba(29, 78, 216, 0.25)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.983 8.878h-2.164V6.714h2.164v2.164zm-2.435 0h-2.164V6.714h2.164v2.164zM8.835 8.878H6.671V6.714h2.164v2.164zm-2.435 0H4.236V6.714H6.4V8.878zm2.435-2.435H6.671V4.28h2.164v2.163zm2.435 0h-2.164V4.28h2.164v2.163zm0-2.435h-2.164V1.846h2.164v2.162zm2.435 4.87h-2.164V6.714h2.164v2.164zm2.435 0h-2.164V6.714h2.164v2.164zM23.99 12.38c-.104-.373-.41-.663-.787-.76-1.127-.29-2.073-.91-2.82-1.846-.763-.96-1.222-2.165-1.37-3.606-.024-.237-.168-.45-.382-.557-.215-.107-.472-.093-.674.037-.92.597-2.106.907-3.528.922h-.059v2.553h.007c.003 4.148-3.037 7.55-6.776 7.55-.313 0-.61-.02-.9-.059V9.593H2.073V22.15h.352c6.21 0 11.26-4.582 11.832-10.457h8.868c.356 0 .68-.21.82-.54l.047-.17z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "AWS",
    glowColor: "rgba(245, 158, 11, 0.25)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M125.7 65.5C118.8 65.2 111.9 66.8 106 70.3C100.8 73.4 96.6 78 94.2 83.5C92.2 87.7 91.5 92.4 92.1 97C92.7 101.6 94.8 105.9 97.9 109.2C101.5 113.1 106.6 115.5 111.9 116C117.2 116.5 122.6 115.1 127 112.1L127 114.9C127.1 117.9 126.1 120.9 124.3 123.3C122.5 125.7 119.8 127.3 116.8 127.7C112.9 128.3 108.9 127.1 105.8 124.6C103.2 122.6 101.2 119.9 100.1 116.7L85 123C87.4 129.5 91.6 135.1 97.1 139.1C103.1 143.5 110.5 145.7 118 145.2C128.3 144.5 137.9 139.3 143.6 130.6C147.2 124.9 149.1 118.3 149 111.6L149 71.4C149.1 69.4 148.2 67.5 146.7 66.2C144.8 64.6 142.4 63.8 140 64.1L125.7 65.5Z" fill="#FF9900" />
        <path d="M83.4 186.2C111.6 205 148 205.6 176.7 187.8C179.3 186.2 182.7 186.8 184.5 189.3L196 205.5C197.8 208.1 197.1 211.6 194.5 213.3C155.6 238.6 104.7 238.7 65.7 213.5C63 211.7 62.3 208.2 64.1 205.6L75.6 189.4C77.4 186.8 80.8 186.2 83.4 186.2Z" fill="#FF9900" />
        <path d="M192 174C188.5 173.8 185.3 175.5 183.7 178.6C181.7 182.4 182.1 187.1 184.8 190.5L194.8 202.9C196.4 204.9 199.1 205.8 201.7 205.1C204.3 204.4 206.3 202.3 206.7 199.7L209 181.8C209.4 178.3 207.1 175.1 203.6 174.4C202.7 174.2 201.7 174.2 200.8 174.4L192 174Z" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    glowColor: "rgba(21, 128, 61, 0.25)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.956 0c0 0-4.996 4.975-4.996 9.877 0 5.485 3.328 8.647 4.996 11.233V0z" fill="#47A248" />
        <path d="M12.044 0c0 0 4.996 4.975 4.996 9.877 0 5.485-3.328 8.647-4.996 11.233V0z" fill="#439A45" />
        <path d="M12.002 21.11v2.89c0 0-.895-1.077-.895-2.029h.895z" fill="#3F3F3F" />
        <path d="M12.002 21.11v2.89c0 0 .895-1.077 .895-2.029h-.895z" fill="#3F3F3F" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    glowColor: "rgba(51, 103, 145, 0.25)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M375.8 201.2c-5.8-11.2-18-20.4-30.8-24.8-14.4-5-30.6-7.8-45.8-11.4-6.8-1.6-13.8-3.4-20.4-6V87c12.8 6.4 27.2 9 40.6 5.4 15.8-4.2 25.8-17.4 26.4-35.6.4-14.6-5.8-27.8-16.6-34-10-5.8-22-6.2-33.4-3.6-5.8 1.4-11.4 3.6-17.2 6v64.6c2.8-.4 5.6-.6 8.4-.6 28.4 0 51.4 23 51.4 51.4 0 8.8-2.2 17.2-6.2 24.6 9.6-3.6 17.6-10.6 22.4-20.2.8-1.6 1.8-3.2 2-4.8 1.6-11.2 2.2-22.4.6-33.6-3.8-24.8-20-44-43.6-50.6-26.6-7.4-53.8 4.2-66.2 28.2-5 10.2-6.8 21.6-6.6 33v216c-18.4-11-30.4-31.2-30.4-54v-18c0-21.2-17.2-38.4-38.4-38.4H28.4C12.8 190.2 0 203 0 218.6v18c0 53.6 43.4 97 97 97 19.8 0 38-6 53.2-16.2 9 3 18.2 5.4 27.6 7 34 5.8 69.2-8.6 88-35.6 10.4-15 16-32.4 16-50.6 0-3-.2-6-.6-9-2.2 20.8-10.2 39.6-23.4 53.8-7 11.2-21.6 16.8-35.2 21-13.8 4.2-29.2 6.6-43.6 9.6-6.8 1.4-13.6 2.8-20.2 4.8V290c8-4 17.6-5.4 26.2-3.6 11.2 2.4 18.4 11.4 18.8 23 .2 9.2-3.6 17.6-10.4 21.6-6.4 3.8-14 4-21.2 2.4-3.6-1-7.2-2.4-10.8-3.8v41.6c18.4 7.2 30.4 24.8 30.4 44.8v18c0 21.2 17.2 38.4 38.4 38.4h68.6c15.6 0 28.4-12.8 28.4-28.4v-18c0-53.6-43.4-97-97-97" fill="#336791" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    glowColor: "rgba(236, 72, 153, 0.25)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h128l128 128H128L0 0z" fill="url(#motionGrad)" />
        <path d="M128 128h128L128 256H0l128-128z" fill="url(#motionGrad)" />
        <path d="M0 128h128L0 256V128z" fill="url(#motionGrad)" />
        <defs>
          <linearGradient id="motionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff0055" />
            <stop offset="100%" stopColor="#7700ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  }
];

interface TechOrbitBadgeProps {
  tech: typeof technologies[0];
  cos: number;
  sin: number;
}

function TechOrbitBadge({ tech, cos, sin }: TechOrbitBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${cos} * var(--orbit-radius))`,
        top: `calc(50% + ${sin} * var(--orbit-radius))`,
        transform: "translate(-50%, -50%)",
        pointerEvents: "auto",
      }}
    >
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900/60 border border-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/20 cursor-pointer"
        style={{
          boxShadow: isHovered 
            ? `0 0 25px 4px ${tech.glowColor}, inset 0 0 8px rgba(255,255,255,0.05)` 
            : "0 4px 12px rgba(0,0,0,0.25)",
          scale: isHovered ? 1.15 : 1,
        }}
      >
        {isHovered && (
          <div 
            className="absolute inset-0 rounded-full blur-md opacity-35"
            style={{ backgroundColor: tech.glowColor }}
          />
        )}

        <div className="relative z-10 shrink-0 transform scale-[0.8] md:scale-100 flex items-center justify-center">
          {tech.svg}
        </div>

        <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-950 border border-white/10 px-2 py-0.5 rounded text-[9px] font-bold text-slate-300 whitespace-nowrap shadow-md pointer-events-none transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}>
          {tech.name}
        </div>
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [orbitRadius, setOrbitRadius] = useState(250);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOrbitRadius(115);
      } else if (window.innerWidth < 1024) {
        setOrbitRadius(180);
      } else {
        setOrbitRadius(250);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 bg-slate-950 overflow-hidden border-y border-white/5"
      style={{
        background: "radial-gradient(circle at center, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 1) 100%)"
      }}
    >
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-indigo-500/5 blur-[120px] animate-pulse" style={{ animationDuration: "16s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title / Heading */}
        <div className="text-center mb-16 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 tracking-widest uppercase bg-blue-950/40 border border-blue-900/30 px-4 py-1.5 rounded-full mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Tech Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
          >
            Our Advanced Technological Stack
          </motion.h2>
        </div>

        {/* Orbit System Wrapper */}
        <div 
          className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[450px] md:h-[450px] lg:w-[580px] lg:h-[580px]"
          style={{
            ["--orbit-radius" as any]: `${orbitRadius}px`,
          }}
        >
          {/* Orbit paths (visual astronomical lines) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            {/* Main orbit path */}
            <div 
              className="absolute rounded-full border border-dashed border-white/5"
              style={{
                width: "calc(var(--orbit-radius) * 2)",
                height: "calc(var(--orbit-radius) * 2)"
              }}
            />
            {/* Outer decorative ring */}
            <div 
              className="absolute rounded-full border border-white/[0.015]"
              style={{
                width: "calc(var(--orbit-radius) * 2.5)",
                height: "calc(var(--orbit-radius) * 2.5)"
              }}
            />
            {/* Inner decorative ring */}
            <div 
              className="absolute rounded-full border border-white/[0.02]"
              style={{
                width: "calc(var(--orbit-radius) * 1.5)",
                height: "calc(var(--orbit-radius) * 1.5)"
              }}
            />
          </div>

          {/* Rotating Orbit Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity
            }}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          >
            {technologies.map((tech, idx) => {
              const angle = (idx * 2 * Math.PI) / technologies.length;
              const cos = Math.cos(angle);
              const sin = Math.sin(angle);

              return (
                <TechOrbitBadge
                  key={tech.name}
                  tech={tech}
                  cos={cos}
                  sin={sin}
                />
              );
            })}
          </motion.div>

          {/* Central Pinned Glassmorphic Circle */}
          <div className="absolute z-20 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center p-4 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden select-none">
              {/* Inner glowing dot circle */}
              <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
              {/* Soft purple core glow */}
              <div className="absolute inset-8 rounded-full bg-blue-500/10 blur-xl animate-pulse" />

              <span className="text-[8px] md:text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-1 z-10">
                Core Stack
              </span>
              <h3 className="text-[10px] sm:text-xs md:text-sm font-black text-white uppercase tracking-wider leading-snug z-10">
                Powered By<br />
                Modern<br />
                Technologies
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
