"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { 
  BarChart, CheckCircle, HelpCircle, Shield, Zap, Layers, 
  ArrowRight, Globe, Award, Settings, Database, RefreshCw, Briefcase
} from "lucide-react";
import { motion } from "framer-motion";
import FAQItem from "@/components/shared/FAQItem";

const consultingSteps = [
  {
    phase: "Phase 01",
    title: "Discovery & Enterprise Resource Audit",
    desc: "We analyze legacy server resource consumption, identify software licenses, review security profiles, and interview team stakeholders."
  },
  {
    phase: "Phase 02",
    title: "Architecture Design & Modernization Plans",
    desc: "We model modernized database relationships, map cloud integrations, specify container models, and outline API standards."
  },
  {
    phase: "Phase 03",
    title: "Cost Analysis & Hyperscaler Selection",
    desc: "We evaluate hosting and license costs, compare cloud options (AWS, Azure, GCP), and design cost-effective cloud resource frameworks."
  },
  {
    phase: "Phase 04",
    title: "Migration Roadmaps & Team Onboarding",
    desc: "We coordinate database migrations, establish deployment guidelines, and run onboarding programs to train internal engineers."
  }
];

const faqs = [
  {
    q: "Why is a formal enterprise architecture audit necessary?",
    a: "Auditing enterprise systems reveals resource waste, identifies security vulnerabilities, and highlights technical debt, providing a clear path to modernization."
  },
  {
    q: "How does Akshay calculate ROI for digital transformation migrations?",
    a: "We compare legacy hosting and support costs with proposed cloud configurations, modeling compute resource efficiencies and maintenance savings."
  },
  {
    q: "Do you advise on software license consolidation and optimization?",
    a: "Yes. We review software contracts and server usage profiles to eliminate redundant licensing fees and suggest cost-effective alternatives."
  },
  {
    q: "How do you coordinate cloud migrations with internal engineering teams?",
    a: "We work alongside your staff, documenting migration procedures, establishing deployment standards, and providing hands-on training to onboard engineers."
  }
];

export default function ITConsultingPage() {
  useEffect(() => {
    document.title = "IT Consulting & Digital Strategy | Akshay Infotech";
  }, []);

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* 1. Bespoke Hero Section: Interactive Strategy Dashboard */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block">
                Business Transformation
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                IT Strategy & <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Enterprise Advisory
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Akshay designs technology modernizations. By auditing legacy software architecture, optimizing license allocations, and coordinating migrations, we align IT infrastructure with business goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
                >
                  Consult with an Advisor
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#framework"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-950/50 rounded-xl transition-all"
                >
                  View Advisory Framework
                </a>
              </div>
            </div>

            {/* Custom Interactive Strategy Dashboard SVG */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="w-[340px] aspect-square bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>Strategy Dashboard</span>
                  <span className="text-emerald-400">Active Audit</span>
                </div>
                
                <svg className="w-full h-3/4 stroke-slate-800 fill-none mt-4" viewBox="0 0 100 60">
                  {/* Grid Lines */}
                  <line x1="10" y1="10" x2="90" y2="10" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="10" y1="30" x2="90" y2="30" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.5" strokeDasharray="1 1" />

                  {/* Scaling Bar Chart Columns */}
                  <motion.rect x="20" y="50" width="8" height="0" fill="#2563eb" rx="2" animate={{ y: [50, 20], height: [0, 30] }} transition={{ duration: 2, ease: "easeOut" }} />
                  <motion.rect x="35" y="50" width="8" height="0" fill="#6366f1" rx="2" animate={{ y: [50, 10], height: [0, 40] }} transition={{ duration: 2.2, ease: "easeOut" }} />
                  <motion.rect x="50" y="50" width="8" height="0" fill="#3b82f6" rx="2" animate={{ y: [50, 25], height: [0, 25] }} transition={{ duration: 1.8, ease: "easeOut" }} />
                  <motion.rect x="65" y="50" width="8" height="0" fill="#4f46e5" rx="2" animate={{ y: [50, 5], height: [0, 45] }} transition={{ duration: 2.4, ease: "easeOut" }} />

                  {/* Performance Trend Line */}
                  <motion.path 
                    d="M 24 20 L 39 10 L 54 25 L 69 5" 
                    stroke="#10b981" strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 0.5 }}
                  />
                </svg>

                <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mt-2 pt-2 border-t border-slate-900">
                  <span>ROI: +24%</span>
                  <span>Cost Saved: 35%</span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Advisory Services (Digital Roadmaps & Software Audits & Enterprise Scaling) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Digital Transformation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Digital Advisory</span>
              <h3 className="text-2xl font-bold text-white">Modern Enterprise Architecture Roadmaps</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We design digital modernization plans that help businesses replace legacy software platforms. By auditing existing setups, we identify resource waste and establish paths to modern architectures.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Legacy system audits</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Modernization timelines</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Software license reviews</li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Technical Debt Assessment</h4>
              <div className="space-y-3 font-mono text-[11px] text-slate-400">
                <div className="flex justify-between border-b border-slate-850 pb-1.5">
                  <span>Legacy Node Capacity:</span>
                  <span className="text-rose-400">80% Inactive / Idle</span>
                </div>
                <div className="flex justify-between border-b border-slate-850 pb-1.5">
                  <span>Manual Build Overhead:</span>
                  <span className="text-rose-400">18 hrs / release</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Risk:</span>
                  <span className="text-rose-400">High (Legacy OS)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Enterprise Architecture</span>
              <h3 className="text-2xl font-bold text-white">Cloud Resource Consolidation Strategy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We review cloud configurations across providers (AWS, Azure, GCP) to identify resource waste. We configure auto-scaling rules and select sizing models to align cloud budgets with demand.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Multi-cloud resource analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Auto-scaling design parameters</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Cloud provider sizing evaluations</li>
              </ul>
            </div>
            
            <div className="lg:order-1 bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Proposed Modernization Metrics</h4>
              <div className="space-y-3 font-mono text-[11px] text-slate-400">
                <div className="flex justify-between border-b border-slate-850 pb-1.5">
                  <span>Optimized Node Capacity:</span>
                  <span className="text-emerald-400">95% Utilized / Active</span>
                </div>
                <div className="flex justify-between border-b border-slate-850 pb-1.5">
                  <span>Automated Build Overhead:</span>
                  <span className="text-emerald-400">0.5 hrs / release</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Risk:</span>
                  <span className="text-emerald-400">Low (Auto-monitored)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Unique Section: Modernization Matrix Table */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Modernization Matrix
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              IT Modernization Strategic Roadmap
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Compare system architectures, deployment timelines, and projected savings.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-slate-950/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-slate-800 text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">System Category</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Legacy Architecture</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Modernized Target</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Projected Savings / Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Application Servers</td>
                  <td className="px-6 py-4">On-premise VM server racks</td>
                  <td className="px-6 py-4">AWS ECS / Fargate container nodes</td>
                  <td className="px-6 py-4 text-emerald-400">35% cost saved / 3 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Customer Database</td>
                  <td className="px-6 py-4">Local SQL instances without replica sets</td>
                  <td className="px-6 py-4">Amazon RDS with multi-zone replicas</td>
                  <td className="px-6 py-4 text-emerald-400">99.99% uptime / 2 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Release Workflow</td>
                  <td className="px-6 py-4">Manual server file copies via FTP</td>
                  <td className="px-6 py-4">GitHub Actions and Fastlane pipelines</td>
                  <td className="px-6 py-4 text-emerald-400">90% build time saved / 1 month</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Identity Access</td>
                  <td className="px-6 py-4">Local database user records</td>
                  <td className="px-6 py-4">Azure Active Directory and SSO auth</td>
                  <td className="px-6 py-4 text-emerald-400">Reduced risk / 1.5 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Unique Section: Consulting Framework Timeline */}
      <section id="framework" className="py-24 bg-slate-950 border-t border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Advisory Framework
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              IT Modernization Consulting Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {consultingSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-4">
                <div className="text-xs font-black text-slate-700 absolute top-3 right-4 font-mono select-none tracking-widest uppercase">
                  {step.phase}
                </div>
                <h4 className="text-sm font-bold text-white pt-4">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Outcomes */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Strategic Outcomes</span>
            <h2 className="text-3xl font-extrabold text-white">Advisory Performance Outcomes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">-35%</div>
              <h4 className="font-bold text-white text-sm">Average IT Hosting Costs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Resource and sizing adjustments reduce cloud hosting bills.
              </p>
            </div>
            
            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">100%</div>
              <h4 className="font-bold text-white text-sm">System Alignment</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                System setups align with industry-leading security practices.
              </p>
            </div>

            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">+24%</div>
              <h4 className="font-bold text-white text-sm">Projected ROI</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consolidating software licenses and VMs delivers return on investment.
              </p>
            </div>

            <div className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">90%</div>
              <h4 className="font-bold text-white text-sm">Build Time Savings</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated release pipelines replace manual server file transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service FAQs */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Support FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} iconColor="text-primary" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="bg-slate-950 py-20 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Plan Your Technology Modernization?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Discuss resource audits, software license reviews, cloud scaling, and migration roadmaps with our strategic architects today.
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
