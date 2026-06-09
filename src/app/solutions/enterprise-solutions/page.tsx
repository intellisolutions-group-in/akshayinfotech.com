"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, ArrowRight, ShieldCheck, Zap, Server, BarChart3, 
  Users2, ArrowRightLeft, ShieldAlert, Cpu, HelpCircle, Check, Play, Settings
} from "lucide-react";

// ROI Calculator Values
const INITIAL_TRAFFIC = 500000;
const INITIAL_COST = 8500;

export default function EnterpriseSolutionsPage() {
  const [traffic, setTraffic] = useState(INITIAL_TRAFFIC);
  const [infraCost, setInfraCost] = useState(INITIAL_COST);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Document title
  useEffect(() => {
    document.title = "Enterprise Growth Solution | Akshay Infotech";
  }, []);

  // Calculator logic
  const estimatedSavings = Math.floor((infraCost * 0.42)); // 42% average cloud infra savings
  const scalabilityIndex = Math.min(100, Math.floor((traffic / 10000) * 1.5));
  const estimatedResponseTime = Math.max(12, Math.floor(180 - (traffic / 12000)));

  const growthSteps = [
    {
      title: "1. Infrastructure Auditing & Profiling",
      subtitle: "Full systems telemetry scan",
      description: "We analyze legacy operational bottlenecks, database indexing inefficiencies, and server redundancy architectures. By looking at slow SQL queries, query queues, thread pooling, and CPU/memory utilization patterns, we trace exact scaling limits."
    },
    {
      title: "2. Custom Schema Blueprinting",
      subtitle: "High throughput design phase",
      description: "Akshay database architects construct active-active database configurations, multi-region database replications, and microservice network pathways. We layout secure subnets, VPN gateways, and ingress configurations designed for low-latency queries."
    },
    {
      title: "3. Rolling Zero-Downtime Migration",
      subtitle: "Non-disruptive cloud transition",
      description: "We execute using modern blue-green deployment pipelines, migrating live enterprise pipelines without a single second of service disruption. Database updates are synchronized using database replication tools to prevent data loss."
    },
    {
      title: "4. Continuous Telemetry & Optimization",
      subtitle: "Real-time query optimization",
      description: "AI-driven load balancers actively route request streams, optimizing server usage patterns, auto-scaling container configurations, and lowering cloud resource bills while maintaining security."
    }
  ];

  const faqs = [
    {
      q: "How does Akshay guarantee zero downtime during cloud migration?",
      a: "We employ side-by-side infrastructure setup (Blue-Green deployment models). By maintaining active synchronization between your legacy systems and our newly built cloud clusters, we redirect traffic gradually using weighted DNS routing. If any issues are detected, traffic is reverted instantly."
    },
    {
      q: "Are these enterprise growth frameworks secure?",
      a: "Yes. All of our infrastructure layouts follow zero-trust network boundaries, rootless container executions, encrypted data storage both at rest and in transit, and active vulnerability tracking pipelines. We build standard audit logs directly into your system telemetry."
    },
    {
      q: "How do your database schemas handle high concurrent queries?",
      a: "We design multi-region database clusters with active-passive and active-active replica nodes. Combined with Redis distributed cache clusters to offload repetitive queries, database locks are virtually eliminated, dropping database load by up to 75%."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Centered Huge Watermark Branding */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10">
        <div className="text-[12vw] font-black tracking-widest text-center select-none text-blue-500/[0.022] blur-[1px] leading-none uppercase">
          ENTERPRISE SOLUTIONS
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 py-12">
          
          {/* Left: 3D Illustration Graphic (Pure CSS/SVG) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center bg-blue-950/20 border border-blue-500/10 rounded-full shadow-[0_0_80px_rgba(59,130,246,0.05)]">
              
              {/* Outer Orbit Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-dashed border-blue-500/20 rounded-full"
              />
              
              {/* Inner Orbit Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border border-blue-400/25 rounded-full"
              />

              {/* Floating Data Spheres */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              />
              <motion.div
                animate={{ y: [12, -12, 12] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              />

              {/* Core Isometric Growth Server Grid */}
              <div className="relative z-10 w-44 h-44 bg-slate-900/90 border border-white/10 rounded-2xl flex flex-col justify-between p-4 backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Scale Node</span>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                
                {/* Simulated charts */}
                <div className="flex items-end gap-1.5 h-16 pt-2">
                  <div className="w-full bg-blue-500/20 rounded h-1/3 animate-[pulse_2s_infinite]" />
                  <div className="w-full bg-blue-500/40 rounded h-1/2" />
                  <div className="w-full bg-blue-500/60 rounded h-2/3 animate-[pulse_3s_infinite]" />
                  <div className="w-full bg-blue-500 rounded h-[90%]" />
                </div>

                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-white/5 mt-1">
                  <span>CAPACITY</span>
                  <span className="text-white font-bold">99.98%</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Content + Metrics */}
          <div className="w-full lg:w-1/2 text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              <TrendingUp className="h-3.5 w-3.5" />
              Scale & Optimization
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Enterprise <br />Growth Architectures
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-light">
              We design custom high-capacity database schemas, secure network pathways, and cloud load-balancing clusters to accelerate enterprise productivity and lower overhead. Our solutions are custom-tailored for organizations seeking high concurrent capacities, secure networks, and robust cloud configurations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-2xl font-black text-white">42%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5 font-sans">Average Cost Saved</div>
              </div>
              <div className="border-l-2 border-indigo-500 pl-4">
                <div className="text-2xl font-black text-white">10x</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5 font-sans">Throughput Increase</div>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-6 py-3.5 rounded-xl font-bold transition-all hover:translate-y-[-1px] shadow-lg shadow-blue-500/10 cursor-pointer text-sm"
              >
                Consult Growth Specialist
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Core Industry Statistics Panel */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {[
            { value: "$2.4M", label: "Average Infrastructure Savings", desc: "For mid-to-large size enterprises transitioning to optimized cloud containerization." },
            { value: "14ms", label: "Average Response Time", desc: "Maintained under a load of 150,000 concurrent API query requests." },
            { value: "99.999%", label: "Uptime SLA Maintained", desc: "Active-active regional cluster nodes routing around hardware breakdowns." },
            { value: "85%", label: "Decrease in CPU Idle Time", desc: "Automated container systems shut down redundant VM nodes during quiet intervals." }
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl text-left backdrop-blur-md">
              <div className="text-3xl font-black text-blue-400 mb-1">{stat.value}</div>
              <div className="text-xs text-white font-bold uppercase tracking-wider mb-2">{stat.label}</div>
              <p className="text-[11px] text-slate-500 font-light leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Challenges & Proposed Solutions */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Overcoming Enterprise Scale Limits</h2>
          <p className="text-sm text-slate-400 mt-2">Solving structural bottlenecks to support millions of concurrent connections.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Legacy Challenges */}
          <div className="p-8 bg-red-950/10 border border-red-500/10 rounded-3xl">
            <h3 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5" />
              Legacy Infrastructure Vulnerabilities
            </h3>
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs shrink-0 mt-0.5">X</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Monolithic Bottlenecks</h4>
                  <p className="text-xs text-slate-400 font-light mt-1">Monolithic backend clusters experience service-wide crashes during unpredictable user spikes, locking databases and slowing operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs shrink-0 mt-0.5">X</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Database Locks & Query Queues</h4>
                  <p className="text-xs text-slate-400 font-light mt-1">Unoptimized SQL/NoSQL databases with unindexed joins and lack of replication lead to critical query response delays during high load.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs shrink-0 mt-0.5">X</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Inefficient VM Utilization</h4>
                  <p className="text-xs text-slate-400 font-light mt-1">High cloud server billing caused by inefficient CPU routing and dormant host servers that continue consuming monthly resources.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Proposed Solution */}
          <div className="p-8 bg-emerald-950/10 border border-emerald-500/10 rounded-3xl">
            <h3 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              Akshay Scale Engineering
            </h3>
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs shrink-0 mt-0.5"><Check className="h-3 w-3" /></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Horizontal Auto-Scaling Container networks</h4>
                  <p className="text-xs text-slate-300 font-light mt-1">Kubernetes-driven microservices that scale horizontally based on active memory usage thresholds, splitting request load seamlessly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs shrink-0 mt-0.5"><Check className="h-3 w-3" /></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Distributed Index Caching</h4>
                  <p className="text-xs text-slate-300 font-light mt-1">Real-time Redis caching nodes caching repetitive endpoint schemas, dropping database load by 75% and freeing indexing queues.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs shrink-0 mt-0.5"><Check className="h-3 w-3" /></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Dynamic Compute Balancing</h4>
                  <p className="text-xs text-slate-300 font-light mt-1">AI resource mapping scripts shutting down inactive server clusters during off-peak times, directly saving cloud budgets.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Business Use Cases Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Targeted Business Use Cases</h2>
          <p className="text-sm text-slate-400 mt-2">Custom configurations implemented across transaction-heavy industries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Global Supply Chain & Logistics",
              desc: "Providing sub-second track-and-trace endpoint resolution. We sync IoT tracking coordinates with distributed PostgreSQL replica nodes, accommodating massive telemetry ingress streams without lag."
            },
            {
              title: "High-Volume FinTech Portals",
              desc: "Integrating secure multi-signature payment processing frameworks. We structure private Virtual Private Cloud (VPC) subnets, isolation systems, and audit logging databases."
            },
            {
              title: "Multi-Tenant SaaS Environments",
              desc: "Structuring isolated database partitioning schemas. Users receive fast access through regional cache mirrors, while automated scaling rules prevent noisy tenants from reducing global speed."
            }
          ].map((useCase, idx) => (
            <div key={idx} className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl">
              <h4 className="text-base font-bold text-white mb-3">{useCase.title}</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual System Architecture Diagram */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Optimized Cloud Infrastructure Blueprint</h2>
          <p className="text-sm text-slate-400 mt-2">A high-level map of our zero-trust scalable microservice configurations.</p>
        </div>

        <div className="p-8 bg-slate-950/80 border border-white/10 rounded-[32px] flex flex-col items-center justify-center">
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mb-8">System Integration Layout</span>
          
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            
            {/* Step 1 */}
            <div className="p-4 bg-slate-900 border border-white/5 rounded-xl text-center">
              <span className="text-[10px] font-mono text-blue-400 block mb-1">STAGE 1</span>
              <h5 className="text-xs font-bold text-white">Global DNS Ingress</h5>
              <p className="text-[10px] text-slate-500 mt-1 font-light">Cloudflare WAF / Ingress Protection</p>
            </div>

            <div className="hidden md:flex justify-center text-slate-600"><ArrowRight className="h-5 w-5" /></div>

            {/* Step 2 */}
            <div className="p-4 bg-slate-900 border border-white/5 rounded-xl text-center">
              <span className="text-[10px] font-mono text-indigo-400 block mb-1">STAGE 2</span>
              <h5 className="text-xs font-bold text-white">Kubernetes Ingress</h5>
              <p className="text-[10px] text-slate-500 mt-1 font-light">Dynamic load routing balances</p>
            </div>

            <div className="hidden md:flex justify-center text-slate-600"><ArrowRight className="h-5 w-5" /></div>

            {/* Step 3 */}
            <div className="p-4 bg-slate-900 border border-white/5 rounded-xl text-center">
              <span className="text-[10px] font-mono text-purple-400 block mb-1">STAGE 3</span>
              <h5 className="text-xs font-bold text-white">Redis Cache & DB</h5>
              <p className="text-[10px] text-slate-500 mt-1 font-light">Regional data query cache nodes</p>
            </div>

          </div>

          <div className="h-px w-full bg-white/5 my-8" />

          <p className="text-xs text-slate-400 max-w-xl text-center font-light leading-relaxed">
            Requests hit our WAF filter nodes, routing to Kubernetes load balancers. Cache hits resolve in under 12ms, bypassing core database nodes to prevent read-locking and thread crashes.
          </p>
        </div>
      </section>

      {/* Technology Stack Details */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Modern Enterprise Tech Stack</h2>
          <p className="text-sm text-slate-400 mt-2">Engineered with robust open-source tools and cloud cloud architectures.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {[
            { title: "Docker Containers", desc: "Isolated environment packaging" },
            { title: "Kubernetes Orchestration", desc: "Automated scaling host grids" },
            { title: "Golang Microservices", desc: "High-performance processing APIs" },
            { title: "Redis Cache Clusters", desc: "Low latency cache replicas" },
            { title: "Prometheus Monitoring", desc: "Real-time system telemetry logs" },
            { title: "Terraform IaC blueprints", desc: "Reproducible cloud configuration blueprints" }
          ].map((stack, i) => (
            <div key={i} className="p-5 bg-slate-900/40 border border-white/5 rounded-xl text-left flex flex-col justify-between">
              <Cpu className="h-5 w-5 text-blue-400 mb-4" />
              <div>
                <h5 className="text-xs font-bold text-white">{stack.title}</h5>
                <p className="text-[9px] text-slate-500 mt-1 font-light leading-relaxed">{stack.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Process Flow */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Growth Engineering Pipeline</h2>
          <p className="text-sm text-slate-400 mt-2">Deploying scalable frameworks in structured architectural stages.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Steps Side List */}
          <div className="lg:col-span-1 space-y-4">
            {growthSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                  activeStep === idx 
                    ? "bg-blue-600/10 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.1)]" 
                    : "bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                }`}
              >
                <div className="font-bold text-xs uppercase tracking-wider mb-0.5">{step.title}</div>
                <div className="text-[11px] opacity-75 font-light">{step.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Step Detail Display Card */}
          <div className="lg:col-span-2 p-8 bg-slate-900/80 border border-white/10 rounded-3xl relative min-h-[240px] flex flex-col justify-between backdrop-blur-md text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-bold text-blue-400">{growthSteps[activeStep].title}</h4>
                <div className="text-xs text-slate-500 font-mono">{growthSteps[activeStep].subtitle}</div>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {growthSteps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2.5 mt-8 border-t border-white/5 pt-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Security Check: Passed</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-blue-500 font-bold">• Active Blueprint</span>
            </div>
          </div>

        </div>
      </section>

      {/* ROI Calculator Card */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <div className="bg-slate-950/80 border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 h-44 w-44 bg-blue-500/10 rounded-full blur-[70px] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Input Sliders */}
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-xl font-extrabold text-white mb-2">ROI Savings Calculator</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">Estimate infrastructure savings and operational latency reductions with Akshay scale architecture.</p>
              </div>

              {/* Monthly User Traffic Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-400">Monthly Traffic</span>
                  <span className="text-blue-400 font-mono font-bold">{traffic.toLocaleString()} requests</span>
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max="10000000" 
                  step="50000"
                  value={traffic} 
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Monthly Infrastructure Cost Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-400">Legacy Monthly Budget</span>
                  <span className="text-blue-400 font-mono font-bold">${infraCost.toLocaleString()} USD</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="500"
                  value={infraCost} 
                  onChange={(e) => setInfraCost(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>

            {/* Calculated Output Display */}
            <div className="flex flex-col justify-between bg-blue-950/20 border border-blue-500/10 p-6 rounded-2xl text-left">
              <div className="space-y-4">
                <div className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Simulated Annual Savings</div>
                <div className="text-4xl sm:text-5xl font-black text-white font-mono">${(estimatedSavings * 12).toLocaleString()}</div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">Based on average client database optimization metrics and server reduction data.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 mt-6 text-left">
                <div>
                  <div className="text-xs text-slate-500">Latency Index</div>
                  <div className="text-lg font-bold text-white font-mono">{estimatedResponseTime}ms</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Scalability Rating</div>
                  <div className="text-lg font-bold text-white font-mono">{scalabilityIndex}/100</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Before vs After Comparison Table */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Comparative Scaling Analysis</h2>
          <p className="text-sm text-slate-400 mt-2">How Akshay architectures redefine base level operational capabilities.</p>
        </div>

        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-slate-900/50 backdrop-blur-md">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-slate-950/50">
                <th className="p-4 font-bold text-slate-400">Operational Metric</th>
                <th className="p-4 font-bold text-red-400">Legacy Architecture</th>
                <th className="p-4 font-bold text-emerald-400">Akshay Scale Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Concurrent Request Limit</td>
                <td className="p-4 text-slate-400 font-light">Max 10,000 req/sec before server crashes</td>
                <td className="p-4 text-emerald-300 font-bold">100,000+ req/sec (Auto-scaled container network)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Average Database Query</td>
                <td className="p-4 text-slate-400 font-light">180ms - 320ms latency during load</td>
                <td className="p-4 text-emerald-300 font-bold">12ms - 25ms (Indexed & Regional Cached)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Deployment Downtime</td>
                <td className="p-4 text-slate-400 font-light">1 - 2 hours per version patch release</td>
                <td className="p-4 text-emerald-300 font-bold">0 seconds downtime (Blue-Green Pipeline)</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-semibold text-white">Resource Idle Allocation</td>
                <td className="p-4 text-slate-400 font-light">~45% servers running idle during quiet hours</td>
                <td className="p-4 text-emerald-300 font-bold">Less than 5% idle (Kubernetes dynamic node scaling)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Future Operational Roadmap</h2>
          <p className="text-sm text-slate-400 mt-2">Planned infrastructure modifications to maintain high competitive capacity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { phase: "PHASE 1 - Q3 2026", title: "Autonomous Auto-Scale Rules", desc: "Integrating auto-regressive machine learning models to predict traffic loads 15 minutes before they happen and spin up container nodes in anticipation." },
            { phase: "PHASE 2 - Q1 2027", title: "Edge Query Processing", desc: "Moving basic indexing and cache retrieval processes from centralized cloud zones to local CDN edge points, lowering database queries to sub-5ms." },
            { phase: "PHASE 3 - Q4 2027", title: "Zero-Trust Mesh Networking", desc: "Deploying secure sidecar networks across all microservices to encrypt and audit internal traffic queries automatically." }
          ].map((road, idx) => (
            <div key={idx} className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl relative">
              <span className="text-[10px] font-mono font-bold text-blue-400 block mb-2">{road.phase}</span>
              <h4 className="text-base font-bold text-white mb-2">{road.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{road.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Scale Architecture FAQs</h2>
          <p className="text-sm text-slate-400 mt-2">Answers to key enterprise growth and database configuration queries.</p>
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
        <div className="p-8 md:p-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-48 w-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <h4 className="text-xl sm:text-2xl font-bold mb-2">Ready to scale your business operations?</h4>
          <p className="text-xs sm:text-sm text-blue-100 mb-8 max-w-lg mx-auto font-light">Review your current legacy constraints and database bottlenecks with a Akshay systems engineer.</p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 transition-all rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-blue-900/20"
          >
            Schedule System Audit
            <ArrowRight className="h-4 w-4 text-blue-700" />
          </Link>
        </div>
      </section>

    </div>
  );
}
