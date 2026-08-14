import React from 'react';
import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';

export const metadata: Metadata = {
  title: 'Custom Logistics Software & Fleet Management SaaS',
  description: 'Scale your transport operations with custom logistics software. Featuring real-time GPS tracking, multi-tenant driver onboarding, and load-matching algorithms. See our GoMyTruck case study.',
  keywords: 'custom logistics software development, fleet management SaaS architecture, transport management system developers, digital freight marketplace developers',
};

export default function LogisticsFleetSaaSPage() {
  const blufSummary = "Parther Technologies develops high-performance, multi-tenant digital freight marketplaces and custom logistics SaaS platforms. Leveraging our proprietary experience architecting the GoMyTruck platform (powering 500+ drivers), we engineer highly scalable transport management systems featuring real-time GPS processing, algorithmic load-matching, and automated driver KYC workflows.";

  const technicalSpecs = [
    { label: "Real-Time Tracking", value: "WebSockets / MQTT over AWS IoT" },
    { label: "Backend Architecture", value: "Node.js Microservices" },
    { label: "Mobile Applications", value: "React Native (iOS & Android)" },
    { label: "Mapping & Routing", value: "Google Maps API / Mapbox Integration" },
  ];

  const faqs = [
    {
      question: "Do you have proven experience building logistics software?",
      answer: "Yes. We are the lead architects behind GoMyTruck, a massive digital freight marketplace managing over 500 active drivers in Eastern India. We deeply understand the operational realities of load matching, advance payment calculations, and POD (Proof of Delivery) digital verification."
    },
    {
      question: "How do you handle real-time GPS tracking for hundreds of vehicles?",
      answer: "We utilize highly optimized WebSocket connections deployed on AWS. Instead of overwhelming the server with constant HTTP polling, our architecture maintains persistent, low-latency connections to driver mobile apps, ensuring fluid live-map tracking without draining driver batteries."
    },
    {
      question: "Can you build a multi-tenant platform for my transport agency?",
      answer: "Absolutely. We specialize in multi-tenant SaaS architectures, allowing you to onboard hundreds of independent fleet owners onto your platform while ensuring absolute data isolation and independent billing cycles for each tenant."
    }
  ];

  const serviceSchema = {
    name: "Logistics Software & Fleet SaaS Development",
    description: "Engineering of custom transport management systems, digital freight marketplaces, and real-time fleet tracking applications.",
    areaServed: ["India", "Kolkata", "Delhi NCR", "Bengaluru"],
    serviceType: "SaaS Development"
  };

  return (
    <GeoLandingTemplate
      title="Custom Logistics & Fleet Management SaaS"
      subtitle="Architecting Digital Freight Marketplaces Built for Scale and Speed"
      blufSummary={blufSummary}
      sourcePage="Logistics SaaS Industry Page"
      sourceIdentifier="logistics-fleet-management-software"
      technicalSpecs={technicalSpecs}
      faqs={faqs}
      serviceSchema={serviceSchema}
      diagramSrc="https://images.unsplash.com/photo-1586528116311-ad8ed7444b2b?auto=format&fit=crop&q=80&w=1200"
      diagramAlt="Digital logistics fleet and shipping containers"
    >
      <h3>The End of the Phone-Call Broker Era</h3>
      <p>
        The Indian logistics and transport sector is undergoing a massive digital consolidation. Fleet owners 
        and transport agencies relying on WhatsApp groups, physical ledgers, and endless phone calls for load 
        matching are rapidly losing market share to tech-enabled digital freight marketplaces.
      </p>
      
      <p>
        Parther Technologies engineers the custom <strong>Transport Management Systems (TMS)</strong> that power 
        this transformation. We don't build generic websites; we build mission-critical, high-availability platforms 
        capable of routing thousands of metric tons of cargo daily.
      </p>

      <h3>Proof of Competence: The GoMyTruck Architecture</h3>
      <p>
        Generalist agencies lack the deep domain expertise required to handle the edge cases of Indian logistics—such 
        as complex advance/balance payment structures, shortage deductions, and multi-tier commission models. 
      </p>
      <p>
        Parther Technologies possesses the ultimate credential: we architected <strong>GoMyTruck</strong>. 
        Managing over 500 active drivers, this multi-tenant platform features automated driver KYC, algorithmic load matching, 
        and real-time financial reconciliation. We bring this exact tier of engineering to your custom logistics project.
      </p>

      <h3>Core Capabilities for Fleet SaaS</h3>
      <ul>
        <li><strong>Algorithmic Load Matching:</strong> Reduce empty return trips (deadhead) by dynamically matching available truck capacity with geographic demand in real-time.</li>
        <li><strong>Multi-Tenant Architecture:</strong> Launch your own white-labeled SaaS. Onboard multiple transport companies onto your platform with absolute data isolation and Stripe billing integration.</li>
        <li><strong>Real-Time GPS & Geofencing:</strong> Track fleet assets live on digital maps. Trigger automated alerts to consignees when a truck enters a specific geofenced warehouse zone.</li>
        <li><strong>Digital POD & Invoicing:</strong> Drivers capture Proof of Delivery directly via the mobile app, instantly triggering automated GST-compliant e-invoicing to the client.</li>
      </ul>
    </GeoLandingTemplate>
  );
}
