"use client";

import { useState } from "react";
import Link from "next/link";
import {
  RefreshCw,
  Bot,
  Target,
  Cpu,
  Layers,
  Rocket,
  Fingerprint,
  BarChart3,
  ArrowRight,
} from "lucide-react";

interface OutcomeItem {
  id: number;
  metric: string;
  title: string;
  shortDesc: string;
  description: string;
  citation?: string;
  icon: React.ElementType;
  href: string;
}

const OUTCOMES: OutcomeItem[] = [
  {
    id: 1,
    metric: "95% Faster Dispatch",
    title: "Operational Throughput",
    shortDesc: "Sub-second event streaming that eliminates real-time dispatch and logistics bottlenecks.",
    description: "Reduced commercial freight dispatch latency from 45 minutes to under 2 minutes across 500+ verified transport fleets.",
    citation: "GoMyTruck Platform",
    icon: RefreshCw,
    href: "/case-studies/gomytruck",
  },
  {
    id: 2,
    metric: "85% Manual Work Cut",
    title: "Automated Workflows",
    shortDesc: "Deterministic background job queues that eliminate human error and paper reconciliation.",
    description: "Eliminated 85% of repetitive administrative reconciliation through asynchronous Redis and BullMQ distributed queues.",
    citation: "Enterprise Core",
    icon: Bot,
    href: "/technologies",
  },
  {
    id: 3,
    metric: "<5 Min Response SLA",
    title: "Lead Pipeline Velocity",
    shortDesc: "Automated firmographic intake routing high-intent inquiries directly to technical leads.",
    description: "Automated technical intake and progressive firmographic enrichment guarantees sub-5 minute routing to senior architects.",
    citation: "Intake Engine",
    icon: Target,
    href: "/contact",
  },
  {
    id: 4,
    metric: "Zero-Hallucination AI",
    title: "Algorithmic & AI Authority",
    shortDesc: "Entity-first knowledge graphs designed for citation in modern generative answer engines.",
    description: "Machine-readable knowledge graph schemas ensure authoritative citation across Google AI Overviews, Perplexity, and ChatGPT.",
    citation: "GEO Framework",
    icon: Cpu,
    href: "/services/ai-automation",
  },
  {
    id: 5,
    metric: "1M+ Concurrent Scale",
    title: "Elastic Infrastructure",
    shortDesc: "Resilient microservices engineered to scale effortlessly under intense peak transactional loads.",
    description: "Event-driven microservices engineered to scale from 100 to 1,000,000 concurrent operations without code refactoring.",
    citation: "Cloud Architecture",
    icon: Layers,
    href: "/services/enterprise-cloud",
  },
  {
    id: 6,
    metric: "6–8 Week Sprints",
    title: "Rapid Time-to-Market",
    shortDesc: "Milestone-driven engineering delivering production-grade platforms with 100% IP ownership.",
    description: "Accelerate Go-To-Market from architecture scoping to live enterprise deployment with 100% intellectual property ownership.",
    citation: "Agile Pods",
    icon: Rocket,
    href: "/pricing",
  },
  {
    id: 7,
    metric: "100% DPDP & PSARA",
    title: "Data Sovereignty & DPDP",
    shortDesc: "Defense-in-depth security, sovereign data localization, and statutory compliance vaults.",
    description: "Automated statutory compliance and biometric verification vaults for over 5,000 distributed enterprise personnel.",
    citation: "ACS Platform",
    icon: Fingerprint,
    href: "/case-studies/acs",
  },
  {
    id: 8,
    metric: "99.99% Uptime SLA",
    title: "Sub-100ms Latency & SLA",
    shortDesc: "Carrier-grade database schemas, automated failover, and sub-100ms API response times.",
    description: "High-performance PostgreSQL and WebSocket pipelines delivering sub-100ms API response times with carrier-grade reliability.",
    citation: "SLA Commitment",
    icon: BarChart3,
    href: "/technologies",
  },
];

export function BusinessOutcomes() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <section
      id="outcomes"
      className="relative z-10 bg-white text-[#161616] py-24 sm:py-32 border-t border-b border-[#e5e7eb]"
    >
      <div className="container-main max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header — Exactly matching 'Architectural Foundations for Growth' font-syncopate */}
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <span className="inline-block text-xs font-mono font-semibold tracking-[0.2em] text-[#0f62fe] uppercase mb-4">
            Your Returns
          </span>
          <div>
            <h2 className="font-syncopate font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight border-b-2 border-[#161616] pb-4 inline-block text-[#161616]">
              Business Outcomes, Not Just Code
            </h2>
          </div>
          <p className="text-base sm:text-xl text-[#525252] leading-relaxed">
            Every line of software architecture is engineered to eliminate operational drag and deliver measurable enterprise returns.
          </p>
        </div>

        {/* 4x2 Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {OUTCOMES.map((item) => {
            const isActive = activeCardId === item.id;
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setActiveCardId(item.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={(e) => {
                  // On touch devices, allow first tap to activate and second to navigate
                  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches && activeCardId !== item.id) {
                    e.preventDefault();
                    setActiveCardId(item.id);
                  }
                }}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-[4px] border transition-colors duration-200 cursor-pointer overflow-hidden select-none min-h-[260px] sm:min-h-[275px] lg:min-h-[285px] ${
                  isActive
                    ? "bg-[#f4f4f4] border-transparent is-active"
                    : "bg-white border-[#e0e0e0] hover:bg-[#f4f4f4]"
                }`}
              >
                {/* Progressive Tracing Blue Border (SVG) */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full overflow-visible rounded-[4px]"
                  style={{ zIndex: 10 }}
                  aria-hidden="true"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="calc(100% - 1px)"
                    height="calc(100% - 1px)"
                    rx="4"
                    fill="none"
                    stroke="#0f62fe"
                    strokeWidth="1.5"
                    pathLength="100"
                    className="card-border-trace"
                    style={{
                      strokeDashoffset: isActive ? 0 : undefined,
                    }}
                  />
                </svg>

                {/* Top Area: Badge + Big Heading + Subhead (Default) / Deep Outcome (Hover) */}
                <div className="relative min-h-[145px] sm:min-h-[155px]">
                  {/* Default State: Visible initially, fades up and out on hover */}
                  <div
                    className={`transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                      isActive
                        ? "opacity-0 -translate-y-2 pointer-events-none"
                        : "opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-2"
                    }`}
                  >
                    {/* Impact Metric Pill */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block text-[11px] font-mono font-bold tracking-wider text-[#0f62fe] bg-[#0f62fe]/8 px-2 py-0.5 rounded-[3px]">
                        {item.metric}
                      </span>
                    </div>

                    {/* Much Bigger Heading */}
                    <h3 className="font-sans text-xl sm:text-[22px] lg:text-[23px] font-bold text-[#161616] tracking-tight leading-[1.25] mb-2">
                      {item.title}
                    </h3>

                    {/* Concise Sub-Information */}
                    <p className="text-xs sm:text-[13px] text-[#525252] leading-relaxed line-clamp-2">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Hover / Active State: Reveals deep forensic outcome & citation */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] flex flex-col justify-start ${
                      isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                    }`}
                  >
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#0f62fe] uppercase mb-2">
                      Verified Outcome
                    </span>
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#161616] font-medium">
                      {item.description}
                    </p>
                    {item.citation && (
                      <span className="text-[11px] font-mono font-semibold text-[#0f62fe] mt-3 tracking-wide flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
                        {item.citation}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Row: Minimal Line Icon & Directional Arrow */}
                <div className="mt-auto pt-4 flex items-end justify-between border-t border-transparent">
                  {/* Bottom-left line icon */}
                  <div className="text-[#161616] opacity-80 transition-colors duration-200 group-hover:opacity-100 group-hover:text-[#0f62fe]">
                    <Icon className="w-6 h-6 stroke-[1.25]" />
                  </div>

                  {/* Bottom-right directional arrow */}
                  <div className="text-[#0f62fe] transition-transform duration-300 ease-out group-hover:translate-x-1">
                    <ArrowRight className="w-[18px] h-[18px] stroke-[1.75]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
