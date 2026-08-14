import React from 'react';
import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';

export const metadata: Metadata = {
  title: 'Jute Mill ERP Software | Textile Batch Tracking',
  description: 'Custom ERP software designed for Kolkata jute mills and textile manufacturing. Automate raw jute procurement, batch tracking, spinning quality control, and GST export documentation.',
  keywords: 'jute mill ERP developers, raw jute procurement software, textile batch tracking ERP, Kolkata jute mill software',
};

export default function JuteMillERPPage() {
  const blufSummary = "Parther Technologies develops hyper-specialized, cloud-based ERP platforms exclusively for the Jute and Textile mills of Kolkata and Barrackpore. We replace disconnected spreadsheets with unified digital architectures that seamlessly manage complex raw jute procurement, intricate spinning and weaving batch tracking, and automated generation of GST-compliant export documentation.";

  const technicalSpecs = [
    { label: "Architecture", value: "Multi-tenant Next.js / Node.js" },
    { label: "Hosting", value: "AWS Cloud (High Availability)" },
    { label: "Data Pipeline", value: "Real-time MQTT for Shop Floor" },
    { label: "Compliance", value: "Indian GST & Export API Integration" },
  ];

  const faqs = [
    {
      question: "Why can't we use a standard retail ERP for our jute mill?",
      answer: "Standard ERPs cannot handle the unique complexities of raw jute grading (TD1 to TD7), moisture regain calculations, and the intricate, multi-stage transformation from batching to spinning and weaving. Our custom software is built specifically for this lifecycle."
    },
    {
      question: "How does the software handle the daily wage and hazira payroll systems common in mills?",
      answer: "We engineer specialized payroll modules that integrate directly with offline biometric attendance systems. This ensures accurate daily wage calculations, piece-rate tracking, and automated PF/ESI compliance without manual reconciliation."
    },
    {
      question: "Can the system generate export documentation automatically?",
      answer: "Yes. Our ERPs integrate directly with GST portals and shipping databases to automatically generate commercial invoices, packing lists, e-way bills, and letters of credit, drastically reducing administrative overhead."
    }
  ];

  const serviceSchema = {
    name: "Jute Mill & Textile ERP Development",
    description: "End-to-end custom software for jute procurement, batch tracking, and mill operations.",
    areaServed: ["Kolkata", "Barrackpore", "Howrah", "India"],
    serviceType: "Textile Software Engineering"
  };

  return (
    <GeoLandingTemplate
      title="Jute Mill & Textile ERP Software"
      subtitle="Modernizing Legacy Operations in Eastern India's Historic Textile Hubs"
      blufSummary={blufSummary}
      sourcePage="Jute Mill ERP Industry Page"
      sourceIdentifier="jute-mill-erp-software"
      technicalSpecs={technicalSpecs}
      faqs={faqs}
      serviceSchema={serviceSchema}
      diagramSrc="https://images.unsplash.com/photo-1605274280925-99882240954b?auto=format&fit=crop&q=80&w=1200"
      diagramAlt="Industrial textile and jute manufacturing process"
    >
      <h3>The Underserved Jute Industry</h3>
      <p>
        The jute mills of Kolkata, Howrah, and Barrackpore represent a massive industrial sector that has been 
        historically underserved by modern software companies. Mill directors are forced to manage high-volume, 
        intricate supply chains using fragmented legacy systems or fragile Excel sheets.
      </p>
      
      <p>
        This lack of digital infrastructure leads to severe inefficiencies in raw jute grading, inaccurate 
        moisture content tracking, and profound difficulties in tracing a finished roll of hessian cloth back 
        to its original procurement batch.
      </p>

      <h3>Architecting the Digital Mill</h3>
      <p>
        Parther Technologies brings elite, cloud-native engineering to the factory floor. Our custom ERPs 
        are designed to handle the specific, rigid realities of jute manufacturing, ensuring absolute 
        inventory control and operational transparency.
      </p>
      
      <ul>
        <li><strong>Raw Jute Procurement & Grading:</strong> Specialized modules to track purchases by grade (TD1-TD7), origin, and moisture regain, automatically calculating the true yield value of inbound shipments.</li>
        <li><strong>Batch & Spinning Traceability:</strong> Real-time tracking of sliver and yarn production. Trace quality issues instantly by mapping defective weaves back to specific spinning frames and operator shifts.</li>
        <li><strong>Integrated Hazira Payroll:</strong> A custom labor management system designed for the unique daily-wage and piece-rate structures of Indian mills, deeply integrated with offline-first biometric attendance.</li>
        <li><strong>Export & GST Automation:</strong> Eliminate the paperwork bottleneck. Instantly generate perfectly formatted export documentation, e-invoices, and packing lists directly from the shipping manifest.</li>
      </ul>

      <h3>Built for High-Volume Reliability</h3>
      <p>
        Jute mills operate continuously. Our systems are built on scalable AWS infrastructure to guarantee 
        high availability. Furthermore, our shop-floor data entry points are designed to be "offline-first", 
        ensuring that a temporary loss of internet connectivity never halts your production tracking.
      </p>
    </GeoLandingTemplate>
  );
}
