"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Workflow, ArrowRight, Search, Code, CheckCircle, Globe, Settings,
  HelpCircle, Zap, Shield, Clock, Users, BarChart3, Layers, Target,
  GitBranch, Terminal, Database, FileText, Activity, Cpu
} from "lucide-react";

export default function OurProcess() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Our Process | Nexora Technologies";
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const timelineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const phases = [
    {
      icon: Search,
      num: "01",
      title: "Scope Discovery",
      subtitle: "Weeks 1–2",
      desc: "We begin every engagement with an intensive discovery workshop. Our senior architects sit with your product owners, engineers, and stakeholders to document current system topologies, database schemas, API endpoint inventories, and infrastructure configurations. We map out existing bottlenecks, identify performance gaps, and catalog security vulnerabilities.",
      deliverables: ["System topology diagram", "Database schema audit report", "Performance bottleneck analysis", "Security vulnerability catalog"],
      tools: ["Notion", "Miro", "Slack"]
    },
    {
      icon: Workflow,
      num: "02",
      title: "Technical Architecture",
      subtitle: "Weeks 2–3",
      desc: "Based on discovery outputs, we design comprehensive technical blueprints. This includes mapping SQL/NoSQL schemas, defining REST/GraphQL API contracts, configuring AWS/GCP infrastructure templates, and establishing component hierarchies. Every architecture decision is documented with clear reasoning and trade-off analysis.",
      deliverables: ["Infrastructure-as-Code templates", "API contract specifications", "Database migration schemas", "Component architecture diagrams"],
      tools: ["Terraform", "Draw.io", "OpenAPI"]
    },
    {
      icon: Code,
      num: "03",
      title: "Agile Engineering",
      subtitle: "Weeks 3–12+",
      desc: "We develop modular codebase features in structured two-week sprint cycles. Each sprint begins with planning, proceeds through daily async standups, and concludes with a live demo on staging URLs. Our developers write clean, typed code with comprehensive unit tests, integration tests, and end-to-end validation suites.",
      deliverables: ["Functional staging builds", "Sprint demo recordings", "Test coverage reports", "Code review documentation"],
      tools: ["Next.js", "TypeScript", "Jest"]
    },
    {
      icon: CheckCircle,
      num: "04",
      title: "Quality Audits",
      subtitle: "Continuous",
      desc: "Quality isn't a phase — it's embedded into every sprint. We run automated unit testing suites, performance stress tests, accessibility audits, and HIPAA/SOC2 compliance checks. Our CI/CD pipelines enforce 80%+ code coverage thresholds, and every pull request requires two senior engineer approvals before merging.",
      deliverables: ["Automated test suites", "Lighthouse performance reports", "Security penetration test results", "Compliance certification docs"],
      tools: ["Cypress", "Lighthouse", "OWASP ZAP"]
    },
    {
      icon: Globe,
      num: "05",
      title: "Production Deployment",
      subtitle: "Launch Week",
      desc: "We execute zero-downtime DNS switches using blue-green deployment strategies and rolling container updates. Active system telemetry monitors every metric during launch: CPU usage, memory allocation, database connection pools, API response times, and error rates. We maintain a rollback plan for instant recovery if anomalies appear.",
      deliverables: ["Deployment runbook", "Monitoring dashboard setup", "DNS migration plan", "Rollback procedure documentation"],
      tools: ["Kubernetes", "Datadog", "CloudFlare"]
    },
    {
      icon: Settings,
      num: "06",
      title: "Proactive Retainers",
      subtitle: "Ongoing",
      desc: "Post-launch, we transition into structured support retainers. This includes active log auditing, security patch management, database maintenance windows, server scaling adjustments, and feature enhancement sprints. Our SLA guarantees 4-hour response times for critical incidents and weekly health report deliveries.",
      deliverables: ["Weekly health reports", "Monthly security patches", "Quarterly performance audits", "Annual architecture reviews"],
      tools: ["PagerDuty", "Grafana", "Sentry"]
    }
  ];

  const methodology = [
    { icon: GitBranch, title: "Git Flow Branching", desc: "Feature branches, staging previews, and protected main branches ensure clean version control and safe deployments." },
    { icon: Terminal, title: "CI/CD Automation", desc: "Every push triggers automated builds, tests, linting, and security scans. Failed pipelines block deployments immediately." },
    { icon: Database, title: "Database Versioning", desc: "Schema migrations are versioned and reversible. We never run raw SQL in production — everything is tracked and auditable." },
    { icon: FileText, title: "Living Documentation", desc: "API docs auto-generate from code comments. Architecture decisions are logged in ADR records for future team reference." }
  ];

  const metrics = [
    { label: "Average Sprint Velocity", value: "42pts", icon: Zap },
    { label: "Code Coverage Threshold", value: "80%+", icon: Shield },
    { label: "Deployment Frequency", value: "Daily", icon: Activity },
    { label: "Incident Response SLA", value: "<4hrs", icon: Clock }
  ];

  const faqs = [
    { q: "How long does a typical project take from discovery to launch?", a: "Most projects range from 8-16 weeks depending on complexity. Simple MVPs can launch in 6 weeks, while enterprise platforms with complex integrations typically require 12-20 weeks." },
    { q: "Can we be involved in daily development decisions?", a: "Absolutely. We maintain shared Slack channels, provide access to our project management boards, and schedule weekly sync calls. You have full visibility into every sprint." },
    { q: "What happens if requirements change mid-project?", a: "Our agile methodology is designed for change. We re-prioritize backlogs every sprint, ensuring new requirements are evaluated and scheduled without disrupting active development work." },
    { q: "Do you provide source code access during development?", a: "Yes. From day one, you have full access to Git repositories, CI/CD pipelines, and staging environments. We believe in complete transparency throughout the build process." }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">

      {/* Background Watermarks */}
      <div className="absolute top-24 left-6 pointer-events-none select-none -z-10">
        <div className="text-[100px] font-black tracking-widest text-indigo-500/[0.02] uppercase transform rotate-90 origin-left">
          ENGINEERING PROCESS
        </div>
      </div>
      <div className="absolute bottom-24 right-6 pointer-events-none select-none -z-10 text-right">
        <div className="text-[9vw] font-black tracking-widest text-blue-500/[0.015] uppercase leading-none">
          BUILD DEPLOY
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* ═══════════════ 1. HERO SECTION ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              <Workflow className="h-3.5 w-3.5" />
              How We Build
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              Our Development Process
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-light max-w-xl">
              A structured, transparent engineering lifecycle designed to launch secure software on time with zero downtime. Every phase is documented, measurable, and auditable.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/contact" className="inline-flex items-center gap-1.5 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs transition-all shadow-lg shadow-indigo-600/10 cursor-pointer">
                Start A Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <Image src="/images/hero-process.png" alt="Nexora Development Process" width={700} height={400} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════ 2. PROCESS OVERVIEW ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md space-y-6">
            <div className="h-1.5 w-12 bg-indigo-500 rounded-full" />
            <h4 className="text-lg font-bold text-white">Predictable Agile Iterations</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              We don&apos;t believe in black-box development. We involve our clients in weekly meetings, coordinate via shared Slack channels, and deploy functional staging builds at the end of each sprint cycle. This ensures developers gather immediate feedback, allowing us to pivot UI layouts or change data schemas early before they become complex to refactor.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-400 shrink-0" /> Live staging previews after every sprint</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-400 shrink-0" /> Shared project boards with full transparency</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-400 shrink-0" /> Automated test runs on every code push</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Built for Enterprise Reliability</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Our engineering model eliminates the chaos of ad-hoc development. Every decision is backed by architecture decision records (ADRs), every deployment follows blue-green strategies, and every database migration is versioned and reversible.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              We measure success not just by feature completion, but by deployment frequency, incident response times, code coverage percentages, and client satisfaction scores tracked across every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ 3. SIX-PHASE DEEP DIVE ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Six-Phase Lifecycle</h2>
          <p className="text-sm text-slate-400 mt-2">Click each phase to explore deliverables, tooling, and detailed explanations.</p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {phases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhase(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                activePhase === idx
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/15"
                  : "bg-slate-900/50 text-slate-400 border-white/5 hover:text-white hover:border-white/10"
              }`}
            >
              {phase.num}. {phase.title}
            </button>
          ))}
        </div>

        {/* Active Phase Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            {/* Main Content */}
            <div className="lg:col-span-3 p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  {React.createElement(phases[activePhase].icon, { className: "h-7 w-7" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{phases[activePhase].title}</h3>
                  <span className="text-xs font-mono text-indigo-400 uppercase">{phases[activePhase].subtitle}</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-light">{phases[activePhase].desc}</p>

              {/* Tools Used */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 font-bold block mb-3">Primary Tools</span>
                <div className="flex gap-2 flex-wrap">
                  {phases[activePhase].tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-950/60 border border-white/10 rounded-lg text-[10px] font-mono text-slate-300 font-bold">{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables Sidebar */}
            <div className="lg:col-span-2 p-6 bg-[#090d1f]/60 border border-white/5 rounded-3xl backdrop-blur-md space-y-4">
              <span className="text-[9px] uppercase font-mono tracking-widest text-indigo-400 font-bold block">Phase Deliverables</span>
              <div className="space-y-3">
                {phases[activePhase].deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-900/40 border border-white/5 rounded-xl">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="text-xs text-slate-300 font-light">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ═══════════════ 4. ENGINEERING METHODOLOGY ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="absolute top-10 right-10 pointer-events-none select-none -z-10 opacity-3">
          <div className="text-[100px] font-black tracking-widest text-indigo-500/5 uppercase leading-none">METHODOLOGY</div>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Engineering Methodology</h2>
          <p className="text-sm text-slate-400 mt-2">The technical practices that ensure code quality, deployment safety, and long-term maintainability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methodology.map((item, idx) => {
            const MIcon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-slate-900/40 border border-white/5 hover:border-indigo-500/20 rounded-3xl backdrop-blur-md space-y-4 transition-all"
              >
                <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <MIcon className="h-6 w-6" />
                </div>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════ 5. PERFORMANCE METRICS ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Process Performance Metrics</h2>
          <p className="text-sm text-slate-400 mt-2">The numbers that validate our engineering velocity and reliability.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((met, i) => {
            const MetIcon = met.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl text-center relative overflow-hidden"
              >
                <div className="h-10 w-10 mx-auto rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                  <MetIcon className="h-5 w-5" />
                </div>
                <div className="text-3xl font-black text-indigo-400 font-mono mb-1">{met.value}</div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">{met.label}</h4>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════ 6. SPRINT LIFECYCLE VISUAL ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="p-8 md:p-12 bg-slate-900/50 border border-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono text-indigo-400 uppercase font-bold tracking-widest">Sprint Anatomy</span>
              <h3 className="text-2xl font-bold text-white">Inside a Two-Week Sprint</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Every sprint follows a consistent rhythm: planning on Monday, development Tuesday through Friday of week one, continued development and testing in week two, and a live demo every other Friday. This predictable cadence means stakeholders always know when to expect progress updates.
              </p>
            </div>
            <div className="space-y-4">
              {["Day 1: Sprint Planning & Backlog Grooming", "Days 2-5: Core Feature Development", "Days 6-8: Integration & Unit Testing", "Days 9-10: QA Review & Bug Fixes", "Day 10: Live Demo & Sprint Retrospective"].map((step, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-950/60 border border-white/5 rounded-xl">
                  <div className="h-8 w-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs text-slate-300 font-light">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7. COMPARISON TABLE ═══════════════ */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Nexora vs. Traditional Agencies</h2>
          <p className="text-sm text-slate-400 mt-2">A transparent comparison of our development practices.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/5">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-900/60">
                <th className="px-6 py-4 text-slate-400 font-bold uppercase tracking-wider">Practice</th>
                <th className="px-6 py-4 text-indigo-400 font-bold uppercase tracking-wider">Nexora</th>
                <th className="px-6 py-4 text-slate-500 font-bold uppercase tracking-wider">Traditional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Code Ownership", "100% client-owned from day one", "Often vendor-locked"],
                ["Sprint Demos", "Every 2 weeks on staging URLs", "Monthly or at project end"],
                ["Test Coverage", "80%+ enforced via CI/CD", "Manual QA only"],
                ["Deployment Strategy", "Blue-green zero-downtime", "Weekend maintenance windows"],
                ["Post-Launch Support", "Structured SLA retainers", "Pay-per-incident billing"],
                ["Documentation", "Auto-generated + ADR logs", "Minimal or outdated"]
              ].map(([practice, nexora, traditional], i) => (
                <tr key={i} className="bg-slate-950/40 hover:bg-slate-900/40 transition-colors">
                  <td className="px-6 py-4 text-white font-bold">{practice}</td>
                  <td className="px-6 py-4 text-slate-300 font-light">{nexora}</td>
                  <td className="px-6 py-4 text-slate-500 font-light">{traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══════════════ 8. FAQ SECTION ═══════════════ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Process Questions</h2>
          <p className="text-sm text-slate-400 mt-2">Common questions about our development methodology and engagement models.</p>
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
                    <HelpCircle className="h-4 w-4 mr-3 text-indigo-400 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <span className="text-indigo-400 text-xs">−</span> : <span className="text-indigo-400 text-xs">+</span>}
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

      {/* ═══════════════ 9. CTA SECTION ═══════════════ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center mb-8">
        <div className="p-8 md:p-12 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-48 w-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <h4 className="text-xl sm:text-2xl font-bold mb-2">Ready to Start Scoping?</h4>
          <p className="text-xs sm:text-sm text-indigo-100 mb-8 max-w-lg mx-auto font-light">Partner with us to create detailed architectural mockups and milestone paths for your system.</p>
          <Link href="/contact" className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-indigo-700 hover:bg-blue-50 transition-all rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-indigo-900/20">
            Consult Our Architect <ArrowRight className="h-4 w-4 text-indigo-700" />
          </Link>
        </div>
      </section>

    </div>
  );
}
