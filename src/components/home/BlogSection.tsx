"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import AnalyticalCard from "@/components/shared/AnalyticalCard";

const blogPosts = [
  {
    id: "nextjs-enterprise-architecture",
    title: "Next.js Enterprise Architecture: Building Sub-Second Global Applications",
    excerpt: "A blueprint for scaling Next.js 15 inside enterprise workloads. We analyze Incremental Static Regeneration (ISR), React Server Components (RSC) hydration loops, and distributed edge caching configurations.",
    category: "Engineering",
    image: "/project-1.png",
    readTime: "12 min read",
    href: "/blog/nextjs-enterprise-architecture",
    author: {
      name: "Akshay Patel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "June 2, 2026"
  },
  {
    id: "ai-powered-business-automation",
    title: "AI-Powered Business Automation: Scaling Intelligent Agents in Enterprise",
    excerpt: "A framework for coordinating autonomous AI agents to automate data processing, customer engagement, and transaction flows inside legacy infrastructure.",
    category: "AI",
    image: "/project-3.png",
    readTime: "10 min read",
    href: "/blog/ai-powered-business-automation",
    author: {
      name: "Divya Sharma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "May 30, 2026"
  },
  {
    id: "modern-ui-ux-design-systems",
    title: "Modern UI/UX Design Systems: Tokenized Layouts & Seamless Handoffs",
    excerpt: "How tokenized typography, responsive layouts, and Figma variables accelerate developer handoff, eliminating styling bugs.",
    category: "Design",
    image: "/project-2.png",
    readTime: "9 min read",
    href: "/blog/modern-ui-ux-design-systems",
    author: {
      name: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "May 28, 2026"
  },
];

interface BlogCardProps {
  post: typeof blogPosts[0];
  index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
  return (
    <AnalyticalCard
      initialHeight={500}
      expandedHeight={500}
      stableLayout={true}
      imageSrc={post.image}
      category={post.category}
      readTime={post.readTime}
      title={post.title}
      description={post.excerpt}
      author={post.author}
      date={post.date}
      ctaText="Read Article"
      ctaHref={post.href}
      glowColor="rgba(37,99,235,0.15)"
      containerClassName="w-full"
    />
  );
}

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gridRef.current?.children;
    if (!cards) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      // Step 1: Badge
      tl.fromTo(".blog-badge",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
      
      // Step 2: Title
      tl.fromTo(".blog-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      );

      // Step 3: Subtitle / Excerpt
      tl.fromTo(".blog-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // Step 4: Cards staggered reveal with direction-specific entries and 3D depth
      if (cards.length >= 3) {
        tl.addLabel("cards-start", "-=0.2");
        tl.fromTo(cards[0],
          { x: -80, opacity: 0, transformPerspective: 1000, rotateY: 15 },
          { x: 0, opacity: 1, rotateY: 0, duration: 1.0, ease: "power2.out" },
          "cards-start"
        );
        tl.fromTo(cards[1],
          { y: 80, opacity: 0, transformPerspective: 1000, rotateX: -15 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.1, ease: "power2.out" },
          "cards-start+=0.18"
        );
        tl.fromTo(cards[2],
          { x: 80, opacity: 0, transformPerspective: 1000, rotateY: -15 },
          { x: 0, opacity: 1, rotateY: 0, duration: 1.0, ease: "power2.out" },
          "cards-start+=0.36"
        );
      } else {
        tl.fromTo(cards,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const blogStyles = `
    @keyframes borderFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-border-flow {
      background-size: 200% 200%;
      animation: borderFlow 4s linear infinite;
    }
  `;

  return (
    <section id="blog" ref={sectionRef} className="py-24 pb-48 bg-white relative overflow-hidden">
      {/* Inject styling for border flow */}
      <style dangerouslySetInnerHTML={{ __html: blogStyles }} />

      {/* Background Decorator */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-5%] h-[350px] w-[350px] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[-5%] h-[350px] w-[350px] rounded-full bg-slate-50/70 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Storytelling reveal steps 1, 2, 3) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="blog-badge opacity-0 text-sm font-bold text-primary tracking-wider uppercase bg-blue-50 px-3.5 py-1 rounded-full w-fit mx-auto block mb-3">
            Latest Insights
          </span>
          <h2 className="blog-title opacity-0 text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-4 leading-tight">
            Engineering Reports & Industry Trends
          </h2>
          <p className="blog-subtitle opacity-0 text-base text-text-body">
            Explore deep-dives, updates, and analyses written by our cloud architects, design engineers, and systems developers.
          </p>
        </div>

        {/* Blog Cards Grid: Step 4 */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Centered More Button */}
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white hover:bg-slate-900 transition-all rounded-xl font-bold text-sm shadow-xl shadow-slate-900/10 group border border-white/10"
          >
            More Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
