"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network, ArrowRight, ShieldCheck, HeartPulse, ShoppingBag, Truck,
  HelpCircle, Landmark, GraduationCap, Factory, Plane, CheckCircle,
  BarChart3, Database, Lock, Globe, Zap, Activity, Target
} from "lucide-react";

export default function IndustriesWeServe() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Industries We Serve | Akshay Infotech";
  }, []);

  const industries = [
    {
      icon: HeartPulse,
      title: "Healthcare & MedTech",
      tagline: "Highly Secure Digital Health Platforms",
      gradient: "from-rose-500 to-pink-500",
      heroDesc: "We build telemedicine platforms, electronic health record (EHR) integrations, patient portal dashboards, and secure messaging systems. Every medical application we deliver meets strict data security standards with end-to-end encryption, audit logging, and role-based access controls.",
      challenges: ["Secure data transmission requirements", "HL7/FHIR data interoperability", "Real-time patient monitoring", "PHI data encryption standards"],
      solutions: ["End-to-end encrypted messaging", "FHIR-compliant API gateways", "Real-time vitals dashboards", "Secure audit trail logging"],
      metrics: [
        { label: "Data Protection", value: "100%" },
        { label: "Security Standard", value: "Enterprise" },
        { label: "Avg Response Time", value: "Sub-second" }
      ],
      caseStudy: "Built a telemedicine platform processing a high volume of monthly video consultations with real-time prescription management and insurance verification."
    },
    {
      icon: Landmark,
      title: "FinTech & Banking",
      tagline: "Highly Secure Financial Infrastructure",
      gradient: "from-amber-500 to-orange-500",
      heroDesc: "We deliver robust payment processing integrations, subscription lifecycle engines, transaction ledger systems, and secure financial platforms. Our systems handle high-frequency trading data, real-time fraud detection pipelines, and multi-currency settlement workflows.",
      challenges: ["Secure payment gateway compliance", "Real-time fraud detection", "Multi-currency settlements", "Regulatory reporting requirements"],
      solutions: ["Tokenized payment processing", "ML-powered fraud scoring", "Automated compliance reports", "Real-time transaction monitoring"],
      metrics: [
        { label: "Daily Transactions", value: "High Volume" },
        { label: "Fraud Detection", value: "Real-Time" },
        { label: "Security Alignment", value: "100%" }
      ],
      caseStudy: "Architected a payment gateway handling high volumes of annual transactions with enterprise-level uptime and real-time fraud scoring."
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-Commerce",
      tagline: "Scalable Commerce Architectures",
      gradient: "from-emerald-500 to-teal-500",
      heroDesc: "We construct high-performance storefront systems, inventory tracking APIs, headless checkout portals, customer loyalty engines, and real-time analytics dashboards. Our e-commerce architectures handle seasonal traffic spikes without performance degradation.",
      challenges: ["Black Friday traffic spikes", "Real-time inventory sync", "Multi-channel order management", "Personalization at scale"],
      solutions: ["Auto-scaling container clusters", "Event-driven inventory systems", "Headless commerce APIs", "Redis-powered recommendation engine"],
      metrics: [
        { label: "Peak Checkouts/hr", value: "High Capacity" },
        { label: "Page Load Speed", value: "Sub-second" },
        { label: "Cart Abandonment", value: "Reduced" }
      ],
      caseStudy: "Deployed a headless commerce platform supporting multiple regional storefronts with unified inventory management and sub-second page loads."
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      tagline: "Real-Time Fleet & Warehouse Systems",
      gradient: "from-blue-500 to-indigo-500",
      heroDesc: "We provide real-time vehicle telemetry tracking, coordinate pipeline management, automated dispatch workflows, warehouse layout databases, and driver console applications. Our systems optimize delivery routes and reduce fuel consumption through predictive algorithms.",
      challenges: ["Real-time GPS tracking at scale", "Route optimization algorithms", "Warehouse automation integration", "Last-mile delivery optimization"],
      solutions: ["WebSocket-based live tracking", "Graph-based route planning", "IoT sensor data pipelines", "Predictive delivery ETAs"],
      metrics: [
        { label: "Active Fleet Units", value: "Large Scale" },
        { label: "Route Optimization", value: "Optimized" },
        { label: "GPS Update Frequency", value: "Real-Time" }
      ],
      caseStudy: "Built a fleet management platform tracking active vehicles across multiple countries with real-time ETA predictions and automated dispatch."
    },
    {
      icon: GraduationCap,
      title: "EdTech & Learning",
      tagline: "Intelligent Learning Management Systems",
      gradient: "from-violet-500 to-purple-500",
      heroDesc: "We build learning management platforms, video course delivery systems, progress tracking dashboards, assessment engines, and certification management portals. Our EdTech solutions support thousands of concurrent learners with adaptive content delivery.",
      challenges: ["Concurrent video streaming", "Adaptive learning paths", "Assessment integrity", "Certificate verification"],
      solutions: ["CDN-optimized video delivery", "AI-driven content recommendations", "Proctored assessment engines", "Blockchain certificate verification"],
      metrics: [
        { label: "Concurrent Learners", value: "High Volume" },
        { label: "Course Completion", value: "Increased" },
        { label: "Video Load Time", value: "Rapid" }
      ],
      caseStudy: "Delivered a corporate training platform serving high volumes of monthly active learners with personalized learning paths and automated certifications."
    }
  ];

  const complianceStandards = [
    { name: "Data Security", desc: "Secure health data transmission and storage standards", industries: "Healthcare" },
    { name: "Access Controls", desc: "Zero-trust user and admin access controls", industries: "FinTech, SaaS" },
    { name: "Payment Security", desc: "Secure tokenized transactions and checkout paths", industries: "E-Commerce, Banking" },
    { name: "Privacy Protection", desc: "User data deletion rights and privacy protocols", industries: "All enterprise clients" },
    { name: "Information Security", desc: "Unified threat auditing and encryption key management", industries: "Enterprise clients" }
  ];

  const faqs = [
    { q: "Do you have direct domain expertise in my industry?", a: "Our engineering team includes specialists with backgrounds in healthcare IT, financial services, e-commerce platforms, and logistics systems. We pair domain experts with technical architects on every industry-specific project." },
    { q: "How do you handle industry-specific compliance requirements?", a: "We build compliance into our architecture from day one — not as an afterthought. Our CI/CD pipelines include automated security scans, and we maintain active alignments with modern data security and payment privacy standards." },
    { q: "Can you work with our existing industry-specific software?", a: "Yes. We regularly integrate with EHR systems (Epic, Cerner), payment processors (Stripe, Adyen), logistics platforms (SAP TM), and e-commerce engines (Shopify Plus, commercetools). Our API-first approach ensures clean integrations." },
    { q: "Do you offer industry benchmarking reports?", a: "Yes. During discovery, we benchmark your current system performance against industry standards and competitor metrics. This data drives our architectural recommendations and helps measure ROI post-launch." }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">

      {/* Background */}
      <div className="absolute top-20 left-6 pointer-events-none select-none -z-10">
        <div className="text-[90px] font-black tracking-widest text-violet-500/[0.02] uppercase transform rotate-90 origin-left">INDUSTRY SOLUTIONS</div>
      </div>
      <div className="absolute bottom-20 right-6 pointer-events-none select-none -z-10 text-right">
        <div className="text-[9vw] font-black tracking-widest text-blue-500/[0.015] uppercase leading-none">SECTORS</div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 uppercase tracking-widest">
              <Network className="h-3.5 w-3.5" /> Sectors We Support
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-violet-100 to-violet-300 bg-clip-text text-transparent">
              Industries We Serve
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-light max-w-xl">
              Tailored software configurations, database schemas, and integration pipelines designed to match the regulatory and scaling rules of your sector.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <Image src="/images/hero-industries.png" alt="Industries We Serve" width={700} height={400} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════ 2. INDUSTRY DEEP-DIVE EXPLORER ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Domain Expertise Explorer</h2>
          <p className="text-sm text-slate-400 mt-2">Select an industry to explore our challenges, solutions, and success metrics.</p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind, idx) => {
            const IndIcon = ind.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndustry(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  activeIndustry === idx
                    ? "bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-600/15"
                    : "bg-slate-900/50 text-slate-400 border-white/5 hover:text-white"
                }`}
              >
                <IndIcon className="h-3.5 w-3.5" /> {ind.title}
              </button>
            );
          })}
        </div>

        {/* Industry Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Main Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${industries[activeIndustry].gradient} flex items-center justify-center text-white`}>
                    {React.createElement(industries[activeIndustry].icon, { className: "h-7 w-7" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{industries[activeIndustry].title}</h3>
                    <span className="text-xs font-mono text-violet-400 uppercase">{industries[activeIndustry].tagline}</span>
                  </div>
                </div>
                <p className="text-base text-slate-400 leading-relaxed font-light">{industries[activeIndustry].heroDesc}</p>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-[#090d1f]/60 border border-white/5 rounded-3xl backdrop-blur-md space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-violet-400 font-bold block">Key Metrics</span>
                {industries[activeIndustry].metrics.map((met, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-slate-900/40 border border-white/5 rounded-xl">
                    <span className="text-sm text-slate-400 font-light">{met.label}</span>
                    <span className="text-sm font-mono text-white font-bold">{met.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges vs Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-red-400 font-bold block">Industry Challenges</span>
                {industries[activeIndustry].challenges.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-400 font-light">
                    <Target className="h-3.5 w-3.5 text-red-400 shrink-0" /> {c}
                  </div>
                ))}
              </div>
              <div className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block">Our Solutions</span>
                {industries[activeIndustry].solutions.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300 font-light">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="p-6 bg-violet-500/5 border border-violet-500/10 rounded-2xl">
              <span className="text-[10px] uppercase font-mono tracking-widest text-violet-400 font-bold block mb-2">Case Study Highlight</span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light italic">&ldquo;{industries[activeIndustry].caseStudy}&rdquo;</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>


      {/* ═══════════════ 4. FAQ ═══════════════ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Industry Questions</h2>
          <p className="text-sm text-slate-400 mt-2">Answers about domain expertise, security, and sector integrations.</p>
        </div>
        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30 backdrop-blur-md">
                <button onClick={() => setOpenFaq(isOpen ? null : i)} className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-base font-bold text-white hover:text-violet-400 transition-colors cursor-pointer">
                  <span className="flex items-center text-left"><HelpCircle className="h-4 w-4 mr-3 text-violet-400 shrink-0" />{faq.q}</span>
                  {isOpen ? <span className="text-violet-400 text-xs">−</span> : <span className="text-violet-400 text-xs">+</span>}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pl-14 font-light">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>


    </div>
  );
}
