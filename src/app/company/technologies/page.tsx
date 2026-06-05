"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, ArrowRight, Layers, Cpu, Server, Shield, HelpCircle,
  Database, Globe, Zap, Terminal, GitBranch, Cloud, Lock,
  CheckCircle, BarChart3, Activity, MonitorSmartphone, Workflow
} from "lucide-react";

export default function TechnologiesPage() {
  const [activeStack, setActiveStack] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Technologies | Akshay Infotech";
  }, []);

  const stackCategories = [
    {
      icon: Layers,
      title: "Frontend Engineering",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React 19", level: 98, desc: "Our primary UI library. We leverage server components, suspense boundaries, and concurrent rendering for blazing-fast interfaces." },
        { name: "Next.js 15", level: 96, desc: "Full-stack React framework with App Router, server actions, and Turbopack compilation for instant development feedback." },
        { name: "TypeScript", level: 97, desc: "Strict type checking on every project. We enforce no-any rules, proper generics, and comprehensive interface definitions." },
        { name: "Framer Motion", level: 92, desc: "Production-grade animation library for scroll-triggered reveals, layout animations, and gesture-based interactions." }
      ],
      summary: "We write clean, semantic markup with strict accessibility compliance, enforce hydration safety checks, and build responsive designs that render beautifully across all viewport sizes."
    },
    {
      icon: Cpu,
      title: "Backend & Microservices",
      color: "from-indigo-500 to-purple-500",
      technologies: [
        { name: "Node.js (NestJS)", level: 95, desc: "Enterprise-grade backend framework with dependency injection, decorators, and modular architecture patterns." },
        { name: "Go (Golang)", level: 90, desc: "High-performance microservices for compute-heavy workloads. Concurrency primitives and minimal memory footprint." },
        { name: "Python (FastAPI)", level: 88, desc: "ML pipeline integrations and data processing endpoints with automatic OpenAPI documentation generation." },
        { name: "GraphQL", level: 93, desc: "Type-safe API layer with schema federation for microservice architectures and real-time subscriptions." }
      ],
      summary: "We build fast API endpoints, asynchronous queue processors, WebSocket connections, and event-driven microservices that handle millions of concurrent requests."
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      color: "from-cyan-500 to-emerald-500",
      technologies: [
        { name: "AWS", level: 96, desc: "EC2, Lambda, RDS, S3, CloudFront, ECS — we architect auto-scaling VPC setups with multi-AZ redundancy." },
        { name: "Kubernetes", level: 92, desc: "Container orchestration with custom Helm charts, horizontal pod autoscaling, and rolling update strategies." },
        { name: "Terraform", level: 94, desc: "Infrastructure-as-Code for reproducible, version-controlled cloud environments across all providers." },
        { name: "Docker", level: 97, desc: "Containerized development and deployment workflows with multi-stage builds optimized for minimal image sizes." }
      ],
      summary: "We write Infrastructure as Code to configure auto-scaling setups, manage container clusters, and ensure 99.999% uptime through multi-region deployments."
    },
    {
      icon: Database,
      title: "Databases & Caching",
      color: "from-violet-500 to-pink-500",
      technologies: [
        { name: "PostgreSQL", level: 97, desc: "Our primary relational database. Advanced query optimization, connection pooling with PgBouncer, and streaming replication." },
        { name: "Redis", level: 94, desc: "In-memory caching layer for session management, rate limiting, pub/sub messaging, and real-time leaderboards." },
        { name: "MongoDB", level: 89, desc: "Document storage for flexible schemas, aggregation pipelines, and change streams for real-time data synchronization." },
        { name: "TimescaleDB", level: 86, desc: "Time-series data storage for IoT telemetry, application metrics, and historical analytics queries." }
      ],
      summary: "We configure database replicas, manage connection pools, design optimized query structures, and implement caching layers for sub-millisecond data retrieval."
    }
  ];

  const devOpsTools = [
    { icon: GitBranch, name: "GitHub Actions", desc: "CI/CD pipelines with automated testing, linting, building, and deployment on every push." },
    { icon: Activity, name: "Datadog / Grafana", desc: "Real-time monitoring dashboards for server health, API latency, and error rate tracking." },
    { icon: Lock, name: "Vault / SOPS", desc: "Secrets management with encrypted configuration files and rotating credential schedules." },
    { icon: MonitorSmartphone, name: "Sentry", desc: "Error tracking and performance monitoring with source map support and release tracking." }
  ];

  const architecturePatterns = [
    { title: "Microservices Architecture", desc: "Decomposing monoliths into independently deployable services with clear domain boundaries and API contracts.", usage: "Enterprise platforms with 10+ development teams" },
    { title: "Event-Driven Architecture", desc: "Asynchronous message processing using Kafka or RabbitMQ for decoupled, resilient system communication.", usage: "High-throughput data pipelines and real-time systems" },
    { title: "Strangler Fig Pattern", desc: "Gradual legacy system replacement by routing traffic incrementally through new service implementations.", usage: "Legacy modernization without downtime" },
    { title: "CQRS + Event Sourcing", desc: "Separating read and write models for optimized query performance and complete audit trail preservation.", usage: "Financial systems requiring full transaction history" }
  ];

  const faqs = [
    { q: "Why do you primarily use TypeScript over JavaScript?", a: "TypeScript catches entire categories of bugs at compile time that JavaScript only reveals at runtime. Strict typing, interface definitions, and generic constraints dramatically reduce production errors and make codebases self-documenting." },
    { q: "Can you integrate with our existing technology stack?", a: "Absolutely. We regularly integrate with legacy Java systems, .NET backends, PHP applications, and custom databases. Our microservice approach lets us build new features alongside existing infrastructure without disruption." },
    { q: "How do you handle database migrations in production?", a: "Every migration is versioned, tested in staging, and executed with rollback procedures ready. We use tools like Prisma Migrate and Flyway to ensure schema changes are tracked, reversible, and applied consistently across environments." },
    { q: "Do you use AI tools in your development process?", a: "We leverage AI assistants for code generation, test writing, and documentation. However, every AI-generated output is reviewed, tested, and validated by senior engineers before merging. We never ship unreviewed AI code." }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">

      {/* Background Watermarks */}
      <div className="absolute top-20 left-6 pointer-events-none select-none -z-10">
        <div className="text-[90px] font-black tracking-widest text-cyan-500/[0.02] uppercase transform rotate-90 origin-left">TECH STACK</div>
      </div>
      <div className="absolute bottom-20 right-6 pointer-events-none select-none -z-10 text-right">
        <div className="text-[9vw] font-black tracking-widest text-indigo-500/[0.015] uppercase leading-none">ENGINEERING</div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              <Code2 className="h-3.5 w-3.5" /> Our Stack
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              Core Technical Capabilities
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-light max-w-xl">
              We build with proven modern languages, frameworks, databases, and deployment platforms. Every tool in our stack is selected for performance, type safety, and long-term maintainability.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <Image src="/images/hero-technologies.png" alt="Technology Stack" width={700} height={400} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════ 2. INTERACTIVE STACK EXPLORER ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Technology Stack Explorer</h2>
          <p className="text-sm text-slate-400 mt-2">Select a category to explore our proficiency levels and tooling details.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {stackCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveStack(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  activeStack === idx
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/15"
                    : "bg-slate-900/50 text-slate-400 border-white/5 hover:text-white hover:border-white/10"
                }`}
              >
                <CatIcon className="h-4 w-4" /> {cat.title}
              </button>
            );
          })}
        </div>

        {/* Stack Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStack}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Summary */}
              <div className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md space-y-4">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${stackCategories[activeStack].color} flex items-center justify-center text-white`}>
                  {React.createElement(stackCategories[activeStack].icon, { className: "h-7 w-7" })}
                </div>
                <h3 className="text-xl font-bold text-white">{stackCategories[activeStack].title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{stackCategories[activeStack].summary}</p>
              </div>

              {/* Technology Cards */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stackCategories[activeStack].technologies.map((tech, i) => (
                  <div key={i} className="p-6 bg-[#090d1f]/60 border border-white/5 rounded-2xl backdrop-blur-md space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-white">{tech.name}</h4>
                      <span className="text-xs font-mono text-indigo-400 font-bold">{tech.level}%</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-light">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ═══════════════ 3. DEVOPS TOOLING ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">DevOps & Monitoring</h2>
          <p className="text-sm text-slate-400 mt-2">The operational tooling that keeps our production systems healthy and observable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {devOpsTools.map((tool, idx) => {
            const ToolIcon = tool.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-slate-900/40 border border-white/5 hover:border-cyan-500/20 rounded-2xl space-y-4 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <ToolIcon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-white">{tool.name}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">{tool.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════ 4. ARCHITECTURE PATTERNS ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="absolute top-10 right-10 pointer-events-none select-none -z-10 opacity-3">
          <div className="text-[100px] font-black tracking-widest text-cyan-500/5 uppercase leading-none">ARCHITECTURE</div>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Architecture Patterns We Deploy</h2>
          <p className="text-sm text-slate-400 mt-2">Battle-tested architectural patterns selected based on your system requirements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {architecturePatterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md space-y-4"
            >
              <h4 className="text-base font-bold text-white">{pattern.title}</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{pattern.desc}</p>
              <div className="pt-3 border-t border-white/5">
                <span className="text-[9px] font-mono text-cyan-400 uppercase font-bold tracking-widest">Best For: </span>
                <span className="text-[10px] text-slate-500 font-light">{pattern.usage}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ 5. TERMINAL MOCK ═══════════════ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="p-8 bg-slate-950 border border-white/10 rounded-3xl overflow-hidden relative">
          <div className="flex gap-2 mb-6">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="font-mono text-[11px] text-slate-400 space-y-1.5">
            <div>$ akshay stack --audit</div>
            <div className="text-cyan-400">&gt; Scanning active technology stack...</div>
            <div> </div>
            <div>Frontend:     React 19 + Next.js 15 (Turbopack)  <span className="text-emerald-400">[OK]</span></div>
            <div>Backend:      NestJS 10 + GraphQL Federation      <span className="text-emerald-400">[OK]</span></div>
            <div>Database:     PostgreSQL 16 + Redis 7              <span className="text-emerald-400">[OK]</span></div>
            <div>Cloud:        AWS ECS + Terraform v1.8             <span className="text-emerald-400">[OK]</span></div>
            <div>Monitoring:   Datadog + Sentry + PagerDuty         <span className="text-emerald-400">[OK]</span></div>
            <div>CI/CD:        GitHub Actions (12 active pipelines) <span className="text-emerald-400">[OK]</span></div>
            <div> </div>
            <div className="text-indigo-400">✓ All systems operational. Stack health: 100%</div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 6. FAQ ═══════════════ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Technology Questions</h2>
          <p className="text-sm text-slate-400 mt-2">Answers about our stack choices and integration capabilities.</p>
        </div>
        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30 backdrop-blur-md">
                <button onClick={() => setOpenFaq(isOpen ? null : i)} className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer">
                  <span className="flex items-center text-left"><HelpCircle className="h-4 w-4 mr-3 text-cyan-400 shrink-0" />{faq.q}</span>
                  {isOpen ? <span className="text-cyan-400 text-xs">−</span> : <span className="text-cyan-400 text-xs">+</span>}
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
