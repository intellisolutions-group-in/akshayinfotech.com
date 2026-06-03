"use client";

import React, { useRef, useState, useEffect } from "react";
import { Rocket, ShieldCheck, Network, BarChart3, HeartHandshake, Globe, Check, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

// Custom SVG Visual Panels for each card to provide a high-fidelity SaaS vibe
function FastExecutionVisual({ isActive }: { isActive: boolean }) {
  return (
    <svg className="w-full h-full px-4" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 H200 M0 40 H200 M0 60 H200 M40 0 V80 M80 0 V80 M120 0 V80 M160 0 V80" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
      <path d="M20 50 Q70 20, 120 50 T180 30" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="3" strokeLinecap="round" />
      <motion.path
        d="M20 50 Q70 20, 120 50 T180 30"
        stroke="url(#fastGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="20" cy="50" r="4"
        fill="#3b82f6"
        animate={isActive ? {
          cx: [20, 180, 20],
          cy: [50, 30, 50]
        } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="fastGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SecurityVisual({ isActive }: { isActive: boolean }) {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 H200 M0 40 H200 M0 60 H200 M40 0 V80 M80 0 V80 M120 0 V80 M160 0 V80" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
      <circle cx="60" cy="40" r="5" fill="#0f172a" stroke="rgba(255,255,255,0.15)" />
      <circle cx="140" cy="40" r="5" fill="#0f172a" stroke="rgba(255,255,255,0.15)" />
      <path d="M65 40 H135" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="4 4" />
      <motion.path
        d="M100 22 C115 22, 120 28, 120 40 C120 52, 107 58, 100 62 C93 58, 80 52, 80 40 C80 28, 85 22, 100 22 Z"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="rgba(59, 130, 246, 0.03)"
        animate={isActive ? {
          stroke: ["#3b82f6", "#10b981", "#3b82f6"],
          fill: ["rgba(59,130,246,0.03)", "rgba(16,185,129,0.03)", "rgba(59,130,246,0.03)"]
        } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <circle cx="100" cy="40" r="3" fill="#3b82f6" />
    </svg>
  );
}

function ScalableVisual({ isActive }: { isActive: boolean }) {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 H200 M0 40 H200 M0 60 H200 M40 0 V80 M80 0 V80 M120 0 V80 M160 0 V80" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
      <path d="M40 40 H70 M130 40 H160 M70 40 L100 20 M70 40 L100 40 M70 40 L100 60 M130 40 L100 20 M130 40 L100 40 M130 40 L100 60" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="4" fill="#3b82f6" />
      <circle cx="160" cy="40" r="4" fill="#8b5cf6" />
      <motion.circle cx="100" cy="20" r="3" fill="#3b82f6" animate={isActive ? { r: [3, 5, 3] } : {}} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.circle cx="100" cy="40" r="3" fill="#6366f1" animate={isActive ? { r: [3, 5, 3] } : {}} transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }} />
      <motion.circle cx="100" cy="60" r="3" fill="#8b5cf6" animate={isActive ? { r: [3, 5, 3] } : {}} transition={{ duration: 1.5, delay: 1, repeat: Infinity }} />
    </svg>
  );
}

function DataVisual({ isActive }: { isActive: boolean }) {
  return (
    <svg className="w-full h-full px-4" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 H200 M0 40 H200 M0 60 H200 M40 0 V80 M80 0 V80 M120 0 V80 M160 0 V80" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
      <path d="M20 60 L50 50 L80 55 L110 30 L140 40 L180 15" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="2" />
      <motion.path
        d="M20 60 L50 50 L80 55 L110 30 L140 40 L180 15"
        stroke="#8b5cf6"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <path d="M20 60 L50 40 L80 30 L110 45 L140 25 L180 10" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="2" />
      <motion.path
        d="M20 60 L50 40 L80 30 L110 45 L140 25 L180 10"
        stroke="#3b82f6"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <circle cx="180" cy="10" r="3" fill="#3b82f6" />
    </svg>
  );
}

function SupportVisual({ isActive }: { isActive: boolean }) {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 H200 M0 40 H200 M0 60 H200 M40 0 V80 M80 0 V80 M120 0 V80 M160 0 V80" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
      <path d="M10 40 H60 L70 20 L80 60 L90 10 L100 50 L110 40 H190" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="2.5" />
      <motion.path
        d="M10 40 H60 L70 20 L80 60 L90 10 L100 50 L110 40 H190"
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="180" cy="40" r="3.5" fill="#10b981" />
    </svg>
  );
}

function InnovationVisual({ isActive }: { isActive: boolean }) {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 H200 M0 40 H200 M0 60 H200 M40 0 V80 M80 0 V80 M120 0 V80 M160 0 V80" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
      <rect x="75" y="15" width="50" height="50" rx="8" fill="#0f172a" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
      <motion.rect
        x="85" y="25" width="30" height="30" rx="4"
        fill="rgba(139, 92, 246, 0.05)"
        stroke="#8b5cf6"
        strokeWidth="2"
        animate={isActive ? {
          stroke: ["#8b5cf6", "#3b82f6", "#8b5cf6"],
          scale: [1, 1.05, 1]
        } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M75 25 H65 M75 35 H65 M75 45 H65 M75 55 H65 M125 25 H135 M125 35 H135 M125 45 H135 M125 55 H135 M85 15 V5 M95 15 V5 M105 15 V5 M115 15 V5 M85 65 V75 M95 65 V75 M105 65 V75 M115 65 V75" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
    </svg>
  );
}

const cards = [
  {
    number: "01",
    title: "Fast Execution",
    icon: Rocket,
    desc: "Deliver enterprise solutions efficiently while maintaining quality and scalability.",
    features: ["Agile 2-week sprints", "Automatic CI/CD pipelines", "Interactive feature staging"],
    accent: "rgba(59, 130, 246, 0.2)",
    iconBg: "rgba(59, 130, 246, 0.08)",
    iconColor: "#3b82f6",
    ctaText: "Our Process",
    ctaHref: "/company/process",
    visualPanel: <FastExecutionVisual isActive={false} /> // Inject dynamically
  },
  {
    number: "02",
    title: "Enterprise Security",
    icon: ShieldCheck,
    desc: "Rigorous endpoint encryption, SOC2 compliance patterns, and absolute data protection.",
    features: ["Endpoint TLS/SSL encryption", "Regular penetration tests", "GDPR & SOC2 compliance"],
    accent: "rgba(16, 185, 129, 0.2)",
    iconBg: "rgba(16, 185, 129, 0.08)",
    iconColor: "#10b981",
    ctaText: "Security Specs",
    ctaHref: "/services/cyber-security",
    visualPanel: <SecurityVisual isActive={false} />
  },
  {
    number: "03",
    title: "Scalable Architecture",
    icon: Network,
    desc: "Dynamic server clustering and stateless backends engineered to support millions of requests.",
    features: ["Stateless Kubernetes pods", "Database read replicas", "Auto-scaling thresholds"],
    accent: "rgba(99, 102, 241, 0.2)",
    iconBg: "rgba(99, 102, 241, 0.08)",
    iconColor: "#6366f1",
    ctaText: "Architecture Specs",
    ctaHref: "/services/web-development",
    visualPanel: <ScalableVisual isActive={false} />
  },
  {
    number: "04",
    title: "Data-Driven Strategy",
    icon: BarChart3,
    desc: "Leverage advanced telemetry, telemetry logging, and user analytics to make strategic decisions.",
    features: ["Advanced telemetry logging", "Real-time user dashboards", "Automated marketing reports"],
    accent: "rgba(139, 92, 246, 0.2)",
    iconBg: "rgba(139, 92, 246, 0.08)",
    iconColor: "#8b5cf6",
    ctaText: "Tech Ecosystem",
    ctaHref: "/company/ecosystem",
    visualPanel: <DataVisual isActive={false} />
  },
  {
    number: "05",
    title: "Dedicated Support",
    icon: HeartHandshake,
    desc: "Real-time incident response, proactive systems auditing, and direct communication lines.",
    features: ["Incident response under 15m", "Proactive system audits", "Direct engineer access"],
    accent: "rgba(59, 130, 246, 0.2)",
    iconBg: "rgba(59, 130, 246, 0.08)",
    iconColor: "#3b82f6",
    ctaText: "Contact Support",
    ctaHref: "/contact",
    visualPanel: <SupportVisual isActive={false} />
  },
  {
    number: "06",
    title: "Innovation Focus",
    icon: Globe,
    desc: "Integrating international compliance, high-availability multi-region hosting, and localization.",
    features: ["Multi-region hosting nodes", "GDPR/HIPAA compliance", "Localization features"],
    accent: "rgba(139, 92, 246, 0.2)",
    iconBg: "rgba(139, 92, 246, 0.08)",
    iconColor: "#8b5cf6",
    ctaText: "Ecosystem Specs",
    ctaHref: "/company/ecosystem",
    visualPanel: <InnovationVisual isActive={false} />
  }
];

function WhyPartnerHorizontalCard({
  card,
  index,
  isActive
}: {
  card: typeof cards[0];
  index: number;
  isActive: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsDesktop(window.innerWidth >= 1024);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Mouse tracking values for subtle 3D tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 25 });
  const lightX = useSpring(useTransform(mx, [0, 1], [0, 100]), { stiffness: 200, damping: 25 });
  const lightY = useSpring(useTransform(my, [0, 1], [0, 100]), { stiffness: 200, damping: 25 });

  const specularBg = useTransform(
    [lightX, lightY],
    ([lx, ly]) => `radial-gradient(circle at ${lx}% ${ly}%, rgba(255, 255, 255, 0.12) 0%, transparent 65%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mx.set(0.5);
    my.set(0.5);
  };

  const Icon = card.icon;

  // Render the corresponding visual panel with its active state passed
  const renderVisual = () => {
    switch (index) {
      case 0: return <FastExecutionVisual isActive={isActive} />;
      case 1: return <SecurityVisual isActive={isActive} />;
      case 2: return <ScalableVisual isActive={isActive} />;
      case 3: return <DataVisual isActive={isActive} />;
      case 4: return <SupportVisual isActive={isActive} />;
      case 5: return <InnovationVisual isActive={isActive} />;
      default: return null;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      animate={{
        scale: isActive ? (isHovered ? 1.04 : 1.01) : 0.95,
        opacity: isActive ? 1 : 0.35,
        y: isActive ? -12 : 0,
      }}
      className="relative rounded-3xl p-[1.5px] w-[320px] md:w-[600px] h-[480px] md:h-[390px] transition-all duration-750 ease-out shrink-0 select-none cursor-pointer"
      style={{
        perspective: 1000,
        background: isActive 
          ? "linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(124, 58, 237, 0.4))"
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))",
        boxShadow: isActive
          ? `0 30px 60px -15px ${card.accent}, 0 0 40px -5px rgba(59, 130, 246, 0.15)`
          : "0 10px 30px -10px rgba(0,0,0,0.5)",
      }}
    >
      {/* 3D tilt surface */}
      <motion.div
        style={{
          rotateX: isDesktop && isActive ? rotateX : 0,
          rotateY: isDesktop && isActive ? rotateY : 0,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-full rounded-[22px] bg-slate-900/90 backdrop-blur-2xl p-6 md:p-8 z-10 border border-white/5 flex flex-col justify-between overflow-hidden"
      >
        {/* Specular Glow Reflection */}
        {isDesktop && isActive && (
          <motion.div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-[22px]"
            style={{
              opacity: isHovered ? 1 : 0,
              background: specularBg
            }}
          />
        )}

        {/* Watermark Index Number */}
        <span
          className="absolute top-4 right-6 text-6xl md:text-7xl font-black font-mono select-none pointer-events-none transition-colors duration-500"
          style={{
            color: isActive ? "rgba(59, 130, 246, 0.06)" : "rgba(255, 255, 255, 0.02)",
          }}
        >
          {card.number}
        </span>

        {/* Card Internal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start h-full">
          {/* Left Column: Core Description & Badge */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={isActive ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-12 w-12 rounded-2xl flex items-center justify-center border transition-all duration-500"
                  style={{
                    background: card.iconBg,
                    borderColor: isActive ? "rgba(59, 130, 246, 0.3)" : "rgba(255, 255, 255, 0.1)",
                    color: card.iconColor
                  }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <span className="text-[10px] font-bold text-blue-400 tracking-wider uppercase">Benefit {card.number}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{card.title}</h3>
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>

            {card.ctaText && card.ctaHref && (
              <div className="pt-2">
                <Link
                  href={card.ctaHref}
                  className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300 tracking-wider uppercase group/btn"
                >
                  {card.ctaText}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Custom Visual Panel */}
          <div className="h-full flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
            <div className="w-full h-full flex flex-col justify-center gap-4">
              
              {/* Animated Interactive SVG Tech Panel */}
              <div className="w-full h-[120px] rounded-xl bg-slate-950/80 border border-white/5 flex items-center justify-center relative overflow-hidden">
                {renderVisual()}
              </div>

              {/* Key Features details */}
              <ul className="space-y-2">
                {card.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 font-medium">
                    <Check className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Set desktop state
  useEffect(() => {
    const checkViewport = () => setIsDesktop(window.innerWidth >= 1024);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Compute scroll horizontal range dynamically
  useEffect(() => {
    const calculateRange = () => {
      if (trackRef.current) {
        const range = trackRef.current.scrollWidth - window.innerWidth;
        setScrollRange(range > 0 ? range : 0);
      }
    };

    calculateRange();
    const timer = setTimeout(calculateRange, 500);

    window.addEventListener("resize", calculateRange);
    return () => {
      window.removeEventListener("resize", calculateRange);
      clearTimeout(timer);
    };
  }, []);

  // Set up Framer Motion scroll binding
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Smooth spring physics for the horizontal scroll translation
  const transformX = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);
  const x = useSpring(transformX, { stiffness: 100, damping: 20 });

  // Update active index based on scroll offset progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * cards.length),
      cards.length - 1
    );
    setActiveIndex(index);
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-slate-950 text-white overflow-visible">
      {/* Sticky container that keeps section in viewport during scroll-storytelling */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 md:py-16 overflow-hidden z-10">
        
        {/* Subtle, HUGE Faded Floating Typography Background Branding */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <motion.h1
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -10, 10, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-[14vw] font-black text-white/[0.02] tracking-[0.15em] uppercase whitespace-nowrap"
          >
            NEXORA TECHNOLOGIES
          </motion.h1>
        </div>

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 tracking-widest uppercase bg-blue-950/40 border border-blue-900/30 px-4 py-1.5 rounded-full mb-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Storytelling Carousel
            </motion.span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Partner With{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Nexora Technologies
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Scroll down to walk through our core architectural metrics, rapid pipeline delivery structures, and system security frameworks.
          </p>
        </div>

        {/* Horizontal Sliding Carousel Track */}
        <div className="w-full overflow-hidden my-auto z-10">
          <motion.div
            ref={trackRef}
            style={{ 
              x,
              paddingLeft: isDesktop ? "calc(50vw - 300px)" : "calc(50vw - 160px)",
              paddingRight: isDesktop ? "calc(50vw - 300px)" : "calc(50vw - 160px)"
            }}
            className="flex gap-8 w-max py-8 items-center"
          >
            {cards.map((card, idx) => (
              <WhyPartnerHorizontalCard
                key={card.title}
                card={card}
                index={idx}
                isActive={activeIndex === idx}
              />
            ))}
          </motion.div>
        </div>

        {/* Storytelling Progress Indicator & Nav dots */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center gap-4">
          
          {/* Active Card Label */}
          <div className="text-center">
            <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
              Benefit {cards[activeIndex].number} of {cards.length}
            </span>
            <h4 className="text-xs font-bold text-blue-400 tracking-wide mt-1">
              {cards[activeIndex].title}
            </h4>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (containerRef.current) {
                    const sectionTop = containerRef.current.offsetTop;
                    const sectionHeight = containerRef.current.scrollHeight - window.innerHeight;
                    const targetScroll = sectionTop + (idx / (cards.length - 1)) * sectionHeight;
                    window.scrollTo({
                      top: targetScroll,
                      behavior: "smooth"
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeIndex === idx 
                    ? "w-8 bg-blue-500" 
                    : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
