"use client";

import React from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";

// ─────────────────────────────────────────────
// 1. SCROLL REVEAL - General purpose reveal wrapper
// ─────────────────────────────────────────────
interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.9,
  className,
  once = true,
  amount = 0.15,
  style,
}: ScrollRevealProps) {
  const y = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const x = direction === "left" ? 50 : direction === "right" ? -50 : 0;
  const scale = direction === "scale" ? 0.92 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// 2. STAGGER CONTAINER - Animates children with stagger
// ─────────────────────────────────────────────
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// 3. STAGGER ITEM - Used inside StaggerContainer
// ─────────────────────────────────────────────
interface StaggerItemProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  className?: string;
  duration?: number;
}

export function StaggerItem({
  children,
  direction = "up",
  className,
  duration = 0.8,
}: StaggerItemProps) {
  const y = direction === "up" ? 35 : direction === "down" ? -35 : 0;
  const x = direction === "left" ? 40 : direction === "right" ? -40 : 0;
  const scale = direction === "scale" ? 0.9 : 1;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, x, scale },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// 4. IMAGE REVEAL - Image-specific reveal animations
// ─────────────────────────────────────────────
interface ImageRevealProps {
  children: React.ReactNode;
  variant?: "fade" | "scale" | "slideUp" | "slideLeft" | "slideRight" | "clipReveal";
  className?: string;
  delay?: number;
  duration?: number;
}

export function ImageReveal({
  children,
  variant = "scale",
  className,
  delay = 0,
  duration = 1.0,
}: ImageRevealProps) {
  const animations: Record<string, { initial: Record<string, number | string>; animate: Record<string, number | string> }> = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    scale: {
      initial: { opacity: 0, scale: 1.08 },
      animate: { opacity: 1, scale: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },
    clipReveal: {
      initial: { opacity: 0, clipPath: "inset(10% 10% 10% 10%)" as unknown as string },
      animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" as unknown as string },
    },
  };

  const selected = animations[variant] || animations.scale;

  return (
    <motion.div
      initial={selected.initial as any}
      whileInView={selected.animate as any}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// 5. COUNT UP - Animated number counter
// ─────────────────────────────────────────────
interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  decimals = 0,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000,
  });

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  React.useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toFixed(decimals) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix, prefix, decimals]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

// ─────────────────────────────────────────────
// 6. TEXT REVEAL - Character/word-level animation
// ─────────────────────────────────────────────
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: TextRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      <Tag>
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.6,
                  delay: delay + i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
            style={{ display: "inline-block", marginRight: "0.3em" }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// 7. TABLE REVEAL - Table-specific animation
// ─────────────────────────────────────────────
interface TableRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function TableReveal({ children, className }: TableRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// 8. SECTION REVEAL - Full section wrapper
// ─────────────────────────────────────────────
interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
