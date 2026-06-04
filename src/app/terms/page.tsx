"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Globe, Users, CreditCard, AlertTriangle, Scale, Mail, ChevronDown, ChevronUp, Clock, CheckCircle } from "lucide-react";

const sections = [
  {
    id: "introduction",
    icon: FileText,
    color: "#3B82F6",
    title: "1. Introduction",
    content: `Welcome to Akshay Infotech. These Terms and Conditions govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these terms in their entirety.\n\nAkshay Infotech ("we," "us," or "our") provides enterprise software engineering, AI automation, cloud infrastructure, UI/UX design, mobile development, and related technology services. These terms apply to all clients, visitors, and users of our digital properties.\n\nIf you do not agree to these terms, you must discontinue use of our services immediately. We reserve the right to update these terms at any time; continued use following any changes constitutes acceptance of the revised terms.`,
  },
  {
    id: "definitions",
    icon: Globe,
    color: "#8B5CF6",
    title: "2. Definitions",
    content: `"Services" refers to all software development, consulting, design, and technology solutions provided by Akshay Infotech.\n\n"Client" means any individual, organization, or entity that engages Akshay Infotech for services under a signed agreement or statement of work.\n\n"Platform" refers to the Akshay Infotech website and any associated digital products or applications.\n\n"Deliverables" means all software, designs, documentation, and other work products created by Akshay Infotech under a project engagement.\n\n"Confidential Information" means any non-public information disclosed by either party that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information.`,
  },
  {
    id: "website-usage",
    icon: Globe,
    color: "#059669",
    title: "3. Website Usage",
    content: `You may use our website for lawful purposes only. You must not use our platform to transmit unsolicited communications, distribute malicious software, attempt unauthorized access to our systems, or engage in any activity that may harm, disrupt, or overload our infrastructure.\n\nWe reserve the right to restrict access to our website at any time without notice. Automated scraping, crawling, or data extraction from our website is prohibited without express written consent.\n\nWe use cookies and similar tracking technologies to enhance your experience. By continuing to use our website, you consent to our Cookie Policy as outlined in our Privacy Policy.`,
  },
  {
    id: "intellectual-property",
    icon: Shield,
    color: "#EF4444",
    title: "4. Intellectual Property",
    content: `All content on the Akshay Infotech website—including text, graphics, logos, icons, images, code, and software—is the exclusive property of Akshay Infotech or its licensors and is protected by applicable intellectual property laws.\n\nFor client projects, upon full payment of all invoices, Akshay Infotech transfers ownership of custom deliverables to the client. However, Akshay Infotech retains ownership of any pre-existing tools, frameworks, libraries, and proprietary methodologies used in the delivery of services.\n\nClients grant Akshay Infotech a non-exclusive license to display completed work in our portfolio unless a Non-Disclosure Agreement (NDA) is in place. Open-source components used in deliverables remain subject to their respective licenses.`,
  },
  {
    id: "user-responsibilities",
    icon: Users,
    color: "#F59E0B",
    title: "5. User Responsibilities",
    content: `As a user or client of Akshay Infotech, you agree to:\n\n• Provide accurate and complete information during onboarding, project scoping, and communication\n• Maintain the confidentiality of any account credentials or API keys provided\n• Use delivered software and services in compliance with all applicable laws and regulations\n• Not reverse engineer, decompile, or attempt to extract source code from proprietary tools\n• Promptly report any security vulnerabilities discovered in our systems\n• Ensure your own compliance with data protection laws when using our platforms to process user data`,
  },
  {
    id: "service-limitations",
    icon: AlertTriangle,
    color: "#EC4899",
    title: "6. Service Limitations",
    content: `Akshay Infotech provides services on a best-effort basis and does not guarantee uninterrupted availability of any hosted service. Scheduled maintenance windows will be communicated with reasonable advance notice.\n\nOur liability for service failures, data loss, or consequential damages is limited to the fees paid by the client in the three months preceding the incident giving rise to the claim.\n\nAkshay Infotech is not liable for third-party service outages (e.g., AWS, Google Cloud, Stripe) that may impact the availability of client applications. Force majeure events including natural disasters, governmental actions, or cyberattacks are excluded from our liability scope.`,
  },
  {
    id: "payment-terms",
    icon: CreditCard,
    color: "#0891B2",
    title: "7. Payment Terms",
    content: `Payment terms are specified in individual project agreements or statements of work. Standard terms are:\n\n• Project initiation requires a 40% deposit upon contract signing\n• Milestone-based payments are due within 14 days of milestone delivery\n• Final payment of remaining balance is due prior to production deployment\n• Invoices unpaid after 30 days are subject to a 1.5% monthly interest charge\n• Disputed invoices must be raised in writing within 7 days of receipt\n\nRetainer-based engagements are billed monthly in advance. Akshay Infotech reserves the right to pause work on accounts with overdue balances exceeding 30 days.`,
  },
  {
    id: "disclaimer",
    icon: AlertTriangle,
    color: "#6366F1",
    title: "8. Disclaimer",
    content: `Our services are provided "as is" without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. Akshay Infotech does not warrant that services will be error-free or that defects will be corrected within any specific timeframe.\n\nWe do not guarantee specific business outcomes, revenue growth, or performance metrics as a result of our services. Technology recommendations are made based on information available at the time of engagement and may require updates as the technology landscape evolves.`,
  },
  {
    id: "governing-law",
    icon: Scale,
    color: "#10B981",
    title: "9. Governing Law",
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to conflict of law provisions.\n\nAny disputes arising from these terms or our services shall first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration under the rules of the American Arbitration Association.\n\nClass action lawsuits are expressly waived. Each party agrees that claims will be brought only in their individual capacity. These terms constitute the entire agreement between the parties regarding subject matter herein.`,
  },
  {
    id: "contact",
    icon: Mail,
    color: "#3B82F6",
    title: "10. Contact Information",
    content: `For questions, concerns, or legal notices regarding these Terms and Conditions, please contact us:\n\nAkshay Infotech Legal Department\nEmail: legal@akshayinfotech.com\nPhone: +1 (555) 019-2834\nAddress: 100 Tech Plaza, San Francisco, CA 94107\n\nFor general inquiries: contact@akshayinfotech.com\nFor security matters: security@akshayinfotech.com\n\nWe aim to respond to all legal inquiries within 5 business days.`,
  },
];

const faqs = [
  { q: "Can I use Akshay's code in my own projects?", a: "Upon full payment, you receive ownership of custom deliverables. Pre-built frameworks and tools remain Akshay's property but are licensed for your project use." },
  { q: "What happens if a project is cancelled mid-way?", a: "Work completed to the cancellation date is billable. Deposits are non-refundable. We will deliver all completed work files upon receipt of outstanding payment." },
  { q: "Do you offer refunds?", a: "We do not offer refunds for completed work. If you are unsatisfied with a deliverable, we will work to resolve the issue through revision cycles as outlined in your project agreement." },
  { q: "How long are these terms valid?", a: "These terms are effective immediately upon your use of our services and remain in effect indefinitely unless superseded by updated terms, which we will announce on this page." },
];

function FAQItem({ faq, idx }: { faq: typeof faqs[0]; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08 }}
      className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:border-blue-100 transition-colors"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
        <span className="text-sm font-semibold text-slate-800">{faq.q}</span>
        {open ? <ChevronUp className="h-4 w-4 text-blue-600 shrink-0" /> : <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-xs text-slate-500 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #050814 0%, #0a1628 100%)" }}>
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="text-[18vw] font-black text-white/[0.025] tracking-widest leading-none">AKSHAY</div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-600/8 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-6">
              <FileText className="h-3.5 w-3.5" /> Legal Document
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">Terms & Conditions</h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Please read these terms carefully before using Akshay Infotech services. They govern your relationship with us and outline your rights and obligations.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Last Updated: June 1, 2026</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> Effective Immediately</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <div className="bg-slate-50 border-b border-slate-100 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="text-[10px] font-semibold text-slate-500 hover:text-blue-600 uppercase tracking-wide px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all">
                {s.title.replace(/^\d+\.\s/, "")}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 relative">
        {/* Background AKSHAY watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="text-[20vw] font-black text-slate-100 tracking-widest leading-none rotate-[-15deg] opacity-40">AI</div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          {sections.map((section, idx) => {
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
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${section.color}15`, color: section.color }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                </div>
                <div className="space-y-3">
                  {section.content.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{para}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-500">Quick answers to common questions about our terms</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => <FAQItem key={idx} faq={faq} idx={idx} />)}
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Key Terms at a Glance</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Topic</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Summary</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Section</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["IP Ownership", "Client owns deliverables after full payment", "§4"],
                ["Payment", "40% deposit, milestone-based billing", "§7"],
                ["Refunds", "No refunds for completed work", "§7"],
                ["Liability", "Limited to 3 months of fees paid", "§6"],
                ["Disputes", "Binding arbitration, no class actions", "§9"],
                ["Data", "Client responsible for their users' data", "§5"],
              ].map(([topic, summary, section], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="px-6 py-4 font-semibold text-slate-800 text-xs">{topic}</td>
                  <td className="px-6 py-4 text-slate-600 text-xs">{summary}</td>
                  <td className="px-6 py-4 text-blue-600 font-bold text-xs">{section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
