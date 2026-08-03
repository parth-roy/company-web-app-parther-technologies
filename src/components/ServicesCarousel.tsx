// ─── INP Fix: This is a React Server Component (RSC) ─────────────────────────
// No "use client" here. The static card data is defined and rendered on the
// server. Only the interactive Carousel shell (ServicesCarouselClient) is sent
// to the client, drastically reducing the JS bundle for this section.
// ─────────────────────────────────────────────────────────────────────────────

import { ServicesCarouselClient, type ServiceCard } from "./ServicesCarouselClient";

const cards: ServiceCard[] = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    alt: "Dashboard ERP system showing operational data",
    title: "Enterprise Software & ERP",
    description:
      "Replace fragmented spreadsheets with unified, secure, cloud-native operational software, CRMs, and inventory management tailored to your workflows.",
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    alt: "AI Knowledge Graph visualization",
    title: "Generative Engine Optimization",
    description:
      "Dominate AI search results. We structure your digital assets into knowledge graphs so ChatGPT and Google AI Overviews cite you first.",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    alt: "Mobile and web application interface",
    title: "High-Performance Digital Products",
    description:
      "Build seamless iOS/Android mobile apps, web applications, and enterprise websites that engage users and convert leads at lightning speed.",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    alt: "Robotic workflow automation API integration",
    title: "Intelligent Workflow Automation",
    description:
      "Eliminate manual bottlenecks. We integrate APIs and robotic process automation to make your data and operations flow autonomously.",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    alt: "Server racks and cloud infrastructure",
    title: "Scalable Cloud Architecture",
    description:
      "Secure, containerized server deployments designed for zero-downtime, maximum performance, and enterprise-grade security.",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    alt: "Business intelligence charts and KPI dashboards",
    title: "Data-Driven Business Intelligence",
    description:
      "Transform raw data into actionable KPIs. We build dynamic dashboards and reporting tools that give you total operational clarity.",
  },
];

export function ServicesCarousel() {
  return <ServicesCarouselClient cards={cards} />;
}
