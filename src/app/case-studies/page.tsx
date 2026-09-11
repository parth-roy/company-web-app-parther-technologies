import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Enterprise Case Studies & Deployments | Parther Technologies',
  description:
    'Forensic case studies: GoMyTruck freight marketplace, MetroMitra gig workforce, MetroWala transit intelligence, Advance Corporate Security PSEO portal, and Yashoda Hotel direct booking. Real code. Real deployments.',
  keywords: [
    'GoMyTruck case study',
    'MetroMitra workforce case study',
    'MetroWala transit platform case study',
    'Advance Corporate Security PSEO case study',
    'Yashoda Hotel booking case study',
    'logistics SaaS development India',
    'Flutter app development West Bengal',
    'Next.js programmatic SEO enterprise',
    'ULIP government API logistics integration',
    'Parther Technologies portfolio',
    'enterprise software development Kolkata Barrackpore',
  ],
};

const TECH_PILLS = ['Node.js', 'TypeScript', 'Flutter', 'PostgreSQL', 'Socket.io', 'RazorpayX', 'AWS S3', 'ULIP APIs'];

export default function CaseStudiesHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Parther Technologies Enterprise Software Deployments & Case Studies',
    description: 'Production software systems engineered by Parther Technologies Private Limited across logistics SaaS, gig economy, urban transit, and facility management.',
    numberOfItems: 7,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'GoMyTruck — Full-Stack Digital Freight Marketplace',
        description: 'Dual-mode freight marketplace with 31 backend modules, 3 Flutter apps, and ULIP government API integration.',
        url: 'https://parthertech.com/case-studies/gomytruck',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'MetroMitra — On-Demand Gig Workforce & Home Services Platform',
        description: '4-in-1 role-switching gig marketplace covering 550+ cities with 8,500+ SEO pages and Rs.49 direct worker contact unlocks.',
        url: 'https://metromitra.com',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'GoMyTruck Customer — Real-Time Freight Dispatch & Bidding',
        description: 'On-demand goods transport mobile app supporting 19 vehicle types, reverse auction bidding, and dual-OTP security.',
        url: 'https://gomytruck.com',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'GoMyTruck Vahan — Freight Marketplace & Freight Rate Index',
        description: 'React 18 + Vite freight portal with off-thread Web Worker pricing engine and 516+ city programmatic SEO corridors.',
        url: 'https://gomytruck.com',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'MetroWala — India\'s Best Metro Route Map & Transit Guide',
        description: 'High-performance Next.js 14 SSG transit portal covering 10 Indian metro systems with zero database latency.',
        url: 'https://metrowala.com',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Advance Corporate Security — 14,000+ Page PSEO Architecture',
        description: 'Next.js 16 + Express 5 platform with 14,000+ programmatic SEO routes for a 25-year-old defence and facility management enterprise.',
        url: 'https://advancecorporatesecurity.com',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Yashoda Hotel — Zero-Commission Direct Accommodation Portal',
        description: 'Next.js 16 direct booking engine eliminating 25% OTA cuts with hourly day-use slots and instant WhatsApp manager alerts.',
        url: 'https://yasodahotel.com',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-cf-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f4f4f0] border-b border-cf-border">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-xs font-mono text-cf-text-tertiary mb-8 uppercase tracking-wider">
            <Link href="/" className="hover:text-cf-text transition-colors">Home</Link>
            <span>›</span>
            <span className="text-cf-text">Case Studies</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase font-mono-caps mb-4">
              Proof of Work
            </span>
            <h1 className="font-serif-display text-5xl md:text-6xl text-cf-text mb-6 leading-tight">
              Enterprise Deployments
            </h1>
            <p className="text-xl text-cf-text-secondary leading-relaxed">
              We convert intent into trust. Real architecture. Real results. Production platforms engineered from scratch by Parther Technologies across freight logistics, gig workforce, urban transit, enterprise security, and hospitality.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              { value: '7',   label: 'Core Deployments' },
              { value: '31',  label: 'Backend Modules' },
              { value: '3',   label: 'Flutter Apps' },
              { value: '14K+',label: 'PSEO Pages' },
              { value: '550+',label: 'Cities Covered' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-syncopate font-bold text-cf-text">{stat.value}</div>
                <div className="text-xs text-cf-text-secondary mt-1 uppercase tracking-widest font-mono-caps">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Card */}
      <section className="py-20">
        <div className="container-main">
          <div className="mb-8">
            <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase font-mono-caps">
              Published Case Study
            </span>
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-[45%_55%]">
              <div className="relative h-64 md:h-auto min-h-[340px] overflow-hidden">
                <Image
                  src="/case-studies/gomytruck/hero-banner.jpg"
                  alt="GoMyTruck Digital Freight Marketplace built by Parther Technologies"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover opacity-70"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0f1a] hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent md:hidden" />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    <span className="text-xs font-bold tracking-widest text-blue-400 uppercase border border-blue-500/40 bg-blue-500/10 px-3 py-1 rounded-full">
                      Flagship Project
                    </span>
                    <span className="text-xs text-white/40">Logistics & Freight — Kolkata</span>
                  </div>
                  <h2 className="font-syncopate font-bold text-2xl md:text-3xl text-white tracking-tight mb-5 leading-snug">
                    GoMyTruck — Full-Stack Digital Freight Marketplace
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    Parther Technologies engineered GoMyTruck from the ground up — a dual-mode booking engine, four-wallet payment system, automated RazorpayX payouts, ULIP government compliance, and three dedicated Flutter apps for a logistics marketplace disrupting West Bengal&apos;s cartelized trucking sector.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {TECH_PILLS.map((tech) => (
                      <span key={tech} className="bg-blue-950 border border-blue-700/50 text-blue-300 rounded-full px-3 py-1 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-8">
                    {[
                      { value: '500+', label: 'Verified Drivers' },
                      { value: '2 Min', label: 'Avg. Booking Time' },
                      { value: '31', label: 'Backend Modules' },
                    ].map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-syncopate font-bold text-white mb-1">{m.value}</div>
                        <div className="text-xs text-white/40 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/case-studies/gomytruck" className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0f1a] font-bold text-sm px-7 py-3 rounded-full hover:bg-blue-50 transition-colors">
                      Read Full Case Study →
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-colors">
                      Start a Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 2: MetroMitra Workforce ── */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-sm font-semibold tracking-widest text-emerald-500 uppercase font-mono-caps">
                Gig Economy & Marketplace Platform
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/10 shadow-2xl">
              <div className="grid md:grid-cols-[45%_55%]">
                <div className="relative h-64 md:h-auto min-h-[360px] overflow-hidden">
                  <Image
                    src="/case-studies/workforce/hero-banner.webp"
                    alt="MetroMitra Workforce on-demand gig platform built by Parther Technologies"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0f1a]/40 to-[#0a0f1a] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent md:hidden" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 rounded-full">
                        Gig Workforce SaaS
                      </span>
                      <span className="text-xs text-white/40">Workforce & Home Services — Pan-India · 550+ Hubs</span>
                    </div>
                    <h2 className="font-syncopate font-bold text-2xl md:text-3xl text-white tracking-tight mb-5 leading-snug">
                      MetroMitra — On-Demand Gig Workforce & Services Platform
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-8">
                      A high-concurrency gig marketplace built for India&apos;s blue-collar sector. Unifies four personas into a single Flutter app with instant role-switching (Gig Worker, B2C Hirer, Corporate Hirer, Contractor). Features an unbundled ₹49 direct worker contact unlock model, live Mapbox Job Radar with geofenced dispatch, OTP job verification, photo PoD, RazorpayX instant payouts, and an 8,500-page programmatic SEO web engine.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {['Flutter', 'Riverpod', 'React 19', 'Vite', 'React Router v7', 'Mapbox Maps', 'Socket.io', 'Firebase FCM', 'RazorpayX', 'Cashfree', 'DigiLocker KYC', 'Tailwind CSS'].map((tech) => (
                        <span key={tech} className="bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 rounded-full px-3 py-1 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-8">
                      {[
                        { value: '550+', label: 'Cities Covered' },
                        { value: '8,500+', label: 'PSEO Pages' },
                        { value: '₹49', label: 'Direct Unlock' },
                      ].map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl font-syncopate font-bold text-emerald-400 mb-1">{m.value}</div>
                          <div className="text-xs text-white/40 leading-tight font-mono-caps">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://metromitra.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-[#0a0f1a] font-bold text-sm px-7 py-3 rounded-full hover:bg-emerald-400 transition-colors">
                        Visit Live Platform →
                      </a>
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-colors">
                        Build Workforce Platform
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 3: GoMyTruck Customer App ── */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-sm font-semibold tracking-widest text-cyan-500 uppercase font-mono-caps">
                Logistics & Dispatch Architecture
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/10 shadow-2xl">
              <div className="grid md:grid-cols-[45%_55%]">
                <div className="relative h-64 md:h-auto min-h-[360px] overflow-hidden">
                  <Image
                    src="/case-studies/customer/hero-banner.png"
                    alt="GoMyTruck Customer App built by Parther Technologies"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0f1a]/40 to-[#0a0f1a] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent md:hidden" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 rounded-full">
                        Mobile Ecosystem
                      </span>
                      <span className="text-xs text-white/40">On-Demand Dispatch — 19 Commercial Vehicle Classes</span>
                    </div>
                    <h2 className="font-syncopate font-bold text-2xl md:text-3xl text-white tracking-tight mb-5 leading-snug">
                      GoMyTruck Customer — Real-Time Freight Dispatch & Bidding
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-8">
                      The demand-side engine for GoMyTruck. Supports 2-wheelers to 32ft multi-axle trailers with multi-stop routing, live driver decline counters, and instant bulk fare estimates (/pricing/estimate-all). Features a private reverse-auction freight bidding room with live Socket.IO negotiations, dual-OTP pickup/delivery security, gamified cashback scratch cards, and an embedded AI logistics chat assistant.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {['Flutter 3.11', 'Dart', 'Riverpod', 'GoRouter', 'Mapbox Vector', 'Socket.io', 'Razorpay SDK', 'Firebase Messaging', 'AES Storage', 'Directions API'].map((tech) => (
                        <span key={tech} className="bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 rounded-full px-3 py-1 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-8">
                      {[
                        { value: '19', label: 'Vehicle Classes' },
                        { value: 'Dual-OTP', label: 'Security Handshake' },
                        { value: '1.5x', label: 'Surge Multiplier Cap' },
                      ].map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl font-syncopate font-bold text-cyan-400 mb-1">{m.value}</div>
                          <div className="text-xs text-white/40 leading-tight font-mono-caps">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://gomytruck.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-[#0a0f1a] font-bold text-sm px-7 py-3 rounded-full hover:bg-cyan-300 transition-colors">
                        View App Specs →
                      </a>
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-colors">
                        Develop Mobile App
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 4: GoMyTruck Vahan Freight Web ── */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-sm font-semibold tracking-widest text-indigo-400 uppercase font-mono-caps">
                Freight Web Portal & Programmatic SEO
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/10 shadow-2xl">
              <div className="grid md:grid-cols-[45%_55%]">
                <div className="relative h-64 md:h-auto min-h-[360px] overflow-hidden">
                  <Image
                    src="/case-studies/vahan/hero-banner.webp"
                    alt="GoMyTruck Vahan Freight Web Portal built by Parther Technologies"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0f1a]/40 to-[#0a0f1a] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent md:hidden" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 rounded-full">
                        Freight Portal & Rate Index
                      </span>
                      <span className="text-xs text-white/40">National Highway Corridors — 516+ Cities</span>
                    </div>
                    <h2 className="font-syncopate font-bold text-2xl md:text-3xl text-white tracking-tight mb-5 leading-snug">
                      GoMyTruck Vahan — Freight Marketplace & Freight Rate Index
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-8">
                      A React 18 + Vite web portal operating under the Motor Vehicles Aggregator Guidelines 2025. Replaces broker markups (15–25%) with a flat 5% commission or ₹99 direct driver phone unlock. Powered by an off-thread Web Worker pricing engine (pricingWorker.js) for 60fps INP, streaming SSR, and a programmatic SEO directory of 516+ Indian cities and 800+ national freight corridors.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {['React 18', 'Vite 5', 'React Router v7', 'Web Worker Engine', 'Stream SSR', 'Tailwind CSS', 'Mapbox GL', 'Razorpay', 'UPI Autopay', 'Node.js'].map((tech) => (
                        <span key={tech} className="bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 rounded-full px-3 py-1 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-8">
                      {[
                        { value: '516+', label: 'Indexed Cities' },
                        { value: '800+', label: 'Highway Corridors' },
                        { value: '5%', label: 'Flat Commission' },
                      ].map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl font-syncopate font-bold text-indigo-400 mb-1">{m.value}</div>
                          <div className="text-xs text-white/40 leading-tight font-mono-caps">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://gomytruck.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-indigo-500 text-white font-bold text-sm px-7 py-3 rounded-full hover:bg-indigo-400 transition-colors">
                        Explore Freight Web →
                      </a>
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-colors">
                        Build Logistics Portal
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 5: MetroWala ── */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-sm font-semibold tracking-widest text-pink-500 uppercase font-mono-caps">
                Urban Transit & Public Infrastructure
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/10 shadow-2xl">
              <div className="grid md:grid-cols-[45%_55%]">
                <div className="relative h-64 md:h-auto min-h-[360px] overflow-hidden">
                  <Image
                    src="/case-studies/metrowala/hero-banner.webp"
                    alt="MetroWala Urban Transit Guide built by Parther Technologies"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0f1a]/40 to-[#0a0f1a] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent md:hidden" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="text-xs font-bold tracking-widest text-pink-400 uppercase border border-pink-500/40 bg-pink-500/10 px-3 py-1 rounded-full">
                        Transit Intelligence
                      </span>
                      <span className="text-xs text-white/40">Metro Rail — 10 National Metro Systems</span>
                    </div>
                    <h2 className="font-syncopate font-bold text-2xl md:text-3xl text-white tracking-tight mb-5 leading-snug">
                      MetroWala — India&apos;s Best Metro Route Map & Transit Guide
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-8">
                      A zero-latency Next.js 14 SSG urban transit portal aggregating 10 Indian metro systems (Delhi DMRC, Mumbai MMRDA, Kolkata KMRCL with the underwater Hooghly tunnel, Bengaluru BMRCL, Hyderabad HMRL, Chennai, Pune, Ahmedabad, Jaipur, Kochi). Features turn-by-turn route planning, exit gate numbers, smart card discount comparisons, train timetables, and Schema.org Trip/TrainStation structured data with zero database latency.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {['Next.js 14 App Router', 'React 18', 'TypeScript', 'Tailwind CSS', 'SSG Engine', 'Schema.org JSON-LD', 'XML Sitemaps', 'PM2 Cluster', 'Nginx Cache'].map((tech) => (
                        <span key={tech} className="bg-pink-950/80 border border-pink-700/50 text-pink-300 rounded-full px-3 py-1 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-8">
                      {[
                        { value: '10', label: 'Metro Networks' },
                        { value: '288+', label: 'Stations (DMRC)' },
                        { value: '0ms', label: 'Database Latency' },
                      ].map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl font-syncopate font-bold text-pink-400 mb-1">{m.value}</div>
                          <div className="text-xs text-white/40 leading-tight font-mono-caps">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://metrowala.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-pink-500 text-white font-bold text-sm px-7 py-3 rounded-full hover:bg-pink-400 transition-colors">
                        Visit MetroWala.com →
                      </a>
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-colors">
                        Build Transit Platform
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 6: Advance Corporate Security (ACS) ── */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-sm font-semibold tracking-widest text-amber-500 uppercase font-mono-caps">
                Enterprise B2B · Facility Management & PSEO
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/10 shadow-2xl">
              <div className="grid md:grid-cols-[45%_55%]">
                <div className="relative h-64 md:h-auto min-h-[360px] overflow-hidden">
                  <Image
                    src="/case-studies/acs/hero-banner.jpg"
                    alt="Advance Corporate Security Portal built by Parther Technologies"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0f1a]/40 to-[#0a0f1a] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent md:hidden" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="text-xs font-bold tracking-widest text-amber-400 uppercase border border-amber-500/40 bg-amber-500/10 px-3 py-1 rounded-full">
                        Enterprise PSEO
                      </span>
                      <span className="text-xs text-white/40">Defence & Corporate — Indian Air Force, BSF, IOCL, HAL</span>
                    </div>
                    <h2 className="font-syncopate font-bold text-2xl md:text-3xl text-white tracking-tight mb-5 leading-snug">
                      Advance Corporate Security — 14,000+ Page PSEO Architecture
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-8">
                      Full-stack digital modernization for a 25-year-old PSARA-licensed and ISO 9001:2015-certified facility management enterprise. Built with Next.js 16 Standalone and Tailwind v4, generating 14,000+ programmatic SEO routes across 828 Indian cities. Powered by a dual-strategy zero-billing geolocation engine, full Schema.org knowledge graphs, AI crawler allowlisting (GPTBot, PerplexityBot), and an Express 5 + MongoDB Atlas backend with dual-email automated workflows.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {['Next.js 16 Standalone', 'React 19', 'Tailwind CSS v4', 'Express v5', 'TypeScript', 'MongoDB Atlas', 'AWS SDK v3', 'DO Spaces', 'Nodemailer', 'PM2 Cluster'].map((tech) => (
                        <span key={tech} className="bg-amber-950/80 border border-amber-700/50 text-amber-300 rounded-full px-3 py-1 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-8">
                      {[
                        { value: '14,000+', label: 'PSEO Pages' },
                        { value: '828', label: 'Indian Cities' },
                        { value: '25 yrs', label: 'Client Legacy' },
                      ].map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl font-syncopate font-bold text-amber-400 mb-1">{m.value}</div>
                          <div className="text-xs text-white/40 leading-tight font-mono-caps">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://advancecorporatesecurity.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-amber-500 text-[#0a0f1a] font-bold text-sm px-7 py-3 rounded-full hover:bg-amber-400 transition-colors">
                        Visit ACS Portal →
                      </a>
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-colors">
                        Build Enterprise Portal
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 7: Yashoda Hotel & Lodge ── */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-sm font-semibold tracking-widest text-orange-500 uppercase font-mono-caps">
                Hospitality & Direct Booking Engine
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/10 shadow-2xl">
              <div className="grid md:grid-cols-[45%_55%]">
                <div className="relative h-64 md:h-auto min-h-[360px] overflow-hidden">
                  <Image
                    src="/case-studies/yasoda/hero-banner.webp"
                    alt="Yashoda Hotel Direct Booking Portal built by Parther Technologies"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0f1a]/40 to-[#0a0f1a] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent md:hidden" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="text-xs font-bold tracking-widest text-orange-400 uppercase border border-orange-500/40 bg-orange-500/10 px-3 py-1 rounded-full">
                        Hospitality Direct Booking
                      </span>
                      <span className="text-xs text-white/40">Barrackpore — 80m from Disha Eye Hospital & 100m from Station</span>
                    </div>
                    <h2 className="font-syncopate font-bold text-2xl md:text-3xl text-white tracking-tight mb-5 leading-snug">
                      Yashoda Hotel — Zero-Commission Direct Accommodation Portal
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-8">
                      A high-conversion Next.js 16 + React 19 direct booking engine that eliminates 25% OTA commissions (OYO, MakeMyTrip). Features day-use hourly rooms (2hr/3hr slots from ₹699), student budget rooms (from ₹399/head), couple-friendly local ID verification, 4-step checkout with DPDP Act 2023 consent, Razorpay advance payments, Google Sheets CRM synchronization, CallMeBot instant WhatsApp manager alerts, and localized Bengali bilingual SEO.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {['Next.js 16 App Router', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Razorpay Gateway', 'CallMeBot WhatsApp', 'Google Sheets CRM', 'DPDP Act 2023', 'Docker'].map((tech) => (
                        <span key={tech} className="bg-orange-950/80 border border-orange-700/50 text-orange-300 rounded-full px-3 py-1 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-8">
                      {[
                        { value: '0%', label: 'OTA Commission' },
                        { value: '80m', label: 'Disha Hospital Walk' },
                        { value: '13', label: 'Local Intent Hubs' },
                      ].map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl font-syncopate font-bold text-orange-400 mb-1">{m.value}</div>
                          <div className="text-xs text-white/40 leading-tight font-mono-caps">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://yasodahotel.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-bold text-sm px-7 py-3 rounded-full hover:bg-orange-400 transition-colors">
                        Visit YashodaHotel.com →
                      </a>
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-colors">
                        Build Booking Engine
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NDA Note */}
      <section className="pb-20">
        <div className="container-main">
          <div className="border border-dashed border-cf-border rounded-2xl p-10 text-center bg-cf-card">
            <p className="text-cf-text-secondary font-mono text-sm mb-2">
              More case studies are published on a rolling basis.
            </p>
            <p className="text-cf-text-tertiary text-xs mb-8">
              NDAs prevent us from publishing most client work publicly. Architecture blueprints are shared during technical discovery calls.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-cf-text text-cf-text font-semibold text-sm px-6 py-3 rounded-full hover:bg-cf-text hover:text-white transition-colors">
              Book a Technical Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#111111] py-24">
        <div className="container-main text-center">
          <h2 className="font-serif-display text-4xl text-white mb-5">
            Every deployment starts with a 30-minute architecture call.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            We audit your current system, identify the critical bottlenecks, and return with a concrete technical proposal.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#111111] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-base">
            Get Technical Assessment
          </Link>
        </div>
      </section>

    </main>
  );
}