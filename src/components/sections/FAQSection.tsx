"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What makes Parther different from a regular web development agency?",
    a: "We build technology that delivers business outcomes — not just websites. Every project starts with understanding your workflows, revenue model, and growth targets. We architect systems that scale with you, and we stay involved post-launch through a long-term technology partnership.",
  },
  {
    q: "How long does a typical project take?",
    a: "A professional business website takes 3–6 weeks. A custom SaaS or ERP platform typically takes 3–5 months depending on scope. We share a detailed project timeline during the discovery phase — no surprises.",
  },
  {
    q: "Do you work with businesses outside West Bengal or India?",
    a: "Yes. While our primary focus is Eastern India — including Kolkata, Durgapur, Asansol, and Siliguri — we work with clients across India and internationally. Our team operates remotely and collaborates across time zones.",
  },
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO is the practice of structuring your content and digital assets so that AI systems like ChatGPT, Google AI Overviews, and Perplexity cite your brand as an authoritative source. It complements traditional SEO by targeting AI-generated answers, not just search rankings.",
  },
  {
    q: "Can you integrate with our existing software (Tally, Zoho, SAP, etc.)?",
    a: "Yes. We have experience integrating with Tally ERP, Zoho CRM, SAP modules, Salesforce, and most REST API-compatible platforms. We assess integration feasibility during the discovery call at no cost.",
  },
  {
    q: "What happens after the project launches?",
    a: "We offer ongoing support and optimisation retainers. This includes performance monitoring, bug fixes, security updates, feature additions, and quarterly business reviews to ensure your platform keeps delivering ROI.",
  },
  {
    q: "Do you provide a fixed-price quote or work on hourly billing?",
    a: "Both options are available. For well-defined projects, we offer a fixed-scope fixed-price quote. For evolving products or long-term partnerships, we offer monthly retainer engagements. We discuss both options during your free discovery call.",
  },
  {
    q: "How do I get started?",
    a: "Click 'Start a Project' in the navigation. You'll be taken to our discovery form. We review submissions within 1 business day and schedule a free 30-minute strategy call to assess fit and scope.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 bg-cf-card text-cf-text py-28 border-t border-cf-border">
      <div className="container-main">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="block text-sm font-semibold tracking-widest text-blue-500 uppercase">
            FAQs
          </span>
          <h2 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight border-b-2 border-cf-text pb-4 self-start">
            Frequently Asked Questions
          </h2>
          <p className="text-cf-text-secondary text-xl max-w-2xl leading-relaxed">
            Clear answers. No jargon. Everything you need to make a confident decision.
          </p>
        </div>

        {/* Accordion — max-w for readability, centered */}
        <div className="max-w-3xl w-full space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border clip-corner transition-colors duration-200 ${
                  isOpen ? "border-blue-400 bg-blue-50/40" : "border-cf-border bg-cf-bg"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between p-6 text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-syncopate font-bold text-sm tracking-tight leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 border-2 flex items-center justify-center font-bold text-lg leading-none transition-all duration-200 mt-0.5 ${
                      isOpen ? "border-blue-500 text-blue-500 rotate-45" : "border-cf-border text-cf-text-secondary"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-cf-text-secondary leading-relaxed text-base border-t border-cf-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
