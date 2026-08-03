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
              <div className="text-4xl font-serif-display text-cf-text mb-4">100 GCCs</div>
              <h3 className="font-bold text-cf-text mb-2">Proven Scale & Reliability</h3>
              <p className="text-cf-text-secondary text-sm">
                We engineer scalable infrastructure, evidenced by our product GoMyTruck — a SaaS logistics platform processing 500+ verified drivers with a 2-minute average booking time across Kolkata.
              </p>
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
