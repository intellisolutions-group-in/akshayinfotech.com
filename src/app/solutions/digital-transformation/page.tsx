"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Zap, HelpCircle, ArrowRight, Cpu, Network, ShieldCheck, Check, 
  Settings, Code, Layers, Eye, RefreshCw, BarChart, Server, Workflow 
} from "lucide-react";

interface PhaseVisualProps {
  phaseId: string;
  color: string;
  textColor: string;
}

function PhaseVisual({ phaseId, color, textColor }: PhaseVisualProps) {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${color} blur-3xl opacity-20`} />
      
      {/* Floating Twinkling Stars */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => {
          const seed = phaseId.charCodeAt(0) || 7;
          return (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{
                top: `${20 + ((i * 11 + seed * 13) % 60)}%`,
                left: `${20 + ((i * 17 + seed * 19) % 60)}%`,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.2, 0.8, 0.2],
                y: [0, -15 - ((i * 4 + seed * 5) % 15), 0],
              }}
              transition={{
                duration: 3 + ((i * 2 + seed) % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: ((i * 3 + seed) % 5) * 0.4,
              }}
            />
          );
        })}
      </div>

      {/* Centerpiece themed icon or SVG with animated starlight rings */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg className="w-24 h-24 opacity-30 stroke-current text-white/20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="25" strokeDasharray="3 6" />
          </svg>
        </motion.div>
        
        {phaseId === "phase-1" && (
          <div className="relative">
            <Server className={`h-12 w-12 ${textColor}`} />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-duration-2000"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
            </span>
          </div>
        )}
        {phaseId === "phase-2" && (
          <div className="relative">
            <Network className={`h-12 w-12 ${textColor}`} />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-duration-2000"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500"></span>
            </span>
          </div>
        )}
        {phaseId === "phase-3" && (
          <div className="relative">
            <Workflow className={`h-12 w-12 ${textColor}`} />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-duration-2000"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-purple-500"></span>
            </span>
          </div>
        )}
        {phaseId === "phase-4" && (
          <div className="relative">
            <Cpu className={`h-12 w-12 ${textColor}`} />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-duration-2000"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500"></span>
            </span>
          </div>
        )}
        {phaseId === "phase-5" && (
          <div className="relative">
            <ShieldCheck className={`h-12 w-12 ${textColor}`} />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-duration-2000"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DigitalTransformationJourneyPage() {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Document Title
  useEffect(() => {
    document.title = "Digital Transformation Journey | Akshay Infotech";
  }, []);

  // Scroll Telemetry for growing line
  const { scrollYProgress } = useScroll({
    target: element ? { current: element } : undefined,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journeyPhases = [
    {
      id: "phase-1",
      tag: "PHASE 01",
      title: "Current State Analysis & Deconstruction",
      status: "Operational Bottlenecks Found",
      description: "Our engineers index every legacy dependency, tracing CPU spikes and slow SQL joints in legacy mainframes. We wrap local configurations safely to prepare for low-latency proxies.",
      metrics: [
        { label: "Query Latency", val: "280ms" },
        { label: "VM Server Idle", val: "45%" },
        { label: "Deployment Failures", val: "18%" }
      ],
      color: "from-red-500/20 to-orange-500/10",
      textColor: "text-red-400"
    },
    {
      id: "phase-2",
      tag: "PHASE 02",
      title: "Strategic Blueprinting & Telemetry Setup",
      status: "Zero-Trust Mesh Blueprint",
      description: "We deploy real-time Prometheus monitoring targets over legacy database pathways and design active-active microservice routes, setting up strict database boundaries.",
      metrics: [
        { label: "Ingress Endpoints Map", val: "100%" },
        { label: "Telemetry Targets", val: "45 Nodes" },
        { label: "API Gateway Routes", val: "12 Channels" }
      ],
      color: "from-blue-500/20 to-indigo-500/10",
      textColor: "text-blue-400"
    },
    {
      id: "phase-3",
      tag: "PHASE 03",
      title: "Proxy Strangling & Live Data Syncing",
      status: "Blue-Green Deployment Active",
      description: "We route transaction streams gradually using Envoy API gateways. Legacy storage nodes sync with cloud databases in real time using transactional double-writes.",
      metrics: [
        { label: "Downtime Experienced", val: "0.00 sec" },
        { label: "Kafka Events Buffer", val: "2.4M/sec" },
        { label: "Migration Progress", val: "85%" }
      ],
      color: "from-purple-500/20 to-indigo-500/10",
      textColor: "text-purple-400"
    },
    {
      id: "phase-4",
      tag: "PHASE 04",
      title: "Kubernetes Auto-Scaling & Tuning",
      status: "Resource Optimization Active",
      description: "Static VM server instances are retired in favor of Kubernetes container grids. AI load trackers scale pods dynamically, reducing monthly bills.",
      metrics: [
        { label: "Monthly Cloud Bill", val: "-48% Saved" },
        { label: "Average Response", val: "14 ms" },
        { label: "CPU Idle Allocation", val: "<5%" }
      ],
      color: "from-cyan-500/20 to-blue-500/10",
      textColor: "text-cyan-400"
    },
    {
      id: "phase-5",
      tag: "PHASE 05",
      title: "Future-Ready Autonomous Operations",
      status: "100% Scalable Cloud Infrastructure",
      description: "Fully automated CI/CD pipelines let developers release feature patches daily. Zero-trust security meshes audit database ingress rules automatically.",
      metrics: [
        { label: "Release Frequency", val: "Daily Updates" },
        { label: "Compliance Auditing", val: "Security Verified" },
        { label: "Platform SLA", val: "99.999% SLA" }
      ],
      color: "from-emerald-500/20 to-teal-500/10",
      textColor: "text-emerald-400"
    }
  ];

  const faqs = [
    {
      q: "How does the Strangler Pattern prevent operational downtime?",
      a: "Instead of a high-risk 'big bang' release, we build a proxy facade over legacy networks. We rebuild and launch new microservices one component at a time, redirecting traffic gradually (e.g. starting with 1% of queries). If a failure is detected, we revert traffic immediately."
    },
    {
      q: "How long does a legacy mainframe modernization usually take?",
      a: "Depending on code complexity and integration dependencies, timeline ranges from 3 to 9 months. Our discovery phase delivers a clear milestone roadmap showing precise integration checkpoints."
    },
    {
      q: "Can we modernize our frontend UI without editing backend business rules?",
      a: "Yes. By building GraphQL or REST middleware layers directly over legacy SOAP or database endpoints, we let front-end teams build modern web apps without editing core logic."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Background Vertical Watermark */}
      <div className="absolute top-12 left-6 h-[400px] w-[200px] pointer-events-none select-none overflow-hidden -z-10 origin-top-left">
        <div className="text-[120px] font-black tracking-widest text-blue-500/[0.025] blur-[0.5px] uppercase transform rotate-90 origin-left mt-24">
          AKSHAY
        </div>
      </div>

      {/* Background Watermark Top Right */}
      <div className="absolute top-24 right-12 pointer-events-none select-none overflow-hidden -z-10 text-right">
        <div className="text-[8vw] font-black tracking-widest text-indigo-500/[0.02] uppercase leading-none">
          DIGITAL READY
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
            <Workflow className="h-3.5 w-3.5" />
            Modernization Journey Roadmap
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
            Digital Transformation Storytelling
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
            Scroll down to explore how Akshay system engineers migrate legacy SQL clusters, proxy backend queues, and scale microservices with zero downtime.
          </p>
        </div>
      </section>

      {/* Scroll Triggered Roadmap Journey (Vertical Timeline) */}
      <section ref={(node) => { if (node) setElement(node); }} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        
        {/* Timeline Center Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-900 transform -translate-x-1/2">
          {/* Animated Glowing Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] origin-top"
          />
        </div>

        <div className="space-y-24 relative">
          {journeyPhases.map((phase, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={phase.id}
                className={`flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } relative`}
              >
                {/* Timeline Circle Bullet */}
                <div className="absolute left-6 md:left-1/2 top-2 h-6 w-6 rounded-full bg-[#030712] border-2 border-slate-800 flex items-center justify-center transform -translate-x-1/2 z-10">
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1.2, backgroundColor: "#3B82F6" }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="h-2 w-2 rounded-full bg-slate-600 transition-colors duration-300"
                  />
                </div>

                {/* Left/Right Beautiful Visual Spacer with Twinkling Starlight on desktop */}
                <div className="hidden md:block w-full md:w-1/2 px-8">
                  <PhaseVisual phaseId={phase.id} color={phase.color} textColor={phase.textColor} />
                </div>

                {/* Narrative Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-6 sm:p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md text-left space-y-4 hover:border-white/10 transition-all`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${phase.textColor}`}>
                        {phase.tag}
                      </span>
                      <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
                        {phase.status}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {phase.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/5">
                      {phase.metrics.map((met, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider">{met.label}</div>
                          <div className="text-sm font-bold text-white font-mono mt-0.5">{met.val}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Comparison table showing migration stats */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Comparative Transformation Analysis</h2>
          <p className="text-sm text-slate-400 mt-2">Observing structural limits before vs after Akshay strangler patterns.</p>
        </div>

        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-slate-900/50 backdrop-blur-md">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-slate-950/50">
                <th className="p-4 font-bold text-slate-400">Operational Dimension</th>
                <th className="p-4 font-bold text-red-400">Legacy Mainframe</th>
                <th className="p-4 font-bold text-emerald-400">Modernized Microservice Mesh</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Database Lockups</td>
                <td className="p-4 text-slate-400 font-light">Frequent thread queues during peak sale hours</td>
                <td className="p-4 text-emerald-300 font-bold">Zero database lockups (Redis cache layer + Replica nodes)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Deployment Speed</td>
                <td className="p-4 text-slate-400 font-light">Manual SFTP file loads every 2-3 weeks</td>
                <td className="p-4 text-emerald-300 font-bold">Automated CI/CD container triggers in under 5 minutes</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Security Audits</td>
                <td className="p-4 text-slate-400 font-light">Static manual firewall updates once a year</td>
                <td className="p-4 text-emerald-300 font-bold">Continuous runtime mesh telemetry audit logs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQS */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Modernization FAQs</h2>
          <p className="text-sm text-slate-400 mt-2">Answers to key transformation risk mitigation questions.</p>
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


    </div>
  );
}
