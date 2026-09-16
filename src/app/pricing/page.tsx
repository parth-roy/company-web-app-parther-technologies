import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Software Engineering & Architecture Pricing | Parther Technologies',
  description: 'Transparent, milestone-driven investment models for custom software, enterprise ERPs, and dedicated engineering pods. Pan-India and global delivery from Salt Lake Sector V, Kolkata.',
  keywords: 'enterprise software pricing, custom ERP development cost, MVP development agency, dedicated software team pricing India, Node.js React developer pod cost, Parther Technologies, logistics SaaS pricing',
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Enterprise Software Engineering & Architecture Engagement Models",
  "description": "Transparent milestone-based engineering models for custom software, enterprise platforms, and dedicated technical pods by Parther Technologies Private Limited.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Startup & Scaleup MVP Sprint",
        "description": "Rapid 6-8 week production build engineered for market validation and seed-stage investor readiness with 100% IP ownership.",
        "provider": {
          "@type": "Organization",
          "name": "Parther Technologies Private Limited"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Enterprise Platform & Custom ERP Engineering",
        "description": "High-concurrency digital platforms engineered for enterprise operations, supply chain logistics, and automated workflows with 99.99% uptime SLA.",
        "provider": {
          "@type": "Organization",
          "name": "Parther Technologies Private Limited"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Dedicated Engineering Pod & Architecture Retainer",
        "description": "Autonomous, high-velocity engineering pods embedded directly with your technical leadership with zero onboarding overhead.",
        "provider": {
          "@type": "Organization",
          "name": "Parther Technologies Private Limited"
        }
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Parther Technologies Private Limited",
  "description": "Enterprise product engineering firm specializing in high-concurrency platforms, logistics SaaS, and custom ERP systems. Direct technical scoping within 24 hours.",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector V, Salt Lake City",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "postalCode": "700091",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ]
};

const tiers = [
  {
    label: "MVP Sprint",
    tagline: "Startup & Scaleup MVP",
    descriptor: "Rapid 6–8 week production build engineered for market validation and seed-stage investor readiness.",
    range: "Milestone-Based",
    highlight: false,
    cta: "Request MVP Scoping",
    ctaHref: "/contact",
    capabilities: [
      "Full-Stack Architecture Design",
      "Next.js & Flutter Cross-Platform",
      "PostgreSQL & Prisma ORM Schema",
      "Authentication & Role-Based Access Control",
      "CI/CD Cloud Deployment Pipeline",
      "100% IP & Source Code Transfer",
    ],
    note: "Sprint-based delivery with direct engineering leads.",
  },
  {
    label: "Enterprise Platform",
    tagline: "Custom ERP & SaaS Systems",
    descriptor: "High-concurrency digital platforms engineered for enterprise operations, supply chain logistics, and automated workflows.",
    range: "Custom Architecture",
    highlight: true,
    cta: "Schedule Architecture Review",
    ctaHref: "/contact",
    capabilities: [
      "Event-Driven Microservices (BullMQ / Redis)",
      "Real-time Telemetry & WebSockets",
      "Government API Integration (ULIP / DigiLocker)",
      "Automated Multi-Wallet / RazorpayX Payouts",
      "High-Availability 99.99% Cloud Architecture",
      "PSARA / DPDP Security Audits & Compliance",
    ],
    note: "Production-grade platform architecture similar to GoMyTruck & ACS.",
  },
  {
    label: "Dedicated Pod",
    tagline: "Dedicated Engineering Pod",
    descriptor: "Autonomous, high-velocity engineering pods embedded directly with your technical leadership.",
    range: "Monthly Retainer",
    highlight: false,
    cta: "Hire Dedicated Pod",
    ctaHref: "/contact",
    capabilities: [
      "Senior Full-Stack Engineers & Tech Lead",
      "Daily Async Standups & Bi-weekly Sprints",
      "Cloud Architecture & Zero-Downtime DevOps",
      "Database Tuning & High-Throughput Scaling",
      "Zero-Trust Security & OWASP Hardening",
      "Direct Slack / Discord Communication",
    ],
    note: "Flexible team scaling with 30-day notice and zero onboarding overhead.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f0]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="canonical" href="https://parthertech.com/pricing" />
      </head>

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container-main text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-white text-xs font-mono-caps font-semibold text-blue-600 tracking-widest uppercase shadow-sm">
            Enterprise Engagement Models
          </span>
          <h1 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight text-cf-text mb-6 leading-tight">
            Predictable, Milestone-Driven Investment
          </h1>
          <p className="text-lg text-cf-text-secondary leading-relaxed mb-6 font-medium">
            We eliminate billing ambiguity. Every project is anchored by a forensic technical scoping blueprint, transparent milestones, and zero vendor lock-in with 100% intellectual property ownership.
          </p>
          <p className="text-sm text-cf-text-tertiary max-w-2xl mx-auto mb-10">
            Delivering mission-critical engineering from <strong>Salt Lake Sector V, Kolkata</strong> to high-growth scaleups and enterprises across India and globally.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-cf-text text-white font-syncopate font-bold text-sm tracking-widest hover:bg-cf-text/80 transition-colors duration-200 shadow-lg"
          >
            REQUEST TECHNICAL SCOPING →
          </Link>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-12 pb-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`relative flex flex-col rounded-xl p-8 border ${
                  tier.highlight
                    ? "bg-[#0A0A0A] text-white border-transparent shadow-2xl lg:-translate-y-4"
                    : "bg-white text-cf-text border-cf-border"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Enterprise Flagship
                  </div>
                )}

                <div className="mb-6">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase font-mono-caps ${
                      tier.highlight ? "text-blue-400" : "text-blue-500"
                    }`}
                  >
                    {tier.label}
                  </span>
                  <h2
                    className={`font-syncopate font-bold text-2xl mt-2 mb-2 ${
                      tier.highlight ? "text-white" : "text-cf-text"
                    }`}
                  >
                    {tier.tagline}
                  </h2>
                  <p
                    className={`text-sm leading-relaxed pb-5 mb-5 border-b ${
                      tier.highlight
                        ? "text-white/50 border-white/10"
                        : "text-cf-text-secondary border-cf-border"
                    }`}
                  >
                    {tier.descriptor}
                  </p>
                  <div
                    className={`inline-flex items-center gap-2 text-xl font-syncopate font-bold px-4 py-2 rounded-lg border mb-6 ${
                      tier.highlight
                        ? "border-blue-500/40 text-blue-400 bg-blue-500/10"
                        : "border-blue-500/40 text-blue-600 bg-blue-50"
                    }`}
                  >
                    {tier.range}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className={`flex items-start gap-2.5 text-sm font-medium ${
                        tier.highlight ? "text-white/80" : "text-cf-text-secondary"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          tier.highlight ? "text-blue-400" : "text-blue-600"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>

                <p
                  className={`text-xs leading-relaxed mb-5 font-bold text-center ${
                    tier.highlight ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {tier.note}
                </p>

                <Link
                  href={tier.ctaHref}
                  className={`block text-center px-6 py-3.5 font-syncopate font-bold text-sm tracking-widest transition-colors duration-200 ${
                    tier.highlight
                      ? "bg-blue-500 text-white hover:bg-blue-400"
                      : "border-2 border-cf-text text-cf-text hover:bg-cf-text hover:text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Geographic Authority Block */}
      <section className="bg-cf-card py-16 border-t border-cf-border/50">
        <div className="container-main max-w-4xl mx-auto text-center">
          <h2 className="font-syncopate font-bold text-2xl text-cf-text mb-4">
            Global Delivery Anchored in Eastern India
          </h2>
          <p className="text-cf-text-secondary leading-relaxed mb-8">
            Headquartered in <strong>Salt Lake Sector V, Kolkata</strong>, we operate dedicated product engineering pods for high-growth enterprises and funded scaleups across India, the United States, the United Kingdom, and the UAE. From regional industrial manufacturing clusters to global distributed SaaS platforms, we architect resilient digital assets with absolute IP protection.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Custom ERP Engineering",
              "Microservices Architecture",
              "High-Throughput Logistics Platforms",
              "Dedicated Engineering Pods",
              "SaaS Development India",
              "ULIP & Government API Integration"
            ].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-cf-border rounded-full text-xs text-cf-text-tertiary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
