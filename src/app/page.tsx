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
