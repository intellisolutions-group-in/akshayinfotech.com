"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Linkedin, Twitter, Facebook, Github, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import MagneticWrapper from "@/components/ui/MagneticWrapper";


// Stagger child variants for navigation links
const listVariants = {
  initial: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: [0.16, 1, 0.3, 1] as const 
    } 
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerStyles = `
    @keyframes gradientLine {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-gradient-line {
      background-size: 200% 200%;
      animation: gradientLine 4s linear infinite;
    }
  `;

  return (
    <footer className="relative bg-white pt-16 pb-8 overflow-hidden z-10">
      <style dangerouslySetInnerHTML={{ __html: footerStyles }} />
      
      {/* Floating Capsule Card (SlothUI Centered Design) */}
      <motion.div 
        initial={{ opacity: 0, y: 45, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-4 sm:mx-8 md:mx-12 lg:mx-16 bg-[#050814] text-white rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-blue-950/10 backdrop-blur-xl"
      >
        {/* Top Animated Gradient Line inside the capsule */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient-line" />

        {/* Ambient background glow inside the capsule */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-[100px] pointer-events-none -z-10" />

        {/* Huge Centered Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-20">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.085 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[14vw] md:text-[220px] font-black tracking-widest text-center select-none pointer-events-none filter blur-[0.5px] leading-none"
            style={{
              background: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AKSHAY
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col items-center justify-center text-center relative z-10">
          
          {/* Centered Brand Logo */}
          <div className="mb-8">
            <Link href="/" className="inline-block">
              <img
                src="/logo-dark.png"
                alt="Akshay Infotech Logo"
                className="h-9 w-auto object-contain transition-all duration-300 hover:scale-[1.02] mx-auto"
              />
            </Link>
            <p className="text-xs text-white/40 mt-3 max-w-sm mx-auto font-light leading-relaxed">
              Building Intelligent Digital Ecosystems. Engineering premium high-fidelity software architectures.
            </p>
          </div>

          {/* Horizontal Navigation Links */}
          <motion.div 
            variants={listVariants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 mb-10"
          >
            {[
              { name: "Homepage", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Our Solutions", href: "/solutions" },
              { name: "Case Studies", href: "/resources/case-studies" },
              { name: "About Us", href: "/company/about-us" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Divider & Copyright inside capsule */}
          <div className="w-full border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/35 space-y-4 sm:space-y-0">
            <div>
              &copy; 2011-{currentYear} Akshay Infotech. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-white transition-colors">Security</Link>
            </div>
          </div>

        </div>
      </motion.div>
    </footer>
  );
}
