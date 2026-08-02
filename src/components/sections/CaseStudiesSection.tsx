import Link from "next/link";

const caseStudies = [
  {
    tag: "ERP Implementation",
    industry: "Manufacturing",
    title: "Replaced 12 Spreadsheets With One Unified Platform",
    metric1: { label: "Reduction in manual errors", value: "74%" },
    metric2: { label: "Faster order processing", value: "3×" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    slug: "/case-studies",
  },
  {
    tag: "Logistics Platform",
    industry: "Logistics & Freight",
    title: "Real-Time Fleet Tracking & Dispatch Automation",
    metric1: { label: "Fuel cost savings", value: "31%" },
    metric2: { label: "On-time delivery rate", value: "98%" },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    slug: "/case-studies",
  },
  {
    tag: "SEO + GEO Growth",
    industry: "Professional Services",
    title: "From Page 3 to AI-Cited Authority in 90 Days",
    metric1: { label: "Organic traffic growth", value: "290%" },
    metric2: { label: "AI search citations", value: "Top 3" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "/case-studies",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative z-10 bg-cf-card text-cf-text py-28 border-t border-cf-border">
      <div className="container-main">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="block text-sm font-semibold tracking-widest text-blue-500 uppercase">
              Proof of Work
            </span>
            <h2 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight border-b-2 border-cf-text pb-4 self-start">
              Case Studies
            </h2>
            <p className="text-cf-text-secondary text-xl max-w-xl leading-relaxed">
              Real results for real businesses. Not estimates — delivered outcomes.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="shrink-0 self-start md:self-end inline-flex items-center gap-2 border-2 border-cf-text px-6 py-3 font-syncopate font-bold text-sm tracking-widest hover:bg-cf-text hover:text-white transition-colors duration-200"
          >
            ALL CASE STUDIES →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <Link
              key={i}
              href={cs.slug}
              className="group flex flex-col bg-cf-bg border border-cf-border clip-corner overflow-hidden hover:border-blue-400 hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)] transition-all duration-200"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-xs font-bold tracking-widest text-blue-500 uppercase border border-blue-200 bg-blue-50 px-2 py-1">
                    {cs.tag}
                  </span>
                  <span className="text-xs text-cf-text-tertiary">{cs.industry}</span>
                </div>
                <h3 className="font-syncopate font-bold text-base tracking-tight mb-5 group-hover:text-blue-600 transition-colors duration-200 leading-snug flex-1">
                  {cs.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 border-t border-cf-border pt-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 font-syncopate">{cs.metric1.value}</div>
                    <div className="text-xs text-cf-text-secondary mt-1">{cs.metric1.label}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 font-syncopate">{cs.metric2.value}</div>
                    <div className="text-xs text-cf-text-secondary mt-1">{cs.metric2.label}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
