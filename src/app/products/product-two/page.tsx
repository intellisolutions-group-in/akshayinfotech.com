import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Cpu, CheckCircle, HelpCircle, ArrowRight, GitFork, Users, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "AuraFlow | Akshay Infotech",
  description: "Cognitive AI Agent Platform & Visual Workflow Builder. Deploy conversational AI chatbots, automate email parsing, and link databases in minutes.",
};

const benefits = [
  { title: "Reduce Support Overhead", desc: "Deflect up to 70% of inbound customer support tickets using automated, context-aware AI agent replies." },
  { title: "Visual Flow Canvas", desc: "Assemble complex logic paths, database connections, and API calls visually in our drag-and-drop editor." },
  { title: "Secure Local Context", desc: "Integrate vector databases securely without passing private user customer data to public LLM systems." }
];

const features = [
  { title: "Interactive Flow Canvas", desc: "Drag, drop, and link database connectors, webhook blocks, and message nodes visually." },
  { title: "LLM Orchestration Layer", desc: "Route conversations dynamically between OpenAI, Anthropic Claude, and open-source Llama models." },
  { title: "RAG Vector Syncing", desc: "Upload and sync markdown knowledge bases, pdfs, and database tables to vectors automatically." }
];

const useCases = [
  { client: "SaaSify Metrics", sector: "Onboarding Automation", outcome: "Deployed a customized onboarding chatbot that answered API usage inquiries, increasing sandbox setup completions by 30%." },
  { client: "SwiftRoute Express", sector: "Inbound Support", outcome: "Implemented automated email classification bots that classified and responded to tracking status updates automatically." }
];

export default function ProductTwoPage() {
  return (
    <div className="bg-white">
      
      {/* Product Hero */}
      <section className="bg-section-bg pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
            Cognitive Automation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            AuraFlow
          </h1>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            Design intelligent agentic loops, automate document processes, and deploy secure chat bots on an interactive visual logic canvas.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-lg transition-transform hover:translate-y-[-1px] group"
            >
              Request AuraFlow Access
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
                Deploy Cognitive Workflows Instantly
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Manually writing custom code for API routes, LLM prompts, and vector indexing loops takes time and is prone to runtime errors. AuraFlow provides a unified execution engine.
              </p>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Connect your email channels, database connectors, and instant messengers. Construct branches, parse files with intelligent parser modules, and trigger REST endpoints visually.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-4">
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">
                Supported Workspaces
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Slack Webhooks", "Salesforce API", "HubSpot CRM", "Zendesk Tickets", "Discord Bots", "Pinecone Vector", "PostgreSQL", "GitHub Repos"].map((t) => (
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
              Performance Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Accelerate Team Productivity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-slate-100 rounded-3xl p-8 space-y-3 shadow-sm hover:border-primary/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-light-blue text-primary flex items-center justify-center">
                  <GitFork className="h-5 w-5" />
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
              Core Tech
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Robust Agent Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-2xs hover:border-primary/10 transition-all">
                <div className="h-10 w-10 rounded-lg bg-light-blue text-primary flex items-center justify-center mb-4">
                  <MessageSquare className="h-5 w-5" />
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
              Automation Audits
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              AuraFlow in Operations
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
            Simple Workflow Billing
          </h2>
          <p className="text-sm text-text-body max-w-lg mx-auto">
            Pay for exactly what you process. Setup custom cognitive flows or get detailed plan advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
            >
              View Pricing plans
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-text-main bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
            >
              Schedule Demo Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
