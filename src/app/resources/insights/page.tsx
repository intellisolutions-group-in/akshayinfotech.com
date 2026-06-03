"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Download, Calendar, User, ArrowRight, Share2, 
  HelpCircle, ChevronRight, Bookmark, Search, Cpu, Lightbulb
} from "lucide-react";

export default function KnowledgeHubPage() {
  const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({});
  const [activeResearchTab, setActiveResearchTab] = useState("cloud");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Document Title
  useEffect(() => {
    document.title = "Knowledge Hub | Nexora Technologies";
  }, []);

  const triggerDownload = (id: string) => {
    if (downloadProgress[id] !== undefined) return;
    setDownloadProgress(prev => ({ ...prev, [id]: 0 }));
    
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      if (current >= 100) {
        setDownloadProgress(prev => ({ ...prev, [id]: 100 }));
        clearInterval(interval);
        setTimeout(() => {
          setDownloadProgress(prev => {
            const copy = { ...prev };
            delete copy[id];
            return copy;
          });
        }, 1000);
      } else {
        setDownloadProgress(prev => ({ ...prev, [id]: current }));
      }
    }, 100);
  };

  const researchPapers = [
    {
      id: "rp-1",
      category: "cloud",
      title: "Microservices Scalability & Load Management Patterns",
      author: "Dr. Elena Rostova",
      date: "May 2026",
      readTime: "12 min read",
      summary: "An in-depth analysis of multi-region database replication patterns, proxy load balancer configs, and Kubernetes container scaling behaviors under massive queries."
    },
    {
      id: "rp-2",
      category: "security",
      title: "Zero-Trust Architecture for Distributed Logistics Portals",
      author: "Marcus Vance",
      date: "April 2026",
      readTime: "18 min read",
      summary: "Exploring IAM credential lifecycle policies, pen-testing logs, network subnet bounds, and hardware key decryption standards in cloud architectures."
    },
    {
      id: "rp-3",
      category: "ai",
      title: "Optimizing Vector Search Indexes for LLM Pipelines",
      author: "Sarah Jenkins",
      date: "March 2026",
      readTime: "14 min read",
      summary: "Testing retrieval latency metrics of Pinecone vs pgvector database configurations across 10 million test query streams."
    }
  ];

  const faqs = [
    {
      q: "Are the resources and whitepapers updated regularly?",
      a: "Yes. Our cloud architects and security engineers update the codebase checklists and architectural design guidelines quarterly to account for new security patches and cloud standards."
    },
    {
      q: "Can I distribute the schemas and zip configurations inside my firm?",
      a: "Yes. All downloaded resources are distributed under the MIT license, allowing teams to reference and integrate our blueprints inside their local environments."
    },
    {
      q: "How can I book a detailed review of one of these whitepapers?",
      a: "You can click on any CTA link to request a custom discovery call. Our team will go over the architecture steps in detail."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#03050c] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Vertically Rotated Watermark on Left Margin */}
      <div className="absolute top-1/4 left-4 h-[600px] w-[50px] pointer-events-none select-none overflow-hidden -z-10 writing-mode-vertical">
        <div className="text-[60px] font-black tracking-widest text-slate-500/[0.02] rotate-90 origin-top-left transform uppercase whitespace-nowrap">
          KNOWLEDGE HUB
        </div>
      </div>

      {/* Center Giant Transparent Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10">
        <div className="text-[10vw] font-black tracking-widest text-blue-500/[0.015] blur-[1px] uppercase">
          DIGITAL INNOVATION
        </div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-left">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
            <BookOpen className="h-3.5 w-3.5" />
            Research Portal & Insights
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-blue-100 to-indigo-300 bg-clip-text text-transparent">
            Technology Publications <br />& Whitepapers
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-light">
            In-depth guides, telemetry analysis, and research publications authored by Nexora systems architects. Free resources built to clarify structural scaling queries.
          </p>
        </div>
      </section>

      {/* Featured Insight Card */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="p-8 bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-md text-left flex flex-col lg:flex-row items-center gap-12 hover:border-blue-500/25 transition-all duration-300">
          
          {/* Featured Visual */}
          <div className="w-full lg:w-2/5 h-64 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-white/5 rounded-2xl flex flex-col justify-between p-6 relative overflow-hidden group">
            <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">LATEST PUBLICATION</span>
              <h4 className="text-lg font-bold text-white leading-tight">Scale-Out DB Models</h4>
            </div>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md rounded-2xl" />
          </div>

          {/* Featured Text */}
          <div className="w-full lg:w-3/5 space-y-4">
            <span className="text-xs font-mono uppercase text-blue-400 font-bold">Featured Insight</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">Re-architecting SQL Data Pipeline Latency for Global Portals</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              We present live telemetry detailing how adding Redis cached indexes reduced DB locks during peak shipping seasons, improving concurrent user throughput by 10x and preventing server crashes.
            </p>
            
            <div className="flex items-center gap-4 text-xs text-slate-500 font-mono pt-2">
              <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> Sarah Jenkins</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> May 2026</span>
            </div>
            
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read Whitepaper
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Research Highlights Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
          <div className="text-left">
            <h3 className="text-xl font-bold text-white">Research & Whitepapers</h3>
            <p className="text-xs text-slate-500 font-light mt-1">Deep structural software telemetry studies.</p>
          </div>

          {/* Tabs */}
          <div className="flex bg-slate-900 border border-white/5 p-1 rounded-xl">
            {[
              { id: "cloud", label: "Cloud Infra" },
              { id: "security", label: "Security & Zero Trust" },
              { id: "ai", label: "Artificial Intel" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveResearchTab(tab.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeResearchTab === tab.id 
                    ? "bg-blue-600 text-white" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {researchPapers
              .filter((p) => p.category === activeResearchTab)
              .map((paper) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl flex flex-col justify-between text-left backdrop-blur-md"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold">{paper.readTime}</span>
                    <h4 className="text-base font-bold text-white hover:text-blue-400 transition-colors leading-snug">{paper.title}</h4>
                    <p className="text-xs text-slate-450 leading-relaxed font-light">{paper.summary}</p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>By {paper.author}</span>
                    <span>{paper.date}</span>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

      </section>

      {/* Interactive Resource Downloads */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Interactive Resource Downloads</h2>
          <p className="text-sm text-slate-400 mt-2">Download technical guidelines and standard operation blueprints.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { id: "dl-1", title: "Kubernetes Deploy Checklist", format: "PDF • 2.4 MB" },
            { id: "dl-2", title: "SSO IAM Integration Schema", format: "ZIP • 8.1 MB" },
            { id: "dl-3", title: "Aurora MySQL Index Blueprint", format: "PDF • 1.9 MB" }
          ].map((dl) => {
            const pct = downloadProgress[dl.id];
            const isDownloading = pct !== undefined && pct < 100;
            return (
              <div key={dl.id} className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl text-left flex flex-col justify-between gap-4 backdrop-blur-md">
                <div>
                  <h4 className="text-sm font-bold text-white">{dl.title}</h4>
                  <span className="text-[10px] text-slate-500 font-mono mt-1 block">{dl.format}</span>
                </div>

                {pct !== undefined ? (
                  <div className="space-y-1.5 w-full">
                    <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                      <span>{isDownloading ? "Downloading..." : "Completed"}</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => triggerDownload(dl.id)}
                    className="w-full py-2 bg-blue-600/10 hover:bg-blue-600 border border-blue-500/25 hover:border-blue-500 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer text-blue-400 hover:text-white"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download File
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Trends & Forecasts Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Technological Forecasts (2026 - 2028)</h2>
          <p className="text-sm text-slate-400 mt-2">Planned changes and patterns predicted by our technology engineering team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { category: "INFRASTRUCTURE", title: "WebAssembly Edge Runtimes", desc: "Shifting traditional Node/Go container tasks to local edge WebAssembly targets, eliminating cold start speeds entirely." },
            { category: "CYBER SECURITY", title: "Post-Quantum Decryption Blocks", desc: "Pre-configuring public/private key subnets to handle incoming quantum factorization calculations safely." },
            { category: "DEVELOPMENT", title: "Federated API Registries", desc: "Consolidating distributed enterprise APIs into isolated proxy systems, allowing developers to query endpoints dynamically." }
          ].map((forecast, idx) => (
            <div key={idx} className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl relative">
              <span className="text-[10px] font-mono font-bold text-blue-400 block mb-2">{forecast.category}</span>
              <h4 className="text-base font-bold text-white mb-2">{forecast.title}</h4>
              <p className="text-xs text-slate-450 leading-relaxed font-light">{forecast.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Resource & Publication FAQs</h2>
          <p className="text-sm text-slate-400 mt-2">Answers to key operational research and database index queries.</p>
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
                  <span className="flex items-center">
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
          <h4 className="text-xl sm:text-2xl font-bold mb-2 font-sans">Want custom telemetry audits?</h4>
          <p className="text-xs sm:text-sm text-blue-150 mb-8 max-w-lg mx-auto font-light leading-relaxed">Book a consultation session with a Nexora systems engineer to review your legacy database configurations.</p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 transition-all rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-blue-900/20"
          >
            Request Technical Consulting
            <ArrowRight className="h-4 w-4 text-blue-700" />
          </Link>
        </div>
      </section>

    </div>
  );
}
