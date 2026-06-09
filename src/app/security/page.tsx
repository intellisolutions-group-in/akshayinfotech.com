"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield, Lock, Cloud, Database, Eye, Zap, AlertTriangle, Server,
  CheckCircle, RefreshCw, Clock, Activity, TrendingUp, ShieldCheck
} from "lucide-react";

const metrics = [
  { label: "Threats Blocked", value: 2847391, suffix: "", icon: Shield, color: "#EF4444" },
  { label: "Uptime SLA", value: 99.99, suffix: "%", icon: Activity, color: "#10B981" },
  { label: "Security Controls", value: 150, suffix: "+", icon: Lock, color: "#3B82F6" },
  { label: "Continuous Audits", value: 100, suffix: "%", icon: Clock, color: "#F59E0B" },
];

const securitySections = [
  {
    id: "overview",
    icon: Shield,
    color: "#3B82F6",
    title: "Security Overview",
    desc: "Akshay Infotech maintains a comprehensive, defense-in-depth security posture across all layers of our infrastructure, application code, and operational processes. Security is not an afterthought — it is an architectural requirement embedded from day one.",
    points: [
      "Multi-layer security architecture across infrastructure, application, and data tiers",
      "Continuous security monitoring with 24/7 SOC coverage",
      "Annual third-party security audits and penetration testing",
      "Security-first development lifecycle with mandatory code review gates",
    ],
  },
  {
    id: "infrastructure",
    icon: Server,
    color: "#8B5CF6",
    title: "Infrastructure Protection",
    desc: "Our infrastructure is hosted on AWS with multiple availability zones and redundant network paths. Physical access to data centers is controlled by biometric authentication, 24/7 surveillance, and strict visitor protocols.",
    points: [
      "AWS VPC with private subnets and NAT gateway isolation",
      "Web Application Firewall (WAF) with custom rule sets",
      "DDoS protection via AWS Shield Advanced",
      "Network intrusion detection systems (IDS/IPS) on all ingress points",
    ],
  },
  {
    id: "cloud-security",
    icon: Cloud,
    color: "#059669",
    title: "Cloud Security",
    desc: "Cloud environments are configured following AWS Well-Architected Framework security pillars. All cloud resources are provisioned through Infrastructure-as-Code with automated compliance checks on every deployment.",
    points: [
      "IAM roles with least-privilege principle enforced across all services",
      "AWS Config rules for continuous compliance monitoring",
      "CloudTrail audit logging for all API calls with secure retention policies",
      "S3 bucket policies enforcing encryption and blocking public access by default",
    ],
  },
  {
    id: "encryption",
    icon: Lock,
    color: "#EF4444",
    title: "Data Encryption",
    desc: "All data is encrypted in transit and at rest using industry-standard cryptographic algorithms. Encryption keys are managed through AWS KMS with automatic rotation policies.",
    points: [
      "TLS 1.3 for all data in transit with HSTS enforced",
      "Enterprise-grade encryption for all data at rest",
      "Hardware Security Modules (HSM) for root key storage",
      "End-to-end encryption for sensitive client communications",
    ],
  },
  {
    id: "zero-trust",
    icon: ShieldCheck,
    color: "#F59E0B",
    title: "Zero Trust Architecture",
    desc: "We operate on a Zero Trust model — no user or system is implicitly trusted, regardless of their network location. Every access request is verified, authenticated, and authorized before granting access.",
    points: [
      "Multi-Factor Authentication (MFA) required for all internal systems",
      "Single Sign-On (SSO) with SAML 2.0 for employee access management",
      "Micro-segmentation preventing lateral movement within networks",
      "Continuous session verification with anomaly-based access revocation",
    ],
  },
  {
    id: "threat-monitoring",
    icon: Eye,
    color: "#EC4899",
    title: "Threat Monitoring",
    desc: "Our Security Operations Center (SOC) monitors all systems around the clock using advanced SIEM technology, behavioral analytics, and threat intelligence feeds to detect and respond to threats in real-time.",
    points: [
      "AWS GuardDuty for intelligent threat detection",
      "SIEM platform aggregating logs from all services",
      "Automated alerting for anomalous authentication patterns",
      "Threat intelligence integration with commercial and open-source feeds",
    ],
  },
  {
    id: "incident-response",
    icon: AlertTriangle,
    color: "#6366F1",
    title: "Incident Response",
    desc: "Our Incident Response Plan (IRP) defines clear escalation paths, roles, and communication protocols for handling security events. We conduct quarterly tabletop exercises to validate our response capabilities.",
    points: [
      "Defined SLAs: P1 incidents prioritized with rapid response timelines",
      "Incident breach notification in accordance with standard privacy protocols",
      "Automated incident ticket creation and assignment workflows",
      "Post-incident reviews with root cause analysis documentation",
    ],
  },
  {
    id: "disaster-recovery",
    icon: RefreshCw,
    color: "#0891B2",
    title: "Disaster Recovery",
    desc: "Our Disaster Recovery strategy ensures business continuity with defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for all critical systems. Regular DR drills validate our recovery capabilities.",
    points: [
      "Robust RTO and RPO metrics for all Tier-1 systems",
      "Automated database backups to geographically isolated regions",
      "Blue/green deployment architecture for zero-downtime updates",
      "Monthly DR drills with documented test results and improvement plans",
    ],
  },
];

const complianceItems = [
  { label: "OWASP Top 10 Mitigation", status: "Active", color: "#10B981" },
  { label: "Static Code Analysis", status: "Enforced", color: "#10B981" },
  { label: "Dynamic Telemetry Scan", status: "Automated", color: "#10B981" },
  { label: "Dependency Audit", status: "Continuous", color: "#10B981" },
  { label: "SQL Injection Guard", status: "Active", color: "#10B981" },
  { label: "Encrypted Backups", status: "Automated", color: "#10B981" },
];

function AnimatedMetric({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 20;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-400/60 to-transparent pointer-events-none"
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  );
}

export default function SecurityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #020810 0%, #070f1f 50%, #0d1b35 100%)" }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="text-[18vw] font-black text-white/[0.02] tracking-widest leading-none">AKSHAY</div>
        </div>
        {/* Cybersecurity grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/8 blur-[130px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-600/6 blur-[110px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full mb-6">
              <Shield className="h-3.5 w-3.5" /> Enterprise Security
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">Security at Akshay</h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Enterprise-grade security is not optional — it is foundational. Discover how we protect your data, systems, and infrastructure across every layer of our operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Metrics Dashboard */}
      <section className="bg-slate-950 py-12 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Live Security Dashboard</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl bg-white/5 border border-white/10 p-5 text-center overflow-hidden"
                >
                  <ScanLine />
                  <div className="h-10 w-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: `${m.color}20`, color: m.color }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-black text-white leading-none mb-1">
                    <AnimatedMetric
                      target={m.value}
                      suffix={m.suffix}
                      decimals={m.value % 1 !== 0 ? 2 : 0}
                    />
                  </div>
                  <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wide">{m.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="text-[20vw] font-black text-slate-100 tracking-widest leading-none rotate-[-12deg] opacity-25">SEC</div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-8">
          {securitySections.map((section, idx) => {
            const Icon = section.icon;
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${section.color}15`, color: section.color }}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{section.desc}</p>
                  </div>
                  <div className="space-y-2.5">
                    {section.points.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-2.5 rounded-xl bg-slate-50 border border-slate-100 p-3"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: section.color }} />
                        <span className="text-xs text-slate-700 leading-relaxed font-medium">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Compliance Grid */}
      <section className="py-20 bg-slate-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-white mb-3">Verified Security Standards</h2>
            <p className="text-sm text-white/50">Our security program is aligned with modern software security frameworks and standards</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {complianceItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-5 py-4"
              >
                <span className="text-sm font-semibold text-white/80">{item.label}</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${item.color}20`, color: item.color }}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report a Vulnerability CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="h-16 w-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-5">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Responsible Disclosure</h2>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            Discovered a security vulnerability? We take all reports seriously and will investigate and respond promptly. Please do not disclose vulnerabilities publicly before giving us an opportunity to address them.
          </p>
          <a href="mailto:info@akshayinfoctech.net" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors">
            <Shield className="h-4 w-4" /> Report a Vulnerability
          </a>
        </div>
      </section>
    </div>
  );
}
