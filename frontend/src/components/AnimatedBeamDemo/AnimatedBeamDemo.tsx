"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import "./AnimatedBeamDemo.css";
import {
  Brain,
  Cpu,
  Database,
  Globe,
  Code2,
  Atom,
  BarChart3,
  Rocket,
  Users,
  Bot,
  FlaskConical,
  Fingerprint,
  Zap,
  Network
} from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { children?: React.ReactNode; size?: number; glow?: string; className?: string }
>(({ children, size = 48, glow, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`circle-node ${className || ""}`}
      style={{
        width: size,
        height: size,
        boxShadow: glow
          ? `0 0 24px ${glow}, 0 0 8px ${glow}`
          : "0 0 20px -12px rgba(0,0,0,0.8)",
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Layer 1: Inputs (Far Left)
  const refIn1 = useRef<HTMLDivElement>(null);
  const refIn2 = useRef<HTMLDivElement>(null);
  const refIn3 = useRef<HTMLDivElement>(null);

  // Layer 2: Processors (Mid Left)
  const refMidL1 = useRef<HTMLDivElement>(null);
  const refMidL2 = useRef<HTMLDivElement>(null);

  // Layer 3: THE HUB (Center)
  const hubRef = useRef<HTMLDivElement>(null);

  // Layer 4: Analyzers (Mid Right)
  const refMidR1 = useRef<HTMLDivElement>(null);
  const refMidR2 = useRef<HTMLDivElement>(null);

  // Layer 5: Endpoints (Far Right)
  const refOut1 = useRef<HTMLDivElement>(null);
  const refOut2 = useRef<HTMLDivElement>(null);
  const refOut3 = useRef<HTMLDivElement>(null);

  return (
    <section className="beam-section">
      <div className="beam-title-container">
        <h2 className="beam-title">The Quantum Ecosystem</h2>
        <p className="beam-description">
          A high-density interconnected network of experimental AI, quantum computing nodes, and distributed intelligence.
        </p>
      </div>

      <div ref={containerRef} className="beam-container">
        <div className="beam-inner-wrapper complex-layout">
          
          <div className="beam-grid-wrapper">
            {/* Layer 1: Inputs */}
            <div className="beam-column far-left">
              <Circle ref={refIn1} glow="rgba(59,130,246,0.2)">
                <Database size={20} color="#3b82f6" />
              </Circle>
              <Circle ref={refIn2} glow="rgba(16,185,129,0.2)">
                <Code2 size={20} color="#10b981" />
              </Circle>
              <Circle ref={refIn3} glow="rgba(245,158,11,0.2)">
                <Fingerprint size={20} color="#f59e0b" />
              </Circle>
            </div>

            {/* Layer 2: Mid-Left Processors */}
            <div className="beam-column mid-left">
              <Circle ref={refMidL1} size={56} glow="rgba(99,102,241,0.25)">
                <Brain size={24} color="#6366f1" />
              </Circle>
              <Circle ref={refMidL2} size={56} glow="rgba(6,182,212,0.25)">
                <Cpu size={24} color="#06b6d4" />
              </Circle>
            </div>

            {/* Layer 3: Main Hub */}
            <div className="beam-center-hub">
              <Circle ref={hubRef} size={84} glow="rgba(25,25,25,0.4)">
                <Atom size={40} color="var(--foreground-text)" strokeWidth={1.2} />
              </Circle>
            </div>

            {/* Layer 4: Mid-Right Analyzers */}
            <div className="beam-column mid-right">
              <Circle ref={refMidR1} size={56} glow="rgba(236,72,153,0.25)">
                <Bot size={24} color="#ec4899" />
              </Circle>
              <Circle ref={refMidR2} size={56} glow="rgba(139,92,246,0.25)">
                <Network size={24} color="#8b5cf6" />
              </Circle>
            </div>

            {/* Layer 5: Endpoints */}
            <div className="beam-column far-right">
              <Circle ref={refOut1} glow="rgba(249,115,22,0.2)">
                <Globe size={20} color="#f97316" />
              </Circle>
              <Circle ref={refOut2} glow="rgba(34,197,94,0.2)">
                <Rocket size={20} color="#22c55e" />
              </Circle>
              <Circle ref={refOut3} glow="rgba(239,68,68,0.2)">
                <Zap size={20} color="#ef4444" />
              </Circle>
            </div>
          </div>
        </div>

        {/* --- BEAM CONNECTIONS (High Density) --- */}

        {/* Stage 1: Far Left to Mid Left (Dual Pulse) */}
        {[refIn1, refIn2, refIn3].map((from, i) => {
          const duration = 2.4;
          return (
            <React.Fragment key={`l1l2-${i}`}>
              <AnimatedBeam containerRef={containerRef} fromRef={from} toRef={refMidL1} curvature={-40} duration={duration} pathOpacity={0.2} pathWidth={1.5} />
              <AnimatedBeam containerRef={containerRef} fromRef={from} toRef={refMidL1} curvature={-40} duration={duration} delay={duration/2} pathOpacity={0.2} pathWidth={1.5} />
              <AnimatedBeam containerRef={containerRef} fromRef={from} toRef={refMidL2} curvature={40} duration={duration + 0.4} pathOpacity={0.2} pathWidth={1.5} />
              <AnimatedBeam containerRef={containerRef} fromRef={from} toRef={refMidL2} curvature={40} duration={duration + 0.4} delay={(duration+0.4)/2} pathOpacity={0.2} pathWidth={1.5} />
            </React.Fragment>
          );
        })}

        {/* Stage 2: Mid Left to Central Hub (Dual Pulse) */}
        <AnimatedBeam containerRef={containerRef} fromRef={refMidL1} toRef={hubRef} curvature={-20} duration={2} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" pathWidth={4} pathOpacity={0.4} />
        <AnimatedBeam containerRef={containerRef} fromRef={refMidL1} toRef={hubRef} curvature={-20} duration={2} delay={1} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" pathWidth={4} pathOpacity={0.4} />
        
        <AnimatedBeam containerRef={containerRef} fromRef={refMidL2} toRef={hubRef} curvature={20} duration={2.2} gradientStartColor="#06b6d4" gradientStopColor="#22d3ee" pathWidth={4} pathOpacity={0.4} />
        <AnimatedBeam containerRef={containerRef} fromRef={refMidL2} toRef={hubRef} curvature={20} duration={2.2} delay={1.1} gradientStartColor="#06b6d4" gradientStopColor="#22d3ee" pathWidth={4} pathOpacity={0.4} />

        {/* Stage 3: Central Hub to Mid Right (Dual Pulse) */}
        <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={refMidR1} curvature={-20} reverse duration={2} gradientStartColor="#ec4899" gradientStopColor="#f472b6" pathWidth={4} pathOpacity={0.4} />
        <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={refMidR1} curvature={-20} reverse duration={2} delay={1} gradientStartColor="#ec4899" gradientStopColor="#f472b6" pathWidth={4} pathOpacity={0.4} />
        
        <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={refMidR2} curvature={20} reverse duration={2.2} gradientStartColor="#8b5cf6" gradientStopColor="#a78bfa" pathWidth={4} pathOpacity={0.4} />
        <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={refMidR2} curvature={20} reverse duration={2.2} delay={1.1} gradientStartColor="#8b5cf6" gradientStopColor="#a78bfa" pathWidth={4} pathOpacity={0.4} />

        {/* Stage 4: Mid Right to Far Right (Dual Pulse) */}
        {[refOut1, refOut2, refOut3].map((to, i) => {
          const duration = 2.4;
          return (
            <React.Fragment key={`l4l5-${i}`}>
              <AnimatedBeam containerRef={containerRef} fromRef={refMidR1} toRef={to} curvature={-40} reverse duration={duration} pathOpacity={0.2} pathWidth={1.5} />
              <AnimatedBeam containerRef={containerRef} fromRef={refMidR1} toRef={to} curvature={-40} reverse duration={duration} delay={duration/2} pathOpacity={0.2} pathWidth={1.5} />
              <AnimatedBeam containerRef={containerRef} fromRef={refMidR2} toRef={to} curvature={40} reverse duration={duration + 0.4} pathOpacity={0.2} pathWidth={1.5} />
              <AnimatedBeam containerRef={containerRef} fromRef={refMidR2} toRef={to} curvature={40} reverse duration={duration + 0.4} delay={(duration+0.4)/2} pathOpacity={0.2} pathWidth={1.5} />
            </React.Fragment>
          );
        })}

        {/* Hub cross-connects (Dual Pulse for constant activity) */}
        <AnimatedBeam containerRef={containerRef} fromRef={refMidL1} toRef={refMidR2} curvature={-100} duration={4} pathOpacity={0.12} pathWidth={1.5} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" />
        <AnimatedBeam containerRef={containerRef} fromRef={refMidL1} toRef={refMidR2} curvature={-100} duration={4} delay={2} pathOpacity={0.12} pathWidth={1.5} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" />
        
        <AnimatedBeam containerRef={containerRef} fromRef={refMidL2} toRef={refMidR1} curvature={100} duration={4.5} pathOpacity={0.12} pathWidth={1.5} gradientStartColor="#06b6d4" gradientStopColor="#ec4899" />
        <AnimatedBeam containerRef={containerRef} fromRef={refMidL2} toRef={refMidR1} curvature={100} duration={4.5} delay={2.25} pathOpacity={0.12} pathWidth={1.5} gradientStartColor="#06b6d4" gradientStopColor="#ec4899" />

      </div>
    </section>
  );
}
