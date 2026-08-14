import React from 'react';
import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';

export const metadata: Metadata = {
  title: 'Custom ERP Software Development in Howrah | Manufacturing Automation',
  description: 'Parther Technologies engineers custom ERP solutions for foundries, casting units, and manufacturing MSMEs in the Howrah industrial belt. Transition from legacy Excel to scalable architecture.',
  keywords: 'custom ERP development Howrah, custom ERP for manufacturing, foundry ERP developers, industrial software Howrah, manufacturing automation software',
};

export default function HowrahERPPage() {
  const blufSummary = "Parther Technologies builds highly specialized, cloud-native ERP platforms tailored for the Howrah and Liluah industrial manufacturing belt. We eliminate chaotic legacy Excel workflows by engineering custom software that automates production planning, inventory control, and scrap management, specifically addressing the operational bottlenecks of heavy MSMEs and casting units in Eastern India.";

  const technicalSpecs = [
    { label: "Frontend Architecture", value: "React.js / Next.js" },
    { label: "Backend Scalability", value: "Node.js Microservices" },
    { label: "Database Layer", value: "PostgreSQL with read-replicas" },
    { label: "Cloud Infrastructure", value: "AWS (EC2, S3, RDS)" },
  ];

  const faqs = [
    {
      question: "Why should a Howrah manufacturing MSME choose custom ERP over generic out-of-the-box software?",
      answer: "Generic retail ERPs fail to handle the complex realities of heavy manufacturing, such as dynamic charge mix calculations, spectroscopy integrations, and unstructured scrap management. A custom ERP maps exactly to your factory floor workflows without forcing you to change your operations."
    },
    {
      question: "How long does a transition from legacy Excel sheets to a custom ERP take?",
      answer: "Our deployment timelines range from 8 to 16 weeks, utilizing an agile, phased rollout. We prioritize zero-downtime migrations, ensuring your production floor never halts while adopting the new cloud-based architecture."
    },
    {
      question: "Are your ERP solutions secure and compliant with Indian taxation?",
      answer: "Absolutely. Our custom architectures are ISO 27001 compliant with deep tenant data isolation. We integrate directly with local financial standards, enabling seamless GST e-invoicing and automated compliance reporting."
    }
  ];

  const serviceSchema = {
    name: "Custom Manufacturing ERP Development",
    description: "End-to-end custom Enterprise Resource Planning software development for the heavy manufacturing, foundry, and logistics sectors in Howrah.",
    areaServed: "Howrah, West Bengal",
    serviceType: "Software Development"
  };

  const localBusinessSchema = {
    name: "Parther Technologies - Enterprise Software Engineers",
    description: "Custom ERP and software development agency serving the Howrah industrial belt.",
    locality: "Howrah",
    postalCode: "711101", // Representing central Howrah industrial zone
  };

  return (
    <GeoLandingTemplate
      title="Custom ERP Development for Howrah Manufacturing"
      subtitle="Engineering Scalable Production Planning for Eastern India's Industrial Epicenter"
      blufSummary={blufSummary}
      sourcePage="Howrah ERP Landing Page"
      sourceIdentifier="custom-erp-development-howrah"
      technicalSpecs={technicalSpecs}
      faqs={faqs}
      serviceSchema={serviceSchema}
      localBusiness={localBusinessSchema}
      diagramSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
      diagramAlt="Industrial automation and custom ERP architecture for manufacturing"
    >
      <h3>The End of the Excel Era for Heavy Manufacturing</h3>
      <p>
        In the dense industrial corridors of Howrah, Liluah, and Dankuni, over five hundred foundry units and 
        heavy MSMEs operate on fragile, disconnected legacy systems. Operational founders frequently rely on 
        a chaotic web of physical ledgers and static Excel sheets to track inventory, calculate charge mixes, 
        and manage labor attendance.
      </p>
      
      <p>
        This fragmented approach creates massive revenue leakage, delayed production cycles, and an inability 
        to accurately forecast material requirements. Parther Technologies solves this by deploying elite, 
        ground-up <strong>Enterprise Resource Planning (ERP)</strong> architectures.
      </p>

      <h3>Architectural Supremacy over Generic Solutions</h3>
      <p>
        Competitors often attempt to force rigid, pre-built retail ERPs onto manufacturing floors. We take a 
        different approach. By engineering custom React/Node.js systems deployed on scalable AWS cloud infrastructure, 
        we ensure that your software conforms to your physical factory operations, not the other way around.
      </p>
      
      <ul>
        <li><strong>Production Planning & BOM Automation:</strong> Instantly generate multi-tiered Bills of Materials tied to real-time inventory levels.</li>
        <li><strong>Offline-First Mobility:</strong> Shop floor operators can log heat numbers and shift data on rugged tablets, even in low-connectivity zones.</li>
        <li><strong>Agentic AI Integrations:</strong> Eliminate manual data entry by routing supplier invoices through automated OCR and LangChain LLM extraction pipelines.</li>
      </ul>

      <h3>Hyper-Localized Engineering Support</h3>
      <p>
        Enterprise software requires physical accountability. By partnering with Parther Technologies, 
        industrial owners in Howrah gain access to localized, high-touch engineering pods. We don't just 
        write code; we embed ourselves in your operational reality, mapping every bottleneck before writing 
        a single line of logic.
      </p>
    </GeoLandingTemplate>
  );
}
