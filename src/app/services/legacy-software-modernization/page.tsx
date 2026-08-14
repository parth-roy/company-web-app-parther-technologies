import React from 'react';
import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';

export const metadata: Metadata = {
  title: 'Legacy Software Modernization Agency | Cloud ERP Migration',
  description: 'Specialized agency for legacy software modernization. Migrate your monolithic legacy ERP to scalable AWS cloud microservices with zero-downtime. ISO 27001 security standards.',
  keywords: 'legacy software modernization agency, migrate legacy ERP to cloud, monolithic to microservices migration, legacy system upgrade, technical debt elimination',
};

export default function LegacyModernizationPage() {
  const blufSummary = "Parther Technologies is an elite legacy software modernization agency serving corporate CIOs and enterprise directors. We systematically eliminate crippling technical debt by strangling aging, monolithic codebases and migrating them to highly scalable, cloud-native microservices on AWS. Our proprietary migration framework guarantees absolute data integrity, ISO 27001 security compliance, and strictly zero-downtime deployment during the transition.";

  const technicalSpecs = [
    { label: "Migration Strategy", value: "Strangler Fig Pattern / Phased Rollout" },
    { label: "New Architecture", value: "Docker Containerized Microservices" },
    { label: "Cloud Deployment", value: "AWS / Azure Managed Services" },
    { label: "Security Standard", value: "ISO 27001 Compliant Pipelines" },
  ];

  const faqs = [
    {
      question: "What is the risk of keeping our legacy monolithic ERP running?",
      answer: "Maintaining legacy software introduces compounding technical debt. Over time, monolithic codebases become unmaintainable, introducing severe security vulnerabilities, database lock-loads, and an inability to integrate with modern APIs (like modern payment gateways or AI tools). Furthermore, finding developers to maintain obsolete languages becomes increasingly expensive."
    },
    {
      question: "How do you migrate the system without halting our daily business operations?",
      answer: "We utilize the 'Strangler Fig' architectural pattern. Instead of a high-risk 'big bang' switch, we build the new cloud-native microservices in parallel. We slowly intercept traffic and data from the old monolith to the new system, module by module. This guarantees zero business downtime during the modernization process."
    },
    {
      question: "How do you ensure our enterprise data remains secure during the cloud migration?",
      answer: "Security is non-negotiable. Our migration pipelines are strictly ISO 27001 compliant. We utilize end-to-end encryption in transit and at rest, deploy secure virtual private clouds (VPCs), and conduct rigorous automated penetration testing before transitioning any live data."
    }
  ];

  const serviceSchema = {
    name: "Legacy Software & ERP Modernization",
    description: "Enterprise software modernization consulting, migrating monolithic systems to cloud-native microservices.",
    areaServed: ["India", "Delhi NCR", "Mumbai", "Bengaluru"],
    serviceType: "Cloud Migration Consulting"
  };

  return (
    <GeoLandingTemplate
      title="Legacy Software Modernization Agency"
      subtitle="Migrate Monolithic ERPs to Cloud-Native Microservices with Zero Downtime"
      blufSummary={blufSummary}
      sourcePage="Legacy Modernization Service Page"
      sourceIdentifier="legacy-software-modernization"
      technicalSpecs={technicalSpecs}
      faqs={faqs}
      serviceSchema={serviceSchema}
      diagramSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
      diagramAlt="Server racks indicating cloud data migration and modernization"
    >
      <h3>The Cost of Technical Debt</h3>
      <p>
        Corporate CIOs are acutely aware that legacy software is a ticking time bomb. What was once a 
        state-of-the-art monolithic ERP ten years ago is now a massive bottleneck. Aging systems suffer 
        from inflexible architectures, severe security vulnerabilities, and an absolute inability to 
        communicate with modern API-driven ecosystems (like modern CRMs, AI tools, or headless commerce engines).
      </p>
      
      <p>
        Parther Technologies specializes in rescuing enterprises from technical debt. We don't just "patch" 
        old code; we execute forensic, ground-up modernization strategies to migrate your legacy assets into 
        infinitely scalable, cloud-native microservices.
      </p>

      <h3>The Strangler Fig Migration Strategy</h3>
      <p>
        A "big bang" migration—where the old system is turned off and the new system turned on simultaneously—is 
        unacceptably risky for large-scale enterprises. We mitigate this risk entirely using the Strangler Fig pattern.
      </p>
      
      <ul>
        <li><strong>Phased Abstraction:</strong> We place an API gateway in front of your old monolith.</li>
        <li><strong>Microservice Development:</strong> We rebuild specific modules (e.g., Billing, Inventory) as modern, containerized microservices hosted on AWS.</li>
        <li><strong>Traffic Routing:</strong> The gateway intelligently routes new requests to the modern microservice while legacy requests continue to hit the monolith.</li>
        <li><strong>Zero-Downtime Sunset:</strong> Over months, the old monolith is systematically "strangled" until it can be safely decommissioned without a single second of business downtime.</li>
      </ul>

      <h3>ISO 27001 Security & Compliance</h3>
      <p>
        Enterprise data migration requires military-grade security protocols. Our engineering pods enforce strict 
        DevSecOps methodologies. All data in transit and at rest is subjected to advanced cryptographic standards. 
        We deploy your modernized architecture into secure AWS Virtual Private Clouds (VPCs) with rigorous Identity 
        and Access Management (IAM) controls, ensuring your intellectual property remains impenetrable.
      </p>
    </GeoLandingTemplate>
  );
}
