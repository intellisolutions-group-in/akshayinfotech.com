"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, HelpCircle, ArrowRight, Cpu, Layers, ShieldCheck, 
  Check, Server, RefreshCw, Globe, Key, Cloud, Eye, Shield 
} from "lucide-react";

export default function EnterpriseArchitecturePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<string>("kubernetes");

  // Document Title
  useEffect(() => {
    document.title = "Enterprise Architecture | Akshay Infotech";
  }, []);

  const architectureLayers = [
    {
      id: "layer-5",
      name: "User & Gateway Ingress Layer",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      description: "Handles dynamic request load routing. Incorporates DDoS shield buffers, TLS termination proxies, and Route 53 latency routing matrices.",
      techStack: "Cloudflare WAF / Kong Gateway / Route 53",
      telemetry: "Ingress queries: 4.8M/sec // Threat Block Rate: 100%"
    },
    {
      id: "layer-4",
      name: "Application & Microservice Mesh",
      icon: Cpu,
      color: "from-blue-600 to-indigo-600",
      description: "High-performance containerized microservices scaling dynamically on request load spikes. Message channels route traffic using Kafka clusters.",
      techStack: "Golang / Node.js / Apache Kafka / gRPC",
      telemetry: "Thread Pool: Healthy // Worker Pods: 140 Active"
    },
    {
      id: "layer-3",
      name: "Telemetry & Security isolation Mesh",
      icon: Shield,
      color: "from-indigo-600 to-purple-600",
      description: "Handles active zero-trust authentication checks. System logs are audited by sidecar networks, securing private data fields.",
      techStack: "HashiCorp Vault / Prometheus / Istio Mesh",
      telemetry: "TLS Handshake: 1.1ms // Security Audit: Clean"
    },
    {
      id: "layer-2",
      name: "Distributed In-Memory Cache & Storage Lake",
      icon: Database,
      color: "from-purple-600 to-fuchsia-600",
      description: "Low-latency database queues mapping read queries to replica memory nodes. Columnar ClickHouse clusters handle event analytical telemetry.",
      techStack: "TimescaleDB / ClickHouse / Redis Cache Grid",
      telemetry: "Cache Hit Rate: 94.2% // DB Master Node: Sync"
    },
    {
      id: "layer-1",
      name: "Multi-Region Cloud Foundations",
      icon: Cloud,
      color: "from-fuchsia-600 to-pink-600",
      description: "The core cloud container network. Infrastructure routes are provisioned via Terraform scripts across secure local database zones.",
      techStack: "Terraform / AWS VPC / GCP Engine Regions",
      telemetry: "Infrastructure SLA: 99.999% // Multi-Zone Config"
    }
  ];

  const faqs = [
    {
      q: "How does Akshay protect transaction databases from data loss during sync?",
      a: "We configure double-write databases. Our application writes logs to both local database nodes and new AWS cloud replicas, resolving transaction drift using Kafka message brokers."
    },
    {
      q: "How do you optimize monthly billing costs inside AWS or Google Cloud?",
      a: "We deploy automated resource mapping scripts. Containers spin up and down dynamically based on active memory usage thresholds, avoiding static VM rental costs."
    },
    {
      q: "Can you migrate legacy architectures to hybrid cloud configurations?",
      a: "Yes. We configure private Virtual Private Cloud (VPC) connections, VPN gateways, and local API facades to sync local data servers with public cloud networks."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Giant Diagonal Watermark branding placement */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 pointer-events-none select-none overflow-hidden -z-10 w-full text-center">
        <div className="text-[12vw] font-black tracking-widest text-indigo-500/[0.022] blur-[1px] uppercase">
          AKSHAY INFOTECH
        </div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            <Layers className="h-3.5 w-3.5" />
            Infrastructure Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
            Enterprise Architecture Build
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
            Scroll down to watch our 5-layer secure cloud architecture build itself live. Engineered with zero-trust credentials and auto-scaling node boundaries.
          </p>
        </div>
      </section>

      {/* Signature Interactive Stack Animation Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Live System Build Showcase</h2>
          <p className="text-sm text-slate-400 mt-2">Observe our multi-layered infrastructure assemble progressively as you scan the system layers.</p>
        </div>

        <div className="space-y-8 relative">
          {architectureLayers.map((layer, idx) => {
            const LayerIcon = layer.icon;
            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#090d1f]/80 border border-white/10 rounded-[24px] overflow-hidden p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start hover:border-white/20 transition-all backdrop-blur-xl shadow-xl shadow-black/40"
              >
                {/* Visual Glow Indicator */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${layer.color}`} />

                {/* Left: Isometric Layer Icon Block */}
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${layer.color} text-white flex items-center justify-center shadow-lg shrink-0`}>
                  <LayerIcon className="h-8 w-8" />
                </div>

                {/* Middle: Content */}
                <div className="flex-1 text-left space-y-3">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    SYSTEM COMPONENT // 0{5 - idx}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {layer.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {layer.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[9px] text-slate-300">
                      Tech: {layer.techStack}
                    </span>
                  </div>
                </div>

                {/* Right: Live Telemetry Output */}
                <div className="w-full md:w-56 p-4 bg-slate-950/60 border border-white/5 rounded-xl text-left font-mono text-[10px] space-y-1.5 self-stretch flex flex-col justify-between">
                  <div>
                    <div className="text-[9px] text-indigo-400 font-bold uppercase">Telemetry Node Output</div>
                    <div className="text-slate-400 mt-1 leading-normal break-all font-mono">
                      {layer.telemetry}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-[9px] font-bold mt-2">
                    <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    STATUS: ACTIVE
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Cloud Infrastructure Comparison</h2>
          <p className="text-sm text-slate-400 mt-2">How Akshay container grids outperform static legacy virtualization setups.</p>
        </div>

        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-slate-900/50 backdrop-blur-md">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-slate-950/50">
                <th className="p-4 font-bold text-slate-400">Architectural Metric</th>
                <th className="p-4 font-bold text-red-400">Standard Virtual Machines</th>
                <th className="p-4 font-bold text-emerald-400">Akshay Managed Cluster</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Scaling Boot-Up Duration</td>
                <td className="p-4 text-slate-400 font-light">3 - 5 minutes per VM instance</td>
                <td className="p-4 text-emerald-300 font-bold">Sub-3 seconds (Docker Container spawns)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Resource Allocation Cost</td>
                <td className="p-4 text-slate-400 font-light">Static 24/7 server rental fee</td>
                <td className="p-4 text-emerald-300 font-bold">Pay-per-second auto-scaling compute usage</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Hardware Redundancy</td>
                <td className="p-4 text-slate-400 font-light">Active-passive backup (delayed replica boot)</td>
                <td className="p-4 text-emerald-300 font-bold">Active-active multi-region Kubernetes load balancing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQS */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Cloud Architecture FAQs</h2>
          <p className="text-sm text-slate-400 mt-2">Answers to key enterprise cloud layout and cost optimization questions.</p>
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


    </div>
  );
}
