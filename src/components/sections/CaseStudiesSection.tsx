import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    tag: "Flagship SaaS Platform",
    industry: "Logistics & Freight — Kolkata",
    title: "GoMyTruck — Full-Stack Digital Freight Marketplace",
    description:
      "Parther Technologies engineered GoMyTruck from first principles: a dual-mode booking engine, four-wallet payment system, automated RazorpayX payouts, ULIP government compliance, and three dedicated Flutter apps — disrupting West Bengal's cartelized trucking sector.",
    metric1: { label: "Verified Drivers Onboarded", value: "500+" },
    metric2: { label: "Avg. Booking Time", value: "2 Min" },
    metric3: { label: "Backend Modules", value: "31" },
    image: "/case-studies/gomytruck/hero-banner.jpg",
    slug: "/case-studies/gomytruck",
    flagship: true,
  },
  {
    tag: "ERP Implementation",
    industry: "Manufacturing",
    title: "Replaced 12 Spreadsheets With One Unified Platform",
    description:
      "End-to-end ERP system replacing disconnected spreadsheet workflows across procurement, production, and dispatch for a Durgapur manufacturing unit.",
    metric1: { label: "Reduction in manual errors", value: "74%" },
    metric2: { label: "Faster order processing", value: "3×" },
    metric3: { label: "Departments unified", value: "7" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    slug: "/case-studies",
    flagship: false,
  },
  {
    tag: "SEO + GEO Growth",
    industry: "Professional Services",
    title: "From Page 3 to AI-Cited Authority in 90 Days",
    description:
      "Full SEO + GEO overhaul for a Kolkata-based professional services firm. Implemented Answer Engine Optimization and semantic entity injection to get cited by ChatGPT and Google AI Overviews.",
    metric1: { label: "Organic traffic growth", value: "290%" },
    metric2: { label: "AI search citations", value: "Top 3" },
    metric3: { label: "Time to result", value: "90 Days" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "/case-studies",
    flagship: false,
  },
];

export function CaseStudiesSection() {
  const [flagship, ...rest] = caseStudies;

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

        {/* Flagship Card — GoMyTruck */}
        <Link
          href={flagship.slug}
          className="group mb-8 flex flex-col md:flex-row bg-cf-text text-white border border-cf-text clip-corner overflow-hidden hover:shadow-[0_12px_60px_rgba(0,0,0,0.2)] transition-colors duration-200 block"
        >
          <div className="md:w-2/5 h-56 md:h-auto overflow-hidden shrink-0 relative">
            <Image
              src={flagship.image}
              alt={flagship.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
            <div>
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase border border-blue-500/40 bg-blue-500/10 px-3 py-1">
                  {flagship.tag}
                </span>
                <span className="text-xs text-white/50">{flagship.industry}</span>
                <span className="ml-auto text-[10px] font-mono-caps text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full">
                  ★ Flagship Project
                </span>
              </div>
              <h3 className="font-syncopate font-bold text-xl md:text-2xl tracking-tight mb-4 group-hover:text-blue-300 transition-colors duration-200 leading-snug">
                {flagship.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg">
                {flagship.description}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mt-6">
              {[flagship.metric1, flagship.metric2, flagship.metric3].map((m) => (
                <div key={m.label}>
                  <div className="text-2xl font-bold text-white font-syncopate">{m.value}</div>
                  <div className="text-xs text-white/50 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Link>

        {/* Remaining Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((cs, i) => (
            <Link
              key={i}
              href={cs.slug}
              className="group flex flex-col bg-cf-bg border border-cf-border clip-corner overflow-hidden hover:border-blue-400 hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)] transition-colors duration-200"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-xs font-bold tracking-widest text-blue-500 uppercase border border-blue-200 bg-blue-50 px-2 py-1">
                    {cs.tag}
                  </span>
                  <span className="text-xs text-cf-text-tertiary">{cs.industry}</span>
                </div>
                <h3 className="font-syncopate font-bold text-base tracking-tight mb-3 group-hover:text-blue-600 transition-colors duration-200 leading-snug flex-1">
                  {cs.title}
                </h3>
                <p className="text-cf-text-secondary text-sm leading-relaxed mb-5 line-clamp-2">
                  {cs.description}
                </p>
                <div className="grid grid-cols-3 gap-3 border-t border-cf-border pt-4">
                  {[cs.metric1, cs.metric2, cs.metric3].map((m) => (
                    <div key={m.label}>
                      <div className="text-xl font-bold text-blue-600 font-syncopate">{m.value}</div>
                      <div className="text-xs text-cf-text-secondary mt-1 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
