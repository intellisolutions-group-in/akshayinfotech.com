"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Cloud, Cpu, Shield, Code } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";

function MagneticWrapper({ children, range = 45 }: { children: React.ReactNode; range?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const distanceX = e.clientX - (left + width / 2);
    const distanceY = e.clientY - (top + height / 2);
    if (Math.sqrt(distanceX ** 2 + distanceY ** 2) < range) {
      setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const leave = () => setPosition({ x: 0, y: 0 });
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mousemove", handleMouseMove); el.removeEventListener("mouseleave", leave); };
  }, []);

  return (
    <motion.div ref={ref} animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}>
      {children}
    </motion.div>
  );
}

function Sparkline({ points, color, fill }: { points: string; color: string; fill: string }) {
  return (
    <svg width="72" height="36" viewBox="0 0 72 36" fill="none" className="shrink-0">
      <defs>
        <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#grad-${color.replace("#", "")})`} />
      <path d={points} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="68" cy="14" r="2" fill={color} />
    </svg>
  );
}

const floatingCards = [
  {
    title: "AI Core Node", metric: "12%", metricLabel: "Neural load", icon: Cpu,
    iconColor: "#3b82f6", iconBg: "rgba(59,130,246,0.10)", iconBorder: "rgba(59,130,246,0.20)",
    cardBorder: "rgba(59,130,246,0.14)", glowShadow: "0 4px 24px rgba(59,130,246,0.07)",
    position: "lg:top-[22%] lg:left-[4%]", floatDuration: 8,
    sparkPoints: "M2 28 L12 22 L22 26 L32 18 L42 20 L52 12 L62 16 L68 14",
    sparkFill: "M2 28 L12 22 L22 26 L32 18 L42 20 L52 12 L62 16 L68 14 L68 36 L2 36Z",
    sparkColor: "#3b82f6", trend: "+2.4%",
  },
  {
    title: "Cloud Infra", metric: "14M/s", metricLabel: "Network ingress", icon: Cloud,
    iconColor: "#6366f1", iconBg: "rgba(99,102,241,0.10)", iconBorder: "rgba(99,102,241,0.20)",
    cardBorder: "rgba(99,102,241,0.14)", glowShadow: "0 4px 24px rgba(99,102,241,0.07)",
    position: "lg:top-[22%] lg:right-[4%]", floatDuration: 9,
    sparkPoints: "M2 30 L12 24 L22 28 L32 16 L42 22 L52 10 L62 18 L68 14",
    sparkFill: "M2 30 L12 24 L22 28 L32 16 L42 22 L52 10 L62 18 L68 14 L68 36 L2 36Z",
    sparkColor: "#6366f1", trend: "+8.1%",
  },
  {
    title: "Cybersecurity", metric: "Secure", metricLabel: "Threat status", icon: Shield,
    iconColor: "#10b981", iconBg: "rgba(16,185,129,0.10)", iconBorder: "rgba(16,185,129,0.20)",
    cardBorder: "rgba(16,185,129,0.14)", glowShadow: "0 4px 24px rgba(16,185,129,0.07)",
    position: "lg:bottom-[24%] lg:left-[4%]", floatDuration: 10,
    sparkPoints: "M2 20 L12 22 L22 18 L32 20 L42 16 L52 18 L62 14 L68 16",
    sparkFill: "M2 20 L12 22 L22 18 L32 20 L42 16 L52 18 L62 14 L68 16 L68 36 L2 36Z",
    sparkColor: "#10b981", trend: "0 threats",
  },
  {
    title: "Edge API GW", metric: "28ms", metricLabel: "Avg latency", icon: Code,
    iconColor: "#a78bfa", iconBg: "rgba(167,139,250,0.10)", iconBorder: "rgba(167,139,250,0.20)",
    cardBorder: "rgba(167,139,250,0.14)", glowShadow: "0 4px 24px rgba(167,139,250,0.07)",
    position: "lg:bottom-[24%] lg:right-[4%]", floatDuration: 7,
    sparkPoints: "M2 26 L12 20 L22 24 L32 14 L42 18 L52 8 L62 12 L68 14",
    sparkFill: "M2 26 L12 20 L22 24 L32 14 L42 18 L52 8 L62 12 L68 14 L68 36 L2 36Z",
    sparkColor: "#a78bfa", trend: "-4ms",
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationStarted = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 16;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Subtle lighting — reduced by ~60%
    scene.add(new THREE.AmbientLight(0x0d1a3a, 0.5));
    const blueLight = new THREE.PointLight(0x3b82f6, 2.4, 28);
    blueLight.position.set(-4, 3, 4);
    scene.add(blueLight);
    const indigoLight = new THREE.PointLight(0x6366f1, 2.0, 22);
    indigoLight.position.set(4, -2, 4);
    scene.add(indigoLight);

    // Central sphere — smaller, subtler emissive
    const coreGeo = new THREE.SphereGeometry(0.75, 48, 48);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x2563eb, emissive: 0x1e40af, emissiveIntensity: 0,
      roughness: 0.08, metalness: 0.92, clearcoat: 1.0, clearcoatRoughness: 0.08,
      transparent: true, opacity: 0,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.scale.set(0, 0, 0);
    scene.add(coreMesh);

    // Ring 1 — reduced opacity target (0.45 not 0.9)
    const ring1Geo = new THREE.TorusGeometry(1.45, 0.022, 16, 120);
    const ring1Mat = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6, emissive: 0x2563eb, emissiveIntensity: 0.5,
      roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    scene.add(ring1);

    // Ring 2 — reduced opacity target (0.35)
    const ring2Geo = new THREE.TorusGeometry(2.0, 0.016, 16, 120);
    const ring2Mat = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1, emissive: 0x4f46e5, emissiveIntensity: 0.4,
      roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 4;
    scene.add(ring2);

    // Network grid — subtle background lines (reduced opacity by 70%)
    const gridGroup = new THREE.Group();
    scene.add(gridGroup);
    const gridMat = new THREE.LineBasicMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.035 });

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
      const pts = [
        new THREE.Vector3(Math.cos(angle) * 1.6, Math.sin(angle) * 1.6, -0.5),
        new THREE.Vector3(Math.cos(angle) * 4.5 + (Math.random() - 0.5) * 1.2, Math.sin(angle) * 4.5 + (Math.random() - 0.5) * 1.2, -0.5),
      ];
      gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat));
    }

    // Sparse node dots on grid lines (3 tracers max)
    const tracers: { mesh: THREE.Mesh; t: number; speed: number; from: THREE.Vector3; to: THREE.Vector3 }[] = [];
    const tracerGeo = new THREE.SphereGeometry(0.035, 6, 6);
    const tracerMat = new THREE.MeshBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0 });
    const gridLines = gridGroup.children as THREE.Line[];

    for (let i = 0; i < 3; i++) {
      const line = gridLines[i * 2];
      if (!line) continue;
      const posArr = line.geometry.attributes.position.array as Float32Array;
      const from = new THREE.Vector3(posArr[0], posArr[1], posArr[2]);
      const to = new THREE.Vector3(posArr[3], posArr[4], posArr[5]);
      const mesh = new THREE.Mesh(tracerGeo, tracerMat);
      scene.add(mesh);
      tracers.push({ mesh, t: Math.random(), speed: 0.003 + Math.random() * 0.004, from, to });
    }

    // Reveal timeline
    const triggerReveal = () => {
      if (animationStarted.current) return;
      animationStarted.current = true;
      const tl = gsap.timeline();

      tl.to(camera.position, { z: 7.5, duration: 2.2, ease: "power4.out" }, 0);
      tl.to(coreMat, { opacity: 0.92, duration: 1.1, ease: "power3.out" }, 0.1);
      tl.to(coreMesh.scale, { x: 1, y: 1, z: 1, duration: 1.1, ease: "back.out(1.3)" }, 0.1);
      tl.to(coreMat, { emissiveIntensity: 0.55, duration: 1.1, ease: "power2.out" }, 0.1);

      tl.to(ring1Mat, { opacity: 0.45, duration: 0.6, ease: "power2.out" }, 1.2);
      tl.to(ring2Mat, { opacity: 0.35, duration: 0.6, ease: "power2.out" }, 1.6);

      tl.to(tracerMat, { opacity: 0.55, duration: 0.8, ease: "power2.out" }, 2.0);

      tl.to(".hero-tagline", { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, 2.6);
      tl.to(".hero-word", { y: 0, opacity: 1, duration: 0.7, stagger: 0.035, ease: "power2.out" }, 2.85);
      tl.to(".hero-desc", { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 3.7);
      tl.to(".hero-ctas", { scale: 1, opacity: 1, y: 0, duration: 0.55, ease: "back.out(1.4)" }, 4.2);
      tl.to(".floating-card", {
        scale: 1, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out",
        onComplete: () => {
          gsap.to(".hero-content-float", { y: -5, duration: 5.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
        },
      }, 4.7);
    };

    if (typeof window !== "undefined" && (window as unknown as { preloaderComplete?: boolean }).preloaderComplete) {
      triggerReveal();
    } else {
      window.addEventListener("preloader-complete", triggerReveal);
    }
    const fallback = setTimeout(triggerReveal, 4500);

    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMouseMove);

    const startTime = performance.now();
    let rafId: number;

    const tick = () => {
      const t = (performance.now() - startTime) / 1000;
      ring1.rotation.y = t * 0.18;
      ring1.rotation.x = t * 0.09;
      ring2.rotation.x = Math.PI / 4 - t * 0.12;
      ring2.rotation.y = t * 0.10;
      coreMesh.rotation.y = -t * 0.06;
      coreMesh.rotation.z = t * 0.03;

      if (animationStarted.current) {
        coreMat.emissiveIntensity = 0.45 + Math.sin(t * 0.7) * 0.12;
      }

      tracers.forEach((tr) => {
        tr.t += tr.speed;
        if (tr.t > 1) tr.t = 0;
        tr.mesh.position.lerpVectors(tr.from, tr.to, tr.t);
      });

      camera.position.x += (mouseX * 0.25 - camera.position.x) * 0.025;
      camera.position.y += (-mouseY * 0.25 - camera.position.y) * 0.025;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("preloader-complete", triggerReveal);
      clearTimeout(fallback);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, [isMounted]);

  if (!isMounted) {
    return <section className="relative w-full h-screen bg-[#050814]" />;
  }

  const titleText = "Architecting The Future of Enterprise Systems";

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#050814] text-white overflow-hidden py-24 select-none"
    >
      {/* Minimal background gradients — reduced 70% */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(37,99,235,0.06)_0%,transparent_65%)] pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050814] to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050814] to-transparent pointer-events-none z-[1]" />

      {/* WebGL Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[2] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="hero-content-float w-full flex flex-col items-center">

          {/* Tagline badge */}
          <div className="hero-tagline translate-y-3 opacity-0 inline-flex items-center gap-2 bg-blue-950/30 border border-blue-800/30 px-4 py-1.5 rounded-full text-[11px] font-semibold text-blue-400/90 mb-7 backdrop-blur-sm tracking-widest uppercase">
            <Sparkles className="h-3 w-3 text-blue-500" />
            <span>Enterprise Technology Platform</span>
          </div>

          {/* Heading — primary visual element */}
          <h1 className="text-4xl sm:text-5xl md:text-[4.25rem] font-extrabold tracking-tight leading-[1.06] mb-6 max-w-4xl">
            {titleText.split(" ").map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-[0.28em]">
                <span className="hero-word inline-block translate-y-8 opacity-0 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="hero-desc opacity-0 translate-y-4 text-sm sm:text-base md:text-[1.05rem] text-slate-400 leading-relaxed mb-10 max-w-xl font-normal">
            We engineer high-fidelity software ecosystems, cloud infrastructure, and custom AI solutions built to scale enterprise workloads securely.
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas opacity-0 scale-95 translate-y-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticWrapper>
              <Link
                href="/contact"
                className="relative flex items-center justify-center px-8 py-3.5 text-[13px] font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:-translate-y-px transition-all w-[220px] sm:w-auto group tracking-wide shadow-[0_4px_16px_rgba(37,99,235,0.22)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.32)]"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link
                href="#services"
                className="flex items-center justify-center px-8 py-3.5 text-[13px] font-semibold text-slate-300 bg-white/[0.04] border border-white/10 rounded-xl hover:border-white/20 hover:text-white hover:bg-white/[0.07] hover:-translate-y-px transition-all w-[220px] sm:w-auto tracking-wide backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </MagneticWrapper>
          </div>
        </div>
      </div>

      {/* Desktop Floating Cards */}
      {floatingCards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div key={idx} className={`floating-card opacity-0 scale-90 hidden lg:block absolute ${card.position} z-20`}>
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: card.floatDuration, repeat: Infinity, ease: "easeInOut", delay: idx * 0.7 }}
              style={{
                background: "rgba(7,12,32,0.72)",
                border: `1px solid ${card.cardBorder}`,
                boxShadow: card.glowShadow,
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
              className="rounded-2xl p-3.5 w-[220px] hover:scale-[1.02] transition-transform duration-300 cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    style={{ background: card.iconBg, border: `1px solid ${card.iconBorder}` }}
                    className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                  >
                    <Icon style={{ color: card.iconColor }} className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wide" style={{ color: card.iconColor }}>{card.title}</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">{card.metricLabel}</p>
                  </div>
                </div>
                <span
                  style={{ color: card.iconColor, background: card.iconBg, border: `1px solid ${card.iconBorder}` }}
                  className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
                >
                  {card.trend}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-[1.35rem] font-bold text-white tracking-tight leading-none">{card.metric}</span>
                <Sparkline points={card.sparkPoints} color={card.sparkColor} fill={card.sparkFill} />
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Mobile Cards Grid */}
      <div className="lg:hidden grid grid-cols-2 gap-3 mt-12 w-full max-w-lg px-5 z-20">
        {floatingCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              style={{
                background: "rgba(7,12,32,0.75)",
                border: `1px solid ${card.cardBorder}`,
                boxShadow: card.glowShadow,
                backdropFilter: "blur(14px)",
              }}
              className="rounded-xl p-3"
            >
              <div
                style={{ background: card.iconBg, border: `1px solid ${card.iconBorder}` }}
                className="h-7 w-7 rounded-md flex items-center justify-center mb-2"
              >
                <Icon style={{ color: card.iconColor }} className="h-3.5 w-3.5" />
              </div>
              <p className="text-[9px] font-semibold tracking-wide mb-0.5" style={{ color: card.iconColor }}>{card.title}</p>
              <p className="text-base font-bold text-white leading-none">{card.metric}</p>
              <p className="text-[8px] text-slate-500 mt-0.5">{card.metricLabel}</p>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#070B19] to-transparent pointer-events-none z-10" />
    </section>
  );
}
