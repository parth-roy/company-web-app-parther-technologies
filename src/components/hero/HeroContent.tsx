import HeroIllustration from "./HeroIllustration";

export default function HeroContent() {
  return (
    <div className="container-main grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-6 gap-y-16 items-center w-full min-h-[90vh] py-24 lg:py-0">

      {/* Left Column: Core Value Proposition */}
      <div className="z-10 relative flex flex-col items-start col-span-4 md:col-span-6 lg:col-span-6 xl:col-span-5 h-full justify-center">

        {/* Badge */}
        <div
          className="inline-flex px-4 py-2 mb-8 rounded-full border border-cf-border/60 bg-cf-card/50 backdrop-blur-sm text-[10px] sm:text-xs font-mono-caps font-semibold tracking-[0.15em] text-cf-text-secondary hero-stagger shadow-sm"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          Enterprise Architecture · GEO · AI-First Engineering
        </div>

        {/* Headline */}
        <h1
          className="font-syncopate uppercase tracking-tight font-bold text-h2 sm:text-h1 lg:text-[64px] leading-[1.10] mb-8 text-cf-text hero-stagger"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          We Architect Scalable Digital Infrastructure.
        </h1>

        {/* Sub-headline */}
        <p
          className="text-body sm:text-h4 text-cf-text-secondary leading-relaxed max-w-[520px] mb-6 hero-stagger"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          From Agentic Workflows to Headless Architectures — we engineer systems
          that give your business an unfair competitive advantage across Eastern
          India's fastest-growing markets.
        </p>

        {/* GoMyTruck proof stat */}
        <div
          className="hero-stagger mb-10"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono-caps text-blue-600 border border-blue-200 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            GoMyTruck — 500+ Verified Drivers · 2-Min Avg Booking · Multi-Tenant SaaS
            <span>→</span>
          </a>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 hero-stagger mb-10 items-start"
          style={{ "--stagger": 3 } as React.CSSProperties}
        >
          <div className="flex flex-col items-center sm:items-start">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cf-text text-white font-syncopate font-bold text-xs tracking-widest hover:bg-cf-text/80 transition-colors duration-200 shadow-lg"
            >
              REQUEST TECHNICAL AUDIT →
            </a>
            <span className="mt-2 text-xs text-gray-500 font-mono-caps tracking-wider">Response within 24 hours</span>
          </div>
          <a
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cf-text text-cf-text font-syncopate font-bold text-xs tracking-widest hover:bg-cf-text hover:text-white transition-colors duration-200"
          >
            VIEW CASE STUDIES
          </a>
        </div>

        {/* Trust Badges — AWS / NASSCOM / Certified */}
        <div
          className="flex flex-col gap-4 hero-stagger mt-2 pt-8 border-t border-cf-border/40 w-full"
          style={{ "--stagger": 4 } as React.CSSProperties}
        >
          <p className="text-[10px] sm:text-xs font-mono-caps text-cf-text-tertiary tracking-[0.2em] uppercase">
            Certified Infrastructure Partners
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {[
              { label: "AWS", sub: "Cloud Partner" },
              { label: "NASSCOM", sub: "Registered" },
              { label: "IBM", sub: "Technology" },
              { label: "Google", sub: "Cloud Ready" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white border border-cf-border rounded-lg px-3 py-2 shadow-sm"
              >
                <div className="w-6 h-6 bg-cf-border/30 rounded flex items-center justify-center text-[9px] font-bold font-mono text-cf-text shrink-0">
                  {badge.label[0]}
                </div>
                <div>
                  <div className="text-[10px] font-bold font-mono text-cf-text leading-none">
                    {badge.label}
                  </div>
                  <div className="text-[9px] text-cf-text-tertiary leading-none mt-0.5">
                    {badge.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Element */}
      <div className="z-10 relative col-span-4 md:col-span-8 lg:col-span-5 lg:col-start-8 xl:col-start-8">
        <HeroIllustration />
      </div>

    </div>
  );
}
