"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import gsap from "gsap";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING DIGITAL GLOBE ECOSYSTEM...");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }

    const isHomepage = typeof window !== "undefined" && window.location.pathname === "/";
    let fallbackInterval: NodeJS.Timeout;

    if (!isHomepage) {
      // Fast bypass for non-homepage paths
      let current = 0;
      fallbackInterval = setInterval(() => {
        current += 10;
        if (current >= 100) {
          setProgress(100);
          clearInterval(fallbackInterval);
          if (typeof window !== "undefined") {
            (window as unknown as { preloaderComplete?: boolean }).preloaderComplete = true;
            window.dispatchEvent(new Event("preloader-complete"));
          }
          setTimeout(() => setIsVisible(false), 300);
          setTimeout(() => { document.body.style.overflow = ""; }, 500);
        } else {
          setProgress(current);
        }
      }, 25);
    }

    return () => {
      if (fallbackInterval) clearInterval(fallbackInterval);
      document.body.style.overflow = "";
    };
  }, []);

  // 3D WebGL Scene
  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 7.2;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Refined, subtle lighting
    const ambientLight = new THREE.AmbientLight(0x050a18, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(2, 4, 5);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 2.5, 10);
    blueLight.position.set(-2.5, 2.5, 2.5);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 1.8, 10);
    cyanLight.position.set(2.5, -2.5, 2.5);
    scene.add(cyanLight);

    // ── 3D AKSHAY LOGO (Stylized "A" in a Diamond Frame) ─────────────────────
    const logoGroup = new THREE.Group();
    logoGroup.scale.set(0, 0, 0); // Animated by GSAP
    scene.add(logoGroup);

    // Left leg of A
    const leftLeg = new THREE.Shape();
    leftLeg.moveTo(0, 0.42);
    leftLeg.lineTo(-0.36, -0.42);
    leftLeg.lineTo(-0.192, -0.42);
    leftLeg.lineTo(0, 0.024);
    leftLeg.closePath();

    // Right leg of A
    const rightLeg = new THREE.Shape();
    rightLeg.moveTo(0, 0.42);
    rightLeg.lineTo(0.36, -0.42);
    rightLeg.lineTo(0.192, -0.42);
    rightLeg.lineTo(0, 0.024);
    rightLeg.closePath();

    // Floating crossbar of A
    const crossbar = new THREE.Shape();
    crossbar.moveTo(-0.132, -0.096);
    crossbar.lineTo(0.132, -0.096);
    crossbar.lineTo(0.084, 0.0);
    crossbar.lineTo(-0.084, 0.0);
    crossbar.closePath();

    const extrudeSettings = {
      depth: 0.12,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.015,
      bevelThickness: 0.015,
    };

    const leftLegGeo = new THREE.ExtrudeGeometry(leftLeg, extrudeSettings);
    const rightLegGeo = new THREE.ExtrudeGeometry(rightLeg, extrudeSettings);
    const crossbarGeo = new THREE.ExtrudeGeometry(crossbar, extrudeSettings);

    const logoMatLeft = new THREE.MeshPhysicalMaterial({
      color: 0x2563EB,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.2,
      roughness: 0.1,
      metalness: 0.92,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0,
    });

    const logoMatRight = new THREE.MeshPhysicalMaterial({
      color: 0x3B82F6,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.2,
      roughness: 0.1,
      metalness: 0.92,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0,
    });

    const logoMatCross = new THREE.MeshPhysicalMaterial({
      color: 0x22D3EE,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.2,
      roughness: 0.1,
      metalness: 0.92,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0,
    });

    const leftLegMesh = new THREE.Mesh(leftLegGeo, logoMatLeft);
    const rightLegMesh = new THREE.Mesh(rightLegGeo, logoMatRight);
    const crossbarMesh = new THREE.Mesh(crossbarGeo, logoMatCross);

    // Center mesh positions in Z
    leftLegMesh.position.z = -0.06;
    rightLegMesh.position.z = -0.06;
    crossbarMesh.position.z = -0.06;

    logoGroup.add(leftLegMesh);
    logoGroup.add(rightLegMesh);
    logoGroup.add(crossbarMesh);

    // ── 3D DIGITAL GLOBE (Supporting Structure) ──────────────────────────────
    const globeGroup = new THREE.Group();
    globeGroup.scale.set(0.9, 0.9, 0.9);
    scene.add(globeGroup);

    // Globe Base Wireframe Sphere
    const globeRadius = 1.65;
    const sphereGeo = new THREE.SphereGeometry(globeRadius, 20, 20);
    const sphereWireMat = new THREE.MeshBasicMaterial({
      color: 0x1e3a8a,
      wireframe: true,
      transparent: true,
      opacity: 0, // Animated by GSAP
    });
    const baseGlobe = new THREE.Mesh(sphereGeo, sphereWireMat);
    globeGroup.add(baseGlobe);

    // Globe Dots (Fibonacci distribution)
    const dotCount = 80;
    const dotPositions = new Float32Array(dotCount * 3);
    const pointsArr: THREE.Vector3[] = [];
    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotCount);
      const theta = Math.sqrt(dotCount * Math.PI) * phi;
      const x = globeRadius * Math.sin(phi) * Math.cos(theta);
      const y = globeRadius * Math.sin(phi) * Math.sin(theta);
      const z = globeRadius * Math.cos(phi);

      dotPositions[i * 3] = x;
      dotPositions[i * 3 + 1] = y;
      dotPositions[i * 3 + 2] = z;

      pointsArr.push(new THREE.Vector3(x, y, z));
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    const globeDotMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.04,
      transparent: true,
      opacity: 0, // Animated by GSAP
      sizeAttenuation: true,
    });
    const globeDots = new THREE.Points(dotGeo, globeDotMat);
    globeGroup.add(globeDots);

    // Globe Connecting Network Lines
    const lineGeo = new THREE.BufferGeometry();
    const linePos: number[] = [];
    const maxDist = 0.85;
    for (let i = 0; i < dotCount; i++) {
      for (let j = i + 1; j < dotCount; j++) {
        const dist = pointsArr[i].distanceTo(pointsArr[j]);
        if (dist < maxDist) {
          linePos.push(pointsArr[i].x, pointsArr[i].y, pointsArr[i].z);
          linePos.push(pointsArr[j].x, pointsArr[j].y, pointsArr[j].z);
        }
      }
    }
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));
    const globeLineMat = new THREE.LineBasicMaterial({
      color: 0x1d4ed8,
      transparent: true,
      opacity: 0, // Animated by GSAP
    });
    const globeLines = new THREE.LineSegments(lineGeo, globeLineMat);
    globeGroup.add(globeLines);

    // Subtle background grid
    const bgGridGroup = new THREE.Group();
    scene.add(bgGridGroup);
    const bgGridMat = new THREE.LineBasicMaterial({
      color: 0x1e3a8a,
      transparent: true,
      opacity: 0.05,
    });
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const pts = [
        new THREE.Vector3(Math.cos(angle) * 1.8, Math.sin(angle) * 1.8, -0.6),
        new THREE.Vector3(Math.cos(angle) * 4.5, Math.sin(angle) * 4.5, -0.6),
      ];
      bgGridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), bgGridMat));
    }

    // ── STAGED ANIMATION SEQUENCE TIMELINE ───────────────────────────────────
    const isHomepage = typeof window !== "undefined" && window.location.pathname === "/";

    if (isHomepage) {
      const tl = gsap.timeline();

      // STEP 2 & 3: Digital globe forms using network lines and dots
      tl.to(sphereWireMat, { opacity: 0.12, duration: 1.0, ease: "power2.out" }, 0.2);
      tl.to(globeDotMat, { opacity: 0.65, duration: 1.0, ease: "power2.out" }, 0.4);
      tl.to(globeLineMat, { opacity: 0.35, duration: 1.2, ease: "power2.out" }, 0.5);

      // STEP 4: 3D logo appears inside globe (scale 0 -> 100%, 1s duration)
      tl.to(logoGroup.scale, { x: 1, y: 1, z: 1, duration: 1.0, ease: "back.out(1.5)" }, 1.3);
      tl.to([logoMatLeft, logoMatRight, logoMatCross], { opacity: 0.95, duration: 0.8, ease: "power2.out", stagger: 0.05 }, 1.3);

      // STEP 5: Soft glow pulse around logo
      tl.to([logoMatLeft, logoMatRight, logoMatCross], { emissiveIntensity: 0.85, duration: 0.6, yoyo: true, repeat: 1, ease: "power2.inOut", stagger: 0.05 }, 2.0);

      // STEP 6: Company name fades upward
      tl.to(".preloader-title", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 2.3);

      // STEP 7: Tagline appears
      tl.to(".preloader-tagline", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 2.7);

      // STEP 8: Loading bar begins filling (0% -> 100%)
      const progressVal = { value: 0 };
      tl.to(
        progressVal,
        {
          value: 100,
          duration: 3.2,
          ease: "power2.inOut",
          onStart: () => {
            setStatusText("STAGING DIGITAL ENTERPRISE SUITE...");
          },
          onUpdate: () => {
            setProgress(Math.floor(progressVal.value));
            if (progressVal.value > 40 && progressVal.value < 75) {
              setStatusText("SYNCHRONIZING GLOBAL SYSTEM BLUEPRINTS...");
            } else if (progressVal.value >= 75 && progressVal.value < 100) {
              setStatusText("OPTIMIZING THREE.js WORKSPACE GRAPHICS...");
            }
          },
          onComplete: () => {
            setStatusText("STABILIZING WORKSPACE GRAPHICS... COMPLETE.");
          },
        },
        0.8
      );

      // STEP 9 & 10: Entire scene reaches full brightness, then smooth transition out
      tl.to(camera.position, { z: 6.8, duration: 0.8, ease: "power2.out" }, 3.8);
      tl.to([logoMatLeft, logoMatRight, logoMatCross], { emissiveIntensity: 1.1, duration: 0.5, ease: "power2.out" }, 3.8);

      tl.to(
        {},
        {
          duration: 0.5,
          onComplete: () => {
            (window as unknown as { preloaderComplete?: boolean }).preloaderComplete = true;
            window.dispatchEvent(new Event("preloader-complete"));
            setTimeout(() => setIsVisible(false), 500);
            setTimeout(() => { document.body.style.overflow = ""; }, 1000);
          },
        },
        4.1
      );
    }

    // ── Continuous Loop Animation (tick) ────────────────────────────────────
    let rafId: number;
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsed = clock.getElapsedTime();

      // Slowly rotate digital globe: 20s full rotation infinite
      const globeSpeedMultiplier = (Math.PI * 2) / 20;
      globeGroup.rotation.y = elapsed * globeSpeedMultiplier;
      globeGroup.rotation.x = Math.sin(elapsed * 0.15) * 0.08;

      // Inside logo rotates slowly on its own axis for depth/reflections
      logoGroup.rotation.y = -elapsed * 0.22;
      logoGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.1;

      // Render scene
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    tick();

    // Resize Handler
    const onResize = () => {
      if (!canvasRef.current) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      [sphereGeo, dotGeo, lineGeo, leftLegGeo, rightLegGeo, crossbarGeo].forEach((g) => g.dispose());
      [sphereWireMat, globeDotMat, globeLineMat, logoMatLeft, logoMatRight, logoMatCross, bgGridMat].forEach((m) => m.dispose());
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050814] overflow-hidden"
        >
          {/* Subtle background network grid (10% - 15% opacity) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.12)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

          {/* Ambient Glow behind the scene */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
          </div>

          {/* WebGL Canvas centered layer */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block pointer-events-none"
          />

          {/* Content Structure centered perfectly beneath the 3D Scene */}
          <div className="absolute inset-0 flex flex-col items-center justify-between py-16 z-10 pointer-events-none select-none">
            {/* Top offset block to position the 3D globe in center */}
            <div className="h-[40vh] sm:h-[45vh]" />

            {/* Typography Section (Title & Subtitle) */}
            <div className="flex flex-col items-center justify-center text-center px-6 mt-4">
              {/* STEP 6: Company Name */}
              <h1 className="preloader-title opacity-0 translate-y-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.16em] text-white uppercase mb-3 font-sans">
                AKSHAY{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
                  INFOTECH
                </span>
              </h1>

              {/* STEP 7: Tagline */}
              <p className="preloader-tagline opacity-0 translate-y-4 text-xs sm:text-sm text-slate-400 font-light tracking-[0.2em] max-w-lg font-sans">
                Building Intelligent Digital Ecosystems
              </p>
            </div>

            {/* STEP 8: Premium Loading Bar Area */}
            <div className="w-full max-w-md px-8 flex flex-col gap-2.5">
              <div className="flex justify-between items-end text-[9px] font-mono text-slate-500 tracking-wider">
                <span className="truncate max-w-[280px] text-blue-400/80 tracking-widest uppercase">
                  {statusText}
                </span>
                <span className="font-bold text-slate-300">{progress}%</span>
              </div>

              <div className="relative w-full h-[2px] bg-slate-950 rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
