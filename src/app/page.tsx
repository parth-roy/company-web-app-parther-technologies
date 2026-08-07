import { Metadata } from "next";
import { HeroSection } from "@/components/hero";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { BusinessOutcomes } from "@/components/BusinessOutcomes";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyPartherSection } from "@/components/sections/WhyPartherSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

// ─── Homepage SEO ────────────────────────────────────────────────────────────
// Target: broad enterprise intent, NOT city-specific queries.
// City queries are handled by /locations/[city] to avoid cannibalization.
export const metadata: Metadata = {
  title: "Enterprise Software Architecture & Digital Transformation | Parther Technologies",
  description:
    "Parther Technologies architects scalable digital infrastructure — custom SaaS, ERP systems, Agentic Workflows, and Generative Engine Optimization (GEO) for enterprises across Eastern India.",
  alternates: {
    canonical: "https://parthertech.com",
  },
  keywords: [
    "software development company",
    "enterprise software development company",
    "top software development companies",
    "best software development companies",
    "software dev agency",
    "custom software development West Bengal",
    "SaaS platform development India",
    "Generative Engine Optimization GEO",
    "agentic workflow automation",
    "digital transformation West Bengal",
    "Parther Technologies"
  ],
  openGraph: {
    title: "Parther Technologies | Enterprise Software Architecture",
    description: "We architect scalable digital infrastructure for enterprises in Eastern India.",
    url: "https://parthertech.com",
    siteName: "Parther Technologies",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Services Carousel */}
      <section id="services" className="relative z-10 bg-cf-card text-cf-text py-24 border-t border-cf-border shadow-2xl">
        <div className="container-main">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-syncopate font-bold text-4xl md:text-5xl mb-6 tracking-tight border-b-2 border-cf-text pb-4 inline-block">
              Architectural Foundations for Growth
            </h2>
            <p className="text-cf-text-secondary text-xl leading-relaxed">
              We don't just write code. We eliminate operational bottlenecks through purpose-built technology stacks.
            </p>
          </div>
          <ServicesCarousel />
        </div>
      </section>

      {/* 3. Business Outcomes */}
      <BusinessOutcomes />

      {/* 4. Industries */}
      <IndustriesSection />

      {/* 5. Why Parther */}
      <WhyPartherSection />

      {/* 6. Case Studies */}
      <CaseStudiesSection />

      {/* 7. Development Process */}
      <ProcessSection />

      {/* 8. Tech Stack */}
      <TechStackSection />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. Final CTA */}
      <FinalCTASection />

    </main>
  );
}
