export const experiencePage = {
  sectionNumber: "04",
  sectionLabel: "EXPERIENCE",
  headline: "FROM PRECISION TO PRODUCT.",
  supporting:
    "Senior product designer focused on complex enterprise SaaS, scalable design systems, and workflows that turn operational complexity into usable products.",
  heroIllustration: {
    src: "/images/experience/hero-illustration.svg",
    width: 623,
    height: 260,
  },
  disciplinesEyebrow: "A CAREER BUILT THROUGH EVOLVING DESIGN DISCIPLINES",
  disciplines: [
    { label: "TECHNICAL VISUALIZATION", current: false },
    { label: "VISUAL DESIGN", current: false },
    { label: "UI/UX DESIGN", current: false },
    { label: "PRODUCT DESIGN", current: false },
    { label: "DESIGN LEADERSHIP", current: true },
  ],
  foundation: {
    number: "01",
    label: "FOUNDATION",
    heading: "EVERY ROLE BUILT THE NEXT.",
    body: "Each stage expanded how I think, design, and solve product problems.",
    cards: [
      {
        icon: "geometry",
        inset: "12.5% 16.67%",
        title: "PRECISION",
        body: "Technical Visualization",
      },
      {
        icon: "eye-check",
        inset: "25% 12.5% 12.5% 12.5%",
        title: "VISUAL CLARITY",
        body: "Visual Design",
      },
      {
        icon: "packages",
        inset: "8.33%",
        title: "SYSTEM THINKING",
        body: "Product Design",
      },
    ],
  },
  timeline: {
    number: "02",
    label: "CAREER TIMELINE",
    heading: "THE WORK EVOLVED.",
  },
  toolkit: {
    number: "03",
    label: "TOOLKIT",
    heading: "THE TOOL IS NOT THE LIMIT.",
    body: "Tools change. The underlying design process does not. I use the tools that best support the problem, the team, and the workflow.",
    columns: [
      {
        title: "PRIMARY UX CORE",
        tools: ["FIGMA", "FIGJAM", "MIRO", "FRAMER", "SKETCH"],
      },
      {
        title: "AI-ASSISTED DESIGN",
        tools: [
          "CLAUDE / CHATGPT",
          "CURSOR / FIGMA AI",
          "AI-ASSISTED RESEARCH",
          "AI-ASSISTED WIREFRAMING",
          "AI-ASSISTED PROTOTYPING",
        ],
      },
      {
        title: "CREATIVE & CODING",
        tools: [
          "ADOBE CREATIVE SUITE",
          "HTML/CSS KNOWLEDGE",
          "CORELDRAW",
        ],
      },
    ],
  },
  next: {
    eyebrow: "05 - NEXT",
    title: "LET'S BUILD SOMETHING USEFUL.",
    body: "Have a complex product, workflow, or design challenge? Let's talk and create something structured together.",
  },
  footer: {
    back: "← SYSTEMS",
    backHref: "/systems",
    top: "BACK TO TOP ↑",
    next: "CONTACT →",
  },
} as const;

export type ExperienceRole = {
  duration: string;
  phase: string;
  category: string;
  role: string;
  description: string;
  bullets: readonly string[];
  emphasis: "lead" | "standard" | "compact";
};

export type ExperienceCompany = {
  name: string;
  tenure: string;
  badge?: string;
  scope?: {
    title: string;
    domainsLabel: string;
    domains: string;
    complexityLabel: string;
    complexity: string;
  };
  roles: readonly ExperienceRole[];
};

export const experienceCompanies: readonly ExperienceCompany[] = [
  {
    name: "PURPLETALK INDIA PVT LTD",
    tenure: "NOV 2017 — AUG 2026",
    badge: "~8+ years of continuous growth",
    scope: {
      title: "PURPLETALK PRODUCT SCOPE",
      domainsLabel: "DOMAINS",
      domains:
        "Insurance · FinTech · Equipment Financing · Agriculture · Maritime",
      complexityLabel: "PRODUCT COMPLEXITY",
      complexity:
        "Enterprise SaaS · Complex workflows · Data-heavy products · Multi-role applications · Web & mobile · Design systems · WCAG 2.1 accessibility",
    },
    roles: [
      {
        duration: "NOV 2024 — AUG 2026",
        phase: "ACTIVE PEAK",
        category:
          "PRODUCT STRATEGY · DESIGN SYSTEMS · DELIVERY · TEAM LEADERSHIP",
        role: "ASSOCIATE LEAD UX/UI DESIGNER",
        description:
          "Led end-to-end UX/UI design for complex enterprise SaaS platforms and workflow-driven products, taking increasing ownership across product strategy, design execution, scalable systems, and design quality.",
        bullets: [
          "Enterprise UX strategy and discovery",
          "SaaS and complex workflow design",
          "Design systems and token governance",
          "User flows and information architecture",
          "Mentoring designers and delivery ownership",
          "Stakeholder collaboration and alignment",
        ],
        emphasis: "lead",
      },
      {
        duration: "OCT 2019 — OCT 2024",
        phase: "ENTERPRISE",
        category: "ENTERPRISE UX · SAAS PLATFORMS · COMPLEX WORKFLOWS",
        role: "SENIOR UX/UI DESIGNER",
        description:
          "Designed enterprise product experiences across complex workflows, dashboards, multi-role systems, and responsive web and mobile applications.",
        bullets: [
          "Complex user flows and information architecture",
          "Enterprise SaaS and workflow design",
          "Dashboards and data-heavy interfaces",
          "Responsive product experiences",
          "Cross-functional collaboration",
        ],
        emphasis: "standard",
      },
      {
        duration: "NOV 2017 — SEP 2019",
        phase: "TRANSITION",
        category: "DIGITAL PRODUCTS · USER EXPERIENCE",
        role: "UI/UX DESIGNER",
        description:
          "Built practical UX foundations through research, stakeholder collaboration, user flows, interface design, and product delivery.",
        bullets: [],
        emphasis: "compact",
      },
    ],
  },
  {
    name: "COUPONBUY INC",
    tenure: "MAY 2015 — OCT 2017",
    roles: [
      {
        duration: "MAY 2015 — OCT 2017",
        phase: "COMMERCIAL",
        category:
          "DIGITAL EXPERIENCES · VISUAL COMMUNICATION · USER-FOCUSED DESIGN",
        role: "VISUAL DESIGNER",
        description:
          "Created visually engaging digital and print experiences while working closely with stakeholders to refine designs around user needs and business goals.",
        bullets: [
          "Digital and visual design",
          "User-focused communication",
          "Stakeholder collaboration",
          "Production-ready design assets",
        ],
        emphasis: "compact",
      },
    ],
  },
  {
    name: "LEGAL ADVANTAGE PVT LTD",
    tenure: "SEP 2012 — DEC 2014",
    roles: [
      {
        duration: "SEP 2012 — DEC 2014",
        phase: "FOUNDATION",
        category: "PRECISION · VISUAL COMMUNICATION · BRAND CONSISTENCY",
        role: "GRAPHIC DESIGNER",
        description:
          "Built a foundation in structured visual communication by designing digital and print materials with attention to detail, brand consistency, and production quality.",
        bullets: [
          "Brand and visual communication",
          "Logos and brochures",
          "Digital and print materials",
          "Collaboration with senior designers and marketing teams",
        ],
        emphasis: "compact",
      },
    ],
  },
];
