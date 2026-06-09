"use client";

import React from "react";
import Link from "next/link";
import { Layers, Code, Terminal, Server, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnalyticalCard from "../shared/AnalyticalCard";

const summarySteps = [
  { step: "01", name: "Discover", desc: "Map dependencies, API bindings, and database schemas.", icon: Layers },
  { step: "02", name: "Design", desc: "Craft pixel-perfect Figma wireframes and design token interfaces.", icon: Code },
  { step: "03", name: "Develop", desc: "Write type-safe TypeScript, automate deployment loops, and pass audits.", icon: Terminal },
  { step: "04", name: "Launch", desc: "Implement CDN endpoints, verify search console sitemaps, and bind logs.", icon: Server }
];

export default function Process() {
  const iconVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -2, scale: 1.05 }
  };

  const descVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0 }
  };

  return (
    <section id="process-summary" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-primary tracking-wider uppercase block">
            Our Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            Our Development Process
          </h2>
          <p className="text-base text-text-body">
            We follow a modern agile engineering lifecycle designed for speed, communication, and system stability.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {summarySteps.map((s, index) => {
            const Icon = s.icon;
            return (
              <AnalyticalCard
                key={s.step}
                initialHeight={140}
                expandedHeight={220}
                className="bg-white"
              >
                {(isHovered) => (
                  <div className="h-full flex flex-col justify-between w-full">
                    <div>
                      {/* Step Number in Top Right */}
                      <span className={`absolute top-4 right-6 text-3xl font-black transition-colors duration-300 ${
                        isHovered ? "text-primary/10" : "text-slate-100"
                      } font-mono select-none`}>
                        {s.step}
                      </span>

                      {/* Icon */}
                      <motion.div
                        variants={iconVariants}
                        transition={{ duration: 0.4 }}
                        className={`h-10 w-10 rounded-xl bg-light-blue text-primary flex items-center justify-center mb-5 border border-primary/10 transition-colors duration-300 ${
                          isHovered ? "bg-primary text-white" : ""
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>

                      <h3 className={`text-base font-bold text-text-main transition-colors duration-300 ${
                        isHovered ? "text-primary" : ""
                      }`}>
                        {s.name}
                      </h3>
                    </div>

                    <motion.div
                      variants={descVariants}
                      transition={{ duration: 0.45, delay: 0.05 }}
                      className="flex-grow flex flex-col justify-start"
                    >
                      <p className="text-xs text-text-body leading-relaxed mt-4">
                        {s.desc}
                      </p>
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
            href="/about#process"
            className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/95 group"
          >
            Learn More About Our Process
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}

