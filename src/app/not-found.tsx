"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden flex items-center justify-center">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,transparent_65%)] pointer-events-none" />

      {/* Giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="text-[30vw] font-black text-white/[0.02] tracking-widest leading-none">404</div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-400/30"
          style={{
            width: `${3 + i * 1.5}px`,
            height: `${3 + i * 1.5}px`,
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -18, 0, 12, 0],
            opacity: [0.2, 0.7, 0.4, 0.8, 0.2],
            scale: [1, 1.4, 1, 1.2, 1],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-8">
        
        {/* Animated 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative inline-block">
            <span className="text-8xl sm:text-9xl font-black bg-gradient-to-b from-white via-indigo-200 to-indigo-400/40 bg-clip-text text-transparent tracking-tight">
              404
            </span>
            {/* Glow behind number */}
            <div className="absolute inset-0 blur-3xl bg-indigo-500/10 -z-10" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light max-w-md mx-auto">
            The page you are looking for does not exist, has been moved, or is temporarily unavailable.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent max-w-xs mx-auto"
        />

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/20 transition-all hover:translate-y-[-1px] group"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-bold rounded-xl transition-all"
          >
            <Compass className="h-4 w-4" />
            Contact Support
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-6"
        >
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">Popular Destinations</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Services", href: "/services/web-development" },
              { label: "Solutions", href: "/solutions/digital-transformation" },
              { label: "Products", href: "/products" },
              { label: "Company", href: "/company/about-us" },
              { label: "Resources", href: "/resources" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 bg-slate-900/60 border border-white/5 hover:border-indigo-500/20 rounded-lg text-[10px] font-semibold text-slate-400 hover:text-indigo-400 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
