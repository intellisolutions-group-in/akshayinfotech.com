"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Heart, GraduationCap, Star, ShieldCheck, Compass, Briefcase, 
  MapPin, Clock, ArrowRight, CheckCircle, Send, X, Shield, Cpu, HelpCircle,
  Code2, Users2, Zap, Layers, Trophy, Terminal, ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const benefits = [
  { icon: Heart, title: "Comprehensive Health", desc: "Top-tier health, vision, dental plans, and mental wellness subscriptions." },
  { icon: GraduationCap, title: "Annual Learn Budget", desc: "Generous allowance every year for books, courses, code bootcamps, and events." },
  { icon: Star, title: "Remote Flexibility", desc: "Work from anywhere in the world. We sponsor co-working desk memberships." },
  { icon: ShieldCheck, title: "Modern Workspaces", desc: "Receive allowances for modern computers, ergo chairs, and key monitors." },
  { icon: Compass, title: "Generous Time Off", desc: "25 days of paid annual leave plus additional corporate mental rest days." },
  { icon: Trophy, title: "Equity & Performance", desc: "Generous early-stage equity grants and annual performance-based scaling bonuses." }
];

const jobs = [
  {
    id: "senior-react-developer",
    title: "Senior React Developer",
    team: "Frontend Engineering",
    location: "Remote (India)",
    type: "Full Time",
    summary: "Lead the development of custom Next.js 15 enterprise web applications, maintaining clean component design systems and typing rules.",
    requirements: ["5+ years React production experience", "Expert TypeScript configuration capabilities", "Solid experience in Next.js App Router and server component architectures", "Ability to audit load performance and Lighthouse scores"]
  },
  {
    id: "cloud-devops-engineer",
    title: "Cloud DevOps Engineer",
    team: "Infrastructure Systems",
    location: "Hybrid (Bengaluru, Karnataka)",
    type: "Full Time",
    summary: "Own multi-region AWS and Google Cloud clusters, automated CI/CD deployment pipelines, and Docker container clusters.",
    requirements: ["4+ years AWS cloud architecture experience", "Proficiency in Terraform for Infrastructure-as-Code", "Hands-on orchestration of Kubernetes clusters in production", "Familiarity with Prometheus, Grafana, and security configs"]
  },
  {
    id: "lead-ui-ux-designer",
    title: "Lead UI/UX Designer",
    team: "Product Experience",
    location: "Remote (India)",
    type: "Full Time",
    summary: "Establish user journeys, design systems in Figma, and build wireframe prototypes for client dashboards.",
    requirements: ["4+ years digital product design experience", "Mastery of Figma components, variants, and variables", "Strong understanding of accessibility rules", "Portfolio showing clean data-heavy SaaS dashboards"]
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    position: "",
    coverLetter: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Careers | Akshay Infotech";
  }, []);

  const employeeJourney = [
    {
      stage: "STAGE 1 - ONBOARDING",
      title: "Architecture Walkthrough & Tool Sync",
      desc: "Our engineering leads walk you through our multi-region Kubernetes configurations, database sync patterns, and custom Terraform scripts."
    },
    {
      stage: "STAGE 2 - INTEGRATION",
      title: "Co-Pilot Coding & Code Review Hub",
      desc: "You partner with senior database developers, writing microservices, wrapping legacy endpoints, and reviewing merge requests."
    },
    {
      stage: "STAGE 3 - LEADERSHIP",
      title: "Autonomous Feature Scoping",
      desc: "You take full ownership of custom deployment channels, guiding client engineering syncs and routing metric clusters."
    }
  ];

  const hiringProcess = [
    { step: "01", label: "Credentials Review", desc: "We evaluate your GitHub repositories, code quality, typing rules, and component modularity." },
    { step: "02", label: "Systems Architecture", desc: "A 45-minute live technical session mapping database scaling bounds and container clusters." },
    { step: "03", label: "Cultural Alignment", desc: "A conversation discussing asynchronous deep-work blocks and communication principles." },
    { step: "04", label: "Offer & Welcome", desc: "Receive your tailored compensation offer, equity schedule, and remote office allowance setup." }
  ];

  const employeeStories = [
    { name: "Karan Mehta", role: "Staff DevOps Architect", quote: "Akshay cut out the standard management friction. I can spend my days refactoring Kubernetes configs and Terraform modules instead of attending endless planning loops.", avatar: "KM" },
    { name: "Divya Sharma", role: "Chief Systems Architect", quote: "Our engineering guilds are structured to value real technical performance. We run tests, analyze latency logs, and optimize database syncs with complete autonomy.", avatar: "DS" }
  ];

  const handleOpenForm = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    setSuccess(false);
  };

  const handleClose = () => {
    setSelectedJob(null);
    setSuccess(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        portfolio: "",
        position: "",
        coverLetter: ""
      });
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Background Watermark Vertical Left */}
      <div className="absolute top-12 left-6 h-[400px] w-[100px] pointer-events-none select-none overflow-hidden -z-10 origin-left">
        <div className="text-[100px] font-black tracking-widest text-indigo-500/[0.02] uppercase transform rotate-90 origin-left">
          AKSHAY JOBS
        </div>
      </div>

      {/* Background Watermark Diagonal Right */}
      <div className="absolute bottom-12 right-6 pointer-events-none select-none overflow-hidden -z-10 text-right">
        <div className="text-[9vw] font-black tracking-widest text-blue-500/[0.015] uppercase leading-none">
          JOIN THE TEAM
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Page Header (Why Join Akshay) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            <Briefcase className="h-3.5 w-3.5" />
            Engineering Opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
            Do the Best Work of Your Life
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
            We are hiring builders who enjoy solving complex engineering challenges and value product quality. Meet our team, explore our culture, and join us in scaling database limits globally.
          </p>
        </div>
      </section>

      {/* ---------------- SECTION: Why Join Akshay ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">An Engineering-First Workplace</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              We believe standard management overhead slows down programmers. That&apos;s why our team is run by engineers, for engineers. We prioritize asynchronous deep-work blocks, clear specifications, and transparent project roadmaps.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              No endless check-in meetings. Just pure writing, auditing, and building. We allocate dedicated resources for testing, open-source work, and personal skill development.
            </p>
          </div>
          <div className="p-8 bg-[#090d1f]/40 border border-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden space-y-4">
            <Terminal className="h-8 w-8 text-indigo-400" />
            <h4 className="text-lg font-bold text-white">Interactive Terminal Mock</h4>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-[11px] text-slate-400 space-y-1">
              <div>$ akshay team --status</div>
              <div className="text-indigo-400">&gt; Retrieving active developer guild metrics...</div>
              <div>- Database latency target: &lt;15ms [OK]</div>
              <div>- Concurrent test pipeline slots: 24 [OK]</div>
              <div>- Asynchronous deep work: ACTIVE</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION: Perks & Benefits ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">A Lifestyle Supporting Great Code</h2>
          <p className="text-sm text-slate-400 mt-2">Comprehensive health plans, learning allowances, and fully remote support setups.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) => {
            const BIcon = b.icon;
            const isHovered = hoveredBenefit === idx;
            return (
              <div
                key={b.title}
                onMouseEnter={() => setHoveredBenefit(idx)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl text-left space-y-4 hover:border-indigo-500/20 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="h-10 w-10 bg-indigo-500/10 text-indigo-400 flex items-center justify-center rounded-xl">
                  <BIcon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-white">{b.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">{b.desc}</p>
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500" 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- SECTION: Growth & Learning Programs ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Employee Growth Path</h2>
          <p className="text-sm text-slate-400 mt-2">How we help developers transition to architectural leadership.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-4">
            {employeeJourney.map((journey, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                  activeTab === idx 
                    ? "bg-indigo-600/10 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.1)]" 
                    : "bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                }`}
              >
                <div className="font-bold text-xs uppercase tracking-wider mb-0.5 font-mono">{journey.stage}</div>
                <div className="text-[11px] opacity-75 font-light">{journey.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 p-8 bg-slate-900/80 border border-white/10 rounded-3xl relative min-h-[220px] flex flex-col justify-between backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <span className="text-xs font-mono font-bold text-indigo-400">{employeeJourney[activeTab].stage}</span>
                <h4 className="text-xl font-bold text-white">{employeeJourney[activeTab].title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {employeeJourney[activeTab].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION: Open Roles ---------------- */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Active Openings</h2>
          <p className="text-sm text-slate-400 mt-2">Explore active software, security, and database design listings.</p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="p-6 bg-slate-900/40 border border-white/5 rounded-3xl text-left space-y-4">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-[10px] text-slate-500 font-mono mt-1.5 uppercase">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-indigo-400" /> {job.location}</span>
                    <span>•</span>
                    <span>{job.team}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenForm(job.title)}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-600/10 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">{job.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION: Hiring Process ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Hiring Process Flow</h2>
          <p className="text-sm text-slate-400 mt-2">Our clear, transparent 4-stage pipeline for candidate validation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {hiringProcess.map((proc, i) => (
            <div key={i} className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl relative overflow-hidden">
              <div className="text-3xl font-black text-indigo-400/20 font-mono mb-2">{proc.step}</div>
              <h4 className="text-sm font-bold text-white mb-2">{proc.label}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-light">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION: Employee Success Stories ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Employee Success Stories</h2>
          <p className="text-sm text-slate-400 mt-2">Hear directly from the software engineers routing global compute clusters.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {employeeStories.map((story, i) => (
            <div key={i} className="p-8 bg-[#090d1f]/60 border border-white/5 rounded-3xl backdrop-blur-md space-y-6 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-light">
                &ldquo;{story.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold font-mono text-xs">
                  {story.avatar}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">{story.name}</h5>
                  <p className="text-[10px] text-slate-500 font-mono uppercase">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment Form Overlay */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-slate-950 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl p-8 relative text-left"
            >
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded-lg transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {!success ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">Apply for Position</h3>
                    <p className="text-xs text-indigo-400 font-mono mt-1 uppercase">{selectedJob}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">Portfolio or GitHub URL</label>
                      <input 
                        type="url" 
                        name="portfolio" 
                        required 
                        value={formData.portfolio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="https://github.com/username"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">Cover Letter Summary</label>
                      <textarea 
                        name="coverLetter" 
                        rows={3} 
                        value={formData.coverLetter}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                        placeholder="Briefly describe your database or frontend orchestration experience..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-indigo-600/10 cursor-pointer"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Application Received</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light max-w-xs mx-auto">
                    Thank you. Our senior engineering executives will review your portfolio credentials and reply in 3-5 business days.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
