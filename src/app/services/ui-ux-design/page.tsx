"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Palette, Compass, PenTool, Layers, Users, Eye, ArrowRight, CheckCircle, 
  HelpCircle, Settings, Globe, Award, RefreshCw
} from "lucide-react";
import { motion } from "framer-motion";
import FAQItem from "@/components/shared/FAQItem";

const researchSteps = [
  {
    phase: "Discovery",
    title: "User interviews & Landscape Audits",
    desc: "We analyze target user personas, conduct structural usability audits on legacy software platforms, map competitor drop-off rates, and identify user friction loops."
  },
  {
    phase: "Architecture",
    title: "Information structure & Card sorting",
    desc: "We establish clean, intuitive sitemaps by running card sorting exercises, defining user navigation paths, and optimizing layout trees to minimize clicks."
  },
  {
    phase: "Wireframing",
    title: "Low-fidelity blueprint sketches",
    desc: "We map layout structures and data placement without visual styling distractions, prioritizing clear usability hierarchy and alignment rules."
  },
  {
    phase: "Design System",
    title: "Component variants & Variable tokens",
    desc: "We define structured typography rules, select accessible color pairs (WCAG 2.1 AA), and build modular Figma design libraries complete with auto-layouts."
  }
];

const faqs = [
  {
    q: "How do your design systems optimize developer handoff operations?",
    a: "We structure our design systems inside Figma using variables and tokens that match CSS variables. Interactive states are declared as component variants, providing developers with clear visual guides for coding."
  },
  {
    q: "What is WCAG 2.1 AA compliance, and why is it important?",
    a: "WCAG 2.1 AA represents standard web accessibility guidelines. It ensures that color contrast ratios are sufficiently readable, text can scale, keyboard navigation is supported, and button targets are large enough for all users."
  },
  {
    q: "Do you run usability testing sessions with real target users?",
    a: "Yes. We create interactive click-through prototypes and run testing sessions with target users, tracking completion rates and user friction to refine layouts before coding."
  },
  {
    q: "How do you audit usability issues on legacy enterprise platforms?",
    a: "We run Heuristic Reviews based on Jakob Nielsen's 10 usability heuristics, tracking user support issues, mapping user workflows, and delivering actionable improvements to optimize platforms."
  }
];

// Canvas-based drifting particles background
function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const count = 35;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: (Math.random() - 0.5) * 0.12,
        opacity: Math.random() * 0.35 + 0.15,
        color: i % 2 === 0 ? "59, 130, 246" : "6, 182, 212" // Blue and Cyan
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
}

export default function UIUXDesignPage() {
  useEffect(() => {
    document.title = "Bespoke UI/UX Design & User Research | Akshay Infotech";
  }, []);

  return (
    <div className="bg-[#03050c] text-slate-100 min-h-screen font-sans selection:bg-primary selection:text-white relative overflow-hidden">
      
      {/* Animated Particles in the background */}
      <FloatingParticles />

      {/* Futuristic Background Spotlights & Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute bottom-[20%] right-[5%] h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[130px] animate-pulse" style={{ animationDuration: "14s" }} />
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      
      {/* 1. Bespoke Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-24 border-b border-slate-900/60 bg-gradient-to-b from-[#03050c] to-blue-955/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block">
                Creative Design Studio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Human-Centric <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  UI/UX & Design Systems
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-light">
                Akshay designs intuitive, pixel-perfect user interfaces based on behavioral research. We construct comprehensive design libraries to ensure brand consistency and reduce development costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
                >
                  Consult with a Designer
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-350 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/50 rounded-xl transition-all"
                >
                  View Design Process
                </a>
              </div>
            </div>

            {/* Custom SVG Design Canvas showing responsive lines drawing themselves */}
            <div className="lg:col-span-5 relative">
              <div className="w-full aspect-square max-w-[380px] mx-auto bg-slate-900/70 border border-blue-500/20 rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between backdrop-blur-md">
                {/* SVG Blueprint grids drawing themselves */}
                <svg className="w-full h-full absolute inset-0 p-4 stroke-slate-800 fill-none" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                  {/* Drawing elements */}
                  <motion.rect 
                    x="10" y="10" width="80" height="80" rx="8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    stroke="#334155" strokeWidth="0.75"
                  />
                  <motion.line 
                    x1="10" y1="50" x2="90" y2="50"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2"
                  />
                  <motion.circle 
                    cx={50} cy={50} r={15}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    stroke="#06b6d4" strokeWidth="1"
                  />
                  <motion.path 
                    d="M 20 75 L 45 75 L 50 80 L 55 75 L 80 75"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, delay: 1 }}
                    stroke="#3b82f6" strokeWidth="1"
                  />
                </svg>

                {/* Overlay UI elements */}
                <div className="z-10 flex-grow flex flex-col justify-between h-full font-mono text-[9px] text-slate-400">
                  <div className="flex justify-between items-center bg-slate-950/80 border border-slate-800 p-2 rounded-xl">
                    <span>X: 120.0px</span>
                    <span className="text-cyan-450 font-bold">W: 100%</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-950/80 border border-slate-800 p-2 rounded-xl">
                    <span>Y: 85.5px</span>
                    <span className="text-blue-400 font-bold">H: Auto</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Research Process Section */}
      <section id="process" className="py-24 bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase mb-2 block">
              Design Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Creative Discovery & Research Methodology
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl mx-auto font-light">
              Our designs are based on behavioral research, user interviews, and iterative prototyping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-blue-500/10 hover:border-blue-500/25 p-8 rounded-3xl relative space-y-4 shadow-2xl backdrop-blur-md hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] transition-all duration-300">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md inline-block uppercase">
                  {step.phase}
                </span>
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Design Systems */}
      <section className="py-24 bg-slate-950/40 border-t border-b border-slate-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Wireframes vs Prototyping */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Methodology 01</span>
              <h3 className="text-2xl font-bold text-white">Wireframes vs High-Fidelity Prototypes</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                We develop wireframes to plan user flows and verify layout density before applying custom colors, graphics, and interactive details. This ensures focus on functional patterns, button sizes, sitemaps, and core user interactions.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> Low-fidelity layout wireframes</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> Interactive high-fidelity Figma files</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> Comprehensive clickable user journey prototypes</li>
              </ul>
            </div>
            
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800/80 space-y-4 shadow-2xl backdrop-blur-md">
              <h4 className="text-slate-200 font-bold text-sm text-left">Interactive States Matrix</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="border border-slate-700 p-4 rounded-xl bg-slate-800/40 text-xs text-slate-300 font-bold">Default</div>
                <div className="border border-blue-500/50 p-4 rounded-xl bg-blue-500/10 text-xs text-blue-450 font-bold">Hover</div>
                <div className="border border-slate-800 p-4 rounded-xl bg-slate-950/30 text-xs text-slate-500 font-bold">Disabled</div>
              </div>
            </div>
          </div>

          {/* Design Systems & Brand Tokens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-4 text-left">
              <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Methodology 02</span>
              <h3 className="text-2xl font-bold text-white">Modular Figma Brand Tokens</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                By setting up reusable colors, margins, font sizing, and component parameters inside Figma library tokens, we establish visual consistency. This structured style handoff enables engineering teams to code with confidence.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> Spacing variables aligned to 8px grids</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> Auto-layout settings matching CSS flexbox</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> Dark mode component tokens</li>
              </ul>
            </div>
            
            <div className="lg:order-1 bg-slate-900/60 p-8 rounded-3xl border border-slate-800/80 space-y-4 shadow-2xl backdrop-blur-md text-left">
              <h4 className="text-slate-200 font-bold text-sm border-b border-slate-800/80 pb-2">Design Tokens JSON</h4>
              <pre className="text-[10px] text-cyan-400/90 font-mono overflow-x-auto p-4 bg-slate-950/80 rounded-xl border border-slate-850">
{`{
  "colors": {
    "primary": "#3b82f6",
    "surface": "#090d1a",
    "background": "#03050c"
  },
  "spacing": {
    "sm": "8px",
    "md": "16px"
  }
}`}
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Unique Section: Heuristic Audit Comparison Table */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase mb-2 block">
              Heuristic Audits
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Jakob Nielsen&apos;s 10 Usability Principles
            </h2>
            <p className="text-slate-405 text-xs sm:text-sm mt-2 font-light">
              Our usability audit evaluations measure interface layouts against established industry standards.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-850 rounded-2xl bg-slate-900/40 backdrop-blur-md">
            <table className="min-w-full divide-y divide-slate-850 text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-850">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Usability Heuristics</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Target Objective</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Akshay Design Solutions</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Usability Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-slate-300">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">System Visibility Status</td>
                  <td className="px-6 py-4">Inform users of active processes</td>
                  <td className="px-6 py-4">Dynamic loading icons & interactive steps</td>
                  <td className="px-6 py-4 text-cyan-400 font-semibold">Low user drop-offs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">User Control & Freedom</td>
                  <td className="px-6 py-4">Enable cancellation of processes</td>
                  <td className="px-6 py-4">Clear exit buttons & undo options</td>
                  <td className="px-6 py-4 text-cyan-400 font-semibold">Reduced support requests</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Error Prevention rules</td>
                  <td className="px-6 py-4">Block invalid inputs before submissions</td>
                  <td className="px-6 py-4">Real-time inline validation & disabled button states</td>
                  <td className="px-6 py-4 text-cyan-400 font-semibold">Accurate form entries</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Consistency & Standards</td>
                  <td className="px-6 py-4">Align styling to common visual layouts</td>
                  <td className="px-6 py-4">Figma design system tokens alignment</td>
                  <td className="px-6 py-4 text-cyan-400 font-semibold">Faster onboarding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Design Metrics */}
      <section className="py-24 bg-slate-950/40 border-t border-slate-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">Value Metrics</span>
            <h2 className="text-3xl font-extrabold text-white">Design Performance Outcomes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-blue-500/10 bg-slate-900/40 p-6 rounded-2xl space-y-3 shadow-2xl backdrop-blur-md hover:border-blue-500/25 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">94%</div>
              <h4 className="font-bold text-white text-sm">System Usability Score</h4>
              <p className="text-xs text-slate-450 leading-relaxed font-light">
                Detailed user testing maps and workflow revisions increase layout clarity.
              </p>
            </div>
            
            <div className="border border-blue-500/10 bg-slate-900/40 p-6 rounded-2xl space-y-3 shadow-2xl backdrop-blur-md hover:border-blue-500/25 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">-45%</div>
              <h4 className="font-bold text-white text-sm">Code Refactoring Reductions</h4>
              <p className="text-xs text-slate-450 leading-relaxed font-light">
                Confirming layouts in clickable wireframes prevents coding adjustments.
              </p>
            </div>

            <div className="border border-blue-500/10 bg-slate-900/40 p-6 rounded-2xl space-y-3 shadow-2xl backdrop-blur-md hover:border-blue-500/25 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">+48%</div>
              <h4 className="font-bold text-white text-sm">User Session Retention</h4>
              <p className="text-xs text-slate-450 leading-relaxed font-light">
                Smooth layout scaling and clear micro-interactions keep users engaged.
              </p>
            </div>

            <div className="border border-blue-500/10 bg-slate-900/40 p-6 rounded-2xl space-y-3 shadow-2xl backdrop-blur-md hover:border-blue-500/25 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">100%</div>
              <h4 className="font-bold text-white text-sm">WCAG Access Readiness</h4>
              <p className="text-xs text-slate-450 leading-relaxed font-light">
                Visual designs support screen readers and follow color accessibility guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service FAQs */}
      <section className="py-24 bg-transparent border-t border-slate-900/60 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase mb-2 block">
              Support FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6 text-left">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} iconColor="text-cyan-400" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="bg-gradient-to-r from-blue-950/20 to-indigo-950/20 py-20 border-t border-slate-900/60 text-center relative overflow-hidden z-10">
        <div className="absolute top-0 right-0 h-48 w-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Design a High-Performance Platform?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed font-light">
            Discuss accessibility audits, design libraries, and user flow wireframes with our designers today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
            >
              Get In Touch
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
