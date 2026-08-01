import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const services = [
  {
    slug: 'entry-level-websites',
    title: 'Entry-Level Website Projects',
    seoTitle: 'High-Performance Business Websites in Kolkata | Parther Technologies',
    desc: 'Capture high-volume local demand with extremely fast, SEO-optimized, and conversion-focused business websites designed for local MSMEs.',
    content: `We build **sub-2.5s LCP** local business websites designed specifically to capture and convert regional demand.

### Rapid Deployment & Transparent Pricing
Stop waiting months for a static brochure. We deploy highly optimized, mobile-first web assets designed to rank immediately in local search.
*   **Local SEO Benefits:** Deep JSON-LD schema integration for Google Business Profile synergy.
*   **Rapid Timeline:** Deployment within 2-4 weeks.
*   **High Conversion:** Frictionless lead capture forms that guarantee a **8-12% baseline conversion rate**.

> **Business Outcome:** Increase inbound lead volume and dominate local MSME search results.`
  },
  {
    slug: 'business-websites-cms',
    title: 'Business Websites & CMS',
    seoTitle: 'Corporate CMS & Next.js Website Architecture | Parther Technologies',
    desc: 'Mid-market corporate presence powered by headless CMS architectures, delivering perfect Core Web Vitals and infinite marketing agility.',
    content: `We architect corporate digital presences using Headless CMS platforms and Next.js, separating your content layer from the code for maximum agility.

### Content Management Workflows
Empower your marketing directors to publish instantly without breaking the frontend codebase.
*   **Integration Capabilities:** Seamless data flow into CRM and MarTech stacks (Salesforce, HubSpot).
*   **Security Standards:** Zero database exposure on the frontend, eliminating traditional SQL injection risks.
*   **Performance Metrics:** Guaranteed passing scores on all Google Core Web Vitals.

> **Business Outcome:** A highly secure, enterprise-grade digital hub that scales with your content operations.`
  },
  {
    slug: 'ecommerce-architecture',
    title: 'E-commerce Architecture',
    seoTitle: 'Enterprise E-commerce Development & Architecture | Parther Technologies',
    desc: 'Capture retail digital transformation demand with highly scalable, headless e-commerce architectures built for massive traffic spikes.',
    content: `We engineer highly resilient digital retail infrastructure capable of handling festive season scaling and complex ERP integrations.

### Scalable Retail Infrastructure
Stop losing revenue to cart abandonment caused by slow load times. We architect custom, high-velocity storefronts.
*   **Platform Expertise:** Headless Shopify Plus, Magento, and fully custom Next.js Commerce builds.
*   **Payment Gateway Security:** Strict adherence to PCI-DSS compliance frameworks.
*   **ERP Integration Mapping:** Real-time inventory syncing with backend supply chain systems.

> **Business Outcome:** Reduce cart abandonment by up to 15% through sub-second page transitions.`
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    seoTitle: 'Enterprise Mobile App Development (iOS & Android) | Parther Technologies',
    desc: 'Capture iOS, Android, and cross-platform enterprise mobility demand with high-performance native and hybrid applications.',
    content: `We design and deploy enterprise-grade mobile applications tailored for internal workforce automation and consumer engagement.

### Native & Hybrid Analysis
We do not use cookie-cutter templates. We analyze your specific use-case to deploy the exact right technology stack.
*   **Cross-Platform Efficiency:** React Native and Flutter for rapid dual-platform deployment.
*   **Native Performance:** Swift and Kotlin for hardware-intensive requirements.
*   **App Store Deployment:** Full lifecycle management from QA to App Store approval.

> **Business Outcome:** Streamlined internal operations and frictionless mobile consumer touchpoints.`
  },
  {
    slug: 'saas-product-development',
    title: 'SaaS Product Development',
    seoTitle: 'Custom SaaS & Cloud Product Engineering | Parther Technologies',
    desc: 'Target funded startups and enterprises with multi-tenant SaaS architecture design, rapid prototyping, and scalable cloud engineering.',
    content: `We transform concepts into highly scalable, multi-tenant Software-as-a-Service (SaaS) products engineered for rapid Go-To-Market.

### Multi-Tenant Architecture Design
We build products designed to scale from 100 to 1,000,000 concurrent users without catastrophic downtime.
*   **Microservices vs. Monolith:** We strategically decouple services for maximum resilience.
*   **Subscription Billing:** Stripe and Chargebee integrations for complex recurring revenue models.
*   **Rapid Prototyping:** Accelerate time-to-market to secure early-stage funding and user validation.

> **Business Outcome:** A scalable, investable SaaS product with zero technical debt at launch.`
  },
  {
    slug: 'erp-systems',
    title: 'ERP (Enterprise Resource Planning) Systems',
    seoTitle: 'Custom ERP Development & Integration | Parther Technologies',
    desc: 'High-ACV digital transformation for heavy industry and manufacturing. We architect custom ERPs to eliminate fragmented data silos.',
    content: `We build highly customized, cloud-native Enterprise Resource Planning systems that give you real-time visibility into inventory, logistics, and production pipelines.

### Module Breakdown & Architecture
Stop attempting to force a generic ERP to fit your unique factory floor workflows.
*   **Core Modules:** Custom Finance, Supply Chain, Inventory, and HR modules perfectly mapped to your operations.
*   **Legacy System Migration:** Secure data porting from aging on-premise infrastructure.
*   **Data Governance Frameworks:** Strict access controls and audit logging for enterprise compliance.

> **Business Outcome:** Complete operational visibility and the elimination of fragmented spreadsheet data.`
  },
  {
    slug: 'crm',
    title: 'CRM (Customer Relationship Management)',
    seoTitle: 'Custom CRM Development & Sales Enablement | Parther Technologies',
    desc: 'Sales enablement and MarTech integrations. We build custom CRMs and integrate enterprise platforms to accelerate your RevOps.',
    content: `We engineer and integrate custom Customer Relationship Management platforms to align marketing, sales, and revenue operations (RevOps).

### Custom vs. Platform Integration
We analyze your sales cycle to determine if you need a custom build or an enterprise integration.
*   **Enterprise Integration:** Deep API connectivity for Salesforce, HubSpot, and Zoho.
*   **Data Migration Security:** Zero-loss data migration protocols.
*   **Custom Build:** Highly specific workflow automation for complex B2B sales cycles.

> **Business Outcome:** Accelerated sales cycles and complete visibility into your revenue pipeline.`
  },
  {
    slug: 'hrms',
    title: 'HRMS (Human Resource Management Systems)',
    seoTitle: 'Enterprise HRMS & Payroll Automation Software | Parther Technologies',
    desc: 'Operational efficiency for mid-to-large enterprises through custom Human Resource Management Systems and automated payroll.',
    content: `We streamline enterprise human capital management through secure, automated, and compliant HR software platforms.

### HR Automation & Compliance
Reduce administrative overhead by automating core HR workflows.
*   **Payroll Automation:** Complex tax and compliance calculations built into the engine.
*   **Data Privacy:** Strict adherence to GDPR and local data protection regulations.
*   **Employee Self-Service:** Secure portals for leave management, documentation, and onboarding.

> **Business Outcome:** Drastically reduced HR administrative overhead and flawless compliance.`
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation & Integration',
    seoTitle: 'Enterprise AI Automation & LLM Integration | Parther Technologies',
    desc: 'Capitalize on hyper-growth emerging technology demand. We deploy secure, enterprise-grade AI and LLM automations.',
    content: `We deploy highly secure, enterprise-grade Artificial Intelligence solutions that automate complex workflows and augment human intelligence.

### RAG (Retrieval-Augmented Generation) Architectures
Stop relying on generic AI models. We build secure pipelines that allow AI to safely query your proprietary enterprise data.
*   **Data Readiness Assessments:** We structure your messy data silos for AI consumption.
*   **Model Fine-Tuning:** Customizing open-source LLMs (Llama 3, Mistral) for your specific domain.
*   **Security & Hallucination Mitigation:** Strict guardrails to prevent data leakage and ensure factual accuracy.

> **Business Outcome:** Massive operational efficiency gains through safe, proprietary AI automation.`
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    seoTitle: 'Enterprise Digital Transformation Consulting | Parther Technologies',
    desc: 'Top-tier advisory services aligning technology architecture directly to your executive business outcomes and ROI goals.',
    content: `We provide executive-level advisory services, ensuring your technology investments directly drive your business objectives.

### Aligning Tech to Business Outcomes
We do not prescribe technology for the sake of technology. We engineer solutions to solve specific business bottlenecks.
*   **Maturity Assessments:** Deep audits of your current technical debt and operational drag.
*   **Change Management:** Strategies to ensure organization-wide adoption of new digital tools.
*   **ROI Modeling:** Quantifiable projections of efficiency gains and cost reductions.

> **Business Outcome:** A clear, actionable roadmap to modernize operations and increase profitability.`
  },
  {
    slug: 'enterprise-cloud',
    title: 'Enterprise Cloud Consulting & Engineering',
    seoTitle: 'Cloud Migration & Infrastructure Engineering | Parther Technologies',
    desc: 'Infrastructure modernization, cloud migration, and FinOps. We architect resilient, cost-optimized cloud environments.',
    content: `We architect highly resilient, auto-scaling cloud infrastructure to modernize your operations and reduce technical debt.

### Hybrid and Multi-Cloud Strategies
Avoid vendor lock-in and maximize uptime through strategic cloud architecture.
*   **CI/CD Pipeline Automation:** Accelerate deployment velocity with automated testing and integration.
*   **Serverless Architecture:** Event-driven computing to drastically reduce idle server costs.
*   **Cloud Cost Optimization (FinOps):** Continuous auditing to eliminate wasted cloud spend.

> **Business Outcome:** Infinite scalability, 99.99% uptime, and highly optimized infrastructure costs.`
  }
];

const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare & Pharma',
    seoTitle: 'Custom Software & IT for Healthcare & Pharma | Parther Technologies',
    desc: 'Strict data compliance, interoperability, and telemedicine scaling for healthcare networks and pharmaceutical enterprises.',
    content: `The healthcare sector requires absolute precision. We architect digital systems that prioritize data security, patient privacy, and clinical efficiency.

### Data Compliance & Interoperability
We build software that conforms to the strictest global standards.
*   **Compliance:** Strict adherence to HIPAA, GDPR, and local medical data regulations.
*   **Interoperability:** Seamless HL7 and FHIR API integrations with existing Hospital Information Systems (HIS).
*   **Telemedicine Scaling:** Low-latency WebRTC video architectures for remote patient care.

> **Business Outcome:** Secure, compliant, and highly scalable patient care infrastructure.`
  },
  {
    slug: 'education',
    title: 'Education & EdTech',
    seoTitle: 'EdTech Software Development & LMS Architecture | Parther Technologies',
    desc: 'Scaling concurrent users during peak loads and building resilient remote learning management systems (LMS) for educational institutions.',
    content: `We engineer highly resilient digital infrastructure for educational institutions and EdTech startups.

### LMS Architecture & Load Scaling
Stop catastrophic crashes during exam seasons. We build for massive concurrent usage.
*   **Concurrent Scaling:** Auto-scaling serverless architectures capable of handling 100k+ simultaneous users.
*   **Custom LMS:** Gamified, highly interactive Learning Management Systems.
*   **Video Delivery:** Optimized CDN routing for buffer-free remote learning streams.

> **Business Outcome:** A flawless digital learning experience with zero downtime during peak loads.`
  },
  {
    slug: 'ecommerce-retail',
    title: 'E-commerce & Retail',
    seoTitle: 'Digital Transformation for Retail & E-commerce | Parther Technologies',
    desc: 'Resolve high cart abandonment, inventory misalignment, and slow frontend performance for massive retail networks.',
    content: `We modernize retail infrastructure to handle extreme traffic velocity and complex omnichannel supply chains.

### High-Velocity Retail Architecture
We eliminate the technical bottlenecks that cost you revenue.
*   **Frontend Performance:** Sub-second LCP (Largest Contentful Paint) optimizations to drive conversion rates.
*   **AI Recommendations:** Machine learning models that increase Average Order Value (AOV).
*   **Omnichannel Sync:** Real-time inventory reconciliation across physical stores and digital storefronts.

> **Business Outcome:** Increased conversion rates, higher AOV, and flawless inventory management.`
  },
  {
    slug: 'fintech',
    title: 'FinTech & BFSI',
    seoTitle: 'Software Engineering for FinTech & BFSI | Parther Technologies',
    desc: 'Legacy mainframe modernization, rigorous cybersecurity mandates, and zero-trust requirements for the financial sector.',
    content: `We engineer mission-critical financial software that operates under absolute security and zero-trust architectures.

### Legacy Modernization & Zero-Trust
We safely migrate banking and financial systems away from fragile legacy mainframes.
*   **Cybersecurity Mandates:** Strict OWASP top 10 compliance and zero-trust networking.
*   **High-Frequency APIs:** Low-latency data pipelines for real-time financial transactions.
*   **Regulatory Compliance:** Audit-ready logging and secure data encryption at rest and in transit.

> **Business Outcome:** Extremely secure, modernized financial infrastructure immune to legacy vulnerabilities.`
  }
];

const locations = [
  {
    slug: 'bengal-silicon-valley',
    title: 'Bengal Silicon Valley Tech Hub',
    seoTitle: 'Enterprise IT Services in Bengal Silicon Valley | Parther Technologies',
    desc: 'We architect custom enterprise software and deploy GEO strategies tailored exclusively to the tech-forward startups in New Town.',
    content: `Stop adapting your business to off-the-shelf software. We engineer digital infrastructure that gives you complete data sovereignty and infinite scalability specifically for the Bengal Silicon Valley ecosystem in New Town.

### Cutting-Edge SaaS & AI Architecture
We design unified, secure, cloud-native operational software to accelerate your Go-To-Market. Engineered specifically for the fast-paced development cycles native to funded startups and R&D institutions.

### Generative Engine Optimization (GEO)
If ChatGPT doesn't know you, your future clients won't either. Traditional SEO is dead. We construct deep JSON-LD schema networks so AI engines cite you as the definitive tech authority in New Town.`
  },
  {
    slug: 'durgapur-asansol',
    title: 'Durgapur & Asansol Industrial Belt',
    seoTitle: 'Custom ERP & Manufacturing IT in Durgapur | Parther Technologies',
    desc: 'We architect custom ERP systems and IT infrastructure tailored exclusively to the heavy industry and mining sectors of Durgapur and Asansol.',
    content: `Stop adapting your factory to generic software. We engineer digital infrastructure that gives you complete operational visibility and infinite scalability specifically for the Durgapur industrial belt.

### Heavy Industry ERP & Modernization
We design unified, secure, cloud-native operational software to replace fragmented supply chain spreadsheets. Engineered specifically for the complex logistics and manufacturing workflows native to Asansol and Durgapur.

### Generative Engine Optimization (GEO)
Traditional B2B procurement is changing. We construct deep JSON-LD schema networks so AI engines cite you as the definitive industrial authority in the region.`
  },
  {
    slug: 'siliguri',
    title: 'Siliguri IT & Logistics Hub',
    seoTitle: 'IT Services & E-commerce Software in Siliguri | Parther Technologies',
    desc: 'We architect custom software and e-commerce platforms tailored exclusively to the massive logistics and retail demands of Siliguri.',
    content: `Stop adapting your business to off-the-shelf software. We engineer digital infrastructure that gives you complete data sovereignty and infinite scalability specifically for Siliguri's rapidly expanding commercial sector.

### Logistics Automation & E-commerce
We design unified, secure, cloud-native operational software to accelerate your supply chain. Engineered specifically for the complex logistics and retail workflows native to Siliguri.

### Generative Engine Optimization (GEO)
If ChatGPT doesn't know you, your future clients won't either. Traditional SEO is dead. We construct deep JSON-LD schema networks so AI engines cite you as the definitive regional authority in North Bengal.`
  }
];

const writeMdx = (collection, item) => {
  const dir = path.join(contentDir, collection);
  ensureDir(dir);
  const filePath = path.join(dir, item.slug + '.mdx');
  
  if (fs.existsSync(filePath)) {
    console.log('Skipping ' + filePath + ' - already exists');
    return;
  }

  const content = '---\n' +
    'title: "' + item.title + '"\n' +
    'description: "' + item.desc + '"\n' +
    'seoTitle: "' + item.seoTitle + '"\n' +
    'seoDescription: "' + item.desc + '"\n' +
    '---\n\n' +
    item.content + '\n';

  fs.writeFileSync(filePath, content);
  console.log('Generated ' + filePath);
};

console.log('Starting mass MDX generation...');
services.forEach(s => writeMdx('services', s));
industries.forEach(i => writeMdx('industries', i));
locations.forEach(l => writeMdx('locations', l));
console.log('Complete!');
