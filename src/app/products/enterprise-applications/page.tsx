import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Building2, CheckCircle, ArrowRight, ShieldCheck, Cpu, GitPullRequest } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Applications | Nexora Technologies",
  description: "Enterprise legacy integrations, core bank systems, secure inventory networks, and custom portals built for global companies.",
};

const benefits = [
  { title: "Legacy System Sync", desc: "Integrate legacy database endpoints safely through modern RESTful and GraphQL API bridges." },
  { title: "Secure Cryptography", desc: "Protect private credentials and data packages using state-of-the-art encryption models." },
  { title: "Global Scaling Nodes", desc: "Deploy server architectures optimized to synchronize millions of records across active database servers." }
];

export default function EnterpriseApplicationsPage() {
  return (
    <div className="bg-white">
      {/* Product Hero */}
      <section className="bg-section-bg py-24 border-b border-slate-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
            Global Software
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            Enterprise Applications
          </h1>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            Architect robust portals, secure core ledger engines, and global logistic networks configured for performance and high stability.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-lg transition-transform hover:translate-y-[-1px] group"
            >
              Request Enterprise Review
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
                Robust Engineering for Scale
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Large-scale systems demand zero-downtime database replication, secure API routing, and bulletproof deployment scripts. Our Enterprise Application systems are customized to integrate legacy platforms with modern Next.js/React frontends.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-4">
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">
                System Integrations
              </h3>
              <div className="flex flex-wrap gap-2">
                {["REST API Gateway", "GraphQL Server", "Apache Kafka", "Active Ledger", "Oracle DB Connect", "KMS Integration"].map((t) => (
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
              System Quality
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Built for Security and Speed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-slate-100 rounded-3xl p-8 space-y-3 shadow-sm hover:border-primary/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-light-blue text-primary flex items-center justify-center">
                  <Building2 className="h-5 w-5" />
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
            Design Stable Enterprise Logic
          </h2>
          <p className="text-sm text-text-body max-w-lg mx-auto">
            Discuss migration, database clustering, or new custom system architectures with our tech directors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
            >
              Consult Tech Director
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
