const rows = [
  { others: "Generic templates", parther: "Custom architecture for your exact workflow" },
  { others: "One-size-fits-all solutions", parther: "Tailored systems built around your operations" },
  { others: "Basic SEO only", parther: "SEO + GEO + AI Visibility (ChatGPT & Google AI)" },
  { others: "One-time delivery, goodbye", parther: "Long-term technology partner, always optimizing" },
  { others: "Limited scalability", parther: "Enterprise-ready from day one" },
  { others: "Slow communication", parther: "Dedicated project manager + real-time updates" },
  { others: "Offshore assembly line", parther: "Senior engineers, local accountability" },
];

export function WhyPartherSection() {
  return (
    <section id="why-parther" className="relative z-10 bg-cf-bg text-cf-text py-28 border-t border-cf-border">
      <div className="container-main">
        <div className="mb-16 flex flex-col gap-4 items-center text-center">
          <span className="block text-sm font-semibold tracking-widest text-blue-500 uppercase">
            The Difference
          </span>
          <h2 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight mb-2">
            Why Companies Choose Parther
          </h2>
          <p className="text-cf-text-secondary text-xl max-w-2xl leading-relaxed">
            We don't compete on price. We compete on outcomes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-2 mb-2">
            <div className="bg-cf-border-light border border-cf-border p-4 text-center">
              <span className="font-syncopate font-bold text-sm tracking-widest text-cf-text-secondary uppercase">
                Others
              </span>
            </div>
            <div className="bg-blue-600 border border-blue-500 p-4 text-center">
              <span className="font-syncopate font-bold text-sm tracking-widest text-white uppercase">
                Parther Technologies
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-cf-border">
              <div className="bg-cf-card border-r border-cf-border p-5 flex items-center gap-3">
                <span className="text-cf-text-tertiary text-lg shrink-0">✗</span>
                <span className="text-cf-text-secondary text-sm leading-relaxed">{row.others}</span>
              </div>
              <div className="bg-blue-50/60 p-5 flex items-center gap-3 group hover:bg-blue-50 transition-colors">
                <span className="text-blue-500 text-lg shrink-0 font-bold">✓</span>
                <span className="text-cf-text text-sm font-medium leading-relaxed">{row.parther}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
