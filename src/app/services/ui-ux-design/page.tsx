"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { 
  Palette, Compass, PenTool, Layers, Users, Eye, ArrowRight, CheckCircle, 
  HelpCircle, Settings, Globe, Award, RefreshCw
} from "lucide-react";
import { motion } from "framer-motion";

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
    q: "Do you run usability testing sessions with real target users?",
    a: "Yes. We create interactive click-through prototypes and run testing sessions with target users, tracking completion rates and user friction to refine layouts before coding."
  },
  {
    q: "How do you audit usability issues on legacy enterprise platforms?",
    a: "We run Heuristic Reviews based on Jakob Nielsen's 10 usability heuristics, tracking user support issues, mapping user workflows, and delivering actionable improvements to optimize platforms."
  }
];

export default function UIUXDesignPage() {
  useEffect(() => {
    document.title = "Bespoke UI/UX Design & User Research | Akshay Infotech";
  }, []);

  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* 1. Bespoke Hero Section: Large Design Canvas Grid */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-zinc-200 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block">
                Creative Design Studio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
                Human-Centric <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  UI/UX & Design Systems
                </span>
              </h1>
              <p className="text-sm sm:text-base text-zinc-650 max-w-2xl leading-relaxed">
                Akshay designs intuitive, pixel-perfect user interfaces based on behavioral research. We construct comprehensive design libraries to ensure brand consistency and reduce development costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl transition-all shadow-md group"
                >
                  Consult with a Designer
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-zinc-700 hover:text-zinc-900 border border-zinc-300 hover:border-zinc-400 bg-white rounded-xl transition-all"
                >
                  View Design Process
                </a>
              </div>
            </div>

            {/* Custom SVG Design Canvas showing responsive lines drawing themselves */}
            <div className="lg:col-span-5 relative">
              <div className="w-full aspect-square max-w-[380px] mx-auto bg-white border border-zinc-200 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
                {/* SVG Blueprint grids drawing themselves */}
                <svg className="w-full h-full absolute inset-0 p-4 stroke-zinc-250 fill-none" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#F4F4F5" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                  {/* Drawing elements */}
                  <motion.rect 
                    x="10" y="10" width="80" height="80" rx="8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    stroke="#D4D4D8" strokeWidth="0.75"
                  />
                  <motion.line 
                    x1="10" y1="50" x2="90" y2="50"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    stroke="#D4D4D8" strokeWidth="0.5" strokeDasharray="2 2"
                  />
                  <motion.circle 
                    cx="50" cy="50" r="15"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    stroke="#2563EB" strokeWidth="1"
                  />
                  <motion.path 
                    d="M 20 75 L 45 75 L 50 80 L 55 75 L 80 75"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, delay: 1 }}
                    stroke="#7C3AED" strokeWidth="1"
                  />
                </svg>

                {/* Overlay UI elements */}
                <div className="z-10 flex-grow flex flex-col justify-between h-full font-mono text-[9px] text-zinc-400">
                  <div className="flex justify-between items-center bg-zinc-50 border border-zinc-150 p-2 rounded-xl">
                    <span>X: 120.0px</span>
                    <span className="text-primary font-bold">W: 100%</span>
                  </div>
                  <div className="flex justify-between items-center bg-zinc-50 border border-zinc-150 p-2 rounded-xl">
                    <span>Y: 85.5px</span>
                    <span className="text-purple-600 font-bold">H: Auto</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Research Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Design Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">
              Creative Discovery & Research Timelines
            </h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-2xl mx-auto">
              Our designs are based on behavioral research, user interviews, and iterative prototyping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchSteps.map((step, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200/80 p-8 rounded-3xl relative space-y-4 shadow-2xs">
                <span className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md inline-block uppercase">
                  {step.phase}
                </span>
                <h4 className="text-lg font-bold text-zinc-900">{step.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Design Systems (Wireframing & Prototyping & Journey Mapping) */}
      <section className="py-24 bg-zinc-50 border-t border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Wireframes vs Prototyping */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Methodology 01</span>
              <h3 className="text-2xl font-bold text-zinc-950">Wireframes vs High-Fidelity Prototypes</h3>
              <p className="text-zinc-650 text-sm leading-relaxed">
                We develop wireframes to plan user flows and verify layout density before applying custom colors, graphics, and interactive details. This ensures focus on functional patterns, button sizes, sitemaps, and core user interactions.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Low-fidelity layout wireframes</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Interactive high-fidelity Figma files</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Comprehensive clickable user journey prototypes</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 space-y-4 shadow-sm">
              <h4 className="text-zinc-900 font-bold text-sm">Interactive States Matrix</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="border border-zinc-150 p-4 rounded-xl bg-zinc-55 text-xs text-zinc-700 font-bold">Default</div>
                <div className="border border-primary p-4 rounded-xl bg-primary/5 text-xs text-primary font-bold">Hover</div>
                <div className="border border-zinc-300 p-4 rounded-xl bg-zinc-100 text-xs text-zinc-400 font-bold">Disabled</div>
              </div>
            </div>
          </div>

          {/* Design Systems & Brand Tokens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Methodology 02</span>
              <h3 className="text-2xl font-bold text-zinc-950">Modular Figma Brand Tokens</h3>
              <p className="text-zinc-650 text-sm leading-relaxed">
                By setting up reusable colors, margins, font sizing, and component parameters inside Figma library tokens, we establish visual consistency. This structured style handoff enables engineering teams to code with confidence.
              </p>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Spacing variables aligned to 8px grids</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Auto-layout settings matching CSS flexbox</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Dark mode component tokens</li>
              </ul>
            </div>
            
            <div className="lg:order-1 bg-white p-8 rounded-3xl border border-zinc-200 space-y-4 shadow-sm">
              <h4 className="text-zinc-900 font-bold text-sm border-b border-zinc-150 pb-2">Design Tokens JSON</h4>
              <pre className="text-[10px] text-zinc-600 font-mono overflow-x-auto p-4 bg-zinc-50 rounded-xl">
{`{
  "colors": {
    "primary": "#2563EB",
    "surface": "#FFFFFF",
    "background": "#F4F4F5"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Heuristic Audits
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">
              Jakob Nielsen&apos;s 10 Usability Principles
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-2">
              Our usability audit evaluations measure interface layouts.
            </p>
          </div>

          <div className="overflow-x-auto border border-zinc-200 rounded-2xl bg-zinc-50/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-zinc-200 text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100 text-zinc-600">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Usability Heuristics</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Target Objective</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Akshay Design Solutions</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Usability Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-700">
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">System Visibility Status</td>
                  <td className="px-6 py-4">Inform users of active processes</td>
                  <td className="px-6 py-4">Dynamic loading icons & interactive steps</td>
                  <td className="px-6 py-4 text-emerald-600">Low user drop-offs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">User Control & Freedom</td>
                  <td className="px-6 py-4">Enable cancellation of processes</td>
                  <td className="px-6 py-4">Clear exit buttons & undo options</td>
                  <td className="px-6 py-4 text-emerald-600">Reduced support requests</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Error Prevention rules</td>
                  <td className="px-6 py-4">Block invalid inputs before submissions</td>
                  <td className="px-6 py-4">Real-time inline validation & disabled button states</td>
                  <td className="px-6 py-4 text-emerald-600">Accurate form entries</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Consistency & Standards</td>
                  <td className="px-6 py-4">Align styling to common visual layouts</td>
                  <td className="px-6 py-4">Figma design system tokens alignment</td>
                  <td className="px-6 py-4 text-emerald-600">Faster onboarding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Design Metrics */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Value Metrics</span>
            <h2 className="text-3xl font-extrabold text-zinc-900">Design Performance Outcomes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-zinc-200 bg-white p-6 rounded-2xl space-y-3 shadow-2xs">
              <div className="text-3xl font-bold text-primary">94%</div>
              <h4 className="font-bold text-zinc-900 text-sm">System Usability Score</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Detailed user testing maps and workflow revisions increase layout clarity.
              </p>
            </div>
            
            <div className="border border-zinc-200 bg-white p-6 rounded-2xl space-y-3 shadow-2xs">
              <div className="text-3xl font-bold text-primary">-45%</div>
              <h4 className="font-bold text-zinc-900 text-sm">Code Refactoring Reductions</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Confirming layouts in clickable wireframes prevents coding adjustments.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-6 rounded-2xl space-y-3 shadow-2xs">
              <div className="text-3xl font-bold text-primary">+48%</div>
              <h4 className="font-bold text-zinc-900 text-sm">User Session Retention</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Smooth layout scaling and clear micro-interactions keep users engaged.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-6 rounded-2xl space-y-3 shadow-2xs">
              <div className="text-3xl font-bold text-primary">100%</div>
              <h4 className="font-bold text-zinc-900 text-sm">WCAG Access Readiness</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Visual designs support screen readers and follow color accessibility guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service FAQs */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Support FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6.5 space-y-2.5">
                <div className="flex items-center space-x-2 text-sm font-bold text-zinc-900">
                  <HelpCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="bg-zinc-100 py-20 border-t border-zinc-250 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
            Ready to Design a High-Performance Platform?
          </h2>
          <p className="text-sm sm:text-base text-zinc-650 max-w-xl mx-auto leading-relaxed">
            Discuss accessibility audits, design libraries, and user flow wireframes with our designers today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl transition-all shadow-md group"
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
