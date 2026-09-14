export interface Service {
  id: string;
  name: string;
  shortName: string;
  category: string;
}

export const SERVICES: Service[] = [
  {
    "id": "ai-development",
    "name": "AI Agents & Automation",
    "shortName": "AI Agents",
    "category": "ai-engineering"
  },
  {
    "id": "custom-software-development",
    "name": "Custom Software Development",
    "shortName": "Custom Software",
    "category": "software-engineering"
  },
  {
    "id": "mobile-app-development",
    "name": "Mobile App Development",
    "shortName": "App Development",
    "category": "mobile-engineering"
  },
  {
    "id": "saas-development",
    "name": "SaaS Application Development",
    "shortName": "SaaS Dev",
    "category": "software-engineering"
  },
  {
    "id": "mvp-development",
    "name": "Startup MVP Development",
    "shortName": "MVP Dev",
    "category": "startup-engineering"
  },
  {
    "id": "cybersecurity-audits",
    "name": "Cybersecurity & Cloud Security",
    "shortName": "Security Audits",
    "category": "security"
  },
  {
    "id": "web-app-development",
    "name": "Web Application Development",
    "shortName": "Web Apps",
    "category": "software-engineering"
  },
  {
    "id": "dedicated-development-teams",
    "name": "Dedicated Offshore Teams",
    "shortName": "Dedicated Teams",
    "category": "offshore"
  },
  {
    "id": "cloud-architecture",
    "name": "Cloud Architecture & DevOps",
    "shortName": "Cloud Architecture",
    "category": "devops"
  },
  {
    "id": "enterprise-erp-development",
    "name": "Enterprise ERP Solutions",
    "shortName": "ERP Dev",
    "category": "enterprise"
  }
];
