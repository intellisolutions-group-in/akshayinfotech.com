"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope and complexity. We always begin with a detailed discovery session to give you an accurate, realistic timeline tailored to your specific project requirements.",
  },
  {
    q: "What technologies do you work with?",
    a: "Our core stack includes React, Next.js, Node.js, Python, TypeScript, AWS, GCP, Docker, and Kubernetes. We also work with LangChain, OpenAI APIs, PostgreSQL, MongoDB, and many more. We pick the best tools for your specific requirements.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Absolutely. We provide ongoing maintenance packages, 24/7 incident response, performance monitoring, and feature iteration sprints. Our support tiers range from basic SLA coverage to fully dedicated DevOps teams.",
  },
  {
    q: "How do you ensure the security of our project?",
    a: "Security is built into every layer of our development process. We implement OWASP best practices, conduct regular penetration testing, enforce end-to-end encryption, manage secrets securely with HashiCorp Vault, and perform code audits before every major release.",
  },
  {
    q: "Can you integrate with our existing systems and tech stack?",
    a: "Yes. We specialize in system integration and API architecture. Whether you have legacy ERP systems, third-party SaaS platforms, or custom databases, we design adapter layers and microservices that connect seamlessly to your existing infrastructure.",
  },
  {
    q: "What does your pricing model look like?",
    a: "We offer flexible models: fixed-price for well-scoped projects, time-and-materials for agile engagements, and monthly retainers for ongoing product development. All engagements start with a complimentary discovery consultation to assess the best fit.",
  },
];

function FAQItem({ item, index, isVisible }: { item: typeof faqs[0]; index: number; isVisible: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.35 + index * 0.08, ease: "easeOut" }}
      className="group relative"
    >
      {/* Soft background shape that fades in on hover or when item is active */}
      <div 
        className={`absolute -inset-x-4 -inset-y-1 rounded-2xl transition-all duration-300 pointer-events-none -z-10 ${
          open 
            ? "bg-gradient-to-r from-blue-50/40 to-indigo-50/30 border border-blue-100/30 shadow-[0_10px_30px_rgba(59,130,246,0.02)]" 
            : "group-hover:bg-slate-50/60"
        }`} 
      />

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors duration-200 cursor-pointer"
      >
        <span className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-300 ${
          open ? "text-primary font-bold" : "text-slate-800 group-hover:text-slate-900"
        }`}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            open 
              ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105" 
              : "bg-slate-50 border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:bg-white group-hover:text-slate-600"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-slate-500 leading-relaxed pb-5 pr-11 pl-0.5">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-px bg-slate-100/80" />
    </motion.div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Header (Storytelling reveal elements) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
            >
              Common{" "}
              <span style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Questions
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="text-sm text-slate-500 leading-relaxed mb-8"
            >
              Everything you need to know about working with Akshay Infotech. Can&apos;t find the answer you&apos;re looking for?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            >
              <MagneticWrapper range={45} strength={0.25}>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary/95 transition-all shadow-md shadow-primary/10 group hover:translate-y-[-1px] active:translate-y-0"
                >
                  Talk to an Expert
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </MagneticWrapper>
            </motion.div>


          </div>

          {/* Right: FAQ items */}
          <div className="lg:col-span-8">
            <div className="space-y-1">
              {faqs.map((item, i) => (
                <FAQItem key={i} item={item} index={i} isVisible={isSectionInView} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
