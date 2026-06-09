"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Eye, Award, ShieldCheck, Sparkles, Milestone, Heart, 
  Target, TrendingUp, CheckCircle, ArrowRight, BookOpen,
  Globe, Shield, Database, Users, HelpCircle, Activity, 
  Layers, Zap, Cpu, BarChart3, MapPin, CheckSquare
} from "lucide-react";

interface MilestoneVisualProps {
  index: number;
}

function MilestoneVisual({ index }: MilestoneVisualProps) {
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-indigo-500 to-blue-500",
    "from-purple-500 to-indigo-500",
    "from-cyan-500 to-teal-500",
    "from-emerald-500 to-teal-500"
  ];
  const color = colors[index] || "from-blue-500 to-indigo-500";

  return (
    <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className={`absolute w-28 h-28 rounded-full bg-gradient-to-br ${color} blur-3xl opacity-20`} />
      
      {/* Twinkling stars */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              top: `${20 + ((i * 13 + index * 17) % 60)}%`,
              left: `${20 + ((i * 19 + index * 23) % 60)}%`,
            }}
            animate={{
              scale: [0.5, 1.3, 0.5],
              opacity: [0.2, 0.7, 0.2],
              y: [0, -10 - ((i * 5) % 15), 0],
            }}
            transition={{
              duration: 3 + ((i * 3) % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: ((i * 2) % 4) * 0.4,
            }}
          />
        ))}
      </div>

      {/* Decorative center rotation rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center opacity-25"
      >
        <svg className="w-20 h-20 stroke-current text-white/10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="22" strokeDasharray="4 2" />
        </svg>
      </motion.div>

      {/* Icon representing the phase */}
      <div className="relative z-10">
        {index === 0 && (
          <div className="relative">
            <Database className="h-10 w-10 text-blue-400" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
          </div>
        )}
        {index === 1 && (
          <div className="relative">
            <Activity className="h-10 w-10 text-indigo-400" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
          </div>
        )}
        {index === 2 && (
          <div className="relative">
            <Layers className="h-10 w-10 text-purple-400" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
          </div>
        )}
        {index === 3 && (
          <div className="relative">
            <Globe className="h-10 w-10 text-cyan-400" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
          </div>
        )}
        {index === 4 && (
          <div className="relative">
            <Cpu className="h-10 w-10 text-emerald-400" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AboutUsPage() {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [activeValue, setActiveValue] = useState<number>(0);
  const [calculatorInput, setCalculatorInput] = useState({ servers: 10, databaseSize: 5 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Document Title
  useEffect(() => {
    document.title = "About Akshay | Akshay Infotech";
  }, []);

  // Scroll Progress for growing timeline line
  const { scrollYProgress } = useScroll({
    target: element ? { current: element } : undefined,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const companyValues = [
    {
      title: "Precision Engineering",
      desc: "We write clean, typed, micro-optimized queries. Every millisecond of latency is tracked, analyzed, and eliminated.",
      icon: Target
    },
    {
      title: "Zero-Trust Security",
      desc: "Every database connection, API call, and container runtime is guarded under secure TLS boundaries.",
      icon: ShieldCheck
    },
    {
      title: "Persistent Innovation",
      desc: "We actively prototype container meshes and telemetry load predictors to prepare for future demands.",
      icon: Sparkles
    },
    {
      title: "Client Empathy",
      desc: "We align architectures with business growth goals, ensuring technology supports core operational pipelines.",
      icon: Heart
    },
    {
      title: "Shared Knowledge",
      desc: "We actively document architectural pattern systems and open-source key elements of our database monitors.",
      icon: BookOpen
    },
    {
      title: "Operational Uptime",
      desc: "Our systems are engineered for redundancy, ensuring high-capacity failovers run safely without packet loss.",
      icon: Activity
    }
  ];

  const milestones = [
    {
      period: "THE BEGINNING (2010)",
      title: "Bridging Backend Scales & Interfaces",
      desc: "Akshay was founded by database architects who wanted to replace slow enterprise SQL systems with decoupled, low-latency microservice meshes wrapped under fast user interfaces."
    },
    {
      period: "TRANSITION PHASE (2014)",
      title: "Pivoting to Real-Time Telemetry",
      desc: "We built custom event trackers during the early shifts of global transaction volumes, helping clients monitor server anomalies and trace request paths across isolated clusters."
    },
    {
      period: "EXPANSION (2018)",
      title: "Deploying the Strangler Pattern",
      desc: "We helped high-volume retail portals replace legacy VM server networks, transitioning traffic gradually via Envoy proxy layers without downtime."
    },
    {
      period: "GLOBAL REACH (2024)",
      title: "Telemetry & Performance Integration",
      desc: "Consolidated infrastructure layouts under zero-trust credential rules, monitoring query latency limits across 120+ active clusters."
    },
    {
      period: "FUTURE READY (2026+)",
      title: "Intelligent Auto-Scaling Blueprints",
      desc: "Deploying predictive server scaling targets that spin up container environments 15 minutes before peak traffic intervals."
    }
  ];

  const industries = [
    { name: "FinTech & Banking", metric: "10M+ Daily Trans", latency: "<8ms Limit", desc: "Securing financial ledgers and deploying low-latency payment processing pipelines." },
    { name: "E-Commerce Logistics", metric: "450k Checkouts/hr", latency: "<12ms Limit", desc: "Handling heavy seasonal spikes with automated cluster orchestration." },
    { name: "SaaS Platforms", metric: "1.2B API Requests", latency: "<15ms Limit", desc: "Connecting fast databases to multi-tenant user portals seamlessly." },
    { name: "Enterprise Resource", metric: "100% Data Sync", latency: "<20ms Limit", desc: "Modernizing legacy ERP databases with decoupled APIs and containers." }
  ];

  const metrics = [
    { label: "Reduction in Cloud Spending", val: "42%", progress: 84 },
    { label: "Average Server Boot Time", val: "<1.2s", progress: 95 },
    { label: "Database Sync SLA", val: "99.999%", progress: 99 },
    { label: "Client Query Optimization", val: "5x Speed", progress: 90 }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">
      
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              <BookOpen className="h-3.5 w-3.5" />
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Engineering High-Capacity Digital Ecosystems
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-light max-w-xl">
              Akshay Infotech designs, audits, and deploys zero-downtime database architectures and cloud infrastructure meshes to help modern enterprises scale compute boundaries safely.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <Image src="/images/hero-about.png" alt="About Akshay Infotech" width={700} height={400} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ---------------- 2. COMPANY INTRODUCTION ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="absolute top-0 right-10 pointer-events-none select-none overflow-hidden -z-10 opacity-5">
          <div className="text-[120px] font-black tracking-wider text-blue-550 uppercase">AKSHAY</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Documenting Our Philosophy</h2>
            <p className="text-sm text-slate-405 leading-relaxed font-light">
              Founded in 2010, Akshay Infotech emerged from a simple observation: modern business applications grow exponentially, yet database syncs and server configurations lag behind. Traditional setups rely on oversized computing instances to manage spikes, which results in excessive cloud spending.
            </p>
            <p className="text-sm text-slate-405 leading-relaxed font-light">
              We replace monoliths with lightweight, containerized microservices and automated database proxies. This ensures that client interfaces render in milliseconds while maintaining zero packet loss during infrastructure migrations.
            </p>
          </div>
          <div className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden space-y-6">
            <div className="h-1.5 w-12 bg-blue-500 rounded-full" />
            <h4 className="text-lg font-bold text-white">Our Architecture Promise</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-400 shrink-0" />
                Query response latencies under 15 milliseconds.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-400 shrink-0" />
                Automatic traffic load balancing across multiple regions.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-400 shrink-0" />
                Zero-downtime Strangler Pattern migration schemas.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- 3. WHY AKSHAY EXISTS ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Why Akshay Exists</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Legacy mainframes lock valuable operational metrics away in fragmented database silos. We build proxy API gates that connect databases, making business insights available immediately.
            </p>
            <div className="pt-4">
              <span className="text-[10px] font-mono text-indigo-400 tracking-widest font-bold uppercase block">
                WATERMARK // ENTERPRISE INNOVATION
              </span>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl space-y-3">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Layers className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Structural Decoupling</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                Monolith servers force everything into single compute frames. We break database tables into modular microservices that sync across zone arrays dynamically.
              </p>
            </div>
            <div className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl space-y-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Immediate Query Delivery</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                By integrating Redis caches and Kafka brokers, queries bypass heavy table locks and land in client screens in single-digit milliseconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. VISION ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="absolute left-10 pointer-events-none select-none overflow-hidden -z-10 opacity-3">
          <div className="text-[90px] font-black tracking-widest text-indigo-500/5 uppercase leading-none">BUILDING DIGITAL FUTURES</div>
        </div>
        <div className="p-8 md:p-12 bg-slate-900/50 border border-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                To construct a digital landscape where enterprises scale compute limits without database code friction. We believe backend infrastructures should operate invisibly, ensuring pages render in milliseconds regardless of active traffic spikes, system updates, or regional database outages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 5. MISSION ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="p-8 md:p-12 bg-slate-900/50 border border-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                To design, audit, and deploy high-reliability microservice pipelines under strict data security and telemetry standards. We provide ongoing support retainers, regular code audits, and telemetry mapping to ensure cloud systems operate cleanly, transparently, and cost-effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 6. CORE VALUES ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Core Values</h2>
          <p className="text-sm text-slate-400 mt-2">The engineering and operational values that define our products.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyValues.map((val, idx) => {
            const ValIcon = val.icon;
            return (
              <div key={idx} className="p-6 bg-slate-900/40 border border-white/5 hover:border-indigo-500/20 transition-colors rounded-2xl space-y-4">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <ValIcon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-white">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- 7. GROWTH JOURNEY (TIMELINE) ---------------- */}
      <section ref={(node) => { if (node) setElement(node); }} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Timeline Journey</h2>
          <p className="text-sm text-slate-400 mt-2">Watch our key checkpoints and operational growth patterns reveal as you scroll.</p>
        </div>

        <div className="relative">
          {/* Vertical growing timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-900 transform -translate-x-1/2">
            <motion.div 
              style={{ height: timelineHeight }}
              className="w-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.3)] origin-top"
            />
          </div>

          <div className="space-y-16">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  <div className="absolute left-6 md:left-1/2 top-1 h-5 w-5 rounded-full bg-[#030712] border-2 border-slate-800 flex items-center justify-center transform -translate-x-1/2 z-10">
                    <motion.div 
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1.2, backgroundColor: "#3B82F6" }}
                      viewport={{ once: true }}
                      className="h-2.5 w-2.5 rounded-full bg-slate-700 transition-all"
                    />
                  </div>

                  {/* Left/Right Beautiful Visual Spacer with Twinkling Starlight on desktop */}
                  <div className="hidden md:block w-full md:w-1/2 px-8">
                    <MilestoneVisual index={idx} />
                  </div>

                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55 }}
                      className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl"
                    >
                      <span className="text-[9px] font-mono font-bold text-blue-400 block mb-1">
                        {milestone.period}
                      </span>
                      <h4 className="text-base font-bold text-white mb-2">{milestone.title}</h4>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">{milestone.desc}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- 8. INDUSTRY EXPERTISE ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="absolute bottom-0 right-10 pointer-events-none select-none overflow-hidden -z-10 opacity-3">
          <div className="text-[110px] font-black tracking-widest text-indigo-500/5 uppercase">DIGITAL TRANSFORMATION</div>
        </div>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Industry Expertise</h2>
          <p className="text-sm text-slate-400 mt-2">Bespoke database and cloud solutions tailored for high-volume industries.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="p-8 bg-slate-900/40 border border-white/5 rounded-2xl relative overflow-hidden backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2">{ind.name}</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">{ind.desc}</p>
              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">{ind.metric}</span>
                <span className="text-[10px] font-mono text-slate-500 uppercase">{ind.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ---------------- 10. SUCCESS METRICS ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Success Metrics</h2>
          <p className="text-sm text-slate-400 mt-2">Hard metrics validating our cloud migration setups and systems.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((met, i) => (
            <div key={i} className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl relative overflow-hidden">
              <div className="text-3xl font-black text-blue-400 font-mono mb-2">{met.val}</div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{met.label}</h4>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${met.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 11. INNOVATION CULTURE ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-8 bg-slate-900/30 border border-white/5 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Cpu className="h-5 w-5 text-indigo-400" />
              Akshay Labs
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              We allocate 15% of our monthly sprint times to open-source database connectors and proxy benchmarks. Our team believes that high-quality telemetry libraries should be shared to benefit the broader developer community.
            </p>
            <div className="flex gap-4">
              <div className="px-3.5 py-1.5 rounded-lg bg-indigo-50/10 text-indigo-400 text-xs font-mono font-bold">
                Github: 4.8k Stars
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-blue-50/10 text-blue-405 text-xs font-mono font-bold">
                Open Releases: 14+
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Innovation Culture</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              At Akshay, we avoid endless status syncs and management blocks. We believe in running asynchronous, deep-work sprints that prioritize writing clean, well-tested code over empty documentation folders.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- 12. FUTURE VISION ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="absolute top-10 left-10 pointer-events-none select-none overflow-hidden -z-10 opacity-3">
          <div className="text-[120px] font-black tracking-widest text-indigo-500/5 uppercase leading-none">
            AKSHAY INFOTECH
          </div>
        </div>
        <div className="p-8 md:p-12 bg-slate-900/40 border border-white/5 rounded-3xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-widest">Roadmap Checklist</span>
              <h3 className="text-xl font-bold text-white">Our Future Vision</h3>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-350">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold">
                  <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" />
                  AI load diagnostics integration (Q4 2026)
                </div>
                <p className="pl-6 font-light">Deploying machine learning models directly into load balancers to scale container clusters dynamically.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold">
                  <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" />
                  Decentralized multi-region replication (Q2 2027)
                </div>
                <p className="pl-6 font-light">Supporting active-active queries across distributed databases with zero lag metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
