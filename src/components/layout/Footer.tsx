"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Linkedin, Twitter, Facebook, Github, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const logoText = "Akshay".split("");
const techText = "Infotech".split("");

const logoContainerVariants = {
  initial: {},
  hover: {},
};

function LogoLetter({ char, index }: { char: string; index: number }) {
  return (
    <motion.span
      className="inline-block transition-colors duration-200"
      variants={{
        initial: { y: 0 },
        hover: {
          y: [0, -5, 0],
          color: "#60A5FA",
          transition: {
            duration: 0.5,
            delay: index * 0.025,
            ease: "easeInOut",
          },
        },
      }}
    >
      {char}
    </motion.span>
  );
}

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
              <motion.div 
                variants={logoContainerVariants}
                whileHover="hover"
                initial="initial"
                className="flex items-center space-x-2.5"
              >
                <motion.div 
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: 180, scale: 1.05 }
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20"
                >
                  <Cpu className="h-5.5 w-5.5" />
                </motion.div>
                <span className="text-xl font-bold text-white tracking-tight">
                  {logoText.map((char, i) => (
                    <LogoLetter key={i} char={char} index={i} />
                  ))}
                  <span className="text-blue-400 font-medium ml-0.5">
                    {techText.map((char, i) => (
                      <LogoLetter key={i} char={char} index={i + logoText.length} />
                    ))}
                  </span>
                </span>
              </motion.div>
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

          {/* Centered Social Icons */}
          
            {[
              {
                Icon: Facebook, label: "Facebook",
                glowColor: "rgba(59, 130, 246, 0.5)",
                hoverBorder: "rgba(59, 130, 246, 0.5)",
                hoverBg: "rgba(59, 130, 246, 0.12)",
                hoverText: "#93C5FD",
                tooltip: "Follow on Facebook",
              },
              {
                Icon: Instagram, label: "Instagram",
                glowColor: "rgba(236, 72, 153, 0.45)",
                hoverBorder: "rgba(236, 72, 153, 0.45)",
                hoverBg: "rgba(236, 72, 153, 0.1)",
                hoverText: "#F9A8D4",
                tooltip: "Follow on Instagram",
              },
              {
                Icon: Linkedin, label: "LinkedIn",
                glowColor: "rgba(14, 118, 188, 0.5)",
                hoverBorder: "rgba(14, 118, 188, 0.5)",
                hoverBg: "rgba(14, 118, 188, 0.12)",
                hoverText: "#7DD3FC",
                tooltip: "Connect on LinkedIn",
              },
              {
                Icon: Github, label: "GitHub",
                glowColor: "rgba(255, 255, 255, 0.35)",
                hoverBorder: "rgba(255, 255, 255, 0.3)",
                hoverBg: "rgba(255, 255, 255, 0.07)",
                hoverText: "#FFFFFF",
                tooltip: "View on GitHub",
              },
              {
                Icon: Twitter, label: "Twitter / X",
                glowColor: "rgba(34, 211, 238, 0.45)",
                hoverBorder: "rgba(34, 211, 238, 0.4)",
                hoverBg: "rgba(34, 211, 238, 0.08)",
                hoverText: "#67E8F9",
                tooltip: "Follow on Twitter / X",
              },
              {
                Icon: Youtube, label: "YouTube",
                glowColor: "rgba(239, 68, 68, 0.5)",
                hoverBorder: "rgba(239, 68, 68, 0.45)",
                hoverBg: "rgba(239, 68, 68, 0.1)",
                hoverText: "#FCA5A5",
                tooltip: "Watch on YouTube",
              },
            ].map(({ Icon, label, glowColor, hoverBorder, hoverBg, hoverText, tooltip }, idx) => (
              <MagneticWrapper key={idx} range={20} strength={0.25}>
                <div className="relative group/social">
                  <motion.a
                    href="#"
                    whileHover={{
                      scale: 1.18,
                      y: -3,
                      boxShadow: `0 0 20px ${glowColor}`,
                      borderColor: hoverBorder,
                      backgroundColor: hoverBg,
                      color: hoverText,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-200 cursor-pointer"
                    aria-label={label}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </motion.a>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 text-white/80 text-[9px] font-bold tracking-wide px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover/social:opacity-100 transition-all duration-200 pointer-events-none shadow-xl">
                    {tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900" />
                  </div>
                </div>
              </MagneticWrapper>
            ))}
          </div>

          {/* Bottom Divider & Copyright inside capsule */}
          <div className="w-full border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/35 space-y-4 sm:space-y-0">
            <div>
              &copy; {currentYear} Nexora Technologies. All rights reserved.
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
