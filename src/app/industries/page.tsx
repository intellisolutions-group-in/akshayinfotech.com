import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Heart, Layers, TrendingUp, GraduationCap, ShoppingCart, 
  CheckCircle, ArrowRight, ShieldCheck, Cpu 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | AuraDev Systems",
  description: "Specialized software development and cloud solutions built for Healthcare compliance, SaaS scaling, FinTech security, Education portals, and Headless Retail.",
};

const industries = [
  {
    id: "healthcare",
    title: "Healthcare Technology",
    icon: Heart,
    subtitle: "HIPAA Compliant & Secure Telemetry Systems",
    desc: "We design secure patient portal websites, HIPAA-compliant Electronic Health Record (EHR) data integrations, and low-latency WebRTC video consulting channels. Every system features end-to-end encrypted databases and audit trails.",
    features: [
      "HIPAA compliance-ready layouts",
      "Low-latency audio & video tunnels",
      "EHR database synchronization pipelines",
      "Secure patient registration & chart tools"
    ],
    tech: ["React", "WebRTC", "PostgreSQL", "Node.js", "AWS KMS", "Tailwind CSS"]
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    icon: Layers,
    subtitle: "Multi-Tenant Cloud Architectures",
    desc: "Accelerate your software startup. We build responsive multi-tenant SaaS dashboards, Stripe-integrated subscription setups, custom data analytics engines, and usage log trackers designed for high scalability.",
    features: [
      "Multi-tenant database separation schemas",
      "Stripe payment & billing integrations",
      "Custom analytics widgets & charts",
      "Uptime optimization on autoscaling clusters"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Docker", "Stripe API"]
  },
  {
    id: "fintech",
    title: "FinTech Systems",
    icon: TrendingUp,
    subtitle: "Secure & Encrypted Financial Platforms",
    desc: "Develop secure accounting portals and banking bridges via Plaid APIs. We engineer high-security transactional queues, exchange visualizers, and audit trails that comply with strict global data-protection codes.",
    features: [
      "Plaid & Stripe secure banking bridges",
      "Real-time exchange & analytics charts",
      "Access control tokens & strict validations",
      "Transaction audit logs & databases"
    ],
    tech: ["Next.js", "Go (Golang)", "Redis Caching", "Docker", "AWS KMS", "PostgreSQL"]
  },
  {
    id: "education",
    title: "Education Portals",
    icon: GraduationCap,
    subtitle: "Learning Management & Student Systems",
    desc: "Power modern virtual learning. We develop responsive Student Information Systems (SIS), student progress dashboards, course registration pathways, and virtual classroom files repositories designed for WCAG accessibility.",
    features: [
      "Accessible student dashboard layouts",
      "Course registration & checkout channels",
      "Document repositories & sync databases",
      "WCAG 2.1 AA accessibility compliance"
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript", "Express"]
  },
  {
    id: "retail",
    title: "Retail Commerce",
    icon: ShoppingCart,
    subtitle: "Omni-Channel Headless Retail Storefronts",
    desc: "Transform standard storefront templates into ultra-fast headless commerce assets. We integrate Shopify or custom database architectures with Next.js frontends, featuring real-time inventory hooks and secure checkouts.",
    features: [
      "Headless Next.js Commerce storefronts",
      "Stripe checkout integration networks",
      "Real-time warehouse inventory hooks",
      "Multi-currency dynamic pricing engines"
    ],
    tech: ["Next.js Commerce", "Shopify Storefront API", "PostgreSQL", "Vercel Edge", "Tailwind CSS"]
  }
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      
      {/* Page Header */}
      <section className="bg-section-bg pt-32 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold text-primary tracking-wider uppercase mb-3 block">
            Industries We Serve
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-5">
            Tailored Engineering for Industry Demands
          </h1>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            We build secure, compliant, and highly available systems designed to solve sector-specific database and compliance bottlenecks.
          </p>
        </div>
      </section>

      {/* Industries Sections List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100/50 pb-20 last:border-0 last:pb-0 scroll-mt-24"
              >
                
                {/* Visual Accent Side */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-6 shadow-sm relative group hover:border-primary/20 transition-all duration-300">
                    <div className="h-14 w-14 rounded-2xl bg-light-blue text-primary flex items-center justify-center border border-primary/10 shadow-xs">
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    <div>
                      <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2.5">
                        Core Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {ind.tech.map((t) => (
                          <span
                            key={t}
                            className="bg-white border border-slate-200 text-xs text-text-main font-semibold px-3 py-1.5 rounded-lg shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-200/50 pt-5">
                      <div className="text-xs font-bold text-primary flex items-center">
                        <ShieldCheck className="h-4.5 w-4.5 mr-1.5" />
                        <span>Security & Compliance Guaranteed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                      {ind.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
                      {ind.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-text-body leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {ind.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-2.5">
                        <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-text-body">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors group"
                    >
                      Discuss Your Industry Needs
                      <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
            Need a Custom Enterprise Solution?
          </h2>
          <p className="text-sm text-text-body max-w-lg mx-auto">
            Our engineers build secure, compliant dashboards and robust cloud setups customized for your organization.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-all duration-200"
            >
              Contact Our Sales Team
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
