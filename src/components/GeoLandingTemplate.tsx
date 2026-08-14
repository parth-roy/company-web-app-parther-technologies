import React from 'react';
import MultiStepForm from '@/components/MultiStepForm';
import SchemaMarkup, { FAQItem, ServiceSchemaProps } from '@/components/SchemaMarkup';

interface GeoLandingTemplateProps {
  title: string;
  subtitle: string;
  blufSummary: string; // Bottom Line Up Front
  sourcePage: string;
  sourceIdentifier: string;
  faqs?: FAQItem[];
  serviceSchema?: ServiceSchemaProps;
  localBusiness?: {
    name: string;
    description: string;
    locality: string;
    postalCode: string;
  };
  technicalSpecs?: { label: string; value: string }[];
  diagramSrc?: string;
  diagramAlt?: string;
  children: React.ReactNode;
}

export default function GeoLandingTemplate({
  title,
  subtitle,
  blufSummary,
  sourcePage,
  sourceIdentifier,
  faqs,
  serviceSchema,
  localBusiness,
  technicalSpecs,
  diagramSrc,
  diagramAlt,
  children
}: GeoLandingTemplateProps) {
  return (
    <>
      <SchemaMarkup faqs={faqs} service={serviceSchema} localBusiness={localBusiness} />
      
      {/* Hero Section with BLUF (Bottom Line Up Front) */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif-display text-h2 md:text-h1 text-cf-text leading-tight">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl text-cf-text-secondary font-medium">
              {subtitle}
            </h2>
          </div>
          
          {/* BLUF Summary - AI Citation Target */}
          <div className="bg-cf-card border border-cf-border p-6 rounded-xl shadow-sm">
            <p className="text-lg text-cf-text-secondary leading-relaxed font-medium">
              <strong className="text-cf-text">Executive Summary: </strong>
              {blufSummary}
            </p>
          </div>

          {/* Technical Specs Array */}
          {technicalSpecs && technicalSpecs.length > 0 && (
            <div className="pt-4 border-t border-cf-border/40">
              <h3 className="text-sm font-mono-caps text-cf-text-tertiary mb-4">Core Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {technicalSpecs.map((spec, i) => (
                  <div key={i}>
                    <dt className="text-xs text-cf-text-tertiary">{spec.label}</dt>
                    <dd className="text-sm font-medium text-cf-text">{spec.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lead Capture Form */}
        <div className="sticky top-24">
          <MultiStepForm sourcePage={sourcePage} sourceIdentifier={sourceIdentifier} />
        </div>
      </section>

      {/* Main Content & Architecture */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 prose prose-lg prose-invert max-w-none text-cf-text-secondary">
            {children}
            
            {/* Architecture Diagram */}
            {diagramSrc && (
              <figure className="my-12">
                {/* Fallback styling for missing diagrams, typically you'd use next/image */}
                <div className="rounded-xl overflow-hidden border border-cf-border bg-cf-card p-2 shadow-lg">
                  <img src={diagramSrc} alt={diagramAlt || "System Architecture Diagram"} className="w-full h-auto rounded-lg" />
                </div>
                {diagramAlt && <figcaption className="text-center text-sm mt-4 text-cf-text-tertiary">{diagramAlt}</figcaption>}
              </figure>
            )}
          </div>
        </div>
      </section>

      {/* FAQs for Schema & AI Ingestion */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 px-4 md:px-8 bg-cf-card border-t border-cf-border/40">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-serif-display text-h3 text-cf-text text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-lg font-semibold text-cf-text">{faq.question}</h3>
                  <p className="text-cf-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
