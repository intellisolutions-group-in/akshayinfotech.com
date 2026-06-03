"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

export default function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 3,
        },
      });

      // Banner slow scaling and sliding up
      tl.fromTo(
        bannerRef.current,
        { scale: 0.9, y: 120, opacity: 0.5 },
        { scale: 1, y: 0, opacity: 1, ease: "power3.out", duration: 1.8 }
      );

      // Inner details staggered reveal
      const items = innerRef.current?.children;
      if (items) {
        tl.fromTo(
          items,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.3, ease: "power3.out", duration: 1.5 },
          "-=1.0"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Inner Container */}
        <div 
          ref={bannerRef}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-8 py-16 sm:px-12 sm:py-20 md:py-24 text-center shadow-2xl border border-slate-800"
        >
          
          {/* Decorative glowing background elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

          {/* Content */}
          <div ref={innerRef} className="relative z-10 max-w-3xl mx-auto space-y-8">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200 w-fit mx-auto">
              <Sparkles className="h-3.5 w-3.5 text-blue-300 animate-pulse" />
              <span>Partner With Nexora</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Let&rsquo;s Build Something <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
              Partner with Nexora Technologies to translate complex engineering challenges into secure, scalable, and high-performance digital realities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <MagneticWrapper range={50} strength={0.25}>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl shadow-lg hover:shadow-[0_15px_30px_rgba(255,255,255,0.08)] active:translate-y-0 transition-all w-full sm:w-auto group cursor-pointer"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-slate-900" />
                </Link>
              </MagneticWrapper>

              <MagneticWrapper range={50} strength={0.25}>
                <Link
                  href="/services"
                  className="flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl hover:shadow-[0_15px_30px_rgba(59,130,246,0.06)] active:translate-y-0 transition-all w-full sm:w-auto cursor-pointer"
                >
                  Explore Services
                </Link>
              </MagneticWrapper>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
