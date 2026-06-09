import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Cloud, CheckCircle, Database, ShieldAlert, Cpu, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AuraCloud | Akshay Infotech",
  description: "Enterprise Multi-Cloud Orchestration & Real-Time Sync. Deploy resources across AWS, Google Cloud, and Azure with zero-downtime database replication.",
};

const benefits = [
  { title: "Zero Downtime Deployments", desc: "Automate rolling upgrades and Blue/Green transitions with immediate fallback health triggers." },
  { title: "KMS-Secure Credentialing", desc: "Encrypt database passwords, SSH keys, and API tokens under secure hardware security modules." },
  { title: "Elastic Load Adapters", desc: "Integrate latency metrics to scale container replication before users experience application bottlenecks." }
];

const features = [
  { title: "Multi-Cloud Connectors", desc: "Connect VPC environments across AWS, GCP, and Azure with unified access rules." },
  { title: "Continuous Replication", desc: "Ensure active-active database replicas synchronize across global data centers with low latency." },
  { title: "Cluster Provisioning", desc: "Create Terraform and Kubernetes yaml templates through secure REST endpoints instantly." }
];

const useCases = [
  { client: "MedGroup Healthcare", sector: "Healthcare Telemetry", outcome: "Synchronized patient databases across three AWS VPC regions while maintaining strict data access logging." },
  { client: "FinCap Trading", sector: "Financial Portals", outcome: "Leveraged KMS integrations to distribute secure access tokens to high-frequency transactional clusters safely." }
];

export default function ProductOnePage() {
  return (
    <div className="bg-white">
      
      {/* Product Hero */}
      <section className="bg-section-bg pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
            SaaS Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            AuraCloud
          </h1>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            Orchestrate cloud networks, replicate database records in real-time, and manage secrets with enterprise-grade stability.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-lg transition-transform hover:translate-y-[-1px] group"
            >
              Request AuraCloud Sandbox
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
                Unified Cloud Management Without the Overhead
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                As applications scale, deploying and orchestrating clusters across separate cloud vendors becomes an operational hurdle. AuraCloud bridges the network gap.
              </p>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Our database synchronization module monitors target transaction tables and immediately replicates modifications across active locations, protecting companies from vendor lock-in and single-region outages.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-4">
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">
                Supported Integrations
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS Cloud", "Google Cloud", "Microsoft Azure", "Terraform Engine", "Docker Hub", "Kubernetes", "PostgreSQL Clusters", "Apache Kafka"].map((t) => (
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
              Operational Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Engineered for High Availability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-slate-100 rounded-3xl p-8 space-y-3 shadow-sm hover:border-primary/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-light-blue text-primary flex items-center justify-center">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-text-main">{b.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Detailed Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              A Platform Built for Cloud Engineers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-2xs hover:border-primary/10 transition-all">
                <div className="h-10 w-10 rounded-lg bg-light-blue text-primary flex items-center justify-center mb-4">
                  <Cloud className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-text-main mb-2">{f.title}</h3>
                <p className="text-xs text-text-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Deployments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Real-World Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((uc) => (
              <div key={uc.client} className="bg-white border border-slate-100 rounded-3xl p-8 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3 py-1 rounded-full border border-primary/10">
                    {uc.sector}
                  </span>
                  <span className="text-xs font-bold text-text-muted">{uc.client}</span>
                </div>
                <p className="text-sm text-text-body leading-relaxed">{uc.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-white py-16 border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
            Simple, Transparent Node Pricing
          </h2>
          <p className="text-sm text-text-body max-w-lg mx-auto">
            AuraCloud operates on a transparent, per-monitored-node billing structure. Discuss cluster volumes with an infrastructure specialist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
            >
              View Pricing Table
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-text-main bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
            >
              Speak to Sales
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
