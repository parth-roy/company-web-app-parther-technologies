import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affordable Website & App Development Pricing in West Bengal',
  description: 'Budget-friendly website development under ₹5000, eCommerce under ₹11000. Serving Kolkata, Barrackpore, Salt Lake, Dankuni, Titagarh, Kharagpur, and Medinipur.',
  keywords: 'affordable website development Kolkata, website under 5000, ecommerce website under 10000, app development under 15000, budget web designers Barrackpore, Salt Lake web development cost, Titagarh, Kharagpur, Medinipur, Dankuni, West Bengal website cost',
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Budget-Friendly Website & App Development Pricing in West Bengal",
  "description": "Transparent pricing for web development, eCommerce, and mobile apps in Kolkata, Barrackpore, Salt Lake, Dankuni, Titagarh, Kharagpur, and Medinipur.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Standard Business Website",
        "description": "Professional 5-page business website designed for startups and local businesses.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "4999",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "areaServed": ["West Bengal", "Kolkata", "Barrackpore", "Salt Lake", "Dankuni", "Titagarh", "Kharagpur", "Medinipur"]
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Full E-commerce Website",
        "description": "Complete online store with payment gateway integration, product management, and cart functionality.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "10999",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "areaServed": ["West Bengal", "Kolkata", "Barrackpore", "Salt Lake", "Dankuni", "Titagarh", "Kharagpur", "Medinipur"]
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Mobile App & Web Ecosystem",
        "description": "Custom Android/iOS mobile application paired with a robust administrative web dashboard.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "15999",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "areaServed": ["West Bengal", "Kolkata", "Barrackpore", "Salt Lake", "Dankuni", "Titagarh", "Kharagpur", "Medinipur"]
        }
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Parther Technologies",
  "description": "Providing the most affordable and budget-friendly website and app development services across West Bengal.",
  "priceRange": "₹4999 - ₹15999",
  "areaServed": [
    { "@type": "City", "name": "Kolkata" },
    { "@type": "City", "name": "Barrackpore" },
    { "@type": "City", "name": "Salt Lake" },
    { "@type": "City", "name": "Dankuni" },
    { "@type": "City", "name": "Titagarh" },
    { "@type": "City", "name": "Kharagpur" },
    { "@type": "City", "name": "Medinipur" }
  ]
};

const tiers = [
  {
    label: "Business Website",
    tagline: "Standard Corporate Site",
    descriptor: "Perfect for local businesses needing a professional digital presence fast.",
    range: "₹4,999 - ₹5,999",
    highlight: false,
    cta: "Start Your Website",
    ctaHref: "/contact",
    capabilities: [
      "Responsive 5-Page Design",
      "Mobile-Friendly Layout",
      "Contact Form Integration",
      "Basic SEO Setup",
      "Fast Delivery",
    ],
    note: "Budget-friendly solution under ₹6000.",
  },
  {
    label: "E-Commerce",
    tagline: "Full Online Store",
    descriptor: "Start selling online with a complete, secure e-commerce platform.",
    range: "₹10,999",
    highlight: true,
    cta: "Launch Your Store",
    ctaHref: "/contact",
    capabilities: [
      "Unlimited Products Setup",
      "Secure Payment Gateway",
      "Shopping Cart & Checkout",
      "Inventory Management",
      "Order Tracking System",
      "Mobile Optimized Store",
    ],
    note: "Complete e-commerce store under ₹11000.",
  },
  {
    label: "Mobile App",
    tagline: "App + Web Dashboard",
    descriptor: "Custom mobile applications for Android/iOS with full backend control.",
    range: "₹11,999 - ₹15,999",
    highlight: false,
    cta: "Build Your App",
    ctaHref: "/contact",
    capabilities: [
      "Android / iOS Application",
      "Admin Web Dashboard",
      "User Authentication",
      "Push Notifications",
      "API Integrations",
    ],
    note: "Full mobile ecosystem under ₹16000.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f0]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="canonical" href="https://parthertech.com/pricing" />
      </head>

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container-main text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-white text-xs font-mono-caps font-semibold text-blue-600 tracking-widest uppercase shadow-sm">
            West Bengal's Most Affordable Tech Partner
          </span>
          <h1 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight text-cf-text mb-6 leading-tight">
            Transparent, Budget-Friendly Pricing
          </h1>
          <p className="text-lg text-cf-text-secondary leading-relaxed mb-6 font-medium">
            Are you searching for a <strong>website under 5000</strong> or an <strong>e-commerce store under 10000</strong>? 
            Parther Technologies offers the most competitive pricing across West Bengal. 
          </p>
          <p className="text-sm text-cf-text-tertiary max-w-2xl mx-auto mb-10">
            Proudly serving businesses locally in <strong>Kolkata, Barrackpore, Salt Lake, Dankuni, Titagarh, Kharagpur, and Medinipur</strong>.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-cf-text text-white font-syncopate font-bold text-sm tracking-widest hover:bg-cf-text/80 transition-colors duration-200 shadow-lg"
          >
            GET A FREE QUOTE TODAY →
          </Link>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-12 pb-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`relative flex flex-col rounded-xl p-8 border ${
                  tier.highlight
                    ? "bg-[#0A0A0A] text-white border-transparent shadow-2xl lg:-translate-y-4"
                    : "bg-white text-cf-text border-cf-border"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase font-mono-caps ${
                      tier.highlight ? "text-blue-400" : "text-blue-500"
                    }`}
                  >
                    {tier.label}
                  </span>
                  <h2
                    className={`font-syncopate font-bold text-2xl mt-2 mb-2 ${
                      tier.highlight ? "text-white" : "text-cf-text"
                    }`}
                  >
                    {tier.tagline}
                  </h2>
                  <p
                    className={`text-sm leading-relaxed pb-5 mb-5 border-b ${
                      tier.highlight
                        ? "text-white/50 border-white/10"
                        : "text-cf-text-secondary border-cf-border"
                    }`}
                  >
                    {tier.descriptor}
                  </p>
                  <div
                    className={`inline-flex items-center gap-2 text-xl font-syncopate font-bold px-4 py-2 rounded-lg border mb-6 ${
                      tier.highlight
                        ? "border-blue-500/40 text-blue-400 bg-blue-500/10"
                        : "border-green-500/40 text-green-600 bg-green-50"
                    }`}
                  >
                    {tier.range}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className={`flex items-start gap-2.5 text-sm font-medium ${
                        tier.highlight ? "text-white/80" : "text-cf-text-secondary"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          tier.highlight ? "text-blue-400" : "text-green-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>

                <p
                  className={`text-xs leading-relaxed mb-5 font-bold text-center ${
                    tier.highlight ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {tier.note}
                </p>

                <Link
                  href={tier.ctaHref}
                  className={`block text-center px-6 py-3.5 font-syncopate font-bold text-sm tracking-widest transition-colors duration-200 ${
                    tier.highlight
                      ? "bg-blue-500 text-white hover:bg-blue-400"
                      : "border-2 border-cf-text text-cf-text hover:bg-cf-text hover:text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Geographic Footer Block */}
      <section className="bg-cf-card py-16 border-t border-cf-border/50">
        <div className="container-main max-w-4xl mx-auto text-center">
          <h2 className="font-syncopate font-bold text-2xl text-cf-text mb-4">
            Serving All of West Bengal
          </h2>
          <p className="text-cf-text-secondary leading-relaxed mb-8">
            Whether you are a startup in <strong>Kolkata</strong> or <strong>Salt Lake</strong>, an industrial 
            unit in <strong>Dankuni</strong> or <strong>Titagarh</strong>, or a growing business in <strong>Kharagpur</strong>, 
            <strong> Medinipur</strong>, or our headquarters in <strong>Barrackpore</strong>, we provide immediate local support 
            at the most affordable prices in the state. 
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Website under 5000", "Ecommerce under 10000", "App under 15000", "Budget web developers Kolkata"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-cf-border rounded-full text-xs text-cf-text-tertiary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
