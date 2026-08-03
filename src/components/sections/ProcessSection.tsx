// Pure server component — zero JavaScript animation dependency.
// CSS scroll-driven animations handle card reveals via globals.css classes.
// All cards always visible — animation is purely additive.

const steps = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your business model, pain points, and growth objectives." },
  { num: "02", title: "Architecture", desc: "Design a scalable system blueprint — tech stack, integrations, and data model." },
  { num: "03", title: "Design", desc: "High-fidelity UI that reflects your brand, optimised for conversion." },
  { num: "04", title: "Development", desc: "Agile sprints with weekly demos. You see progress every 7 days." },
  { num: "05", title: "Testing", desc: "QA, load testing, security audits, and cross-device validation." },
  { num: "06", title: "Launch", desc: "Zero-downtime deployment with a go-live monitoring window." },
  { num: "07", title: "Optimisation", desc: "Performance tuning, A/B testing, and feature iteration based on real data." },
  { num: "08", title: "Support", desc: "Ongoing partnership: updates, monitoring, and scaling as you grow." },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative z-10 bg-cf-bg text-cf-text py-28 border-t border-cf-border">
      <div className="container-main">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="block text-sm font-semibold tracking-widest text-blue-500 uppercase">
            How We Work
          </span>
          <h2 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight border-b-2 border-cf-text pb-4 self-start">
            Our Development Process
          </h2>
          <p className="text-cf-text-secondary text-xl max-w-2xl leading-relaxed">
            Predictable delivery. No surprises. A proven 8-step framework refined across 50+ projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical center line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-cf-border md:-translate-x-px" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={step.num}
                className={`relative flex items-center gap-0 pb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Card side */}
                <div className={`flex-1 py-6 ${isLeft ? "md:pr-12 pr-0 pl-16 md:pl-0" : "md:pl-12 pl-16"}`}>
                  <div
                    className={`
                      bg-cf-card border border-cf-border clip-corner p-6 max-w-sm
                      hover:border-blue-400 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                      transition-colors duration-200 group
                      ${isLeft ? "md:ml-auto text-right scroll-reveal-left" : "text-left scroll-reveal-right"}
                    `}
                  >
                    <div className={`font-syncopate text-blue-500 text-xs font-bold tracking-widest mb-2 ${isLeft ? "text-right" : "text-left"}`}>
                      STEP {step.num}
                    </div>
                    <h3 className="font-syncopate font-bold text-lg mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-cf-text-secondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center node */}
                <div
                  className="
                    absolute left-0 md:left-1/2 md:-translate-x-1/2
                    w-10 h-10 bg-cf-bg border-2 border-blue-500
                    flex items-center justify-center
                    font-syncopate font-bold text-xs text-blue-500
                    shadow-[0_0_12px_rgba(59,130,246,0.4)]
                    z-10 scroll-reveal-up
                  "
                >
                  {step.num}
                </div>

                {/* Empty spacer for the opposite column on desktop */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
