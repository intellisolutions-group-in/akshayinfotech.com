"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Search, User, Calendar, Sparkles } from "lucide-react";
import { blogPosts } from "@/app/blog/blogData";


const categories = ["All Insights", "Engineering", "AI", "Design", "Cloud", "Security", "Architecture", "DevOps"];

// Magnetic Wrapper for premium button hover effects
function MagneticButton({ children, range = 35 }: { children: React.ReactNode; range?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const distanceX = e.clientX - (left + width / 2);
    const distanceY = e.clientY - (top + height / 2);
    if (Math.sqrt(distanceX ** 2 + distanceY ** 2) < range) {
      setPosition({ x: distanceX * 0.25, y: distanceY * 0.25 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const leave = () => setPosition({ x: 0, y: 0 });
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div 
      ref={ref} 
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts[0]; // Next.js Enterprise Architecture as featured

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Insights" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-[#03050c] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Background Watermark Pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10 opacity-[0.02]">
        <div className="text-[12vw] font-black tracking-wider text-blue-500 uppercase rotate-12">
          AKSHAY INFOTECH
        </div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Blog Hero Header */}
      <section className="relative pt-12 pb-16 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 inline-block"
          >
            Engineering Publications
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-blue-100 to-indigo-300 bg-clip-text text-transparent"
          >
            The Akshay Infotech Tech Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light"
          >
            Deep-dives into modern web architectures, compliance-level security designs, and serverless compute deployments.
          </motion.p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-6 text-left">
            Featured Article
          </span>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left hover:border-blue-500/20 transition-all duration-300"
          >
            {/* Featured Visual */}
            <div className="lg:col-span-5 h-64 bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-cyan-600/20 border border-white/5 rounded-2xl flex flex-col justify-between p-6 relative overflow-hidden group">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">LATEST RELEASE</span>
                <h4 className="text-xl font-bold text-white leading-tight">Next.js scaling telemetry metrics</h4>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md rounded-2xl" />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                {featuredPost.desc}
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-slate-500 pt-2">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1.5">
                    <User className="h-4 w-4 text-blue-500" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <MagneticButton>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-md transition-colors"
                  >
                    Read Featured Post
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Pills & Article List Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar with Search and Categories */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-900/60">
            {/* Categories list */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-4.5 py-2.5 rounded-full border transition-all cursor-pointer ${
                    (selectedCategory === cat || (cat === "All Insights" && selectedCategory === "All Insights"))
                      ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-900/20"
                      : "bg-slate-900/40 text-slate-450 border-white/5 hover:border-blue-500/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500/50 pl-9 text-slate-200"
              />
              <Search className="absolute left-3 top-3 h-3.5 w-3.5 text-slate-500" />
            </div>
          </div>

          {/* Grid list with Staggered Entrance and Left/Right Reveal Animations */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -40 : 40 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { type: "spring", stiffness: 100, damping: 18, delay: index * 0.05 }
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  className="group bg-slate-900/30 border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-2xl hover:border-blue-500/20 transition-all duration-300 text-left relative overflow-hidden"
                >
                  {/* Subtle hover glow effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-4">
                    {/* Visual Card Thumbnail Header with Hover Zoom */}
                    <div className="w-full h-40 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 border border-white/5 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${post.featuredImage} opacity-30 group-hover:scale-105 transition-transform duration-500`} />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4 flex items-center space-x-1.5">
                        <img src="/logo-icon.png" alt="Akshay Infotech Icon" className="h-4.5 w-auto object-contain" />
                        <span className="text-[9px] font-bold tracking-widest text-white/50 uppercase">Akshay Infotech</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-cyan-500/20 inline-block">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-[10px] text-slate-500">
                        <BookOpen className="h-3.5 w-3.5 text-blue-500" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-base font-extrabold text-white leading-snug group-hover:text-blue-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-3">
                      {post.desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-[10px] text-slate-500">
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
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-slate-500 border border-white/5 rounded-3xl bg-slate-900/10">
              No articles found matching the filters.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
