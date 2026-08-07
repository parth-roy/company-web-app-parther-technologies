import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Parther Technologies | Strategic Digital Transformation',
  description: 'Driving the digital economy of Eastern India. We engineer enterprise software and AI solutions for the Bengal Silicon Valley ecosystem.',
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.parthertech.com/#organization",
        "name": "Parther Technologies Pvt Ltd",
        "url": "https://www.parthertech.com",
        "logo": "https://www.parthertech.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-94323-50334",
          "contactType": "customer service"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.parthertech.com/#founder",
        "name": "Founder Name",
        "jobTitle": "Founder & CEO",
        "worksFor": {
          "@id": "https://www.parthertech.com/#organization"
        },
        "url": "https://www.parthertech.com/about"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-primary-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#f4f4f0] border-b border-cf-border">
        <div className="container-main text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-white text-xs font-mono-caps font-semibold text-cf-text-secondary tracking-widest uppercase">
            About The Company
          </span>
          <h1 className="font-serif-display text-5xl md:text-6xl leading-[1.1] text-cf-text mb-6">
            Engineering the Future of Eastern India's IT Sector
          </h1>
          <p className="text-lg text-cf-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
            The digital economy of Eastern India is navigating a period of unprecedented acceleration. At Parther Technologies, we are transitioning from a foundational service provider into a dominant regional business growth platform.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-cf-text hover:bg-cf-text/90 rounded-full transition-all"
          >
            Get Technical Assessment
          </Link>
        </div>
      </section>

      {/* 2. The Macroeconomic Opportunity */}
      <section className="py-24 bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif-display text-4xl text-cf-text mb-4">The Bengal Silicon Valley Transformation</h2>
            <p className="text-lg text-cf-text-secondary">
              We are strategically positioned at the epicenter of Kolkata's technological renaissance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-cf-border bg-cf-card rounded-xl hover:shadow-md transition-shadow">
              <div className="text-4xl font-serif-display text-cf-text mb-4">₹1 Trillion</div>
              <h3 className="font-bold text-cf-text mb-2">Infrastructure Investment</h3>
              <p className="text-cf-text-secondary text-sm">
                The Bengal Silicon Valley Tech Hub represents a massive concentration of hyperscale data centers, telecommunications, and enterprise-grade software services.
              </p>
            </div>
            <div className="p-8 border border-cf-border bg-cf-card rounded-xl hover:shadow-md transition-shadow">
              <div className="text-4xl font-serif-display text-cf-text mb-4">100,000+</div>
              <h3 className="font-bold text-cf-text mb-2">Direct Technology Jobs</h3>
              <p className="text-cf-text-secondary text-sm">
                We are tapping into an elevated regional talent pool produced by premier institutions like IIT Kharagpur and ISI to deliver premium SaaS solutions.
              </p>
            </div>
            <div className="p-8 border border-cf-border bg-cf-card rounded-xl hover:shadow-md transition-shadow">
              <div className="text-4xl font-serif-display text-cf-text mb-4">31</div>
              <h3 className="font-bold text-cf-text mb-2">Modules in Production</h3>
              <p className="text-cf-text-secondary text-sm">
                Our flagship GoMyTruck platform runs 31 backend modules, 3 dedicated Flutter apps, and automated government compliance across ULIP SARATHI &amp; VAHAN APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Proof of Work — GoMyTruck */}
      <section className="py-24 bg-[#f4f4f0] border-t border-cf-border">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase font-mono-caps mb-3">Proof of Work</span>
            <h2 className="font-serif-display text-4xl text-cf-text mb-4">Deployed. Not Promised.</h2>
            <p className="text-lg text-cf-text-secondary">
              Our case studies are based on verified source code, not marketing copy.
            </p>
          </div>

          {/* GoMyTruck Card */}
          <div className="bg-[#0a0f1a] rounded-2xl overflow-hidden border border-cf-border/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    <span className="text-xs font-bold tracking-widest text-blue-400 uppercase border border-blue-500/40 bg-blue-500/10 px-3 py-1 rounded-full">
                      Flagship Project
                    </span>
                    <span className="text-xs text-white/40">Logistics &amp; Freight — Kolkata</span>
                  </div>
                  <h3 className="font-syncopate font-bold text-2xl md:text-3xl text-white tracking-tight mb-5 leading-snug">
                    GoMyTruck — Full-Stack Digital Freight Marketplace
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    A dual-mode booking engine, four-wallet payment system, automated RazorpayX payouts, ULIP government compliance, and three dedicated Flutter apps. Built to disrupt West Bengal&apos;s cartelized trucking sector.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Node.js', 'TypeScript', 'Flutter', 'PostgreSQL', 'Socket.io', 'RazorpayX', 'AWS S3', 'Firebase'].map((tech) => (
                      <span key={tech} className="bg-blue-950 border border-blue-700/50 text-blue-300 rounded-full px-3 py-1 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/case-studies/gomytruck"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0f1a] font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    Read Full Case Study →
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                  >
                    Start a Similar Project
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 border-t md:border-t-0 md:border-l border-white/10">
                <div className="p-8 border-r md:border-r-0 md:border-b border-white/10 flex flex-col justify-center">
                  <div className="text-4xl font-syncopate font-bold text-white mb-1">500+</div>
                  <div className="text-white/50 text-sm">Verified Drivers Onboarded</div>
                </div>
                <div className="p-8 border-r md:border-r-0 md:border-b border-white/10 flex flex-col justify-center">
                  <div className="text-4xl font-syncopate font-bold text-white mb-1">2 Min</div>
                  <div className="text-white/50 text-sm">Avg. Booking Time</div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-4xl font-syncopate font-bold text-white mb-1">31</div>
                  <div className="text-white/50 text-sm">Backend API Modules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Differentiation & Core Web Vitals */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="container-main max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-4xl mb-6">Performance Engineering & Generative Engine Optimization</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              A premium visual design is instantly negated by poor technical performance. Google's Core Web Vitals are no longer merely technical benchmarks; they are critical business metrics.
            </p>
          </div>
            
          <ul className="space-y-6">
            <li className="flex gap-6 items-start bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="w-16 h-16 shrink-0 bg-white/10 rounded-lg flex items-center justify-center font-mono font-bold text-xl">2.5s</div>
              <div>
                <h4 className="font-bold text-xl mb-2">Strict LCP Thresholds</h4>
                <p className="text-gray-400 text-base leading-relaxed">We guarantee a Largest Contentful Paint under 2.5 seconds. First-party data indicates dropping LCP from 2.5 to 1.1 seconds generates a 50% conversion lift.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="w-16 h-16 shrink-0 bg-white/10 rounded-lg flex items-center justify-center font-mono font-bold text-xl">GEO</div>
              <div>
                <h4 className="font-bold text-xl mb-2">AI-Driven Discoverability</h4>
                <p className="text-gray-400 text-base leading-relaxed">We structure your enterprise data using precise JSON-LD schemas so AI assistants (ChatGPT, Google AI Overviews) cite you as the definitive regional authority.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="w-16 h-16 shrink-0 bg-white/10 rounded-lg flex items-center justify-center font-mono font-bold text-xl">CRO</div>
              <div>
                <h4 className="font-bold text-xl mb-2">Conversion Rate Mathematics</h4>
                <p className="text-gray-400 text-base leading-relaxed">We deploy progressive profiling. By dropping from 7+ fields to focused 3-field data capture, we prevent the severe 67.8% abandonment rate standard in B2B forms.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Competitor Intelligence Matrix */}
      <section className="py-24 bg-white">
        <div className="container-main max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-4xl text-cf-text mb-4">Our Market Position</h2>
            <p className="text-lg text-cf-text-secondary">
              We operate in the crucial gap between volume-based local agencies and massive global systems integrators.
            </p>
          </div>

          <div className="overflow-x-auto bg-cf-card border border-cf-border rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f4f4f0]">
                  <th className="p-6 border-b border-cf-border font-bold text-cf-text text-lg">Segment</th>
                  <th className="p-6 border-b border-cf-border font-bold text-cf-text text-lg">Typical Entities</th>
                  <th className="p-6 border-b border-cf-border font-bold text-cf-text text-lg">The Parther Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-6 border-b border-cf-border text-cf-text font-semibold align-top">Tier A: Local Leaders</td>
                  <td className="p-6 border-b border-cf-border text-cf-text-secondary align-top">Webgen, Capital Numbers</td>
                  <td className="p-6 border-b border-cf-border text-cf-text-secondary align-top leading-relaxed">We transition from a purely technical messaging framework to a highly consultative, business-first proposition ("We automate logistics").</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-cf-border text-cf-text font-semibold align-top">Tier B/C: Premium Agencies</td>
                  <td className="p-6 border-b border-cf-border text-cf-text-secondary align-top">Unified Infotech</td>
                  <td className="p-6 border-b border-cf-border text-cf-text-secondary align-top leading-relaxed">We optimize specifically for AI search visibility (GEO) and deploy empirical, data-backed conversion rate architectures.</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-cf-border text-cf-text font-semibold align-top">Tier D: Global Integrators</td>
                  <td className="p-6 border-b border-cf-border text-cf-text-secondary align-top">TCS, Wipro, IBM</td>
                  <td className="p-6 border-b border-cf-border text-cf-text-secondary align-top leading-relaxed">We bring Tier-D levels of security and scalability to the middle-market enterprise tier without the immense bureaucratic overhead.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>
  );
}
