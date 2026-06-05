"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { 
  Shield, CheckCircle, HelpCircle, Zap, Layers, 
  ArrowRight, Globe, Award, Settings, Database, RefreshCw, Lock
} from "lucide-react";
import { motion } from "framer-motion";
import FAQItem from "@/components/shared/FAQItem";

const securityLayers = [
  {
    layer: "Layer 01: Zero-Trust Identity",
    title: "Identity & Multi-Factor Access",
    desc: "We enforce strict single sign-on (SSO) protocols, coordinate contextual multi-factor checks, and configure token rotations to block access from compromised devices."
  },
  {
    layer: "Layer 02: Network Segregations",
    title: "VPC firewalls & encrypted channels",
    desc: "We segment database subnets, establish firewall rules, and encrypt internal network traffic to isolate database instances from external endpoints."
  },
  {
    layer: "Layer 03: Application Shielding",
    title: "SQL injection filters & API scanning",
    desc: "We scan API payloads to block SQL injection and cross-site scripting attempts, routing all traffic through WAF proxies."
  },
  {
    layer: "Layer 04: Continuous SIEM Auditing",
    title: "Telemetry tracking & automated threat blocks",
    desc: "We connect system logs to central monitoring networks, using automated rules to detect anomalies and flag intrusion attempts."
  }
];

const faqs = [
  {
    q: "Why is a Zero-Trust Network Architecture critical for modern enterprise applications?",
    a: "Zero-Trust assumes that threat vectors can originate from inside the corporate network. It requires identity validation, device checks, and encryption for every single database query, preventing attackers from accessing data if a single system is compromised."
  },
  {
    q: "How do you protect database instances from SQL Injection and parameter tampering?",
    a: "We use parameter binding and execute queries through ORMs (like Prisma) to prevent input variables from running as database command scripts. We run validation routines on all API requests before processing data."
  },
  {
    q: "What industry security standards do you support?",
    a: "We configure systems to align with regulatory privacy standards, secure encryption protocols, and zero-trust identity verification architectures."
  },
  {
    q: "How do you conduct penetration tests and vulnerability checks?",
    a: "We run automated vulnerability scans and conduct manual penetration tests to audit system access controls, VPC firewall settings, and API authentication logic before applications deploy."
  }
];

export default function CyberSecurityPage() {
  useEffect(() => {
    document.title = "Enterprise Cybersecurity & Zero-Trust | Akshay Infotech";
  }, []);

  return (
    <div className="bg-slate-950 text-emerald-100 min-h-screen font-sans selection:bg-emerald-600 selection:text-white relative overflow-hidden">
      
      {/* Visual Scanning Effect traversing the page */}
      <motion.div 
        animate={{ y: ["-10%", "110%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent blur-sm pointer-events-none z-30"
      />

      {/* 1. Bespoke Hero Section: 3D Security Shield with rotating orbits */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-emerald-950/60 bg-gradient-to-b from-slate-950 to-emerald-955/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block">
                Digital Protection
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Zero-Trust Defense <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  & Cyber Security
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Akshay builds comprehensive cybersecurity configurations. By designing secure database subnets, enforcing contextual multi-factor checks, and monitoring system traffic, we protect corporate data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
                >
                  Consult with a Security Architect
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#layers"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-400 hover:text-white border border-emerald-900 hover:border-emerald-850 bg-emerald-950/50 rounded-xl transition-all"
                >
                  View Security Layers
                </a>
              </div>
            </div>

            {/* Custom SVG Security Shield Hero Visualization with orbiting path rings */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="w-[340px] aspect-square bg-slate-950 rounded-3xl border border-emerald-900 p-6 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full stroke-emerald-900 fill-none" viewBox="0 0 100 100">
                  {/* Outer Orbit */}
                  <motion.circle 
                    cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="3 3"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  />
                  {/* Inner Orbit */}
                  <motion.circle 
                    cx="50" cy="50" r="30" strokeWidth="0.5" strokeDasharray="2 2"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  />

                  {/* Shield shape in center */}
                  <path d="M 50 25 C 38 25, 30 29, 30 45 C 30 65, 50 78, 50 78 C 50 78, 70 65, 70 45 C 70 29, 62 25, 50 25 Z" stroke="#10b981" strokeWidth="2" className="animate-pulse" />
                  <Lock className="h-6 w-6 text-emerald-400 absolute top-[43%] left-[45%]" />
                </svg>
              </div>
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Platform Capabilities (Threat Hunting & SIEM Telemetry & Audits) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Threat Hunting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">Threat Detection</span>
              <h3 className="text-2xl font-bold text-white">Active Threat Detection & VPC Security</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We configure VPC network policies and segment database instances into isolated subnets, preventing lateral movement if an endpoint is compromised. We route system transactions through secure WAF proxies to block suspicious traffic.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-400 mr-2" /> Isolated database subnets</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-400 mr-2" /> Secure VPC access rules</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-400 mr-2" /> WAF proxy network rules</li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Network Access Policy</h4>
              <pre className="text-[10px] text-emerald-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`# AWS Security Group Rules
resource "aws_security_group_rule" "allow_db" {
  type                     = "ingress"
  from_port                = 5432
  to_port                  = 5432
  protocol                 = "tcp"
  security_group_id        = aws_security_group.db_sg.id
  source_security_group_id = aws_security_group.app_sg.id
}`}
              </pre>
            </div>
          </div>

          {/* Compliance Auditing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-4">
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">Security Audits</span>
              <h3 className="text-2xl font-bold text-white">Security Architecture Inspections</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We align systems with security guidelines: configuring access logs, secure data encryption protocols, active audit logging, and general privacy settings. We implement key management services to secure encryption variables.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-400 mr-2" /> Secure database audit logs</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-400 mr-2" /> Payment key data protection</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-400 mr-2" /> KMS encryption key cycles</li>
              </ul>
            </div>
            
            <div className="lg:order-1 bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Data Encryption Rules</h4>
              <pre className="text-[10px] text-cyan-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`const cipher = crypto.createCipheriv(
  'aes-256-gcm', 
  KMSMasterKey, 
  initializationVector
);
let encrypted = cipher.update(sensitiveData, 'utf8', 'hex');
encrypted += cipher.final('hex');`}
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Unique Section: Security Risk Impact Table */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2 block">
              Risk Evaluation
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Enterprise Risk & Mitigation Matrix
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Evaluate key vulnerability types, business impacts, and Akshay security mitigations.
            </p>
          </div>

          <div className="overflow-x-auto border border-emerald-950/65 rounded-2xl bg-slate-950/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-emerald-950/60 text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Vulnerability Type</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Business Risk / Impact</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Akshay Security Mitigation</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Residual Risk Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-950/60 text-slate-300">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">SQL Injection / Tampering</td>
                  <td className="px-6 py-4">Database manipulation & data leaks</td>
                  <td className="px-6 py-4">Strict parameter query binding & ORMs</td>
                  <td className="px-6 py-4 text-emerald-400">Mitigated / Low</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Session Theft (XSS/CSRF)</td>
                  <td className="px-6 py-4">Unauthorized user access & profile changes</td>
                  <td className="px-6 py-4">HttpOnly cookie states & CSRF middleware</td>
                  <td className="px-6 py-4 text-emerald-400">Mitigated / Low</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Brute-Force Login Attacks</td>
                  <td className="px-6 py-4">Account lockouts & credentials compromise</td>
                  <td className="px-6 py-4">Rate limiter thresholds & multi-factor checks</td>
                  <td className="px-6 py-4 text-emerald-400">Mitigated / Low</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">DDoS Resource Outages</td>
                  <td className="px-6 py-4">Application downtime & loss of access</td>
                  <td className="px-6 py-4">Cloudflare Enterprise edge shielding</td>
                  <td className="px-6 py-4 text-amber-500">Monitored / Med</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Unique Section: Security Layers Diagram */}
      <section id="layers" className="py-24 bg-slate-950 border-t border-b border-emerald-950/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2 block">
              Defense Layers
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Zero-Trust Security Architecture Layers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {securityLayers.map((layer, idx) => (
              <div key={idx} className="bg-slate-900 border border-emerald-950 p-6 rounded-2xl relative space-y-4">
                <span className="text-[10px] font-mono font-bold text-emerald-400 block uppercase">
                  {layer.layer}
                </span>
                <h4 className="text-sm font-bold text-white">{layer.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 block">Security Value</span>
            <h2 className="text-3xl font-extrabold text-white">Security Performance Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-emerald-950/60 bg-emerald-950/10 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-emerald-400">100%</div>
              <h4 className="font-bold text-white text-sm">Data Encryption</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                All database records are encrypted in transit and on physical storage media.
              </p>
            </div>
            
            <div className="border border-emerald-950/60 bg-emerald-950/10 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-emerald-400">0</div>
              <h4 className="font-bold text-white text-sm">Security Breaches</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero-Trust protocols help prevent intrusions and protect user profiles.
              </p>
            </div>

            <div className="border border-emerald-950/60 bg-emerald-950/10 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-emerald-400">&lt;5 min</div>
              <h4 className="font-bold text-white text-sm">Threat Incident Response</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                SIEM systems trigger immediate alerts to block malicious IP traffic.
              </p>
            </div>

            <div className="border border-emerald-950/60 bg-emerald-950/10 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-emerald-400">100%</div>
              <h4 className="font-bold text-white text-sm">System Alignment</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Configurations align with modern software security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service FAQs */}
      <section className="py-24 bg-slate-950 border-t border-emerald-950/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2 block">
              Support FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} iconColor="text-emerald-400" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="bg-slate-950 py-20 border-t border-emerald-950/60 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Secure Your System Architecture?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Discuss security policies, VPC firewall configurations, compliance options, and threat scans with our architects today.
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
