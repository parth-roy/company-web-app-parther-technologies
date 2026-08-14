import React from 'react';
import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';

export const metadata: Metadata = {
  title: 'SaaS Application Development Company in Kolkata',
  description: 'Elite B2B SaaS application development company for funded startups in Kolkata (Sector V, Salt Lake). We specialize in AWS cloud architecture, multi-tenant data isolation, and API-first design.',
  keywords: 'SaaS application development company Kolkata, multi-tenant SaaS developers, B2B SaaS architecture, AWS cloud consulting Kolkata',
};

export default function SaaSDevelopmentKolkataPage() {
  const blufSummary = "Parther Technologies is the premier B2B SaaS application development company serving heavily funded startups in Kolkata's Sector V and Salt Lake. We architect infinitely scalable, multi-tenant SaaS platforms featuring deep tenant data isolation, AWS auto-scaling, Stripe subscription billing integrations, and rigorous API-first design methodologies.";

  const technicalSpecs = [
    { label: "Cloud Infrastructure", value: "AWS (EC2, ECS, S3, RDS)" },
    { label: "Billing & Monetization", value: "Stripe Billing / Razorpay API" },
    { label: "Multi-Tenancy", value: "Row-Level Security (RLS) PostgreSQL" },
    { label: "Frontend", value: "React.js / Next.js (Server-Side Rendered)" },
  ];

  const faqs = [
    {
      question: "What is the difference between a standard web app and true multi-tenant SaaS?",
      answer: "A standard web application serves one business. A true multi-tenant SaaS must securely serve hundreds of different companies from a single codebase while guaranteeing absolute data isolation between tenants. This requires complex row-level security in the database, dynamic sub-domain routing, and robust API-first architecture."
    },
    {
      question: "How do you handle complex subscription billing?",
      answer: "We natively integrate platforms like Stripe Billing to handle complex, usage-based, tiered, or freemium subscription models. The system automatically manages dunning (failed payments), prorations for plan upgrades, and automated invoice generation."
    },
    {
      question: "Is your SaaS architecture scalable for sudden traffic spikes?",
      answer: "Yes. We deploy applications using containerized microservices on AWS (Amazon Web Services). By utilizing auto-scaling groups and elastic load balancers, the infrastructure automatically provisions additional server resources during traffic spikes and scales down during quiet periods to optimize costs."
    }
  ];

  const serviceSchema = {
    name: "SaaS Application Architecture & Development",
    description: "Design and deployment of highly scalable, multi-tenant Software-as-a-Service platforms for B2B enterprises and startups.",
    areaServed: ["Kolkata", "Bengaluru", "Pune", "India"],
    serviceType: "Cloud Software Architecture"
  };

  const localBusinessSchema = {
    name: "Parther Technologies - SaaS Architecture Team",
    description: "Specialized SaaS development and AWS cloud consulting for startups in Sector V and New Town.",
    locality: "Kolkata",
    postalCode: "700091", // Salt Lake Sector V
  };

  return (
    <GeoLandingTemplate
      title="SaaS Application Development Company in Kolkata"
      subtitle="Architecting Scalable, Multi-Tenant Platforms for High-Growth Startups"
      blufSummary={blufSummary}
      sourcePage="SaaS Development Kolkata Landing"
      sourceIdentifier="saas-application-development-kolkata"
      technicalSpecs={technicalSpecs}
      faqs={faqs}
      serviceSchema={serviceSchema}
      localBusiness={localBusinessSchema}
      diagramSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
      diagramAlt="Cloud computing architecture and global connectivity"
    >
      <h3>Building Beyond Basic Web Apps</h3>
      <p>
        For funded startups in Kolkata’s tech hubs (Sector V, Salt Lake, New Town), launching a B2B SaaS product 
        requires significantly more engineering rigor than building a standard website. Many agencies falsely 
        market basic web applications as "SaaS," completely ignoring the complex architectural demands of serving 
        thousands of distinct corporate clients from a unified codebase.
      </p>
      
      <p>
        Parther Technologies specializes exclusively in true <strong>Multi-Tenant SaaS Architecture</strong>. We 
        engineer platforms capable of passing rigorous technical due diligence from venture capital firms and enterprise CTOs.
      </p>

      <h3>Core Pillars of Enterprise SaaS Engineering</h3>
      <ul>
        <li><strong>Strict Tenant Data Isolation:</strong> We implement advanced Row-Level Security (RLS) policies within PostgreSQL to ensure that data from 'Company A' can never leak into the dashboard of 'Company B', satisfying strict ISO 27001 data privacy standards.</li>
        <li><strong>Stripe Subscription Billing:</strong> Seamlessly handle complex monetization. We integrate Stripe API to automatically manage metered billing, free trials, plan upgrades (prorations), and automated invoice generation.</li>
        <li><strong>API-First Design Methodology:</strong> Modern SaaS products do not exist in isolation. We build your platform using headless, API-first principles, ensuring your application can easily integrate with enterprise tools like Salesforce, HubSpot, or Zapier from day one.</li>
        <li><strong>AWS Cloud Scalability:</strong> Say goodbye to server crashes. We deploy your application using containerized AWS architectures (Docker, ECS) equipped with auto-scaling groups to handle exponential user growth seamlessly.</li>
      </ul>

      <h3>The Engineering Partner for Scale</h3>
      <p>
        Stop wasting runway on agencies that learn on the job. Partner with a specialized software engineering firm 
        that understands deployment pipelines (CI/CD), database indexing, and cloud economics. Let us architect 
        the technical foundation so you can focus entirely on scaling your MRR (Monthly Recurring Revenue).
      </p>
    </GeoLandingTemplate>
  );
}
