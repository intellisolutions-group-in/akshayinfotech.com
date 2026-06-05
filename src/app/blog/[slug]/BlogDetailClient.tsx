"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Calendar, User, Clock, ChevronRight, 
  BookOpen, Sparkles, Check, CheckCircle2, Copy, HelpCircle
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { BlogPost } from "../blogData";


// Animated Particle Background for Blog Details
function DetailsParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const count = 20;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedY: -Math.random() * 0.15 - 0.05,
        opacity: Math.random() * 0.25 + 0.1,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y += p.speedY;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${p.opacity})`;
        ctx.fill();
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

// Code block with copy button
function CodeBlock({ code, language, caption }: { code: string; language: string; caption: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 border border-white/10 rounded-2xl overflow-hidden bg-slate-950/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/40 text-[10px] font-mono text-slate-400">
        <span>{language.toUpperCase()} • {caption}</span>
        <button onClick={handleCopy} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
          {copied ? <Check className="h-3 w-3 text-cyan-400" /> : <Copy className="h-3 w-3" />}
          <span>{copied ? "Copied" : "Copy Code"}</span>
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-xs text-left text-cyan-400/90 font-mono leading-relaxed bg-[#020308]/60">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Technical Diagram Visual Component (CSS Flowchart)
function ArchitectureDiagram() {
  return (
    <div className="my-10 p-6 border border-white/10 rounded-3xl bg-slate-900/20 backdrop-blur-md text-center relative overflow-hidden">
      <div className="absolute top-2 right-4 text-[9px] font-mono text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded">
        SYSTEM DIAGRAM
      </div>
      <h5 className="text-xs font-bold text-slate-355 tracking-wider uppercase mb-6">
        Architectural Flow Layout
      </h5>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-xl mx-auto py-2">
        
        {/* Node 1 */}
        <div className="bg-slate-950 border border-blue-500/30 px-4 py-3 rounded-xl shadow-lg relative min-w-[130px]">
          <div className="h-2 w-2 rounded-full bg-blue-500 absolute -top-1 -left-1 animate-pulse" />
          <p className="text-[10px] font-mono text-blue-400 font-bold uppercase">Source / Ingress</p>
          <p className="text-xs text-slate-200 mt-1 font-bold">Client Traffic</p>
        </div>

        {/* Arrow 1 */}
        <div className="h-6 w-0.5 md:h-0.5 md:w-8 bg-blue-500/40 relative">
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
        </div>

        {/* Node 2 */}
        <div className="bg-slate-950 border border-cyan-500/30 px-4 py-3 rounded-xl shadow-lg relative min-w-[130px]">
          <div className="h-2 w-2 rounded-full bg-cyan-500 absolute -top-1 -left-1 animate-pulse" />
          <p className="text-[10px] font-mono text-cyan-400 font-bold uppercase">Processing Gateway</p>
          <p className="text-xs text-slate-200 mt-1 font-bold">Akshay Systems</p>
        </div>

        {/* Arrow 2 */}
        <div className="h-6 w-0.5 md:h-0.5 md:w-8 bg-cyan-500/40 relative">
          <div className="h-1.5 w-1.5 rounded-full bg-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
        </div>

        {/* Node 3 */}
        <div className="bg-slate-950 border border-purple-500/30 px-4 py-3 rounded-xl shadow-lg relative min-w-[130px]">
          <div className="h-2 w-2 rounded-full bg-purple-500 absolute -top-1 -left-1 animate-pulse" />
          <p className="text-[10px] font-mono text-purple-400 font-bold uppercase">Database Layer</p>
          <p className="text-xs text-slate-200 mt-1 font-bold">Global Data Cluster</p>
        </div>

      </div>

      <p className="text-[10px] text-slate-500 font-mono mt-6 leading-relaxed max-w-md mx-auto">
        Figure 1.1: Visualizing real-time request paths resolving through Akshay edge gateways down to secure clustered databases.
      </p>
    </div>
  );
}

export default function BlogDetailClient({ post, relatedPosts }: { post: BlogPost; relatedPosts: BlogPost[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Reading progress scroll hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  // 1. Documentation Layout
  const renderDocumentationLayout = () => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
      <div className="lg:col-span-3 hidden lg:block sticky top-24 h-fit text-left">
        <h5 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Documentation Menu</h5>
        <ul className="space-y-3.5 text-xs text-slate-450 border-l border-white/5 pl-4 font-light">
          <li className="hover:text-cyan-400 transition-colors"><a href="#intro">Introduction Brief</a></li>
          {post.sections.map((sec, idx) => (
            <li key={idx} className="hover:text-cyan-400 transition-colors">
              <a href={`#sec-${idx}`}>{sec.title}</a>
            </li>
          ))}
          {post.comparisonTable && <li className="hover:text-cyan-400 transition-colors"><a href="#comparison">Telemetry Matrix</a></li>}
          {post.codeSnippet && <li className="hover:text-cyan-400 transition-colors"><a href="#code">Code Blueprint</a></li>}
        </ul>
      </div>

      <div className="lg:col-span-9 space-y-8 text-left">
        <div id="intro" className="space-y-4">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light first-letter:text-5xl first-letter:font-black first-letter:text-cyan-400 first-letter:float-left first-letter:mr-2">
            {post.introduction}
          </p>
        </div>

        <ArchitectureDiagram />

        {post.sections.map((sec, idx) => (
          <div key={idx} id={`sec-${idx}`} className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-xl font-bold text-white tracking-tight">{sec.title}</h3>
            {sec.paragraphs.map((p, pidx) => (
              <p key={pidx} className="text-sm sm:text-base text-slate-450 leading-relaxed font-light">{p}</p>
            ))}
          </div>
        ))}

        {post.comparisonTable && (
          <div id="comparison" className="pt-8 border-t border-white/5">
            <h3 className="text-xl font-bold text-white mb-6">Metrics & Performance Comparison</h3>
            <div className="overflow-x-auto border border-white/10 rounded-2xl bg-slate-950/40">
              <table className="min-w-full divide-y divide-white/5 text-left text-xs sm:text-sm">
                <thead className="bg-slate-900/50 text-slate-400">
                  <tr>
                    {post.comparisonTable.headers.map((h, idx) => (
                      <th key={idx} className="px-6 py-4 font-semibold uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-350">
                  {post.comparisonTable.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.01]">
                      {row.map((cell, cidx) => (
                        <td key={cidx} className="px-6 py-4 font-light">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {post.codeSnippet && (
          <div id="code" className="pt-8 border-t border-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Implementation Syntax</h3>
            <CodeBlock 
              code={post.codeSnippet.code} 
              language={post.codeSnippet.language} 
              caption={post.codeSnippet.caption} 
            />
          </div>
        )}
      </div>
    </div>
  );

  // 2. Dashboard Layout
  const renderDashboardLayout = () => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 space-y-10 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {post.stats.map((st, idx) => (
          <div key={idx} className="bg-slate-900/60 border border-cyan-500/20 p-6 rounded-2xl shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 h-16 w-16 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
            <span className="text-[10px] font-mono text-cyan-400 block uppercase mb-1">{st.label}</span>
            <div className="text-3xl font-black text-white">{st.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-slate-900/30 border border-white/5 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">1. Executive Overview</h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">{post.introduction}</p>
          </div>

          <ArchitectureDiagram />

          {post.sections.map((sec, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-white/5 p-8 rounded-3xl backdrop-blur-md space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">{sec.title}</h3>
              {sec.paragraphs.map((p, pidx) => (
                <p key={pidx} className="text-sm text-slate-400 leading-relaxed font-light">{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 space-y-6">
          {post.comparisonTable && (
            <div className="bg-slate-900/60 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
              <h4 className="text-xs font-bold text-slate-300 tracking-wider uppercase mb-4">Operational Benchmarks</h4>
              <div className="space-y-4 text-xs">
                {post.comparisonTable.rows.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-450 font-light">{row[0]}</span>
                    <span className="text-cyan-400 font-bold font-mono">{row[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {post.codeSnippet && (
            <div className="bg-slate-900/60 border border-white/10 p-4 rounded-3xl backdrop-blur-md">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">Code Config</span>
              <pre className="text-[10px] text-cyan-300 font-mono p-3 bg-slate-950/80 rounded-xl overflow-x-auto">
                <code>{post.codeSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // 3. Magazine Layout
  const renderMagazineLayout = () => (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8 text-left space-y-8">
      <div className="border-l-4 border-cyan-400 pl-6 py-2">
        <p className="text-lg sm:text-xl text-slate-200 italic leading-relaxed font-light">
          &ldquo;{post.introduction}&rdquo;
        </p>
      </div>

      <ArchitectureDiagram />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {post.sections.slice(0, 2).map((sec, idx) => (
          <div key={idx} className="space-y-4">
            <span className="text-[10px] font-mono text-cyan-400 block tracking-widest uppercase">EDITORIAL SPEC {idx + 1}</span>
            <h3 className="text-lg font-bold text-white">{sec.title}</h3>
            {sec.paragraphs.map((p, pidx) => (
              <p key={pidx} className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{p}</p>
            ))}
          </div>
        ))}
      </div>

      {post.sections.slice(2).map((sec, idx) => (
        <div key={idx} className="space-y-4 pt-6 border-t border-white/5">
          <h3 className="text-lg font-bold text-white">{sec.title}</h3>
          {sec.paragraphs.map((p, pidx) => (
            <p key={pidx} className="text-sm text-slate-400 leading-relaxed font-light">{p}</p>
          ))}
        </div>
      ))}

      {post.comparisonTable && (
        <div className="py-6 border-t border-white/5">
          <h4 className="text-xs font-bold text-cyan-455 tracking-wider uppercase mb-4 text-center">Summary Metric Reference</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {post.comparisonTable.rows.map((row, idx) => (
              <div key={idx} className="border border-white/5 bg-slate-900/30 p-4 rounded-xl">
                <span className="text-[10px] text-slate-500 block uppercase mb-1">{row[0]}</span>
                <span className="text-sm font-bold text-white">{row[1]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {post.codeSnippet && (
        <CodeBlock 
          code={post.codeSnippet.code} 
          language={post.codeSnippet.language} 
          caption={post.codeSnippet.caption} 
        />
      )}
    </div>
  );

  // 4. Bento Grid Layout
  const renderBentoGridLayout = () => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 text-left">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 bg-slate-900/40 border border-white/5 p-8 rounded-3xl shadow-xl backdrop-blur-md flex flex-col justify-between">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-4">Executive Brief</span>
          <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-light">{post.introduction}</p>
          <div className="h-4" />
        </div>

        <div className="md:col-span-4 bg-slate-900/40 border border-white/5 p-6 rounded-3xl shadow-xl backdrop-blur-md grid grid-cols-1 gap-4">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">Core Telemetry</span>
          {post.stats.map((st, idx) => (
            <div key={idx} className="border-b border-white/5 pb-2 last:border-b-0">
              <span className="text-[9px] text-slate-500 block uppercase">{st.label}</span>
              <span className="text-xl font-extrabold text-white">{st.value}</span>
            </div>
          ))}
        </div>

        <div className="md:col-span-12">
          <ArchitectureDiagram />
        </div>

        {post.sections.map((sec, idx) => (
          <div key={idx} className="md:col-span-6 bg-slate-900/40 border border-white/5 p-8 rounded-3xl shadow-xl backdrop-blur-md space-y-4">
            <span className="text-[10px] font-mono text-cyan-505 uppercase tracking-wider block">PHASE 0{idx + 1}</span>
            <h4 className="text-base font-bold text-white">{sec.title}</h4>
            {sec.paragraphs.map((p, pidx) => (
              <p key={pidx} className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{p}</p>
            ))}
          </div>
        ))}

        {post.comparisonTable && (
          <div className="md:col-span-12 bg-slate-900/40 border border-white/5 p-8 rounded-3xl shadow-xl backdrop-blur-md overflow-x-auto">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Summary Statistics Table</h4>
            <table className="min-w-full divide-y divide-white/5 text-[11px] sm:text-xs">
              <thead className="text-slate-450">
                <tr>
                  {post.comparisonTable.headers.map((h, idx) => (
                    <th key={idx} className="pb-3 text-left font-semibold uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-355">
                {post.comparisonTable.rows.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, cidx) => (
                      <td key={cidx} className="py-3 font-light">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

  // 5. Interactive Scroll Layout
  const renderInteractiveScrollLayout = () => (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-8 text-left space-y-16">
      <div className="space-y-4">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">Overview</span>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">{post.introduction}</p>
      </div>

      <ArchitectureDiagram />

      <div className="relative border-l border-cyan-500/20 pl-8 ml-2 space-y-12">
        {post.sections.map((sec, idx) => (
          <div key={idx} className="relative space-y-3">
            <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase block tracking-wider">INTEGRATION GATEWAY STEP 0{idx + 1}</span>
            <h3 className="text-lg font-bold text-white tracking-tight">{sec.title}</h3>
            {sec.paragraphs.map((p, pidx) => (
              <p key={pidx} className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{p}</p>
            ))}
          </div>
        ))}
      </div>

      {post.codeSnippet && (
        <CodeBlock 
          code={post.codeSnippet.code} 
          language={post.codeSnippet.language} 
          caption={post.codeSnippet.caption} 
        />
      )}
    </div>
  );

  // 6. Split Screen Layout
  const renderSplitScreenLayout = () => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 text-left">
      <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit space-y-6 bg-slate-900/40 border border-white/5 p-6 rounded-3xl backdrop-blur-md">
        <span className="text-[10px] font-mono text-cyan-400 uppercase block tracking-widest">Architectural Summary</span>
        <h3 className="text-lg font-bold text-white">{post.title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed font-light">{post.introduction}</p>

        {post.stats && (
          <div className="grid grid-cols-2 gap-4 text-center pt-2">
            {post.stats.map((st, idx) => (
              <div key={idx} className="border border-white/5 bg-slate-950/60 p-3.5 rounded-xl">
                <span className="text-[9px] text-slate-500 block uppercase">{st.label}</span>
                <span className="text-base font-bold text-white">{st.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="lg:col-span-7 space-y-8">
        <ArchitectureDiagram />

        {post.sections.map((sec, idx) => (
          <div key={idx} className="space-y-4 pb-6 border-b border-white/5 last:border-b-0">
            <h4 className="text-base font-bold text-white">{sec.title}</h4>
            {sec.paragraphs.map((p, pidx) => (
              <p key={pidx} className="text-sm text-slate-400 leading-relaxed font-light">{p}</p>
            ))}
          </div>
        ))}

        {post.comparisonTable && (
          <div className="pt-6">
            <h4 className="text-sm font-bold text-white mb-4">Telemetry Matrix</h4>
            <div className="overflow-x-auto border border-white/10 rounded-xl bg-slate-950/60 text-xs">
              <table className="min-w-full divide-y divide-white/5">
                <thead className="text-slate-400">
                  <tr>
                    {post.comparisonTable.headers.map((h, idx) => (
                      <th key={idx} className="px-4 py-3 text-left uppercase font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-350">
                  {post.comparisonTable.rows.map((row, idx) => (
                    <tr key={idx}>
                      {row.map((cell, cidx) => (
                        <td key={cidx} className="px-4 py-3 font-light">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {post.codeSnippet && (
          <CodeBlock 
            code={post.codeSnippet.code} 
            language={post.codeSnippet.language} 
            caption={post.codeSnippet.caption} 
          />
        )}
      </div>
    </div>
  );

  // 7. Timeline Layout
  const renderTimelineLayout = () => (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8 text-left space-y-12">
      <div className="space-y-3">
        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">Overview</span>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">{post.introduction}</p>
      </div>

      <ArchitectureDiagram />

      <div className="relative border-l border-blue-500/20 pl-8 ml-2 space-y-10">
        {post.sections.map((sec, idx) => (
          <div key={idx} className="relative space-y-3">
            <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-blue-600 border border-blue-500 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">{idx + 1}</span>
            </div>
            <h4 className="text-base font-bold text-white tracking-tight">{sec.title}</h4>
            {sec.paragraphs.map((p, pidx) => (
              <p key={pidx} className="text-xs sm:text-sm text-slate-455 leading-relaxed font-light">{p}</p>
            ))}
          </div>
        ))}
      </div>

      {post.codeSnippet && (
        <CodeBlock 
          code={post.codeSnippet.code} 
          language={post.codeSnippet.language} 
          caption={post.codeSnippet.caption} 
        />
      )}
    </div>
  );

  // 8. Sticky Sidebar Layout
  const renderStickySidebarLayout = () => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 text-left">
      <div className="lg:col-span-8 space-y-8">
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-slate-355 leading-relaxed font-light">{post.introduction}</p>
        </div>

        <ArchitectureDiagram />

        {post.sections.map((sec, idx) => (
          <div key={idx} className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-xl font-bold text-white tracking-tight">{sec.title}</h3>
            {sec.paragraphs.map((p, pidx) => (
              <p key={pidx} className="text-sm sm:text-base text-slate-450 leading-relaxed font-light">{p}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">
        <div className="bg-slate-900/60 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-4 text-xs">
          <h5 className="font-bold text-white border-b border-white/5 pb-2 uppercase tracking-widest text-[9px] text-cyan-400">Author Specs</h5>
          <div>
            <p className="text-slate-505 uppercase text-[9px]">Author</p>
            <p className="font-bold text-slate-200 mt-0.5">{post.author}</p>
            <p className="text-[10px] text-cyan-500 font-mono mt-0.5">{post.authorRole}</p>
          </div>
          <div>
            <p className="text-slate-505 uppercase text-[9px]">Publish Specs</p>
            <p className="font-bold text-slate-200 mt-0.5">{post.date} • {post.readTime}</p>
          </div>
        </div>

        {post.comparisonTable && (
          <div className="bg-slate-900/60 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-3 text-xs">
            <h5 className="font-bold text-white border-b border-white/5 pb-2 uppercase tracking-widest text-[9px] text-cyan-400">Quick Metrics</h5>
            {post.comparisonTable.rows.map((row, idx) => (
              <div key={idx} className="flex justify-between items-center py-1">
                <span className="text-slate-400 font-light">{row[0]}</span>
                <span className="text-white font-bold font-mono">{row[1]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // 9. Storytelling Layout
  const renderStorytellingLayout = () => (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-8 text-left space-y-12">
      <div className="space-y-4">
        <p className="text-base sm:text-lg text-slate-250 leading-relaxed font-light italic border-l-2 border-cyan-400 pl-6">
          &ldquo;{post.introduction}&rdquo;
        </p>
      </div>

      <ArchitectureDiagram />

      {post.sections.map((sec, idx) => (
        <div key={idx} className="space-y-4 pt-6">
          <span className="text-[10px] font-mono text-cyan-500 tracking-wider uppercase block">CHAPTER 0{idx + 1}</span>
          <h3 className="text-xl font-bold text-white tracking-tight">{sec.title}</h3>
          {sec.paragraphs.map((p, pidx) => (
            <p key={pidx} className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">{p}</p>
          ))}
        </div>
      ))}

      {post.codeSnippet && (
        <CodeBlock 
          code={post.codeSnippet.code} 
          language={post.codeSnippet.language} 
          caption={post.codeSnippet.caption} 
        />
      )}
    </div>
  );

  // 10. Case Study Layout
  const renderCaseStudyLayout = () => (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-8 text-left space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {post.stats.map((st, idx) => (
          <div key={idx} className="border border-white/5 bg-slate-900/40 p-6 rounded-2xl shadow-xl backdrop-blur-md">
            <span className="text-[9px] text-slate-500 block uppercase font-mono mb-1">{st.label}</span>
            <span className="text-2xl font-bold text-white">{st.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-4 bg-slate-900/20 border border-white/5 p-6 rounded-3xl">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">Project Overview</span>
            <p className="text-sm sm:text-base text-slate-455 leading-relaxed font-light">{post.introduction}</p>
          </div>

          <ArchitectureDiagram />

          {post.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">Outcome Phase 0{idx + 1}</span>
              <h3 className="text-lg font-bold text-white">{sec.title}</h3>
              {sec.paragraphs.map((p, pidx) => (
                <p key={pidx} className="text-sm text-slate-400 leading-relaxed font-light">{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 space-y-6">
          {post.comparisonTable && (
            <div className="bg-slate-900/60 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
              <h4 className="text-xs font-bold text-slate-350 uppercase tracking-wider mb-4">Case Performance Metrics</h4>
              <div className="space-y-4 text-xs">
                {post.comparisonTable.rows.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                    <span className="text-slate-455 font-light">{row[0]}</span>
                    <span className="text-white font-bold font-mono">{row[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {post.codeSnippet && (
            <div className="bg-slate-900/60 border border-white/10 p-4 rounded-3xl backdrop-blur-md">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2 font-bold">Code Sandbox</span>
              <pre className="text-[10px] text-cyan-300 font-mono p-3 bg-slate-950/80 rounded-xl overflow-x-auto">
                <code>{post.codeSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const getLayoutRenderer = () => {
    switch (post.layoutType) {
      case "timeline":
        return renderTimelineLayout();
      case "bento":
        return renderBentoGridLayout();
      case "sticky":
        return renderStickySidebarLayout();
      case "magazine":
        return renderMagazineLayout();
      case "documentation":
        return renderDocumentationLayout();
      case "split":
        return renderSplitScreenLayout();
      case "storytelling":
        return renderStorytellingLayout();
      case "case-study":
        return renderCaseStudyLayout();
      case "dashboard":
        return renderDashboardLayout();
      case "scroll":
        return renderInteractiveScrollLayout();
      default:
        return renderDocumentationLayout();
    }
  };

  return (
    <>
      {/* Back navigation */}
      <div className="mb-8 text-left">
        <Link
          href="/resources/insights"
          className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 group transition-all"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Insights
        </Link>
      </div>

      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 z-[9999] origin-left"
        style={{ scaleX }}
      />

      {/* Floating particles background */}
      <DetailsParticleBackground />

      {/* Hero Header */}
      <header className="text-left space-y-6 max-w-4xl pb-10 border-b border-white/5">
        <span className="bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-cyan-500/20 inline-block">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
          {post.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed font-light">
          {post.desc}
        </p>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-4 border-t border-white/5">
          <div className="flex items-center space-x-1.5">
            <User className="h-4 w-4 text-blue-500" />
            <span>By {post.author} ({post.authorRole})</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Calendar className="h-4 w-4 text-blue-500" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock className="h-4 w-4 text-blue-500" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Render Layout Variant */}
      <div className="py-6">
        {getLayoutRenderer()}
      </div>

      {/* Section Divider with Corporate branding logo integration */}
      <div className="flex items-center justify-center my-16 gap-4">
        <div className="h-px bg-white/5 flex-grow" />
        <img src="/logo-icon.png" alt="Akshay Infotech Icon" className="h-8 w-auto object-contain opacity-70" />
        <div className="h-px bg-white/5 flex-grow" />
      </div>

      {/* Key Takeaways Section */}
      <section className="max-w-4xl mx-auto px-6 py-8 border border-white/10 bg-slate-900/20 rounded-3xl text-left backdrop-blur-md my-10">
        <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          Key Architectural Takeaways
        </h4>
        <ul className="space-y-3">
          {post.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 mr-2 shrink-0 mt-0.5" />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h3 className="text-xl font-bold text-white mb-8 text-left flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-cyan-400" />
          Frequently Asked Questions
        </h3>
        <div className="space-y-4 text-left">
          {post.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border border-white/10 rounded-2xl overflow-hidden bg-slate-900/30 backdrop-blur-md">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <span className="text-blue-400">-</span> : <span className="text-blue-400">+</span>}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 font-light">
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

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-12 border-t border-white/5 text-left">
          <h3 className="text-lg font-bold text-white mb-6">Related Publications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rel, idx) => (
              <Link 
                key={idx} 
                href={`/blog/${rel.slug}`}
                className="p-5 bg-slate-900/30 border border-white/5 rounded-2xl hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[9px] uppercase font-mono text-cyan-400 block">{rel.category}</span>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">{rel.title}</h4>
                </div>
                <span className="text-[9px] font-mono text-slate-500 mt-4 block">By {rel.author}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Custom CTA Section */}
      <section className="max-w-4xl mx-auto text-center mt-12 mb-6">
        <div className="p-8 md:p-12 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-white/10 rounded-3xl text-white shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 h-48 w-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <h4 className="text-xl sm:text-2xl font-bold mb-2">Discuss this system architecture?</h4>
          <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-lg mx-auto font-light leading-relaxed">Book a consultation session with an Akshay Infotech systems engineer to review your legacy backend configurations.</p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 transition-all rounded-xl font-bold text-xs cursor-pointer shadow-lg"
          >
            Consult an Architect
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
