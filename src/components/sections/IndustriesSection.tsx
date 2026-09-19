"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface IndustryItem {
  id: string;
  title: string;
  href: string;
  categoryTag: string;
  badge: string;
  description: string;
  capabilities: string[];
  illustrationType:
    | "healthcare"
    | "manufacturing"
    | "logistics"
    | "ecommerce"
    | "fintech"
    | "ai"
    | "education"
    | "realestate";
  imageSrc?: string;
}

interface MotionVector {
  id: string;
  name: string;
  layer1Active: string;
  layer1Resting: string;
  layer2Active: string;
  layer2Resting: string;
}

const MOTION_VECTORS: MotionVector[] = [
  {
    id: "eastbound",
    name: "Left to Right",
    layer1Active: "-translate-x-12 translate-y-0 scale-100 opacity-0 pointer-events-none",
    layer1Resting: "translate-x-0 translate-y-0 scale-100 opacity-100",
    layer2Active: "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto",
    layer2Resting: "translate-x-10 translate-y-0 scale-100 opacity-0 pointer-events-none",
  },
  {
    id: "northbound",
    name: "Bottom to Top",
    layer1Active: "translate-x-0 -translate-y-12 scale-100 opacity-0 pointer-events-none",
    layer1Resting: "translate-x-0 translate-y-0 scale-100 opacity-100",
    layer2Active: "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto",
    layer2Resting: "translate-x-0 translate-y-10 scale-100 opacity-0 pointer-events-none",
  },
  {
    id: "westbound",
    name: "Right to Left",
    layer1Active: "translate-x-12 translate-y-0 scale-100 opacity-0 pointer-events-none",
    layer1Resting: "translate-x-0 translate-y-0 scale-100 opacity-100",
    layer2Active: "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto",
    layer2Resting: "-translate-x-10 translate-y-0 scale-100 opacity-0 pointer-events-none",
  },
  {
    id: "southbound",
    name: "Top to Bottom",
    layer1Active: "translate-x-0 translate-y-12 scale-100 opacity-0 pointer-events-none",
    layer1Resting: "translate-x-0 translate-y-0 scale-100 opacity-100",
    layer2Active: "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto",
    layer2Resting: "translate-x-0 -translate-y-10 scale-100 opacity-0 pointer-events-none",
  },
  {
    id: "depth-reveal",
    name: "Depth Zoom Reveal",
    layer1Active: "translate-x-0 translate-y-0 scale-90 opacity-0 pointer-events-none",
    layer1Resting: "translate-x-0 translate-y-0 scale-100 opacity-100",
    layer2Active: "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto",
    layer2Resting: "translate-x-0 translate-y-0 scale-105 opacity-0 pointer-events-none",
  },
];

const INDUSTRIES: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare & MedTech Platforms",
    href: "/industries/healthcare-compliant-software-development",
    categoryTag: "CLINICAL & HEALTHTECH",
    badge: "HIPAA Compliant",
    description:
      "Enterprise telemedicine platforms, hospital EHR/EMR integration, and clinical diagnostic workflow automation engineered with zero-trust database encryption.",
    capabilities: [
      "Telemedicine & Video Consultation",
      "HIPAA Compliant EHR/EMR Integration",
      "Automated Diagnostic Lab Dispatch",
      "Encrypted Patient Records & Audit Trail",
    ],
    illustrationType: "healthcare",
    imageSrc: "/industries/healthcare.webp",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Foundry ERP",
    href: "/industries/foundry-erp-software",
    categoryTag: "INDUSTRY 4.0 & FOUNDRY",
    badge: "Real-Time Telemetry",
    description:
      "Purpose-built ERP architectures for foundries, rolling mills, and automated factory floors — connecting shop-floor IoT hardware directly with executive accounting.",
    capabilities: [
      "BOM (Bill of Materials) & Scrap Tracking",
      "Shop-Floor Heat-Cycle Telemetry",
      "Automated Inventory & GST Invoicing",
      "Preventive Maintenance Scheduling",
    ],
    illustrationType: "manufacturing",
    imageSrc: "/industries/manufacturing.webp",
  },
  {
    id: "logistics",
    title: "Logistics & Freight SaaS Networks",
    href: "/industries/logistics-fleet-management-software",
    categoryTag: "FREIGHT & SUPPLY CHAIN",
    badge: "ULIP & VAHAN Ready",
    description:
      "Battle-tested digital freight networks, driver double-entry wallet ledgers, and multi-tenant dispatch engines. The exact engineering pedigree behind GoMyTruck.",
    capabilities: [
      "Live GPS Fleet Tracking & Geofencing",
      "Automated Multi-Wallet Payout Ledger",
      "ULIP SARATHI (DL) & VAHAN (RC) Check",
      "High-Concurrency Dynamic Pricing Engine",
    ],
    illustrationType: "logistics",
    imageSrc: "/industries/logistics-freight.webp",
  },
  {
    id: "ecommerce",
    title: "Retail & Headless Commerce",
    href: "/services/headless-commerce-development-kolkata",
    categoryTag: "HIGH-CONVERSION RETAIL",
    badge: "Sub-Second Edge",
    description:
      "Headless storefronts, multi-warehouse inventory synchronization, and ultra-low-latency checkout pipelines engineered for massive flash sales without downtime.",
    capabilities: [
      "Headless Shopify & Next.js Storefronts",
      "Omnichannel Multi-Store Inventory Sync",
      "High-Throughput Payment Routing",
      "Automated Order Lifecycle Notifications",
    ],
    illustrationType: "ecommerce",
    imageSrc: "/industries/ecommerce.webp",
  },
  {
    id: "fintech",
    title: "FinTech & Digital Banking Systems",
    href: "/industries/fintech",
    categoryTag: "BFSI & DIGITAL PAYMENTS",
    badge: "PCI-DSS Compliant",
    description:
      "Double-entry bookkeeping engines, automated escrow reconciliation, micro-lending portals, and instant KYC verification with bank-grade security protocols.",
    capabilities: [
      "Double-Entry Ledger Architecture",
      "RazorpayX Automated Payout Webhooks",
      "DigiLocker Aadhaar/PAN PKCE OAuth",
      "Real-Time Fraud Prevention Scoring",
    ],
    illustrationType: "fintech",
    imageSrc: "/industries/fintech.webp",
  },
  {
    id: "ai",
    title: "Autonomous AI & SaaS Architecture",
    href: "/services/ai-agentic-workflow-integration",
    categoryTag: "AUTONOMOUS AI & SAAS",
    badge: "Agentic Production",
    description:
      "Multi-agent autonomous workflows, localized private LLM inference, and multi-tenant SaaS foundations that turn complex enterprise logic into production systems.",
    capabilities: [
      "Private Cloud LLM Inference Pipelines",
      "Autonomous CRM & Support Agents",
      "Multi-Tenant PostgreSQL RLS Isolation",
      "Rapid MVP-to-Scale Architecture",
    ],
    illustrationType: "ai",
    imageSrc: "/industries/ai.webp",
  },
  {
    id: "education",
    title: "Education & EdTech Ecosystems",
    href: "/industries/education",
    categoryTag: "ACADEMIC & EDTECH",
    badge: "Enterprise Scale",
    description:
      "Scalable Learning Management Systems (LMS), proctored examination portals, and student lifecycle ERPs supporting concurrent video streaming and real-time grading.",
    capabilities: [
      "Interactive Real-Time Virtual Classrooms",
      "AI Proctored Examination Engines",
      "Automated Fee Collection & Reconciliation",
      "Multi-Branch Academic Administration",
    ],
    illustrationType: "education",
    imageSrc: "/industries/education.webp",
  },
  {
    id: "realestate",
    title: "Real Estate & Construction ERP",
    href: "/industries/real-estate",
    categoryTag: "PROPTECH & INFRASTRUCTURE",
    badge: "RERA Compliant",
    description:
      "Complete property lifecycle management, automated milestone billing, contractor procurement ledgers, and site construction progress telemetry.",
    capabilities: [
      "Milestone-Based Construction Billing",
      "Contractor & Material Procurement ERP",
      "Integrated 3D Unit Booking & CRM",
      "Statutory RERA Audit & Document Vault",
    ],
    illustrationType: "realestate",
    imageSrc: "/industries/realestate.webp",
  },
];

export function IndustriesSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const toggleMobileCard = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="industries" className="relative z-10 bg-cf-card text-cf-text py-20 sm:py-28 border-t border-cf-border">
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 md:px-8 xl:px-10">

        {/* Section Header — Bold, Editorial & Architectural */}
        <div className="mb-14 sm:mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold tracking-[0.2em] text-slate-900 uppercase font-mono-caps">
            Sector Expertise &amp; Domain Architecture
          </span>
          <h2 className="font-syncopate font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-950">
            Industries We Serve
          </h2>
          <div className="w-16 h-1 bg-slate-950 mt-1 mb-2" />
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            Enterprise software engineered for sector-specific regulatory compliance, high-concurrency workloads, and mission-critical reliability across 8 core verticals.
          </p>
        </div>

        {/* 
          Accenture-Calibrated Executive Responsive Grid:
          - Full Desktop (1536px+ / 1920x1080): 4 columns, card size exactly ~357px x 548px (1:1 with reference)
          - Large Laptop / Standard Desktop (1280px-1535px): 4 columns, width decreases smoothly (~300px - 345px), height 540px
          - Semi-Web / Laptop (1024px-1279px): 2 columns, width ~360px - 400px, height 530px
          - Tablet (640px-1023px): 2 columns, width ~330px - 370px, height 515px
          - Mobile (<640px): 1 column centered, width ~340px - 365px, height 500px
          Every transition step decreases size gently and gracefully ("slower and slower").
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-6 2xl:gap-7 justify-items-center sm:justify-items-stretch">
          {INDUSTRIES.map((industry, index) => (
            <IndustryCardItem
              key={industry.id}
              industry={industry}
              cardIndex={index}
              isActiveOnMobile={activeCardId === industry.id}
              onMobileToggle={() => toggleMobileCard(industry.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function IndustryCardItem({
  industry,
  cardIndex,
  isActiveOnMobile,
  onMobileToggle,
}: {
  industry: IndustryItem;
  cardIndex: number;
  isActiveOnMobile: boolean;
  onMobileToggle: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [vectorIndex, setVectorIndex] = useState(cardIndex % MOTION_VECTORS.length);
  const hasInteractedRef = useRef(false);

  const handleMouseEnter = () => {
    if (hasInteractedRef.current) {
      // Rotate dynamically to the next kinetic motion vector on subsequent hovers
      setVectorIndex((prev) => (prev + 1) % MOTION_VECTORS.length);
    } else {
      hasInteractedRef.current = true;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    if (!isActiveOnMobile) {
      setVectorIndex((prev) => (prev + 1) % MOTION_VECTORS.length);
    }
    onMobileToggle();
  };

  const isRevealed = isHovered || isActiveOnMobile;
  const currentVector = MOTION_VECTORS[vectorIndex];

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="group relative w-full max-w-[365px] sm:max-w-[385px] lg:max-w-[420px] xl:max-w-none h-[500px] sm:h-[515px] lg:h-[530px] xl:h-[540px] 2xl:h-[548px] bg-white rounded-none border border-slate-200/90 shadow-xs hover:shadow-2xl hover:border-slate-400 transition-all duration-[850ms] overflow-hidden flex flex-col justify-between p-6 sm:p-7 xl:p-7 2xl:p-8 cursor-pointer select-none"
    >
      {/* ── TOP COMPARTMENT (Permanent Header — Always Visible & Solid Black) ── */}
      <div className="z-10 bg-white">
        {/* Category Tag + Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] sm:text-[11px] 2xl:text-[12px] font-extrabold tracking-[0.18em] uppercase text-slate-900 font-mono-caps">
            {industry.categoryTag}
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-none border border-slate-300 bg-slate-50 text-slate-800 shadow-2xs whitespace-nowrap">
            {industry.badge}
          </span>
        </div>

        {/* Main Title — Solid Deep Black (No Color Shift on Hover) */}
        <h3 className="font-sans font-black text-slate-950 text-xl sm:text-[22px] 2xl:text-[25px] leading-[1.2] tracking-tight mb-1">
          {industry.title}
        </h3>
      </div>

      {/* ── BOTTOM COMPARTMENT (Interactive Stage — 2 Sliding Layers with Dynamic Kinetic Vectors) ── */}
      <div className="relative flex-1 w-full overflow-hidden mt-2.5">
        
        {/*
          LAYER 1: THE ILLUSTRATION (Visible by default)
          - Resting: translateX(0), translateY(0), opacity-100, scale-100
          - Active: Smoothly exits along the card's active kinetic vector over 850ms
        */}
        <div
          className={`absolute inset-0 flex flex-col justify-between transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
            isRevealed ? currentVector.layer1Active : currentVector.layer1Resting
          }`}
          aria-hidden="true"
        >
          {/* Main Illustration Area (Clean white canvas, no bluish tint or border box, enlarged presentation) */}
          <div className="w-full flex-1 flex items-center justify-center relative min-h-0 overflow-hidden">
            {industry.imageSrc ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={industry.imageSrc}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 640px) 365px, (max-width: 1024px) 385px, (max-width: 1536px) 345px, 357px"
                  className="object-contain scale-[1.04] sm:scale-105 transition-transform duration-[850ms] ease-out group-hover:scale-110"
                  priority={industry.id === "healthcare"}
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-3 sm:p-4">
                {industry.illustrationType === "healthcare" && <HealthcareIllustration />}
                {industry.illustrationType === "manufacturing" && <ManufacturingIllustration />}
                {industry.illustrationType === "logistics" && <LogisticsIllustration />}
                {industry.illustrationType === "ecommerce" && <EcommerceIllustration />}
                {industry.illustrationType === "fintech" && <FintechIllustration />}
                {industry.illustrationType === "ai" && <AiIllustration />}
                {industry.illustrationType === "education" && <EducationIllustration />}
                {industry.illustrationType === "realestate" && <RealEstateIllustration />}
              </div>
            )}
          </div>

          <div className="mt-2 text-[10px] font-bold text-slate-400 tracking-widest uppercase flex items-center gap-1.5 font-mono-caps shrink-0">
            <span className="w-1.5 h-1.5 bg-slate-900" />
            <span>Parther Technologies</span>
          </div>
        </div>

        {/*
          LAYER 2: THE DESCRIPTION & KEY CAPABILITIES (Hidden by default)
          - Resting: Off-stage along the card's active kinetic vector, opacity-0
          - Active: Smoothly glides in to (0,0), opacity-100 over 850ms
        */}
        <div
          className={`absolute inset-0 flex flex-col justify-between transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
            isRevealed ? currentVector.layer2Active : currentVector.layer2Resting
          }`}
        >
          {/* Scrollable text container */}
          <div className="overflow-y-auto pr-1 space-y-3.5 custom-scrollbar">
            <p className="text-slate-700 text-xs sm:text-[13px] 2xl:text-[14px] leading-relaxed font-normal">
              {industry.description}
            </p>

            {/* Key Capabilities List */}
            <div className="pt-3 border-t border-slate-100">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-950 mb-2.5 font-mono-caps">
                Key Capabilities
              </p>
              <ul className="space-y-2" role="list">
                {industry.capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs 2xl:text-[13px] text-slate-800 font-medium leading-snug"
                  >
                    <span
                      className="text-slate-950 font-bold shrink-0 text-sm leading-none mt-0.5"
                      aria-hidden="true"
                    >
                      ◎
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Actions Bar (Both Buttons Visible on Desktop & Mobile with Proper Gap) */}
          <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-4">
            <Link
              href={industry.href}
              onClick={(e) => e.stopPropagation()}
              className="text-[10px] sm:text-[11px] font-bold text-slate-500 hover:text-slate-950 uppercase tracking-widest font-mono-caps transition-colors shrink-0"
            >
              ARCHITECTURE
            </Link>
            <Link
              href={industry.href}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-slate-950 hover:bg-black text-white text-[11px] sm:text-xs font-bold font-mono-caps transition-all cursor-pointer group/link rounded-none shadow-xs hover:shadow-md whitespace-nowrap shrink-0 ml-auto"
            >
              <span>EXPLORE</span>
              <span
                className="inline-block transition-transform duration-300 group-hover/link:translate-x-1"
                aria-hidden="true"
              >
                &gt;
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ============================================================
   ENTERPRISE VECTOR ILLUSTRATIONS (Clean Minimalist Line Art)
   ============================================================ */

function HealthcareIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="30" x2="260" y2="30" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="20" y1="70" x2="260" y2="70" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="20" y1="110" x2="260" y2="110" stroke="#e2e8f0" strokeDasharray="3 3" />

      {/* Left: Secure EMR Records */}
      <g transform="translate(35, 45)">
        <rect x="0" y="0" width="46" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="10" width="18" height="3" fill="#0f172a" />
        <rect x="8" y="18" width="30" height="2" fill="#cbd5e1" />
        <rect x="8" y="24" width="26" height="2" fill="#cbd5e1" />
        <rect x="8" y="30" width="22" height="2" fill="#cbd5e1" />
        <circle cx="34" cy="46" r="7" fill="#0f172a" />
        <path d="M31 46 L33 48 L37 44" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Center: Medical Shield with Heartbeat Wave */}
      <g transform="translate(108, 16)">
        <path
          d="M32 4 C54 4 62 14 62 38 C62 66 38 88 32 94 C26 88 2 66 2 38 C2 14 10 4 32 4 Z"
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth="2"
        />
        <path
          d="M16 48 L24 48 L27 40 L31 58 L35 34 L38 52 L42 48 L48 48"
          stroke="#0f172a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="24" r="4" fill="#0f172a" />
      </g>

      {/* Right: Hospital Hub */}
      <g transform="translate(195, 45)">
        <rect x="0" y="0" width="50" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="18" y="8" width="14" height="4" fill="#0f172a" />
        <rect x="23" y="3" width="4" height="14" fill="#0f172a" />
        <rect x="8" y="25" width="8" height="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <rect x="21" y="25" width="8" height="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <rect x="34" y="25" width="8" height="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <rect x="18" y="44" width="14" height="18" fill="#0f172a" />
      </g>
    </svg>
  );
}

function ManufacturingIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 115 L140 60 L250 115" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Left: Industrial Precision Gear */}
      <g transform="translate(38, 45)">
        <circle cx="24" cy="24" r="18" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <circle cx="24" cy="24" r="8" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="22" y="2" width="4" height="6" fill="#0f172a" />
        <rect x="22" y="40" width="4" height="6" fill="#0f172a" />
        <rect x="2" y="22" width="6" height="4" fill="#0f172a" />
        <rect x="40" y="22" width="6" height="4" fill="#0f172a" />
      </g>

      {/* Center: Smart Foundry Furnace */}
      <g transform="translate(108, 16)">
        <rect x="0" y="10" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="16" y1="-4" x2="16" y2="10" stroke="#0f172a" strokeWidth="2" />
        <line x1="48" y1="-4" x2="48" y2="10" stroke="#0f172a" strokeWidth="2" />
        <rect x="8" y="25" width="48" height="16" fill="#0f172a" />
        <text x="32" y="36" fontSize="7" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="1">
          1450°C
        </text>
        <rect x="8" y="50" width="48" height="4" fill="#0f172a" />
        <circle cx="20" cy="72" r="5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <circle cx="44" cy="72" r="5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
      </g>

      {/* Right: Automated Checklist */}
      <g transform="translate(196, 42)">
        <rect x="0" y="0" width="48" height="64" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="14" y="-5" width="20" height="8" fill="#0f172a" />
        <circle cx="12" cy="18" r="4" fill="#0f172a" />
        <path d="M10 18 L11.5 19.5 L14 16.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
        <rect x="20" y="16" width="20" height="3" fill="#cbd5e1" />
        <circle cx="12" cy="30" r="4" fill="#0f172a" />
        <path d="M10 30 L11.5 31.5 L14 28.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
        <rect x="20" y="28" width="18" height="3" fill="#cbd5e1" />
      </g>
    </svg>
  );
}

function LogisticsIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 105 C80 65 160 125 260 75" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />

      {/* Left: GPS Pin */}
      <g transform="translate(36, 40)">
        <path
          d="M20 6 C11.2 6 4 13.2 4 22 C4 33 20 48 20 48 C20 48 36 33 36 22 C36 13.2 28.8 6 20 6 Z"
          fill="#f8fafc"
          stroke="#0f172a"
          strokeWidth="2"
        />
        <circle cx="20" cy="22" r="5" fill="#0f172a" />
      </g>

      {/* Center: Freight Commercial Truck */}
      <g transform="translate(100, 32)">
        <rect x="0" y="12" width="56" height="38" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <line x1="14" y1="12" x2="14" y2="50" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="28" y1="12" x2="28" y2="50" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="42" y1="12" x2="42" y2="50" stroke="#e2e8f0" strokeWidth="1.5" />
        <path d="M56 24 L70 24 L78 36 L78 50 L56 50 Z" fill="#0f172a" stroke="#0f172a" strokeWidth="2" />
        <polygon points="58,27 68,27 74,36 58,36" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
        <circle cx="16" cy="52" r="8" fill="#0f172a" />
        <circle cx="16" cy="52" r="3" fill="#ffffff" />
        <circle cx="42" cy="52" r="8" fill="#0f172a" />
        <circle cx="42" cy="52" r="3" fill="#ffffff" />
        <circle cx="68" cy="52" r="8" fill="#0f172a" />
        <circle cx="68" cy="52" r="3" fill="#ffffff" />
      </g>

      {/* Right: Live Telematics Gauge */}
      <g transform="translate(200, 42)">
        <rect x="0" y="0" width="46" height="54" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="23" cy="22" r="14" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="23" y1="22" x2="29" y2="16" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        <rect x="8" y="42" width="30" height="4" fill="#0f172a" />
      </g>
    </svg>
  );
}

function EcommerceIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="30" x2="260" y2="30" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="20" y1="110" x2="260" y2="110" stroke="#e2e8f0" strokeDasharray="3 3" />

      {/* Left: Product Showcase Card */}
      <g transform="translate(36, 40)">
        <rect x="0" y="0" width="46" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="34" height="24" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <rect x="6" y="38" width="22" height="3" fill="#0f172a" />
        <rect x="6" y="46" width="14" height="3" fill="#cbd5e1" />
      </g>

      {/* Center: Smart Shopping Cart */}
      <g transform="translate(108, 25)">
        <rect x="4" y="10" width="60" height="70" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <path d="M16 28 L20 44 L48 44 L54 28 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="24" cy="52" r="4" fill="#0f172a" />
        <circle cx="44" cy="52" r="4" fill="#0f172a" />
        <polygon points="34,60 38,68 34,76 30,68" fill="#0f172a" />
      </g>

      {/* Right: Instant Checkout Padlock */}
      <g transform="translate(196, 40)">
        <rect x="0" y="16" width="48" height="44" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <path d="M14 16 L14 10 C14 4.5 18.5 0 24 0 C29.5 0 34 4.5 34 10 L34 16" stroke="#0f172a" strokeWidth="2" fill="none" />
        <circle cx="24" cy="36" r="4" fill="#0f172a" />
        <rect x="22" y="36" width="4" height="8" fill="#0f172a" />
      </g>
    </svg>
  );
}

function FintechIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="65" r="55" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Left: Security Ledger Pad */}
      <g transform="translate(36, 42)">
        <rect x="0" y="0" width="46" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="10" width="30" height="4" fill="#0f172a" />
        <rect x="8" y="20" width="22" height="3" fill="#cbd5e1" />
        <rect x="8" y="28" width="26" height="3" fill="#cbd5e1" />
        <rect x="8" y="36" width="18" height="3" fill="#cbd5e1" />
      </g>

      {/* Center: Bank Vault & Currency Node */}
      <g transform="translate(108, 18)">
        <rect x="0" y="0" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <circle cx="32" cy="42" r="22" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
        <circle cx="32" cy="42" r="12" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <text x="32" y="47" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          ₹
        </text>
        <line x1="32" y1="12" x2="32" y2="18" stroke="#0f172a" strokeWidth="2" />
        <line x1="32" y1="66" x2="32" y2="72" stroke="#0f172a" strokeWidth="2" />
      </g>

      {/* Right: Instant Payment Terminal */}
      <g transform="translate(196, 40)">
        <rect x="0" y="0" width="46" height="66" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="34" height="16" fill="#0f172a" />
        <rect x="10" y="14" width="16" height="4" fill="#22c55e" />
        <circle cx="14" cy="34" r="2.5" fill="#e2e8f0" />
        <circle cx="23" cy="34" r="2.5" fill="#e2e8f0" />
        <circle cx="32" cy="34" r="2.5" fill="#e2e8f0" />
        <circle cx="14" cy="44" r="2.5" fill="#e2e8f0" />
        <circle cx="23" cy="44" r="2.5" fill="#e2e8f0" />
        <circle cx="32" cy="44" r="2.5" fill="#e2e8f0" />
      </g>
    </svg>
  );
}

function AiIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="70" x2="140" y2="35" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="140" y1="35" x2="220" y2="70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="140" y1="35" x2="140" y2="105" stroke="#0f172a" strokeWidth="2" />

      {/* Left: Data Ingestion Node */}
      <g transform="translate(36, 45)">
        <rect x="0" y="0" width="46" height="52" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="23" cy="18" r="8" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="10" y="34" width="26" height="3" fill="#cbd5e1" />
        <rect x="14" y="41" width="18" height="3" fill="#cbd5e1" />
      </g>

      {/* Center: AI Neural Chip Core */}
      <g transform="translate(108, 16)">
        <rect x="0" y="0" width="64" height="64" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <rect x="12" y="12" width="40" height="40" fill="#0f172a" />
        <line x1="18" y1="-4" x2="18" y2="0" stroke="#0f172a" strokeWidth="2" />
        <line x1="32" y1="-4" x2="32" y2="0" stroke="#0f172a" strokeWidth="2" />
        <line x1="46" y1="-4" x2="46" y2="0" stroke="#0f172a" strokeWidth="2" />
        <line x1="18" y1="64" x2="18" y2="68" stroke="#0f172a" strokeWidth="2" />
        <line x1="32" y1="64" x2="32" y2="68" stroke="#0f172a" strokeWidth="2" />
        <line x1="46" y1="64" x2="46" y2="68" stroke="#0f172a" strokeWidth="2" />
        <path d="M24 32 L32 24 L40 32 L32 40 Z" fill="#ffffff" />
      </g>

      {/* Right: Autonomous Agent Output */}
      <g transform="translate(196, 45)">
        <rect x="0" y="0" width="48" height="52" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="10" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        <path d="M20 22 L23 25 L29 19" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="38" width="28" height="4" fill="#0f172a" />
      </g>
    </svg>
  );
}

function EducationIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="110" x2="250" y2="110" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Left: LMS Digital Coursebook */}
      <g transform="translate(36, 42)">
        <rect x="0" y="0" width="46" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="10" width="30" height="4" fill="#0f172a" />
        <rect x="8" y="20" width="22" height="2" fill="#cbd5e1" />
        <rect x="8" y="26" width="26" height="2" fill="#cbd5e1" />
        <rect x="8" y="32" width="18" height="2" fill="#cbd5e1" />
        <circle cx="23" cy="46" r="6" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
      </g>

      {/* Center: Graduation Mortarboard & Academic Portal */}
      <g transform="translate(108, 22)">
        <polygon points="32,8 60,20 32,32 4,20" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <path d="M14 26 L14 44 C14 52 50 52 50 44 L50 26" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="56" y1="20" x2="56" y2="40" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="56" cy="42" r="3" fill="#0f172a" />
        <rect x="18" y="58" width="28" height="20" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="24" y1="64" x2="40" y2="64" stroke="#0f172a" strokeWidth="1" />
        <line x1="24" y1="70" x2="36" y2="70" stroke="#0f172a" strokeWidth="1" />
      </g>

      {/* Right: Real-Time Performance Analytics */}
      <g transform="translate(196, 42)">
        <rect x="0" y="0" width="48" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="14" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="24" y1="24" x2="30" y2="18" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        <rect x="8" y="44" width="32" height="4" fill="#0f172a" />
      </g>
    </svg>
  );
}

function RealEstateIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 120 L260 120" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* Left: Architectural Blueprint Plan */}
      <g transform="translate(36, 44)">
        <rect x="0" y="0" width="46" height="58" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="12" y1="0" x2="12" y2="58" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="28" y1="0" x2="28" y2="58" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="0" y1="18" x2="46" y2="18" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="0" y1="38" x2="46" y2="38" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="16" y="22" width="20" height="24" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
      </g>

      {/* Center: Modern Commercial High-Rise Tower */}
      <g transform="translate(108, 14)">
        <rect x="0" y="16" width="40" height="90" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <rect x="28" y="32" width="32" height="74" rx="0" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        {/* Tower Windows */}
        <rect x="8" y="26" width="6" height="6" fill="#0f172a" />
        <rect x="20" y="26" width="6" height="6" fill="#0f172a" />
        <rect x="8" y="42" width="6" height="6" fill="#0f172a" />
        <rect x="20" y="42" width="6" height="6" fill="#0f172a" />
        <rect x="8" y="58" width="6" height="6" fill="#0f172a" />
        <rect x="20" y="58" width="6" height="6" fill="#0f172a" />
        <rect x="36" y="44" width="6" height="6" fill="#0f172a" />
        <rect x="48" y="44" width="6" height="6" fill="#0f172a" />
        <rect x="36" y="60" width="6" height="6" fill="#0f172a" />
        <rect x="48" y="60" width="6" height="6" fill="#0f172a" />
      </g>

      {/* Right: Construction Crane & Site Telemetry */}
      <g transform="translate(196, 30)">
        <line x1="16" y1="90" x2="16" y2="10" stroke="#0f172a" strokeWidth="2" />
        <line x1="0" y1="18" x2="48" y2="18" stroke="#0f172a" strokeWidth="2" />
        <line x1="16" y1="10" x2="40" y2="18" stroke="#0f172a" strokeWidth="1" />
        <line x1="38" y1="18" x2="38" y2="40" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="2 2" />
        <rect x="32" y="40" width="12" height="12" fill="#0f172a" />
      </g>
    </svg>
  );
}
