"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Database, Cookie, BarChart2, Lock, UserCheck, Globe, Server, Eye, CheckCircle, Clock } from "lucide-react";

const privacySections = [
  {
    id: "info-collection",
    icon: Database,
    color: "#3B82F6",
    title: "Information We Collect",
    items: [
      { label: "Personal Information", desc: "Name, email, phone number, and company details provided through contact forms, project inquiries, or account registration." },
      { label: "Technical Data", desc: "IP addresses, browser type, device identifiers, operating system, referral URLs, and pages visited collected automatically via server logs and analytics." },
      { label: "Communication Data", desc: "Records of correspondence including emails, support tickets, and meeting notes exchanged during project engagements." },
      { label: "Payment Information", desc: "Billing details processed through secure third-party payment processors. Akshay does not store complete card numbers on our servers." },
    ],
  },
  {
    id: "data-usage",
    icon: Eye,
    color: "#8B5CF6",
    title: "How We Use Your Data",
    items: [
      { label: "Service Delivery", desc: "To fulfill contractual obligations, communicate project updates, and provide technical support." },
      { label: "Product Improvement", desc: "Aggregated analytics help us improve our website UX, identify popular content, and optimize performance." },
      { label: "Marketing", desc: "With your consent, we may send newsletters or service updates. You can unsubscribe at any time." },
      { label: "Legal Compliance", desc: "To meet regulatory obligations, respond to legal requests, and protect our rights and property." },
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    color: "#F59E0B",
    title: "Cookies Policy",
    items: [
      { label: "Essential Cookies", desc: "Required for website functionality including session management and security. Cannot be disabled." },
      { label: "Analytics Cookies", desc: "Help us understand how visitors interact with our site (Google Analytics, Plausible). You may opt out." },
      { label: "Preference Cookies", desc: "Remember your settings such as language preferences and UI choices across sessions." },
      { label: "Marketing Cookies", desc: "Used to deliver relevant advertisements. Enabled only with your explicit consent." },
    ],
  },
  {
    id: "analytics",
    icon: BarChart2,
    color: "#059669",
    title: "Analytics & Tracking",
    items: [
      { label: "Tools Used", desc: "We use Google Analytics 4, Vercel Analytics, and internal logging to measure site performance and user behavior." },
      { label: "Data Anonymization", desc: "IP addresses are anonymized before storage. User IDs are not linked to personally identifiable information in analytics dashboards." },
      { label: "Retention Period", desc: "Analytics data is retained for 14 months, after which it is automatically deleted from our analytics platforms." },
      { label: "Opt-Out", desc: "You may opt out of analytics tracking by using browser extensions such as uBlock Origin or the Google Analytics Opt-out Add-on." },
    ],
  },
  {
    id: "data-storage",
    icon: Server,
    color: "#EF4444",
    title: "Data Storage & Retention",
    items: [
      { label: "Storage Location", desc: "Data is stored on AWS servers located in the United States (us-east-1) and replicated to eu-west-1 for redundancy." },
      { label: "Encryption at Rest", desc: "All stored data is encrypted using AES-256 encryption. Database backups are encrypted and stored in isolated S3 buckets." },
      { label: "Retention Policy", desc: "Client project data is retained for 5 years post-project completion. Contact form submissions are retained for 2 years." },
      { label: "Deletion Requests", desc: "Upon verified request, we will delete or anonymize personal data within 30 days, unless retention is required by law." },
    ],
  },
  {
    id: "user-rights",
    icon: UserCheck,
    color: "#EC4899",
    title: "Your Rights",
    items: [
      { label: "Right to Access", desc: "Request a copy of all personal data we hold about you at any time by emailing info@akshayinfoctech.net." },
      { label: "Right to Rectification", desc: "Request correction of inaccurate or incomplete personal data in our records." },
      { label: "Right to Erasure", desc: "Request deletion of your personal data, subject to our legal retention obligations." },
      { label: "Right to Portability", desc: "Receive your personal data in a machine-readable format (JSON or CSV) upon request." },
    ],
  },
  {
    id: "gdpr",
    icon: Globe,
    color: "#0891B2",
    title: "GDPR Compliance",
    items: [
      { label: "Legal Basis", desc: "We process personal data under legitimate interest, contractual necessity, legal obligation, and explicit consent where required." },
      { label: "Data Protection Officer", desc: "Our DPO can be reached at info@akshayinfoctech.net for any GDPR-related inquiries or complaints." },
      { label: "Cross-Border Transfers", desc: "Data transfers outside the EEA are protected by Standard Contractual Clauses (SCCs) approved by the European Commission." },
      { label: "Supervisory Authority", desc: "EU residents have the right to lodge complaints with their national Data Protection Authority." },
    ],
  },
  {
    id: "security",
    icon: Lock,
    color: "#6366F1",
    title: "Security Measures",
    items: [
      { label: "Encryption in Transit", desc: "All data transmitted between your browser and our servers uses TLS 1.3 encryption with HSTS enforced." },
      { label: "Access Controls", desc: "Role-based access control limits data access to authorized personnel only. MFA is required for all internal systems." },
      { label: "Penetration Testing", desc: "We conduct quarterly third-party penetration tests and address findings within defined SLAs." },
      { label: "Incident Response", desc: "Data breaches affecting personal data are reported to relevant authorities within 72 hours as required by GDPR." },
    ],
  },
];

const securityCards = [
  { icon: Lock, label: "AES-256 Encryption", color: "#3B82F6" },
  { icon: Shield, label: "Zero-Trust Access", color: "#8B5CF6" },
  { icon: Globe, label: "GDPR Compliant", color: "#059669" },
  { icon: CheckCircle, label: "ISO 27001 Aligned", color: "#F59E0B" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #050814 0%, #0d1b35 100%)" }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="text-[18vw] font-black text-white/[0.025] tracking-widest leading-none">AKSHAY</div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/8 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 tracking-widest uppercase bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-6">
              <Shield className="h-3.5 w-3.5" /> Privacy & Data Protection
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              We are committed to protecting your personal data. This policy explains what we collect, how we use it, and your rights regarding your information.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Last Updated: June 1, 2026</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> GDPR Compliant</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Badges */}
      <div className="bg-slate-950 py-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {securityCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3"
                >
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${card.color}20`, color: card.color }}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-white/80">{card.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sections */}
      <section className="py-20 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="text-[20vw] font-black text-slate-100 tracking-widest leading-none rotate-[-12deg] opacity-30">NX</div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          {privacySections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${section.color}15`, color: section.color }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="rounded-xl bg-slate-50/80 border border-slate-100 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: section.color }} />
                        <span className="text-xs font-bold text-slate-800">{item.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Questions About Your Privacy?</h2>
          <p className="text-sm text-slate-500 mb-6">Our Data Protection Officer is available to address any privacy-related concerns you may have.</p>
          <div className="flex justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              General Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
