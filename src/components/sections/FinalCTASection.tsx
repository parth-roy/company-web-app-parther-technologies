import Link from "next/link";

export function FinalCTASection() {
  return (
    <section id="cta" className="relative z-10 bg-cf-text text-white py-32 overflow-hidden">
      {/* Decorative glow blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      <div className="container-main relative z-10 text-center">
        <span className="inline-block text-sm font-semibold tracking-widest text-blue-400 uppercase mb-6">
          Ready to Start?
        </span>

        <h2 className="font-syncopate font-bold text-4xl md:text-6xl tracking-tight mb-8 leading-tight max-w-4xl mx-auto">
          Let's Build Your Next Competitive Advantage.
        </h2>

        <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          One conversation could change the trajectory of your business. Book a free 30-minute strategy call — no commitment, no sales pitch, just clarity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-3 px-10 py-5
              bg-blue-500 hover:bg-blue-400
              font-syncopate font-bold text-sm tracking-widest text-white
              transition-colors duration-300
              shadow-[0_0_40px_rgba(59,130,246,0.4)]
              hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]
            "
          >
            START YOUR PROJECT →
          </Link>
          <Link
            href="/pricing"
            className="
              inline-flex items-center gap-3 px-10 py-5
              border-2 border-white/30 hover:border-white
              font-syncopate font-bold text-sm tracking-widest text-white/70 hover:text-white
              transition-all duration-300
            "
          >
            VIEW PRICING
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-xs font-semibold tracking-widest uppercase">
          <span>✓ Free Strategy Call</span>
          <span>✓ No Lock-in Contracts</span>
          <span>✓ Response Within 24 Hours</span>
          <span>✓ Based in Eastern India</span>
        </div>
      </div>
    </section>
  );
}
