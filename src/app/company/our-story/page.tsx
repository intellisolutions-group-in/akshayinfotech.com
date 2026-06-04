"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  BookOpen, ArrowRight, HelpCircle, Users2, Code2, 
  Globe, Sparkles, Milestone, Award, Star, Compass,
  Database, Activity, ShieldAlert, TrendingUp, Cpu
} from "lucide-react";

export default function OurStoryPage() {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Our Story | Akshay Infotech";
  }, []);

  const { scrollYProgress } = useScroll({
    target: element ? { current: element } : undefined,
    offset: ["start start", "end end"]
  });

  // Storyline grow indicator line
  const storylineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Background text parallax offset
  const textOffset = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const chapters = [
    {
      num: "01",
      name: "Beginning",
      title: "Bootstrapping Modern Web Engines (2018)",
      desc: "Our founding team set out in a small loft in Boston. Frustrated by slow, over-complex database architectures, we built custom API gateways to accelerate query response times. Our first clients, local e-commerce startups, experienced a 5x page load speedup. We recognized early that frontends were accelerating faster than database ingress, leaving a critical operational bottleneck in modern web architectures.",
      stat: "Founding members: 3 DB Architects",
      subTitle: "The Monolith Confrontation",
      subDesc: "We spent nights refactoring database query loops and connection pool limits. It became obvious that traditional ORMs were killing transaction speeds under real load."
    },
    {
      num: "02",
      name: "Challenges",
      title: "Decoupling Heavy Databases (2020)",
      desc: "During the rapid digital shifts of 2020, transaction rates globally quadrupled overnight. We launched custom telemetry systems to monitor database bottlenecks. By decoupling monolith structures into containerized microservices, we kept client services running safely. But this came with its own set of problems: distributed transaction tracing and network serialization latency threatened cluster reliability.",
      stat: "Client transaction rate: +400%",
      subTitle: "Distributed Tracing Obstacles",
      subDesc: "As systems split into independent containers, locating a single slow database query required crawling dozens of services. We developed custom event tagging to track queries in flight."
    },
    {
      num: "03",
      name: "Growth",
      title: "Real-Time Ingress Blueprints (2022)",
      desc: "We introduced our real-time streaming ETL architecture. Utilizing Apache Kafka and Spark, our setups processed millions of live logs per second, routing metrics straight to dashboard pipelines. Large logistical and SaaS companies adopted our patterns, allowing them to visualize operational telemetry immediately without slowing primary business databases.",
      stat: "Telemetry load: 2.4M logs/sec",
      subTitle: "Pipeline Scale Integration",
      subDesc: "Our developers created custom Kafka partitions and cluster managers. This allowed logging telemetry to scale out automatically during load surges."
    },
    {
      num: "04",
      name: "Innovation",
      title: "Decentralized Regional Clusters (2024)",
      desc: "We expanded our engineering solutions to handle multi-region replication networks. We deployed active-active databases across Europe and US zones, syncing data layers continuously. These setups guaranteed a certified 99.999% uptime compliance record, allowing global enterprises to read and write database records locally with sub-second synchronization.",
      stat: "Uptime SLA: 99.999% certified",
      subTitle: "Global Active-Active Systems",
      subDesc: "Managing write conflicts across distinct regions is one of database science's hardest challenges. We implemented clean CRDT schemes to resolve conflicts instantly."
    },
    {
      num: "05",
      name: "Future",
      title: "AI Telemetry Orchestration (2026+)",
      desc: "We are currently integrating machine learning triggers directly inside load controllers. These scripts monitor CPU load and query spikes, auto-provisioning database hosts dynamically before users experience page slowing. Our research aims to completely eliminate manual scaling config files.",
      stat: "Predictive scaling: 15min advance",
      subTitle: "Autonomous Infrastructure",
      subDesc: "By leveraging local neural predictors, clusters learn traffic cycles and scale computing nodes in advance, reducing idle instance billing by 45%."
    }
  ];

  const faqs = [
    {
      q: "What makes Akshay's engineering approach different from traditional consultants?",
      a: "We write clean, production-ready infrastructure-as-code instead of plain consulting reports. Every architectural recommendation comes with Terraform files and Docker setups ready to run."
    },
    {
      q: "How does the team handle legacy migration risks?",
      a: "We deploy incremental facade proxies. This routes traffic slowly, letting us test and replace system components piece-by-piece, completely avoiding big bang release failures."
    },
    {
      q: "Is Akshay structured to support global operations?",
      a: "Yes. Our cloud engineering and server monitoring networks operate globally, providing 24/7 telemetry support and database sync auditing."
    }
  ];

  return (
    <div ref={(node) => { if (node) setElement(node); }} className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Background Watermark Vertical Left */}
      <div className="absolute top-24 left-6 h-[400px] w-[100px] pointer-events-none select-none overflow-hidden -z-10 origin-left">
        <motion.div 
          style={{ y: textOffset }}
          className="text-[90px] font-black tracking-widest text-blue-500/[0.02] uppercase transform rotate-90 origin-left"
        >
          AKSHAY INFOTECH
        </motion.div>
      </div>

      {/* Background Watermark Bottom Right */}
      <div className="absolute bottom-24 right-6 pointer-events-none select-none overflow-hidden -z-10 text-right">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
          className="text-[100px] font-black tracking-widest text-indigo-500/[0.015] uppercase leading-none"
        >
          DIGITAL TRANSFORMATION
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              <Compass className="h-3.5 w-3.5" />
              Our Corporate Narrative
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              The History of Akshay
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-light max-w-xl">
              From a tiny loft operation to a leading global software systems integrator. Read how our dedication to zero-downtime database modernization shaped our technical paradigms.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <Image src="/images/hero-story.png" alt="Akshay Story Timeline" width={700} height={400} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Chapters Cinematic Reveal Showcase */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 mb-24">
        
        {/* Central Growing Storyline Line */}
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-slate-900 transform -translate-x-1/2 hidden md:block">
          <motion.div 
            style={{ height: storylineHeight }}
            className="w-full bg-gradient-to-b from-indigo-500 via-blue-500 to-indigo-500 origin-top rounded-full shadow-[0_0_8px_rgba(99,102,241,0.3)]"
          />
        </div>

        <div className="space-y-24">
          {chapters.map((chap, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`flex flex-col lg:flex-row items-stretch gap-8 relative ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Timeline circle indicator */}
                <div className="absolute left-6 lg:left-1/2 top-8 h-4 w-4 rounded-full bg-[#030712] border-2 border-indigo-500 transform -translate-x-1/2 z-10 hidden md:block" />

                {/* Left Side: Cinematic Narrative */}
                <div className="w-full lg:w-1/2 space-y-4 text-left lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7 }}
                    className="p-8 bg-[#090d1f]/60 border border-white/5 rounded-[32px] backdrop-blur-md shadow-xl h-full flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-widest block mb-2">
                        CHAPTER {chap.num} {"//"} {chap.name}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-4">
                        {chap.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                        {chap.desc}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/5 mt-6 text-[10px] font-mono text-slate-500">
                      Key Milestone Stat: <strong className="text-slate-355 font-bold">{chap.stat}</strong>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side: Visual Timeline Graphics / Sub-info */}
                <div className="w-full lg:w-1/2 text-left lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7 }}
                    className="p-8 bg-[#030712] border border-white/5 rounded-[32px] backdrop-blur-md h-full flex flex-col justify-center space-y-6 relative overflow-hidden"
                  >
                    {/* Watermark in graphic card */}
                    <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-5">
                      <Database className="h-40 w-40 text-blue-500" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-blue-400 uppercase font-bold tracking-widest">
                        Technical Detail {"//"} {chap.num}
                      </span>
                      <h5 className="text-base font-bold text-white">{chap.subTitle}</h5>
                      <p className="text-xs text-slate-550 leading-relaxed font-light">{chap.subDesc}</p>
                    </div>

                    {/* CSS Illustration of Chapter Progress */}
                    <div className="h-[120px] bg-slate-900/40 rounded-2xl border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                        <span>Cluster Nodes Status</span>
                        <span className="text-blue-450 font-bold">ACTIVE</span>
                      </div>
                      <div className="flex gap-2">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-8 flex-1 rounded-md border ${
                              i < idx + 2 
                                ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" 
                                : "bg-slate-950/40 border-white/5 text-slate-700"
                            } flex items-center justify-center text-[10px] font-mono font-bold`}
                          >
                            N{i+1}
                          </div>
                        ))}
                      </div>
                      <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" 
                          style={{ width: `${(idx + 1) * 20}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* Narrative Metrics */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="absolute top-0 left-10 pointer-events-none select-none overflow-hidden -z-10 opacity-3">
          <div className="text-[120px] font-black tracking-widest text-blue-500/5 uppercase leading-none">
            AKSHAY
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {[
            { value: "2018", label: "Year Formed", desc: "Started coding custom database optimization scripts." },
            { value: "10M+", label: "Daily Data queries", desc: "Routed across secure global VPC gateways." },
            { value: "99.999%", label: "Uptime Compliance", desc: "Maintained under strict SLAs for logistics clients." },
            { value: "120+", label: "Systems Deployed", desc: "Enterprise networks migrated to modern hosting setups." }
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl text-left backdrop-blur-md">
              <div className="text-3xl font-black text-blue-400 mb-1 font-mono">{stat.value}</div>
              <div className="text-xs text-white font-bold uppercase tracking-wider mb-2">{stat.label}</div>
              <p className="text-[11px] text-slate-500 font-light leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Stories</h2>
          <p className="text-sm text-slate-400 mt-2">Answers regarding our engineering operations and scaling solutions.</p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30 backdrop-blur-md">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center text-left">
                    <HelpCircle className="h-4.5 w-4.5 mr-3 text-blue-400 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <span className="text-blue-400 text-xs">-</span> : <span className="text-blue-400 text-xs">+</span>}
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
        <div className="p-8 md:p-12 bg-gradient-to-r from-blue-600 to-indigo-750 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-48 w-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <h4 className="text-xl sm:text-2xl font-bold mb-2">Ready to construct your modern architecture?</h4>
          <p className="text-xs sm:text-sm text-blue-150 mb-8 max-w-lg mx-auto font-light leading-relaxed">Schedule a technical consulting call to review your current server configuration and scaling bottlenecks.</p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 transition-all rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-blue-900/20"
          >
            Request Systems Review
            <ArrowRight className="h-4 w-4 text-blue-700" />
          </Link>
        </div>
      </section>

    </div>
  );
}
