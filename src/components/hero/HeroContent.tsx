import HeroIllustration from "./HeroIllustration";

export default function HeroContent() {
  return (
    <div className="container-main grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-6 gap-y-16 items-center w-full min-h-[90vh] py-24 lg:py-0">
      
      {/* Left Column: Core Value Proposition */}
      <div className="z-10 relative flex flex-col items-start col-span-4 md:col-span-6 lg:col-span-6 xl:col-span-5 h-full justify-center">
        
        {/* Badge */}
        <div className="inline-flex px-4 py-2 mb-8 rounded-full border border-cf-border/60 bg-cf-card/50 backdrop-blur-sm text-[10px] sm:text-xs font-mono-caps font-semibold tracking-[0.15em] text-cf-text-secondary hero-stagger shadow-sm" style={{ "--stagger": 0 } as React.CSSProperties}>
          Enterprise Digital Growth
        </div>
        
        {/* Headline */}
        <h1 className="font-syncopate uppercase tracking-tight font-bold text-h2 sm:text-h1 lg:text-[64px] leading-[1.10] mb-8 text-cf-text hero-stagger" style={{ "--stagger": 1 } as React.CSSProperties}>
          Automate your business. <br className="hidden md:block"/>
          Dominate your market.
        </h1>
        
        {/* Paragraph */}
        <p className="text-body sm:text-h4 text-cf-text-secondary leading-relaxed max-w-[500px] mb-12 hero-stagger" style={{ "--stagger": 2 } as React.CSSProperties}>
          We architect custom enterprise software and deploy Generative Engine Optimization (GEO) strategies designed specifically for industrial, healthcare, and SaaS companies in Eastern India.
        </p>
        
        {/* Trust Signals */}
        <div className="flex flex-col gap-5 hero-stagger mt-8 pt-8 border-t border-cf-border/40 w-full" style={{ "--stagger": 3 } as React.CSSProperties}>
          <p className="text-[10px] sm:text-xs font-mono-caps text-cf-text-tertiary tracking-[0.2em] uppercase">Trusted by regional leaders</p>
          <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:opacity-100 transition-opacity duration-500 mix-blend-multiply items-center">
            {/* Placeholder logos */}
            <div className="h-8 w-24 bg-cf-border/30 rounded flex items-center justify-center text-xs font-bold font-mono text-cf-text-secondary">ITC</div>
            <div className="h-8 w-24 bg-cf-border/30 rounded flex items-center justify-center text-xs font-bold font-mono text-cf-text-secondary">Apollo</div>
            <div className="h-8 w-24 bg-cf-border/30 rounded flex items-center justify-center text-xs font-bold font-mono text-cf-text-secondary">Shyam</div>
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
