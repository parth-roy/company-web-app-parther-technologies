"use client";
// ─── INP Fix ─────────────────────────────────────────────────────────────────
// Only this interactive carousel shell is a Client Component.
// The card data and static content are passed in as props from the RSC parent
// (ServicesCarousel.tsx) so the full card markup is Server-rendered.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface ServiceCard {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export function ServicesCarouselClient({ cards }: { cards: ServiceCard[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-4 md:-ml-10">
        {cards.map((card, i) => (
          <CarouselItem key={i} className="pl-4 md:pl-10 md:basis-1/3">
            <article className="group cursor-pointer">
              {/* LCP Fix: next/image with lazy loading for below-fold cards */}
              <div className="mb-6 h-64 overflow-hidden clip-corner bg-cf-border-light relative">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">
                {card.title}
              </h3>
              <p className="text-cf-text-secondary leading-relaxed text-lg">
                {card.description}
              </p>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block absolute -top-20 right-12">
        <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-12 w-12 border-2 border-cf-border hover:bg-cf-text hover:text-white transition-colors duration-200" />
        <CarouselNext className="relative left-4 top-0 translate-y-0 h-12 w-12 border-2 border-cf-border hover:bg-cf-text hover:text-white transition-colors duration-200" />
      </div>
    </Carousel>
  );
}
