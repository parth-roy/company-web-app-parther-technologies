"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  href: string;
  categoryTag: string;
  badge: string;
  description: string;
  capabilities: string[];
  illustrationType:
    | "ai"
    | "saas"
    | "erp"
    | "custom"
    | "ecommerce"
    | "crm"
    | "cloud"
    | "mobile"
    | "hrms"
    | "transformation"
    | "cms"
    | "rapid";
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

const SERVICES: ServiceItem[] = [
  {
    id: "ai-automation",
    title: "Enterprise AI Agents & Workflow Automation",
    href: "/services/ai-automation",
    categoryTag: "AGENTIC AI & RAG",
    badge: "DPDP Compliant",
    description:
      "Production-grade agentic workflows, private Retrieval-Augmented Generation (RAG) pipelines, and deterministic tool-calling schemas with strict data sovereignty.",
    capabilities: [
      "LangGraph Multi-Agent Orchestration",
      "pgvector Semantic Knowledge Search",
      "Private VPC LLM Inference & Serving",
      "Automated PII Redaction & Guardrails",
    ],
    illustrationType: "ai",
  },
  {
    id: "saas-product-development",
    title: "Enterprise SaaS Product Engineering",
    href: "/services/saas-product-development",
    categoryTag: "MULTI-TENANT SAAS",
    badge: "99.99% Uptime",
    description:
      "End-to-end multi-tenant SaaS architecture design, rapid MVP prototyping, and scalable cloud engineering with isolated tenant schemas and automated billing.",
    capabilities: [
      "Row-Level Security & Schema Isolation",
      "Automated Stripe & Razorpay Subscriptions",
      "BullMQ Distributed Job Queues",
      "Fine-Grained RBAC & Team Management",
    ],
    illustrationType: "saas",
  },
  {
    id: "erp-systems",
    title: "Enterprise ERP & Supply Chain Systems",
    href: "/services/erp-systems",
    categoryTag: "ENTERPRISE ERP",
    badge: "Real-Time Telemetry",
    description:
      "High-throughput cloud-native ERP architectures for manufacturing, supply chain, and logistics enterprises — connecting shop-floor IoT directly with executive accounting.",
    capabilities: [
      "Multi-Warehouse Inventory & SKU Tracking",
      "Automated GST & E-Way Bill Compliance",
      "Real-Time Production Floor Telemetry",
      "Double-Entry Financial Ledgers",
    ],
    illustrationType: "erp",
  },
  {
    id: "custom-software-engineering",
    title: "Custom Software Engineering & Architecture",
    href: "/services/custom-software-engineering",
    categoryTag: "PLATFORM ARCHITECTURE",
    badge: "Zero Technical Debt",
    description:
      "Bespoke high-concurrency systems, high-volume event architectures, and resilient backend microservices engineered strictly to your core business outcomes.",
    capabilities: [
      "100% Strict TypeScript Full-Stack",
      "Event-Driven Microservices Architecture",
      "Zero-Downtime Migration Strategies",
      "Rigorous Automated CI/CD & Testing",
    ],
    illustrationType: "custom",
  },
  {
    id: "ecommerce-architecture",
    title: "Headless E-Commerce & Retail Architecture",
    href: "/services/ecommerce-architecture",
    categoryTag: "HEADLESS COMMERCE",
    badge: "Sub-Second Checkout",
    description:
      "Ultra-fast headless storefronts, multi-currency payment pipelines, and high-concurrency checkout engines designed for zero cart drop-offs and massive flash sales.",
    capabilities: [
      "Sub-Second Page Loads via Edge CDNs",
      "Omnichannel Inventory Synchronization",
      "Automated Payment Gateway Failover",
      "Custom ERP & Warehouse Integration",
    ],
    illustrationType: "ecommerce",
  },
  {
    id: "crm",
    title: "Custom CRM & Sales Pipeline Automation",
    href: "/services/crm",
    categoryTag: "PIPELINE AUTOMATION",
    badge: "Real-Time Webhooks",
    description:
      "Purpose-built CRM architectures with automated lead qualification, multi-channel customer communications, and real-time conversion telemetries.",
    capabilities: [
      "Multi-Stage Visual Sales Funnels",
      "WhatsApp, Email & SMS Automation",
      "Granular Sales Rep Permissions & Audit",
      "Bi-Directional ERP & Accounting Sync",
    ],
    illustrationType: "crm",
  },
  {
    id: "enterprise-cloud",
    title: "Enterprise Cloud & DevOps Engineering",
    href: "/services/enterprise-cloud",
    categoryTag: "CLOUD & DEVOPS",
    badge: "SOC2 / ISO Ready",
    description:
      "Resilient cloud infrastructure automation, Kubernetes pod orchestration, infrastructure-as-code with Terraform, and zero-trust network perimeter boundaries.",
    capabilities: [
      "Terraform Infrastructure as Code (IaC)",
      "Automated Multi-Stage CI/CD Pipelines",
      "Zero-Trust VPC & Cloudflare Security",
      "Auto-Scaling Serverless & Container Pods",
    ],
    illustrationType: "cloud",
  },
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Engineering",
    href: "/services/mobile-app-development",
    categoryTag: "NATIVE & HYBRID APPS",
    badge: "60 FPS Native",
    description:
      "High-performance iOS and Android applications with offline-first synchronization, sub-second GPS tracking, and seamless biometric authentication.",
    capabilities: [
      "React Native & Flutter 60 FPS Performance",
      "Offline-First SQLite Local Synchronization",
      "Background GPS & Telemetry Engine",
      "Biometric FaceID / Fingerprint Auth",
    ],
    illustrationType: "mobile",
  },
  {
    id: "hrms",
    title: "Enterprise HRMS & Payroll Automation",
    href: "/services/hrms",
    categoryTag: "WORKFORCE PLATFORMS",
    badge: "Statutory PF/ESI",
    description:
      "Comprehensive human resource management platforms with geo-fenced biometric attendance, automated multi-tier payroll, and statutory tax compliance.",
    capabilities: [
      "Automated PF, ESI, TDS & Gratuity Calculation",
      "Geo-Fenced Biometric Attendance Tracking",
      "Multi-Tier Leave Approval Workflows",
      "Direct Bank Salary Disbursal via RazorpayX",
    ],
    illustrationType: "hrms",
  },
  {
    id: "digital-transformation",
    title: "Enterprise Digital Transformation",
    href: "/services/digital-transformation",
    categoryTag: "LEGACY MODERNIZATION",
    badge: "Zero Downtime",
    description:
      "Pragmatic digital modernization: migrating brittle monolithic legacy applications to cloud-native microservices with zero operational disruption.",
    capabilities: [
      "Strangler Fig Migration Architecture",
      "Legacy SQL Data Cleansing & Extraction",
      "Modern API Gateway Layer Integration",
      "Continuous Operational Parity Auditing",
    ],
    illustrationType: "transformation",
  },
  {
    id: "business-websites-cms",
    title: "High-Performance Business Websites & CMS",
    href: "/services/business-websites-cms",
    categoryTag: "HEADLESS CMS",
    badge: "100/100 Lighthouse",
    description:
      "Blazing fast marketing websites powered by Next.js and Headless CMS — engineered for peak conversion rates, top SEO rankings, and sub-second TTFB.",
    capabilities: [
      "Perfect 100/100 Core Web Vitals",
      "Intuitive Decoupled Headless CMS Editing",
      "Dynamic MDX Content Generation & PSEO",
      "Global Edge CDN Caching & Pre-Rendering",
    ],
    illustrationType: "cms",
  },
  {
    id: "entry-level-websites",
    title: "Rapid-Deployment Business Websites",
    href: "/services/entry-level-websites",
    categoryTag: "RAPID BRAND LAUNCH",
    badge: "Production-Ready",
    description:
      "Fast-track enterprise brand portals built on verified technical foundations — ready to generate qualified business leads in 14 days.",
    capabilities: [
      "Modular Component Design System",
      "Direct Lead Capture & CRM Integration",
      "Mobile-First Responsive Layouts",
      "Fully Managed SSL & Custom Domain Setup",
    ],
    illustrationType: "rapid",
  },
];

export function ServicesSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const toggleMobileCard = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services-grid" className="relative z-10 bg-cf-card text-cf-text py-20 sm:py-28 border-t border-cf-border">
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 md:px-8 xl:px-10">

        {/* Section Header — Bold, Editorial & Architectural (Identical to Industries) */}
        <div className="mb-14 sm:mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold tracking-[0.2em] text-slate-900 uppercase font-mono-caps">
            ENGINEERING PRACTICES &amp; TECHNICAL CAPABILITIES
          </span>
          <h1 className="font-syncopate font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-950">
            Architectural Services
          </h1>
          <div className="w-16 h-1 bg-slate-950 mt-1 mb-2" />
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            We do not just write code. We eliminate operational bottlenecks through purpose-built technology stacks, zero-trust infrastructure, and mathematical reliability across 12 core disciplines.
          </p>
        </div>

        {/* 
          Accenture-Calibrated Executive Responsive Grid (101% Identical to Industries):
          - Desktop (1536px+): 4 columns
          - Laptop / Standard Desktop: 4 columns
          - Tablet / Laptop (640px-1279px): 2 columns
          - Mobile (<640px): 1 column centered
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-6 2xl:gap-7 justify-items-center sm:justify-items-stretch">
          {SERVICES.map((service, index) => (
            <ServiceCardItem
              key={service.id}
              service={service}
              cardIndex={index}
              isActiveOnMobile={activeCardId === service.id}
              onMobileToggle={() => toggleMobileCard(service.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCardItem({
  service,
  cardIndex,
  isActiveOnMobile,
  onMobileToggle,
}: {
  service: ServiceItem;
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
            {service.categoryTag}
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-none border border-slate-300 bg-slate-50 text-slate-800 shadow-2xs whitespace-nowrap">
            {service.badge}
          </span>
        </div>

        {/* Main Title — Solid Deep Black (No Color Shift on Hover) */}
        <h3 className="font-sans font-black text-slate-950 text-xl sm:text-[22px] 2xl:text-[25px] leading-[1.2] tracking-tight mb-1">
          {service.title}
        </h3>
      </div>

      {/* ── BOTTOM COMPARTMENT (Interactive Stage — 2 Sliding Layers with Dynamic Kinetic Vectors) ── */}
      <div className="relative flex-1 w-full overflow-hidden mt-2.5">
        
        {/*
          LAYER 1: THE ARCHITECTURAL BLUEPRINT ILLUSTRATION (Visible by default)
          - Resting: translateX(0), translateY(0), opacity-100, scale-100
          - Active: Smoothly exits along the card's active kinetic vector over 850ms
        */}
        <div
          className={`absolute inset-0 flex flex-col justify-between transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
            isRevealed ? currentVector.layer1Active : currentVector.layer1Resting
          }`}
          aria-hidden="true"
        >
          {/* Main Blueprint Diagram Area */}
          <div className="w-full flex-1 flex items-center justify-center relative min-h-0 overflow-hidden p-2 sm:p-3">
            {service.illustrationType === "ai" && <AiIllustration />}
            {service.illustrationType === "saas" && <SaasIllustration />}
            {service.illustrationType === "erp" && <ErpIllustration />}
            {service.illustrationType === "custom" && <CustomEngineeringIllustration />}
            {service.illustrationType === "ecommerce" && <EcommerceIllustration />}
            {service.illustrationType === "crm" && <CrmIllustration />}
            {service.illustrationType === "cloud" && <CloudDevopsIllustration />}
            {service.illustrationType === "mobile" && <MobileAppIllustration />}
            {service.illustrationType === "hrms" && <HrmsIllustration />}
            {service.illustrationType === "transformation" && <DigitalTransformationIllustration />}
            {service.illustrationType === "cms" && <WebsitesCmsIllustration />}
            {service.illustrationType === "rapid" && <RapidWebsitesIllustration />}
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
              {service.description}
            </p>

            {/* Key Capabilities List */}
            <div className="pt-3 border-t border-slate-100">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-950 mb-2.5 font-mono-caps">
                Key Capabilities
              </p>
              <ul className="space-y-2" role="list">
                {service.capabilities.map((item) => (
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
              href={service.href}
              onClick={(e) => e.stopPropagation()}
              className="text-[10px] sm:text-[11px] font-bold text-slate-500 hover:text-slate-950 uppercase tracking-widest font-mono-caps transition-colors shrink-0"
            >
              ARCHITECTURE
            </Link>
            <Link
              href={service.href}
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
   ARCHITECTURAL VECTOR BLUEPRINTS (Clean Minimalist Line Art)
   ============================================================ */

function AiIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="30" x2="260" y2="30" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="20" y1="70" x2="260" y2="70" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="20" y1="110" x2="260" y2="110" stroke="#e2e8f0" strokeDasharray="3 3" />

      {/* Left: Multi-Agent Nodes */}
      <g transform="translate(30, 35)">
        <rect x="0" y="0" width="50" height="70" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="10" width="34" height="4" fill="#0f172a" />
        <circle cx="15" cy="28" r="4" fill="#0f172a" />
        <circle cx="35" cy="28" r="4" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1" />
        <circle cx="25" cy="48" r="5" fill="#0f172a" />
        <line x1="15" y1="28" x2="25" y2="48" stroke="#0f172a" strokeWidth="1" />
        <line x1="35" y1="28" x2="25" y2="48" stroke="#0f172a" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="10" y="60" width="30" height="2" fill="#cbd5e1" />
      </g>

      {/* Center: Directed Neural Graph & Vector Embedding */}
      <g transform="translate(105, 18)">
        <ellipse cx="35" cy="15" rx="32" ry="10" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <path d="M3 15 V85 C3 95 67 95 67 85 V15" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <ellipse cx="35" cy="45" rx="32" ry="10" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />
        <ellipse cx="35" cy="70" rx="32" ry="10" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />
        <rect x="16" y="32" width="38" height="6" fill="#0f172a" />
        <text x="35" y="37" fontSize="5" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.8">
          PGVECTOR
        </text>
        <circle cx="25" cy="58" r="3" fill="#0f172a" />
        <circle cx="45" cy="58" r="3" fill="#0f172a" />
        <line x1="25" y1="58" x2="45" y2="58" stroke="#0f172a" strokeWidth="1" />
      </g>

      {/* Right: RAG Orchestration Engine */}
      <g transform="translate(195, 35)">
        <rect x="0" y="0" width="54" height="70" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="10" width="22" height="4" fill="#0f172a" />
        <rect x="8" y="20" width="38" height="2" fill="#cbd5e1" />
        <rect x="8" y="26" width="32" height="2" fill="#cbd5e1" />
        <rect x="8" y="38" width="38" height="18" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="27" y="50" fontSize="7" fontWeight="bold" fill="#0f172a" textAnchor="middle" letterSpacing="0.5">
          RAG
        </text>
        <circle cx="44" cy="62" r="3" fill="#0f172a" />
      </g>
    </svg>
  );
}

function SaasIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 110 L140 30 L260 110" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Left: Tenant A Pod */}
      <g transform="translate(35, 45)">
        <rect x="0" y="0" width="48" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <rect x="6" y="18" width="20" height="2" fill="#cbd5e1" />
        <rect x="6" y="26" width="36" height="14" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="24" y="36" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          TENANT A
        </text>
        <rect x="6" y="46" width="36" height="6" fill="#0f172a" />
      </g>

      {/* Center: High-Concurrency Distributed Event Router */}
      <g transform="translate(108, 15)">
        <rect x="0" y="10" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="18" width="48" height="5" fill="#0f172a" />
        <rect x="8" y="30" width="48" height="14" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="32" y="40" fontSize="7" fontWeight="bold" fill="#0f172a" textAnchor="middle" letterSpacing="0.8">
          REDIS BUS
        </text>
        <line x1="8" y1="56" x2="56" y2="56" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="20" cy="56" r="3" fill="#0f172a" />
        <circle cx="44" cy="56" r="3" fill="#0f172a" />
        <rect x="8" y="70" width="48" height="18" fill="#0f172a" />
        <text x="32" y="82" fontSize="7" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="1">
          99.99%
        </text>
      </g>

      {/* Right: Tenant B Pod */}
      <g transform="translate(195, 45)">
        <rect x="0" y="0" width="48" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <rect x="6" y="18" width="20" height="2" fill="#cbd5e1" />
        <rect x="6" y="26" width="36" height="14" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="24" y="36" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          TENANT B
        </text>
        <rect x="6" y="46" width="36" height="6" fill="#0f172a" />
      </g>
    </svg>
  );
}

function ErpIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="40" x2="250" y2="40" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="30" y1="90" x2="250" y2="90" stroke="#e2e8f0" strokeDasharray="3 3" />

      {/* Left: Inventory & Warehouse Ledger */}
      <g transform="translate(35, 38)">
        <rect x="0" y="0" width="48" height="64" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="10" width="24" height="4" fill="#0f172a" />
        <rect x="8" y="20" width="32" height="2" fill="#cbd5e1" />
        <rect x="8" y="26" width="28" height="2" fill="#cbd5e1" />
        <rect x="8" y="36" width="32" height="18" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="24" y="48" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          SKU #5820
        </text>
      </g>

      {/* Center: Multi-Warehouse Telemetry Engine */}
      <g transform="translate(108, 18)">
        <rect x="0" y="10" width="64" height="90" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="20" width="48" height="6" fill="#0f172a" />
        <path d="M12 55 L24 45 L36 50 L48 35" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="35" r="3" fill="#0f172a" />
        <rect x="8" y="68" width="48" height="12" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="32" y="77" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          GSTIN / ULIP
        </text>
        <rect x="8" y="86" width="48" height="6" fill="#0f172a" />
      </g>

      {/* Right: Double-Entry Financial Vault */}
      <g transform="translate(195, 38)">
        <rect x="0" y="0" width="48" height="64" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="10" width="32" height="4" fill="#0f172a" />
        <circle cx="24" cy="32" r="12" stroke="#0f172a" strokeWidth="1.5" />
        <path d="M24 24 V40 M16 32 H32" stroke="#0f172a" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="8" y="50" width="32" height="6" fill="#0f172a" />
      </g>
    </svg>
  );
}

function CustomEngineeringIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 70 H260" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Left: Strict Contract API Terminal */}
      <g transform="translate(32, 38)">
        <rect x="0" y="0" width="52" height="64" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="0" y="0" width="52" height="12" fill="#0f172a" />
        <circle cx="8" cy="6" r="2" fill="#ffffff" />
        <circle cx="14" cy="6" r="2" fill="#ffffff" />
        <text x="8" y="24" fontSize="7" fontWeight="bold" fill="#0f172a" fontFamily="monospace">
          &gt; ZOD
        </text>
        <rect x="8" y="32" width="36" height="2" fill="#cbd5e1" />
        <rect x="8" y="38" width="28" height="2" fill="#cbd5e1" />
        <rect x="8" y="48" width="36" height="8" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
      </g>

      {/* Center: Core Microservice Architecture Node */}
      <g transform="translate(108, 16)">
        <rect x="0" y="10" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="18" width="48" height="6" fill="#0f172a" />
        <circle cx="32" cy="50" r="16" stroke="#0f172a" strokeWidth="2" />
        <circle cx="32" cy="50" r="6" fill="#0f172a" />
        <line x1="32" y1="28" x2="32" y2="72" stroke="#0f172a" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="8" y="78" width="48" height="16" fill="#0f172a" />
        <text x="32" y="89" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.5">
          TYPESCRIPT
        </text>
      </g>

      {/* Right: Postgres Schema Cluster */}
      <g transform="translate(196, 38)">
        <rect x="0" y="0" width="52" height="64" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="10" width="36" height="4" fill="#0f172a" />
        <rect x="8" y="20" width="36" height="12" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="26" y="29" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          PRISMA
        </text>
        <rect x="8" y="38" width="36" height="2" fill="#cbd5e1" />
        <rect x="8" y="44" width="24" height="2" fill="#cbd5e1" />
        <circle cx="36" cy="52" r="4" fill="#0f172a" />
      </g>
    </svg>
  );
}

function EcommerceIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 100 C75 50 165 130 255 60" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Left: Edge CDN Storefront Node */}
      <g transform="translate(32, 40)">
        <rect x="0" y="0" width="50" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="38" height="4" fill="#0f172a" />
        <rect x="6" y="16" width="18" height="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <rect x="28" y="16" width="16" height="4" fill="#cbd5e1" />
        <rect x="28" y="24" width="12" height="4" fill="#cbd5e1" />
        <rect x="6" y="42" width="38" height="12" fill="#0f172a" />
        <text x="25" y="51" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle">
          EDGE CDN
        </text>
      </g>

      {/* Center: High-Concurrency Checkout Pipeline */}
      <g transform="translate(108, 16)">
        <rect x="0" y="10" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="20" width="48" height="6" fill="#0f172a" />
        <circle cx="32" cy="46" r="14" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        <path d="M25 46 L30 51 L40 40" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="68" width="48" height="14" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="32" y="78" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          0.8s CHECKOUT
        </text>
        <rect x="8" y="88" width="48" height="6" fill="#0f172a" />
      </g>

      {/* Right: Payment Orchestrator */}
      <g transform="translate(196, 40)">
        <rect x="0" y="0" width="50" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="8" width="34" height="4" fill="#0f172a" />
        <rect x="8" y="20" width="34" height="20" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="26" width="34" height="4" fill="#0f172a" />
        <rect x="12" y="34" width="8" height="2" fill="#cbd5e1" />
        <rect x="8" y="48" width="34" height="6" fill="#0f172a" />
      </g>
    </svg>
  );
}

function CrmIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="50" x2="250" y2="50" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="30" y1="85" x2="250" y2="85" stroke="#e2e8f0" strokeDasharray="3 3" />

      {/* Left: Lead Capture Pipeline */}
      <g transform="translate(35, 42)">
        <rect x="0" y="0" width="48" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <circle cx="14" cy="24" r="5" fill="#0f172a" />
        <circle cx="28" cy="24" r="5" fill="#cbd5e1" />
        <rect x="6" y="36" width="36" height="2" fill="#cbd5e1" />
        <rect x="6" y="42" width="26" height="2" fill="#cbd5e1" />
        <rect x="6" y="48" width="36" height="6" fill="#0f172a" />
      </g>

      {/* Center: Multi-Channel Automated Funnel */}
      <g transform="translate(108, 16)">
        <polygon points="4,10 60,10 44,70 20,70" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="10" y1="28" x2="54" y2="28" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="16" y1="48" x2="48" y2="48" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="18" y="78" width="28" height="24" fill="#0f172a" />
        <text x="32" y="93" fontSize="8" fontWeight="bold" fill="#ffffff" textAnchor="middle">
          ROI
        </text>
      </g>

      {/* Right: Real-Time Webhook Engine */}
      <g transform="translate(195, 42)">
        <rect x="0" y="0" width="48" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <rect x="6" y="18" width="36" height="14" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="24" y="28" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          WEBHOOK
        </text>
        <circle cx="16" cy="42" r="3" fill="#0f172a" />
        <circle cx="32" cy="42" r="3" fill="#0f172a" />
        <line x1="16" y1="42" x2="32" y2="42" stroke="#0f172a" strokeWidth="1" />
        <rect x="6" y="50" width="36" height="4" fill="#0f172a" />
      </g>
    </svg>
  );
}

function CloudDevopsIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 110 L140 40 L260 110" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Left: Terraform Infrastructure Code Node */}
      <g transform="translate(32, 42)">
        <rect x="0" y="0" width="50" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="38" height="4" fill="#0f172a" />
        <polygon points="12,18 20,24 12,30" fill="#0f172a" />
        <polygon points="24,24 32,30 24,36" fill="#0f172a" />
        <polygon points="12,32 20,38 12,44" fill="#cbd5e1" />
        <rect x="6" y="48" width="38" height="6" fill="#0f172a" />
      </g>

      {/* Center: Zero-Trust VPC & Pod Mesh */}
      <g transform="translate(108, 16)">
        <rect x="0" y="10" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="18" width="48" height="6" fill="#0f172a" />
        <circle cx="20" cy="40" r="7" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <circle cx="44" cy="40" r="7" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <circle cx="32" cy="62" r="8" fill="#0f172a" />
        <line x1="20" y1="40" x2="32" y2="62" stroke="#0f172a" strokeWidth="1" />
        <line x1="44" y1="40" x2="32" y2="62" stroke="#0f172a" strokeWidth="1" />
        <rect x="8" y="78" width="48" height="16" fill="#0f172a" />
        <text x="32" y="89" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.8">
          VPC MESH
        </text>
      </g>

      {/* Right: CI/CD Automated Pipeline */}
      <g transform="translate(196, 42)">
        <rect x="0" y="0" width="50" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="38" height="4" fill="#0f172a" />
        <circle cx="16" cy="24" r="5" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="34" cy="24" r="5" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="21" y1="24" x2="29" y2="24" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="36" width="38" height="12" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="25" y="45" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          DEPLOY
        </text>
        <rect x="6" y="52" width="38" height="4" fill="#0f172a" />
      </g>
    </svg>
  );
}

function MobileAppIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 110 H250" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Left: SQLite Offline Storage Engine */}
      <g transform="translate(35, 42)">
        <rect x="0" y="0" width="46" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <ellipse cx="23" cy="12" rx="16" ry="6" stroke="#0f172a" strokeWidth="1.5" fill="#ffffff" />
        <path d="M7 12 V38 C7 44 39 44 39 38 V12" stroke="#0f172a" strokeWidth="1.5" />
        <ellipse cx="23" cy="25" rx="16" ry="6" stroke="#0f172a" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="6" y="48" width="34" height="6" fill="#0f172a" />
      </g>

      {/* Center: Mobile Device Frame with 60 FPS Native Telemetry */}
      <g transform="translate(112, 14)">
        <rect x="0" y="4" width="56" height="96" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <line x1="20" y1="10" x2="36" y2="10" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="6" y="18" width="44" height="12" fill="#0f172a" />
        <text x="28" y="27" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle">
          60 FPS
        </text>
        <circle cx="28" cy="50" r="14" stroke="#0f172a" strokeWidth="1.5" />
        <path d="M22 50 L26 54 L34 44" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        <rect x="8" y="72" width="40" height="4" fill="#cbd5e1" />
        <rect x="8" y="80" width="28" height="4" fill="#cbd5e1" />
        <circle cx="28" cy="92" r="3" fill="#0f172a" />
      </g>

      {/* Right: GPS Radar Dispatch Node */}
      <g transform="translate(196, 42)">
        <rect x="0" y="0" width="48" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <circle cx="24" cy="30" r="14" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="24" cy="30" r="4" fill="#0f172a" />
        <rect x="6" y="48" width="36" height="8" fill="#0f172a" />
      </g>
    </svg>
  );
}

function HrmsIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="40" x2="260" y2="40" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="20" y1="90" x2="260" y2="90" stroke="#e2e8f0" strokeDasharray="3 3" />

      {/* Left: Biometric Attendance Node */}
      <g transform="translate(35, 40)">
        <rect x="0" y="0" width="48" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <circle cx="24" cy="28" r="10" stroke="#0f172a" strokeWidth="1.5" />
        <path d="M24 22 V28 H28" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="6" y="46" width="36" height="8" fill="#0f172a" />
      </g>

      {/* Center: Multi-Tier Hierarchy & Payroll Ledger */}
      <g transform="translate(108, 16)">
        <rect x="0" y="10" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="18" width="48" height="6" fill="#0f172a" />
        <circle cx="32" cy="36" r="6" fill="#0f172a" />
        <circle cx="18" cy="54" r="5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <circle cx="46" cy="54" r="5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <line x1="32" y1="42" x2="18" y2="49" stroke="#0f172a" strokeWidth="1" />
        <line x1="32" y1="42" x2="46" y2="49" stroke="#0f172a" strokeWidth="1" />
        <rect x="8" y="72" width="48" height="16" fill="#0f172a" />
        <text x="32" y="83" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.8">
          PF &amp; ESI
        </text>
      </g>

      {/* Right: Direct Salary Disbursement */}
      <g transform="translate(195, 40)">
        <rect x="0" y="0" width="48" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <rect x="6" y="18" width="36" height="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="24" y="29" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          PAYOUT
        </text>
        <circle cx="16" cy="44" r="3" fill="#0f172a" />
        <circle cx="32" cy="44" r="3" fill="#0f172a" />
        <rect x="6" y="52" width="36" height="4" fill="#0f172a" />
      </g>
    </svg>
  );
}

function DigitalTransformationIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 70 H260" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />

      {/* Left: Monolithic Legacy Box */}
      <g transform="translate(32, 38)">
        <rect x="0" y="0" width="52" height="64" rx="0" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="40" height="6" fill="#0f172a" />
        <text x="26" y="24" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          MONOLITH
        </text>
        <line x1="8" y1="34" x2="44" y2="34" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="8" y1="42" x2="44" y2="42" stroke="#cbd5e1" strokeWidth="1" />
        <rect x="6" y="50" width="40" height="6" fill="#0f172a" />
      </g>

      {/* Center: Strangler Fig Replication Gateway */}
      <g transform="translate(108, 16)">
        <rect x="0" y="10" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="18" width="48" height="6" fill="#0f172a" />
        <path d="M16 45 L32 30 L48 45 L32 60 Z" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        <text x="32" y="48" fontSize="7" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          API
        </text>
        <rect x="8" y="74" width="48" height="18" fill="#0f172a" />
        <text x="32" y="86" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.8">
          0 DOWNTIME
        </text>
      </g>

      {/* Right: Decoupled Cloud Microservices */}
      <g transform="translate(196, 38)">
        <rect x="0" y="0" width="52" height="64" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="40" height="4" fill="#0f172a" />
        <rect x="8" y="18" width="16" height="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <rect x="28" y="18" width="16" height="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <rect x="8" y="38" width="16" height="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <rect x="28" y="38" width="16" height="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
      </g>
    </svg>
  );
}

function WebsitesCmsIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 110 L140 50 L250 110" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Left: Decoupled Headless CMS Schema */}
      <g transform="translate(35, 42)">
        <rect x="0" y="0" width="48" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <rect x="6" y="18" width="24" height="2" fill="#cbd5e1" />
        <rect x="6" y="24" width="36" height="2" fill="#cbd5e1" />
        <rect x="6" y="34" width="36" height="12" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="24" y="43" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          MDX / CMS
        </text>
        <rect x="6" y="50" width="36" height="4" fill="#0f172a" />
      </g>

      {/* Center: Perfect 100 Lighthouse Performance Engine */}
      <g transform="translate(108, 16)">
        <rect x="0" y="10" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="18" width="48" height="6" fill="#0f172a" />
        <circle cx="32" cy="48" r="18" stroke="#0f172a" strokeWidth="2" />
        <text x="32" y="52" fontSize="9" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          100
        </text>
        <rect x="8" y="78" width="48" height="16" fill="#0f172a" />
        <text x="32" y="89" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.8">
          LIGHTHOUSE
        </text>
      </g>

      {/* Right: Global Edge CDN Node */}
      <g transform="translate(195, 42)">
        <rect x="0" y="0" width="48" height="60" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <circle cx="24" cy="28" r="12" stroke="#0f172a" strokeWidth="1.5" />
        <ellipse cx="24" cy="28" rx="6" ry="12" stroke="#0f172a" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="6" y="48" width="36" height="6" fill="#0f172a" />
      </g>
    </svg>
  );
}

function RapidWebsitesIllustration() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full max-h-36 text-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="50" x2="250" y2="50" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="30" y1="90" x2="250" y2="90" stroke="#e2e8f0" strokeDasharray="3 3" />

      {/* Left: Modular Design Block */}
      <g transform="translate(35, 40)">
        <rect x="0" y="0" width="48" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <rect x="6" y="16" width="16" height="12" fill="#0f172a" />
        <rect x="26" y="16" width="16" height="12" fill="#cbd5e1" />
        <rect x="6" y="32" width="36" height="8" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <rect x="6" y="46" width="36" height="8" fill="#0f172a" />
      </g>

      {/* Center: 14-Day Rapid Deployment Launch Rocket */}
      <g transform="translate(108, 16)">
        <rect x="0" y="10" width="64" height="92" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="18" width="48" height="6" fill="#0f172a" />
        <path d="M32 30 C24 45 24 60 32 68 C40 60 40 45 32 30 Z" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="32" cy="48" r="3" fill="#0f172a" />
        <rect x="8" y="76" width="48" height="16" fill="#0f172a" />
        <text x="32" y="87" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.8">
          14-DAY MVP
        </text>
      </g>

      {/* Right: Conversion-Optimized Funnel */}
      <g transform="translate(195, 40)">
        <rect x="0" y="0" width="48" height="62" rx="0" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="6" y="8" width="36" height="4" fill="#0f172a" />
        <rect x="6" y="18" width="36" height="12" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        <text x="24" y="27" fontSize="6" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          LEAD CRM
        </text>
        <path d="M12 42 L24 48 L36 38" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        <rect x="6" y="52" width="36" height="4" fill="#0f172a" />
      </g>
    </svg>
  );
}
