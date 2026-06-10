"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnalyticalCard from "../shared/AnalyticalCard";

const previewPlans = [
  {
    name: "Free Evaluation",
    price: "Free",
    period: "",
    desc: "Standard evaluation and developer testing of our capabilities.",
    features: ["Access to standard open-source boilerplates", "Documentation templates and guides", "Standard community discussion forums", "Email support for setup and discovery queries"],
    popular: false
  },
  {
    name: "Enterprise Retainer",
    price: "Custom",
    period: "",
    desc: "Bespoke architectures and dedicated engineering allocations.",
    features: ["Unlimited dedicated developer options", "Dedicated solutions architect resource", "Dedicated VPC and cloud setups", "Custom SLA support guarantees"],
    popular: true
  }
];

export default function PricingPreview() {
  return (
    <section id="pricing-preview" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-primary tracking-wider uppercase block">
            Flexible Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            Pricing Built to Scale With You
          </h2>
          <p className="text-base text-text-body">
            Choose a plan that fits your current operational scale and engineering requirements.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {previewPlans.map((plan, index) => {
            const isPopular = plan.popular;
            
            return (
              <AnalyticalCard
                key={plan.name}
                initialHeight={260}
                expandedHeight={470}
                containerClassName={isPopular ? "scale-102" : ""}
                className={isPopular ? "border-2 border-blue-500/40" : ""}
                glowColor={isPopular ? "rgba(37,99,235,0.22)" : "rgba(37,99,235,0.1)"}
              >
                {(isHovered) => (
                  <div className="h-full flex flex-col justify-between w-full relative">
                    {isPopular && (
                       <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full z-20 shadow-sm">
                        Most Popular
                      </span>
                    )}

                    <div>
                      <h3 className={`text-lg font-bold text-text-main mb-2 transition-colors duration-300 ${
                        isHovered ? "text-primary" : ""
                      }`}>
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-body leading-relaxed mb-4">{plan.desc}</p>
                      
                      <div className="flex items-baseline mb-4 border-b border-slate-100/80 pb-4">
                        <span className="text-4xl font-extrabold text-text-main">{plan.price}</span>
                        <span className="text-xs font-semibold text-text-muted ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 15 },
                        hover: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.45, delay: 0.05 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <ul className="space-y-3.5 mt-2">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-start space-x-2.5 text-xs sm:text-sm text-text-body">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6">
                        <Link
                          href="/pricing"
                          className={`flex items-center justify-center w-full px-5 py-3 text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors ${
                            isPopular
                              ? "text-white bg-primary hover:bg-primary/95"
                              : "text-text-main bg-slate-50 hover:bg-slate-100 border border-slate-200/60"
                          }`}
                        >
                          View Plan Details
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
            href="/pricing"
            className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/95 group"
          >
            View Pricing Details
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
