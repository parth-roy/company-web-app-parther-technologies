const techStack = [
  { category: "Frontend", icon: "🖥️", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", icon: "⚙️", items: ["Node.js", "Python", "FastAPI", "Express", "GraphQL"] },
  { category: "Cloud", icon: "☁️", items: ["AWS", "Google Cloud", "Vercel", "Cloudflare", "Docker"] },
  { category: "AI & Automation", icon: "🤖", items: ["OpenAI API", "LangChain", "n8n", "Zapier", "Vertex AI"] },
  { category: "Databases", icon: "🗄️", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "PlanetScale"] },
  { category: "Mobile", icon: "📱", items: ["React Native", "Expo", "Flutter", "iOS", "Android"] },
  { category: "DevOps", icon: "🔁", items: ["GitHub Actions", "CI/CD", "Kubernetes", "Terraform", "Nginx"] },
];

export function TechStackSection() {
  return (
    <section id="technologies" className="relative z-10 bg-cf-card text-cf-text py-28 border-t border-cf-border">
      <div className="container-main">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="block text-sm font-semibold tracking-widest text-blue-500 uppercase">
            Our Toolkit
          </span>
          <h2 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight border-b-2 border-cf-text pb-4 self-start">
            Technologies
          </h2>
          <p className="text-cf-text-secondary text-xl max-w-2xl leading-relaxed">
            We don't just use the latest tools — we choose the right tool for the right job.
          </p>
        </div>

        {/* Grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="bg-cf-bg border border-cf-border clip-corner p-6 hover:border-blue-400 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-colors duration-200 group"
            >
              <div className="text-2xl mb-3">{group.icon}</div>
              <h3 className="font-syncopate font-bold text-xs tracking-widest uppercase mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-sm text-cf-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
