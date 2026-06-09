"use client";

import React from "react";
import Link from "next/link";
import { Heart, Layers, TrendingUp, GraduationCap, ShoppingCart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnalyticalCard from "../shared/AnalyticalCard";

const summaryIndustries = [
  { id: "healthcare", title: "Healthcare", icon: Heart, desc: "Secure video consults and telemetry databases." },
  { id: "saas", title: "SaaS Platforms", icon: Layers, desc: "Multi-tenant subscriptions, analytics dashboards, and billing." },
  { id: "fintech", title: "FinTech Systems", icon: TrendingUp, desc: "Secure transaction logs, Plaid integrations, and access tokens." },
  { id: "education", title: "Education Portals", icon: GraduationCap, desc: "Student dashboard systems and collaborative folders." },
  { id: "retail", title: "Retail Commerce", icon: ShoppingCart, desc: "Headless Next.js Commerce connected to Shopify APIs." }
];

export default function Industries() {
  const iconVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -2, scale: 1.05 }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0 }
  };

  return (
    <section id="industries" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-primary tracking-wider uppercase block">
            Sectors We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            Built for Industry Demands
          </h2>
          <p className="text-base text-text-body">
            We engineer secure and elastic architectures designed for enterprise sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {summaryIndustries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <AnalyticalCard
                key={ind.id}
                initialHeight={140}
                expandedHeight={240}
                className="bg-slate-50/50"
              >
                {(isHovered) => (
                  <div className="h-full flex flex-col justify-between w-full">
                    <div>
                      <motion.div
                        variants={iconVariants}
                        transition={{ duration: 0.4 }}
                        className={`h-10 w-10 rounded-xl bg-light-blue text-primary flex items-center justify-center mb-5 border border-primary/10 transition-colors duration-300 ${
                          isHovered ? "bg-primary text-white" : ""
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                      <h3 className={`text-base font-bold text-text-main transition-colors duration-300 mb-2 ${
                        isHovered ? "text-primary" : ""
                      }`}>
                        {ind.title}
                      </h3>
                    </div>

                    <motion.div
                      variants={contentVariants}
                      transition={{ duration: 0.45, delay: 0.05 }}
                      className="flex flex-col flex-grow justify-between"
                    >
                      <p className="text-xs text-text-body leading-relaxed mt-2">
                        {ind.desc}
                      </p>
                      
                      <div className="pt-4 border-t border-slate-100/60 mt-4">
                        <Link
                          href={`/industries#${ind.id}`}
                          className="inline-flex items-center text-xs font-bold text-primary hover:underline group/btn"
                        >
                          Explore Sector
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnalyticalCard>
            );
          })}
        </div>

        {/* Global CTA Link */}
        <div className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/95 group"
          >
            Learn More About Our Industries
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}

