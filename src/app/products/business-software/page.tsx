import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Brain, CheckCircle, ArrowRight, ShieldCheck, Cpu, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Software | Nexora Technologies",
  description: "Enterprise business intelligence tools, CRM dashboards, and automated operational software to optimize organizational efficiency.",
};

const benefits = [
  { title: "Intelligent Workflows", desc: "Automate repetitive data routing and daily administration tasks with secure rules engine." },
  { title: "Unified CRM Analytics", desc: "Consolidate global customer logs and pipeline metrics into single operational command board." },
  { title: "Compliance-Grade Access", desc: "Enforce strict security roles and detailed audit logging across all company departments." }
];

export default function BusinessSoftwarePage() {
  return (
    <div className="bg-white">
      {/* Product Hero */}
      <section className="bg-section-bg pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
            Enterprise SaaS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            Business Software Solutions
          </h1>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            Empower teams with integrated dashboards, AI-driven automation, and secure operational tools designed to accelerate growth.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-lg transition-transform hover:translate-y-[-1px] group"
            >
              Request Custom Demo
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
                Operational Intelligence Re-engineered
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Modern enterprises need clean, high-performance tools that connect siloed team databases. Our Business Software platforms bridge communication barriers and automate workflow transitions in real-time.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-4">
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">
                Platform Capabilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Custom CRM", "ERP Integrations", "Data Lake Sync", "Role-Based Access", "Secure Audit Trails", "Real-Time Reports"].map((t) => (
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
              Business Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Tailored for Enterprise Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-slate-100 rounded-3xl p-8 space-y-3 shadow-sm hover:border-primary/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-light-blue text-primary flex items-center justify-center">
                  <Brain className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-text-main">{b.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
            Transform Your Workflows Today
          </h2>
          <p className="text-sm text-text-body max-w-lg mx-auto">
            Discuss your enterprise objectives with a software engineer. Let us design a system tailored to your scaling criteria.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
            >
              Contact Sales Specialist
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
