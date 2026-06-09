"use client";

import React from "react";
import Link from "next/link";
import { Layers, CheckCircle, ArrowRight, ShieldCheck, Cpu, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import AnalyticalCard from "../../../components/shared/AnalyticalCard";


const benefits = [
  { title: "Bespoke Workflows", desc: "Design portals and databases centered entirely around your unique organization rules and pipelines." },
  { title: "Elastic API Engine", desc: "Build developer-ready API gateways with secure throttling, rate limits, and analytics dashboard tools." },
  { title: "Multi-Role Dashboards", desc: "Equip separate user segments, vendors, and partners with tailored workspace permissions." }
];

export default function CustomPlatformsPage() {
  React.useEffect(() => {
    document.title = "Custom Platforms | Akshay Infotech";
  }, []);

  return (
    <div className="bg-white">
      {/* Product Hero */}
      <section className="bg-section-bg pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
            Tailored Development
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            Custom Software Platforms
          </h1>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            Build high-performance web systems, custom dashboard portals, and business engines engineered on elite technology stacks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-lg transition-transform hover:translate-y-[-1px] group"
            >
              Draft Custom Platform Blueprint
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
                No Limitations. Full Customization.
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Off-the-shelf software forces businesses to change their workflows. Our Custom Platform engineering builds the database system and front-end interface directly around your proven business logic, facilitating seamless scale.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-4">
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js / React", "Node.js Backends", "FastAPI Python", "PostgreSQL", "Tailwind CSS", "Docker Clusters", "Stripe Checkout"].map((t) => (
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

      {/* Benefits */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Platform Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Engineered to Your Strictest Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <AnalyticalCard
                key={b.title}
                initialHeight={140}
                expandedHeight={220}
                className="bg-white group"
              >
                <div className="h-full flex flex-col justify-between w-full">
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-light-blue text-primary flex items-center justify-center border border-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-text-main transition-colors duration-300 mt-4 group-hover:text-primary">
                      {b.title}
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
                    <p className="text-sm text-text-body leading-relaxed mt-4">{b.desc}</p>
                  </motion.div>
                </div>
              </AnalyticalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
            Draft Your Platform Blueprint
          </h2>
          <p className="text-sm text-text-body max-w-lg mx-auto">
            Book a scope analysis call with our custom software developers to outline system features and timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
            >
              Consult Development Team
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
