"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users2, ArrowRight, HelpCircle, Code2, Globe, 
  Sparkles, Award, Star, Cpu, ShieldCheck, Linkedin,
  CpuIcon, Lock, Database, Code, BookOpen, Heart, Activity
} from "lucide-react";

interface LeaderSkill {
  name: string;
  val: string;
}

interface Leader {
  name: string;
  role: string;
  dept: string;
  bio: string;
  avatar: string;
  skills: LeaderSkill[];
}

// Interactive 3D Tilting Card Component
function TiltingLeaderCard({ leader }: { leader: Leader }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    // Calculate rotation angle (max 10 degrees)
    const rX = -(y - midY) / 15;
    const rY = (x - midX) / 15;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px"
      }}
      className="w-full"
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: rotateX !== 0 ? 1.02 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300 group shadow-xl relative overflow-hidden h-full"
      >
        <div className="space-y-6">
          {/* Avatar / Initials */}
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white text-xl font-bold font-mono shadow-md group-hover:scale-105 transition-transform duration-300">
            {leader.avatar}
          </div>

          <div>
            <h3 className="text-lg font-bold text-white leading-none">{leader.name}</h3>
            <p className="text-xs text-indigo-400 font-mono mt-1.5">{leader.role}</p>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-light">{leader.bio}</p>

          {/* Core Expertise Bars */}
          <div className="space-y-3.5 pt-4 border-t border-white/5">
            <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 font-bold block">
              Core Expertise Metrics
            </span>
            {leader.skills.map((skill: LeaderSkill, idx: number) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                  <span>{skill.name}</span>
                  <span>{skill.val}</span>
                </div>
                <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: skill.val }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] text-slate-500">
          <span className="flex items-center gap-1 font-mono uppercase">
            <Award className="h-3.5 w-3.5 text-indigo-400" /> Executive Staff
          </span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function LeadershipPage() {
  const [activeDept, setActiveDept] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Leadership Team | Nexora Technologies";
  }, []);

  const departments = [
    { id: "all", label: "All Executives" },
    { id: "engineering", label: "Systems Engineering" },
    { id: "security", label: "Security & Ops" },
    { id: "product", label: "Product & Experience" }
  ];

  const leaders = [
    {
      name: "Dr. Elena Rostova",
      role: "Chief Systems Architect",
      dept: "engineering",
      bio: "Dr. Elena has spent 14 years auditing and structuring global database networks. Formerly an infrastructure consultant at AWS, she directs Nexora's strangler pattern database migration tools.",
      avatar: "ER",
      skills: [
        { name: "System Design", val: "98%" },
        { name: "Database Migrations", val: "95%" },
        { name: "SLA Management", val: "92%" }
      ]
    },
    {
      name: "Marcus Vance",
      role: "Head of Infrastructure Security",
      dept: "security",
      bio: "Marcus leads the security and pen-testing compliance teams. He configures SOC2 validation and zero-trust VPN configurations, ensuring all deployments meet strict HIPAA/ISO audits.",
      avatar: "MV",
      skills: [
        { name: "Security Architecture", val: "97%" },
        { name: "SOC2 Compliance", val: "99%" },
        { name: "Network Auditing", val: "90%" }
      ]
    },
    {
      name: "Sarah Jenkins",
      role: "Lead Ingress Engineer",
      dept: "engineering",
      bio: "Sarah designs high-throughput real-time data pipelines. An expert in Apache Kafka broker partitions, she has configured stream systems resolving 1M+ queries/sec with zero packet losses.",
      avatar: "SJ",
      skills: [
        { name: "Kafka Clustering", val: "96%" },
        { name: "gRPC Streaming", val: "94%" },
        { name: "Uptime Auditing", val: "92%" }
      ]
    },
    {
      name: "Aris Thorne",
      role: "Director of Product Experience",
      dept: "product",
      bio: "Aris translates heavy telemetry structures into clean, beautiful user screens. He establishes modular design patterns and ensures accessibility rules are followed across our dashboard layouts.",
      avatar: "AT",
      skills: [
        { name: "UI Design Systems", val: "95%" },
        { name: "UX Flow Auditing", val: "90%" },
        { name: "Next.js Integration", val: "88%" }
      ]
    }
  ];

  const faqs = [
    {
      q: "Can I consult directly with a chief systems architect?",
      a: "Yes. Our senior engineering executives guide discovery sessions and map out structural modernization phases for enterprise migration contracts."
    },
    {
      q: "What certifications does the engineering team hold?",
      a: "Our architects hold professional certifications across AWS (Solutions Architect Professional), Google Cloud (Professional Cloud Security Engineer), and Kubernetes (CKA/CKAD)."
    },
    {
      q: "Where is the core systems engineering team located?",
      a: "Nexora operates as a distributed network. Our primary systems engineering teams are situated across the United States, United Kingdom, and Germany."
    }
  ];

  const philosophyKeys = [
    { icon: Code2, title: "Engineering-First", desc: "No endless management layers. Every project lead is a senior software writer who regularly commits to production code bases." },
    { icon: Globe, title: "Asynchronous Work", desc: "We prioritize long uninterrupted blocks of deep concentration, using transparent specs and written blueprints instead of daily status syncs." },
    { icon: Sparkles, title: "Rigorous Auditing", desc: "Every branch is compiled, tested, and audited for query latency limits and security vulnerabilities before merging." }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Background Watermark Vertical Left */}
      <div className="absolute top-12 left-6 h-[400px] w-[100px] pointer-events-none select-none overflow-hidden -z-10 origin-left">
        <div className="text-[100px] font-black tracking-widest text-indigo-500/[0.02] uppercase transform rotate-90 origin-left">
          NEXORA TEAM
        </div>
      </div>

      {/* Background Watermark Diagonal Right */}
      <div className="absolute bottom-12 right-6 pointer-events-none select-none overflow-hidden -z-10 text-right">
        <div className="text-[9vw] font-black tracking-widest text-blue-500/[0.015] uppercase leading-none">
          SYSTEMS STAFF
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              <Users2 className="h-3.5 w-3.5" />
              Corporate Leadership
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              Executive Engineering Team
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-light max-w-xl">
              Meet the architects and security developers driving database modernization and cloud scaling blueprints globally.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <Image src="/images/hero-leadership.png" alt="Nexora Leadership Team" width={700} height={400} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Department Filter Bar */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-16 flex justify-center">
        <div className="flex bg-slate-900 border border-white/5 p-1 rounded-xl">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDept(dept.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeDept === dept.id 
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>
      </section>

      {/* Leaders Profile Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {leaders
              .filter((leader) => activeDept === "all" || leader.dept === activeDept)
              .map((leader) => (
                <TiltingLeaderCard key={leader.name} leader={leader} />
              ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Department Focus & Standards */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-16">Department Focus & Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: "Systems Engineering", desc: "Decoupling monolithic platforms, configuring Docker container builds, and developing custom high-capacity database replicas." },
            { icon: ShieldCheck, title: "Zero-Trust Security", desc: "Validating firewall rules, wrapping data directories under secure subnets, and managing rotating secret keys." },
            { icon: Star, title: "Interactive Portals", desc: "Designing responsive frontend portals that pull metrics via API facades, caching data at local edge CDN zones." }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-900/40 border border-white/5 p-8 rounded-2xl space-y-4">
                <div className="h-10 w-10 bg-indigo-500/10 text-indigo-400 flex items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Work Philosophy */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="absolute top-10 right-10 pointer-events-none select-none overflow-hidden -z-10 opacity-3">
          <div className="text-[100px] font-black tracking-widest text-indigo-500/5 uppercase leading-none">
            PHILOSOPHY
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {philosophyKeys.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 bg-[#090d1f]/40 border border-white/5 rounded-3xl space-y-4 backdrop-blur-md">
                <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology Teams Breakdown */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="p-8 md:p-12 bg-slate-900/50 border border-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-4">
              <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-widest">Our Staff Grid</span>
              <h3 className="text-2xl font-black text-white">How We Organize</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                We group architects into autonomous guilds centered around technical disciplines rather than client queues.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-300">
              <div className="p-6 bg-slate-950/60 border border-white/5 rounded-2xl space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Database className="h-4.5 w-4.5 text-blue-400" /> Database Guild
                </h4>
                <p className="font-light text-slate-400">Focuses on query tuning, Postgres connection pooling, replication lags, and migration pipeline testing scripts.</p>
              </div>
              <div className="p-6 bg-slate-950/60 border border-white/5 rounded-2xl space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Lock className="h-4.5 w-4.5 text-indigo-400" /> Security Auditing Guild
                </h4>
                <p className="font-light text-slate-400">Focuses on Pen-Testing container registries, rotating database secrets, managing TLS limits, and verifying SOC2 files.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Queries</h2>
          <p className="text-sm text-slate-400 mt-2">Answers regarding executive consultation sessions and project management.</p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30 backdrop-blur-md">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-base font-bold text-white hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center text-left">
                    <HelpCircle className="h-4.5 w-4.5 mr-3 text-indigo-400 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <span className="text-indigo-400 text-xs">-</span> : <span className="text-indigo-400 text-xs">+</span>}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pl-14 font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center mb-8">
        <div className="p-8 md:p-12 bg-gradient-to-r from-indigo-600 to-blue-750 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-48 w-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <h4 className="text-xl sm:text-2xl font-bold mb-2">Want to work with our architects?</h4>
          <p className="text-xs sm:text-sm text-indigo-150 mb-8 max-w-lg mx-auto font-light leading-relaxed">Book a consultation session with a Nexora systems engineer to review your legacy database configurations.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-indigo-700 hover:bg-blue-55 transition-all rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-indigo-900/20"
            >
              Consult Architecture Executives
              <ArrowRight className="h-4 w-4 text-indigo-700" />
            </Link>
            <Link 
              href="/careers"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-slate-900 border border-white/10 hover:border-white/20 transition-all rounded-xl font-bold text-xs cursor-pointer text-white"
            >
              Join Our Engineering Staff
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
