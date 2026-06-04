"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnalyticalCard from "../../../components/shared/AnalyticalCard";


const features = [
  { title: "Headless Storefronts", desc: "Build decoupled Next.js interfaces that pull products from headless Shopify, Strapi, or BigCommerce APIs for lightning-fast loads." },
  { title: "PCI-DSS Compliant Payments", desc: "Embed secure checkout gateways using Stripe Elements, Apple Pay, and PayPal with custom middleware token checks." },
  { title: "Real-Time Inventory Hooks", desc: "Automate stock syncs with inventory warehouses (ERP/WMS) using secure, low-latency webhooks." },
  { title: "Global Multi-Currency Engine", desc: "Implement automated country routing, localized currency conversions, tax rules, and international languages." },
];

const processes = [
  { step: "01", name: "Schema & API Design", desc: "Define catalog structures, product variants, search index setups, and cart APIs." },
  { step: "02", name: "High-Fidelity Wireframes", desc: "Design checkout tunnels, slide-out carts, search experiences, and product details in Figma." },
  { step: "03", name: "Integration Sprints", desc: "Build React components, configure Stripe payment intents, and optimize server-side page hydration." },
  { step: "04", name: "Launch & Load Test", desc: "Stress test checkout APIs under peak loads and deploy storefronts to edge networks for global caching." },
];

const faqs = [
  { q: "Can we connect our existing ERP or warehouse tools to Next.js?", a: "Yes. We create Next.js API endpoints that sync product catalog data, customer details, and shipping updates directly with SAP, NetSuite, or Shopify backend structures." },
  { q: "What is the benefit of a headless storefront over standard Shopify templates?", a: "Standard templates load slow JS files that impact Lighthouse ratings. A headless Next.js storefront compiles statically, offering sub-second speeds that directly improve conversion metrics." },
  { q: "How do you protect customer checkout transactions?", a: "We route transaction data securely through tokens using API Middleware, preventing direct client exposure to private credentials and complying with PCI-DSS guidelines." },
];

export default function EcommercePage() {
  React.useEffect(() => {
    document.title = "E-Commerce Solutions | Akshay Infotech";
  }, []);

  return (
    <div className="bg-white">
      
      {/* Service Page Hero */}
      <section className="bg-section-bg pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
            Specialized Service
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            Headless E-Commerce Solutions
          </h1>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            Build ultra-fast storefronts designed for peak-traffic drops, seamless cart operations, and security-first checkouts.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-lg transition-transform hover:translate-y-[-1px] group"
            >
              Consult an Engineer
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
                Accelerating Modern Retail Performance
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Slow page loads during retail drops lead directly to abandoned carts. Our e-commerce engineering team decouples the storefront customer interface from complex catalog databases. 
              </p>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                We write lightweight, modern React code that serves static content globally from edge caching layers, providing sub-second browsing speeds and secure checkout handling.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-6.5 space-y-4">
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">
                Retail Integrations
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Shopify API", "Stripe Checkout", "PostgreSQL", "Next.js Commerce", "Strapi CMS", "Redis Caching", "Cloudflare Workers", "REST & GraphQL"].map((t) => (
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
              Uptime Architecture, Secure Checkout
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
              How We Build Retail Channels
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
                LuxeHour Headless Retail Storefront
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                Migrating LuxeHour from a legacy retail setup to a headless Next.js storefront secured 0.7-second page load cycles globally and reduced checkout error rates to absolute zero.
              </p>
              <div className="flex space-x-8 pt-2">
                <div>
                  <div className="text-xl font-bold text-primary">0.7s</div>
                  <div className="text-xs text-text-muted">Loading Times</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">+45%</div>
                  <div className="text-xs text-text-muted">Checkout Conversions</div>
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
            Ready to Accelerate Your Storefront Performance?
          </h2>
          <p className="text-sm text-text-body max-w-lg mx-auto">
            Discuss customized layouts, payment API integrations, and secure cart architectures with a senior retail engineer today.
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
