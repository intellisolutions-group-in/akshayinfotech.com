"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollAnimationProvider
 * 
 * Automatically applies scroll-reveal animations to ALL major elements
 * across every page. Uses IntersectionObserver for performance.
 * 
 * Targeted elements:
 * - <section> elements → fade-up
 * - h1, h2, h3 headings → fade-up with stagger
 * - p paragraphs inside sections → fade-up with delay
 * - Images and image containers → scale-in
 * - Tables → fade-up
 * - Cards (common card selectors) → staggered fade-up
 * - Grid children → staggered reveals
 */
export default function ScrollAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let page render before scanning DOM
    const timer = setTimeout(() => {
      applyScrollAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when route changes

  return null; // This component renders nothing
}

function applyScrollAnimations() {
  // Skip elements that are already animated by Framer Motion
  const isFramerAnimated = (el: Element): boolean => {
    return el.hasAttribute("data-framer-appear-id") || 
           el.hasAttribute("style") && (el.getAttribute("style")?.includes("opacity") ?? false) ||
           el.closest("[data-framer-appear-id]") !== null;
  };

  // Skip elements inside the navbar or footer (they have their own animations)
  const isInNavOrFooter = (el: Element): boolean => {
    return el.closest("nav") !== null || 
           el.closest("footer") !== null ||
           el.closest("[data-no-scroll-reveal]") !== null;
  };

  // Skip elements already tagged
  const isAlreadyTagged = (el: Element): boolean => {
    return el.hasAttribute("data-scroll-reveal");
  };

  // ─── Tag sections ───
  document.querySelectorAll("section").forEach((section) => {
    if (isInNavOrFooter(section) || isAlreadyTagged(section)) return;
    
    // Tag the section heading/subheading
    const headings = section.querySelectorAll(":scope > div > h1, :scope > div > h2, :scope > div > h3, :scope > div > div > h1, :scope > div > div > h2, :scope > div > div > h3");
    headings.forEach((h, i) => {
      if (!isAlreadyTagged(h) && !isInNavOrFooter(h)) {
        h.setAttribute("data-scroll-reveal", "fade-up");
        if (i > 0) h.classList.add(`stagger-${Math.min(i, 3)}`);
      }
    });

    // Tag subheading paragraphs
    const paragraphs = section.querySelectorAll(":scope > div > p, :scope > div > div > p");
    paragraphs.forEach((p, i) => {
      if (!isAlreadyTagged(p) && !isInNavOrFooter(p) && i < 4) {
        p.setAttribute("data-scroll-reveal", "fade-up");
        p.classList.add(`stagger-${Math.min(i + 1, 3)}`);
      }
    });

    // Tag grid items (cards) with stagger
    const grids = section.querySelectorAll(":scope .grid, :scope [class*='grid']");
    grids.forEach((grid) => {
      if (isInNavOrFooter(grid) || isAlreadyTagged(grid)) return;
      const children = grid.children;
      Array.from(children).forEach((child, i) => {
        if (!isAlreadyTagged(child) && !isInNavOrFooter(child)) {
          // Alternate reveal directions for visual variety
          const directions = ["fade-up", "fade-up", "fade-up"];
          child.setAttribute("data-scroll-reveal", directions[i % 3]);
          child.classList.add(`stagger-${Math.min(i + 1, 8)}`);
        }
      });
    });

    // Tag images
    const images = section.querySelectorAll("img, [class*='rounded'] > img, [class*='overflow-hidden']");
    images.forEach((img) => {
      if (!isAlreadyTagged(img) && !isInNavOrFooter(img) && img.tagName !== "SECTION") {
        // Only tag actual image containers, not generic overflow-hidden divs
        if (img.tagName === "IMG" || img.querySelector("img")) {
          img.setAttribute("data-scroll-reveal", "scale-in");
        }
      }
    });

    // Tag tables
    const tables = section.querySelectorAll("table, [class*='overflow-x-auto']");
    tables.forEach((table) => {
      if (!isAlreadyTagged(table) && !isInNavOrFooter(table)) {
        table.setAttribute("data-scroll-reveal", "fade-up");
        table.classList.add("stagger-2");
      }
    });

    // Tag badges/spans that act as section labels
    const badges = section.querySelectorAll(":scope > div > span, :scope > div > div > span");
    badges.forEach((badge) => {
      const text = badge.textContent?.trim() || "";
      if (text.length > 3 && text.length < 60 && !isAlreadyTagged(badge) && !isInNavOrFooter(badge)) {
        badge.setAttribute("data-scroll-reveal", "fade-up");
      }
    });
  });

  // ─── Setup IntersectionObserver ───
  const allTargets = document.querySelectorAll("[data-scroll-reveal]");
  
  if (allTargets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Once animated, stop observing for performance
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  allTargets.forEach((target) => {
    // Elements already in view should animate immediately
    observer.observe(target);
  });

  // Cleanup on navigation
  return () => {
    observer.disconnect();
  };
}
