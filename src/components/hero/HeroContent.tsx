"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCity } from "@/context/CityContext";
import CitySelectorModal from "@/components/CitySelectorModal";
import { 
  Sparkles, 
  Layers, 
  ShoppingBag, 
  Cpu, 
  UserCheck, 
  ShieldCheck, 
  RefreshCw 
} from "lucide-react";

interface HeroServiceItem {
  id: string;
  name: string;
  badge?: string;
  iconSrc?: string;
  icon?: React.ReactNode;
  cityRouteId?: string;
  fallbackHref: string;
}

const CORE_SERVICES: HeroServiceItem[] = [
  {
    id: "custom-software",
    name: "Custom Software",
    badge: "Full-Stack",
    iconSrc: "/services/custom-software.webp",
    cityRouteId: "custom-software-development",
    fallbackHref: "/services/custom-software-engineering",
  },
  {
    id: "erp-systems",
    name: "ERP Systems",
    badge: "Enterprise",
    iconSrc: "/services/erp-system.webp",
    cityRouteId: "enterprise-erp-development",
    fallbackHref: "/services/erp-systems",
  },
  {
    id: "ai-automation",
    name: "AI Automation",
    badge: "⚡ Agentic",
    iconSrc: "/services/ai-automation.webp",
    cityRouteId: "ai-development",
    fallbackHref: "/services/ai-automation",
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    badge: "iOS & Android",
    iconSrc: "/services/app-developement.png",
    cityRouteId: "mobile-app-development",
    fallbackHref: "/services/mobile-app-development",
  },
  {
    id: "cloud-architecture",
    name: "Cloud Architecture",
    badge: "AWS & GCP",
    iconSrc: "/services/cloud.webp",
    cityRouteId: "cloud-architecture",
    fallbackHref: "/services/enterprise-cloud",
  },
  {
    id: "crm-development",
    name: "CRM Platforms",
    badge: "Custom Flow",
    iconSrc: "/services/crm.webp",
    fallbackHref: "/services/crm",
  },
  {
    id: "saas-platforms",
    name: "SaaS Platforms",
    badge: "Multi-Tenant",
    iconSrc: "/services/saas.webp",
    cityRouteId: "saas-development",
    fallbackHref: "/services/saas-product-development",
  },
  {
    id: "headless-commerce",
    name: "Headless Retail",
    badge: "Sub-Second",
    iconSrc: "/services/headless.webp",
    fallbackHref: "/services/ecommerce-architecture",
  },
];

const INFRASTRUCTURE_SERVICES: HeroServiceItem[] = [
  {
    id: "devops-sre",
    name: "DevOps & SRE",
    badge: "Popular",
    iconSrc: "/services/cloud-devops.webp",
    fallbackHref: "/services/enterprise-cloud",
  },
  {
    id: "dedicated-engineers",
    name: "Dedicated Teams",
    badge: "Staffing",
    iconSrc: "/services/dedicated-teams.webp",
    cityRouteId: "dedicated-development-teams",
    fallbackHref: "/contact",
  },
  {
    id: "cybersecurity-audits",
    name: "Security & Audits",
    badge: "ISO / HIPAA",
    iconSrc: "/services/security-audit.webp",
    cityRouteId: "cybersecurity-audits",
    fallbackHref: "/contact",
  },
  {
    id: "digital-transformation",
    name: "Modernization",
    badge: "Scale",
    iconSrc: "/services/modernization.webp",
    fallbackHref: "/services/digital-transformation",
  },
];

const HERO_SLIDES = [
  {
    image: "/images/services/custom-saas-erp.png",
    alt: "Enterprise ERP & Multi-Tenant SaaS Systems",
    tag: "ENTERPRISE ERP & SAAS",
    title: "Mission-Critical Core Operations",
    stat: "99.99% Uptime SLA",
  },
  {
    image: "/images/services/app-development.png",
    alt: "High-Performance Mobile Applications iOS & Android",
    tag: "MOBILE APPS & FLEET",
    title: "Cross-Platform iOS & Android",
    stat: "Sub-Second Latency",
  },
  {
    image: "/images/services/generative-engine-optimization.png",
    alt: "Autonomous AI Workflows & Private LLM Inference",
    tag: "AUTONOMOUS AI AGENTS",
    title: "Private Cloud Agentic Workflows",
    stat: "Zero Data Leakage",
  },
  {
    image: "/case-studies/gomytruck/hero-banner.jpg",
    alt: "GoMyTruck Digital Freight Marketplace",
    tag: "GOMYTRUCK FLAGSHIP",
    title: "Full-Stack Logistics Infrastructure",
    stat: "500+ Verified Drivers",
  },
];

export default function HeroContent() {
  const { currentCity } = useCity();
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const cityName = currentCity ? currentCity.name : "Barrackpore";

  // Auto-cycle hero images smoothly every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const getServiceHref = (service: HeroServiceItem) => {
    if (currentCity && service.cityRouteId) {
      return `/locations/${currentCity.country}/${currentCity.slug}/${service.cityRouteId}`;
    }
    return service.fallbackHref;
  };

  return (
    <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-12 sm:pb-16 relative z-10">
      <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.02fr_0.98fr] 2xl:grid-cols-[1fr_1.05fr] gap-8 xl:gap-12 items-center">
        
        {/* ── LEFT COLUMN: Core Content & Services Card Box ── */}
        <div className="flex flex-col items-start text-left z-10 max-w-2xl">
          
          {/* AI / Entity Context Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] sm:text-xs font-bold mb-3 tracking-wide shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Global Enterprise Engineering &amp; Software Architecture</span>
          </div>

          {/* Main H1 Heading — SEO & GEO Dynamic */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-slate-900 leading-[1.15] mb-3 tracking-tight">
            Enterprise Software &amp; Product Engineering in <span className="text-emerald-600">{cityName}</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 max-w-xl font-medium">
            Architecting scalable SaaS platforms, enterprise ERPs, autonomous AI agents, and high-concurrency cloud infrastructure for companies in <strong className="text-slate-900">{cityName}</strong> and global tech hubs. Production-grade delivery with sub-second performance.
          </p>

          {/* City Selector Pill Bar + Call with Engineer Team Button (Left-Aligned) */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {/* Exact replica of reference city button */}
            <CitySelectorModal variant="hero" />

            {/* CALL WITH ENGINEER TEAM button */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-cf-text text-white font-syncopate font-bold text-xs tracking-widest hover:bg-cf-text/80 rounded-full transition-all shadow-sm whitespace-nowrap cursor-pointer"
              >
                CALL WITH ENGINEER TEAM →
              </Link>
              <span className="text-[11px] text-gray-500 font-mono-caps tracking-wider hidden sm:inline">
                Response within 5 min
              </span>
            </div>
          </div>

          {/* ── Services Showcase Card Box (Matching Reference Exactly) ── */}
          <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.08)] p-4 sm:p-6">
            
            {/* Core 8 Services Grid */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 mb-6">
              {CORE_SERVICES.map((svc, i) => (
                <Link
                  key={svc.id}
                  href={getServiceHref(svc)}
                  onMouseEnter={() => setCurrentHeroSlide(i % HERO_SLIDES.length)}
                  className="group flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 md:w-[86px] md:h-[86px] rounded-2xl sm:rounded-3xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-center p-2 sm:p-2.5 group-hover:bg-emerald-50/80 group-hover:border-emerald-300 group-hover:shadow-md transition-all shadow-2xs">
                    {svc.badge && (
                      <span className="absolute -top-2 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs whitespace-nowrap z-10">
                        {svc.badge}
                      </span>
                    )}
                    {svc.iconSrc ? (
                      <img
                        src={svc.iconSrc}
                        alt={svc.name}
                        className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-200 drop-shadow-sm"
                      />
                    ) : (
                      svc.icon
                    )}
                  </div>
                  <span className="mt-2 text-[11px] sm:text-xs md:text-[13px] font-bold text-slate-800 group-hover:text-emerald-700 leading-tight">
                    {svc.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Divider Line & Sub-category */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono-caps">
                  Enterprise Cloud &amp; Infrastructure
                </h3>
                <span className="text-[11px] font-semibold text-emerald-600 hidden sm:inline">
                  Serving {cityName}
                </span>
              </div>

              {/* 4 Infrastructure Services Grid */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
                {INFRASTRUCTURE_SERVICES.map((svc, i) => (
                  <Link
                    key={svc.id}
                    href={getServiceHref(svc)}
                    onMouseEnter={() => setCurrentHeroSlide((i + 1) % HERO_SLIDES.length)}
                    className="group flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 md:w-[86px] md:h-[86px] rounded-2xl sm:rounded-3xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-center p-2 sm:p-2.5 group-hover:bg-emerald-50/80 group-hover:border-emerald-300 group-hover:shadow-md transition-all shadow-2xs">
                      {svc.badge && (
                        <span className="absolute -top-2 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs whitespace-nowrap z-10">
                          {svc.badge}
                        </span>
                      )}
                      {svc.iconSrc ? (
                        <img
                          src={svc.iconSrc}
                          alt={svc.name}
                          className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-200 drop-shadow-sm"
                        />
                      ) : (
                        svc.icon
                      )}
                    </div>
                    <span className="mt-2 text-[11px] sm:text-xs md:text-[13px] font-bold text-slate-800 group-hover:text-emerald-700 leading-tight">
                      {svc.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ── RIGHT COLUMN: Interactive Product Architecture Images ── */}
        <div className="relative w-full h-[440px] sm:h-[500px] md:h-[540px] lg:h-[580px] xl:h-[620px] flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
          
          {/* Ambient Glows */}
          <div className="absolute w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none -top-10 -right-10" />
          <div className="absolute w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none -bottom-10 right-20" />

          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.image}
              className={`absolute inset-0 flex flex-col items-center lg:items-end justify-center transition-opacity duration-700 ease-in-out ${
                idx === currentHeroSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Extra-Large Responsive Box that fully fits every image without cropping */}
              <div className="relative w-full max-w-full lg:max-w-[680px] xl:max-w-[750px] 2xl:max-w-[800px] h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-[#070b14] flex flex-col justify-between group">
                
                {/* Top Terminal Status Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800/80 bg-[#090e1a]/95 backdrop-blur-sm shrink-0 z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-300 ml-2 tracking-wider uppercase">
                      {slide.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-[10px] sm:text-xs font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{slide.stat}</span>
                  </div>
                </div>

                {/* Big Image Stage with object-contain to fully display all text, graphics & UI */}
                <div className="relative w-full flex-1 flex items-center justify-center p-3 sm:p-5 overflow-hidden bg-[#070b14]">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full max-h-[380px] sm:max-h-[440px] md:max-h-[480px] lg:max-h-[500px] xl:max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Bottom Topic Title Bar & Slide Navigator */}
                <div className="px-4 sm:px-6 py-3.5 border-t border-slate-800/80 bg-[#090e1a]/95 backdrop-blur-sm flex items-center justify-between shrink-0 z-10">
                  <div className="min-w-0 flex-1 mr-4">
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight leading-snug truncate">
                      {slide.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentHeroSlide(i)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          i === currentHeroSlide ? "w-7 bg-emerald-500" : "w-2.5 bg-slate-700 hover:bg-slate-500"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
