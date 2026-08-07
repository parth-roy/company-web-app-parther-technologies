import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Enterprise Case Studies & Deployments | Parther Technologies',
  description:
    'Forensic case studies showing exactly how Parther Technologies architects logistics platforms, ERP systems, and enterprise SaaS. Real code. Real deployments.',
  keywords: [
    'GoMyTruck case study',
    'logistics SaaS development India',
    'enterprise software case study',
    'Parther Technologies portfolio',
    'logistics app development India',
  ],
};

const TECH_PILLS = ['Node.js', 'TypeScript', 'Flutter', 'PostgreSQL', 'Socket.io', 'RazorpayX', 'AWS S3'];

export default function CaseStudiesHubPage() {
  return (
    <main className="min-h-screen bg-cf-bg">

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
              We convert intent into trust. Real architecture. Real results. No estimates.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              { value: '31', label: 'Backend Modules' },
              { value: '3',  label: 'Flutter Apps' },
              { value: '4',  label: 'Wallet Types' },
              { value: '19', label: 'Vehicle Categories' },
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