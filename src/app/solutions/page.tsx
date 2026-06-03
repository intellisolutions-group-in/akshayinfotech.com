"use client";

import React from "react";
import Link from "next/link";
import { Building2, Layers, Zap, Database, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import AnalyticalCard from "../../components/shared/AnalyticalCard";

const solutions = [
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    description: "Robust, secure, and highly scalable custom systems designed to streamline operations for large-scale organizations.",
    icon: Building2,
    color: "from-blue-600 to-indigo-600",
    features: ["Custom ERP & CRM Integration", "Enterprise Security Audits", "Legacy System Modernization", "Data Integration & ETL"]
  },
  {
    slug: "saas-solutions",
    title: "SaaS Solutions",
    description: "End-to-end multi-tenant product development to turn software ideas into profitable subscription cloud platforms.",
    icon: Layers,
    color: "from-cyan-500 to-blue-600",
    features: ["Multi-Tenant Architecture", "Subscription Billing Systems", "Tenant Isolation Security", "Analytics & Reporting Dashboards"]
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description: "Re-engineer workflows, digitize business models, and integrate cloud-first automation to keep your business competitive.",
    icon: Zap,
    color: "from-violet-600 to-purple-600",
    features: ["Business Process Automation", "Legacy System Re-architecture", "AI-Powered Workflows", "Omichannel Integration"]
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    description: "Safe, rapid migration of local data centers and workloads to AWS, Azure, or Google Cloud with zero downtime.",
    icon: Database,
    color: "from-sky-500 to-indigo-600",
    features: ["Cloud Readiness Audits", "Zero-Downtime Data Migration", "Cloud Cost Optimization", "Hybrid Cloud Deployments"]
  }
];

export default function SolutionsOverview() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-section-bg pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold text-primary tracking-wider uppercase mb-3 block">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-6">
            Enterprise-Grade <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
            Accelerate your growth and operational efficiency with our custom, robust engineering models designed for modern businesses.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <AnalyticalCard
                  key={sol.slug}
                  initialHeight={260}
                  expandedHeight={380}
                  className="bg-white group"
                >
                  <div className="h-full flex flex-col justify-between w-full relative">
                    <div>
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${sol.color} text-white flex items-center justify-center shadow-lg shadow-blue-500/10 mb-6 transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-text-main mb-3 transition-colors duration-300 group-hover:text-primary">{sol.title}</h3>
                      <p className="text-sm text-text-body leading-relaxed mb-4">{sol.description}</p>
                    </div>

                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 15 },
                        hover: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.45, delay: 0.05 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                          {sol.features.map((feat) => (
                            <div key={feat} className="flex items-center text-xs font-semibold text-text-body">
                              <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-6">
                          <Link
                            href={`/solutions/${sol.slug}`}
                            className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/85 group"
                          >
                            Explore Solution
                            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                </AnalyticalCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main mb-12">Engineered For Success</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-primary">99.99%</p>
              <p className="text-xs sm:text-sm font-bold text-text-muted uppercase tracking-wider">Uptime SLA</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-primary">150+</p>
              <p className="text-xs sm:text-sm font-bold text-text-muted uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-primary">50M+</p>
              <p className="text-xs sm:text-sm font-bold text-text-muted uppercase tracking-wider">End Users Served</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-primary">24/7</p>
              <p className="text-xs sm:text-sm font-bold text-text-muted uppercase tracking-wider">Proactive Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* General Solutions CTA */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 sm:p-16 text-white shadow-xl shadow-blue-600/10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-base text-blue-100 max-w-2xl mx-auto mb-8">
            Consult with our engineering experts to select, scope, and deploy the right custom solutions for your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-700 font-bold hover:bg-blue-50 rounded-full shadow-md hover:translate-y-[-1px] transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/company/about"
              className="w-full sm:w-auto px-8 py-3.5 border border-blue-200/50 hover:bg-white/10 font-bold rounded-full transition-all"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
