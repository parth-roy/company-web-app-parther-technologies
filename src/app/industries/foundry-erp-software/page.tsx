import React from 'react';
import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';

export const metadata: Metadata = {
  title: 'Foundry & Casting ERP Software Development',
  description: 'Bespoke ERP software for foundries and casting units. Automate heat number tracking, scrap management, and spectroscopy integration to meet global export quality compliance.',
  keywords: 'foundry ERP software, casting ERP developers, heat number tracking software, scrap management ERP, spectroscopy integration software, casting production ERP',
};

export default function FoundryERPPage() {
  const blufSummary = "Parther Technologies develops highly customized, cloud-based ERP solutions explicitly designed for foundries and heavy casting operations. We eliminate manual errors by digitally integrating heat numbers, real-time charge mix calculations, and direct spectroscopy data ingestion, empowering Indian casting MSMEs to meet stringent international export compliance standards.";

  const technicalSpecs = [
    { label: "Hardware Integration", value: "RS-232 / TCP/IP Spectroscopy Data Extraction" },
    { label: "Data Architecture", value: "Relational DB (PostgreSQL) for Audit Trails" },
    { label: "Mobility", value: "Offline-capable React Native Tablets" },
    { label: "Compliance Standards", value: "Automated ISO & EN Quality Reporting" },
  ];

  const faqs = [
    {
      question: "Can your ERP directly read data from our spectrometers?",
      answer: "Yes. Our engineering pods specialize in hardware-to-software bridging. We build direct API and serial port integrations to automatically pull real-time chemical compositions from your spectrometer directly into the cloud database, eliminating manual transcription errors."
    },
    {
      question: "How does the software handle scrap management and charge mix optimization?",
      answer: "We engineer dynamic algorithms that calculate the optimal charge mix based on current scrap inventory and target chemical composition, significantly reducing raw material waste and optimizing furnace yields."
    },
    {
      question: "What happens if our factory floor loses internet connectivity?",
      answer: "Our shop-floor mobile applications are built with an 'offline-first' architecture. Operators can continue to log heat numbers and production data. Once connectivity is restored, the system automatically synchronizes the data to the central AWS servers."
    }
  ];

  const serviceSchema = {
    name: "Foundry & Casting ERP Engineering",
    description: "Custom software development for foundry management, including spectroscopy integration and charge mix calculations.",
    areaServed: ["India", "Howrah", "Durgapur", "Liluah"],
    serviceType: "Software Engineering"
  };

  return (
    <GeoLandingTemplate
      title="Foundry & Casting ERP Software"
      subtitle="Data-Driven Quality Control and Yield Optimization for Elite Casting Units"
      blufSummary={blufSummary}
      sourcePage="Foundry ERP Industry Page"
      sourceIdentifier="foundry-erp-software"
      technicalSpecs={technicalSpecs}
      faqs={faqs}
      serviceSchema={serviceSchema}
      diagramSrc="https://images.unsplash.com/photo-1580983546524-7f12e8609503?auto=format&fit=crop&q=80&w=1200"
      diagramAlt="Molten metal and industrial foundry operations"
    >
      <h3>The Challenge with Generic Manufacturing ERPs</h3>
      <p>
        Foundry operations represent one of the most mathematically complex environments in the manufacturing 
        sector. Generic ERPs fail spectacularly when confronted with the realities of <strong>charge mix calculations</strong>, 
        varying scrap chemistries, and the strict traceability required by international automotive and aerospace clients.
      </p>
      
      <p>
        To survive in the export market, casting owners must guarantee absolute metallurgical traceability. 
        A single undocumented <strong>heat number</strong> or a transcribed error from a spectrometer can lead 
        to massive batch rejections.
      </p>

      <h3>Hyper-Specialized Foundry Workflows</h3>
      <p>
        Parther Technologies builds custom software architectures that map directly to the thermodynamics and 
        logistics of your specific furnace setup. Our solutions are engineered to close the gap between the 
        physical melt and digital reporting.
      </p>
      
      <ul>
        <li><strong>Automated Spectroscopy Ingestion:</strong> We build hardware bridges that instantly pull chemical analyses from your lab into the ERP, automatically verifying the results against target EN/ASTM standards.</li>
        <li><strong>Dynamic Charge Mix Optimization:</strong> Our algorithms analyze your current scrap inventory and suggest the most cost-effective charge mix to achieve the desired melt chemistry.</li>
        <li><strong>Complete Traceability:</strong> Generate end-to-end audit trails. Trace a finished casting back to its exact heat number, operator shift, and raw material batch with a single click.</li>
        <li><strong>Scrap & Yield Management:</strong> Accurately track runner and riser returns to maintain precise inventory valuation.</li>
      </ul>

      <h3>Built for the Factory Floor</h3>
      <p>
        Software is useless if operators refuse to use it. We deploy intuitive, high-contrast tablet interfaces 
        designed for harsh industrial environments, ensuring that sand preparation, core making, and molding teams 
        can input data rapidly, even with thick protective gloves.
      </p>
    </GeoLandingTemplate>
  );
}
