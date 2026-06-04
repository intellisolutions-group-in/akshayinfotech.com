"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { 
  GitBranch, CheckCircle, HelpCircle, Shield, Zap, Layers, 
  ArrowRight, Globe, Award, Settings, Database, RefreshCw, Terminal
} from "lucide-react";
import { motion } from "framer-motion";

const pipelineStages = [
  {
    phase: "Stage 01",
    title: "Static Code Audits & Lints",
    desc: "Every git commit triggers automatic TypeScript type-checking, ESLint validation, and dependency vulnerability audits."
  },
  {
    phase: "Stage 02",
    title: "Isolated Container Compilation",
    desc: "We package build steps into optimized Docker images, using multi-stage compilations to reduce file sizes."
  },
  {
    phase: "Stage 03",
    title: "Integration & Regression Runs",
    desc: "Before merging code, automated pipelines run integration tests to check API routes and database connections."
  },
  {
    phase: "Stage 04",
    title: "Rolling Kubernetes Deploys",
    desc: "We perform updates gradually on Kubernetes nodes to prevent system downtime during releases."
  }
];

const faqs = [
  {
    q: "Why is Kubernetes critical for managing modern container applications?",
    a: "Kubernetes automates container scaling, manages private network paths, and restarts failed containers automatically to ensure system uptime."
  },
  {
    q: "How does multi-stage Docker builds reduce hosting storage?",
    a: "Multi-stage builds run compilation steps in temporary environments, saving only the final compiled resources to minimize storage size."
  },
  {
    q: "How do your CI/CD pipelines prevent system downtime?",
    a: "We configure rolling updates that replace server instances one by one, allowing rollback if new builds trigger system errors."
  },
  {
    q: "What telemetry tools do you configure to monitor applications?",
    a: "We set up Prometheus for system data, Grafana for visual dashboards, and OpenTelemetry to track request cycles."
  }
];

export default function DevOpsPage() {
  useEffect(() => {
    document.title = "DevOps Engineering & CI/CD Pipelines | Akshay Infotech";
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* 1. Bespoke Hero Section: 3D Infinite Pipeline Loop */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-slate-900 bg-radial-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block">
                Automation & Deployment
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Continuous Delivery <br />
                <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">
                  & GitOps Pipelines
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Akshay configures automated deployment pipelines. By writing infrastructure as code and setting up container orchestration, we deliver reliable release cycles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
                >
                  Consult with a DevOps Lead
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#pipeline"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/50 rounded-xl transition-all"
                >
                  View Workflow Pipeline
                </a>
              </div>
            </div>

            {/* Custom Infinite Loop CI/CD Pipeline SVG */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="w-[340px] aspect-square bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full stroke-slate-800 fill-none" viewBox="0 0 100 100">
                  {/* Infinite Loop Path */}
                  <path d="M 30 50 C 30 35, 45 35, 50 50 C 55 65, 70 65, 70 50 C 70 35, 55 35, 50 50 C 45 65, 30 65, 30 50 Z" stroke="#f43f5e" strokeWidth="2" />
                  
                  {/* Path Nodes */}
                  <circle cx="30" cy="50" r="3.5" stroke="#f43f5e" strokeWidth="1" fill="#0f172a" />
                  <circle cx="70" cy="50" r="3.5" stroke="#f43f5e" strokeWidth="1" fill="#0f172a" />

                  {/* Flow Pulses */}
                  <motion.circle cx="30" cy="50" r="2.5" fill="#ffffff" animate={{ 
                    cx: [30, 50, 70, 50, 30], 
                    cy: [50, 35, 50, 65, 50] 
                  }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} />
                </svg>
                <Terminal className="h-5 w-5 text-rose-500 absolute top-[43%] left-[46%]" />
              </div>
              <div className="absolute -inset-4 bg-rose-500/10 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Pipeline Technologies (Docker & Kubernetes & CI/CD) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* CI/CD Automations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">CI/CD automation</span>
              <h3 className="text-2xl font-bold text-white">Automated Deployment Workflows</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We design automated integration workflows that run tests on every git update. Code reviews are managed systematically before changes deploy, ensuring clean code moves to production.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-rose-400 mr-2" /> Automated git pipeline rules</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-rose-400 mr-2" /> Linting validations & checks</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-rose-400 mr-2" /> Code coverage audit reports</li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">GitHub Actions Pipeline</h4>
              <pre className="text-[10px] text-emerald-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`name: Pipeline Test Run
on: [push]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test`}
              </pre>
            </div>
          </div>

          {/* Kubernetes Orchestration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-4">
              <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">Kubernetes</span>
              <h3 className="text-2xl font-bold text-white">Container Scaling Configurations</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We manage containerized workloads using Kubernetes, setting up automatic scaling rules to handle traffic changes and configuring rolling updates to keep platforms online.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-rose-400 mr-2" /> Rolling container update rules</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-rose-400 mr-2" /> Auto-restart settings for containers</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-rose-400 mr-2" /> Private internal subnet setups</li>
              </ul>
            </div>
            
            <div className="lg:order-1 bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Kubernetes Deployment</h4>
              <pre className="text-[10px] text-orange-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web`}
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Unique Section: Deployment Models Comparison Table */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-400 tracking-wider uppercase mb-2 block">
              Architectures Matrix
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Deployment Platform Comparison
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Compare compute infrastructure models for scaling, setup complexity, and runtime costs.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-slate-950/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-slate-800 text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Deployment Model</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Scaling Speed</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Setup Complexity</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Runtime Cost Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Kubernetes (EKS / GKE)</td>
                  <td className="px-6 py-4">Fast (Seconds, Pod level)</td>
                  <td className="px-6 py-4">High (Needs configuration files)</td>
                  <td className="px-6 py-4 text-emerald-400">Optimized (Resource sharing)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Serverless Container (Cloud Run)</td>
                  <td className="px-6 py-4 text-emerald-400">Instant (Scale-to-zero)</td>
                  <td className="px-6 py-4">Low (Simple build inputs)</td>
                  <td className="px-6 py-4">Pay-per-request (Can grow)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Elastic Container Service (ECS)</td>
                  <td className="px-6 py-4">Med (AWS native rules)</td>
                  <td className="px-6 py-4">Medium (AWS Console setups)</td>
                  <td className="px-6 py-4 text-emerald-400">Optimized (EC2 reserves)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Virtual Machines (EC2 / Azure VM)</td>
                  <td className="px-6 py-4 text-amber-500">Slow (Minutes to boot)</td>
                  <td className="px-6 py-4">Low (Simple manual steps)</td>
                  <td className="px-6 py-4">Fixed hourly (Flat rate)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Unique Section: Automation Pipeline Stages */}
      <section id="pipeline" className="py-24 bg-slate-950 border-t border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-rose-400 tracking-wider uppercase mb-2 block">
              Workflow Timeline
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Automation Deployment Stages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {pipelineStages.map((stage, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-4">
                <div className="text-xs font-black text-slate-700 absolute top-3 right-4 font-mono select-none tracking-widest uppercase">
                  {stage.phase}
                </div>
                <h4 className="text-sm font-bold text-white pt-4">{stage.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Outcomes */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 block">DevOps Metrics</span>
            <h2 className="text-3xl font-extrabold text-white">Performance Outcomes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-rose-400">10x</div>
              <h4 className="font-bold text-white text-sm">Deployment Frequency</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated pipelines speed up feature deployments.
              </p>
            </div>
            
            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-rose-400">&lt;15 min</div>
              <h4 className="font-bold text-white text-sm">Mean Time to Recovery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rollback configurations revert failed builds instantly.
              </p>
            </div>

            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-rose-400">99.99%</div>
              <h4 className="font-bold text-white text-sm">Release Success Rate</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prior testing checks code packages before system deployment.
              </p>
            </div>

            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-rose-400">-40%</div>
              <h4 className="font-bold text-white text-sm">Server Cost Savings</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Kubernetes optimizes compute resource usage to cut hosting bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service FAQs */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-400 tracking-wider uppercase mb-2 block">
              Support FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-slate-900 border border-slate-850 rounded-2xl p-6.5 space-y-2.5">
                <div className="flex items-center space-x-2 text-sm font-bold text-white">
                  <HelpCircle className="h-4.5 w-4.5 text-rose-400 shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="bg-slate-950 py-20 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Build a High-Performance DevOps Pipeline?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Discuss integration pipelines, container setup, monitoring solutions, and rollbacks with our DevOps engineers today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
            >
              Get In Touch
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
