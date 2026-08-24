export const experiencePage = {
  sectionNumber: "04",
  sectionLabel: "EXPERIENCE",
  headline: "FROM PRECISION TO PRODUCT.",
  supporting:
    "My career evolved through different forms of visual problem-solving — from technical drawings and visual design to digital interfaces, enterprise products, and design leadership.",
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
    body: "Each role expanded how I think, design, and solve product problems.",
    cards: [
      {
        icon: "geometry",
        inset: "12.5% 16.67%",
        title: "PRECISION",
        body: "Detail, Structure and Accuracy",
      },
      {
        icon: "eye-check",
        inset: "25% 12.5% 12.5% 12.5%",
        title: "Visual Clarity",
        body: "Communication, Hierarchy and Focus",
      },
      {
        icon: "packages",
        inset: "8.33%",
        title: "System Thinking",
        body: "Scale, Patterns and long-term impact.",
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
        tools: [
          {
            name: "FIGMA",
            body: "Advanced variable modes, tokens mapping, and enterprise component architecture.",
          },
          {
            name: "FIGJAM",
            body: "Interactive brainstorming, stakeholder journey flows, and discovery coordination.",
          },
          {
            name: "MIRO",
            body: "Collaborative service maps and user-journey workshop mapping.",
          },
        ],
        note: undefined,
      },
      {
        title: "AI-ASSISTED DESIGN",
        tools: [
          {
            name: "CLAUDE / CHATGPT",
            body: "Writing design systems guidelines, accessibility copies, and testing scenarios.",
          },
          {
            name: "CURSOR / FIGMA AI",
            body: "Rapid structural prototyping, token parsing, and layout translation.",
          },
        ],
        note: "AI does not replace design judgment. It reduces repetitive effort and expands exploration.",
      },
      {
        title: "CREATIVE & CODING",
        tools: [
          {
            name: "ADOBE CREATIVE SUITE",
            body: "Advanced vector work, custom vector assets, and visual processing.",
          },
          {
            name: "FRAMER",
            body: "Interactive code prototypes and front-of-funnel production sites.",
          },
          {
            name: "CORELDRAW",
            body: "Legacy vector mechanics, CAD translation, and structural illustration.",
          },
        ],
        note: undefined,
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

export const experienceRoles = [
  {
    duration: "NOV 2024— AUG 2026",
    phase: "ACTIVE PEAK",
    category: "PRODUCT STRATEGY — DESIGN SYSTEMS — DELIVERY",
    role: "ASSOCIATE LEAD UX/UI DESIGNER",
    focus: "Product Design · Design Systems · Team Leadership",
    focusAccent: true,
    description:
      "Took increasing ownership of complex product experiences and supported teams through design execution, collaboration, and design quality.",
    bullets: [
      "Enterprise UX strategy & discovery",
      "SaaS and complex workflow design",
      "Design systems and token governance",
      "Multi-role experience and access flows",
      "Mentoring designers and delivery ownership",
      "Stakeholder collaboration and alignment",
      "User flows and information architecture",
      "AI-assisted design workflows",
    ],
    stack: "FIGMA · FIGJAM · CLAUDE · CURSOR · JIRA · GITHUB",
    stackAccent: true,
    quote: undefined,
    callout: undefined,
    footnote: undefined,
  },
  {
    duration: "OCT 2019 — OCT 2024",
    phase: "ENTERPRISE",
    category: "ENTERPRISE PRODUCTS — COMPLEX SYSTEMS",
    role: "SENIOR UX/UI DESIGNER",
    focus: "Enterprise UX · SaaS Platforms · Complex Workflows",
    focusAccent: false,
    description:
      "Took ownership of complex enterprise experiences, translating heavy data-dense processes into intuitive web applications. Designed workflows for financial decisioning, environmental telemetry, and real-time operations, establishing design-to-development system guidelines.",
    bullets: [
      "Enterprise UX and SaaS refinement",
      "Multi-role workflows and access flows",
      "Complex workflow and telemetry UI",
      "User flows and information architecture",
    ],
    stack: "FIGMA · FIGJAM · MIRO · ADOBE CREATIVE SUITE",
    stackAccent: false,
    quote: undefined,
    callout: undefined,
    footnote: undefined,
  },
  {
    duration: "NOV 2017—SEP 2019",
    phase: "TRANSITION",
    category: "DIGITAL PRODUCTS — USER EXPERIENCE",
    role: "UI/UX DESIGNER",
    focus: "Mobile UX · User Flows · Prototyping",
    focusAccent: false,
    description:
      "My work expanded into digital interfaces and user experience, with increasing focus on flows, interface structure, navigation, and how users complete tasks within a product.",
    bullets: [
      "Information architecture and navigation",
      "Interface structure and wireframing",
      "Mobile design usability testing",
      "High-fidelity clickable previews",
    ],
    stack: "FIGMA · SKETCH · ADOBE XD · INVISION",
    stackAccent: false,
    quote: '"The focus shifted from how a product looks to how a product works."',
    callout: undefined,
    footnote: undefined,
  },
  {
    duration: "MAY 2015 — NOV 2017",
    phase: "COMMERCIAL",
    category: "VISUAL COMMUNICATION — COMMERCIAL DESIGN",
    role: "VISUAL DESIGNER",
    focus: "COUPONBUY · Brand Assets · Graphic Systems",
    focusAccent: false,
    description:
      "Worked on visual design requirements across client projects, creating digital assets and creative materials using Adobe Illustrator, Photoshop, and CorelDRAW. The work expanded from technical illustration into broader commercial visual communication.",
    bullets: [],
    stack: "ADOBE ILLUSTRATOR · PHOTOSHOP · CORELDRAW",
    stackAccent: false,
    quote: undefined,
    callout: "THE SHIFT: FROM DESIGNING ASSETS TO DESIGNING EXPERIENCES.",
    footnote: undefined,
  },
  {
    duration: "SEP 2012 — DEC 2014",
    phase: "FOUNDATION",
    category: "EARLY CAREER — TECHNICAL VISUALIZATION",
    role: "TECHNICAL DRAWING ANALYST",
    focus: "PATENT DRAWINGS · TECHNICAL ILLUSTRATION · VISUAL ACCURACY",
    focusAccent: false,
    description:
      "Created technical and patent drawings that required careful interpretation of detailed reference material and precise visual execution. The work built a strong foundation in accuracy, consistency, and structured visual communication.",
    bullets: [],
    stack: "CORELDRAW · ADOBE ILLUSTRATOR · VECTOR ENGINE",
    stackAccent: false,
    quote: undefined,
    callout: undefined,
    footnote:
      "Also supported selected graphic design requirements including flyers, logos, and print-based materials.",
  },
] as const;
