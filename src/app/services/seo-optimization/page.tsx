"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnalyticalCard from "../../../components/shared/AnalyticalCard";


const features = [
  { title: "Technical SEO Audits", desc: "Detailed analysis of site structures, redirect maps, console reports, and indexing problems to clear ranking bottlenecks." },
  { title: "Semantic HTML5 Structures", desc: "Refactor page hierarchies into clean semantic tags to ensure search engine crawler spiders easily parse layout contents." },
  { title: "JSON-LD Structured Data", desc: "Deploy customized schemas, breadcrumbs, product maps, and article structures for eye-catching rich snippet search results." },
  { title: "Core Web Vitals Tuning", desc: "Optimize script downloads and image formatting to secure 95+ ratings across Lighthouse audits." },
];

const processes = [
  { step: "01", name: "Crawl & Audit Scan", desc: "Run exhaustive audits using professional search tools to map out crawl blocks and console errors." },
  { step: "02", name: "Semantic Code Refactor", desc: "Replace nested divs with semantic HTML5 tags and ensure every page has a single H1 header tag." },
  { step: "03", name: "Schema & Tag Setup", desc: "Configure JSON-LD schemas, dynamic metadata parameters, and alt tags for image media files." },
  { step: "04", name: "Search Console Bind", desc: "Submit XML sitemaps, verify indexing parameters, and establish search metrics monitoring trackers." },
];

const faqs = [
  { q: "How long does it take to see organic traffic improvements?", a: "Technical SEO fixes (such as resolving indexing blocks or improving page speeds) can yield improvements in 2 to 4 weeks, while keyword ranking growth typically takes 3 to 6 months." },
  { q: "What is Next.js Metadata API and how does it support SEO?", a: "Next.js Metadata API allows developer teams to configure page metadata, open graph cards, canonical tags, and mobile configurations using type-safe declarations that search engine engines read easily." },
  { q: "Do you perform competitor keyword mapping?", a: "Yes. We perform competitor keyword mapping to locate search layout opportunities and optimize semantic layout copy to capture high-intent organic users." },
];

export default function SeoOptimizationPage() {
  React.useEffect(() => {
    document.title = "SEO Optimization Services | Nexora Technologies";
  }, []);

  return (
    <div className="bg-white">
      
      {/* Service Page Hero */}
      <section className="bg-section-bg py-24 border-b border-slate-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
            Core Service
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            Technical SEO Optimization
          </h1>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            Secure high rankings with semantic markup, fast loading times, and clean structured data schemas that search engines reward.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-lg transition-transform hover:translate-y-[-1px] group"
            >
              Request SEO Audit
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
                Technical Quality Drives Higher Rankings
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Modern search algorithms rank websites based on speed, mobile rendering quality, and clear semantic layout hierarchies. A site that loads slow or has hidden metadata details will actively rank lower.
              </p>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Our team refactors codebase configurations to compile lightweight assets, structures headings correctly, generates dynamic XML sitemaps, and embeds rich schemas to place your company at the top of search listings.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-6.5 space-y-4">
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">
                Technical Tooling
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Search Console", "Lighthouse Audits", "Next.js Metadata", "JSON-LD Schemas", "Screaming Frog", "Ahrefs API", "Canonical Rules", "Semantic XML"].map((t) => (
                  <span
                    key={t}
                    className="bg-white border border-slate-200/60 text-xs text-text-main font-semibold px-3 py-1.5 rounded-lg shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Semantic Integrity, Search Visibility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <AnalyticalCard
                key={f.title}
                initialHeight={140}
                expandedHeight={220}
                className="bg-white group"
              >
                <div className="h-full flex flex-col justify-between w-full">
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-light-blue text-primary flex items-center justify-center border border-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-text-main mt-4 transition-colors duration-300 group-hover:text-primary">
                      {f.title}
                    </h3>
                  </div>

                  <motion.div
                    variants={{
                      initial: { opacity: 0, y: 10 },
                      hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="flex-grow flex flex-col justify-start"
                  >
                    <p className="text-sm text-text-body leading-relaxed mt-4">{f.desc}</p>
                  </motion.div>
                </div>
              </AnalyticalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Our Search Engineering Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processes.map((p) => (
              <AnalyticalCard
                key={p.step}
                initialHeight={130}
                expandedHeight={195}
                className="bg-white group"
              >
                <div className="h-full flex flex-col justify-between w-full relative">
                  <div className="absolute top-4 right-6 text-3xl font-black transition-colors duration-300 font-mono select-none text-slate-100 group-hover:text-primary/10">
                    {p.step}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-text-main mb-2 mt-4 transition-colors duration-300 group-hover:text-primary group-hover:font-bold">{p.name}</h3>
                  </div>

                  <motion.div
                    variants={{
                      initial: { opacity: 0, y: 10 },
                      hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="flex-grow flex flex-col justify-start"
                  >
                    <p className="text-xs text-text-body leading-relaxed mt-4">{p.desc}</p>
                  </motion.div>
                </div>
              </AnalyticalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Summary */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-light-blue text-primary text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-primary/10 inline-block">
                Featured Case Study
              </span>
              <h3 className="text-2xl font-extrabold text-text-main">
                FinSync Organic Search Optimization
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                By refactoring FinSync&rsquo;s metadata architecture and rendering configurations, we elevated primary search visibility positions to first page listings, boosting monthly organic hits by 150%.
              </p>
              <div className="flex space-x-8 pt-2">
                <div>
                  <div className="text-xl font-bold text-primary">150%</div>
                  <div className="text-xs text-text-muted">Traffic Increase</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">0.4s</div>
                  <div className="text-xs text-text-muted">Core Hydration Speed</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right">
              <Link
                href="/resources/case-studies"
                className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
              >
                Read Case Study
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-slate-50 border border-slate-100 rounded-2xl p-6.5 space-y-2.5">
                <div className="flex items-center space-x-2 text-sm font-bold text-text-main">
                  <HelpCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-text-body leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
            Ready to Accelerate Your Organic Traffic?
          </h2>
          <p className="text-sm text-text-body max-w-lg mx-auto">
            Discuss search configurations, index status dashboards, and structural refactoring plans with an SEO engineer today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
            >
              Get In Touch
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
