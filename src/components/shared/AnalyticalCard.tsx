"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";

interface AnalyticalCardProps {
  initialHeight?: number;
  expandedHeight?: number;
  className?: string;
  containerClassName?: string;
  glowColor?: string; // e.g. "rgba(37,99,235,0.15)" or "rgba(20,184,166,0.15)"
  stableLayout?: boolean; // NEW PROP
  
  // Structured Content Props
  icon?: React.ComponentType<{ className?: string }> | React.ReactNode;
  iconBg?: string; // custom background color for icon container
  iconColor?: string; // custom text color for icon
  title?: string;
  description?: string;
  features?: string[];
  benefits?: string[];
  ctaText?: string;
  ctaHref?: string;
  
  // Blog specific props
  imageSrc?: string;
  category?: string;
  readTime?: string;
  author?: {
    name: string;
    role?: string;
    avatar: string;
  };
  date?: string;
  
  // Custom badges/numbers
  number?: string;
  badge?: string;
  extraContent?: React.ReactNode;

  // Configuration flags
  compact?: boolean; // disables height expansion, displays static content
  children?: React.ReactNode | ((isHovered: boolean) => React.ReactNode);
}

export default function AnalyticalCard({
  initialHeight = 160,
  expandedHeight = 360,
  className = "",
  containerClassName = "",
  glowColor = "rgba(37, 99, 235, 0.12)",
  stableLayout = false,
  icon,
  iconBg,
  iconColor,
  title,
  description,
  features,
  benefits,
  ctaText,
  ctaHref,
  imageSrc,
  category,
  readTime,
  author,
  date,
  number,
  badge,
  extraContent,
  compact = false,
  children,
}: AnalyticalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkViewport = () => setIsDesktop(window.innerWidth >= 1024);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates to range [-0.5, 0.5]
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    
    // Smooth 3D tilt (max 8 degrees)
    setTilt({
      x: -py * 8,
      y: px * 8,
    });
    
    // Specular reflection light position
    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Determine if we render structured layout or children fallback
  const isStructured = title || description || features || benefits || imageSrc;
  const isBlog = !!imageSrc;

  // Card heights - if not provided, fall back to sensible defaults
  const currentInitialHeight = initialHeight;
  const currentExpandedHeight = expandedHeight;

  // If stableLayout is true, height is always currentExpandedHeight to prevent any reflow/layout shifts
  const currentHeight = stableLayout ? currentExpandedHeight : (isHovered && !compact ? currentExpandedHeight : currentInitialHeight);

  // Render Icon helper
  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "function" || React.isValidElement(icon)) {
      if (React.isValidElement(icon)) return icon;
      const IconComponent = icon as React.ComponentType<{ className?: string }>;
      return <IconComponent className="h-5 w-5" />;
    }
    return null;
  };

  // Render standard content helper (shared between Desktop hover and Mobile/Tablet static layouts)
  const renderStructuredContent = (hoverActive: boolean) => {
    return (
      <div className="w-full flex flex-col h-full justify-between z-10">
        <div className="space-y-4">
          
          {/* Watermark Number */}
          {number && (
            <span
              className="absolute top-4 right-5 text-4xl font-black font-mono select-none pointer-events-none transition-all duration-500"
              style={{
                color: hoverActive ? "rgba(37,99,235,0.18)" : "rgba(37,99,235,0.08)",
                transform: hoverActive ? "translateZ(20px) scale(1.05)" : "translateZ(10px)",
              }}
            >
              {number}
            </span>
          )}

          {/* Category / Badge */}
          {badge && (
            <span className="inline-flex items-center gap-1 text-[9px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md self-start">
              <Sparkles className="h-2.5 w-2.5" />
              {badge}
            </span>
          )}

          {/* Header Row: Icon & Title */}
          <div className="flex items-center gap-3">
            {icon && (
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-500"
                style={{
                  background: iconBg || "rgba(37, 99, 235, 0.08)",
                  borderColor: hoverActive ? "rgba(37, 99, 235, 0.25)" : "rgba(37, 99, 235, 0.12)",
                  transform: hoverActive ? "translateZ(25px) scale(1.05)" : "translateZ(10px)",
                  color: iconColor || "#2563EB",
                }}
              >
                {renderIcon()}
              </div>
            )}
            <h3
              className="text-sm font-bold text-slate-800 leading-snug tracking-tight transition-colors duration-300"
              style={{
                transform: hoverActive ? "translateZ(18px)" : "translateZ(5px)",
                color: hoverActive ? "#2563EB" : "#1E293B",
              }}
            >
              {title}
            </h3>
          </div>

          {/* Extra Content (e.g. inline status or quick metric) */}
          {extraContent && (
            <div
              className="transition-all duration-300"
              style={{ transform: hoverActive ? "translateZ(15px)" : "translateZ(5px)" }}
            >
              {extraContent}
            </div>
          )}

          {/* Expandable Area (Framer Motion) */}
          {(compact || !isDesktop) ? (
            // Static content in compact/mobile mode
            <div className="space-y-3.5 mt-2">
              {description && (
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {description}
                </p>
              )}
              {features && features.length > 0 && (
                <ul className="space-y-1.5 pt-1">
                  {features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                      <span className="h-3.5 w-3.5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <Check className="h-2.5 w-2.5 text-blue-600" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
              {benefits && benefits.length > 0 && (
                <ul className="space-y-1.5 pt-1 border-t border-slate-100/80">
                  {benefits.map((ben, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold tracking-wide uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              )}
              {ctaText && ctaHref && (
                <div className="pt-2">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center text-[11px] font-bold text-blue-600 hover:text-blue-700 tracking-wider uppercase group/btn"
                  >
                    {ctaText}
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              )}
            </div>
          ) : (
            // Animated height expand on desktop hover
            <AnimatePresence initial={false}>
              {hoverActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden space-y-3.5 mt-2"
                >
                  {description && (
                    <motion.p
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.05, duration: 0.3 }}
                      className="text-xs text-slate-500 leading-relaxed font-normal"
                    >
                      {description}
                    </motion.p>
                  )}
                  
                  {features && features.length > 0 && (
                    <motion.ul
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="space-y-1.5 pt-1"
                    >
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                          <span className="h-3.5 w-3.5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                            <Check className="h-2.5 w-2.5 text-blue-600" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}

                  {benefits && benefits.length > 0 && (
                    <motion.ul
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                      className="space-y-1.5 pt-1 border-t border-slate-100/80"
                    >
                      {benefits.map((ben, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold tracking-wide uppercase">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}

                  {ctaText && ctaHref && (
                    <motion.div
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="pt-2 border-t border-slate-100/60"
                    >
                      <Link
                        href={ctaHref}
                        className="inline-flex items-center text-[11px] font-bold text-blue-600 hover:text-blue-700 tracking-wider uppercase group/btn"
                      >
                        {ctaText}
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    );
  };

  // Render blog content helper
  const renderBlogContent = (hoverActive: boolean) => {
    return (
      <div className="w-full h-full flex flex-col justify-between overflow-visible relative">
        {/* Image Section */}
        <div
          className="relative w-full h-[195px] rounded-xl overflow-hidden bg-slate-100 shrink-0 mb-4 border border-slate-100"
          style={{ transform: hoverActive ? "scale(1.01)" : "scale(1)", transition: "transform 0.5s ease" }}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={title || "Blog Image"}
              fill
              className="object-cover transition-transform duration-500"
              style={{ transform: hoverActive ? "scale(1.07)" : "scale(1)" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
          {/* Gradient overlay on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500"
            style={{ opacity: hoverActive ? 1 : 0 }}
          />
          {category && (
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[9px] font-bold tracking-wider text-blue-600 uppercase bg-white/95 border border-slate-100 backdrop-blur-md px-2 py-0.5 rounded-md shadow-sm">
                {category}
              </span>
            </div>
          )}
          {readTime && (
            <div className="absolute bottom-3 right-3 z-10">
              <span className="text-[8px] font-semibold text-slate-500 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-slate-100/50 shadow-sm uppercase">
                {readTime}
              </span>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between flex-grow gap-3 pb-3">
          <div className="space-y-2">
            <h3
              className="text-sm font-bold leading-snug line-clamp-2 transition-colors duration-300"
              style={{ color: hoverActive ? "#2563EB" : "#1E293B" }}
            >
              {title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {author && (
            <div className="flex items-center gap-2 py-2 border-t border-slate-100/60">
              <div className="relative h-6 w-6 rounded-full overflow-hidden border border-slate-100 shrink-0">
                <img src={author.avatar} alt={author.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-slate-800 leading-tight">{author.name}</span>
                {date && <span className="text-[8px] font-medium text-slate-400">{date}</span>}
              </div>
            </div>
          )}

          {/* CTA — Always Visible, arrow animates on hover */}
          {ctaHref && (
            <div className="pt-2 border-t border-slate-100/60">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600 hover:text-blue-700 tracking-wider uppercase group/btn"
              >
                {ctaText || "Read Article"}
                <span
                  className="transition-transform duration-300"
                  style={{ transform: hoverActive ? "translateX(4px)" : "translateX(0)" }}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Fallback children contents
  const hoverActive = !isDesktop || isHovered;
  const renderedChildren = typeof children === "function" ? children(hoverActive) : children;

  // Mobile/Tablet Layout (Static fully expanded card)
  if (!isDesktop) {
    return (
      <div
        className={`w-full bg-white/70 border border-slate-200/50 backdrop-blur-xl rounded-3xl p-5 shadow-md flex flex-col justify-start h-auto transition-all ${className}`}
      >
        {isStructured ? (
          isBlog ? renderBlogContent(true) : renderStructuredContent(true)
        ) : (
          renderedChildren
        )}
      </div>
    );
  }

  // Desktop Layout (3D Perspective tilt, light reflection, content reveal)
  return (
    <div
      className={`relative w-full transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${containerClassName}`}
      style={{
        height: currentHeight,
        zIndex: isHovered ? 50 : 1,
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute top-0 left-0 w-full rounded-3xl border border-slate-200/40 backdrop-blur-xl p-[14px] flex flex-col justify-start cursor-pointer origin-top select-none bg-white/40 shadow-lg ${
          isHovered ? "shadow-2xl border-blue-500/30" : "shadow-md"
        } ${className}`}
        style={{
          height: currentHeight,
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${isHovered ? -8 : 0}px) scale(${isHovered ? 1.05 : 1})`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered ? `0 20px 40px -12px ${glowColor}, 0 0 20px -3px rgba(37,99,235,0.04)` : undefined,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Layer 1: Specular Light Reflection Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-3xl"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`,
          }}
        />

        {/* Animated glowing border line */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none p-[1px] bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Layer 2: Floating Inner Panel */}
        <div
          className={`relative z-10 w-full h-full rounded-2xl bg-white/70 border border-white/60 p-5 flex flex-col justify-start transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isHovered ? "shadow-md border-blue-500/10" : "shadow-sm"
          }`}
          style={{
            transform: isHovered ? "translateY(-4px) translateZ(10px)" : "translateY(0px) translateZ(0px)",
          }}
        >
          {isStructured ? (
            isBlog ? renderBlogContent(isHovered) : renderStructuredContent(isHovered)
          ) : (
            renderedChildren
          )}
        </div>
      </div>
    </div>
  );
}
