"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ServicesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-4 md:-ml-10">
        
        {/* Card 1: Enterprise Software */}
        <CarouselItem className="pl-4 md:pl-10 md:basis-1/3">
          <article className="group cursor-pointer">
            <div className="mb-6 h-64 overflow-hidden clip-corner bg-cf-border-light relative">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Dashboard ERP" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">Enterprise Software & ERP</h3>
            <p className="text-cf-text-secondary leading-relaxed text-lg">
              Replace fragmented spreadsheets with unified, secure, cloud-native operational software, CRMs, and inventory management tailored to your workflows.
            </p>
          </article>
        </CarouselItem>
        
        {/* Card 2: AI Visibility */}
        <CarouselItem className="pl-4 md:pl-10 md:basis-1/3">
          <article className="group cursor-pointer">
            <div className="mb-6 h-64 overflow-hidden clip-corner bg-cf-border-light relative">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" alt="AI Knowledge Graph" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">Generative Engine Optimization</h3>
            <p className="text-cf-text-secondary leading-relaxed text-lg">
              Dominate AI search results. We structure your digital assets into knowledge graphs so ChatGPT and Google AI Overviews cite you first.
            </p>
          </article>
        </CarouselItem>

        {/* Card 3: Digital Products */}
        <CarouselItem className="pl-4 md:pl-10 md:basis-1/3">
          <article className="group cursor-pointer">
            <div className="mb-6 h-64 overflow-hidden clip-corner bg-cf-border-light relative">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" alt="Mobile Web App" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">High-Performance Digital Products</h3>
            <p className="text-cf-text-secondary leading-relaxed text-lg">
              Build seamless iOS/Android mobile apps, web applications, and enterprise websites that engage users and convert leads at lightning speed.
            </p>
          </article>
        </CarouselItem>

        {/* Card 4: Automation */}
        <CarouselItem className="pl-4 md:pl-10 md:basis-1/3">
          <article className="group cursor-pointer">
            <div className="mb-6 h-64 overflow-hidden clip-corner bg-cf-border-light relative">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="Workflow Robots API" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">Intelligent Workflow Automation</h3>
            <p className="text-cf-text-secondary leading-relaxed text-lg">
              Eliminate manual bottlenecks. We integrate APIs and robotic process automation to make your data and operations flow autonomously.
            </p>
          </article>
        </CarouselItem>

        {/* Card 5: Cloud & Infrastructure */}
        <CarouselItem className="pl-4 md:pl-10 md:basis-1/3">
          <article className="group cursor-pointer">
            <div className="mb-6 h-64 overflow-hidden clip-corner bg-cf-border-light relative">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" alt="Servers Cloud Containers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">Scalable Cloud Architecture</h3>
            <p className="text-cf-text-secondary leading-relaxed text-lg">
              Secure, containerized server deployments designed for zero-downtime, maximum performance, and enterprise-grade security.
            </p>
          </article>
        </CarouselItem>

        {/* Card 6: Business Intelligence */}
        <CarouselItem className="pl-4 md:pl-10 md:basis-1/3">
          <article className="group cursor-pointer">
            <div className="mb-6 h-64 overflow-hidden clip-corner bg-cf-border-light relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Charts KPIs Reports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">Data-Driven Business Intelligence</h3>
            <p className="text-cf-text-secondary leading-relaxed text-lg">
              Transform raw data into actionable KPIs. We build dynamic dashboards and reporting tools that give you total operational clarity.
            </p>
          </article>
        </CarouselItem>

      </CarouselContent>
      {/* Navigation buttons for desktop */}
      <div className="hidden md:block absolute -top-20 right-12">
        <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-12 w-12 border-2 border-cf-border hover:bg-cf-text hover:text-white transition-colors" />
        <CarouselNext className="relative left-4 top-0 translate-y-0 h-12 w-12 border-2 border-cf-border hover:bg-cf-text hover:text-white transition-colors" />
      </div>
    </Carousel>
  );
}
