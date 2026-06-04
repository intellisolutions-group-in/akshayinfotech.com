"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Phone, MapPin, Clock, ArrowRight, HelpCircle, 
  Send, CheckCircle2, Globe, Sparkles, MessageSquare, Compass,
  CheckCircle, FileText, Calendar, ChevronRight
} from "lucide-react";

// --- Directional Glowing Star Field ---
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    type Direction = "right" | "left" | "down" | "up";
    interface Star {
      x: number; y: number;
      size: number; speed: number;
      opacity: number; dir: Direction;
      tail: number; twinkle: number;
    }

    const isMobile = width < 768;
    const TOTAL = isMobile ? 60 : 120;
    const dirs: Direction[] = ["right", "left", "down", "up"];

    const spawnStar = (dir: Direction, randomPos = true): Star => {
      let x = 0, y = 0;
      if (dir === "right") { x = randomPos ? Math.random() * width : -20; y = Math.random() * height; }
      else if (dir === "left") { x = randomPos ? Math.random() * width : width + 20; y = Math.random() * height; }
      else if (dir === "down") { x = Math.random() * width; y = randomPos ? Math.random() * height : -20; }
      else { x = Math.random() * width; y = randomPos ? Math.random() * height : height + 20; }
      return {
        x, y,
        size: Math.random() * 1.4 + 0.4,
        speed: Math.random() * 0.6 + 0.3,
        opacity: Math.random() * 0.55 + 0.3,
        dir,
        tail: Math.random() * 8 + 4,
        twinkle: Math.random() * Math.PI * 2,
      };
    };

    const stars: Star[] = [];
    for (let i = 0; i < TOTAL; i++) stars.push(spawnStar(dirs[i % 4], true));

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let animationId: number;
    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;
      for (const s of stars) {
        const twinkled = s.opacity * (0.75 + 0.25 * Math.sin(frame * 0.04 + s.twinkle));
        if (s.dir === "right") s.x += s.speed;
        else if (s.dir === "left") s.x -= s.speed;
        else if (s.dir === "down") s.y += s.speed;
        else s.y -= s.speed;

        if (s.x > width + 30) { Object.assign(s, spawnStar("right", false)); s.x = -20; }
        else if (s.x < -30) { Object.assign(s, spawnStar("left", false)); s.x = width + 20; }
        else if (s.y > height + 30) { Object.assign(s, spawnStar("down", false)); s.y = -20; }
        else if (s.y < -30) { Object.assign(s, spawnStar("up", false)); s.y = height + 20; }

        let tx = s.x, ty = s.y;
        if (s.dir === "right") tx = s.x - s.tail;
        else if (s.dir === "left") tx = s.x + s.tail;
        else if (s.dir === "down") ty = s.y - s.tail;
        else ty = s.y + s.tail;

        const grad = ctx.createLinearGradient(tx, ty, s.x, s.y);
        grad.addColorStop(0, `rgba(147, 197, 253, 0)`);
        grad.addColorStop(1, `rgba(219, 234, 254, ${twinkled * 0.5})`);
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad; ctx.lineWidth = s.size * 0.7; ctx.stroke();

        const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 3.5);
        halo.addColorStop(0, `rgba(186, 230, 253, ${twinkled * 0.45})`);
        halo.addColorStop(1, `rgba(99, 102, 241, 0)`);
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = halo; ctx.fill();

        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(219, 234, 254, ${twinkled})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkled})`; ctx.fill();
        ctx.shadowBlur = 0;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
}

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
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Document Title
  useEffect(() => {
    document.title = "Contact Us | Akshay Infotech";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate fake API call with 2.5 second delay
      await new Promise(resolve => setTimeout(resolve, 2500));

      if (formData.email.toLowerCase().includes("error") || formData.message.toLowerCase().includes("error")) {
        throw new Error("Simulation error triggered");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "migration",
        message: ""
      });

      // Show backup toast notification
      setToast({ message: "Form submitted successfully!", type: "success" });
      setTimeout(() => setToast(null), 4000);
    } catch (err) {
      setToast({ message: "Something went wrong. Please try again.", type: "error" });
      setTimeout(() => setToast(null), 4000);
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Directional Star Field */}
      <StarField />
      
      {/* Background Watermark Vertical Left */}
      <div className="absolute top-12 left-6 h-[400px] w-[100px] pointer-events-none select-none overflow-hidden -z-10 origin-left">
        <div className="text-[100px] font-black tracking-widest text-indigo-500/[0.02] uppercase transform rotate-90 origin-left">
          GET IN TOUCH
        </div>
      </div>

      {/* Background Watermark Diagonal Right */}
      <div className="absolute bottom-12 right-6 pointer-events-none select-none overflow-hidden -z-10 text-right">
        <div className="text-[9vw] font-black tracking-widest text-blue-500/[0.015] uppercase leading-none">
          AKSHAY CONNECT
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
            
            <div className="relative z-10 text-left">
              <h3 className="text-lg font-bold text-white mb-6">Send A Message</h3>

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

      {/* Modern Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsSuccess(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl z-10 text-center"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <CheckCircle2 className="h-10 w-10 text-emerald-400 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-sm text-slate-350 leading-relaxed mb-1 font-light">
                Your message has been submitted successfully.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                Our team will contact you shortly.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-bold rounded-xl text-xs cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification Backup */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            className={`fixed top-6 right-6 z-[10000] flex items-center gap-3 px-5 py-3.5 rounded-xl border shadow-xl backdrop-blur-md ${
              toast.type === "success"
                ? "bg-emerald-950/90 border-emerald-500/30 text-emerald-300"
                : "bg-rose-950/90 border-rose-500/30 text-rose-300"
            }`}
          >
            <CheckCircle2 className={`h-4.5 w-4.5 ${toast.type === "success" ? "text-emerald-400" : "text-rose-400"}`} />
            <span className="text-xs font-semibold">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
