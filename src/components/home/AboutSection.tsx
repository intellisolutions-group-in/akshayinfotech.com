"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  Target, Eye, ShieldCheck, TrendingUp, Users, Award, Lightbulb,
  Eye as EyeIcon, Lock, Star, Handshake, Heart, Zap, Globe, Cpu,
  CheckCircle2, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const missionHighlights = [
  { icon: Cpu, label: "Enterprise Software Engineering", color: "#2563EB" },
  { icon: Zap, label: "AI-Powered Innovation", color: "#7C3AED" },
  { icon: Lock, label: "Secure Cloud Infrastructure", color: "#059669" },
  { icon: Globe, label: "Scalable Digital Platforms", color: "#0891B2" },
];

const visionTimeline = [
  { year: "2024", title: "AI-First Foundation", desc: "Embedding generative AI into every enterprise workflow we build." },
  { year: "2025", title: "Automation at Scale", desc: "End-to-end automation pipelines reducing manual overhead by 70%." },
  { year: "2026", title: "Global Technology Leadership", desc: "Recognized among the top 50 enterprise software firms globally." },
  { year: "2027+", title: "Emerging Technologies", desc: "Quantum computing readiness, spatial computing, and neural interfaces." },
];

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    color: "#F59E0B",
    desc: "We embrace cutting-edge technologies and creative problem-solving to deliver solutions that are ahead of the curve. Innovation is not a department—it's our operating system, embedded in every line of code and design decision.",
  },
  {
    icon: EyeIcon,
    title: "Transparency",
    color: "#3B82F6",
    desc: "Honest communication and clear reporting at every phase of the project. Our clients always know exactly where their investment stands—no hidden costs, no vague timelines, and no technical jargon that obscures progress.",
  },
  {
    icon: Lock,
    title: "Security",
    color: "#EF4444",
    desc: "Security is architected from day one, not bolted on afterward. Zero-trust architectures, end-to-end encryption, and continuous penetration testing ensure that your data and your customers' trust are never compromised.",
  },
  {
    icon: Star,
    title: "Excellence",
    color: "#8B5CF6",
    desc: "We hold ourselves to the highest standard of engineering craftsmanship. Every component is reviewed, tested, and refined until it meets our definition of production-ready: performant, accessible, maintainable, and scalable.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    color: "#059669",
    desc: "Great software is built by great teams working together. We partner closely with clients throughout discovery, design, and delivery—treating your product goals as our own and involving you in every meaningful technical decision.",
  },
  {
    icon: Heart,
    title: "Customer Success",
    color: "#EC4899",
    desc: "Your success is our only success metric. We go beyond launch day with dedicated post-deployment support, performance monitoring, and iterative improvements designed to maximize your ROI long after the project ships.",
  },
];

const tabs = [
  { key: "mission", label: "Mission", icon: Target, color: "#2563EB" },
  { key: "vision", label: "Vision", icon: Eye, color: "#7C3AED" },
  { key: "values", label: "Core Values", icon: ShieldCheck, color: "#059669" },
];

const stats = [
  { icon: TrendingUp, value: "80+", label: "Projects Delivered", color: "#2563EB" },
  { icon: Users, value: "25+", label: "Expert Engineers", color: "#7C3AED" },
  { icon: Award, value: "99.8%", label: "Client Retention", color: "#059669" },
];

function AnimatedCounter({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = (target / (duration / step));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

function MissionTab() {
  return (
    <motion.div
      key="mission"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="space-y-5"
    >
      <h3 className="text-xl font-black text-slate-900 tracking-tight">Our Mission</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        Akshay Infotech exists to architect and deliver world-class digital infrastructure for enterprises navigating the complexities of modern technology. We bridge the gap between ambitious business objectives and the technical depth required to achieve them.
      </p>
      <p className="text-sm text-slate-600 leading-relaxed">
        Our purpose is to enable enterprise-grade transformation by engineering software systems that are not only technically superior but strategically aligned with long-term growth. Every platform we build is designed to scale intelligently, adapt continuously, and perform reliably under real-world conditions.
      </p>
      <p className="text-sm text-slate-600 leading-relaxed">
        We are committed to building complete digital ecosystems—interconnected services, intelligent automation layers, and secure data architectures—that empower our clients to lead their markets with confidence and clarity.
      </p>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        {missionHighlights.map((h, i) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 + 0.2 }}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-3.5 py-3 hover:border-slate-200 hover:shadow-sm transition-all group cursor-default"
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                style={{ background: `${h.color}15`, color: h.color }}>
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 leading-tight">{h.label}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function VisionTab() {
  return (
    <motion.div
      key="vision"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="space-y-5"
    >
      <h3 className="text-xl font-black text-slate-900 tracking-tight">Our Vision</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        We envision a world where every enterprise is empowered by intelligent, AI-first infrastructure that learns, adapts, and evolves alongside the business. Our vision is to be the defining technology partner for the next generation of digital leaders.
      </p>
      <p className="text-sm text-slate-600 leading-relaxed">
        From automation-driven operations to quantum-ready architectures, we are building toward a future where technology is not a barrier but an accelerator—removing friction, unlocking productivity, and enabling global scale for organizations of every size.
      </p>

      {/* Interactive Timeline */}
      <div className="space-y-3 pt-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Technology Roadmap</p>
        {visionTimeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 + 0.15 }}
            className="flex gap-3 group"
          >
            <div className="flex flex-col items-center shrink-0">
              <div className="h-7 w-7 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center text-[9px] font-black text-purple-700 shrink-0">
                {i + 1}
              </div>
              {i < visionTimeline.length - 1 && (
                <div className="w-[2px] flex-1 min-h-[16px] bg-gradient-to-b from-purple-200 to-transparent mt-1" />
              )}
            </div>
            <div className="pb-3">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-black text-purple-600 tracking-wider uppercase bg-purple-50 px-1.5 py-0.5 rounded">{item.year}</span>
                <span className="text-xs font-bold text-slate-800">{item.title}</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ValueCard({ v, i }: { v: typeof coreValues[0]; i: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = v.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.06 + 0.1 }}
      className="group rounded-xl border bg-white/70 overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{
        borderLeftColor: v.color,
        borderLeftWidth: 3,
        borderColor: expanded ? `${v.color}35` : undefined,
        boxShadow: expanded ? `0 8px 24px -4px ${v.color}18` : undefined,
      }}
    >
      {/* Header — always visible */}
      <div className="p-3.5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2.5">
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${v.color}15`, color: v.color }}
            >
              <Icon className="h-3.5 w-3.5" />
            </motion.div>
            <span className="text-xs font-bold text-slate-800">{v.title}</span>
          </div>
          {/* Read More toggle button */}
          <motion.button
            onClick={() => setExpanded(!expanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 text-[9px] font-bold tracking-wider uppercase px-2 py-1 rounded-lg transition-all duration-200 cursor-pointer shrink-0"
            style={{
              background: expanded ? `${v.color}15` : "rgba(241,245,249,0.8)",
              color: expanded ? v.color : "#64748B",
            }}
          >
            <span>{expanded ? "Show Less" : "Read More"}</span>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="h-2.5 w-2.5" />
            </motion.div>
          </motion.button>
        </div>

        {/* Preview text — always visible, 2 lines */}
        <p className="text-[10.5px] text-slate-500 leading-relaxed line-clamp-2">
          {v.desc}
        </p>
      </div>

      {/* Expanded area — smooth height transition */}
      <motion.div
        initial={false}
        animate={{
          height: expanded ? "auto" : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div
          className="px-3.5 pb-3.5 pt-0"
          style={{ borderTop: `1px solid ${v.color}20` }}
        >
          <div className="pt-3">
            <p className="text-[11px] text-slate-600 leading-relaxed">
              {v.desc}
            </p>
            {/* Decorative accent line */}
            <div
              className="mt-3 h-0.5 w-12 rounded-full"
              style={{ background: `linear-gradient(90deg, ${v.color}, transparent)` }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ValuesTab() {
  return (
    <motion.div
      key="values"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-black text-slate-900 tracking-tight">Core Values</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        Six principles that govern how we think, work, and deliver at Akshay Infotech.
        <span className="text-[11px] text-slate-400 ml-1">(Click &ldquo;Read More&rdquo; to expand each value)</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {coreValues.map((v, i) => (
          <ValueCard key={v.title} v={v} i={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-120px" });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 100, damping: 20 });
  const sy = useSpring(my, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const handleImageMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    my.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const activeTabData = tabs.find(t => t.key === activeTab)!;

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-100" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-stretch items-start">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 relative lg:h-full lg:flex lg:flex-col"
          >
            <motion.div
              onMouseMove={handleImageMove}
              onMouseLeave={() => { mx.set(0); my.set(0); }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden flex-1 min-h-[450px] lg:min-h-0 shadow-2xl shadow-slate-100 border border-slate-100 group bg-slate-50 cursor-default"
            >
              <Image
                src="/about-bg.png"
                alt="Akshay innovation hub"
                fill
                className="object-cover group-hover:scale-[1.06] transition-transform duration-[800ms]"
                sizes="(max-width: 1280px) 40vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent pointer-events-none" />

              <motion.div
                style={{ transform: "translateZ(30px)" }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl flex items-center space-x-4 shadow-xl"
              >
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    <AnimatedCounter target={99.8} suffix="%" decimals={1} />
                  </div>
                  <div className="text-xs font-medium text-slate-500">Client Retention & Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute -top-12 -left-12 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
            <div className="absolute -bottom-8 -right-8 h-60 w-60 rounded-full bg-purple-100/30 blur-2xl -z-10 animate-pulse" style={{ animationDuration: "12s" }} />

            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={isSectionInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="absolute -top-4 -right-4 bg-white border border-slate-100 shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-2"
            >
              <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">
                  <AnimatedCounter target={80} suffix="+" />
                </div>
                <div className="text-[10px] text-slate-400">Projects</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <div className="lg:col-span-7 space-y-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <span className="text-sm font-bold text-primary tracking-wider uppercase mb-3 block">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                We Architect Digital Systems<br />
                <span style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  that Inspire
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
              className="text-base text-slate-500 leading-relaxed"
            >
              Founded with a vision to redefine software delivery, Akshay Infotech brings together elite product engineers, cloud architects, and UX designers to help companies navigate the complex tech landscape with clean code, robust development, and production-ready applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="space-y-8"
            >
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="rounded-2xl p-4 text-center border border-slate-100 bg-slate-50/80 transition-shadow hover:shadow-lg hover:shadow-slate-100 hover:border-slate-200 cursor-default"
                    >
                      <div className="h-8 w-8 rounded-xl mx-auto mb-2 flex items-center justify-center" style={{ background: `${s.color}15` }}>
                        <Icon className="h-4 w-4" style={{ color: s.color }} />
                      </div>
                      <div className="text-xl font-bold text-slate-900">
                        <AnimatedCounter
                          target={parseFloat(s.value)}
                          suffix={s.value.includes("%") ? "%" : s.value.includes("+") ? "+" : ""}
                          decimals={s.value.includes(".") ? 1 : 0}
                        />
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium mt-0.5">{s.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Interactive Tabs — expanded content */}
              <div className="rounded-2xl border border-slate-100 p-6 bg-slate-50/50 shadow-sm">
                {/* Tab Buttons */}
                <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4 mb-6">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.key;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key as "mission" | "vision" | "values")}
                        className="flex items-center space-x-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                        style={isActive ? {
                          background: tab.color,
                          color: "white",
                          boxShadow: `0 8px 18px ${tab.color}35`
                        } : { color: "#64748B" }}
                      >
                        <motion.div
                          animate={isActive ? { rotate: [0, 10, 0], scale: [1, 1.15, 1] } : {}}
                          transition={{ duration: 0.4 }}
                        >
                          <Icon className="h-4 w-4" />
                        </motion.div>
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content — auto height, grows with content */}
                <div>
                  <AnimatePresence mode="wait">
                    {activeTab === "mission" && <MissionTab key="mission" />}
                    {activeTab === "vision" && <VisionTab key="vision" />}
                    {activeTab === "values" && <ValuesTab key="values" />}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
