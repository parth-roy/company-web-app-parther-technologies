import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Technology Matrix & Architecture | Parther Technologies',
  description: 'Forensic overview of our enterprise engineering stack: Event-driven microservices, BullMQ, Redis, PostgreSQL, Flutter, Next.js, ULIP government APIs, and RazorpayX banking pipelines.',
  keywords: 'enterprise tech stack, Node.js BullMQ architecture, Flutter logistics apps, PostgreSQL Prisma, ULIP SARATHI VAHAN API, RazorpayX payouts, Parther Technologies engineering stack',
};

interface TechCategory {
  title: string;
  subtitle: string;
  technologies: {
    name: string;
    role: string;
    specs: string;
  }[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Event-Driven Backend & Distributed Queues",
    subtitle: "High-throughput asynchronous message brokers engineered for sub-50ms job processing.",
    technologies: [
      { name: "Node.js & TypeScript", role: "Core Runtime", specs: "Express 5 modular monolith with strict Zod v4 validation and Argon2id hashing." },
      { name: "BullMQ & Redis", role: "Distributed Job Queues", specs: "Async job dispatch, rate-limiting, and cron pipelines processing 10k+ events/min." },
      { name: "Socket.io Gateways", role: "Real-Time Telemetry", specs: "Multi-gateway WebSocket layer for live GPS tracking, live marketplace bidding, and workforce events." },
      { name: "EventBus Architecture", role: "Domain Event System", specs: "Decoupled domain listeners for booking confirmation, wallet ledgering, and alert dispatch." },
    ]
  },
  {
    title: "Database Engine & Storage Architecture",
    subtitle: "ACID-compliant relational schemas with immutable financial ledgers and full-text search.",
    technologies: [
      { name: "PostgreSQL & pg_trgm", role: "Primary Datastore", specs: "Relational modeling with GIN trigram indexes for millisecond autocomplete and geo-search." },
      { name: "Prisma ORM", role: "Type-Safe Data Layer", specs: "Compile-time schema verification with zero-downtime migration workflows." },
      { name: "AWS S3 & Cloudflare", role: "Object Storage & CDN", specs: "Presigned URL generation for secure document uploads, POD proofs, and media delivery." },
      { name: "Immutable Audit Vault", role: "Compliance Logging", specs: "5-year retention tables for pricing audits, government verifications, and financial transactions." },
    ]
  },
  {
    title: "Mobile Ecosystem & Frontend Engineering",
    subtitle: "Low-latency cross-platform native apps paired with high-conversion React Server Components.",
    technologies: [
      { name: "Flutter & Riverpod", role: "Cross-Platform Mobile", specs: "Reactive native apps for Customer, Driver, and Gig Workforce with background GPS telemetry." },
      { name: "Next.js 15 / 16 (App Router)", role: "Web Applications & Portals", specs: "React Server Components (RSC) delivering sub-2.5s LCP, zero CLS, and streaming SSR." },
      { name: "Tailwind CSS v4", role: "Design Systems", specs: "High-contrast luxury SaaS typography, responsive 8pt baseline grids, and accessible touch targets." },
      { name: "Mapbox GL SDK", role: "Vector Maps & Routing", specs: "Real-time polyline rendering, dynamic route snapping, and offline tile caching." },
    ]
  },
  {
    title: "Government Integrations & Financial Pipelines",
    subtitle: "Direct integration with national logistics frameworks and instant banking rails.",
    technologies: [
      { name: "ULIP (SARATHI & VAHAN)", role: "Ministry of Road Transport", specs: "Real-time Driving License (DL) and Vehicle RC verification with chassis/engine cross-matching." },
      { name: "DigiLocker KYC", role: "National Identity Auth", specs: "Full PKCE OAuth 2.0 flow for Aadhaar and PAN verification with ephemeral token cleansing." },
      { name: "Razorpay & RazorpayX", role: "Inbound & Outbound Banking", specs: "Automated instant IMPS/NEFT vendor and driver payouts with penny-drop bank account validation." },
      { name: "Double-Entry Ledgers", role: "Multi-Wallet Engine", specs: "Isolated atomic balance tracking across Customer, Driver, Fleet Owner, and Gig Worker wallets." },
    ]
  },
  {
    title: "Security, Governance & Compliance",
    subtitle: "Defense-in-depth security architecture complying with international and domestic data laws.",
    technologies: [
      { name: "DPDP Act 2023 & Zero-Trust", role: "Data Sovereignty", specs: "Strict Indian data localization, encryption at rest (AES-256), and in transit (TLS 1.3)." },
      { name: "Helmet.js & Tiered Rate Limiting", role: "Edge Threat Protection", specs: "Brute-force protection on auth endpoints and cryptographic Content Security Policies (CSP)." },
      { name: "Sentry & Winston", role: "Observability & APM", specs: "Full distributed tracing, automated stack unwinding, and structured HTTP log aggregation." },
      { name: "Docker & PM2 Cluster", role: "Zero-Downtime Deployment", specs: "Multi-hop proxy-aware containerization with SIGTERM graceful connection draining." },
    ]
  }
];

export default function TechnologiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Enterprise Technology Matrix & Engineering Architecture",
    "description": "Technical specifications of the production architectures built by Parther Technologies Private Limited.",
    "author": {
      "@type": "Organization",
      "name": "Parther Technologies Private Limited"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Parther Technologies Private Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://parthertech.com/logo.png"
      }
    }
  };

  return (
    <main className="min-h-screen bg-cf-bg pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-main max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-cf-text-tertiary mb-8 uppercase tracking-wider">
          <Link href="/" className="hover:text-cf-text transition-colors">Home</Link>
          <span>›</span>
          <span className="text-cf-text">Technology Matrix</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase font-mono-caps mb-3">
            Hardened Production Frameworks
          </span>
          <h1 className="font-serif-display text-4xl md:text-5xl text-cf-text mb-6 leading-tight">
            The Enterprise Technology Matrix
          </h1>
          <p className="text-lg text-cf-text-secondary leading-relaxed max-w-3xl">
            We do not experiment with unstable fads on client infrastructure. We engineer platforms using battle-tested, highly concurrent, and verifiable frameworks that scale reliably to millions of operations without technical debt.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="space-y-12">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div key={cat.title} className="p-8 md:p-10 border border-cf-border bg-white rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                  LAYER 0{idx + 1}
                </span>
                <h2 className="font-syncopate font-bold text-xl md:text-2xl text-cf-text">
                  {cat.title}
                </h2>
              </div>
              <p className="text-sm text-cf-text-secondary mb-8">
                {cat.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.technologies.map((tech) => (
                  <div key={tech.name} className="p-5 rounded-xl border border-cf-border/60 bg-cf-card hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-cf-text text-base">{tech.name}</h3>
                      <span className="text-[11px] font-mono-caps text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {tech.role}
                      </span>
                    </div>
                    <p className="text-xs text-cf-text-secondary leading-relaxed">
                      {tech.specs}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Linkage */}
        <div className="mt-16 p-10 bg-[#0A0A0A] text-white rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono-caps text-blue-400 uppercase tracking-widest mb-2 block">
              Proof of Execution
            </span>
            <h3 className="font-syncopate font-bold text-2xl text-white mb-2">
              See This Stack in Production
            </h3>
            <p className="text-sm text-white/60 max-w-xl leading-relaxed">
              Explore how these technologies are actively orchestrating freight logistics in GoMyTruck and workforce management in Advance Corporate Security.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link
              href="/case-studies"
              className="px-6 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-syncopate font-bold text-xs tracking-wider rounded-full transition-colors"
            >
              EXPLORE CASE STUDIES →
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
