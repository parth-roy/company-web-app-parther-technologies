"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Truck, 
  Shield, 
  Users, 
  Workflow, 
  HeartHandshake,
  ArrowUpRight, 
  ArrowRight 
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CaseStudyItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  isAccent?: boolean;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "gomytruck",
    title: "GoMyTruck — Digital Freight Marketplace",
    description:
      "Dual-mode freight booking, 4-wallet ledger, automated payouts, and ULIP logistics compliance.",
    href: "https://gomytruck.com/",
    icon: Truck,
    isAccent: false,
  },
  {
    id: "acs",
    title: "Advance Corporate Security — 5,000+ Personnel Platform",
    description:
      "Enterprise guard management, automated statutory PF/ESI compliance, and 14K+ programmatic routes.",
    href: "https://advancecorporatesecurity.com/",
    icon: Shield,
    isAccent: false,
  },
  {
    id: "metromitra",
    title: "MetroMitra — On-Demand Gig Workforce SaaS",
    description:
      "High-concurrency gig marketplace with instant role-switching, Mapbox radar, and 550+ city hubs.",
    href: "https://metromitra.com/",
    icon: Users,
    isAccent: false,
  },
  {
    id: "metrowala",
    title: "MetroWala & Tailored Enterprise Systems",
    description:
      "Sub-second transit routing across 10 metro networks, plus 100% custom-engineered architectures.",
    href: "https://metrowala.com/",
    icon: Workflow,
    isAccent: false,
  },
  {
    id: "donatefood",
    title: "DonateFood.in — Hyper-Local Food Rescue Network",
    description:
      "Direct donor-to-NGO surplus food dispatch, hyper-localized PSEO hubs, and zero-waste logistics.",
    href: "https://donatefood.in/",
    icon: HeartHandshake,
    isAccent: true,
  },
];

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const supportingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const N = cards.length;
      if (N < 2 || !sectionRef.current || !supportingRef.current || !deckRef.current) return;

      const isMobile = window.innerWidth < 768;

      // ─── Geometry from DOM ────────────────────────────────────────
      const lipSize = isMobile ? 14 : 20;
      const cardHeight = cards[0].offsetHeight;
      const naturalGap = cards[1].offsetTop - cards[0].offsetTop - cardHeight;
      const stride = cardHeight + naturalGap;

      // How far a card must translate to collapse one stride into a lip
      const dockDist = stride - lipSize;

      // ─── Timeline model ───────────────────────────────────────────
      //
      // For N=4 cards, there are 3 docking transitions.
      //
      // Each card i (1..N-1) must travel a total of -i * dockDist.
      // Card 1 starts moving first and finishes first.
      // Card 2 starts moving with card 1 but finishes later (one transition later).
      // Card 3 starts moving with cards 1+2 and finishes last.
      //
      // The KEY INSIGHT from the reference:
      // Every card is in continuous motion for most of the timeline.
      // Card i begins moving at time 0 and finishes at transition i's end.
      //
      // We use ONE TWEEN PER CARD with GSAP keyframes to specify
      // the Y position at each transition boundary. This avoids the
      // `fromTo` overlap problem and gives GSAP a single continuous
      // interpolation path per element.
      //
      // Timeline breakdown (total duration = 1.0):
      //   Phase 0→0.80: card stacking (3 equal segments of 0.267 each)
      //   Phase 0.72→0.90: supporting text fade-in
      //   Phase 0.90→1.00: hold/breathe
      //
      // Within the card stacking phase, segment boundaries are at:
      //   t0 = 0.000 (start)
      //   t1 = 0.267 (card 1 docked)
      //   t2 = 0.533 (card 2 docked)
      //   t3 = 0.800 (card 3 docked)

      const transitions = N - 1;
      const cardPhaseEnd = 0.80;
      const segDur = cardPhaseEnd / transitions;

      const tl = gsap.timeline({ defaults: { ease: "none" } });

      // ─── Per-card keyframed motion ────────────────────────────────
      //
      // Card i (i >= 1):
      //   - Starts at Y=0 at time 0
      //   - At each segment boundary t_j (j=1..transitions):
      //     If j <= i: Y = -j * dockDist  (card is still moving, accumulating distance)
      //     If j > i:  Y = -i * dockDist  (card is docked, stays put)
      //   - Card's motion spans from time 0 to time min(i, transitions) * segDur
      //
      // But with keyframes, GSAP interpolates linearly between each keyframe,
      // giving us the exact continuous motion where:
      //   - During segment j (t_j to t_{j+1}):
      //     Cards with i > j are moving (they haven't docked yet)
      //     Cards with i <= j are stationary (already docked)
      //
      // This naturally creates the wave-cascade effect.

      for (let i = 1; i < N; i++) {
        // Build keyframe array for card i
        // Each keyframe: { y: value, duration: segDur }
        const keyframes: { y: number; duration: number }[] = [];

        for (let j = 0; j < transitions; j++) {
          if (j < i) {
            // Card is still in motion during this segment
            keyframes.push({ y: -(j + 1) * dockDist, duration: segDur });
          } else {
            // Card is already docked, hold position
            keyframes.push({ y: -i * dockDist, duration: segDur });
          }
        }

        gsap.set(cards[i], { y: 0 });
        tl.to(cards[i], { keyframes, ease: "none" }, 0);
      }

      // ─── Supporting text Y motion ─────────────────────────────────
      // Moves in lockstep with all cards: total travel = transitions * dockDist
      // over the full card phase duration
      const supKeyframes: { y: number; duration: number }[] = [];
      for (let j = 0; j < transitions; j++) {
        supKeyframes.push({ y: -(j + 1) * dockDist, duration: segDur });
      }

      gsap.set(supportingRef.current, { y: 0, opacity: 0 });
      tl.to(supportingRef.current, { keyframes: supKeyframes, ease: "none" }, 0);

      // ─── Supporting text opacity ──────────────────────────────────
      // Fades in during the last 20% of the card phase + slight overlap
      tl.to(supportingRef.current, {
        opacity: 1,
        duration: 0.15,
        ease: "power2.out",
      }, cardPhaseEnd - 0.12);

      // ─── Hold / breathe at the end ────────────────────────────────
      tl.to({}, { duration: 0.20 });

      // ─── Pin distance ─────────────────────────────────────────────
      const pinDistance = isMobile ? 1200 : 1550;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80px",
        end: `+=${pinDistance}`,
        pin: true,
        scrub: 0.8,
        animation: tl,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      // ─── Gap compensation ─────────────────────────────────────────
      // ScrollTrigger wraps the pinned section in a "pin-spacer" div
      // whose height = original section height + pin distance.
      // When the cards collapse, the visible content is much shorter,
      // leaving a massive dead gap inside the spacer.
      // We apply the negative margin to the pin-spacer itself (the
      // parent of the pinned section after ScrollTrigger sets up).
      const totalCollapse = transitions * dockDist;
      const pinSpacer = sectionRef.current.parentElement;
      if (pinSpacer && pinSpacer.classList.contains("pin-spacer")) {
        pinSpacer.style.marginBottom = `-${totalCollapse}px`;
      }

    }, sectionRef);

    return () => {
      // Clean up pin-spacer margin before GSAP reverts (removes the spacer)
      if (sectionRef.current) {
        const pinSpacer = sectionRef.current.parentElement;
        if (pinSpacer && pinSpacer.classList.contains("pin-spacer")) {
          pinSpacer.style.marginBottom = "";
        }
      }
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="case-studies" 
      className="relative z-10 bg-[#fafafa] text-slate-900 pt-12 pb-6 sm:pt-14 sm:pb-8 border-t border-slate-200 overflow-hidden"
    >
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full border border-slate-300 bg-white text-[10px] font-bold tracking-[0.16em] uppercase text-slate-800 font-mono-caps shadow-2xs">
              What We&apos;ve Built
            </span>
            <span className="text-[11px] font-semibold text-slate-400 font-mono">
              [ PROOF OF WORK ]
            </span>
          </div>
          <h2 className="font-syncopate font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-slate-950">
            Case Studies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-lg">
            Real results for real businesses. Delivered production software deployed at scale.
          </p>
        </div>

        {/* Card Deck Stage */}
        <div ref={deckRef} className="w-full max-w-[980px] mx-auto relative">
          
          <div className="flex flex-col gap-3 sm:gap-3.5 relative">
            {CASE_STUDIES.map((study, index) => {
              const Icon = study.icon;
              const zIndex = 10 + index * 10;

              return (
                <div
                  key={study.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  style={{ zIndex }}
                  className="w-full will-change-transform"
                >
                  <a
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between gap-4 sm:gap-6 w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 transition-all duration-300 border cursor-pointer ${
                      study.isAccent
                        ? "bg-[#e2ff46] text-slate-950 border-[#c5e821] shadow-[0_-3px_12px_rgba(0,0,0,0.05),0_10px_24px_rgba(226,255,70,0.25)] hover:shadow-[0_16px_36px_rgba(226,255,70,0.35)]"
                        : "bg-white text-slate-900 border-slate-200/90 shadow-[0_-2px_10px_rgba(0,0,0,0.02),0_4px_16px_rgba(0,0,0,0.04)] hover:border-slate-300 hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)]"
                    }`}
                  >
                    {/* Left: Minimal Geometric Icon & Text */}
                    <div className="flex items-center gap-4 sm:gap-5 md:gap-6 flex-1 min-w-0">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 ${
                          study.isAccent
                            ? "bg-slate-950 text-[#e2ff46] border-slate-900 shadow-sm"
                            : "bg-slate-100/80 text-slate-800 border-slate-200/80 shadow-2xs group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900"
                        }`}
                      >
                        <Icon size={24} className="stroke-[1.5]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className="font-sans font-bold text-base sm:text-lg md:text-xl tracking-tight leading-snug truncate text-slate-950 transition-colors"
                        >
                          {study.title}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm md:text-[15px] leading-relaxed mt-1 sm:mt-1.5 truncate ${
                            study.isAccent ? "text-slate-800 font-medium" : "text-slate-600 font-normal"
                          }`}
                        >
                          {study.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Refined Circular Arrow Button */}
                    <div className="shrink-0 pl-2">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          study.isAccent
                            ? "bg-black/10 border-black/15 text-slate-950 group-hover:bg-slate-950 group-hover:text-[#e2ff46] group-hover:border-slate-950"
                            : "bg-slate-50/90 border-slate-200/80 text-slate-600 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 group-hover:shadow-xs"
                        }`}
                      >
                        <ArrowUpRight 
                          size={18} 
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[1.75]" 
                        />
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Supporting Thesis Statement & Arrow CTA */}
          <div 
            ref={supportingRef} 
            className="mt-8 sm:mt-10 text-center max-w-3xl sm:max-w-4xl mx-auto px-4 flex flex-col items-center will-change-[transform,opacity]"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.25]">
              We don&apos;t offer a fixed stack. We adapt to what your product needs — fast or foundational, frontend or backend.
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 mt-3 sm:mt-4 font-normal max-w-xl">
              Every architecture is custom-engineered from first principles.
            </p>

            {/* Refined Right-Side Arrow CTA */}
            <div className="mt-6 sm:mt-7 flex justify-center">
              <Link
                href="/case-studies"
                aria-label="See all case studies"
                className="group inline-flex items-center gap-0 hover:gap-3.5 px-3 py-1.5 hover:px-5 hover:py-2 rounded-full border border-slate-300 bg-white hover:border-slate-900 text-slate-900 shadow-2xs hover:shadow-md transition-all duration-300 ease-out cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900/20"
              >
                <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-300 ease-out font-mono-caps text-xs sm:text-[13px] tracking-wider font-bold text-slate-900">
                  See all case studies
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-slate-950 group-hover:text-white flex items-center justify-center transition-all duration-300 text-slate-800 shrink-0">
                  <ArrowRight 
                    size={15} 
                    className="transition-transform duration-300 group-hover:translate-x-0.5 stroke-[1.75]" 
                  />
                </span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
