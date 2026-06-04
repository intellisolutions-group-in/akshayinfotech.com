import React from "react";

interface TechALogoProps {
  className?: string;
  glow?: boolean;
}

export default function TechALogo({ className = "h-6 w-6", glow = true }: TechALogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="a-logo-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
          <stop offset="50%" stopColor="#06b6d4" /> {/* Cyan */}
          <stop offset="100%" stopColor="#6366f1" /> {/* Indigo */}
        </linearGradient>
        <linearGradient id="a-logo-grad-accent" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        {glow && (
          <filter id="a-logo-glow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}
      </defs>
      
      {/* Left leg of A */}
      <path
        d="M 50 15 L 20 85 H 34 L 50 48 Z"
        fill="url(#a-logo-grad-primary)"
      />
      
      {/* Right leg of A */}
      <path
        d="M 50 15 L 80 85 H 66 L 50 48 Z"
        fill="url(#a-logo-grad-primary)"
        opacity="0.9"
      />
      
      {/* Glowing tech crossbar */}
      <path
        d="M 39 58 L 61 58 L 57 50 L 43 50 Z"
        fill="url(#a-logo-grad-accent)"
        filter={glow ? "url(#a-logo-glow)" : undefined}
      />
      
      {/* Tech node points */}
      <circle cx="50" cy="15" r="4.5" fill="#60a5fa" />
      <circle cx="20" cy="85" r="3.5" fill="#3b82f6" />
      <circle cx="80" cy="85" r="3.5" fill="#6366f1" />
      <circle cx="50" cy="48" r="3" fill="#a78bfa" />
    </svg>
  );
}
