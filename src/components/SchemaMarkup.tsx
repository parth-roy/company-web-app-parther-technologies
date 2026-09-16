import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  providerName?: string;
  areaServed?: string | string[];
  serviceType?: string;
}

interface SchemaMarkupProps {
  faqs?: FAQItem[];
  service?: ServiceSchemaProps;
  localBusiness?: {
    name: string;
    description: string;
    locality: string;
    postalCode: string;
    latitude?: string;
    longitude?: string;
  };
}

export default function SchemaMarkup({ faqs, service, localBusiness }: SchemaMarkupProps) {
  const schemas = [];

  // Service Schema
  if (service) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": service.providerName || "Parther Technologies",
        "@id": "https://parthertech.com/#organization"
      },
      "areaServed": service.areaServed || "IN",
      "serviceType": service.serviceType || "Software Development"
    });
  }

  // FAQ Schema
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  // LocalBusiness Schema Overrides ONLY for genuine physical delivery hubs
  if (localBusiness) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": localBusiness.name,
      "description": localBusiness.description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Salt Lake Sector V",
        "addressLocality": localBusiness.locality,
        "addressRegion": "West Bengal",
        "postalCode": localBusiness.postalCode || "700091",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": localBusiness.latitude || "22.5804",
        "longitude": localBusiness.longitude || "88.4378"
      }
    });
  }

  if (schemas.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) }}
    />
  );
}
