import { HeroSection } from "@/components/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">

      <HeroSection />

      {/* Service Silos / progressive disclosure */}
      <section id="services" className="relative z-10 py-section bg-cf-card border-t border-cf-border shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container-main">
          <div className="max-w-2xl mb-16">
            <h2 className={"/* font-serif-display */ font-syncopate uppercase tracking-widest font-bold text-h2 mb-4"}>Architectural Foundations for Growth</h2>
            <p className="text-cf-text-secondary text-body">
              We don't just write code. We eliminate operational bottlenecks through purpose-built technology stacks. Choose your path below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-cf-border rounded-xl hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-cf-bg rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className={"/* font-serif-display */ font-syncopate uppercase tracking-wide font-bold text-h3 mb-3"}>Custom SaaS & ERP</h3>
              <p className="text-cf-text-secondary text-sm mb-6">
                Replace fragmented spreadsheets with unified, secure, cloud-native operational software tailored to your specific logistics or manufacturing workflows.
              </p>
              <a href="#" className="text-sm font-semibold hover:underline">Explore ERP Solutions &rarr;</a>
            </div>

            <div className="p-8 border border-cf-border rounded-xl hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-cf-bg rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className={"/* font-serif-display */ font-syncopate uppercase tracking-wide font-bold text-h3 mb-3"}>Generative Engine Optimization</h3>
              <p className="text-cf-text-secondary text-sm mb-6">
                Dominate AI search results. We structure your digital assets using JSON-LD schema so ChatGPT, Claude, and Google AI Overviews cite you first.
              </p>
              <a href="#" className="text-sm font-semibold hover:underline">View AI Search Strategy &rarr;</a>
            </div>

            <div className="p-8 border border-cf-border rounded-xl hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-cf-bg rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              <h3 className={"/* font-serif-display */ font-syncopate uppercase tracking-wide font-bold text-h3 mb-3"}>Enterprise Digital Hubs</h3>
              <p className="text-cf-text-secondary text-sm mb-6">
                High-performance, Next.js architecture boasting sub-2.5s LCP. Turn your website into a highly localized lead generation machine.
              </p>
              <a href="#" className="text-sm font-semibold hover:underline">Analyze Web Vitals &rarr;</a>
            </div>
          </div>
        </div>
      </section>
      

    </main>
  );
}
