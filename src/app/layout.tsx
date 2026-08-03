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
  title: "Parther Technologies | Enterprise Software & Digital Transformation in West Bengal",
  description:
    "Parther Technologies architects scalable digital infrastructure — custom SaaS, ERP, Agentic Workflows, and Generative Engine Optimization (GEO) for enterprises in Eastern India.",
  metadataBase: new URL("https://parthertech.com"),
  openGraph: {
    title: "Parther Technologies | Digital Transformation & SaaS",
    description:
      "Accelerate your business with enterprise software solutions built for the West Bengal industrial corridors.",
    url: "https://parthertech.com",
    siteName: "Parther Technologies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parther Technologies",
    description: "Custom software and digital transformation in Eastern India.",
  },
  // ─── LCP: Preconnect to image CDNs ─────────────────────────────────────
  // Declared here so Next.js generates the correct <link> tags in <head>
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MotionProvider } from "@/components/MotionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ─── Schema: Organization + LocalBusiness + SoftwareApplication ──────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://parthertech.com/#organization",
        name: "Parther Technologies",
        url: "https://parthertech.com",
        logo: "https://parthertech.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9432350334",
          contactType: "Customer Support",
          areaServed: "IN",
          availableLanguage: ["English", "Bengali", "Hindi"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://parthertech.com/#localbusiness",
        name: "Parther Technologies",
        description:
          "Enterprise software architecture, Agentic Workflows, Headless CMS, and Generative Engine Optimization (GEO) for MSMEs and enterprises in West Bengal, Eastern India.",
        url: "https://parthertech.com",
        telephone: "+91-9432350334",
        priceRange: "₹₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Barrackpore",
          addressRegion: "West Bengal",
          postalCode: "700120",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "22.7667",
          longitude: "88.3833",
        },
        areaServed: [
          "Barrackpore", "Kolkata", "Salt Lake Sector V", "New Town",
          "Dankuni", "Howrah", "Durgapur", "Asansol", "Siliguri",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Enterprise Software & Digital Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom ERP Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Platform Engineering" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generative Engine Optimization (GEO)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agentic Workflow Automation" } },
          ],
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://parthertech.com/#gomytruck",
        name: "GoMyTruck",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        description:
          "Multi-tenant logistics SaaS platform engineered by Parther Technologies. 500+ verified drivers, 2-minute average booking time, driver KYC, real-time fleet tracking.",
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
      <body className="bg-cf-bg text-cf-text min-h-screen flex flex-col">
        <MotionProvider>
          <Navbar />
          <main className="flex-1 mt-[80px]">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
