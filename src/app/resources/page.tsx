"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const resourcesTypes = [
  {
    slug: "case-studies",
    title: "Case Studies",
    description: "Read about our client success stories, visual metric improvements, and the specific technology stacks we implemented to solve critical challenges.",
    icon: Briefcase,
    count: "12 Projects",
    linkText: "View Case Studies"
  },
  {
    slug: "insights",
    title: "Insights & Articles",
    description: "Explore our latest publications on software engineering, cloud migration patterns, UI/UX trends, and custom AI development methodologies.",
    icon: BookOpen,
    count: "24 Articles",
    linkText: "Read Insights"
  }
];

export default function ResourcesOverview() {
  React.useEffect(() => {
    document.title = "Resources | Nexora Technologies";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-section-bg py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold text-primary tracking-wider uppercase mb-3 block">
            Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-6">
            Nexora <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
            Gain deep engineering knowledge, read real-world technical success stories, and stay up to date with modern software and cloud architectures.
          </p>
        </div>
      </section>

      {/* Main Options Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {resourcesTypes.map((res, index) => {
              const Icon = res.icon;
              return (
                <motion.div
                  key={res.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-slate-50 border border-slate-200/60 rounded-3xl p-10 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-14 w-14 rounded-2xl bg-white border border-slate-100 text-primary flex items-center justify-center shadow-xs">
                        <Icon className="h-6.5 w-6.5" />
                      </div>
                      <span className="text-xs font-bold text-text-muted bg-white border border-slate-150 px-3 py-1 rounded-full">
                        {res.count}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-main">{res.title}</h3>
                    <p className="text-sm text-text-body leading-relaxed">{res.description}</p>
                  </div>
                  
                  <div className="pt-8">
                    <Link
                      href={`/resources/${res.slug}`}
                      className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/95 shadow-md shadow-primary/10 transition-all group"
                    >
                      {res.linkText}
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resource Preview */}
      <section className="bg-slate-50 py-20 border-t border-b border-slate-150/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/50 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3 py-1 rounded-full">
                Featured Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-main">
                Scaling FinTech Platform API Uptime to 99.99% on AWS
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                Discover how we re-architected transactional systems for an enterprise client, migrating relational data into a distributed cloud structure that handles over 10M transactions daily.
              </p>
              <div className="flex items-center space-x-6 text-xs text-text-muted">
                <div><strong>Industry:</strong> Fintech</div>
                <div><strong>Timeline:</strong> 12 Weeks</div>
              </div>
              <div className="pt-2">
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/95 group"
                >
                  Read the Case Study
                  <ExternalLink className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 w-full aspect-video rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-md">
              FinTech Scaling Case Study
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
