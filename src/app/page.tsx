import { Metadata } from "next";
import { HeroSection } from "@/components/hero";
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

      {/* 2. Business Outcomes */}
      <BusinessOutcomes />

      {/* 3. Industries */}
      <IndustriesSection />

      {/* 4. Why Parther */}
      <WhyPartherSection />

      {/* 5. Case Studies */}
      <CaseStudiesSection />

      {/* 6. Development Process */}
      <ProcessSection />

      {/* 7. Tech Stack */}
      <TechStackSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. Final CTA */}
      <FinalCTASection />

    </main>
  );
}
