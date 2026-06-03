"use client";

import React from "react";
import AnalyticalCard from "../shared/AnalyticalCard";

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string; // applied to the outer layout container
  innerClassName?: string; // applied to the transforming container
  maxTiltX?: number; // max tilt degrees (default 8)
  maxTiltY?: number; // max tilt degrees (default 8)
  liftY?: number; // lift amount in pixels (default -15)
  scale?: number; // scale on hover (default 1.03)
  shadowClassNormal?: string; // normal shadow class
  shadowClassHover?: string; // hover shadow class
  glowColor?: string; // optional soft color glow
}

export default function Interactive3DCard({
  children,
  className = "",
  innerClassName = "",
  glowColor,
}: Interactive3DCardProps) {
  return (
    <AnalyticalCard
      compact={true}
      className={innerClassName}
      containerClassName={className}
      glowColor={glowColor}
    >
      {children}
    </AnalyticalCard>
  );
}
