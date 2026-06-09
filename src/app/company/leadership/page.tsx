"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";

export default function LeadershipPage() {
  useEffect(() => {
    document.title = "Leadership Team | Akshay Infotech";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-36 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center space-y-8">
        <div className="h-16 w-16 mx-auto rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl">
          <ShieldAlert className="h-8 w-8" />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Directory Status Notice
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            Our organizational directory is currently offline in accordance with local compliance frameworks. For direct corporate queries or to schedule a systems engineering consultation, please contact our support team.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-650 hover:bg-indigo-700 text-white transition-all rounded-xl font-bold text-xs shadow-lg shadow-indigo-900/20"
          >
            Contact Support Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
