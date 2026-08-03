const testimonials = [
  {
    name: "Rajesh Agarwal",
    title: "Managing Director",
    company: "AgroPlus Industries",
    location: "Durgapur, West Bengal",
    quote:
      "Parther replaced our entire Excel-based procurement process with a custom ERP. What used to take 3 days now happens in 20 minutes. The ROI in the first quarter alone justified the entire project.",
    initials: "RA",
    color: "bg-blue-600",
  },
  {
    name: "Priya Mehta",
    title: "Founder & CEO",
    company: "EduReach Academy",
    location: "Kolkata",
    quote:
      "We went from a basic WordPress site to a full LMS and admissions platform in 10 weeks. Enrollment conversions went up 180%. Parther understood EdTech — not just technology.",
    initials: "PM",
    color: "bg-emerald-600",
  },
  {
    name: "Suresh Logistics",
    title: "Operations Head",
    company: "FastMove Freight",
    location: "Howrah, West Bengal",
    quote:
      "Real-time fleet visibility was a dream before Parther built our dispatch platform. Our fuel savings covered the development cost in 6 months. Genuinely impressive execution.",
    initials: "SL",
    color: "bg-violet-600",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 bg-cf-bg text-cf-text py-28 border-t border-cf-border">
      <div className="container-main">
        <div className="mb-16 flex flex-col gap-4 items-center text-center">
          <span className="block text-sm font-semibold tracking-widest text-blue-500 uppercase">
            Client Voice
          </span>
          <h2 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-cf-text-secondary text-xl max-w-xl">
            Don't take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-cf-card border border-cf-border clip-corner p-8 flex flex-col gap-6 hover:border-blue-400 hover:shadow-[0_4px_30px_rgba(59,130,246,0.1)] transition-colors duration-200"
            >
              {/* Quote mark */}
              <div className="text-5xl font-serif text-blue-200 leading-none select-none">"</div>

              <blockquote className="text-cf-text leading-relaxed flex-1 text-base">
                {t.quote}
              </blockquote>

              <figcaption className="flex items-center gap-4 border-t border-cf-border pt-5">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-white text-sm font-syncopate shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold font-syncopate text-sm tracking-tight">{t.name}</div>
                  <div className="text-xs text-cf-text-secondary">{t.title}, {t.company}</div>
                  <div className="text-xs text-cf-text-tertiary">{t.location}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
