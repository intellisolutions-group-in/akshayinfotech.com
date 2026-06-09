"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDObject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Get parent bounds
    let width = container.clientWidth || 300;
    let height = container.clientHeight || 300;

    // Scene Setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Objects
    // Torus Knot Geometry
    const geometry = new THREE.TorusKnotGeometry(1.0, 0.35, 150, 20, 2, 3);

    // Glowing Material 1: Physical metallic/glass shader style
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x4f46e5, // Indigo / Deep Blue
      metalness: 0.9,
      roughness: 0.15,
      transmission: 0.6, // Glass-like transmission
      thickness: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      flatShading: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Glowing Material 2: Sci-fi wireframe overlay
    const wireframeGeo = new THREE.TorusKnotGeometry(1.01, 0.352, 150, 20, 2, 3);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6, // Bright Neon Blue
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(wireframe);

    // Volumetric Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);

    // Blue Orbital Point Light
    const blueLight = new THREE.PointLight(0x00f0ff, 4, 15);
    blueLight.position.set(3, 3, 3);
    scene.add(blueLight);

    // Purple Orbital Point Light
    const purpleLight = new THREE.PointLight(0xd946ef, 4, 15);
    purpleLight.position.set(-3, -3, 3);
    scene.add(purpleLight);

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Limit interaction bounds to nearby movements
      mouseRef.current.targetX = x * 0.6;
      mouseRef.current.targetY = y * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth || 300;
      height = containerRef.current.clientHeight || 300;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) / 1000;

      // Slow Idle Rotation
      mesh.rotation.y = elapsedTime * 0.18;
      mesh.rotation.x = elapsedTime * 0.08;

      wireframe.rotation.y = elapsedTime * 0.18;
      wireframe.rotation.x = elapsedTime * 0.08;

      // Mouse Proximity Parallax Rotation offsets
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      mesh.rotation.y += mouseRef.current.x * 0.65;
      mesh.rotation.x -= mouseRef.current.y * 0.65;
      
      wireframe.rotation.y += mouseRef.current.x * 0.65;
      wireframe.rotation.x -= mouseRef.current.y * 0.65;

      // Volumetric point lights orbit path
      blueLight.position.x = Math.sin(elapsedTime * 0.8) * 3;
      blueLight.position.z = Math.cos(elapsedTime * 0.8) * 3;

      purpleLight.position.x = -Math.sin(elapsedTime * 0.6) * 3.5;
      purpleLight.position.z = -Math.cos(elapsedTime * 0.6) * 3.5;

      // Render
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (renderer) {
        renderer.dispose();
      }
      geometry.dispose();
      material.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center min-h-[250px] lg:min-h-[400px]">
      <canvas ref={canvasRef} className="w-full h-full block touch-none pointer-events-none" />
    </div>
  );
}
