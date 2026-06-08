"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Code, Terminal, Layers, Database, Cpu, ArrowRight, CheckCircle, 
  HelpCircle, Settings, Globe, Award, RefreshCw, BarChart
} from "lucide-react";
import { motion } from "framer-motion";
import FAQItem from "@/components/shared/FAQItem";

// Custom typed lines for simulated IDE
const typingLines = [
  "const akshayProject = new Project('Web App');",
  "await akshayProject.optimizePerformance();",
  "// Output: LCP 0.6s, CLS 0.0, FCP 0.2s",
  "console.log('Production bundles compiled successfully.');",
  "export default akshayProject.deployToEdge();"
];

const timelineSteps = [
  {
    phase: "Phase 1: Discovery & API Schema Design",
    title: "Data modeling & Technical Discovery",
    desc: "Our architects map database relations, detail entity relationship schemas, design REST/GraphQL API specifications, and configure state parameters. We write complete documentation matching Swagger specifications before frontend compilation."
  },
  {
    phase: "Phase 2: Atomic Layout Systems",
    title: "Modular component engineering",
    desc: "We construct interface elements using an atomic folder system: isolating reusable styling components, input buttons, modal wrappers, and data grids. This modular styling ensures high-speed edits without css duplications."
  },
  {
    phase: "Phase 3: Real-Time States & Integrations",
    title: "Secure API and state bindings",
    desc: "Our engineers connect frontend pages to backend APIs using type-safe client controllers, establish JWT token security models, configure OAuth state checks, and set up local browser storage caching."
  },
  {
    phase: "Phase 4: CDN Deploy & Telemetry Tuning",
    title: "Global CDN caching & lighthouse audits",
    desc: "We route production bundles to edge servers (Vercel CDN or Cloudflare Enterprise), configure header security directives, activate Brotli compression setups, and run continuous Lighthouse performance scans."
  }
];

const faqs = [
  {
    q: "Why is Next.js 15 RSC critical for enterprise software applications?",
    a: "React Server Components (RSC) render complex elements on server microservices. The client browser only downloads the minimal JavaScript package necessary for interaction. This reduces client CPU cycles, accelerates loading speeds over cellular connections, and provides static HTML crawlable by search bots."
  },
  {
    q: "How does type safety in TypeScript prevent deployment bugs?",
    a: "TypeScript compiles files and flags mismatched parameters before building. By typing API responses, database models, and React component properties, we eliminate undefined property errors. This ensures that any data structure changes are automatically tracked during compile cycles."
  },
  {
    q: "Do you build headless and composable E-Commerce systems?",
    a: "Yes. We design headless e-commerce architectures by decoupling customer frontends from transaction backends. Using platforms like Shopify Plus API or customized database platforms, we build fast, secure store layouts that handle thousands of concurrent checkouts."
  },
  {
    q: "How does Akshay optimize web platforms for Core Web Vitals?",
    a: "We address layout shifts (CLS), initial page displays (FCP), and main content loads (LCP). We implement asset lazy-loading, optimize responsive images, specify width/height tags to prevent shifts, code lightweight CSS, and cache files on CDN networks."
  }
];

export default function WebDevelopmentPage() {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    document.title = "Enterprise Software & Web Development | Akshay Infotech";
  }, []);

  useEffect(() => {
    if (currentLineIndex < typingLines.length) {
      const timer = setTimeout(() => {
        setTypedLines((prev) => [...prev, typingLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* 1. Bespoke Hero Section: 3D Laptop + Code Animation */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-slate-900 bg-radial-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block">
                Modern Software Development
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Headless Architectures <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  & Scalable Web Systems
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Akshay builds fast, secure web solutions using modern architectures. By shifting database calculations to Next.js server components and compiling strict TypeScript configurations, we deliver secure web portals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
                >
                  Consult with an Architect
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/50 rounded-xl transition-all"
                >
                  View Workflow Timeline
                </a>
              </div>
            </div>

            {/* Simulated 3D IDE Laptop Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="w-full bg-slate-900/90 rounded-2xl border border-slate-800/80 p-1.5 shadow-2xl relative overflow-hidden backdrop-blur-md">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-850 bg-slate-950/60 rounded-t-xl">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 block"></span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider font-semibold">
                    akshay-compiler.ts — editor
                  </span>
                  <Terminal className="h-4 w-4 text-slate-600" />
                </div>
                {/* Editor Editor Content */}
                <div className="p-5 font-mono text-[11px] sm:text-xs text-slate-300 min-h-[220px] bg-slate-950/40 space-y-2 rounded-b-xl overflow-y-auto">
                  {typedLines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex space-x-2"
                    >
                      <span className="text-slate-600 select-none w-5 text-right">{idx + 1}</span>
                      <span className={line.startsWith("//") ? "text-emerald-500" : line.startsWith("console") ? "text-cyan-400" : "text-blue-400"}>
                        {line}
                      </span>
                    </motion.div>
                  ))}
                  {currentLineIndex < typingLines.length && (
                    <span className="inline-block w-1.5 h-4 bg-primary animate-pulse ml-7"></span>
                  )}
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Custom Web Solutions Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">Custom Web Solutions</span>
              <h2 className="text-3xl font-extrabold text-white leading-tight">
                High-Concurrency Operations Designed for Business Growth
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Generic web templates are insufficient for complex digital needs. At Akshay, we construct custom web platforms using modular React patterns, ensuring clean code structures and rapid page loads.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                By optimizing database operations, establishing CDN caching configurations, and implementing automated testing scripts, we build performant platforms ready to scale.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <Globe className="h-6 w-6 text-primary" />
                <h4 className="text-white font-bold">API Gateways</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Decouple frontend layouts from server endpoints to secure sensitive business database keys.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <Cpu className="h-6 w-6 text-primary" />
                <h4 className="text-white font-bold">Serverless Computations</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Run business validation scripts dynamically using serverless microservices to reduce resource costs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Tech Stack Sections (Frontend & Backend & E-Commerce) */}
      <section className="py-20 bg-slate-900/40 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Frontend Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Pillar 01</span>
              <h3 className="text-2xl font-bold text-white">Frontend Engineering Excellence</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We write responsive customer interfaces using Next.js 15 App Router configurations, Tailwind CSS rules, and strict TypeScript validations. Our page builds focus on Core Web Vitals thresholds, lazy-loading heavy media elements, and minimizing client-side javascript package sizing to improve conversions.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Single Page & Server-rendered App configurations</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Global UI layout design tokens</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Strict WCAG accessibility checklist tests</li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Client Component Setup</h4>
              <pre className="text-[10px] text-emerald-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`interface ContainerProps {
  children: React.ReactNode;
  theme: "dark" | "light";
}

export const Container: React.FC<ContainerProps> = ({ children, theme }) => {
  return <div className={\`layout-\${theme}\`}>{children}</div>;
};`}
              </pre>
            </div>
          </div>

          {/* Backend Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Pillar 02</span>
              <h3 className="text-2xl font-bold text-white">Secure Backend Architectures</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We develop reliable server interfaces using Node.js backends, PostgreSQL relation structures, and key-value database caching. We enforce secure JWT authentication parameters, coordinate encrypted cookie storage states, and configure middleware filters to protect systems from intrusion.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Relational database modeling with Prisma ORM</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> API request validations and parameter checks</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Encrypted database configuration options</li>
              </ul>
            </div>
            
            <div className="lg:order-1 bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Database Index Config</h4>
              <pre className="text-[10px] text-cyan-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`CREATE INDEX idx_user_session 
ON "sessions" ("userId", "tokenExpiry");

SELECT * FROM "sessions" 
WHERE "userId" = $1 AND "isActive" = true;`}
              </pre>
            </div>
          </div>

          {/* E-Commerce Platforms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Pillar 03</span>
              <h3 className="text-2xl font-bold text-white">Headless E-Commerce Solutions</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We build fast checkout layouts by integrating headless commerce configurations with transactional APIs (Shopify API, Stripe API). Decoupling visual store layouts from checkout backends helps prevent outages during shopping rushes.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Decoupled shopping interfaces</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Stripe and Adyen API transaction check integrations</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Real-time inventory tracking database channels</li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-850 grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl text-center space-y-2 border border-slate-800">
                <div className="text-2xl font-bold text-primary">0.5s</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">API Checkout Sync</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl text-center space-y-2 border border-slate-800">
                <div className="text-2xl font-bold text-primary">99.99%</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Transaction Uptime</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Unique Section: Technology Stack Comparison Table */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Evaluation Grid
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Frontend Framework Comparison Matrix
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Choosing the right visual system is critical to prevent code rewriting as your platform scales.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-850 rounded-2xl bg-slate-900/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-slate-850 text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Metrics</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Next.js 15 (RSC)</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">React 19 SPA</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Angular 18</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Vue 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-slate-300">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Primary Render location</td>
                  <td className="px-6 py-4">Server-First (Edge Node)</td>
                  <td className="px-6 py-4">Client Browser</td>
                  <td className="px-6 py-4">Client (Hybrid possible)</td>
                  <td className="px-6 py-4">Client Browser</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Initial Javascript Weight</td>
                  <td className="px-6 py-4 text-emerald-400">Min. (&lt;50kB base)</td>
                  <td className="px-6 py-4">Med (150kB–500kB)</td>
                  <td className="px-6 py-4">High (300kB+)</td>
                  <td className="px-6 py-4">Med (100kB+)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">SEO Indexing Quality</td>
                  <td className="px-6 py-4 text-emerald-400">Perfect (Static pre-build)</td>
                  <td className="px-6 py-4 text-amber-500">Low (Requires client run)</td>
                  <td className="px-6 py-4">Med (SSR configuration)</td>
                  <td className="px-6 py-4">Med (SPA limit)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Complexity to maintain</td>
                  <td className="px-6 py-4">Medium (Hybrid rules)</td>
                  <td className="px-6 py-4 text-emerald-400">Low (Simple client routing)</td>
                  <td className="px-6 py-4">High (Enterprise rules)</td>
                  <td className="px-6 py-4">Low (Simple template files)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Unique Section: Development Workflow Timeline */}
      <section id="workflow" className="py-24 bg-slate-900/30 border-t border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Timeline Roadmap
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Bespoke Software Workflow Phase Cycles
            </h2>
          </div>

          <div className="relative border-l border-slate-800 ml-4 space-y-12">
            {timelineSteps.map((s, idx) => (
              <div key={idx} className="relative pl-8">
                {/* Visual Bullet Node */}
                <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-950 border border-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-primary font-mono block uppercase">{s.phase}</span>
                  <h4 className="text-lg font-bold text-white">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Benefits Matrix */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Enterprise Metrics</span>
            <h2 className="text-3xl font-extrabold text-white">Web Performance Outcomes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-slate-900 bg-slate-900/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">&lt;0.6s</div>
              <h4 className="font-bold text-white text-sm">Initial Response Speed</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                By pre-rendering pages using Next.js, we deliver fast load times.
              </p>
            </div>
            
            <div className="border border-slate-900 bg-slate-900/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">100%</div>
              <h4 className="font-bold text-white text-sm">Type Safety Guarantee</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We type components and database schemas to eliminate runtime property errors.
              </p>
            </div>

            <div className="border border-slate-900 bg-slate-900/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">+28%</div>
              <h4 className="font-bold text-white text-sm">Conversion Rate Boost</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fast layout rendering reduces client drop-offs during transactions.
              </p>
            </div>

            <div className="border border-slate-900 bg-slate-900/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">-45%</div>
              <h4 className="font-bold text-white text-sm">Hosting Costs Reduction</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Efficient server layouts decrease database loads during operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service FAQs */}
      <section className="py-24 bg-slate-900/20 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Support FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} iconColor="text-primary" />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="bg-slate-900 py-20 border-t border-slate-850 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Build a High-Performance Web Platform?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Discuss system integrations, database requirements, and secure user logic with our engineering director today.
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
