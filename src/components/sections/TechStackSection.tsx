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
    heading: "Modern Web Interfaces",
    description:
      "Pixel-perfect, performant UIs built with the world's most advanced frontend stack. We craft experiences that convert visitors into customers.",
    color: "#3B82F6",
    centerLabel: "UI",
    innerItems: [
      { name: "Next.js",    symbol: "N",   bg: "#000000", fg: "#ffffff" },
      { name: "React",      symbol: "⚛",   bg: "#61DAFB", fg: "#000000" },
    ],
    outerItems: [
      { name: "TypeScript", symbol: "TS",  bg: "#3178C6", fg: "#ffffff" },
      { name: "Tailwind",   symbol: "TW",  bg: "#06B6D4", fg: "#ffffff" },
      { name: "Framer",     symbol: "FM",  bg: "#0055FF", fg: "#ffffff" },
      { name: "Vue.js",     symbol: "V",   bg: "#42B883", fg: "#ffffff" },
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
      { name: "Node.js",  symbol: "N",   bg: "#339933", fg: "#ffffff" },
      { name: "Python",   symbol: "🐍",  bg: "#3776AB", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "FastAPI",  symbol: "FA",  bg: "#009688", fg: "#ffffff" },
      { name: "Express",  symbol: "Ex",  bg: "#303030", fg: "#ffffff" },
      { name: "GraphQL",  symbol: "GQ",  bg: "#E10098", fg: "#ffffff" },
      { name: "REST",     symbol: "RE",  bg: "#6C757D", fg: "#ffffff" },
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
      { name: "AWS",        symbol: "AWS", bg: "#FF9900", fg: "#ffffff" },
      { name: "GCP",        symbol: "G",   bg: "#4285F4", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "Vercel",     symbol: "V▲",  bg: "#000000", fg: "#ffffff" },
      { name: "Cloudflare", symbol: "CF",  bg: "#F38020", fg: "#ffffff" },
      { name: "Docker",     symbol: "🐳",  bg: "#2496ED", fg: "#ffffff" },
      { name: "Nginx",      symbol: "Nx",  bg: "#009639", fg: "#ffffff" },
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
      { name: "OpenAI",     symbol: "✦",  bg: "#412991", fg: "#ffffff" },
      { name: "LangChain",  symbol: "LC", bg: "#1C3A5E", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "n8n",       symbol: "n8",  bg: "#EA4B71", fg: "#ffffff" },
      { name: "Zapier",    symbol: "Z",   bg: "#FF4A00", fg: "#ffffff" },
      { name: "Vertex AI", symbol: "VA",  bg: "#4285F4", fg: "#ffffff" },
      { name: "HuggingFace", symbol: "🤗", bg: "#FFD21E", fg: "#000000" },
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
      { name: "PostgreSQL", symbol: "🐘", bg: "#336791", fg: "#ffffff" },
      { name: "MongoDB",    symbol: "M",  bg: "#47A248", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "Redis",      symbol: "R",  bg: "#DC382D", fg: "#ffffff" },
      { name: "Supabase",   symbol: "SB", bg: "#3ECF8E", fg: "#ffffff" },
      { name: "MySQL",      symbol: "My", bg: "#4479A1", fg: "#ffffff" },
      { name: "PlanetScale",symbol: "PS", bg: "#000000", fg: "#ffffff" },
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
      { name: "React Native", symbol: "RN", bg: "#61DAFB", fg: "#000000" },
      { name: "Flutter",      symbol: "F",  bg: "#54C5F8", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "Expo",    symbol: "Ex", bg: "#000020", fg: "#ffffff" },
      { name: "iOS",     symbol: "🍎", bg: "#555555", fg: "#ffffff" },
      { name: "Android", symbol: "🤖", bg: "#3DDC84", fg: "#000000" },
      { name: "PWA",     symbol: "PW", bg: "#5A0FC8", fg: "#ffffff" },
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
      { name: "GitHub Actions", symbol: "GA",  bg: "#2088FF", fg: "#ffffff" },
      { name: "Kubernetes",     symbol: "K8s", bg: "#326CE5", fg: "#ffffff" },
    ],
    outerItems: [
      { name: "Terraform",  symbol: "TF",  bg: "#7B42BC", fg: "#ffffff" },
      { name: "Prometheus", symbol: "Pr",  bg: "#E6522C", fg: "#ffffff" },
      { name: "Grafana",    symbol: "Gr",  bg: "#F46800", fg: "#ffffff" },
      { name: "Nginx",      symbol: "Nx",  bg: "#009639", fg: "#ffffff" },
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
  innerItems: { name: string; symbol: string; bg: string; fg: string }[];
  outerItems: { name: string; symbol: string; bg: string; fg: string }[];
  color: string;
}) {
  const innerRadius = 72;
  const outerRadius = 136;
  const totalSize = outerRadius * 2 + 56; // 56px = icon diameter

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
          borderColor: color + "55",
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
          animation: "dual-inner 12s linear infinite",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {innerItems.map((item, i) => {
          const angle = (i / innerItems.length) * 2 * Math.PI;
          const x = innerRadius + Math.cos(angle) * innerRadius - 22;
          const y = innerRadius + Math.sin(angle) * innerRadius - 22;
          return (
            <div
              key={item.name}
              className="absolute"
              style={{ left: x, top: y, width: 44, height: 44 }}
              title={item.name}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold select-none"
                style={{
                  backgroundColor: item.bg,
                  color: item.fg,
                  animation: "dual-inner-rev 12s linear infinite",
                  fontSize: item.symbol.length > 2 ? "9px" : "12px",
                  willChange: "transform",
                  boxShadow: `0 2px 8px ${item.bg}55`,
                }}
              >
                {item.symbol}
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
          animation: "dual-outer 18s linear infinite",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {outerItems.map((item, i) => {
          const angle = (i / outerItems.length) * 2 * Math.PI;
          const x = outerRadius + Math.cos(angle) * outerRadius - 22;
          const y = outerRadius + Math.sin(angle) * outerRadius - 22;
          return (
            <div
              key={item.name}
              className="absolute"
              style={{ left: x, top: y, width: 44, height: 44 }}
              title={item.name}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold select-none"
                style={{
                  backgroundColor: item.bg,
                  color: item.fg,
                  animation: "dual-outer-rev 18s linear infinite",
                  fontSize: item.symbol.length > 2 ? "9px" : "12px",
                  willChange: "transform",
                  boxShadow: `0 2px 8px ${item.bg}55`,
                }}
              >
                {item.symbol}
              </div>
            </div>
          );
        })}
      </div>

      {/* Center hub */}
      <div
        className="relative z-10 w-16 h-16 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-[0_0_24px_rgba(0,0,0,0.15)]"
        style={{ backgroundColor: color }}
      >
        <span className="font-syncopate font-bold text-white text-sm leading-none">
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
            <span className="block text-sm font-semibold tracking-widest text-blue-500 uppercase">
              Our Toolkit
            </span>
            <h2 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight border-b-2 border-cf-text pb-4 self-start">
              Technologies
            </h2>
            <p className="text-cf-text-secondary text-xl max-w-2xl leading-relaxed">
              We don't just use the latest tools — we choose the right tool for the right job.
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
                  {/* Card — mirrors the reference: text left, orbit right */}
                  <div className="bg-cf-bg border border-cf-border clip-corner flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 p-8 md:p-12 min-h-[360px] w-full">

                    {/* Left: text content */}
                    <div className="flex-1 flex flex-col gap-4 md:max-w-xl items-start">
                      <span
                        className="text-xs font-bold tracking-widest uppercase"
                        style={{ color: cat.color }}
                      >
                        {cat.label}
                      </span>
                      <h3 className="font-syncopate font-bold text-2xl md:text-3xl tracking-tight leading-tight">
                        {cat.heading}
                      </h3>
                      <p className="text-cf-text-secondary leading-relaxed text-base">
                        {cat.description}
                      </p>
                      {/* Tech name pills */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[...cat.innerItems, ...cat.outerItems].map((item) => (
                          <span
                            key={item.name}
                            className="text-xs px-2 py-1 rounded-full border font-medium"
                            style={{
                              borderColor: cat.color + "55",
                              color: cat.color,
                              backgroundColor: cat.color + "11",
                            }}
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: dual orbit for this category */}
                    <div className="shrink-0">
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
            <div className="flex items-center gap-4 mt-6">
              <CarouselPrevious className="relative left-0 top-0 translate-y-0 translate-x-0 h-10 w-10 border-2 border-cf-border hover:bg-cf-text hover:text-white hover:border-cf-text transition-colors duration-200" />
              <CarouselNext className="relative left-0 top-0 translate-y-0 translate-x-0 h-10 w-10 border-2 border-cf-border hover:bg-cf-text hover:text-white hover:border-cf-text transition-colors duration-200" />
              <span className="text-xs text-cf-text-tertiary tracking-widest">
                AUTO-SLIDING · HOVER TO PAUSE · 7 STACKS
              </span>
            </div>
          </Carousel>

        </div>
      </section>
    </>
  );
}
