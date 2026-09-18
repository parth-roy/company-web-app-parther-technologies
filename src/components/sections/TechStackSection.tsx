"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- Per-category data with heading, description, and orbiting icons ---
const techCategories = [
  {
    label: "Frontend",
    heading: "Pixel-Perfect Interfaces",
    description:
      "We build lightning-fast, accessible, and dynamic frontends. Experience buttery smooth animations and sub-second load times.",
    color: "#3B82F6",
    centerLabel: "UI",
    innerItems: [
      { name: "Next.js",    symbol: "N",   icon: "/tech/vercel.svg", bg: "#000000", fg: "#ffffff" },
      { name: "React",      symbol: "⚛",   icon: "/tech/react-clean.svg", bg: "#61DAFB", fg: "#000000" },
    ],
    outerItems: [
      { name: "TypeScript", symbol: "TS",  icon: "/tech/typescript-clean.svg", bg: "#3178C6", fg: "#ffffff" },
      { name: "Tailwind",   symbol: "TW",  icon: "/tech/tailwind-clean.svg", bg: "#06B6D4", fg: "#ffffff" },
      { name: "Framer",     symbol: "FM",  icon: "/tech/framer-clean.svg", bg: "#0055FF", fg: "#ffffff" },
      { name: "Vue.js",     symbol: "V",   icon: "/tech/vue-js.svg", bg: "#42B883", fg: "#ffffff" },
    ],
  },
  {
    label: "Backend",
    heading: "Scalable Server Architecture",
    description:
      "Robust APIs and microservices designed for high availability and throughput. Your backend should never be the bottleneck.",
    color: "#8B5CF6",
    centerLabel: "API",
    innerItems: [
      { name: "Node.js",  symbol: "N",   icon: "/tech/node-js.svg", bg: "#339933", fg: "#ffffff" },
      { name: "Python",   symbol: "🐍",  icon: "/tech/python.svg", bg: "#3776AB", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "FastAPI",  symbol: "FA",  icon: "/tech/fast-api.webp", bg: "#009688", fg: "#ffffff" },
      { name: "Express",  symbol: "Ex",  icon: "/tech/express-js.webp", bg: "#303030", fg: "#ffffff" },
      { name: "GraphQL",  symbol: "GQ",  icon: "/tech/graphql.svg", bg: "#E10098", fg: "#ffffff" },
      { name: "REST",     symbol: "RE",  icon: "/tech/restapi.webp", bg: "#6C757D", fg: "#ffffff" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    heading: "Always-On Cloud Infrastructure",
    description:
      "Enterprise-grade cloud deployments with auto-scaling, zero-downtime releases, and 99.9% uptime SLAs.",
    color: "#06B6D4",
    centerLabel: "☁",
    innerItems: [
      { name: "AWS",        symbol: "AWS", icon: "/tech/aws.svg", bg: "#FF9900", fg: "#ffffff" },
      { name: "GCP",        symbol: "G",   icon: "/tech/gcp.webp", bg: "#4285F4", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "Vercel",     symbol: "V▲",  icon: "/tech/vercel.svg", bg: "#000000", fg: "#ffffff" },
      { name: "Cloudflare", symbol: "CF",  icon: "/tech/cloudflare.webp", bg: "#F38020", fg: "#ffffff" },
      { name: "Docker",     symbol: "🐳",  icon: "/tech/docker.webp", bg: "#2496ED", fg: "#ffffff" },
      { name: "Nginx",      symbol: "Nx",  icon: "/tech/nginx.svg", bg: "#009639", fg: "#ffffff" },
    ],
  },
  {
    label: "AI & Automation",
    heading: "Intelligent Automation at Scale",
    description:
      "AI-powered workflows that reduce manual work by up to 80%. From LLM integrations to no-code automation pipelines.",
    color: "#F59E0B",
    centerLabel: "AI",
    innerItems: [
      { name: "ChatGPT",    symbol: "GPT", icon: "/tech/chatgpt-clean.svg", bg: "#10A37F", fg: "#ffffff" },
      { name: "LangChain",  symbol: "LC", icon: "/tech/python.svg", bg: "#1C3A5E", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "n8n",        symbol: "n8n", icon: "/tech/n8n.webp", bg: "#FF6D5A", fg: "#ffffff" },
      { name: "Zapier",     symbol: "Z",   icon: "/tech/zapier-clean.svg", bg: "#FF4A00", fg: "#ffffff" },
      { name: "Vertex AI",  symbol: "VA",  icon: "/tech/gcp.webp", bg: "#4285F4", fg: "#ffffff" },
      { name: "HuggingFace",symbol: "🤗",  icon: "/tech/huggingface.webp", bg: "#FFD21E", fg: "#000000" },
    ],
  },
  {
    label: "Databases",
    heading: "Data Storage & Management",
    description:
      "The right database for the right data. We architect storage layers that are fast, reliable, and infinitely scalable.",
    color: "#10B981",
    centerLabel: "DB",
    innerItems: [
      { name: "PostgreSQL", symbol: "PG", icon: "/tech/postgresql-inc-2.svg", bg: "#336791", fg: "#ffffff" },
      { name: "MongoDB",    symbol: "M",  icon: "/tech/mongodb-clean.svg", bg: "#47A248", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "Redis",      symbol: "R",  icon: "/tech/redis.svg", bg: "#DC382D", fg: "#ffffff" },
      { name: "Supabase",   symbol: "SB", icon: "/tech/supabase.webp", bg: "#3ECF8E", fg: "#ffffff" },
      { name: "MySQL",      symbol: "My", icon: "/tech/14426785.webp", bg: "#4479A1", fg: "#ffffff" },
      { name: "PlanetScale",symbol: "PS", icon: "/tech/269245_planetscale-logo-icon.webp", bg: "#000000", fg: "#ffffff" },
    ],
  },
  {
    label: "Mobile",
    heading: "Native & Cross-Platform Apps",
    description:
      "One codebase, every device. We ship polished mobile apps for iOS and Android without doubling your budget.",
    color: "#EF4444",
    centerLabel: "📱",
    innerItems: [
      { name: "React Native", symbol: "RN", icon: "/tech/reactnative.webp", bg: "#61DAFB", fg: "#000000" },
      { name: "Flutter",      symbol: "F",  icon: "/tech/flutter-clean.png", bg: "#54C5F8", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "Expo",    symbol: "Ex", icon: "/tech/expo.webp", bg: "#000020", fg: "#ffffff" },
      { name: "iOS",     symbol: "🍎", icon: "/tech/apple.svg", bg: "#555555", fg: "#ffffff" },
      { name: "Android", symbol: "🤖", icon: "/tech/android.webp", bg: "#3DDC84", fg: "#000000" },
      { name: "PWA",     symbol: "PW", icon: "/tech/pwa.webp", bg: "#5A0FC8", fg: "#ffffff" },
    ],
  },
  {
    label: "DevOps",
    heading: "Continuous Delivery & Monitoring",
    description:
      "Ship faster with confidence. Automated pipelines, infrastructure-as-code, and real-time observability baked in from day one.",
    color: "#64748B",
    centerLabel: "CI",
    innerItems: [
      { name: "GitHub Actions", symbol: "GA",  icon: "/tech/githubactions.webp", bg: "#2088FF", fg: "#ffffff" },
      { name: "Kubernetes",     symbol: "K8s", icon: "/tech/kubernetes.webp", bg: "#326CE5", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "Terraform",  symbol: "TF",  icon: "/tech/images-(1).webp", bg: "#7B42BC", fg: "#ffffff" },
      { name: "Prometheus", symbol: "Pr",  icon: "/tech/images.webp", bg: "#E6522C", fg: "#ffffff" },
      { name: "Grafana",    symbol: "Gr",  icon: "/tech/instagram-logo-social-media-icon-3d_556172-1303.webp", bg: "#F46800", fg: "#ffffff" },
      { name: "Nginx",      symbol: "Nx",  icon: "/tech/nginx.svg", bg: "#009639", fg: "#ffffff" },
    ],
  },
];

// --- Dual-ring orbit component ---
function DualOrbit({
  centerLabel,
  innerItems,
  outerItems,
  color,
}: {
  centerLabel: string;
  innerItems: { name: string; symbol: string; bg: string; fg: string; icon?: string }[];
  outerItems: { name: string; symbol: string; bg: string; fg: string; icon?: string }[];
  color: string;
}) {
  const innerRadius = 115;
  const outerRadius = 195;
  const iconSize = 60; // 60px diameter for orbiting icons
  const halfIcon = iconSize / 2;
  const totalSize = outerRadius * 2 + iconSize;

  return (
    <div
      className="relative shrink-0 flex items-center justify-center"
      style={{ width: totalSize, height: totalSize }}
    >
      {/* Outer dashed ring */}
      <div
        className="absolute rounded-full border border-dashed"
        style={{
          width: outerRadius * 2,
          height: outerRadius * 2,
          borderColor: color + "44",
        }}
      />
      {/* Inner dashed ring */}
      <div
        className="absolute rounded-full border border-dashed"
        style={{
          width: innerRadius * 2,
          height: innerRadius * 2,
          borderColor: color + "66",
        }}
      />

      {/* Inner orbit — GPU promoted */}
      <div
        className="absolute"
        style={{
          width: innerRadius * 2,
          height: innerRadius * 2,
          top: "50%",
          left: "50%",
          marginTop: -innerRadius,
          marginLeft: -innerRadius,
          animation: "dual-inner 15s linear infinite",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {innerItems.map((item, i) => {
          const angle = (i / innerItems.length) * 2 * Math.PI;
          const x = innerRadius + Math.cos(angle) * innerRadius - halfIcon;
          const y = innerRadius + Math.sin(angle) * innerRadius - halfIcon;
          return (
            <div
              key={item.name}
              className="absolute"
              style={{ left: x, top: y, width: iconSize, height: iconSize }}
              title={item.name}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center font-bold select-none overflow-hidden bg-white/95 backdrop-blur-md transition-transform duration-200 hover:scale-110"
                style={{
                  animation: "dual-inner-rev 15s linear infinite",
                  willChange: "transform",
                  boxShadow: `0 8px 20px -3px ${item.bg}44, inset 0 1px 1px 0 rgba(255, 255, 255, 0.95)`,
                  border: "1.5px solid rgba(255, 255, 255, 0.9)",
                }}
              >
                {item.icon ? (
                  <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain drop-shadow-xs" />
                ) : (
                  <span style={{ color: item.bg, fontSize: item.symbol.length > 2 ? "12px" : "16px" }}>{item.symbol}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Outer orbit — GPU promoted */}
      <div
        className="absolute"
        style={{
          width: outerRadius * 2,
          height: outerRadius * 2,
          top: "50%",
          left: "50%",
          marginTop: -outerRadius,
          marginLeft: -outerRadius,
          animation: "dual-outer 25s linear infinite",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {outerItems.map((item, i) => {
          const angle = (i / outerItems.length) * 2 * Math.PI;
          const x = outerRadius + Math.cos(angle) * outerRadius - halfIcon;
          const y = outerRadius + Math.sin(angle) * outerRadius - halfIcon;
          return (
            <div
              key={item.name}
              className="absolute"
              style={{ left: x, top: y, width: iconSize, height: iconSize }}
              title={item.name}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center font-bold select-none overflow-hidden bg-white/95 backdrop-blur-md transition-transform duration-200 hover:scale-110"
                style={{
                  animation: "dual-outer-rev 25s linear infinite",
                  willChange: "transform",
                  boxShadow: `0 8px 20px -3px ${item.bg}44, inset 0 1px 1px 0 rgba(255, 255, 255, 0.95)`,
                  border: "1.5px solid rgba(255, 255, 255, 0.9)",
                }}
              >
                {item.icon ? (
                  <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain drop-shadow-xs" />
                ) : (
                  <span style={{ color: item.bg, fontSize: item.symbol.length > 2 ? "12px" : "16px" }}>{item.symbol}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Center hub — Glossy Frosted Glass Core */}
      <div
        className="relative z-10 w-32 h-32 rounded-full flex flex-col items-center justify-center border border-white/80 bg-white/90 backdrop-blur-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
        style={{
          boxShadow: `0 24px 44px -8px ${color}30, inset 0 1px 2px 0 rgba(255, 255, 255, 0.95), inset 0 0 0 4px ${color}15`,
          borderTop: "1.5px solid rgba(255, 255, 255, 0.95)",
        }}
      >
        <div
          className="absolute inset-0 opacity-12 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
        />
        <span 
          className="relative z-10 font-syncopate font-black text-4xl md:text-5xl tracking-tighter leading-none" 
          style={{ color: color }}
        >
          {centerLabel}
        </span>
      </div>
    </div>
  );
}

// --- Main Section ---
export function TechStackSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <>
      <style>{`
        @keyframes dual-inner      { from { transform: rotate(0deg);    } to { transform: rotate(360deg);  } }
        @keyframes dual-inner-rev  { from { transform: rotate(0deg);    } to { transform: rotate(-360deg); } }
        @keyframes dual-outer      { from { transform: rotate(0deg);    } to { transform: rotate(360deg);  } }
        @keyframes dual-outer-rev  { from { transform: rotate(0deg);    } to { transform: rotate(-360deg); } }
      `}</style>

      <section
        id="technologies"
        className="relative z-10 bg-cf-card text-cf-text py-28 border-t border-cf-border"
      >
        <div className="container-main">

          {/* Header */}
          <div className="mb-16 flex flex-col gap-4">
            <span className="inline-block self-start text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase font-mono px-3.5 py-1 bg-blue-50 border border-blue-200 rounded-full">
              OUR TOOLKIT · PRODUCTION-PROVEN STACKS
            </span>
            <h2 className="font-syncopate font-bold text-3xl sm:text-4xl md:text-5xl text-[#161616] tracking-tight">
              Technologies
            </h2>
            <p className="text-cf-text-secondary text-lg sm:text-xl max-w-2xl leading-relaxed">
              We don&apos;t just use the latest tools — we choose the right tool for the right job.
            </p>
          </div>

          {/* Carousel — each slide is a full card */}
          <Carousel
            opts={{ align: "start", loop: true, duration: 40 }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-6">
              {techCategories.map((cat) => (
                <CarouselItem key={cat.label} className="pl-6 basis-full">
                  {/* Card — Modern Glassmorphic Shell with Ambient Specular Refraction */}
                  <div
                    className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 p-8 sm:p-10 md:p-14 min-h-[420px] w-full transition-all duration-300"
                    style={{
                      boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.05), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.95)",
                      borderTop: "1.5px solid rgba(255, 255, 255, 0.95)",
                    }}
                  >
                    {/* Ambient Glass Aura matching category color */}
                    <div
                      className="pointer-events-none absolute -right-24 -top-24 w-[480px] h-[480px] rounded-full opacity-15 blur-3xl transition-colors duration-700"
                      style={{ background: cat.color }}
                    />
                    <div
                      className="pointer-events-none absolute right-12 bottom-4 w-[280px] h-[280px] rounded-full opacity-10 blur-2xl transition-colors duration-700"
                      style={{ background: cat.color }}
                    />

                    {/* Left: text content */}
                    <div className="relative z-10 flex-1 flex flex-col gap-5 md:max-w-xl items-start">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200/70 shadow-2xs backdrop-blur-md">
                        <span
                          className="w-2 h-2 rounded-full animate-pulse shadow-xs"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span
                          className="text-xs font-mono font-bold tracking-widest uppercase"
                          style={{ color: cat.color }}
                        >
                          {cat.label}
                        </span>
                      </div>

                      <h3 className="font-syncopate font-bold text-2xl sm:text-3xl lg:text-[34px] tracking-tight leading-[1.2] text-[#161616]">
                        {cat.heading}
                      </h3>

                      <p className="text-cf-text-secondary leading-relaxed text-base sm:text-lg">
                        {cat.description}
                      </p>

                      {/* Tech name pills - Micro-Glass Capsules */}
                      <div className="flex flex-wrap gap-2.5 mt-2">
                        {[...cat.innerItems, ...cat.outerItems].map((item) => (
                          <span
                            key={item.name}
                            className="text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200 hover:scale-105 select-none flex items-center gap-2 shadow-2xs"
                            style={{
                              borderColor: `${cat.color}35`,
                              color: "#1e293b",
                              background: "rgba(255, 255, 255, 0.85)",
                              backdropFilter: "blur(8px)",
                              WebkitBackdropFilter: "blur(8px)",
                              boxShadow: `inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), 0 2px 6px -1px ${cat.color}15`,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: item.bg || cat.color }}
                            />
                            <span>{item.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: dual orbit for this category */}
                    <div className="relative z-10 shrink-0">
                      <DualOrbit
                        centerLabel={cat.centerLabel}
                        innerItems={cat.innerItems}
                        outerItems={cat.outerItems}
                        color={cat.color}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows + indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-2">
              <div className="flex items-center gap-3">
                <CarouselPrevious className="relative left-0 top-0 translate-y-0 translate-x-0 h-11 w-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 hover:border-slate-300 text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer" />
                <CarouselNext className="relative left-0 top-0 translate-y-0 translate-x-0 h-11 w-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 hover:border-slate-300 text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 bg-white/80 border border-slate-200/70 rounded-full px-4 py-1.5 shadow-2xs backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AUTO-SLIDING · HOVER TO PAUSE · 7 STACKS
                </span>
              </div>
            </div>
          </Carousel>

        </div>
      </section>
    </>
  );
}
