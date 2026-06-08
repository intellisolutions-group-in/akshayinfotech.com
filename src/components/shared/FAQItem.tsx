"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  faq: { q: string; a: string };
  iconColor?: string;
}

export default function FAQItem({ faq, iconColor = "text-primary" }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-slate-900 border border-slate-850 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-white/10 select-none group"
    >
      <div className="flex items-center justify-between gap-4 text-sm font-bold text-white">
        <div className="flex items-center gap-3">
          <HelpCircle className={`h-4.5 w-4.5 ${iconColor} shrink-0`} />
          <span className="text-left font-semibold tracking-tight">{faq.q}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-500 shrink-0"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-7.5">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
