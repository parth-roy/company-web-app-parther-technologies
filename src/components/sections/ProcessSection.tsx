"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ProcessStep {
  num: string;
  kicker: string;
  title: string;
  desc: string;
  detail: string;
  tags: string[];
  actionText: string;
  actionHref: string;
  visualType: "discovery" | "architecture" | "design" | "development" | "testing" | "launch" | "optimisation" | "support";
}

const steps: ProcessStep[] = [
  {
    num: "01",
    kicker: "STEP 01: DISCOVERY",
    title: "Deep-Dive Business Audit & Strategic Discovery",
    desc: "Deep-dive into your business model, pain points, and growth objectives. We audit existing workflows, identify operational bottlenecks, and establish clear technical constraints and timeline milestones.",
    detail: "Before writing a single line of code, our systems architects align on statutory compliance (DPDP, PSARA, ULIP), third-party API dependencies, and realistic ROI benchmarks to eliminate scope creep.",
    tags: ["Technical Feasibility", "Stakeholder Consensus", "Fixed Sprint Scope"],
    actionText: "Explore Discovery Phase",
    actionHref: "/contact",
    visualType: "discovery",
  },
  {
    num: "02",
    kicker: "STEP 02: ARCHITECTURE",
    title: "Scalable System Architecture & Data Blueprint",
    desc: "Design a scalable system blueprint — tech stack, integrations, and data model. We engineer production-grade schema models, high-concurrency event queues, and zero-trust API contracts.",
    detail: "Our engineering team defines modular boundaries that eliminate future technical debt, modeling clean PostgreSQL schemas with Prisma ORM, Redis micro-caching, and BullMQ background workers for horizontal scale.",
    tags: ["PostgreSQL & Prisma", "BullMQ Event Queues", "Zero-Trust Security"],
    actionText: "Explore System Design",
    actionHref: "/contact",
    visualType: "architecture",
  },
  {
    num: "03",
    kicker: "STEP 03: DESIGN",
    title: "High-Fidelity Interface & Conversion Ergonomics",
    desc: "High-fidelity UI that reflects your brand, optimised for conversion. We build full interactive Figma design systems, design tokens, and accessibility-compliant component libraries.",
    detail: "Every interface is built with ergonomic clarity — eliminating cognitive friction, ensuring sub-second visual feedback, and maximizing user task completion rates across mobile, tablet, and desktop viewports.",
    tags: ["Interactive Prototypes", "Figma Design Tokens", "Conversion Ergonomics"],
    actionText: "Explore UI/UX Standards",
    actionHref: "/contact",
    visualType: "design",
  },
  {
    num: "04",
    kicker: "STEP 04: DEVELOPMENT",
    title: "Agile Sprints with Weekly Working Demos",
    desc: "Agile sprints with weekly demos. You see progress every 7 days. Rapid two-week engineering cycles with strict TypeScript type safety, automated CI/CD pipelines, and clean modular code.",
    detail: "No black-box delays or multi-month radio silences. We maintain transparent Git repositories, automated staging deployments, and end-of-week video walkthroughs directly with your core team.",
    tags: ["7-Day Staging Demos", "100% Strict TypeScript", "Automated CI/CD"],
    actionText: "Explore Engineering Workflow",
    actionHref: "/contact",
    visualType: "development",
  },
  {
    num: "05",
    kicker: "STEP 05: TESTING",
    title: "Automated QA, Load Testing & Security Audits",
    desc: "QA, load testing, security audits, and cross-device validation. Zero tolerance for production fragility — simulating 10,000+ concurrent users, OWASP hardening, and end-to-end automated testing.",
    detail: "Every build is tested against high-concurrency spikes, packet loss recovery, payment webhook reconciliation edge-cases, and multi-browser rendering matrices before production approval.",
    tags: ["10k Concurrency Simulation", "OWASP Penetration Testing", "Cross-Browser QA"],
    actionText: "Explore Testing Standards",
    actionHref: "/contact",
    visualType: "testing",
  },
  {
    num: "06",
    kicker: "STEP 06: LAUNCH",
    title: "Zero-Downtime Deployment & Go-Live Window",
    desc: "Zero-downtime deployment with a go-live monitoring window. Executed via Docker, PM2 cluster orchestration, Cloudflare edge caching, and real-time telemetry observation.",
    detail: "Our senior tech leads oversee production cutovers during dedicated low-traffic maintenance windows, executing automated database migrations and DNS propagation with zero downtime and zero data loss.",
    tags: ["Blue/Green Rollout", "Cloudflare CDN Edge", "Live War-Room Monitoring"],
    actionText: "Explore Deployment Protocol",
    actionHref: "/contact",
    visualType: "launch",
  },
  {
    num: "07",
    kicker: "STEP 07: OPTIMISATION",
    title: "Sub-Second Latency Tuning & Growth SEO",
    desc: "Performance tuning, A/B testing, and feature iteration based on real data. We profile Core Web Vitals (INP/LCP), optimize database query execution times, and implement Generative Engine Optimization (GEO).",
    detail: "We audit slow queries, implement Redis layer micro-caching, and fine-tune semantic Schema.org entity graphs so your platform ranks in top search rankings and is cited across Google AI Overviews and ChatGPT.",
    tags: ["100/100 Core Web Vitals", "SQL Index Optimization", "GEO AI Citations"],
    actionText: "Explore Optimisation Framework",
    actionHref: "/contact",
    visualType: "optimisation",
  },
  {
    num: "08",
    kicker: "STEP 08: SUPPORT",
    title: "Dedicated Maintenance, SLA Monitoring & Scale",
    desc: "Ongoing partnership: updates, monitoring, and scaling as you grow. 24/7 uptime monitoring, critical security patching, and ongoing engineering sprints as your business expands.",
    detail: "We function as your long-term engineering pod — scaling server clusters, implementing quarterly dependency upgrades, and rolling out phase-two features as your business scales.",
    tags: ["99.99% Uptime SLA", "24/7 Sentry Monitoring", "Continuous Sprints"],
    actionText: "Explore Long-Term Support",
    actionHref: "/contact",
    visualType: "support",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative z-10 bg-cf-bg text-cf-text pt-12 sm:pt-16 pb-24 sm:pb-32 border-t border-cf-border">
      <div className="container-main">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase font-mono mb-4 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
            HOW WE WORK · BATTLE-TESTED FRAMEWORK
          </span>
          <h2 className="font-syncopate font-bold text-3xl sm:text-4xl md:text-5xl text-[#161616] tracking-tight mb-6">
            Our Development Process
          </h2>
          <p className="text-cf-text-secondary text-lg sm:text-xl leading-relaxed">
            Predictable delivery. Zero surprises. A proven 8-step framework refined across 50+ enterprise platforms to take your vision from discovery to scalable production.
          </p>
        </div>

        {/* Alternating Steps Flow - Sequential Scroll Entrance (60fps GPU Accelerated) */}
        <div className="space-y-24 sm:space-y-36">
          {steps.map((step, idx) => (
            <ProcessStepRow key={step.num} step={step} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

/**
 * High-performance row component that triggers a buttery smooth entrance animation
 * as each step scrolls into view from the downside / infinity.
 * Disconnects the observer immediately upon reveal for zero CPU/GPU overhead.
 */
function ProcessStepRow({
  step,
  idx,
}: {
  step: ProcessStep;
  idx: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const isEven = idx % 2 === 0;

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
    >
      {/* Visual Column - Glides smoothly up from the downside/infinity */}
      <div
        className={`lg:col-span-6 w-full ${
          isEven ? "lg:order-1" : "lg:order-2"
        } order-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-16 sm:translate-y-20 scale-[0.97] pointer-events-none"
        }`}
        style={{ willChange: isVisible ? "auto" : "transform, opacity" }}
      >
        <StepVisual type={step.visualType} num={step.num} />
      </div>

      {/* Content Column - Cascades in with a subtle 120ms micro-stagger */}
      <div
        className={`lg:col-span-6 flex flex-col justify-center ${
          isEven ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
        } order-1 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12 pointer-events-none"
        }`}
        style={{ willChange: isVisible ? "auto" : "transform, opacity" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase font-mono">
            {step.kicker}
          </span>
          <span className="h-px w-8 bg-blue-200 hidden sm:inline-block" />
        </div>

        <h3 className="font-syncopate font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#161616] leading-[1.25] tracking-tight mb-5">
          {step.title}
        </h3>

        <p className="text-cf-text-secondary text-base sm:text-lg leading-relaxed mb-4">
          {step.desc}
        </p>

        <p className="text-cf-text-secondary/80 text-sm sm:text-base leading-relaxed mb-6">
          {step.detail}
        </p>

        {/* Deliverable Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono font-medium bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-700 px-3.5 py-1.5 rounded-full shadow-2xs"
            >
              ✓ {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div>
          <Link
            href={step.actionHref}
            className="inline-flex items-center gap-2 font-syncopate font-bold text-xs sm:text-sm text-[#161616] hover:text-blue-600 group transition-colors duration-200"
          >
            <span>{step.actionText}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5 text-blue-600">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BESPOKE ORGANIC VISUAL CONTAINERS (Matching Reference Design Language)
// All cards pure white, all buttons & badges using blurry transparent glossy style (Image 2)
// ─────────────────────────────────────────────────────────────────────────────

function StepVisual({ type }: { type: ProcessStep["visualType"]; num: string }) {
  switch (type) {
    case "discovery":
      return (
        <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3] flex items-center justify-center">
          {/* Organic Pebble Frame */}
          <div className="absolute inset-2 sm:inset-4 rounded-[48px_16px_56px_24px] bg-gradient-to-br from-blue-50/70 via-white to-slate-50/80 border border-slate-200/70 shadow-lg overflow-hidden" />

          {/* Central Blueprint Matrix Card (WHITE) */}
          <div className="relative z-10 w-[82%] bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Strategic Scope Matrix
                </span>
              </div>
              <span className="text-[10px] font-mono bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full border border-blue-200 font-semibold">
                PHASE 01
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-2.5 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold text-xs">01</span>
                  <span className="text-xs font-semibold text-slate-700">Business Constraints & ROI</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 font-bold">100% AUDITED</span>
              </div>

              <div className="p-2.5 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold text-xs">02</span>
                  <span className="text-xs font-semibold text-slate-700">Regulatory Compliance (DPDP)</span>
                </div>
                <span className="text-[11px] font-mono text-blue-600 font-bold">VERIFIED</span>
              </div>

              <div className="p-2.5 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold text-xs">03</span>
                  <span className="text-xs font-semibold text-slate-700">Sprint Delivery Sizing</span>
                </div>
                <span className="text-[11px] font-mono text-slate-600 font-bold">LOCKED</span>
              </div>
            </div>
          </div>

          {/* Floating Pill Top-Left (Glossy Transparent Smoky Glass - Image 2) */}
          <div className="absolute top-2 -left-2 sm:left-2 z-20 glass-pill rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="text-amber-300 text-xs">💡</span>
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Feasibility: High Impact</span>
          </div>

          {/* Floating Pill Bottom-Right (Glossy Transparent Blue Style) */}
          <div className="absolute bottom-2 -right-2 sm:right-2 z-20 glass-pill-blue rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Sprint Roadmap: Ready</span>
          </div>
        </div>
      );

    case "architecture":
      return (
        <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3] flex items-center justify-center">
          {/* Organic Pebble Frame */}
          <div className="absolute inset-2 sm:inset-4 rounded-[28px_56px_20px_52px] bg-gradient-to-br from-indigo-50/60 via-white to-slate-50/80 border border-slate-200/70 shadow-lg overflow-hidden" />

          {/* Central Architecture Node Diagram (WHITE CARD) */}
          <div className="relative z-10 w-[84%] bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Event-Driven Architecture
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 font-medium">
                PostgreSQL + Redis
              </span>
            </div>

            {/* Micro Architecture Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 bg-slate-50/80 border border-slate-100 rounded-xl">
                <div className="text-[10px] font-mono text-blue-600 font-bold mb-0.5">GATEWAY</div>
                <div className="text-xs font-bold text-slate-800">Express 5 API</div>
                <div className="text-[10px] text-slate-500 mt-1">Sub-10ms Latency</div>
              </div>

              <div className="p-2.5 bg-slate-50/80 border border-slate-100 rounded-xl">
                <div className="text-[10px] font-mono text-emerald-600 font-bold mb-0.5">DATABASE</div>
                <div className="text-xs font-bold text-slate-800">Postgres + Prisma</div>
                <div className="text-[10px] text-slate-500 mt-1">Row-Level Security</div>
              </div>

              <div className="p-2.5 bg-slate-50/80 border border-slate-100 rounded-xl">
                <div className="text-[10px] font-mono text-purple-600 font-bold mb-0.5">QUEUE BUS</div>
                <div className="text-xs font-bold text-slate-800">BullMQ + Redis</div>
                <div className="text-[10px] text-slate-500 mt-1">Zero-Loss Workers</div>
              </div>

              <div className="p-2.5 bg-slate-50/80 border border-slate-100 rounded-xl">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-0.5">REALTIME</div>
                <div className="text-xs font-bold text-slate-800">Socket.io Telemetry</div>
                <div className="text-[10px] text-slate-500 mt-1">Live Event Stream</div>
              </div>
            </div>
          </div>

          {/* Floating Top Badge (Glossy Transparent Smoky Glass - Image 2) */}
          <div className="absolute top-2 -right-2 sm:right-2 z-20 glass-pill rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Zero-Trust Security</span>
          </div>

          {/* Floating Bottom Badge (Glossy Transparent Cyan Glass) */}
          <div className="absolute bottom-2 -left-2 sm:left-2 z-20 glass-pill-cyan rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="text-amber-300 text-xs">⚡</span>
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">&lt; 5ms Redis Micro-Cache</span>
          </div>
        </div>
      );

    case "design":
      return (
        <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3] flex items-center justify-center">
          {/* Organic Pebble Frame */}
          <div className="absolute inset-2 sm:inset-4 rounded-[56px_24px_48px_20px] bg-gradient-to-br from-purple-50/60 via-white to-pink-50/50 border border-slate-200/70 shadow-lg overflow-hidden" />

          {/* Central Figma Mockup Card (WHITE) */}
          <div className="relative z-10 w-[84%] bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-700 ml-2">AppDesign_v3.fig</span>
              </div>
              <span className="text-[10px] font-mono bg-purple-50 text-purple-600 px-2.5 py-0.5 rounded-full border border-purple-200 font-semibold">
                FIGMA TOKENS
              </span>
            </div>

            {/* Wireframe Mockup Preview */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="h-16 bg-blue-50 border border-blue-100 rounded-lg p-2 text-slate-900 flex flex-col justify-between">
                <span className="text-[9px] font-mono uppercase text-blue-600 font-bold">Orders</span>
                <span className="text-sm font-bold font-syncopate text-blue-700">1,420</span>
              </div>
              <div className="h-16 bg-slate-900 rounded-lg p-2 text-white flex flex-col justify-between">
                <span className="text-[9px] font-mono uppercase opacity-75">Dispatch</span>
                <span className="text-sm font-bold font-syncopate">99.4%</span>
              </div>
              <div className="h-16 bg-slate-50 rounded-lg p-2 text-slate-800 flex flex-col justify-between border border-slate-200">
                <span className="text-[9px] font-mono uppercase text-slate-500">SLA</span>
                <span className="text-sm font-bold font-syncopate text-blue-600">&lt;2m</span>
              </div>
            </div>

            {/* Design System Tokens Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-blue-600 border border-white shadow-xs" />
                <span className="w-4 h-4 rounded-full bg-emerald-500 border border-white shadow-xs" />
                <span className="w-4 h-4 rounded-full bg-slate-900 border border-white shadow-xs" />
                <span className="w-4 h-4 rounded-full bg-purple-600 border border-white shadow-xs" />
              </div>
              <span className="text-[10px] font-mono text-slate-500">WCAG 2.1 AA Compliant</span>
            </div>
          </div>

          {/* Floating Pill Top-Left (Glossy Transparent Purple) */}
          <div className="absolute top-2 -left-2 sm:left-2 z-20 glass-pill-purple rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="text-white text-xs">✦</span>
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Sub-Second Micro-Interactions</span>
          </div>

          {/* Floating Pill Bottom-Right (Glossy Transparent Smoky Glass - Image 2) */}
          <div className="absolute bottom-2 -right-2 sm:right-2 z-20 glass-pill rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Mobile + Web Responsive</span>
          </div>
        </div>
      );

    case "development":
      return (
        <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3] flex items-center justify-center">
          {/* Organic Pebble Frame */}
          <div className="absolute inset-2 sm:inset-4 rounded-[32px_56px_28px_50px] bg-gradient-to-br from-slate-50 via-white to-blue-50/50 border border-slate-200/70 shadow-lg overflow-hidden" />

          {/* Central Code Editor Card (WHITE) */}
          <div className="relative z-10 w-[84%] bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-slate-700 font-mono font-semibold text-xs ml-2">sprint-engine.ts</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">
                WEEKLY DEMO
              </span>
            </div>

            <pre className="bg-slate-50/90 border border-slate-100 p-3.5 rounded-xl text-[11px] sm:text-xs font-mono leading-relaxed text-slate-800 overflow-x-auto pb-2">
              <code>
                <span className="text-purple-600 font-semibold">export async function</span>{" "}
                <span className="text-blue-600 font-semibold">dispatchOrder</span>
                (orderId: <span className="text-emerald-600">string</span>) &#123;{"\n"}
                {"  "}
                <span className="text-purple-600 font-semibold">const</span> queue ={" "}
                <span className="text-blue-600">await</span> queueBus.
                <span className="text-amber-600">enqueue</span>(orderId);{"\n"}
                {"  "}
                <span className="text-purple-600 font-semibold">return</span> &#123;{" "}
                <span className="text-slate-500">status:</span>{" "}
                <span className="text-emerald-700 font-semibold">&apos;DEMO_DEPLOYED&apos;</span> &#125;;{"\n"}
                &#125;
              </code>
            </pre>
          </div>

          {/* Floating Pill Top-Right (Glossy Transparent Emerald) */}
          <div className="absolute top-2 -right-2 sm:right-2 z-20 glass-pill-emerald rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">git commit: v2.4.0 [PASS]</span>
          </div>

          {/* Floating Pill Bottom-Left (Glossy Transparent Smoky Glass - Image 2) */}
          <div className="absolute bottom-2 -left-2 sm:left-2 z-20 glass-pill rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">7-Day Staging Review: Ready</span>
          </div>
        </div>
      );

    case "testing":
      return (
        <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3] flex items-center justify-center">
          {/* Organic Pebble Frame */}
          <div className="absolute inset-2 sm:inset-4 rounded-[48px_20px_52px_28px] bg-gradient-to-br from-amber-50/60 via-white to-slate-50 border border-slate-200/70 shadow-lg overflow-hidden" />

          {/* Central Load Test Deck (WHITE) */}
          <div className="relative z-10 w-[84%] bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Automated Stress & QA Suite
                </span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
                100% PASSED
              </span>
            </div>

            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-600 font-medium">Concurrency Stress (10k Users)</span>
                  <span className="font-bold text-emerald-600">99.99%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[99.99%]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2.5 bg-slate-50/80 border border-slate-100 rounded-xl">
                  <div className="text-[10px] font-mono text-slate-500 font-medium">LATENCY P99</div>
                  <div className="text-sm font-bold font-syncopate text-slate-900">45ms</div>
                </div>
                <div className="p-2.5 bg-slate-50/80 border border-slate-100 rounded-xl">
                  <div className="text-[10px] font-mono text-slate-500 font-medium">TEST CASES</div>
                  <div className="text-sm font-bold font-syncopate text-emerald-600">142/142</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Pill Top-Left (Glossy Transparent Smoky Glass - Image 2) */}
          <div className="absolute top-2 -left-2 sm:left-2 z-20 glass-pill rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="text-blue-300 text-xs">🛡️</span>
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">OWASP Hardened: 0 Vulnerabilities</span>
          </div>

          {/* Floating Pill Bottom-Right (Glossy Transparent Emerald) */}
          <div className="absolute bottom-2 -right-2 sm:right-2 z-20 glass-pill-emerald rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Cross-Device Matrix: Verified</span>
          </div>
        </div>
      );

    case "launch":
      return (
        <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3] flex items-center justify-center">
          {/* Organic Pebble Frame */}
          <div className="absolute inset-2 sm:inset-4 rounded-[28px_50px_32px_56px] bg-gradient-to-br from-blue-50/60 via-white to-slate-50 border border-slate-200/70 shadow-lg overflow-hidden" />

          {/* Central Deployment Card (WHITE) */}
          <div className="relative z-10 w-[84%] bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Production Rollout Console
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">
                LIVE
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50/80 rounded-xl border border-slate-100">
                <span className="text-slate-600 font-mono">Deployment Strategy</span>
                <span className="text-blue-600 font-bold font-mono">Blue/Green Zero-Downtime</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50/80 rounded-xl border border-slate-100">
                <span className="text-slate-600 font-mono">Cloudflare Edge CDN</span>
                <span className="text-emerald-600 font-bold font-mono">320+ Global PoPs</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50/80 rounded-xl border border-slate-100">
                <span className="text-slate-600 font-mono">SSL / DNS Propagation</span>
                <span className="text-slate-800 font-bold font-mono">100% Completed</span>
              </div>
            </div>
          </div>

          {/* Floating Pill Top-Right (Glossy Transparent Emerald) */}
          <div className="absolute top-2 -right-2 sm:right-2 z-20 glass-pill-emerald rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Downtime: 0.00s Guaranteed</span>
          </div>

          {/* Floating Pill Bottom-Left (EXACT REPLICA FROM IMAGE 2) */}
          <div className="absolute bottom-2 -left-2 sm:left-2 z-20 glass-pill rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Telemetry War-Room Active</span>
          </div>
        </div>
      );

    case "optimisation":
      return (
        <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3] flex items-center justify-center">
          {/* Organic Pebble Frame */}
          <div className="absolute inset-2 sm:inset-4 rounded-[48px_20px_56px_28px] bg-gradient-to-br from-emerald-50/60 via-white to-slate-50 border border-slate-200/70 shadow-lg overflow-hidden" />

          {/* Central Telemetry Card (WHITE) */}
          <div className="relative z-10 w-[84%] bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Core Web Vitals & GEO
                </span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
                LIGHTHOUSE 100
              </span>
            </div>

            {/* 4 Performance Dials */}
            <div className="grid grid-cols-4 gap-2 mb-3 text-center">
              {[
                { label: "Perf", val: "100" },
                { label: "A11y", val: "100" },
                { label: "Best", val: "100" },
                { label: "SEO", val: "100" },
              ].map((m) => (
                <div key={m.label} className="p-2 bg-emerald-50/60 border border-emerald-100 rounded-xl">
                  <div className="text-xs font-bold font-syncopate text-emerald-700">{m.val}</div>
                  <div className="text-[9px] font-mono text-slate-500 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="p-2.5 bg-slate-50/80 border border-slate-100 rounded-xl flex items-center justify-between">
              <span className="text-xs font-mono text-slate-600">Query Latency</span>
              <span className="text-xs font-mono font-bold text-emerald-600">320ms → 18ms (-94%)</span>
            </div>
          </div>

          {/* Floating Pill Top-Left (Glossy Transparent Smoky Glass - Image 2) */}
          <div className="absolute top-2 -left-2 sm:left-2 z-20 glass-pill rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="text-amber-300 text-xs">✦</span>
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">AI Search Citations: Top 3</span>
          </div>

          {/* Floating Pill Bottom-Right (Glossy Transparent Emerald) */}
          <div className="absolute bottom-2 -right-2 sm:right-2 z-20 glass-pill-emerald rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Sub-100ms INP Response</span>
          </div>
        </div>
      );

    case "support":
      return (
        <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3] flex items-center justify-center">
          {/* Organic Pebble Frame */}
          <div className="absolute inset-2 sm:inset-4 rounded-[32px_56px_24px_50px] bg-gradient-to-br from-slate-50 via-white to-indigo-50/50 border border-slate-200/70 shadow-lg overflow-hidden" />

          {/* Central SLA Monitor Card (WHITE) */}
          <div className="relative z-10 w-[84%] bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                  24/7 Enterprise SLA Monitor
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">
                ACTIVE POD
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-600">30-Day Platform Uptime</span>
                <span className="font-bold text-emerald-600">99.99%</span>
              </div>

              {/* Uptime bars */}
              <div className="flex gap-1 h-3 items-end">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="flex-1 bg-emerald-500 rounded-xs h-full opacity-80 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2 bg-slate-50/80 border border-slate-100 rounded-lg">
                  <div className="text-[10px] text-slate-500 font-mono">INCIDENT SLA</div>
                  <div className="text-xs font-bold font-syncopate text-slate-800">&lt; 15 Min</div>
                </div>
                <div className="p-2 bg-slate-50/80 border border-slate-100 rounded-lg">
                  <div className="text-[10px] text-slate-500 font-mono">SECURITY AUDIT</div>
                  <div className="text-xs font-bold font-syncopate text-blue-600">Quarterly</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Pill Top-Right (Glossy Transparent Smoky Glass - Image 2) */}
          <div className="absolute top-2 -right-2 sm:right-2 z-20 glass-pill rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Dedicated Engineering Pod</span>
          </div>

          {/* Floating Pill Bottom-Left (Glossy Transparent Blue) */}
          <div className="absolute bottom-2 -left-2 sm:left-2 z-20 glass-pill-blue rounded-full px-4 py-2 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-normal text-white">Automated Nightly Backups</span>
          </div>
        </div>
      );
  }
}
