"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Phone, MapPin, Clock, ArrowRight, HelpCircle, 
  Send, CheckCircle2, Globe, Sparkles, MessageSquare, Compass,
  CheckCircle, FileText, Calendar, ChevronRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "migration",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Document Title
  useEffect(() => {
    document.title = "Contact Us | Nexora Technologies";
  }, []);

  // Canvas Mouse Tracker Particles Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      alpha: number;
    }> = [];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        color: "rgba(99, 102, 241, 0.15)",
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1
      });
    }

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
        ctx.fill();

        // Mouse attraction/repulsion line
        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (distToMouse < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - distToMouse / 120) * 0.15})`;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "migration",
        message: ""
      });
    }, 1500);
  };

  const officeLocations = [
    {
      city: "Boston, USA (Global HQ)",
      street: "75 State Street, Suite 100",
      hours: "9:00 AM - 6:00 PM EST",
      phone: "+1 (617) 555-0192"
    },
    {
      city: "London, UK",
      street: "12 Workspace Place, Shoreditch",
      hours: "9:00 AM - 6:00 PM GMT",
      phone: "+44 (20) 7946-0912"
    },
    {
      city: "Munich, Germany",
      street: "Kaufingerstraße 24, Altstadt",
      hours: "9:00 AM - 6:00 PM CET",
      phone: "+49 (89) 2019-4821"
    }
  ];

  const contactProcess = [
    { step: "01", icon: FileText, label: "Form Submission", desc: "You submit your project requirements and core system configurations." },
    { step: "02", icon: Calendar, label: "Discovery Sync", desc: "We schedule a 30-minute call to audit database latency and infrastructure bounds." },
    { step: "03", icon: CheckCircle, label: "Technical Blueprint", desc: "We deliver a customized architectural migration spec, detailing tech stack and costs." }
  ];

  const faqs = [
    {
      q: "How fast will I receive a customized technical proposal?",
      a: "Our systems architects review incoming scopes within 24 hours, scheduling an audit call to align timelines and provide concrete pricing guidelines."
    },
    {
      q: "Do you sign Non-Disclosure Agreements (NDAs) before discovery?",
      a: "Yes. We strictly enforce intellectual property rules. We sign standard NDAs before inspecting code repositories or discussing system schemas."
    },
    {
      q: "Do you offer post-migration scaling retainers?",
      a: "Yes. We offer 24/7 telemetry support, ongoing query optimization, database syncing audits, and server upgrades under structured service agreements."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-28 pb-16 overflow-hidden">
      
      {/* Background Watermark Vertical Left */}
      <div className="absolute top-12 left-6 h-[400px] w-[100px] pointer-events-none select-none overflow-hidden -z-10 origin-left">
        <div className="text-[100px] font-black tracking-widest text-indigo-500/[0.02] uppercase transform rotate-90 origin-left">
          GET IN TOUCH
        </div>
      </div>

      {/* Background Watermark Diagonal Right */}
      <div className="absolute bottom-12 right-6 pointer-events-none select-none overflow-hidden -z-10 text-right">
        <div className="text-[9vw] font-black tracking-widest text-blue-500/[0.015] uppercase leading-none">
          NEXORA CONNECT
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            <MessageSquare className="h-3.5 w-3.5" />
            Connect With Engineers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
            Let&apos;s Build Something Great
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
            Discuss migration timelines, database bottlenecks, and container architectures with our systems engineers.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Input Form */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            {/* Canvas overlay */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
            
            <div className="relative z-10 text-left">
              <h3 className="text-lg font-bold text-white mb-6">Send A Message</h3>

              {isSuccess ? (
                <div className="py-12 text-center space-y-6">
                  <div className="h-14 w-14 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto border border-indigo-500/20">
                    <CheckCircle2 className="h-8 w-8 text-indigo-400 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed font-light">
                      Thank you for contacting us. A senior systems architect will review your parameters and follow up soon.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-bold rounded-xl text-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-xs text-white placeholder-slate-600 transition-all focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-xs text-white placeholder-slate-600 transition-all focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Company Name</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-xs text-white placeholder-slate-600 transition-all focus:outline-none"
                        placeholder="Enterprise Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Project Requirement</label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-xs text-white placeholder-slate-600 transition-all focus:outline-none appearance-none"
                      >
                        <option value="migration">Database Migration</option>
                        <option value="telemetry">Real-Time Ingestion / Telemetry</option>
                        <option value="architecture">Enterprise Cloud Architecture</option>
                        <option value="other">Other Software Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Project Message</label>
                    <textarea 
                      name="message" 
                      rows={5} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-xs text-white placeholder-slate-600 transition-all focus:outline-none resize-none"
                      placeholder="Briefly details parameters, user numbers, and query requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-indigo-600/10 cursor-pointer"
                  >
                    {isSubmitting ? "Dispatching..." : "Send Secure Message"}
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Global Offices Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h4 className="text-base font-bold text-white mb-2">Our Locations</h4>
              <p className="text-xs text-slate-450 leading-relaxed font-light">
                Connect with our local regional offices for on-premise system reviews or direct developer interviews.
              </p>
            </div>

            <div className="space-y-6">
              {officeLocations.map((loc, idx) => (
                <div key={idx} className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl space-y-3">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">
                    OFFICE // 0{idx + 1}
                  </span>
                  <h5 className="text-sm font-bold text-white">{loc.city}</h5>
                  <div className="space-y-1 text-xs text-slate-500 font-light">
                    <p className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-slate-650" /> {loc.street}</p>
                    <p className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-slate-650" /> {loc.hours}</p>
                    <p className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-slate-650" /> {loc.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- SECTION: Contact & Staging Process ---------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-left">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How We Respond</h2>
          <p className="text-sm text-slate-400 mt-2">Our step-by-step pipeline from form submission to engineering proposal delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactProcess.map((proc, i) => {
            const ProcIcon = proc.icon;
            return (
              <div key={i} className="p-8 bg-[#090d1f]/40 border border-white/5 rounded-3xl relative overflow-hidden backdrop-blur-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 bg-indigo-500/10 text-indigo-400 flex items-center justify-center rounded-2xl">
                    <ProcIcon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-black text-indigo-550/20 font-mono">{proc.step}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{proc.label}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{proc.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-400 mt-2">Answers to key operational data staging and query performance questions.</p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30 backdrop-blur-md">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-base font-bold text-white hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center text-left">
                    <HelpCircle className="h-4.5 w-4.5 mr-3 text-indigo-400 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <span className="text-indigo-400 text-xs">-</span> : <span className="text-indigo-400 text-xs">+</span>}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pl-14 font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
