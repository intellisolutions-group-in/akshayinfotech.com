"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award, ArrowRight, UserCheck, Key, ShieldCheck, Heart,
  HelpCircle, CheckCircle, BarChart3, Clock, Zap, Target,
  TrendingUp, Globe, Shield, Code2, Star, Users, Activity,
  FileText, Cpu, Lock, Sparkles
} from "lucide-react";

export default function WhyChooseUs() {
  const [activeReason, setActiveReason] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Why Choose Us | Akshay Infotech";
  }, []);

  const coreReasons = [
    {
      icon: UserCheck,
      title: "Senior Engineering Staff",
      desc: "We assign dedicated mid-to-senior software engineers directly to your workspace. We don't delegate client codebases to inexperienced juniors. Every developer on your project has 5+ years of production experience.",
      proof: "Average team experience: 8.2 years",
      details: "Our hiring process includes live architecture challenges, code review exercises, and system design assessments. Only 3% of applicants pass our technical bar."
    },
    {
      icon: Key,
      title: "Complete Code Ownership",
      desc: "You own 100% of the proprietary IP, Git repositories, database scripts, and cloud configuration files from day one. No vendor lock-in schemas, no proprietary frameworks, no hidden dependencies that chain you to our services.",
      proof: "100% IP transfer on every project",
      details: "We use standard, open-source technologies and document every architectural decision. When engagement ends, you receive complete access to all codebases, infrastructure templates, and documentation."
    },
    {
      icon: ShieldCheck,
      title: "Strict Compliance Auditing",
      desc: "We write automated tests and perform continuous security audits to keep frontend and backend layers fully secure. Our CI/CD pipelines include OWASP vulnerability scans, dependency audits, and penetration testing on every deployment.",
      proof: "Zero critical security incidents across all clients",
      details: "We maintain SOC2 Type II compliance processes and can provide audit evidence packages for HIPAA, PCI-DSS, and GDPR requirements."
    },
    {
      icon: Heart,
      title: "Post-Release Support Retainers",
      desc: "We sign structured SLA retainers for continuous log monitoring, database scaling checks, system optimization tasks, and feature enhancement sprints. Your systems are never left unsupported after launch.",
      proof: "4-hour critical incident response SLA",
      details: "Our support tiers include weekly health reports, monthly security patches, quarterly performance audits, and annual architecture reviews."
    },
    {
      icon: Code2,
      title: "Clean, Documented Codebases",
      desc: "Every function is typed, every module is documented, and every API endpoint has auto-generated specifications. We enforce strict ESLint rules, 80%+ test coverage thresholds, and comprehensive code review protocols.",
      proof: "Average code coverage: 87% across all projects",
      details: "New team members can onboard to our codebases in under a week thanks to living documentation, ADR logs, and clean component architectures."
    },
    {
      icon: Globe,
      title: "Global Delivery Capability",
      desc: "Our distributed engineering teams operate across US, UK, and European time zones, enabling near-24/7 development coverage. We use async-first communication models to eliminate timezone friction.",
      proof: "Effective coverage: 18 hours/day across timezones",
      details: "We maintain development centers in Boston, London, and Munich, with satellite contributors across Asia Pacific for round-the-clock incident response."
    }
  ];

  const competitiveEdge = [
    { label: "Feature", akshay: "Akshay Infotech", others: "Typical Agency" },
    { label: "Team Composition", akshay: "100% senior engineers (5+ yrs)", others: "Mix of juniors and contractors" },
    { label: "Code Ownership", akshay: "Full IP transfer from day one", others: "Vendor-locked proprietary code" },
    { label: "Deployment Strategy", akshay: "Zero-downtime blue-green deploys", others: "Weekend maintenance windows" },
    { label: "Test Coverage", akshay: "80%+ enforced via CI/CD", others: "Manual QA, <30% coverage" },
    { label: "Security Auditing", akshay: "Automated OWASP + SOC2 compliance", others: "Annual manual pen-test" },
    { label: "Post-Launch Support", akshay: "Structured SLA retainers", others: "Pay-per-incident billing" },
    { label: "Documentation", akshay: "Auto-generated + living ADR logs", others: "Minimal, often outdated" }
  ];

  const clientResults = [
    { metric: "42%", label: "Average Cloud Cost Reduction", desc: "Through infrastructure optimization and right-sizing" },
    { metric: "99.99%", label: "Average System Uptime", desc: "Across all managed production environments" },
    { metric: "3.2x", label: "Faster Time to Market", desc: "Compared to traditional development approaches" },
    { metric: "87%", label: "Average Code Coverage", desc: "Enforced across every client codebase" }
  ];

  const testimonials = [
    { name: "S. Gupta", role: "CTO", quote: "Akshay rebuilt our entire patient portal in 14 weeks. The security was baked in from day one — no afterthought security patches needed.", avatar: "SG" },
    { name: "M. Sharma", role: "VP Engineering", quote: "Their senior engineers understood our payment processing requirements immediately. We went from legacy Rails to modern microservices without a single minute of downtime.", avatar: "MS" },
    { name: "E. Iyer", role: "Founder", quote: "The code quality is exceptional. When we brought in external auditors for our Series B due diligence, they praised the documentation and test coverage.", avatar: "EI" }
  ];

  const guarantees = [
    { icon: Shield, title: "Security Guarantee", desc: "Zero critical vulnerabilities in production. If our code causes a security breach, we remediate at no cost." },
    { icon: Clock, title: "SLA Guarantee", desc: "4-hour response for critical incidents, 24-hour for high priority, 72-hour for standard requests." },
    { icon: Target, title: "Quality Guarantee", desc: "80%+ test coverage enforced. Every release passes automated security scans and performance benchmarks." },
    { icon: Sparkles, title: "Satisfaction Guarantee", desc: "If you're not satisfied with sprint outputs, we re-scope and re-deliver at no additional charge." }
  ];

  const faqs = [
    { q: "How do you ensure consistency when working with distributed teams?", a: "We enforce strict coding standards via ESLint configs, Prettier formatting rules, and comprehensive PR review checklists. Every team member follows identical development environment setups using Docker containers and shared VS Code configuration profiles." },
    { q: "What's your typical project engagement model?", a: "We offer three models: fixed-scope projects with defined deliverables and timelines, dedicated team augmentation with monthly billing, and retainer-based ongoing support contracts. Most enterprise clients start with a fixed-scope project and transition to retainers post-launch." },
    { q: "Can we interview your engineers before project kickoff?", a: "Absolutely. We encourage clients to interview proposed team members. We provide detailed profiles with portfolio examples, and previous project summaries for every engineer we assign." },
    { q: "What happens if a key team member needs to be replaced mid-project?", a: "Our knowledge management practices — including comprehensive ADR logs, living documentation, and pair programming sessions — ensure that any team transition is smooth. We guarantee a maximum 5-day handover period for any personnel change." }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">

      {/* Background */}
      <div className="absolute top-20 left-6 pointer-events-none select-none -z-10">
        <div className="text-[90px] font-black tracking-widest text-blue-500/[0.02] uppercase transform rotate-90 origin-left">WHY AKSHAY</div>
      </div>
      <div className="absolute bottom-20 right-6 pointer-events-none select-none -z-10 text-right">
        <div className="text-[9vw] font-black tracking-widest text-indigo-500/[0.015] uppercase leading-none">EXCELLENCE</div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              <Award className="h-3.5 w-3.5" /> Our Advantages
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Why Choose Akshay Infotech
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-light max-w-xl">
              We prioritize engineering excellence, clean documentation, strict security compliance, and direct honest communication. We build software assets that drive actual business growth — not liabilities that drain resources.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <Image src="/images/hero-why-choose.png" alt="Why Choose Akshay" width={700} height={400} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════ 2. CORE REASONS EXPLORER ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Akshay Difference</h2>
          <p className="text-sm text-slate-400 mt-2">Six core differentiators that separate us from traditional agencies.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Reason Selector */}
          <div className="lg:col-span-4 space-y-3">
            {coreReasons.map((reason, idx) => {
              const RIcon = reason.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveReason(idx)}
                  className={`w-full flex items-center gap-3 p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                    activeReason === idx
                      ? "bg-blue-600/10 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                      : "bg-slate-900/30 border-white/5 text-slate-400 hover:text-white hover:border-white/10"
                  }`}
                >
                  <RIcon className={`h-5 w-5 shrink-0 ${activeReason === idx ? "text-blue-400" : "text-slate-600"}`} />
                  <span className="text-xs font-bold">{reason.title}</span>
                </button>
              );
            })}
          </div>

          {/* Reason Detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReason}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-md space-y-6 h-full"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    {React.createElement(coreReasons[activeReason].icon, { className: "h-7 w-7" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{coreReasons[activeReason].title}</h3>
                    <span className="text-xs font-mono text-blue-400">{coreReasons[activeReason].proof}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{coreReasons[activeReason].desc}</p>
                <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-blue-400 font-bold block mb-1">Deep Dive</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{coreReasons[activeReason].details}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════ 3. CLIENT RESULTS ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Proven Client Results</h2>
          <p className="text-sm text-slate-400 mt-2">Measurable outcomes across our enterprise engagements.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientResults.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl text-center"
            >
              <div className="text-3xl font-black text-blue-400 font-mono mb-1">{result.metric}</div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{result.label}</h4>
              <p className="text-[10px] text-slate-500 font-light">{result.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ 4. COMPARISON TABLE ═══════════════ */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Akshay vs. Traditional Agencies</h2>
          <p className="text-sm text-slate-400 mt-2">A transparent, side-by-side comparison of our engineering standards.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/5">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-900/60">
                <th className="px-6 py-4 text-slate-400 font-bold uppercase tracking-wider">Feature</th>
                <th className="px-6 py-4 text-blue-400 font-bold uppercase tracking-wider">Akshay</th>
                <th className="px-6 py-4 text-slate-500 font-bold uppercase tracking-wider">Typical Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {competitiveEdge.slice(1).map((row, i) => (
                <tr key={i} className="bg-slate-950/40 hover:bg-slate-900/40 transition-colors">
                  <td className="px-6 py-4 text-white font-bold">{row.label}</td>
                  <td className="px-6 py-4 text-slate-300 font-light">{row.akshay}</td>
                  <td className="px-6 py-4 text-slate-500 font-light">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══════════════ 5. TESTIMONIALS ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Client Success Stories</h2>
          <p className="text-sm text-slate-400 mt-2">Hear from the engineering leaders we&apos;ve partnered with.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-[#090d1f]/60 border border-white/5 rounded-3xl backdrop-blur-md space-y-6 flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-light">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold font-mono text-xs">{t.avatar}</div>
                <div>
                  <h5 className="text-xs font-bold text-white">{t.name}</h5>
                  <p className="text-[10px] text-slate-500 font-mono">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ 6. SERVICE GUARANTEES ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Service Guarantees</h2>
          <p className="text-sm text-slate-400 mt-2">Commitments we back with contractual SLA terms.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g, idx) => {
            const GIcon = g.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-slate-900/40 border border-white/5 hover:border-blue-500/20 rounded-2xl space-y-4 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <GIcon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-white">{g.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">{g.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════ 7. FAQ ═══════════════ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Engagement Questions</h2>
          <p className="text-sm text-slate-400 mt-2">Answers about our team structure, engagement models, and delivery practices.</p>
        </div>
        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30 backdrop-blur-md">
                <button onClick={() => setOpenFaq(isOpen ? null : i)} className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors cursor-pointer">
                  <span className="flex items-center text-left"><HelpCircle className="h-4 w-4 mr-3 text-blue-400 shrink-0" />{faq.q}</span>
                  {isOpen ? <span className="text-blue-400 text-xs">−</span> : <span className="text-blue-400 text-xs">+</span>}
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

      {/* ═══════════════ 8. CTA ═══════════════ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center mb-8">
        <div className="p-8 md:p-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-48 w-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <h4 className="text-xl sm:text-2xl font-bold mb-2">Ready to Build With Experts?</h4>
          <p className="text-xs sm:text-sm text-blue-100 mb-8 max-w-lg mx-auto font-light">Collaborate with Akshay Infotech to scope, engineer, and deploy your custom cloud platform.</p>
          <Link href="/contact" className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 transition-all rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-blue-900/20">
            Start Technical Discussion <ArrowRight className="h-4 w-4 text-blue-700" />
          </Link>
        </div>
      </section>

    </div>
  );
}
