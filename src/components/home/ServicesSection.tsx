"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Code2, BrainCircuit, Cloud, Shield, Smartphone,
  Server, Palette, ArrowUpRight, ArrowRight, Database, Building2
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import AnalyticalCard from "@/components/shared/AnalyticalCard";

// ─── Interfaces ────────────────────────────────────────────────────────────
interface ServiceItem {
  id: string;
  title: string;
  href: string;
  Icon: React.ElementType;
  color: string;
  rgbColor: string;
  metric: string;
  metricLabel: string;
  change: string;
  changeLabel: string;
  positive: boolean;
  chartType: "bar" | "line" | "donut" | "orb";
  description: string;
  features?: string[];
  benefits?: string[];
  chartData?: {
    data: number[];
    labels: string[];
    max: number;
    peakIdx: number;
    tooltipVal: string;
    tooltipChange: string;
    ySuffix?: string;
  };
}

// ─── Services Data ──────────────────────────────────────────────────────────
const services: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Enterprise Web Architectures",
    href: "/services/web-development",
    Icon: Code2,
    color: "#3B82F6",
    rgbColor: "59, 130, 246",
    metric: "99.98%",
    metricLabel: "API Gateway Uptime",
    change: "12ms",
    changeLabel: "Avg Response Time",
    positive: true,
    chartType: "bar",
    description: "Architecting high-performance Next.js systems, headless CMS architectures, and secure, low-latency microservice networks for heavy traffic platforms.",
    features: ["Next.js & React Core", "Headless Content APIs", "Zero-Latency Microservices", "SEO & Performance-Optimized"],
    benefits: ["99.98% API Gateway Uptime", "12ms Avg Response Time"],
    chartData: {
      data: [65, 110, 160, 248, 120],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      max: 300,
      peakIdx: 3,
      tooltipVal: "248 req/s",
      tooltipChange: "↑ 14.8%"
    }
  },
  {
    id: "ai-ml",
    title: "AI & Neural Networks",
    href: "/services/ai-automation",
    Icon: BrainCircuit,
    color: "#14B8A6",
    rgbColor: "20, 184, 166",
    metric: "99.4%",
    metricLabel: "Inference Accuracy",
    change: "<150ms",
    changeLabel: "Pipeline Latency",
    positive: true,
    chartType: "line",
    description: "Deploying production-ready large language models (LLMs), custom classification models, vector search databases, and real-time inference pipelines.",
    features: ["Custom LLM Deployment", "Semantic Vector Search", "Cognitive Agent Workflows", "Production-Ready Inference"],
    benefits: ["99.4% Inference Accuracy", "<150ms Pipeline Latency"],
    chartData: {
      data: [40, 75, 110, 189.5, 150],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      max: 250,
      peakIdx: 3,
      tooltipVal: "$189.5K saved",
      tooltipChange: "↑ 9%",
      ySuffix: "K"
    }
  },
  {
    id: "uiux",
    title: "Human-Centric UI/UX",
    href: "/services/ui-ux-design",
    Icon: Palette,
    color: "#8B5CF6",
    rgbColor: "139, 92, 246",
    metric: "94%",
    metricLabel: "Usability Score (SUS)",
    change: "+48%",
    changeLabel: "Session Retention",
    positive: true,
    chartType: "donut",
    description: "Engineering cohesive design systems, high-fidelity interactive wireframes, and optimized user flows verified by empirical usability studies.",
    features: ["Usability SUS Score Audits", "Custom Token Design Systems", "Interactive SaaS Prototypes", "Accessible WCAG Compliant"],
    benefits: ["94% Usability Score (SUS)", "+48% Session Retention"],
  },
  {
    id: "cyber",
    title: "Zero-Trust Cybersecurity",
    href: "/services/cyber-security",
    Icon: Shield,
    color: "#EF4444",
    rgbColor: "239, 68, 68",
    metric: "0",
    metricLabel: "Critical Penetration Flaws",
    change: "100%",
    changeLabel: "Data Encryption Rate",
    positive: true,
    chartType: "bar",
    description: "Implementing automated web application firewalls, SSL/TLS tunnels, continuous penetration audits, and hardware-level secret key storage.",
    features: ["Continuous Penetration Auditing", "Automated WAF Rules", "Hardware Secret Storage", "Endpoint SSL/TLS Tunnels"],
    benefits: ["0 Critical Security Flaws", "100% End-to-End Encryption"],
    chartData: {
      data: [60, 140, 120, 248, 100],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      max: 300,
      peakIdx: 3,
      tooltipVal: "Blocked",
      tooltipChange: "↓ 22%"
    }
  },
  {
    id: "mobile",
    title: "Cross-Platform Mobile",
    href: "/services/mobile-development",
    Icon: Smartphone,
    color: "#EC4899",
    rgbColor: "236, 72, 153",
    metric: "99.97%",
    metricLabel: "Crash-free Session Rate",
    change: "-42%",
    changeLabel: "Memory Leak incidents",
    positive: true,
    chartType: "line",
    description: "Building native iOS/Android applications with React Native and Flutter, incorporating offline database sync and background thread workers.",
    features: ["React Native & Flutter Base", "Offline-First Sync Engine", "Thread Workers & Sync", "Automated Play Store Pipelines"],
    benefits: ["99.97% Crash-free Session Rate", "-42% Memory Leak incidents"],
    chartData: {
      data: [25, 45, 38, 72, 60],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      max: 100,
      peakIdx: 3,
      tooltipVal: "42 apps",
      tooltipChange: "↓ 12%"
    }
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    href: "/services/cloud-solutions",
    Icon: Cloud,
    color: "#3B82F6",
    rgbColor: "59, 130, 246",
    metric: "99.99%",
    metricLabel: "Node Orchestration Uptime",
    change: "-35%",
    changeLabel: "Infrastructure Cost",
    positive: true,
    chartType: "orb",
    description: "Designing elastic AWS/GCP serverless architectures, custom event routing systems, and auto-replicating globally distributed databases.",
    features: ["Multi-Region Kubernetes", "CI/CD Orchestration Pipelines", "Terraform IaC Configurations", "Automatic Scaling Groups"],
    benefits: ["99.99% Node Orchestration Uptime", "-35% Infrastructure Cost"],
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    href: "/services/it-consulting",
    Icon: Building2,
    color: "#0891B2",
    rgbColor: "8, 145, 178",
    metric: "87%",
    metricLabel: "Workflow Efficiency Gain",
    change: "+3.2x",
    changeLabel: "ROI Multiplier",
    positive: true,
    chartType: "bar",
    description: "End-to-end enterprise software transformation—from ERP integrations to custom SaaS platforms and digital workforce automation strategies.",
    features: ["Custom ERP & CRM Integrations", "Enterprise API Architecture", "Legacy System Modernization", "Digital Transformation Consulting"],
    benefits: ["87% Workflow Efficiency Gain", "+3.2x ROI Multiplier"],
    chartData: {
      data: [55, 90, 130, 210, 160],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      max: 280,
      peakIdx: 3,
      tooltipVal: "$210K saved",
      tooltipChange: "↑ 18.5%"
    }
  },
  {
    id: "data-analytics",
    title: "Data Analytics & AI",
    href: "/services/ai-automation",
    Icon: Database,
    color: "#14B8A6",
    rgbColor: "20, 184, 166",
    metric: "4.8B+",
    metricLabel: "Data Points Processed",
    change: "<50ms",
    changeLabel: "Query Latency",
    positive: true,
    chartType: "line",
    description: "Real-time data pipelines, predictive analytics dashboards, and automated reporting engines powered by machine learning and event-driven architectures.",
    features: ["Real-Time ETL Pipelines", "Predictive ML Models", "Interactive BI Dashboards", "Automated Data Governance"],
    benefits: ["4.8B+ Data Points Processed", "<50ms Query Latency"],
    chartData: {
      data: [30, 60, 95, 175, 140],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      max: 220,
      peakIdx: 3,
      tooltipVal: "175K events/s",
      tooltipChange: "↑ 22%",
      ySuffix: "K"
    }
  }
];

// ─── Smooth Spline Bezier Path Generator ────────────────────────────────────
const getCurvePath = (pts: { x: number; y: number }[]) => {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const cpX1 = p0.x + (p1.x - p0.x) / 2;
    const cpY1 = p0.y;
    const cpX2 = p0.x + (p1.x - p0.x) / 2;
    const cpY2 = p1.y;
    d += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
  }
  return d;
};

// ─── Holographic Base Projector ─────────────────────────────────────────────
function HolographicBase({ color }: { color: string }) {
  return (
    <div className="absolute bottom-[-10px] left-0 right-0 h-[45px] pointer-events-none overflow-hidden select-none z-0">
      {/* Light cone projecting upward */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] h-[40px] opacity-10"
        style={{
          background: `linear-gradient(to top, ${color} 0%, transparent 100%)`,
          clipPath: `polygon(15% 100%, 85% 100%, 50% 0%)`,
        }}
      />
      {/* Glow gradient overlay */}
      <div 
        className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[160px] h-[25px] opacity-45 blur-md rounded-[50%]"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`
        }}
      />
      {/* SVG Concentric Rings */}
      <svg className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[140px] h-[20px] overflow-visible" viewBox="0 0 100 20">
        <ellipse cx="50" cy="10" rx="45" ry="6" fill="none" stroke={color} strokeWidth="0.5" strokeOpacity="0.25" />
        <ellipse cx="50" cy="10" rx="30" ry="4" fill="none" stroke={color} strokeWidth="0.8" strokeOpacity="0.45" />
        <ellipse cx="50" cy="10" rx="15" ry="2" fill="none" stroke={color} strokeWidth="1.2" strokeOpacity="0.75" />
        <ellipse cx="50" cy="10" rx="5" ry="0.7" fill={color} fillOpacity="0.9" />
      </svg>
    </div>
  );
}

// ─── Bar Chart ──────────────────────────────────────────────────────────────
interface BarChartProps {
  data: number[];
  labels: string[];
  max: number;
  peakIdx: number;
  tooltipVal: string;
  tooltipChange: string;
  color: string;
}

function BarChart({ data, labels, max, peakIdx, tooltipVal, tooltipChange, color }: BarChartProps) {
  const w = 240, h = 90;
  const pl = 25, pr = 5, pt = 15, pb = 15;
  const cw = w - pl - pr;
  const ch = h - pt - pb;
  
  return (
    <svg className="w-full h-[95px] overflow-visible" viewBox={`0 0 ${w} ${h}`}>
      <defs>
        {data.map((val, idx) => {
          const isPeak = idx === peakIdx;
          const gradId = `bar-grad-${idx}-${color.replace("#","")}`;
          return (
            <linearGradient id={gradId} key={idx} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isPeak ? "#FFFFFF" : color} stopOpacity={isPeak ? "1" : "0.95"} />
              <stop offset="20%" stopColor={color} stopOpacity="0.9" />
              <stop offset="100%" stopColor={color} stopOpacity="0.1" />
            </linearGradient>
          );
        })}
      </defs>
      
      {/* Grid lines */}
      {[0, 50, 100, 150, 200, 250, 300].map((val, idx) => {
        const scaleVal = Math.round((val / 300) * max);
        const y = pt + ch - (scaleVal / max) * ch;
        return (
          <g key={idx} opacity="0.12">
            <line x1={pl} y1={y} x2={w - pr} y2={y} stroke="white" strokeWidth="0.5" strokeDasharray="1 3" />
            <text x={pl - 4} y={y + 2.5} textAnchor="end" fontSize="6.5" fill="white" opacity="0.6">{scaleVal}</text>
          </g>
        );
      })}
      
      {/* Bars as 3D Cylindrical Rounded Capsules */}
      {data.map((val, idx) => {
        const slotW = cw / data.length;
        const barW = 10;
        const barH = (val / max) * ch;
        const x = pl + idx * slotW + (slotW - barW) / 2;
        const y = pt + ch - barH;
        const isPeak = idx === peakIdx;
        const gradId = `bar-grad-${idx}-${color.replace("#","")}`;
        
        return (
          <g key={idx}>
            <rect 
              x={x} 
              y={y} 
              width={barW} 
              height={barH} 
              rx={barW / 2} 
              ry={barW / 2}
              fill={`url(#${gradId})`}
              style={{
                transition: "all 0.3s ease",
                filter: isPeak ? `drop-shadow(0 0 5px ${color}ff)` : `drop-shadow(0 0 2px ${color}33)`
              }}
            />
            {isPeak && (
              <>
                <line x1={x + barW / 2} y1={y} x2={x + barW / 2} y2={y - 12} stroke={color} strokeWidth="0.8" strokeDasharray="1.5 1.5" />
                <g transform={`translate(${x + barW / 2 - 25}, ${y - 25})`}>
                  <rect width="50" height="13" rx="3" fill="#0A0F24" stroke={color} strokeWidth="0.8" />
                  <text x="25" y="8.5" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="bold">
                    {tooltipVal} <tspan fill={color} fontSize="5.5">{tooltipChange}</tspan>
                  </text>
                </g>
              </>
            )}
            <text x={pl + idx * slotW + slotW / 2} y={h - 3} textAnchor="middle" fontSize="6.5" fill="white" opacity="0.3">
              {labels[idx]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Area Line Chart ────────────────────────────────────────────────────────
interface AreaLineChartProps {
  data: number[];
  labels: string[];
  max: number;
  peakIdx: number;
  tooltipVal: string;
  tooltipChange: string;
  color: string;
  ySuffix?: string;
}

function AreaLineChart({ data, labels, max, peakIdx, tooltipVal, tooltipChange, color, ySuffix="" }: AreaLineChartProps) {
  const w = 240, h = 90;
  const pl = 25, pr = 5, pt = 15, pb = 15;
  const cw = w - pl - pr;
  const ch = h - pt - pb;
  
  const getX = (idx: number) => pl + (idx / (data.length - 1)) * cw;
  const getY = (val: number) => pt + ch - (val / max) * ch;
  
  const pts = data.map((val, idx) => ({ x: getX(idx), y: getY(val) }));
  const pathD = getCurvePath(pts);
  const areaD = `${pathD} L ${pts[pts.length - 1].x} ${pt + ch} L ${pts[0].x} ${pt + ch} Z`;
  
  const gradId = `area-grad-${color.replace("#","")}`;

  return (
    <svg className="w-full h-[95px] overflow-visible" viewBox={`0 0 ${w} ${h}`}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      
      {/* Grid lines */}
      {[0, 1, 2, 3, 4, 5].map((idx) => {
        const val = Math.round((idx / 5) * max);
        const y = pt + ch - (val / max) * ch;
        return (
          <g key={idx} opacity="0.12">
            <line x1={pl} y1={y} x2={w - pr} y2={y} stroke="white" strokeWidth="0.5" strokeDasharray="1 3" />
            <text x={pl - 4} y={y + 2.5} textAnchor="end" fontSize="6.5" fill="white" opacity="0.6">{val}{ySuffix}</text>
          </g>
        );
      })}
      
      {/* Filled Area */}
      <path d={areaD} fill={`url(#${gradId})`} />
      
      {/* Line path (Smooth Spline) */}
      <path d={pathD} fill="none" stroke={color} strokeWidth="1.8" style={{ filter: `drop-shadow(0 0 4px ${color}dd)` }} />
      
      {/* Dots and Tooltips */}
      {pts.map((p, idx) => {
        const isPeak = idx === peakIdx;
        
        return (
          <g key={idx}>
            <circle 
              cx={p.x} 
              cy={p.y} 
              r={isPeak ? "3.5" : "2"} 
              fill={isPeak ? "white" : color} 
              stroke={isPeak ? color : "none"}
              strokeWidth={isPeak ? "2" : "0"}
              style={{ filter: isPeak ? `drop-shadow(0 0 4px ${color})` : "none" }}
            />
            {isPeak && (
              <>
                <line x1={p.x} y1={p.y} x2={p.x} y2={p.y - 12} stroke={color} strokeWidth="0.8" strokeDasharray="1.5 1.5" />
                <g transform={`translate(${p.x - 27}, ${p.y - 25})`}>
                  <rect width="54" height="13" rx="3" fill="#0A0F24" stroke={color} strokeWidth="0.8" />
                  <text x="27" y="8.5" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="bold">
                    {tooltipVal} <tspan fill={color} fontSize="5.5">{tooltipChange}</tspan>
                  </text>
                </g>
              </>
            )}
            <text x={p.x} y={h - 3} textAnchor="middle" fontSize="6.5" fill="white" opacity="0.3">
              {labels[idx]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Donut Chart ────────────────────────────────────────────────────────────
function DonutChart({ color }: { color: string }) {
  const cx = 100, cy = 40, r = 26;
  const circ = 2 * Math.PI * r; 
  
  return (
    <div className="w-full flex flex-col items-center">
      <svg className="w-[180px] h-[85px] overflow-visible" viewBox="0 0 200 85">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
        
        {/* UX Design - 48% - Pink */}
        <circle 
          cx={cx} cy={cy} r={r} fill="none" stroke="#F43F5E" strokeWidth="8" 
          strokeDasharray={`${0.48 * circ - 3} ${circ}`} 
          strokeDashoffset={0}
          transform={`rotate(-90 ${cx} ${cy})`}
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 4px rgba(244,63,94,0.6))" }}
        />
        <text x={cx - 10} y={cy + 4} fill="white" fontSize="7.5" fontWeight="bold">48%</text>
 
        {/* Visual Design - 34% - Purple */}
        <circle 
          cx={cx} cy={cy} r={r} fill="none" stroke="#8B5CF6" strokeWidth="8" 
          strokeDasharray={`${0.34 * circ - 3} ${circ}`} 
          strokeDashoffset={-0.48 * circ}
          transform={`rotate(-90 ${cx} ${cy})`}
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 4px rgba(139,92,246,0.6))" }}
        />
        <text x={cx + 10} y={cy + 10} fill="white" fontSize="7" fontWeight="bold">34%</text>
 
        {/* User Research - 18% - Teal */}
        <circle 
          cx={cx} cy={cy} r={r} fill="none" stroke="#14B8A6" strokeWidth="8" 
          strokeDasharray={`${0.18 * circ - 3} ${circ}`} 
          strokeDashoffset={-0.82 * circ}
          transform={`rotate(-90 ${cx} ${cy})`}
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 4px rgba(20,184,166,0.6))" }}
        />
        <text x={cx + 12} y={cy - 6} fill="white" fontSize="6.5" fontWeight="bold">18%</text>
        
        <ellipse cx={cx} cy={cy + 34} rx="40" ry="8" fill="none" stroke={color} strokeWidth="0.5" strokeOpacity="0.15" />
      </svg>
      
      {/* Legend Items */}
      <div className="w-full grid grid-cols-3 gap-1 px-1 mt-1 text-[9px] text-white/50 border-t border-white/5 pt-2">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shrink-0" />
          <span className="truncate">Research</span>
          <span className="ml-auto font-bold text-white/80">18%</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E] shrink-0" />
          <span className="truncate">UX Design</span>
          <span className="ml-auto font-bold text-white/80">48%</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
          <span className="truncate">Visual UI</span>
          <span className="ml-auto font-bold text-white/80">34%</span>
        </div>
      </div>
    </div>
  );
}
 
// ─── Glowing Orb Chart ──────────────────────────────────────────────────────
function GlowingOrbChart({ color }: { color: string }) {
  return (
    <div className="w-full flex flex-col items-center">
      <svg className="w-full h-[95px] overflow-visible" viewBox="0 0 200 95">
        <defs>
          <radialGradient id="orb-grad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#22D3EE" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#0891B2" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#083344" stopOpacity="1" />
          </radialGradient>
          
          <filter id="orb-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
 
        {/* Concentric rings at the base */}
        <ellipse cx="100" cy="80" rx="55" ry="14" fill="none" stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.2" />
        <ellipse cx="100" cy="80" rx="38" ry="10" fill="none" stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.45" />
        <ellipse cx="100" cy="80" rx="20" ry="5" fill="none" stroke="#22D3EE" strokeWidth="1.2" strokeOpacity="0.75" />
 
        {/* Vertical light lines */}
        <line x1="100" y1="15" x2="100" y2="80" stroke="#22D3EE" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="2 2" />
        <line x1="75" y1="35" x2="75" y2="80" stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.12" />
        <line x1="125" y1="35" x2="125" y2="80" stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.12" />
 
        {/* 3D Glowing Orb */}
        <circle cx="100" cy="50" r="24" fill="url(#orb-grad)" filter="url(#orb-glow)" />
        <circle cx="100" cy="50" r="24" fill="none" stroke="#22D3EE" strokeWidth="1.2" strokeOpacity="0.5" />
 
        {/* Text inside the orb */}
        <text x="100" y="47" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">99.9%</text>
        <text x="100" y="56" textAnchor="middle" fontSize="5.5" fontWeight="600" fill="#22D3EE" letterSpacing="0.5">UPTIME</text>
 
        {/* Left and Right labels */}
        <text x="50" y="52" textAnchor="end" fontSize="7.5" fontWeight="bold" fill="#22D3EE">↑ 19%</text>
        <text x="150" y="52" textAnchor="start" fontSize="7.5" fontWeight="bold" fill="#22D3EE">+$1,450</text>
      </svg>
    </div>
  );
}

function ServiceCard({ s, index }: { s: ServiceItem; index: number }) {
  const { Icon } = s;

  return (
    <Link href={s.href} className="block">
      <AnalyticalCard
        initialHeight={420}
        expandedHeight={420}
        stableLayout={true}
        containerClassName={`service-card float-card-${index} w-full cursor-pointer`}
        glowColor={`rgba(${s.rgbColor}, 0.15)`}
      >
        {(isHovered) => (
          <div className="relative w-full h-full flex flex-col justify-between" style={{ transformStyle: "preserve-3d" }}>
            {/* Header row (always visible) */}
            <div className="flex items-center justify-between gap-2 mb-2" style={{ transform: "translateZ(25px)" }}>
              <div className="flex items-center gap-2 min-w-0">
                <div 
                  className="h-8.5 w-8.5 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300"
                  style={{
                    background: isHovered ? `rgba(${s.rgbColor}, 0.15)` : `rgba(${s.rgbColor}, 0.08)`,
                    borderColor: isHovered ? `rgba(${s.rgbColor}, 0.35)` : `rgba(${s.rgbColor}, 0.15)`,
                    boxShadow: isHovered ? `0 0 12px rgba(${s.rgbColor}, 0.2)` : `0 0 8px rgba(${s.rgbColor}, 0.1)`
                  }}
                >
                  <Icon className="h-4.5 w-4.5" style={{ color: s.color }} />
                </div>
                <h3 className="text-[13px] font-bold text-slate-800 transition-colors duration-300 truncate" style={{ color: isHovered ? s.color : "#1E293B" }}>
                  {s.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-slate-100/80 border border-slate-200/50 text-[8px] text-slate-500 font-semibold select-none shrink-0">
                <span>Live Data</span>
              </div>
            </div>

            {/* Content Area */}
            <div
              className="flex-grow flex flex-col justify-between space-y-3 pt-2"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Description */}
              <p className="text-xs text-slate-500 font-normal leading-relaxed" style={{ transform: "translateZ(15px)" }}>
                {s.description}
              </p>

              {/* Metric and Trend */}
              {s.chartType !== "donut" ? (
                <div className="flex items-start justify-between" style={{ transform: "translateZ(20px)" }}>
                  <div>
                    <div className="text-xl font-black text-slate-800 tracking-tight leading-none">{s.metric}</div>
                    <div className="text-[8px] text-slate-400 font-bold mt-1 uppercase tracking-wider">{s.metricLabel}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-700 leading-none">{s.change}</div>
                    <div className="flex items-center justify-end gap-0.5 text-[8px] font-bold mt-1" style={{ color: s.positive ? "#10B981" : "#EF4444" }}>
                      {s.positive ? "↑" : "↓"} {s.changeLabel}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[25px]" />
              )}

              {/* Chart Area */}
              <div 
                className="relative flex-1 flex flex-col justify-end min-h-[90px] mt-auto transition-all duration-300"
                style={{ 
                  transform: isHovered ? "translateZ(30px) scale(1.02)" : "translateZ(15px) scale(1)",
                  opacity: isHovered ? 1 : 0.8
                }}
              >
                {s.chartType === "bar" && s.chartData && (
                  <BarChart 
                    data={s.chartData.data} 
                    labels={s.chartData.labels} 
                    max={s.chartData.max} 
                    peakIdx={s.chartData.peakIdx} 
                    tooltipVal={s.chartData.tooltipVal} 
                    tooltipChange={s.chartData.tooltipChange} 
                    color={s.color} 
                  />
                )}
                {s.chartType === "line" && s.chartData && (
                  <AreaLineChart 
                    data={s.chartData.data} 
                    labels={s.chartData.labels} 
                    max={s.chartData.max} 
                    peakIdx={s.chartData.peakIdx} 
                    tooltipVal={s.chartData.tooltipVal} 
                    tooltipChange={s.chartData.tooltipChange} 
                    color={s.color}
                    ySuffix={s.chartData.ySuffix} 
                  />
                )}
                {s.chartType === "donut" && (
                  <DonutChart color={s.color} />
                )}
                {s.chartType === "orb" && (
                  <GlowingOrbChart color={s.color} />
                )}
              </div>

              {/* Action CTA */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between" style={{ transform: "translateZ(25px)" }}>
                <span className="inline-flex items-center text-[10px] font-bold text-blue-600 hover:text-blue-700 tracking-wider uppercase group/btn">
                  Explore Service
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </span>
              </div>
            </div>
          </div>
        )}
      </AnalyticalCard>
    </Link>
  );
}

// ─── Main Section ───────────────────────────────────────────────────────────
export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      // Step 2: Heading & Badge
      tl.fromTo(".services-badge", 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
      tl.fromTo(".services-title", 
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      );

      // Step 3: Text & View All button
      tl.fromTo(".services-subtext",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
      tl.fromTo(".services-btn",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );

      // Step 4: Cards
      const cards = gridRef.current?.querySelectorAll(".service-card");
      if (cards?.length) {
        tl.fromTo(cards,
          { y: 55, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.0, 
            stagger: 0.12, 
            ease: "power3.out",
          },
          "-=0.2"
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const floatingStyles = `
    @keyframes cardFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    .float-card-0 { animation: cardFloat 7s ease-in-out infinite; }
    .float-card-1 { animation: cardFloat 8s ease-in-out infinite 0.8s; }
    .float-card-2 { animation: cardFloat 7.5s ease-in-out infinite 1.6s; }
    .float-card-3 { animation: cardFloat 8.5s ease-in-out infinite 0.4s; }
    .float-card-4 { animation: cardFloat 6.8s ease-in-out infinite 1.2s; }
    .float-card-5 { animation: cardFloat 7.8s ease-in-out infinite 0.6s; }
    .float-card-6 { animation: cardFloat 7.2s ease-in-out infinite 1.4s; }
    
    /* Disable animations for users who prefer reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .float-card-0, .float-card-1, .float-card-2, .float-card-3, .float-card-4, .float-card-5, .float-card-6 {
        animation: none !important;
      }
    }
  `;

  return (
    <section ref={sectionRef} id="services" className="py-28 overflow-visible relative select-none"
      style={{ background: "linear-gradient(160deg, #070B19 0%, #050814 50%, #03050C 100%)" }}>
      
      {/* Top Blend Transition Overlay */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      {/* Bottom Blend Transition Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#f8faff] to-transparent pointer-events-none z-10" />

      {/* Inject custom card floating styles */}
      <style dangerouslySetInnerHTML={{ __html: floatingStyles }} />

      {/* Colorful ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-emerald-600/5 blur-[110px]" />
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,1) 1px,transparent 1px)", 
            backgroundSize: "40px 40px" 
          }} 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="services-badge opacity-0 inline-flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Core Expertise</span>
            </div>
            <h2 className="services-title opacity-0 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Solutions That Drive<br />
              Your{" "}
              <span style={{
                background: "linear-gradient(135deg, #60A5FA, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Business Forward</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:max-w-md">
            <p className="services-subtext opacity-0 text-sm text-white/50 leading-relaxed flex-1">
              We design and construct premium, high-fidelity digital systems that help market leaders grow, automate, and dominate.
            </p>
            <Link href="/services"
              className="services-btn opacity-0 shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
              View All Services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Responsive Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => <ServiceCard key={s.id} s={s} index={idx} />)}
        </div>
      </div>
    </section>
  );
}
