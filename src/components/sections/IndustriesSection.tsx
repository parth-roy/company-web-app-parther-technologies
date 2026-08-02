import Link from "next/link";

const industries = [
  { name: "Healthcare", slug: "healthcare", icon: "🏥", desc: "Digital transformation for clinics, hospitals & healthtech platforms." },
  { name: "Manufacturing", slug: "manufacturing", icon: "🏭", desc: "ERP, inventory & supply-chain automation at scale." },
  { name: "Logistics", slug: "logistics", icon: "🚚", desc: "Real-time tracking, fleet management & dispatch systems." },
  { name: "Retail & eCommerce", slug: "ecommerce-retail", icon: "🛒", desc: "Omnichannel platforms that convert at every touchpoint." },
  { name: "Education & EdTech", slug: "education", icon: "🎓", desc: "LMS, admission portals & student lifecycle management." },
  { name: "Real Estate", slug: "real-estate", icon: "🏢", desc: "Property management, CRM & lead generation platforms." },
  { name: "Construction", slug: "construction", icon: "🏗️", desc: "Project tracking, procurement & workforce management." },
  { name: "FinTech", slug: "fintech", icon: "💳", desc: "Secure payment systems, lending apps & financial dashboards." },
  { name: "Professional Services", slug: "professional-services", icon: "💼", desc: "Workflow automation for consulting, legal & advisory firms." },
  { name: "Startups", slug: "startups", icon: "🚀", desc: "MVP to enterprise scale — fast, lean, investor-ready architecture." },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="relative z-10 bg-cf-card text-cf-text py-28 border-t border-cf-border">
      <div className="container-main">

        {/* Header — stack vertically, no inline collisions */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="block text-sm font-semibold tracking-widest text-blue-500 uppercase">
            Sector Expertise
          </span>
          <h2 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight border-b-2 border-cf-text pb-4 self-start">
            Industries We Serve
          </h2>
          <p className="text-cf-text-secondary text-xl max-w-2xl leading-relaxed">
            Deep domain expertise across 10+ verticals. We understand your industry's constraints, compliance needs, and growth levers.
          </p>
        </div>

        {/* Grid — 2 cols mobile, 3 cols tablet, 5 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col bg-cf-bg border border-cf-border clip-corner p-5 hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-[0_4px_24px_rgba(59,130,246,0.1)] transition-colors duration-200"
            >
              <div className="text-3xl mb-3">{ind.icon}</div>
              <h3 className="font-syncopate font-bold text-xs tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                {ind.name}
              </h3>
              <p className="text-cf-text-secondary text-xs leading-relaxed flex-1">{ind.desc}</p>
              <div className="mt-4 text-xs font-bold text-blue-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Explore <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
