import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import "./globals.css";

// ─── CLS Fix: next/font handles size-adjust & font-display:swap automatically ─
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",          // prevents invisible text during load
  preload: true,
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  adjustFontFallback: true, // next/font injects CSS size-adjust to prevent CLS
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Parther Technologies | Enterprise Digital Engineering & High-Concurrency Platform Architecture",
  description:
    "Parther Technologies architects mission-critical digital infrastructure — custom SaaS platforms, enterprise ERPs, autonomous AI workflows, and high-concurrency cloud systems for enterprises across India, USA, UK, UAE, and globally.",
  keywords: [
    "enterprise digital engineering",
    "high concurrency platform architecture",
    "custom software development company",
    "enterprise erp developers",
    "ulip api integration company",
    "saas platform engineering",
    "logistics software engineering firm",
    "autonomous ai workflow development",
    "cross border software engineering partner",
    "dedicated engineering pods",
    "node.js bullmq microservices architecture",
    "enterprise application development"
  ],
  metadataBase: new URL("https://parthertech.com"),
  openGraph: {
    title: "Parther Technologies | Enterprise Digital Engineering & Architecture",
    description:
      "Architecting mission-critical digital platforms, enterprise ERPs, and high-concurrency event-driven systems for global enterprises.",
    url: "https://parthertech.com",
    siteName: "Parther Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parther Technologies | Enterprise Digital Engineering",
    description: "Mission-critical software platforms, enterprise ERPs, and high-concurrency architectures.",
  },
  // ─── LCP: Preconnect to image CDNs ─────────────────────────────────────
  // Declared here so Next.js generates the correct <link> tags in <head>
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { CityProvider } from "@/context/CityContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ─── Schema: Organization + Dual Platform Applications (GoMyTruck & ACS) ──
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://parthertech.com/#organization",
        name: "Parther Technologies Private Limited",
        alternateName: ["Parther Technologies", "Parther"],
        legalName: "Parther Technologies Private Limited",
        identifier: "CIN: U62099WR2026PTC293183",
        url: "https://parthertech.com",
        logo: "https://parthertech.com/logo.png",
        foundingDate: "2026-03",
        description:
          "Parther Technologies is an enterprise digital engineering and high-concurrency platform architecture firm based in Salt Lake Sector V, Kolkata, engineering mission-critical software for supply chains, logistics, and global scaling enterprises.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Salt Lake Sector V",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700091",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "22.5804",
          longitude: "88.4378",
        },
        areaServed: [
          "Global",
          "India",
          "United States",
          "United Kingdom",
          "United Arab Emirates",
          "Canada",
          "Singapore",
          "Australia",
          "Europe"
        ],
        knowsAbout: [
          "Enterprise Platform Engineering",
          "High-Concurrency Microservices",
          "Event-Driven Architecture (BullMQ, Redis, Socket.io)",
          "ULIP Government Logistics API Integration (VAHAN, SARATHI, FASTag)",
          "Custom Enterprise ERP Development",
          "Autonomous AI Agents & RAG Architecture",
          "Cross-Platform Flutter Development for Distributed Workforces",
          "Multi-Tenant SaaS Engineering",
          "Zero-Trust Database Encryption & DevSecOps"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9432350334",
          contactType: "Customer Support & Technical Discovery",
          areaServed: ["IN", "US", "GB", "AE", "CA"],
          availableLanguage: ["English", "Hindi", "Bengali"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Enterprise Digital Engineering Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Concurrency Platform Engineering" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom ERP & Foundry Systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "ULIP & National Logistics API Integrations" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Autonomous AI Agents & Agentic Workflows" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dedicated Engineering Pods" } },
          ],
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://parthertech.com/#gomytruck",
        name: "GoMyTruck",
        applicationCategory: "Logistics & Supply Chain Platform",
        operatingSystem: "Web, iOS, Android",
        description:
          "High-concurrency digital freight marketplace engineered by Parther Technologies. 31 backend Node.js modules, BullMQ queue engine, 4-wallet automated payment ledger, ULIP/VAHAN/FASTag national integration, 500+ verified drivers, sub-20 minute matching.",
        publisher: {
          "@type": "Organization",
          "@id": "https://parthertech.com/#organization",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://parthertech.com/#acs-platform",
        name: "Advance Corporate Security (ACS) Platform",
        applicationCategory: "Enterprise Workforce & Facility Management Platform",
        operatingSystem: "Web, iOS, Android",
        description:
          "Pan-India distributed workforce management platform engineered by Parther Technologies. Real-time compliance tracking and automated dispatch for 5,000+ PSARA-licensed personnel across India with 24-72h SLA guarantees.",
        publisher: {
          "@type": "Organization",
          "@id": "https://parthertech.com/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${syncopate.variable} h-full antialiased`}
    >
      <head>
        {/* ─── LCP: Preconnect to external image CDNs ─────────────────── */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* ─── Schema JSON-LD ──────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-cf-bg text-cf-text min-h-screen flex flex-col">
        <CityProvider>
          <Navbar />
          <main className="flex-1 mt-[80px]">
            {children}
          </main>
          <Footer />
          <FloatingContact />
        </CityProvider>
      </body>
    </html>
  );
}
