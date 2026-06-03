import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Cloud, Zap, ArrowRight, CheckCircle2, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | AuraDev Systems",
  description: "Discover our enterprise software products engineered to automate business workflows and orchestrate cloud environments.",
};

const products = [
  {
    id: "product-one",
    slug: "product-one",
    name: "AuraCloud",
    tagline: "Enterprise Multi-Cloud Orchestration & Real-Time Sync",
    desc: "Simplify multi-region deployments, automate database replication, and manage secrets globally with zero downtime. AuraCloud connects to AWS, GCP, and Azure to unify infrastructure management.",
    features: [
      "Real-time cross-cloud database synchronization",
      "KMS-backed secure credential sharing engine",
      "Auto-scaling policies triggered by web traffic spikes",
      "Custom Kubernetes cluster provisioning workflows"
    ],
    icon: Cloud,
    color: "text-blue-600 bg-blue-50 border-blue-100",
    link: "/products/product-one"
  },
  {
    id: "product-two",
    slug: "product-two",
    name: "AuraFlow",
    tagline: "Cognitive AI Agent Platform & Visual Workflow Builder",
    desc: "Deploy intelligent LLM chatbot agents to handle customer inquiries, parse support tickets, and execute background tasks. Build, test, and deploy integrations visually in minutes.",
    features: [
      "Visual drag-and-drop workflow automation charts",
      "Secure retrieval-augmented generation (RAG) vector links",
      "Instant integrations with Slack, Discord, and Salesforce",
      "99% accuracy on document and email classification loops"
    ],
    icon: Cpu,
    color: "text-teal-600 bg-teal-50 border-teal-100",
    link: "/products/product-two"
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      
      {/* Hero Header */}
      <section className="bg-section-bg py-24 border-b border-slate-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
            Our Software Products
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            Enterprise Software Systems
          </h1>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            Scale your operations and automate manual engineering tasks with our proprietary SaaS solutions.
          </p>
        </div>
      </section>

      {/* Products List Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100/50 pb-20 last:border-0 last:pb-0"
              >
                {/* Product Meta & Details */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${product.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                        Enterprise Tool
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
                        {product.name}
                      </h2>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-text-main leading-tight">
                    {product.tagline}
                  </h3>

                  <p className="text-sm sm:text-base text-text-body leading-relaxed">
                    {product.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {product.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-text-body">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call To Action Card Box */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-6 shadow-sm">
                    <h4 className="text-sm font-bold text-text-main uppercase tracking-wider">
                      Ready to Implement {product.name}?
                    </h4>
                    
                    <p className="text-xs text-text-body leading-relaxed">
                      Deploy a dedicated sandbox environment or schedule a live screen-share walkthrough with an solutions engineer.
                    </p>

                    <div className="space-y-3 pt-2">
                      <Link
                        href={product.link}
                        className="flex items-center justify-center w-full px-5 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors group"
                      >
                        Explore Product Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      
                      <Link
                        href="/contact"
                        className="flex items-center justify-center w-full px-5 py-3.5 text-xs font-bold text-text-main bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-xs transition-colors"
                      >
                        Schedule Technical Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Bottom CTA */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
            Need Custom Enterprise Features?
          </h2>
          <p className="text-sm text-text-body max-w-lg mx-auto">
            Our systems architecture group regularly deploys custom modules, private VPC clusters, and dedicated integrations for scale-level partners.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
            >
              Contact Systems Architect
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
