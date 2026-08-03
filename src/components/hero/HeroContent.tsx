import HeroIllustration from "./HeroIllustration";

export default function HeroContent() {
  return (
    <div className="container-main flex flex-col xl:flex-row gap-8 xl:gap-12 items-center xl:justify-between w-full min-h-0 pt-8 pb-16 xl:pt-8 xl:pb-16">
      {/* Left Column: Core Value Proposition */}
      <div className="z-10 relative flex flex-col items-start w-full xl:w-[55%] h-full justify-center shrink-0 min-w-0">

        {/* Badge */}
        <div
          className="inline-flex px-4 py-2 mb-8 rounded-full border border-cf-border/60 bg-cf-card/50 backdrop-blur-sm text-[10px] sm:text-xs font-mono-caps font-semibold tracking-[0.15em] text-cf-text-secondary hero-stagger shadow-sm"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          Enterprise Architecture · GEO · AI-First Engineering
        </div>

        <h1
          className="font-syncopate uppercase tracking-tight font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.10] mb-8 text-cf-text hero-stagger break-words"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cf-text text-white font-syncopate font-bold text-xs tracking-widest hover:bg-cf-text/80 transition-colors duration-200 shadow-lg whitespace-nowrap"
            >
              REQUEST TECHNICAL AUDIT →
            </a>
            <span className="mt-2 text-xs text-gray-500 font-mono-caps tracking-wider">Response within 24 hours</span>
          </div>
          <a
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cf-text text-cf-text font-syncopate font-bold text-xs tracking-widest hover:bg-cf-text hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            VIEW CASE STUDIES
          </a>
        </div>


      </div>

      {/* Right Column: Interactive Element */}
      <div className="z-10 relative w-full xl:w-[45%] flex justify-center xl:justify-end shrink-0 mt-8 xl:mt-0">
        <div className="w-full max-w-[448px]">
          <HeroIllustration />
        </div>
      </div>

    </div>
  );
}
