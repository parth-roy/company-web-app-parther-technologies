import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parther Technologies | Enterprise Software & Digital Transformation in West Bengal",
  description: "Parther Technologies is a leading B2B digital growth platform offering custom SaaS, ERP integrations, and Generative Engine Optimization (GEO) in Eastern India.",
  openGraph: {
    title: "Parther Technologies | Digital Transformation & SaaS",
    description: "Accelerate your business with enterprise software solutions built for the West Bengal industrial corridors.",
    url: "https://parthertech.com",
    siteName: "Parther Technologies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parther Technologies",
    description: "Custom software and digital transformation in Eastern India.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global Organization & LocalBusiness Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://parthertech.com/#organization",
        "name": "Parther Technologies",
        "url": "https://parthertech.com",
        "logo": "https://parthertech.com/logo.png"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://parthertech.com/#localbusiness",
        "name": "Parther Technologies",
        "description": "B2B digital growth platform and software development agency in West Bengal.",
        "url": "https://parthertech.com",
        "telephone": "+91-XXXXXXXXXX",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://parthertech.com/#software",
        "name": "Parther Custom ERP",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
