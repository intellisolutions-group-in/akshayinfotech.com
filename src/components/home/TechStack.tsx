"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const technologies = [
  {
    name: "React",
    glowColor: "rgba(14, 165, 233, 0.5)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
        <g stroke="#00d8ff" strokeWidth="1.1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    glowColor: "rgba(255, 255, 255, 0.4)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="white" />
        <path d="M149.508 157.52L69.142 54H54V126H65.117V70.8222L137.95 164.298C142.138 162.298 145.986 160.038 149.508 157.52Z" fill="black" />
        <path d="M115.2 54H126.317V126H115.2V54Z" fill="black" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    glowColor: "rgba(34, 197, 94, 0.5)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 256 256" fill="none">
        <path d="M128 25.586L46.883 72.414V166.07L128 212.898L209.117 166.07V72.414L128 25.586ZM128 2.372L227.172 59.628V174.156L128 231.412L28.828 174.156V59.628L128 2.372Z" fill="#339933" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    glowColor: "rgba(21, 128, 61, 0.5)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none">
        <path d="M11.956 0c0 0-4.996 4.975-4.996 9.877 0 5.485 3.328 8.647 4.996 11.233V0z" fill="#47A248" />
        <path d="M12.044 0c0 0 4.996 4.975 4.996 9.877 0 5.485-3.328 8.647-4.996 11.233V0z" fill="#439A45" />
      </svg>
    ),
  },
  {
    name: "AWS",
    glowColor: "rgba(245, 158, 11, 0.5)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 256 256" fill="none">
        <path d="M125.7 65.5C118.8 65.2 111.9 66.8 106 70.3C100.8 73.4 96.6 78 94.2 83.5C92.2 87.7 91.5 92.4 92.1 97C92.7 101.6 94.8 105.9 97.9 109.2C101.5 113.1 106.6 115.5 111.9 116C117.2 116.5 122.6 115.1 127 112.1L127 114.9C127.1 117.9 126.1 120.9 124.3 123.3C122.5 125.7 119.8 127.3 116.8 127.7C112.9 128.3 108.9 127.1 105.8 124.6C103.2 122.6 101.2 119.9 100.1 116.7L85 123C87.4 129.5 91.6 135.1 97.1 139.1C103.1 143.5 110.5 145.7 118 145.2C128.3 144.5 137.9 139.3 143.6 130.6C147.2 124.9 149.1 118.3 149 111.6L149 71.4C149.1 69.4 148.2 67.5 146.7 66.2C144.8 64.6 142.4 63.8 140 64.1L125.7 65.5Z" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: "Docker",
    glowColor: "rgba(29, 78, 216, 0.5)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none">
        <path d="M13.983 8.878h-2.164V6.714h2.164v2.164zm-2.435 0h-2.164V6.714h2.164v2.164zM8.835 8.878H6.671V6.714h2.164v2.164zm-2.435 0H4.236V6.714H6.4V8.878zm2.435-2.435H6.671V4.28h2.164v2.163zm2.435 0h-2.164V4.28h2.164v2.163zm0-2.435h-2.164V1.846h2.164v2.162zm2.435 4.87h-2.164V6.714h2.164v2.164zm2.435 0h-2.164V6.714h2.164v2.164z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "Flutter",
    glowColor: "rgba(6, 182, 212, 0.5)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 48 48" fill="none">
        <path d="M13 26.5L24 15.5H46L35 26.5L13 26.5Z" fill="#40C4FF" />
        <path d="M13 26.5L24 37.5L35 26.5L24 15.5L13 26.5Z" fill="#00B0FF" />
        <path d="M24 37.5L35 26.5L46 37.5L35 48.5L24 37.5Z" fill="#0081CB" />
      </svg>
    ),
  },
  {
    name: "Python",
    glowColor: "rgba(234, 179, 8, 0.5)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 48 48" fill="none">
        <path d="M24 2C16 2 12 6 12 12V18H24V20H8C4 20 2 24 2 28V36C2 42 6 46 12 46H16V40C16 36 20 34 24 34C28 34 32 36 32 40V46H36C42 46 46 42 46 36V28C46 24 44 20 40 20H28V18H36V12C36 6 32 2 24 2Z" fill="#3776AB" />
        <circle cx="18" cy="14" r="2" fill="white" />
        <circle cx="30" cy="34" r="2" fill="white" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    glowColor: "rgba(6, 182, 212, 0.5)",
    svg: (
      <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 54 33" fill="none">
        <path d="M27 0C36 0 41.25 4.5 42.75 13.5C36 20.25 29.25 21.75 22.5 18C18 15.5 15.75 14.25 12.75 14.25C6.75 14.25 3.375 17.625 2.625 24.375C9.375 17.625 16.125 16.125 22.875 19.875C27.375 22.375 29.625 23.625 32.625 23.625C38.625 23.625 42 20.25 42.75 13.5C41.25 22.5 36 27 27 27C18 27 12.75 22.5 11.25 13.5C18 6.75 24.75 5.25 31.5 9C36 11.5 38.25 12.75 41.25 12.75C47.25 12.75 50.625 9.375 51.375 2.625C44.625 9.375 37.875 10.875 31.125 7.125C26.625 4.625 24.375 3.375 21.375 3.375C15.375 3.375 12 6.75 11.25 13.5C12.75 4.5 18 0 27 0Z" fill="#38BDF8" />
      </svg>
    ),
  },
];

const CENTER_TEXTS = [
  { main: "POWERED BY\nMODERN\nTECHNOLOGIES", sub: "Core Stack", color: "#60A5FA" },
  { main: "TECH STACK\nACTIVATED", sub: "Deploying...", color: "#34D399" },
  { main: "POWERED BY\nMODERN\nTECHNOLOGIES", sub: "Core Stack", color: "#60A5FA" },
];

interface DataPacket {
  id: number;
  techIdx: number;
  progress: number;
  cos: number;
  sin: number;
}

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [orbitRadius, setOrbitRadius] = useState(250);
  const [activated, setActivated] = useState(false);
  const [pulseRing, setPulseRing] = useState(false);
  const [activatedTechs, setActivatedTechs] = useState<Set<number>>(new Set());
  const [packets, setPackets] = useState<DataPacket[]>([]);
  const [textPhase, setTextPhase] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(40);
  const packetRef = useRef<number>(0);
  const animFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setOrbitRadius(115);
      else if (window.innerWidth < 1024) setOrbitRadius(180);
      else setOrbitRadius(250);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCenterClick = useCallback(() => {
    setPulseRing(true);
    setActivated(true);
    setTextPhase(1);
    setActivatedTechs(new Set());
    setRotationSpeed(18);

    // Spawn packets for all techs
    const angles = technologies.map((_, idx) => (idx * 2 * Math.PI) / technologies.length);
    const newPackets: DataPacket[] = technologies.map((_, idx) => ({
      id: packetRef.current++,
      techIdx: idx,
      progress: 0,
      cos: Math.cos(angles[idx]),
      sin: Math.sin(angles[idx]),
    }));
    setPackets(newPackets);

    // Activate techs sequentially as packets arrive
    technologies.forEach((_, idx) => {
      setTimeout(() => {
        setActivatedTechs(prev => new Set([...prev, idx]));
      }, 600 + idx * 120);
    });

    // Reset text after 2.5s
    setTimeout(() => {
      setTextPhase(2);
      setRotationSpeed(40);
    }, 2500);
    setTimeout(() => {
      setTextPhase(0);
      setPulseRing(false);
      setActivated(false);
      setPackets([]);
      setActivatedTechs(new Set());
    }, 4000);
  }, []);

  // Animate packets
  useEffect(() => {
    if (packets.length === 0) return;
    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;
      setPackets(prev => prev.map(p => ({ ...p, progress: Math.min(1, p.progress + dt * 0.9) })));
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); lastTimeRef.current = 0; };
  }, [packets.length]);

  const currentText = CENTER_TEXTS[textPhase];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-slate-950 overflow-hidden border-y border-white/5"
      style={{ background: "radial-gradient(circle at center, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 1) 100%)" }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-indigo-500/5 blur-[120px] animate-pulse" style={{ animationDuration: "16s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title */}
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-white/40 mt-3"
          >
            Click the center node to activate the tech stack
          </motion.p>
        </div>

        {/* Orbit System */}
        <div
          className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[450px] md:h-[450px] lg:w-[580px] lg:h-[580px]"
          style={{ "--orbit-radius": `${orbitRadius}px` } as React.CSSProperties}
        >
          {/* Orbit paths */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="absolute rounded-full border border-dashed border-white/5" style={{ width: "calc(var(--orbit-radius) * 2)", height: "calc(var(--orbit-radius) * 2)" }} />
            <div className="absolute rounded-full border border-white/[0.015]" style={{ width: "calc(var(--orbit-radius) * 2.5)", height: "calc(var(--orbit-radius) * 2.5)" }} />
            <div className="absolute rounded-full border border-white/[0.02]" style={{ width: "calc(var(--orbit-radius) * 1.5)", height: "calc(var(--orbit-radius) * 1.5)" }} />
          </div>

          {/* Pulse ring on click */}
          <AnimatePresence>
            {pulseRing && (
              <>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0.8 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute rounded-full border-2 border-blue-400/60 pointer-events-none z-30"
                  style={{ width: 140, height: 140 }}
                />
                <motion.div
                  initial={{ scale: 0.5, opacity: 0.5 }}
                  animate={{ scale: 3, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                  className="absolute rounded-full border border-blue-300/30 pointer-events-none z-30"
                  style={{ width: 140, height: 140 }}
                />
              </>
            )}
          </AnimatePresence>

          {/* SVG for animated arrows + data packets */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="-290 -290 580 580">
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(96,165,250,0.6)" />
              </marker>
            </defs>
            {activated && technologies.map((tech, idx) => {
              const angle = (idx * 2 * Math.PI) / technologies.length;
              const cos = Math.cos(angle);
              const sin = Math.sin(angle);
              const tx = cos * orbitRadius;
              const ty = sin * orbitRadius;
              return (
                <g key={idx}>
                  {/* Arrow line */}
                  <motion.line
                    x1={0} y1={0} x2={tx} y2={ty}
                    stroke="rgba(96,165,250,0.25)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                  />
                </g>
              );
            })}

            {/* Data packets traveling outward */}
            {packets.map(p => {
              const tx = p.cos * orbitRadius;
              const ty = p.sin * orbitRadius;
              const x = p.progress * tx;
              const y = p.progress * ty;
              if (p.progress >= 0.95) return null;
              return (
                <circle key={p.id} cx={x} cy={y} r={4} fill="#60A5FA" opacity={0.9}
                  style={{ filter: "drop-shadow(0 0 6px #60A5FA)" }} />
              );
            })}
          </svg>

          {/* Rotating Orbit Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: rotationSpeed, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          >
            {technologies.map((tech, idx) => {
              const angle = (idx * 2 * Math.PI) / technologies.length;
              const cos = Math.cos(angle);
              const sin = Math.sin(angle);
              const isActivated = activatedTechs.has(idx);

              return (
                <div
                  key={tech.name}
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
                    transition={{ duration: rotationSpeed, ease: "linear", repeat: Infinity }}
                    className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900/60 border backdrop-blur-md transition-all duration-500 cursor-default"
                    style={{
                      borderColor: isActivated ? tech.glowColor : "rgba(255,255,255,0.1)",
                      boxShadow: isActivated ? `0 0 30px 6px ${tech.glowColor}, inset 0 0 12px rgba(255,255,255,0.05)` : "0 4px 12px rgba(0,0,0,0.25)",
                      transform: isActivated ? "scale(1.2)" : "scale(1)",
                    }}
                  >
                    {isActivated && (
                      <div className="absolute inset-0 rounded-full blur-md opacity-40" style={{ backgroundColor: tech.glowColor }} />
                    )}
                    <div className="relative z-10 shrink-0 transform scale-[0.8] md:scale-100 flex items-center justify-center">
                      {tech.svg}
                    </div>
                    {/* Tooltip */}
                    <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-950 border border-white/10 px-2 py-0.5 rounded text-[9px] font-bold text-slate-300 whitespace-nowrap shadow-md pointer-events-none transition-all duration-300 ${isActivated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
                      {tech.name}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Central Interactive Node */}
          <div className="absolute z-20 flex items-center justify-center">
            <motion.button
              onClick={handleCenterClick}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.93 }}
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center p-4 shadow-[0_0_50px_rgba(59,130,246,0.15)] cursor-pointer select-none overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]"
              style={{ outline: "none" }}
            >
              {/* Inner dashed ring */}
              <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
              {/* Core glow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={textPhase}
                  className="absolute inset-8 rounded-full blur-xl animate-pulse"
                  style={{ background: textPhase === 1 ? "rgba(52,211,153,0.15)" : "rgba(59,130,246,0.12)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={textPhase}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35 }}
                  className="z-10 flex flex-col items-center"
                >
                  <span
                    className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-1"
                    style={{ color: currentText.color }}
                  >
                    {currentText.sub}
                  </span>
                  <h3 className="text-[9px] sm:text-[10px] md:text-[11px] font-black text-white uppercase tracking-wider leading-snug whitespace-pre-line">
                    {currentText.main}
                  </h3>
                </motion.div>
              </AnimatePresence>

              {/* Click hint ring */}
              {!activated && (
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping" style={{ animationDuration: "2.5s" }} />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
