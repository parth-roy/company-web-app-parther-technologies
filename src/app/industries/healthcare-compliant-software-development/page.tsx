import React from 'react';
import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';

export const metadata: Metadata = {
  title: 'Healthcare Web Application Developers | Clinic Management Software',
  description: 'Custom HIPAA-compliant healthcare software development. We architect secure patient portals, clinic management software, and telemedicine platforms with absolute data encryption.',
  keywords: 'healthcare web application developers, clinic management software Kolkata, HIPAA compliant software developers, telemedicine app development, medical SaaS architecture',
};

export default function HealthcareSoftwarePage() {
  const blufSummary = "Parther Technologies architects hyper-secure, compliant software applications for healthtech startups, clinics, and hospital networks. We prioritize absolute patient data privacy by engineering healthcare platforms, telemedicine applications, and custom clinic management software that adheres strictly to ISO 27001 and HIPAA standards. Our cloud architectures guarantee zero database exposure on the frontend, utilizing end-to-end encryption to protect sensitive Electronic Health Records (EHR).";

  const technicalSpecs = [
    { label: "Compliance Standards", value: "HIPAA / ISO 27001 / GDPR" },
    { label: "Data Security", value: "AES-256 Encryption at Rest" },
    { label: "Architecture", value: "Zero-Trust Microservices" },
    { label: "Integrations", value: "HL7 / FHIR Interoperability" },
  ];

  const faqs = [
    {
      question: "How do you ensure patient data (EHR) remains secure from cyber threats?",
      answer: "We employ a Zero-Trust architectural model. Our frontend applications are completely decoupled from the database. All API endpoints require strict JSON Web Token (JWT) authentication, and patient data is encrypted both in transit (TLS 1.3) and at rest (AES-256). We ensure your database instances are never publicly accessible via the internet."
    },
    {
      question: "Can you build custom telemedicine and video consultation features?",
      answer: "Yes. We integrate secure, peer-to-peer WebRTC video streaming directly into custom patient portals. These telemedicine pipelines are fully encrypted, ensuring that doctor-patient confidentiality is maintained across remote consultations without relying on insecure third-party video apps."
    },
    {
      question: "Does your software integrate with existing hospital lab networks?",
      answer: "We engineer interoperable systems utilizing HL7 and FHIR standards. This allows our custom clinic management software to safely exchange diagnostic results, imaging data, and prescriptions with external laboratory and pharmacy networks."
    }
  ];

  const serviceSchema = {
    name: "Healthcare Software & Clinic Management Development",
    description: "Secure, compliant web application development for the medical sector, including EHR systems and telemedicine portals.",
    areaServed: ["India", "Global"],
    serviceType: "Healthcare Software Engineering"
  };

  return (
    <GeoLandingTemplate
      title="Healthcare Compliant Software Development"
      subtitle="Engineering Secure Patient Portals and Clinic Management Systems"
      blufSummary={blufSummary}
      sourcePage="Healthcare Software Industry Page"
      sourceIdentifier="healthcare-compliant-software-development"
      technicalSpecs={technicalSpecs}
      faqs={faqs}
      serviceSchema={serviceSchema}
      diagramSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
      diagramAlt="Medical professional using advanced digital healthcare software"
    >
      <h3>Digital Transformation Without Compromise</h3>
      <p>
        The healthcare sector cannot tolerate the bugs and security vulnerabilities acceptable in standard 
        software development. Clinics, hospitals, and healthtech startups must balance the urgent need for 
        digital transformation with the absolute mandate of patient data privacy.
      </p>
      
      <p>
        Parther Technologies acts as the specialized engineering arm for medical enterprises. We build 
        custom <strong>Clinic Management Software</strong> and Patient Portals that treat Electronic Health 
        Records (EHR) with military-grade cryptographic security, ensuring total compliance with 
        ISO 27001 and HIPAA frameworks.
      </p>

      <h3>Zero-Trust Medical Architecture</h3>
      <p>
        Our healthcare development philosophy is rooted in a Zero-Trust model. We assume the network is 
        always hostile. 
      </p>
      
      <ul>
        <li><strong>Frontend Decoupling:</strong> The user-facing application (React/Next.js) contains zero business logic and has no direct database access.</li>
        <li><strong>End-to-End Encryption:</strong> Patient diagnostic data is encrypted using AES-256 before it ever hits the database disk, rendering data breaches useless to attackers.</li>
        <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions ensure a receptionist can schedule appointments but cannot access sensitive diagnostic histories reserved for physicians.</li>
        <li><strong>Audit Logging:</strong> Every action taken within the system is immutably logged, generating the required audit trails for regulatory medical compliance.</li>
      </ul>

      <h3>Telemedicine & Patient Centricity</h3>
      <p>
        Beyond backend security, we engineer beautiful, frictionless patient experiences. We develop unified 
        portals where patients can book appointments, view encrypted lab results, manage prescription refills, 
        and engage in secure WebRTC-powered telemedicine video calls directly from their browser or mobile app.
      </p>
    </GeoLandingTemplate>
  );
}
