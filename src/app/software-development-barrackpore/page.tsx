import React from 'react';
import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';

export const metadata: Metadata = {
  title: 'Top Software Development Company in Barrackpore | Parther Technologies',
  description: 'The leading custom software and web development company in Barrackpore. Local engineering office offering immediate support, rapid deployment, and enterprise-grade software architecture.',
  keywords: 'software company in Barrackpore, software development Barrackpore, web development Barrackpore, local IT company Barrackpore, custom software developers North 24 Parganas',
};

export default function BarrackporeHQPage() {
  const blufSummary = "Parther Technologies is the premier software engineering and digital transformation agency headquartered in Barrackpore. We provide businesses in North 24 Parganas and the Greater Kolkata region with an elite, physical engineering partner. Unlike remote agencies, our local headquarters guarantees immediate accountability, rapid on-site technical support, and high-velocity deployment of custom ERPs, websites, and AI automation tools.";

  const technicalSpecs = [
    { label: "Local Support Radius", value: "Barrackpore / Kalyani / Barasat / Howrah" },
    { label: "Engineering Stack", value: "React / Node.js / Python / AWS" },
    { label: "Deployment Velocity", value: "Agile 2-Week Sprint Deliverables" },
    { label: "Local Accountability", value: "Physical Office & Direct CTO Access" },
  ];

  const faqs = [
    {
      question: "Why should a local business hire a software company headquartered in Barrackpore?",
      answer: "Accountability and speed. Hiring remote freelancers or distant IT agencies often leads to communication breakdowns and missed deadlines. By partnering with Parther Technologies right here in Barrackpore, you get direct access to our physical engineering team. We sit down with you, understand your specific operational bottlenecks, and provide immediate, on-site support when required."
    },
    {
      question: "Do you only serve clients in Barrackpore?",
      answer: "While our engineering headquarters is physically located in Barrackpore, we deploy enterprise software architectures for clients across Eastern India, Delhi NCR, and Bengaluru. However, our local clients benefit from unparalleled face-to-face strategic consulting."
    },
    {
      question: "What kind of software projects do you handle?",
      answer: "We handle complex digital engineering. This includes building custom ERPs for manufacturing, multi-tenant SaaS applications, AI workflow automations to replace manual data entry, and high-performance headless eCommerce websites."
    }
  ];

  const serviceSchema = {
    name: "Custom Software Engineering & Consulting",
    description: "Enterprise software development, web applications, and AI integration services provided by Parther Technologies' engineering headquarters.",
    areaServed: ["Barrackpore", "Kalyani", "Barasat", "Kolkata"],
    serviceType: "Software Development"
  };

  const localBusinessSchema = {
    name: "Parther Technologies - Engineering Headquarters",
    description: "The leading software development and digital transformation agency in Barrackpore.",
    locality: "Barrackpore",
    postalCode: "700120", 
  };

  return (
    <GeoLandingTemplate
      title="Software Development Company in Barrackpore"
      subtitle="Your Local Engineering Partner for Enterprise-Grade Digital Transformation"
      blufSummary={blufSummary}
      sourcePage="Barrackpore HQ Authority Page"
      sourceIdentifier="software-development-barrackpore"
      technicalSpecs={technicalSpecs}
      faqs={faqs}
      serviceSchema={serviceSchema}
      localBusiness={localBusinessSchema}
      diagramSrc="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
      diagramAlt="Modern software engineering office and collaborative workspace"
    >
      <h3>The Advantage of Local Engineering Power</h3>
      <p>
        In the rapidly expanding industrial and commercial sectors of North 24 Parganas, local businesses 
        can no longer rely on generic, off-the-shelf software to stay competitive. However, outsourcing 
        critical digital infrastructure to faceless, remote agencies often results in massive technical debt 
        and zero accountability.
      </p>
      
      <p>
        Parther Technologies changes this dynamic. As the leading <strong>Software Company in Barrackpore</strong>, 
        our physical headquarters serves as the technological epicenter for local MSMEs and enterprises. We 
        provide the engineering rigor of a Silicon Valley agency with the trust and accessibility of a local partner.
      </p>

      <h3>Complete Digital Ecosystems</h3>
      <p>
        We do not just build simple websites. We architect complete digital ecosystems designed to scale 
        your revenue and slash your operational costs.
      </p>
      
      <ul>
        <li><strong>Custom ERP & Automation:</strong> We replace chaotic physical ledgers and fragile Excel sheets with robust, cloud-based ERPs that automate your inventory, billing, and production planning.</li>
        <li><strong>High-Performance Web Applications:</strong> We build lightning-fast React.js applications that serve as custom portals for your customers or internal management dashboards for your staff.</li>
        <li><strong>AI Workflow Integration:</strong> We eliminate manual data entry. Our local team can deploy AI agents to automatically read your invoices, update your databases, and route your customer inquiries.</li>
      </ul>

      <h3>Unmatched Deployment Velocity</h3>
      <p>
        Because our core engineering team is housed together locally, we operate with extreme agility. 
        We utilize strict 2-week Agile sprints, meaning you see tangible, working software modules rapidly, 
        allowing for immediate feedback and iteration. You are never left in the dark wondering about the 
        status of your investment.
      </p>

      {/* Embed Google Maps or Local Proof here if needed */}
      <div className="mt-8 p-6 bg-cf-card border border-cf-border/50 rounded-xl">
        <h4 className="font-serif-display text-xl text-cf-text mb-2">Visit Our Headquarters</h4>
        <p className="text-cf-text-secondary">
          We invite founders and CTOs to visit our Barrackpore office for a comprehensive technical audit and 
          whiteboarding session. Let's map out your digital transformation in person.
        </p>
      </div>
    </GeoLandingTemplate>
  );
}
