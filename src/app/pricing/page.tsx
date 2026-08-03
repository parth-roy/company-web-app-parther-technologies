import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Investment Architecture | Parther Technologies',
  description: 'Enterprise software investment frameworks for MSMEs, logistics conglomerates, and Fortune 500 clients across Eastern India. Request a custom ROI estimator.',
};

const tiers = [
  {
    label: "Growth",
    tagline: "Regional businesses scaling beyond spreadsheets",
    descriptor: "Regional distributors, educational institutes, healthcare clinics.",
    range: "Discovery-Based",
    highlight: false,
    cta: "Book Discovery Call",
    ctaHref: "/contact",
    capabilities: [
      "Digital presence & SEO audit",
      "Process automation assessment",
      "Custom CRM implementation",
      "AI-Powered lead generation",
      "Local GEO optimization",
    ],
    note: "Scoped after a free 30-min architecture review.",
  },
  {
    label: "Scale",
    tagline: "MSMEs demanding enterprise-grade engineering",
    descriptor: "Manufacturing, logistics, multi-location retail, scaling startups.",
    range: "Proposal-Based",
    highlight: true,
    cta: "Request Technical Audit",
    ctaHref: "/contact",
    capabilities: [
      "Custom ERP / SaaS architecture",
      "Agentic workflow automation",
      "Headless CMS & API platform",
      "Multi-tenant infrastructure",
      "SEO + GEO + AI Visibility stack",
      "GoMyTruck-class engineering",
    ],
    note: "Delivered with a formal architecture blueprint & ROI projection.",
  },
  {
    label: "Enterprise",
    tagline: "Conglomerates, GCCs & government contractors",
    descriptor: "Logistics conglomerates, hospitals, government contractors, GCCs.",
    range: "RFP / Retainer",
    highlight: false,
    cta: "Submit RFP",
    ctaHref: "/contact",
    capabilities: [
      "Zero-Trust cloud deployment",
      "Compliance-first architecture",
      "Executive stakeholder alignment",
      "24/7 SLA & on-call engineering",
      "Dedicated architecture team",
    ],
    note: "Engagement begins with an Executive Technical Workshop.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f0]">

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-main text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-white text-xs font-mono-caps font-semibold text-cf-text-secondary tracking-widest uppercase">
            Investment Architecture
          </span>
          <h1 className="font-syncopate font-bold text-5xl tracking-tight text-cf-text mb-6 leading-tight">
            Engineering-Grade Investment Frameworks
          </h1>
          <p className="text-lg text-cf-text-secondary leading-relaxed mb-10">
            We don't do "packages." Every engagement begins with a free Technical Discovery Call
            where we assess your architecture needs and deliver a custom ROI projection —
            before you commit a single rupee.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-cf-text text-white font-syncopate font-bold text-sm tracking-widest hover:bg-cf-text/80 transition-colors duration-200 shadow-lg"
          >
            REQUEST FREE TECHNICAL AUDIT →
          </Link>
        </div>
      </section>

      {/* GoMyTruck Proof Bar */}
      <section className="bg-cf-text py-8 border-y border-cf-border">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-white/70 text-xs font-mono-caps tracking-widest">
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-syncopate">500+</div>
              <div className="mt-1">Verified Drivers — GoMyTruck</div>
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-syncopate">2 Min</div>
              <div className="mt-1">Avg Booking Time — GoMyTruck</div>
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-syncopate">290%</div>
              <div className="mt-1">Organic Traffic Growth — SEO/GEO</div>
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-syncopate">74%</div>
              <div className="mt-1">Error Reduction — ERP Implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-20 pb-28">
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
                    Most Requested
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
                    className={`inline-flex items-center gap-2 text-xs font-mono-caps px-3 py-1.5 rounded-full border mb-6 ${
                      tier.highlight
                        ? "border-blue-500/40 text-blue-400 bg-blue-500/10"
                        : "border-cf-border text-cf-text-secondary bg-cf-bg"
                    }`}
                  >
                    ⟡ {tier.range}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className={`flex items-start gap-2.5 text-sm ${
                        tier.highlight ? "text-white/80" : "text-cf-text-secondary"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          tier.highlight ? "text-blue-400" : "text-blue-500"
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
                  className={`text-xs leading-relaxed mb-5 italic ${
                    tier.highlight ? "text-white/40" : "text-cf-text-tertiary"
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

      {/* Bottom CTA */}
      <section className="bg-cf-text py-20">
        <div className="container-main text-center max-w-2xl mx-auto">
          <h2 className="font-syncopate font-bold text-3xl text-white mb-4">
            Not sure which tier fits your business?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Book a free 30-minute Technical Discovery Call. We'll map your current
            architecture, identify the highest-ROI opportunity, and give you a
            written scope — with zero obligation.
          </p>
          <div className="flex flex-col items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-500 text-white font-syncopate font-bold text-sm tracking-widest hover:bg-blue-400 transition-colors duration-200 shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >
              BOOK FREE DISCOVERY CALL →
            </Link>
            <span className="mt-2 text-xs text-white/50 font-mono-caps tracking-wider">Response within 24 hours</span>
          </div>
        </div>
      </section>

    </main>
  );
}
