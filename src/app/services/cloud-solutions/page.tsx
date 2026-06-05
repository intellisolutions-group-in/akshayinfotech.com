"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { 
  Cloud, CheckCircle, HelpCircle, Shield, Zap, Layers, 
  ArrowRight, Globe, Award, Settings, Database, RefreshCw, Cpu
} from "lucide-react";
import { motion } from "framer-motion";
import FAQItem from "@/components/shared/FAQItem";

const migrationStages = [
  {
    phase: "Stage 01",
    title: "Discovery & Topology Auditing",
    desc: "We analyze legacy server resource consumption, identify database dependencies, map security firewall rule parameters, and draft a migration roadmap."
  },
  {
    phase: "Stage 02",
    title: "Infrastructure as Code (IaC) Scripting",
    desc: "We write Terraform configuration files, set up secure VPC networks, isolate server credentials, and establish load balancers."
  },
  {
    phase: "Stage 03",
    title: "Zero-Downtime Database Sync",
    desc: "We configure real-time replica streams to sync on-premise tables with cloud instances, verifying data consistency before routing user traffic."
  },
  {
    phase: "Stage 04",
    title: "Auto-Scaling Setup & Alerts",
    desc: "We configure automated scaling rules to adjust server capacity dynamically based on load, setting up performance alerts."
  }
];

const faqs = [
  {
    q: "Why do you use Terraform (Infrastructure as Code) for cloud setup?",
    a: "Terraform allows us to write cloud infrastructure as code. This ensures setups are repeatable, version-controlled, and easily updated, preventing manual configuration errors."
  },
  {
    q: "How does auto-scaling protect applications during high-traffic events?",
    a: "Auto-scaling dynamically increases server instances when CPU or memory usage exceeds set thresholds. This maintains performance during traffic spikes and cuts costs by scaling down when demand drops."
  },
  {
    q: "What security measures do you implement to protect cloud systems?",
    a: "We configure virtual private clouds (VPC), restrict subnet access, enforce SSL pinning, use IAM roles to limit credentials, and implement Web Application Firewalls (WAF) to block bad traffic."
  },
  {
    q: "Do you support multi-cloud deployments across different platforms?",
    a: "Yes. We design architectures that utilize multiple hyperscalers (like AWS and Azure), using container orchestration (Kubernetes) to run applications smoothly across different clouds."
  }
];

export default function CloudSolutionsPage() {
  useEffect(() => {
    document.title = "Cloud Infrastructure & Migration | Akshay Infotech";
  }, []);

  return (
    <div className="bg-slate-900 text-sky-100 min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* 1. Bespoke Hero Section: 3D Cloud Environment with moving packets */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
                Cloud Infrastructure
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Secure & Scalable <br />
                <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                  Cloud Architectures
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Akshay designs and manages optimized cloud environments. By writing Terraform configurations and setting up automated scaling rules, we deliver resilient cloud architectures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
                >
                  Consult with a Cloud Lead
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#migration"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-400 hover:text-white border border-slate-850 hover:border-slate-700 bg-slate-950/50 rounded-xl transition-all"
                >
                  View Migration Path
                </a>
              </div>
            </div>

            {/* Simulated Cloud Infrastructure Node SVG animation */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="w-[340px] aspect-square bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full stroke-slate-800 fill-none" viewBox="0 0 100 100">
                  {/* Central Node */}
                  <circle cx="50" cy="50" r="10" stroke="#0ea5e9" strokeWidth="1.5" className="animate-pulse" />
                  <Database className="h-5 w-5 text-sky-400 absolute top-[40%] left-[43%]" />

                  {/* Satellite Nodes */}
                  <circle cx="20" cy="20" r="6" stroke="#6366f1" strokeWidth="1" />
                  <circle cx="80" cy="20" r="6" stroke="#6366f1" strokeWidth="1" />
                  <circle cx="50" cy="85" r="6" stroke="#6366f1" strokeWidth="1" />

                  {/* Connecting Paths */}
                  <path d="M 20 20 L 50 50" strokeDasharray="2 2" strokeWidth="0.5" />
                  <path d="M 80 20 L 50 50" strokeDasharray="2 2" strokeWidth="0.5" />
                  <path d="M 50 85 L 50 50" strokeDasharray="2 2" strokeWidth="0.5" />

                  {/* Moving Packets */}
                  <motion.circle cx="20" cy="20" r="2.5" fill="#0ea5e9" animate={{ cx: [20, 50], cy: [20, 50] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
                  <motion.circle cx="80" cy="20" r="2.5" fill="#0ea5e9" animate={{ cx: [80, 50], cy: [20, 50] }} transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }} />
                  <motion.circle cx="50" cy="85" r="2.5" fill="#6366f1" animate={{ cx: [50, 50], cy: [85, 50] }} transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }} />
                </svg>
              </div>
              <div className="absolute -inset-4 bg-sky-500/10 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Platform Infrastructure Sections (AWS & Azure & GCP) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* AWS Deployments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">Amazon Web Services</span>
              <h3 className="text-2xl font-bold text-white">AWS Enterprise Cloud Architectures</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We design resilient AWS environments using VPC networks, load balancers, and multi-zone deployments. Our setups use IAM roles to secure access credentials and CloudWatch telemetry to track resource performance.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sky-400 mr-2" /> Multi-region EC2 database setups</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sky-400 mr-2" /> S3 bucket access policies</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sky-400 mr-2" /> CloudWatch telemetry setup</li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Terraform AWS Provider</h4>
              <pre className="text-[10px] text-emerald-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`resource "aws_vpc" "production_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Environment = "production"
  }
}`}
              </pre>
            </div>
          </div>

          {/* Microsoft Azure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-4">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">Microsoft Azure</span>
              <h3 className="text-2xl font-bold text-white">Azure Active Directory & Hybrid Cloud</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We integrate corporate systems with Microsoft Azure services, setting up AD accounts, virtual machines, and SQL databases. These environments support secure hybrid connections to connect on-premise hardware with cloud services.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sky-400 mr-2" /> Azure Active Directory settings</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sky-400 mr-2" /> Hybrid Active Directory synchronization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sky-400 mr-2" /> Virtual Network ExpressRoute configurations</li>
              </ul>
            </div>
            
            <div className="lg:order-1 bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Azure VM Config</h4>
              <pre className="text-[10px] text-indigo-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`resource "azurerm_linux_virtual_machine" "app_vm" {
  name                = "production-vm"
  resource_group_name = azurerm_resource_group.rg.name
  size                = "Standard_F2"
  admin_username      = "adminuser"
}`}
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Unique Section: Hyperscaler Comparison Matrix */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-sky-400 tracking-wider uppercase mb-2 block">
              Hyperscaler Matrix
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Cloud Hyperscaler Feature Comparison
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Compare core compute, storage, and serverless tools across major cloud providers.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-slate-950/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-slate-800 text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Services</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">AWS Feature</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Azure Feature</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Google Cloud Feature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Compute Services</td>
                  <td className="px-6 py-4">EC2 (Elastic Compute)</td>
                  <td className="px-6 py-4">Virtual Machines</td>
                  <td className="px-6 py-4 text-sky-400">Compute Engine</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Object Storage</td>
                  <td className="px-6 py-4">S3 (Simple Storage Service)</td>
                  <td className="px-6 py-4">Blob Storage</td>
                  <td className="px-6 py-4 text-sky-400">Cloud Storage</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Serverless Execution</td>
                  <td className="px-6 py-4">AWS Lambda</td>
                  <td className="px-6 py-4">Azure Functions</td>
                  <td className="px-6 py-4 text-sky-400">Cloud Run / Functions</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Kubernetes Orchestration</td>
                  <td className="px-6 py-4">EKS (Elastic Kubernetes)</td>
                  <td className="px-6 py-4">AKS (Azure Kubernetes)</td>
                  <td className="px-6 py-4 text-sky-400">GKE (Google Kubernetes Engine)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Unique Section: Cloud Migration Pathway */}
      <section id="migration" className="py-24 bg-slate-950 border-t border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-sky-400 tracking-wider uppercase mb-2 block">
              Migration Timeline
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Cloud Integration & Migration Stages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {migrationStages.map((stage, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden min-h-[220px] flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white relative z-10 pr-6">{stage.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-3 relative z-10 font-light">{stage.desc}</p>
                </div>
                <div className="text-4xl font-black text-slate-950/40 absolute bottom-3 right-4 font-mono select-none z-0">
                  {stage.phase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Cloud Outcomes */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 block">Infrastructure Value</span>
            <h2 className="text-3xl font-extrabold text-white">Cloud Performance Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-sky-400">99.99%</div>
              <h4 className="font-bold text-white text-sm">System Uptime</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-zone deployment configurations ensure server access during local outages.
              </p>
            </div>
            
            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-sky-400">10X</div>
              <h4 className="font-bold text-white text-sm">Faster Feature Deployments</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Terraform files simplify building sandbox environments for testing updates.
              </p>
            </div>

            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-sky-400">-35%</div>
              <h4 className="font-bold text-white text-sm">Operational Cost Reductions</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Auto-scaling resources reduce processor costs when traffic is low.
              </p>
            </div>

            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-sky-400">100%</div>
              <h4 className="font-bold text-white text-sm">Automated Backup Recovery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Database backups compile daily, securing customer information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service FAQs */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-sky-400 tracking-wider uppercase mb-2 block">
              Support FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} iconColor="text-sky-400" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="bg-slate-950 py-20 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Build a High-Performance Cloud Architecture?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Discuss migration timelines, active-active setups, security configurations, and auto-scaling rules with our database architects today.
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
