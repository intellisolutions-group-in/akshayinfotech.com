"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Calendar, User, ArrowRight, 
  HelpCircle, Search, Cpu, Lightbulb, Shield, Code, Network, Brain
} from "lucide-react";
import { blogPosts } from "@/app/blog/blogData";

const categories = ["All", "Engineering", "AI", "Design", "Cloud", "Security", "Architecture", "DevOps"];

export default function KnowledgeHubPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Document Title
  useEffect(() => {
    document.title = "Knowledge Hub | Akshay Infotech";
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTab = activeTab === "All" || post.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const faqs = [
    {
      q: "Are the resources updated regularly?",
      a: "Yes. Our cloud architects and security engineers update the codebase checklists and architectural design guidelines quarterly to account for new security patches and cloud protocols."
    },
    {
      q: "How can I book a detailed review of one of these whitepapers?",
      a: "You can click on any CTA link to request a custom discovery call. Our team will go over the architecture steps in detail."
    },
    {
      q: "Do you offer custom tech training for enterprise engineering teams?",
      a: "Yes. We conduct bespoke workshops on Next.js Enterprise scaling, Kubernetes deployments, and Zero-Trust integrations for enterprise clients."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#03050c] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Vertically Rotated Watermark on Left Margin */}
      <div className="absolute top-1/4 left-4 h-[600px] w-[50px] pointer-events-none select-none overflow-hidden -z-10 writing-mode-vertical hidden xl:block">
        <div className="text-[60px] font-black tracking-widest text-slate-500/[0.02] rotate-90 origin-top-left transform uppercase whitespace-nowrap">
          KNOWLEDGE HUB
        </div>
      </div>

      {/* Center Giant Transparent Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10">
        <div className="text-[10vw] font-black tracking-widest text-blue-500/[0.015] blur-[1px] uppercase">
          AKSHAY INFOTECH
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
            Technology Publications <br />& Engineering Insights
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-light">
            In-depth guides, telemetry analysis, and research publications authored by Akshay Infotech systems architects. Free resources built to clarify structural scaling queries.
          </p>
        </div>
      </section>

      {/* Featured Insight Card */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="p-8 bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-md text-left flex flex-col lg:flex-row items-center gap-12 hover:border-blue-500/25 transition-all duration-300">
          
          {/* Featured Visual */}
          <motion.div 
            className="w-full lg:w-2/5 h-72 lg:h-80 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-white/5 rounded-2xl relative overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(59,130,246,0.15)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Background Image */}
            <img 
              src="/images/featured-insight.png" 
              alt="Next.js Enterprise Architecture" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
            
            {/* Animated Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-cyan-400/60"
                style={{
                  width: `${4 + i * 1.5}px`,
                  height: `${4 + i * 1.5}px`,
                  left: `${15 + i * 14}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -12, 0, 8, 0],
                  opacity: [0.3, 0.8, 0.5, 0.9, 0.3],
                  scale: [1, 1.3, 1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + i * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Shimmer Sweep Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent skew-x-12"
              animate={{ x: ["-150%", "250%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
            />

            {/* Scan Line */}
            <motion.div
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <motion.div 
                  className="h-[1px] bg-gradient-to-r from-cyan-400/50 to-transparent flex-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
              <div className="space-y-2">
                <motion.span 
                  className="text-[10px] font-mono text-cyan-300/80 uppercase tracking-wider flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <BookOpen className="h-3 w-3" />
                  LATEST PUBLICATION
                </motion.span>
                <motion.h4 
                  className="text-lg font-bold text-white leading-tight drop-shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Next.js Enterprise scaling solutions
                </motion.h4>
              </div>
            </div>

            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-2xl border border-blue-400/0 group-hover:border-blue-400/20 transition-all duration-500" />
          </motion.div>

          {/* Featured Text */}
          <div className="w-full lg:w-3/5 space-y-4">
            <span className="text-xs font-mono uppercase text-blue-400 font-bold">Featured Insight</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">Next.js Enterprise Architecture: Building Sub-Second Global Applications</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              We present live telemetry detailing how React Server Components (RSC) and Incremental Static Regeneration (ISR) combined to decrease hydration footprint to 48KB and secure 100/100 Lighthouse performance.
            </p>
            
            <div className="flex items-center gap-4 text-xs text-slate-500 font-mono pt-2">
              <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> Akshay Patel</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> June 2026</span>
            </div>
            
            <div className="pt-2">
              <Link 
                href="/blog/nextjs-enterprise-architecture" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read Publication
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 15 Enterprise Blogs Grid Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        
        {/* Search & Tabs Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">Publications Catalog</h3>
            <p className="text-xs text-slate-500 font-light mt-1">Explore our latest engineering case studies and architecture guides.</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search publications..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-blue-500/50 pl-9 text-slate-200"
            />
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4.5 py-1.8 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                activeTab === cat 
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-900/20" 
                  : "bg-slate-900/40 text-slate-400 border-white/5 hover:border-blue-500/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Catalog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative bg-slate-900/30 border border-white/5 rounded-3xl p-6.5 flex flex-col justify-between text-left backdrop-blur-md hover:border-blue-500/20 hover:shadow-[0_0_35px_rgba(59,130,246,0.08)] transition-all duration-300"
              >
                {/* Floating soft card background glow */}
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-4">
                  {/* Category & Readtime row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-extrabold text-white leading-snug group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>

                  {/* Summary */}
                  <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-3">
                    {post.desc}
                  </p>
                </div>

                {/* Author & Footer */}
                <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[10px] text-slate-500">
                    <User className="h-3.5 w-3.5 text-blue-500" />
                    <span>{post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 group/link"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-500 bg-slate-900/10 border border-white/5 rounded-3xl">
              No publications found matching current filters.
            </div>
          )}
        </div>

      </section>

      {/* Tech Trends & Forecasts Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Technological Forecasts &amp; Emerging Trends</h2>
          <p className="text-sm text-slate-400 mt-2 font-light">Planned changes and patterns predicted by our technology engineering team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { category: "INFRASTRUCTURE", title: "WebAssembly Edge Runtimes", desc: "Shifting traditional Node/Go container tasks to local edge WebAssembly targets, eliminating cold start speeds entirely." },
            { category: "CYBER SECURITY", title: "Post-Quantum Decryption Blocks", desc: "Pre-configuring public/private key subnets to handle incoming quantum factorization calculations safely." },
            { category: "DEVELOPMENT", title: "Federated API Registries", desc: "Consolidating distributed enterprise APIs into isolated proxy systems, allowing developers to query endpoints dynamically." }
          ].map((forecast, idx) => (
            <div key={idx} className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl relative backdrop-blur-md">
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
          <p className="text-sm text-slate-400 mt-2 font-light">Answers to key operational research and database index queries.</p>
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


    </div>
  );
}
