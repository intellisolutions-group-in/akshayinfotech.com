"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, LineChart, Cpu, BarChart3, ArrowRight, Play, RefreshCw, 
  HelpCircle, ShieldCheck, Terminal, Server, Activity, ChevronRight, Sparkles 
} from "lucide-react";

export default function DataIntelligenceDashboardPage() {
  const [bootState, setBootState] = useState<"dormant" | "booting" | "drawing" | "active">("dormant");
  const [logs, setLogs] = useState<string[]>([]);
  const [cpuLoad, setCpuLoad] = useState(0);
  const [trafficCounter, setTrafficCounter] = useState(0);
  const [selectedTab, setSelectedTab] = useState<"revenue" | "latency" | "threats">("revenue");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Document Title
  useEffect(() => {
    document.title = "Data Intelligence Dashboard | Akshay Infotech";
  }, []);

  // System Booting Sequence Handler
  const startBootSequence = () => {
    setBootState("booting");
    setLogs([]);
    setCpuLoad(0);

    const bootLogs = [
      "INITIALIZING AKSHAY INGRESS CONTROLLER...",
      "CONNECTING KAFKA MESSAGE BROKERS [PORT 9092]...",
      "TUNNELING SECURE TLS ENDPOINTS...",
      "SPAWNING APACHE SPARK STREAMING ENGINE...",
      "MOUNTING TIMESCALEDB STORAGE PARALLELS...",
      "ESTABLISHING COLUMNAR CLICKHOUSE INDEXES...",
      "BOOTING REAL-TIME DISPATCH AGENTS...",
      "DASHBOARD INGRESS CHANNELS STABILIZED."
    ];

    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[logIndex]]);
        setCpuLoad(Math.min(98, Math.floor(Math.random() * 20) + (logIndex * 12)));
        logIndex++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => {
          setBootState("drawing");
          animateNumbers();
        }, 800);
      }
    }, 280);
  };

  // Numbers Count Up Animation
  const animateNumbers = () => {
    let count = 0;
    const target = 14820930;
    const step = Math.floor(target / 45);
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        setTrafficCounter(target);
        clearInterval(interval);
        setTimeout(() => {
          setBootState("active");
        }, 600);
      } else {
        setTrafficCounter(count);
      }
    }, 30);
  };

  const faqs = [
    {
      q: "What message brokers and queue platforms does your ingestion layer support?",
      a: "Our ingestion blueprints support Apache Kafka, AWS Kinesis, RabbitMQ, and EMQX. We configure clusters to handle millions of events per second with multi-partition setups and dynamic routing."
    },
    {
      q: "How does the platform prevent data loss during network spikes?",
      a: "We implement dynamic partition replication and local storage buffers. If consumer microservices or database sync targets slow down, the message broker buffers incoming logs safely, scaling up consumers to clear the backlog."
    },
    {
      q: "Is real-time BI reporting fully secure under standard privacy guidelines?",
      a: "Yes. All data streams can be passed through anonymization pipelines that mask personally identifiable information (PII) before storage. Data is encrypted using enterprise-grade encryption both inside queues and in the warehouse."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Background Watermark Diagonal Placement */}
      <div className="absolute top-1/4 -right-16 transform rotate-90 pointer-events-none select-none overflow-hidden -z-10 origin-top-right">
        <div className="text-[12vw] font-black tracking-widest text-indigo-500/[0.025] blur-[1px] uppercase">
          DIGITAL INNOVATION
        </div>
      </div>

      {/* Background Watermark Bottom Left */}
      <div className="absolute bottom-10 left-10 pointer-events-none select-none overflow-hidden -z-10 text-left">
        <div className="text-[90px] font-black tracking-widest text-blue-500/[0.02] uppercase leading-none">
          FUTURE READY SYSTEMS
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            <Database className="h-3.5 w-3.5" />
            Data Intelligence Engine
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
            Real-Time Data Ingestion & Analytics
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
            Decouple high-speed database write queues, deploy stream telemetry pipelines, and orchestrate telemetry insights in a single live dashboard.
          </p>
        </div>
      </section>

      {/* Signature Interactive Section: The Bootable Dashboard */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Data Intelligence Dashboard Sandbox</h2>
          <p className="text-sm text-slate-400 mt-2">Trigger the system bootup to deploy and visualize mock data streams live.</p>
        </div>

        <div className="bg-slate-950/80 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-xl min-h-[540px] flex flex-col">
          
          {/* Top Panel Controls */}
          <div className="px-6 py-4 bg-slate-900/60 border-b border-white/5 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-xs text-slate-500 font-mono pl-3">SYSTEM_ID // AKSHAY-INTEL-DB-09</span>
            </div>

            {bootState === "dormant" && (
              <button 
                onClick={startBootSequence}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/10 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Boot Analytical Panel
              </button>
            )}

            {bootState !== "dormant" && (
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Activity className={`h-4.5 w-4.5 ${bootState === "active" ? "text-green-400 animate-pulse" : "text-amber-400 animate-spin"}`} />
                  CPU Load: <strong className="text-white">{cpuLoad}%</strong>
                </span>
                <button 
                  onClick={startBootSequence}
                  className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer"
                  title="Reboot System"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>

          <div className="flex-1 p-6 flex flex-col justify-center">
            
            {/* DORMANT STATE */}
            {bootState === "dormant" && (
              <div className="max-w-md mx-auto text-center space-y-4 py-12">
                <div className="h-16 w-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mx-auto">
                  <Terminal className="h-8 w-8 text-indigo-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Platform Offline</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  The mock telemetry environment is currently sleeping. Trigger the boot sequence above to provision stream engines, clickhouse tables, and live data charts.
                </p>
              </div>
            )}

            {/* BOOTING STATE */}
            {bootState === "booting" && (
              <div className="w-full max-w-xl mx-auto space-y-6 text-left py-8">
                <div className="flex justify-between items-center text-xs font-mono text-indigo-400">
                  <span>PROVISIONING CLUSTER...</span>
                  <span>{cpuLoad}% CPU</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${(logs.length / 8) * 100}%` }} />
                </div>
                <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4 h-44 overflow-y-auto font-mono text-[10px] text-slate-300 space-y-1.5">
                  {logs.map((log, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-indigo-500 font-bold">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DRAWING STATE */}
            {bootState === "drawing" && (
              <div className="max-w-md mx-auto text-center space-y-4 py-12 animate-pulse">
                <div className="h-14 w-14 rounded-full border border-indigo-500/30 flex items-center justify-center mx-auto text-indigo-400">
                  <RefreshCw className="h-6 w-6 animate-spin" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Drawing Telemetry Charts</h4>
                <div className="text-3xl font-black text-white font-mono">
                  {trafficCounter.toLocaleString()}
                </div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Processing Ingress Rows</p>
              </div>
            )}

            {/* ACTIVE STATE */}
            {bootState === "active" && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Total Stream Ingress</div>
                    <div className="text-xl font-bold text-white font-mono mt-1.5">{trafficCounter.toLocaleString()}</div>
                    <div className="text-[9px] text-emerald-400 mt-1">▲ 14.8% from yesterday</div>
                  </div>
                  <div className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Average Node Latency</div>
                    <div className="text-xl font-bold text-indigo-400 font-mono mt-1.5">11.82 ms</div>
                    <div className="text-[9px] text-slate-500 mt-1">WAF processing queue active</div>
                  </div>
                  <div className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Kafka Queue Heap</div>
                    <div className="text-xl font-bold text-white font-mono mt-1.5">0.03%</div>
                    <div className="text-[9px] text-emerald-400 mt-1">Healthy buffers maintained</div>
                  </div>
                  <div className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Security Audit Check</div>
                    <div className="text-xl font-bold text-white font-mono mt-1.5 flex items-center gap-1.5">
                      100% SECURE
                    </div>
                    <div className="text-[9px] text-slate-500 mt-1">Enterprise-grade payload encryption</div>
                  </div>
                </div>                 {/* Main Graph & Tabs Panel */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Visual Chart */}
                  <div className="lg:col-span-2 p-5 bg-slate-900/30 border border-white/5 rounded-2xl text-left">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Performance Telemetry Graph</h5>
                      
                      <div className="flex bg-slate-950 p-0.5 rounded-lg border border-white/5">
                        {(["revenue", "latency", "threats"] as const).map(tab => (
                          <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-3 py-1 rounded-md text-[10px] font-bold capitalize transition-all cursor-pointer ${
                              selectedTab === tab 
                                ? "bg-indigo-600 text-white" 
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="relative h-48 bg-slate-950/60 border border-white/5 rounded-xl flex items-end p-3 overflow-hidden">
                      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                        {selectedTab === "revenue" && (
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6 }}
                            d="M 0 140 C 60 120 120 80 180 110 T 360 40 T 540 80 L 720 30 L 720 200 L 0 200 Z"
                            fill="url(#activeGrad)"
                            stroke="#6366f1"
                            strokeWidth="2"
                          />
                        )}
                        {selectedTab === "latency" && (
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6 }}
                            d="M 0 90 Q 90 100 180 70 T 360 110 T 540 60 L 720 50 L 720 200 L 0 200 Z"
                            fill="url(#activeGrad)"
                            stroke="#8B5CF6"
                            strokeWidth="2"
                          />
                        )}
                        {selectedTab === "threats" && (
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6 }}
                            d="M 0 180 L 120 160 L 240 170 L 360 120 L 480 140 L 600 70 L 720 80 L 720 200 L 0 200 Z"
                            fill="url(#activeGrad)"
                            stroke="#EF4444"
                            strokeWidth="2"
                          />
                        )}
                        <defs>
                          <linearGradient id="activeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="w-full flex justify-between text-[8px] font-mono text-slate-500 z-10">
                        <span>00:00</span>
                        <span>04:00</span>
                        <span>08:00</span>
                        <span>12:00</span>
                        <span>16:00</span>
                        <span>20:00</span>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Alert & Actions */}
                  <div className="lg:col-span-1 p-5 bg-slate-900/30 border border-white/5 rounded-2xl text-left flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3">
                        <Sparkles className="h-4.5 w-4.5" />
                        AI Ingestion Insights
                      </div>
                      <div className="p-3 bg-indigo-950/20 border border-indigo-500/20 rounded-xl space-y-2.5">
                        <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                          ClickHouse table structures have automatically optimized partitions, routing queries to index 2a.
                        </p>
                        <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                          <ChevronRight className="h-3 w-3 inline text-emerald-400" /> Database lock risk: 0.00%
                        </p>
                      </div>
                    </div>

                    <button className="w-full mt-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl border border-white/10 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer">
                      Export Ingress Logs
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                </div>
              </motion.div>
            )}

          </div>

        </div>
      </section>

      {/* Business Challenges vs Solutions */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Overcoming Stream Performance Limits</h2>
          <p className="text-sm text-slate-400 mt-2">Dismantling database write locks and index queues.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div className="p-8 bg-red-950/10 border border-red-500/15 rounded-3xl">
            <h3 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
              Legacy Storage Challenges
            </h3>
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs shrink-0 mt-0.5">X</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Database Thread Locking</h4>
                  <p className="text-xs text-slate-400 font-light mt-1">If thousands of devices write telemetry rows straight to standard SQL databases, tables lock up and reject queries.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs shrink-0 mt-0.5">X</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Stale Report Generation</h4>
                  <p className="text-xs text-slate-400 font-light mt-1">Processing data in slow batches means dashboards update every few hours, causing delayed critical choices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="p-8 bg-emerald-950/10 border border-emerald-500/15 rounded-3xl">
            <h3 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
              Akshay Telemetry Engineering
            </h3>
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs shrink-0 mt-0.5">+</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Kafka Buffer Queueing</h4>
                  <p className="text-xs text-slate-300 font-light mt-1">Ingesting data streams into partition topics, keeping database nodes isolated from write bottlenecks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs shrink-0 mt-0.5">+</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">ClickHouse Columnar Storage</h4>
                  <p className="text-xs text-slate-300 font-light mt-1">Storing indexes column by column, enabling complex aggregations over millions of rows to return in milliseconds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Ingestion Pipeline Table */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Live Query Endpoint Auditing</h2>
          <p className="text-sm text-slate-400 mt-2">Active API metrics routing telemetry endpoints.</p>
        </div>

        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-slate-900/50 backdrop-blur-md">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-slate-950/50">
                <th className="p-4 font-bold text-slate-400">Database Cluster ID</th>
                <th className="p-4 font-bold text-slate-400">Total Index Records</th>
                <th className="p-4 font-bold text-slate-400">Average Node Latency</th>
                <th className="p-4 font-bold text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-mono text-xs text-indigo-300">db-cluster-node-01a</td>
                <td className="p-4 text-slate-300">4,821,489 rows</td>
                <td className="p-4 text-emerald-400 font-mono">1.22 ms</td>
                <td className="p-4 text-slate-400"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">ACTIVE</span></td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-mono text-xs text-indigo-300">db-cluster-node-02b</td>
                <td className="p-4 text-slate-300">12,192,551 rows</td>
                <td className="p-4 text-emerald-400 font-mono">4.18 ms</td>
                <td className="p-4 text-slate-400"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">ACTIVE</span></td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-mono text-xs text-indigo-300">db-cluster-node-03c</td>
                <td className="p-4 text-slate-300">2,881,102 rows</td>
                <td className="p-4 text-emerald-400 font-mono">0.89 ms</td>
                <td className="p-4 text-slate-400"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">ACTIVE</span></td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-mono text-xs text-indigo-300">db-cluster-node-04d</td>
                <td className="p-4 text-slate-300">7,225,981 rows</td>
                <td className="p-4 text-amber-400 font-mono">18.42 ms</td>
                <td className="p-4 text-slate-400"><span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold">RE-INDEXING</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Analytics Stack FAQs</h2>
          <p className="text-sm text-slate-400 mt-2">Answers to key operational data staging and query performance questions.</p>
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
