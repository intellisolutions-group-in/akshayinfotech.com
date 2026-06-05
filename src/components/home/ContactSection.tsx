"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, ArrowRight, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDObject from "./ThreeDObject";
import * as THREE from "three";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

// --- 3D Tilt Card Wrapper Component ---
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft spring transitions for high-performance layout tilting
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  // Map to small degrees of rotation
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize coordinates relative to card center [-0.5, 0.5]
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}

// --- Three.js Globe Background ---
function GlobeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 1000);
    camera.position.z = 13;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0.15;
    globeGroup.position.y = -0.2;
    scene.add(globeGroup);

    // Main wireframe sphere
    const sphereGeo = new THREE.SphereGeometry(2.0, 36, 28);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.10,
    });
    globeGroup.add(new THREE.Mesh(sphereGeo, sphereMat));

    // Latitude rings
    const latLevels = [-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75];
    latLevels.forEach((t) => {
      const y = t * 2.0;
      const r = Math.sqrt(Math.max(0, 2.0 * 2.0 - y * y));
      if (r < 0.1) return;
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.012, 4, 80),
        new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.35 })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;
      globeGroup.add(ring);
    });

    // Longitude arcs (vertical great circles)
    const segments = 80;
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI;
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j <= segments; j++) {
        const phi = (j / segments) * Math.PI * 2;
        pts.push(new THREE.Vector3(
          2.0 * Math.sin(phi) * Math.cos(angle),
          2.0 * Math.cos(phi),
          2.0 * Math.sin(phi) * Math.sin(angle)
        ));
      }
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      globeGroup.add(new THREE.Line(
        lineGeo,
        new THREE.LineBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.25 })
      ));
    }

    // Dots on sphere surface (Fibonacci lattice)
    const dotPositions: number[] = [];
    const N = 300;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - (2 * i) / N);
      const theta = goldenAngle * i;
      dotPositions.push(
        2.02 * Math.sin(phi) * Math.cos(theta),
        2.02 * Math.cos(phi),
        2.02 * Math.sin(phi) * Math.sin(theta)
      );
    }
    const dotsGeo = new THREE.BufferGeometry();
    dotsGeo.setAttribute("position", new THREE.Float32BufferAttribute(dotPositions, 3));
    globeGroup.add(new THREE.Points(
      dotsGeo,
      new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.055, transparent: true, opacity: 0.85, sizeAttenuation: true })
    ));

    // Outer glow sphere
    const glowGeo = new THREE.SphereGeometry(2.2, 32, 24);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.04, side: THREE.BackSide });
    globeGroup.add(new THREE.Mesh(glowGeo, glowMat));

    // Animate
    let rafId: number;
    const clock = new THREE.Clock();
    const tick = () => {
      const t = clock.getElapsedTime();
      globeGroup.rotation.y = t * 0.09;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    tick();

    // Resize
    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
      style={{ zIndex: 0 }}
    />
  );
}

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

    // 4 direction groups: right, left, down, up
    type Direction = "right" | "left" | "down" | "up";

    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      dir: Direction;
      tail: number; // tail length multiplier
      twinkle: number; // phase offset for twinkle
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
    for (let i = 0; i < TOTAL; i++) {
      const dir = dirs[i % 4];
      stars.push(spawnStar(dir, true));
    }

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
        // Twinkle opacity
        const twinkled = s.opacity * (0.75 + 0.25 * Math.sin(frame * 0.04 + s.twinkle));

        // Move
        if (s.dir === "right") s.x += s.speed;
        else if (s.dir === "left") s.x -= s.speed;
        else if (s.dir === "down") s.y += s.speed;
        else s.y -= s.speed;

        // Wrap around
        if (s.x > width + 30) { Object.assign(s, spawnStar("right", false)); s.x = -20; }
        else if (s.x < -30) { Object.assign(s, spawnStar("left", false)); s.x = width + 20; }
        else if (s.y > height + 30) { Object.assign(s, spawnStar("down", false)); s.y = -20; }
        else if (s.y < -30) { Object.assign(s, spawnStar("up", false)); s.y = height + 20; }

        // Draw tail (motion streak)
        let tx = s.x, ty = s.y;
        if (s.dir === "right") tx = s.x - s.tail;
        else if (s.dir === "left") tx = s.x + s.tail;
        else if (s.dir === "down") ty = s.y - s.tail;
        else ty = s.y + s.tail;

        const grad = ctx.createLinearGradient(tx, ty, s.x, s.y);
        grad.addColorStop(0, `rgba(147, 197, 253, 0)`);
        grad.addColorStop(1, `rgba(219, 234, 254, ${twinkled * 0.5})`);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.size * 0.7;
        ctx.stroke();

        // Glow halo
        const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 3.5);
        halo.addColorStop(0, `rgba(186, 230, 253, ${twinkled * 0.45})`);
        halo.addColorStop(1, `rgba(99, 102, 241, 0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // Core bright dot
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(219, 234, 254, ${twinkled})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkled})`;
        ctx.fill();
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
}

// --- Success Confetti Particle Blast Canvas ---
function SuccessBlast() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = canvas.clientWidth);
    const height = (canvas.height = canvas.clientHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      decay: number;
    }> = [];

    // Spawn 100 colorful sparklers from center
    const colors = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ec4899"];
    for (let i = 0; i < 110; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 2;
      particles.push({
        x: width / 2,
        y: height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 2, // Slight float upwards
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: Math.random() * 0.02 + 0.01,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // Gravity
        p.alpha -= p.decay;

        if (p.alpha <= 0) return;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-20 rounded-3xl" />;
}

// --- Main ContactSection Redesign ---
export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Floating background spotlight effect coordinates
  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit request.");
      }

      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Show backup toast notification
      setToast({ message: data.message || "Form submitted successfully!", type: "success" });
      setTimeout(() => setToast(null), 4000);
    } catch (err) {
      setLoading(false);
      const errorMsg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setToast({ message: errorMsg, type: "error" });
      setTimeout(() => setToast(null), 4000);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline triggers when contact is scrolled in
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      });

      // Stagger animations
      tl.fromTo(
        ".contact-reveal-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }
      )
        .fromTo(
          ".contact-form-anim",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          ".contact-3d-anim",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=0.9"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="py-32 bg-[#030303] text-white relative overflow-hidden select-none"
    >
      {/* Top blending transition: FAQ (white) into Contact (black) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-[#030303] pointer-events-none z-20" />

      {/* Three.js Globe in background */}
      <GlobeBackground />

      {/* Directional Glowing Star Field */}
      <StarField />

      {/* Futuristic Background Spotlights & Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Dynamic cursor tracking spotlight */}
        <div
          className="absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,rgba(139,92,246,0.03)_50%,transparent_70%)] blur-[70px] pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePos.x - 250,
            top: mousePos.y - 250,
          }}
        />

        {/* Ambient static blur glow fields */}
        <div className="absolute top-[10%] left-[5%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px] animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute bottom-[10%] right-[5%] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse" style={{ animationDuration: "16s" }} />
        
        {/* Fine digital grid lines overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side Info Panel */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-center self-stretch">
            
            <div className="space-y-6 contact-reveal-title">
              <span className="text-[11px] font-bold text-blue-400 tracking-[0.2em] uppercase bg-blue-500/5 border border-blue-500/10 px-3.5 py-1.5 rounded-full w-fit block shadow-sm">
                Get In Touch
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400">
                Let&rsquo;s Build Next-Gen Systems
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Ready to engineer custom React infrastructure, build scalable cloud architecture, or establish enterprise micro-services? Fill out the portal specs.
              </p>
            </div>

          </div>

          {/* Center Globe Column — only visible on lg+ */}
          <div className="hidden lg:flex lg:col-span-4 items-center justify-center contact-3d-anim" style={{ minHeight: '420px' }}>
            {/* Globe renders as absolute background on lg+ — this spacer keeps the grid balanced */}
          </div>

          {/* Right Side Glassmorphic Portal Form */}
          <div className="lg:col-span-4">
            <div
              ref={formRef}
              className="relative bg-slate-900/95 border border-slate-700/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              
              {/* Interactive soft volumetric internal glow */}
              <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-blue-500/10 blur-[40px] pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form header description */}
                <div className="border-b border-white/[0.04] pb-4 mb-2 contact-form-anim">
                  <h3 className="text-base font-bold text-slate-200">Interactive Project Request</h3>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Please provide specifications for architectural review.</p>
                </div>

                {/* Staggered Input Fields */}
                
                {/* 1. Full Name */}
                <div className="relative border border-white/[0.06] rounded-2xl px-5 pt-6 pb-2 bg-white/[0.01] transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.1)] focus-within:bg-white/[0.02] contact-form-anim">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-0 p-0 text-sm text-slate-200 focus:ring-0 focus:outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-5 top-5 text-[10px] font-bold text-slate-500 pointer-events-none transition-all duration-300 origin-left 
                      peer-placeholder-shown:text-xs peer-placeholder-shown:font-semibold peer-placeholder-shown:translate-y-1 peer-placeholder-shown:text-slate-400
                      peer-focus:text-[10px] peer-focus:font-bold peer-focus:-translate-y-3.5 peer-focus:text-blue-400 
                      peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:-translate-y-3.5"
                  >
                    Full Name
                  </label>
                </div>

                {/* 2. Email Address */}
                <div className="relative border border-white/[0.06] rounded-2xl px-5 pt-6 pb-2 bg-white/[0.01] transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.1)] focus-within:bg-white/[0.02] contact-form-anim">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-0 p-0 text-sm text-slate-200 focus:ring-0 focus:outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-5 top-5 text-[10px] font-bold text-slate-500 pointer-events-none transition-all duration-300 origin-left 
                      peer-placeholder-shown:text-xs peer-placeholder-shown:font-semibold peer-placeholder-shown:translate-y-1 peer-placeholder-shown:text-slate-400
                      peer-focus:text-[10px] peer-focus:font-bold peer-focus:-translate-y-3.5 peer-focus:text-blue-400 
                      peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:-translate-y-3.5"
                  >
                    Email Address
                  </label>
                </div>

                {/* 3. Phone Number */}
                <div className="relative border border-white/[0.06] rounded-2xl px-5 pt-6 pb-2 bg-white/[0.01] transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.1)] focus-within:bg-white/[0.02] contact-form-anim">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-0 p-0 text-sm text-slate-200 focus:ring-0 focus:outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-5 top-5 text-[10px] font-bold text-slate-500 pointer-events-none transition-all duration-300 origin-left 
                      peer-placeholder-shown:text-xs peer-placeholder-shown:font-semibold peer-placeholder-shown:translate-y-1 peer-placeholder-shown:text-slate-400
                      peer-focus:text-[10px] peer-focus:font-bold peer-focus:-translate-y-3.5 peer-focus:text-blue-400 
                      peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:-translate-y-3.5"
                  >
                    Phone Number
                  </label>
                </div>

                {/* 4. Company Name */}
                <div className="relative border border-white/[0.06] rounded-2xl px-5 pt-6 pb-2 bg-white/[0.01] transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.1)] focus-within:bg-white/[0.02] contact-form-anim">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder=" "
                    value={formData.company}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-0 p-0 text-sm text-slate-200 focus:ring-0 focus:outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="company"
                    className="absolute left-5 top-5 text-[10px] font-bold text-slate-500 pointer-events-none transition-all duration-300 origin-left 
                      peer-placeholder-shown:text-xs peer-placeholder-shown:font-semibold peer-placeholder-shown:translate-y-1 peer-placeholder-shown:text-slate-400
                      peer-focus:text-[10px] peer-focus:font-bold peer-focus:-translate-y-3.5 peer-focus:text-blue-400 
                      peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:-translate-y-3.5"
                  >
                    Company Name
                  </label>
                </div>

                {/* 5. Project Spec Message */}
                <div className="relative border border-white/[0.06] rounded-2xl px-5 pt-6 pb-2 bg-white/[0.01] transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.1)] focus-within:bg-white/[0.02] contact-form-anim">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-0 p-0 text-sm text-slate-200 focus:ring-0 focus:outline-none placeholder-transparent resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-5 top-5 text-[10px] font-bold text-slate-500 pointer-events-none transition-all duration-300 origin-left 
                      peer-placeholder-shown:text-xs peer-placeholder-shown:font-semibold peer-placeholder-shown:translate-y-1 peer-placeholder-shown:text-slate-400
                      peer-focus:text-[10px] peer-focus:font-bold peer-focus:-translate-y-3.5 peer-focus:text-blue-400 
                      peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:-translate-y-3.5"
                  >
                    System Specifications / Message
                  </label>
                </div>

                <div className="contact-form-anim pt-2">
                  <MagneticWrapper range={55}>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.015, translateY: -1 }}
                      whileTap={{ scale: 0.985 }}
                      className="relative overflow-hidden flex items-center justify-center w-full px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 disabled:bg-slate-700 disabled:text-slate-500 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer tracking-wide"
                    >
                      {loading ? (
                        <span className="flex items-center space-x-2">
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Get Started</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      )}
                    </motion.button>
                  </MagneticWrapper>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Premium Success Animation Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            
            {/* Dark glass backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubmitted(false)}
              className="absolute inset-0 bg-[#030303]/90 backdrop-blur-md"
            />

            {/* Glassmorphic congratulate popup box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 35 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { type: "spring", stiffness: 350, damping: 26 }
              }}
              exit={{ opacity: 0, scale: 0.85, y: 35 }}
              className="relative bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl backdrop-blur-2xl z-10 text-center overflow-hidden"
            >
              {/* Confetti sparkler burst canvas overlay */}
              <SuccessBlast />

              {/* Soft internal gradient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-36 w-36 rounded-full bg-emerald-500/10 blur-[45px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/[0.03] transition-all z-30"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Glowing check circle icon container */}
              <div className="relative h-20 w-20 mx-auto mb-6 z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.25, 1] }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="h-20 w-20 bg-emerald-500/5 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                >
                  <CheckCircle2 className="h-11 w-11 text-emerald-400" />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-slate-100 mb-3 leading-snug z-10 relative">
                Thank You!
              </h3>
              
              {/* Body */}
              <p className="text-sm text-slate-300 leading-relaxed mb-1 font-light z-10 relative">
                Your message has been submitted successfully.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light z-10 relative">
                Our team will contact you shortly.
              </p>

              {/* Close Button */}
              <button
                onClick={() => setIsSubmitted(false)}
                className="relative z-10 w-full px-6 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300 cursor-pointer"
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

    </section>
  );
}
