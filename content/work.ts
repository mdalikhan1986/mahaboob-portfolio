export const workPage = {
  sectionNumber: "03",
  sectionLabel: "CASE STUDIES",
  headline: ["SELECTED WORK.", "COMPLEX PRODUCTS.", "CLEARER SYSTEMS."],
  supporting:
    "A selection of enterprise SaaS platforms, mobile experiences, and design systems focused on simplifying complex workflows, improving operational clarity, and creating scalable product foundations.",
  selectedHeading: "SELECTED PROJECTS",
  marketEyebrow: "SELECTED MOBILE PRODUCTS",
  marketHeading: "PRODUCTS IN THE MARKET.",
  marketSupporting:
    "A selection of mobile products I have designed for real-world users and workflows.",
  nextEyebrow: "04 - NEXT",
  nextTitle: "SYSTEMS",
  nextBody:
    "Explore the scalable foundations, design tokens, components, and patterns behind my product work.",
  footer: {
    back: "← ABOUT",
    backHref: "/about",
    top: "BACK TO TOP ↑",
    next: "NEXT → SYSTEMS",
    nextHref: "/systems",
  },
} as const;

export const selectedProjects = [
  {
    index: "01",
    category: "EQUIPMENT FINANCING SAAS",
    title: "FINQUIP",
    description:
      "A multi-tenant SaaS platform designed to streamline equipment financing workflows, connecting sales teams with centralized decision-making and risk evaluation.",
    tags: "ENTERPRISE SAAS · MULTI-ROLE WORKFLOWS · FINANCIAL SERVICES",
    cta: "VIEW PROJECT",
    href: "/work/finquip",
  },
  {
    index: "02",
    category: "ENVIRONMENTAL MONITORING PLATFORM",
    title: "HYDROGROW",
    description:
      "A multi-module SaaS platform for monitoring aquatic systems, hydroponic farms, and air-quality environments across distributed locations.",
    tags: "MULTI-TENANT SAAS · MONITORING SYSTEMS · ROLE-BASED EXPERIENCE",
    cta: "VIEW PROJECT",
    href: "/work/hydrogrow",
  },
  {
    index: "03",
    category: "MOBILE PRODUCT EXPERIENCE",
    title: "INTERPRETER",
    description:
      "A unified mobile experience that brings interpreter job management, real-time interpretation services, and operational workflows into one connected application.",
    tags: "MOBILE UX · COMPLEX WORKFLOWS · SERVICE EXPERIENCE",
    cta: "VIEW PROJECT",
    href: "/work/interpreter",
  },
  {
    index: "04",
    category: "DESIGN SYSTEM",
    title: "SCALABLE DESIGN SYSTEM",
    description:
      "A token-based enterprise design system created to improve consistency, accelerate delivery, and provide reusable foundations across complex digital products.",
    tags: "DESIGN TOKENS · COMPONENT LIBRARY · SCALABLE SYSTEMS",
    cta: "VIEW PROJECT",
    href: "/work/design-system",
  },
] as const;

export const marketProducts = [
  {
    index: "01",
    title: "INSIGHT MOBILE APPLICATION",
    platform: "ANDROID APP",
    cta: "VIEW ON GOOGLE PLAY →",
    href: "https://play.google.com/store/apps/details?id=apgovt.samplecollector.prod&hl=en",
    ctaLabel:
      "View Insight Mobile Application on Google Play (opens in a new tab)",
  },
  {
    index: "02",
    title: "SYNGENTA SUMRIDHI",
    platform: "ANDROID APP",
    cta: "VIEW ON GOOGLE PLAY →",
    href: "https://play.google.com/store/search?q=syngenta+samruddhi+app&c=apps&hl=en",
    ctaLabel: "View Syngenta Sumridhi on Google Play (opens in a new tab)",
  },
  {
    index: "03",
    title: "DISHA MOBILE APPLICATION",
    platform: "ANDROID APP",
    cta: "VIEW ON GOOGLE PLAY →",
    href: "https://play.google.com/store/apps/details?id=com.sudinsurance&hl=en",
    ctaLabel:
      "View Disha Mobile Application on Google Play (opens in a new tab)",
  },
] as const;
