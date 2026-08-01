import MultiStepForm from "@/components/MultiStepForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation (Simplified) */}
      <nav className="w-full border-b border-cf-border bg-cf-bg/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container-main py-4 flex items-center justify-between">
          <div className="font-serif-display text-h4 font-bold text-cf-text">
            <Link href="/">Parther Technologies</Link>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-cf-text-secondary">
            <Link href="/services" className="hover:text-cf-text transition-colors">Services</Link>
            <Link href="/industries" className="hover:text-cf-text transition-colors">Industries</Link>
            <Link href="#locations" className="hover:text-cf-text transition-colors">Locations</Link>
          </div>
          <Button variant="default" className="hidden md:flex">
            Get Technical Assessment
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 pixel-bg-hero">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 relative">
            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-cf-card text-xs font-mono-caps font-semibold text-cf-text-secondary hero-stagger" style={{ "--stagger": 0 } as React.CSSProperties}>
              Enterprise Digital Growth
            </div>
            <h1 className="font-serif-display text-h1 md:text-display leading-[1.1] mb-6 text-cf-text hero-stagger" style={{ "--stagger": 1 } as React.CSSProperties}>
              Automate your business. <br className="hidden md:block"/>
              Dominate your market.
            </h1>
            <p className="text-body md:text-h4 text-cf-text-secondary max-w-xl mb-10 hero-stagger" style={{ "--stagger": 2 } as React.CSSProperties}>
              We architect custom enterprise software and deploy Generative Engine Optimization (GEO) strategies designed specifically for industrial, healthcare, and SaaS companies in Eastern India.
            </p>
            
            {/* Trust Signals injected directly into Hero */}
            <div className="flex flex-col gap-3 hero-stagger" style={{ "--stagger": 3 } as React.CSSProperties}>
              <p className="text-xs font-mono-caps text-cf-text-tertiary">Trusted by regional leaders</p>
              <div className="flex gap-6 opacity-60 grayscale mix-blend-multiply items-center">
                {/* Placeholder logos */}
                <div className="h-8 w-24 bg-cf-border/50 rounded flex items-center justify-center text-xs font-bold font-mono">ITC</div>
                <div className="h-8 w-24 bg-cf-border/50 rounded flex items-center justify-center text-xs font-bold font-mono">Apollo</div>
                <div className="h-8 w-24 bg-cf-border/50 rounded flex items-center justify-center text-xs font-bold font-mono">Shyam</div>
              </div>
            </div>
          </div>

          {/* Progressive Profiling Form replacing generic contact buttons */}
          <div className="z-10 relative hero-stagger animate-float-slow" style={{ "--stagger": 2 } as React.CSSProperties}>
            <MultiStepForm />
          </div>
        </div>

        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cf-border-light to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 opacity-70"></div>
      </section>

      {/* Service Silos / progressive disclosure */}
      <section id="services" className="py-section bg-cf-card border-t border-cf-border">
        <div className="container-main">
          <div className="max-w-2xl mb-16">
            <h2 className="font-serif-display text-h2 mb-4">Architectural Foundations for Growth</h2>
            <p className="text-cf-text-secondary text-body">
              We don't just write code. We eliminate operational bottlenecks through purpose-built technology stacks. Choose your path below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-cf-border rounded-xl hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-cf-bg rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="font-serif-display text-h3 mb-3">Custom SaaS & ERP</h3>
              <p className="text-cf-text-secondary text-sm mb-6">
                Replace fragmented spreadsheets with unified, secure, cloud-native operational software tailored to your specific logistics or manufacturing workflows.
              </p>
              <a href="#" className="text-sm font-semibold hover:underline">Explore ERP Solutions &rarr;</a>
            </div>

            <div className="p-8 border border-cf-border rounded-xl hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-cf-bg rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="font-serif-display text-h3 mb-3">Generative Engine Optimization</h3>
              <p className="text-cf-text-secondary text-sm mb-6">
                Dominate AI search results. We structure your digital assets using JSON-LD schema so ChatGPT, Claude, and Google AI Overviews cite you first.
              </p>
              <a href="#" className="text-sm font-semibold hover:underline">View AI Search Strategy &rarr;</a>
            </div>

            <div className="p-8 border border-cf-border rounded-xl hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-cf-bg rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              <h3 className="font-serif-display text-h3 mb-3">Enterprise Digital Hubs</h3>
              <p className="text-cf-text-secondary text-sm mb-6">
                High-performance, Next.js architecture boasting sub-2.5s LCP. Turn your website into a highly localized lead generation machine.
              </p>
              <a href="#" className="text-sm font-semibold hover:underline">Analyze Web Vitals &rarr;</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer / Internal SEO Links */}
      <footer id="locations" className="py-12 bg-cf-bg border-t border-cf-border">
        <div className="container-main">
          <h3 className="font-serif-display text-h4 mb-6">Regional Knowledge Hubs</h3>
          <p className="text-sm text-cf-text-secondary mb-6 max-w-2xl">
            Explore our specialized architectural solutions tailored for the specific industrial corridors of West Bengal.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/locations/howrah" className="text-sm text-cf-text hover:text-primary underline decoration-cf-border underline-offset-4">Howrah Operations</Link>
            <Link href="/locations/kolkata" className="text-sm text-cf-text hover:text-primary underline decoration-cf-border underline-offset-4">Kolkata Headquarters</Link>
            <Link href="/locations/salt-lake" className="text-sm text-cf-text hover:text-primary underline decoration-cf-border underline-offset-4">Salt Lake / Sector V</Link>
            <Link href="/locations/dankuni" className="text-sm text-cf-text hover:text-primary underline decoration-cf-border underline-offset-4">Dankuni Logistics</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
