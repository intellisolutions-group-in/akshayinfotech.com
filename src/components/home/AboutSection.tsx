"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Target, Eye, ShieldCheck, TrendingUp, Users, Award } from "lucide-react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const values = [
  {
    icon: Target, title: "Mission",
    desc: "To deliver high-performance software engineering, modern designs, and secure infrastructures that scale enterprise goals.",
    color: "#2563EB",
  },
  {
    icon: Eye, title: "Vision",
    desc: "To be the leading global partner for tech innovations, creating intuitive software that elevates human potential.",
    color: "#7C3AED",
  },
  {
    icon: ShieldCheck, title: "Core Values",
    desc: "Uncompromising quality, transparency, rapid iterations, security-first architectures, and absolute customer satisfaction.",
    color: "#059669",
  },
];

const stats = [
  { icon: TrendingUp, value: "200+", label: "Projects Delivered", color: "#2563EB" },
  { icon: Users, value: "50+", label: "Expert Engineers", color: "#7C3AED" },
  { icon: Award, value: "99.8%", label: "Client Retention", color: "#059669" },
];

function AnimatedCounter({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800; // slightly slower, smooth count
    const step = 16;
    const increment = (target / (duration / step));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Section inView observer for storytelling steps
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-120px" });

  // 3D tilt for image
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 100, damping: 20 });
  const sy = useSpring(my, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const handleImageMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    my.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden relative">
      {/* Visual top transition edge helper */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-100" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Step 1 (Image appears first) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              onMouseMove={handleImageMove}
              onMouseLeave={() => { mx.set(0); my.set(0); }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-slate-100 border border-slate-100 group bg-slate-50 cursor-default"
            >
              <Image
                src="/about-bg.png"
                alt="Nexora innovation hub"
                fill
                className="object-cover group-hover:scale-[1.06] transition-transform duration-[800ms]"
                sizes="(max-width: 1280px) 40vw, 100vw"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent pointer-events-none" />

              {/* Floating stat badge */}
              <motion.div
                style={{ transform: "translateZ(30px)" }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl flex items-center space-x-4 shadow-xl"
              >
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    <AnimatedCounter target={99.8} suffix="%" decimals={1} />
                  </div>
                  <div className="text-xs font-medium text-slate-500">Client Retention & Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Blob Background elements */}
            <div className="absolute -top-12 -left-12 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
            <div className="absolute -bottom-8 -right-8 h-60 w-60 rounded-full bg-purple-100/30 blur-2xl -z-10 animate-pulse" style={{ animationDuration: "12s" }} />

            {/* Floating stat pills */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={isSectionInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="absolute -top-4 -right-4 bg-white border border-slate-100 shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-2"
            >
              <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">
                  <AnimatedCounter target={200} suffix="+" />
                </div>
                <div className="text-[10px] text-slate-400">Projects</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 2: Heading block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <span className="text-sm font-bold text-primary tracking-wider uppercase mb-3 block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                We Architect Digital Systems<br />
                <span style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  that Inspire
                </span>
              </h2>
            </motion.div>

            {/* Step 3: Text paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="text-base text-slate-500 leading-relaxed"
            >
              Founded with a vision to redefine software delivery, Nexora Technologies brings together elite product engineers, cloud architects, and UX designers. We help companies navigate the complex tech landscape with clean code, robust development, and production-ready applications.
            </motion.p>

            {/* Step 4: Staggered stats and Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
              className="space-y-8"
            >
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="rounded-2xl p-4 text-center border border-slate-100 bg-slate-50/80 transition-shadow hover:shadow-lg hover:shadow-slate-100 hover:border-slate-200 cursor-default"
                    >
                      <div className="h-8 w-8 rounded-xl mx-auto mb-2 flex items-center justify-center" style={{ background: `${s.color}15` }}>
                        <Icon className="h-4 w-4" style={{ color: s.color }} />
                      </div>
                      <div className="text-xl font-bold text-slate-900">
                        <AnimatedCounter
                          target={parseFloat(s.value)}
                          suffix={s.value.includes("%") ? "%" : s.value.includes("+") ? "+" : ""}
                          decimals={s.value.includes(".") ? 1 : 0}
                        />
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium mt-0.5">{s.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Interactive Tabs */}
              <div className="rounded-2xl border border-slate-100 p-6 bg-slate-50/50 shadow-sm">
                <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4 mb-5">
                  {values.map((val, idx) => {
                    const Icon = val.icon;
                    return (
                      <button
                        key={val.title}
                        onClick={() => setActiveTab(idx)}
                        className="flex items-center space-x-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                        style={activeTab === idx ? {
                          background: val.color,
                          color: "white",
                          boxShadow: `0 8px 18px ${val.color}35`
                        } : { color: "#64748B" }}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{val.title}</span>
                      </button>
                    );
                  })}
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2 min-h-[80px]"
                  >
                    <h3 className="text-lg font-bold text-slate-800">Our {values[activeTab].title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{values[activeTab].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
