"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, ArrowRight, HelpCircle, Plus, Minus, Layers, 
  Terminal, Shield, FileText, BarChart3, Clock, CheckCircle2
} from "lucide-react";

export default function CaseStudiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePath, setActivePath] = useState(0);

  // Document Title
  useEffect(() => {
    document.title = "Case Studies | Akshay Infotech";
  }, []);

  const learningRoadmap = [
    {
      title: "1. Basic System Audits",
      sub: "Infrastructure Analysis",
      desc: "Our systems engineers catalog VMs, microservices, databases, and third-party APIs. We trace exact latency blockers and security risks, establishing baseline performance benchmarks."
    },
    {
      title: "2. Cloud Subnet Planning",
      sub: "Terraform Infrastructure Provisioning",
      desc: "We write reproducible Terraform scripts to spin up secure VPCs, database subnets, cache clusters, and container networks inside AWS or Google Cloud."
    },
    {
      title: "3. Double-Write Syncing",
      sub: "Active Database Replication",
      desc: "Database nodes are synchronized continuously using active-active replication systems, letting users run transactions without data drift or database lockups."
    },
    {
      title: "4. Gradual DNS Transition",
      sub: "Zero-Downtime Rollover",
      desc: "We gradually route DNS traffic to new cloud subnets (e.g. 5% -> 25% -> 100%). Once data is audited and verified, local legacy hardware is safely retired."
    }
  ];

  const caseStudies = [
    {
      client: "Aura Logistics Group",
      industry: "Supply Chain & Transport",
      challenge: "Legacy track-and-trace endpoints experienced system-wide crashes during holiday query spikes, stalling shipping coordination.",
      solution: "Decoupled monolithic server blocks into microservices, deploying Redis cache clusters to offload database reads.",
      metrics: {
        uptime: "99.999% Uptime",
        savings: "42% Compute Savings",
        latency: "12ms Response Time"
      }
    },
    {
      client: "VeloPay International",
      industry: "Financial Services",
      challenge: "Unencrypted transaction database tables led to security compliance risks and slow transaction times.",
      solution: "Engineered zero-trust VPN gateways, placing encrypted database nodes under private subnets with HashiCorp Vault key rotation.",
      metrics: {
        uptime: "100% Security Audited",
        savings: "5.5x Coding Speed",
        latency: "18ms Transaction Speed"
      }
    },
    {
      client: "MediSync Portals",
      industry: "Healthcare & Biotech",
      challenge: "Patient portal databases experienced write-locks during simultaneous record requests, causing login timeouts.",
      solution: "Structured GraphQL query facades and partitioned databases to segment read/write loads.",
      metrics: {
        uptime: "Security Audited",
        savings: "85% CPU Load Reduction",
        latency: "8ms Portal Retrieval"
      }
    }
  ];

  const faqs = [
    {
      q: "How does Akshay guarantee zero data loss during financial database syncs?",
      a: "We configure double-write database syncs. Transactions are written to both old databases and new AWS replicas, using Kafka broker logs to reconcile transaction order."
    },
    {
      q: "What cloud platforms are these solutions configured for?",
      a: "Our Terraform scripts configure environments on AWS, Microsoft Azure, Google Cloud Platform, and private OpenStack clusters."
    },
    {
      q: "How does caching reduce database bills?",
      a: "By resolving up to 75% of read requests at local Redis cache zones, database nodes spend less CPU processing requests, directly lowering database hosting bills."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#02050f] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Huge Logo Watermark Bottom Right */}
      <div className="absolute bottom-4 right-4 h-[300px] w-[300px] pointer-events-none select-none overflow-hidden -z-20 opacity-[0.022]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className="text-blue-400">
          <rect x="15" y="15" width="70" height="70" rx="12" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 30 72 L 50 28 L 70 72 M 40 55 H 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Center Giant Transparent Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10">
        <div className="text-[10vw] font-black tracking-widest text-blue-500/[0.015] blur-[1px] uppercase">
          AKSHAY SOLUTIONS
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
            <FileText className="h-3.5 w-3.5" />
            Case Studies & Showcases
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
            Enterprise Client Success Stories
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-light">
            Read detailed cases showing how we help companies reduce server load, secure database subnets, and scale microservices with zero downtime.
          </p>
        </div>
      </section>

      {/* Case Study Cards Showcase */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md flex flex-col justify-between hover:border-blue-500/20 transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-widest">{cs.industry}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{cs.client}</h3>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Challenge</h4>
                  <p className="text-xs text-slate-300 mt-2 font-light leading-relaxed">{cs.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Solution</h4>
                  <p className="text-xs text-slate-350 mt-2 font-light leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-8 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Uptime</div>
                  <div className="text-xs font-bold text-white mt-1">{cs.metrics.uptime.split(" ")[0]}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Savings</div>
                  <div className="text-xs font-bold text-white mt-1">{cs.metrics.savings.split(" ")[0]}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Latency</div>
                  <div className="text-xs font-bold text-white mt-1">{cs.metrics.latency.split(" ")[0]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Project Roadmap Paths */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Project Implementation Milestones</h2>
          <p className="text-sm text-slate-400 mt-2">Follow our roadmap to master secure and high-capacity database orchestration.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Paths Tab List */}
          <div className="lg:col-span-1 space-y-4">
            {learningRoadmap.map((path, idx) => (
              <button
                key={idx}
                onClick={() => setActivePath(idx)}
                className={`w-full p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                  activePath === idx 
                    ? "bg-indigo-600/10 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.1)]" 
                    : "bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                }`}
              >
                <div className="font-bold text-xs uppercase tracking-wider mb-0.5">{path.title}</div>
                <div className="text-[11px] opacity-75 font-light">{path.sub}</div>
              </button>
            ))}
          </div>

          {/* Path Details Display Card */}
          <div className="lg:col-span-2 p-8 bg-slate-900/80 border border-white/10 rounded-3xl relative min-h-[220px] flex flex-col justify-between backdrop-blur-md text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePath}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-bold text-indigo-400">{learningRoadmap[activePath].title}</h4>
                <div className="text-xs font-mono text-slate-500">{learningRoadmap[activePath].sub}</div>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {learningRoadmap[activePath].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2.5 mt-8 border-t border-white/5 pt-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Curriculum: Verified</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-500 font-bold">• Case Blueprint</span>
            </div>
          </div>

        </div>
      </section>

      {/* Technology Comparison Chart */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Technology Stack Matrix</h2>
          <p className="text-sm text-slate-400 mt-2">Compare cost, security, scalability, and resource limits of microservice architectures.</p>
        </div>

        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-slate-900/50 backdrop-blur-md">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-slate-950/50">
                <th className="p-4 font-bold text-slate-400">Technology</th>
                <th className="p-4 font-bold text-slate-400">Cost Index</th>
                <th className="p-4 font-bold text-slate-400">Scalability</th>
                <th className="p-4 font-bold text-slate-400">Security</th>
                <th className="p-4 font-bold text-slate-400">Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white flex items-center gap-2"><Terminal className="h-4 w-4 text-blue-400" /> Go Microservices</td>
                <td className="p-4 text-slate-300 font-light font-mono">Low (Optimized memory footprint)</td>
                <td className="p-4 text-indigo-300 font-bold">10/10</td>
                <td className="p-4 text-indigo-300 font-bold">High (Static typing)</td>
                <td className="p-4 text-indigo-300 font-bold">Excellent (Sub-millisecond)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white flex items-center gap-2"><Layers className="h-4 w-4 text-indigo-400" /> Node.js / Express</td>
                <td className="p-4 text-slate-300 font-light font-mono">Medium (Event-driven process)</td>
                <td className="p-4 text-indigo-300 font-bold">8/10</td>
                <td className="p-4 text-indigo-300 font-bold">Medium (Dynamic script)</td>
                <td className="p-4 text-indigo-300 font-bold">Very Good (15-40ms)</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-400" /> Rust Warp Services</td>
                <td className="p-4 text-slate-300 font-light font-mono">Low (Zero-overhead compiler)</td>
                <td className="p-4 text-indigo-300 font-bold">10/10</td>
                <td className="p-4 text-indigo-300 font-bold">Max (Memory safety rules)</td>
                <td className="p-4 text-indigo-300 font-bold">Outstanding (Microsecond)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Queries</h2>
          <p className="text-sm text-slate-400 mt-2">Answers to key learning and operational deployment steps.</p>
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
                  <span className="flex items-center font-sans">
                    <HelpCircle className="h-4.5 w-4.5 mr-3 text-indigo-400 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <Minus className="h-4 w-4 shrink-0 ml-4" /> : <Plus className="h-4 w-4 shrink-0 ml-4" />}
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
