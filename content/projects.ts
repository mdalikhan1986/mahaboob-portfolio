export type ProjectNavLink = {
  label: string;
  href?: string;
  tone?: "primary";
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  role: string;
  platform: string;
  users: string;
  pdfSrc: string;
  pdfDownloadName: string;
  pdfLabel: string;
  overview: string;
  challengeIntro: string;
  challengeBullets: readonly string[];
  solutionIntro: string;
  solutionBullets: readonly string[];
  decisions: readonly { numeral: string; title: string; body: string }[];
  contribution: readonly string[];
  outcomeIntro: readonly string[];
  outcomeBullets?: readonly string[];
  prev: ProjectNavLink;
  next: ProjectNavLink;
};

export const projects: readonly ProjectCaseStudy[] = [
  {
    slug: "finquip",
    title: "FINQUIP",
    eyebrow: "01 - EQUIPMENT FINANCING SAAS",
    summary:
      "A multi-tenant SaaS platform designed to streamline equipment financing workflows, connecting sales teams with centralized decision-making and risk evaluation.",
    description:
      "A multi-tenant SaaS platform designed to streamline equipment financing workflows, connecting sales teams with centralized decision-making and risk evaluation.",
    role: "Lead UX/UI Designer",
    platform: "Enterprise SaaS · Web",
    users: "Sales Representatives · Operations · Risk Officers",
    pdfSrc: "/documents/finquip-case-study.pdf",
    pdfDownloadName: "finquip-case-study.pdf",
    pdfLabel: "FINQUIP_CASE_STUDY.PDF",
    overview:
      "Finquip simplifies complex industrial equipment financing workflows. The platform brings together application management, underwriting, approval processes, and operational visibility into a more structured experience.",
    challengeIntro:
      "Industrial equipment financing involved fragmented workflows, disconnected information, and delays across multiple teams.",
    challengeBullets: [
      "Manual underwriting could take up to 72 hours per application.",
      "Inconsistent pricing information created back-and-forth between dealerships and banks.",
      "Limited tenant isolation made it difficult to support white-label financial organizations.",
    ],
    solutionIntro:
      "I designed a centralized multi-tenant SaaS platform that brought sales teams, operations teams, and risk stakeholders into one connected workflow.",
    solutionBullets: [
      "Role-based experiences",
      "Centralized application visibility",
      "Structured approval workflows",
      "Scalable foundations for multiple financial organizations",
    ],
    decisions: [
      {
        numeral: "I",
        title: "Multi-tenant Architecture",
        body: "Created a scalable structure that allows multiple financial organizations to operate independently while supporting customized branding and workflows.",
      },
      {
        numeral: "II",
        title: "Role-based Workflows",
        body: "Designed experiences around the responsibilities, information needs, and permissions of different user roles.",
      },
      {
        numeral: "III",
        title: "Centralized Visibility",
        body: "Brought applications, action items, approval progress, and risk indicators into a unified operational view.",
      },
      {
        numeral: "IV",
        title: "Scalable Design Foundations",
        body: "Established reusable patterns and consistent interaction structures to support future growth.",
      },
    ],
    contribution: [
      "UX Strategy",
      "User Flows",
      "Information Architecture",
      "Interaction Design",
      "High-Fidelity UI Design",
      "Component Library",
      "Clickable Prototypes",
    ],
    outcomeIntro: [
      "The redesigned platform created a more centralized workflow for managing equipment financing applications, approvals, and risk evaluation.",
      "The experience improved:",
    ],
    outcomeBullets: [
      "Visibility across application progress",
      "Coordination between teams",
      "Consistency across workflows",
      "Scalability for multiple financial organizations",
    ],
    prev: { label: "(FIRST PROJECT)" },
    next: { label: "NEXT → HYDROGROW", href: "/work/hydrogrow" },
  },
  {
    slug: "hydrogrow",
    title: "HYDROGROW",
    eyebrow: "02 - ENVIRONMENTAL MONITORING PLATFORM",
    summary:
      "A multi-module SaaS platform for monitoring aquatic systems, hydroponic farms, and air-quality environments across distributed locations.",
    description:
      "A multi-module SaaS platform for monitoring aquatic systems, hydroponic farms, and air-quality environments across distributed locations.",
    role: "Senior UX/UI Designer",
    platform: "Multi-tenant SaaS · Web",
    users: "Super Admin · Channel Partners · Contractors · Managers",
    pdfSrc: "/documents/hydrogrow-case-study.pdf",
    pdfDownloadName: "hydrogrow-case-study.pdf",
    pdfLabel: "HYDROGROW_CASE_STUDY.PDF",
    overview:
      "HydroGrow addresses the complex operational needs of agricultural tech operators. The platform orchestrates multi-sensor telemetry readings across isolated smart-farm modules, delivering diagnostic tools and automated trigger alarms in real-time.",
    challengeIntro:
      "Environmental system management was fragmented across multiple locations, stakeholders, and operational responsibilities.",
    challengeBullets: [
      "Limited visibility across distributed locations",
      "Manual monitoring and maintenance",
      "Multiple stakeholders with different responsibilities",
      "Inconsistent access to operational information",
      "No unified view across aquatic, hydroponic, and air-quality systems",
    ],
    solutionIntro:
      "I designed a multi-module, role-based SaaS platform that brings environmental monitoring and operational management into a single ecosystem.",
    solutionBullets: [
      "Multi-module architecture for flexible sensor stacks.",
      "Sensor-based dashboards with real-time health indicators.",
      "Centralized monitoring for distributed locations.",
      "Distributed inventory visibility across regional parameters.",
    ],
    decisions: [
      {
        numeral: "I",
        title: "Multi-module Architecture",
        body: "Designed flexible widget structures that easily adapt to any crop module, aquarium system, or localized air unit.",
      },
      {
        numeral: "II",
        title: "Sensor-based Dashboards",
        body: "Crafted interactive diagnostic dashboards minimizing average system troubleshooting times by 56%.",
      },
      {
        numeral: "III",
        title: "Centralized Monitoring",
        body: "Brought telemetry, alerts, and diagnostic workflows into a unified operational view.",
      },
      {
        numeral: "IV",
        title: "Distributed Inventory Visibility",
        body: "Constructed map layers overlaying localized weather and regional parameters against crop telemetry.",
      },
    ],
    contribution: [
      "UX Strategy",
      "High-Level User Flows",
      "Site Information Architecture",
      "Role Mapping",
      "High Fidelity UI Design",
      "Prototypes Built for User Testing Sessions",
    ],
    outcomeIntro: [
      "The final platform design successfully streamlined smart-farm management workflows, contributing to an overall 32% reduction in system diagnostics times, and resulting in zero harvest losses during testing phases.",
    ],
    prev: { label: "← FINQUIP", href: "/work/finquip" },
    next: {
      label: "NEXT → INTERPRETER",
      href: "/work/interpreter",
      tone: "primary",
    },
  },
  {
    slug: "interpreter",
    title: "INTERPRETER",
    eyebrow: "03 - MOBILE PRODUCT EXPERIENCE",
    summary:
      "A unified mobile experience designed to bring interpreter job management, real-time interpretation services, and operational workflows into one connected application.",
    description:
      "A unified mobile experience that brings interpreter job management, real-time interpretation services, and operational workflows into one connected application.",
    role: "Lead UX/UI Designer",
    platform: "Mobile Application",
    users: "Linguists · Translators · Interpreters",
    pdfSrc: "/documents/interpreter-case-study.pdf",
    pdfDownloadName: "interpreter-case-study.pdf",
    pdfLabel: "INTERPRETER_CASE_STUDY.PDF",
    overview:
      "The Interpreter App simplifies how enterprise field translators connect with clients globally. Prior to this design, linguists had to navigate three distinct channels to receive on-demand calls, manage scheduling, and file invoice reports.",
    challengeIntro:
      "Interpreters faced fragmented workflows across multiple legacy apps.",
    challengeBullets: [
      "Managing assigned jobs and service availability across separate workflows.",
      "Switching between applications for interpretation calls, job details, and scheduling.",
      "Limited visibility into job status, assignments, and upcoming work.",
    ],
    solutionIntro:
      "A single unified mobile platform consolidating on-demand video conferencing, calendar integrations, live geo-location assignment routing, and instant automated payout approvals.",
    solutionBullets: [
      "Unified experience for translators & operators in one adaptive container.",
      "Real-time map routing and offline-capable calendar syncing.",
      "Ultra-low latency audio/video translation rooms with live subtitles.",
      "Automated payout approvals and streamlined reporting.",
    ],
    decisions: [
      {
        numeral: "I",
        title: "Unified Experience",
        body: "Standardized views for translators & operators in one adaptive container.",
      },
      {
        numeral: "II",
        title: "Workflow Simplification",
        body: "Reduced average booking actions from 7 to 2 taps with smart defaults.",
      },
      {
        numeral: "III",
        title: "Job Management",
        body: "Real-time map routing and offline-capable calendar syncing.",
      },
      {
        numeral: "IV",
        title: "Real-time Services",
        body: "Ultra-low latency audio/video translation rooms with live subtitles.",
      },
    ],
    contribution: [
      "UX Strategy",
      "User Flows",
      "Information Architecture",
      "Interaction Design",
      "High-Fidelity UI Design",
      "Component Library",
      "Clickable Prototypes",
    ],
    outcomeIntro: [
      "Achieved a 40% reduction in coordination overhead and a 95% user satisfaction rate among field translators in the first month of private beta testing.",
    ],
    prev: { label: "← HYDROGROW", href: "/work/hydrogrow" },
    next: {
      label: "NEXT → DISHA",
      href: "/work/disha",
      tone: "primary",
    },
  },
  {
    slug: "disha",
    title: "DISHA",
    eyebrow: "03 — MOBILE PRODUCT EXPERIENCE",
    summary:
      "A multi-role mobile platform designed to connect users with employment and learning opportunities while supporting simple, multilingual, and accessible experiences across diverse digital contexts.",
    description:
      "A multi-role mobile platform designed to connect users with employment and learning opportunities while supporting simple, multilingual, and accessible experiences across diverse digital contexts.",
    role: "UX/UI Designer",
    platform: "Mobile Application",
    users: "Job Seekers · HR · Sales · Platform Admin",
    pdfSrc: "/documents/Disha-case-study.pdf",
    pdfDownloadName: "Disha-case-study.pdf",
    pdfLabel: "DISHA_WORKSHOP_OUTCOMES.PDF",
    overview:
      "Disha is a mobile platform focused on helping users discover jobs, online courses, and self-employment opportunities. The design direction was shaped around users with different levels of education, digital confidence, language preferences, connectivity, and accessibility needs.",
    challengeIntro:
      "The product needed to serve users with very different needs and levels of digital confidence while remaining simple enough to use in everyday situations.",
    challengeBullets: [
      "Supporting users who prefer Hindi over English-heavy interfaces.",
      "Designing for inconsistent internet connectivity and entry-level devices.",
      "Making important tasks understandable for users with limited digital experience.",
      "Supporting accessibility needs such as larger controls, voice interaction, and simpler navigation.",
      "Balancing end-user needs with operational requirements across HR, Sales, and Platform Administration.",
    ],
    solutionIntro:
      "A mobile experience structured around simple task flows, accessible interaction patterns, and support for multiple user contexts.",
    solutionBullets: [
      "Designed user flows around jobs, learning, and self-employment opportunities.",
      "Established multilingual considerations with Hindi as an important accessibility and usability requirement.",
      "Simplified interaction patterns for users with different levels of digital confidence.",
      "Considered voice interaction and larger controls for accessibility.",
      "Mapped separate experiences for end users, Sales Training, HR Administration, and Platform Administration.",
    ],
    decisions: [
      {
        numeral: "I",
        title: "Language-first Experience",
        body: "Considered Hindi as a primary usability requirement for users who struggle with English-heavy platforms.",
      },
      {
        numeral: "II",
        title: "Simpler Interaction",
        body: "Reduced complexity through straightforward navigation and task-focused interaction patterns for users with different levels of digital confidence.",
      },
      {
        numeral: "III",
        title: "Accessibility",
        body: "Considered larger controls, voice interaction, voice input, and screen-reader-friendly experiences for users with accessibility needs.",
      },
      {
        numeral: "IV",
        title: "Real-world Constraints",
        body: "Designed with inconsistent connectivity and entry-level Android devices in mind rather than assuming ideal technical conditions.",
      },
      {
        numeral: "V",
        title: "Multi-role Product Thinking",
        body: "Considered the needs of end users alongside HR, Sales Training, and Platform Administration workflows.",
      },
    ],
    contribution: [
      "UX Research",
      "Persona Development",
      "Empathy Mapping",
      "User Flows",
      "Information Architecture",
      "Low-Fidelity Wireframes",
      "Accessibility",
      "Visual Direction",
      "Prototyping",
    ],
    outcomeIntro: [
      "Established a research-led foundation for a multilingual and accessible mobile experience, translating diverse user needs into personas, empathy maps, visual direction, and low-fidelity product flows.",
      "The workshop produced a clearer understanding of user contexts, accessibility requirements, and the core flows needed to move the concept toward product definition.",
    ],
    prev: { label: "← INTERPRETER", href: "/work/interpreter" },
    next: {
      label: "NEXT → HYDROGROW",
      href: "/work/hydrogrow",
      tone: "primary",
    },
  },
  {
    slug: "design-system",
    title: "SCALABLE DESIGN SYSTEM",
    eyebrow: "04 - DESIGN SYSTEM",
    summary:
      "A token-based enterprise design system built to create consistency, improve accessibility, and accelerate product design across enterprise applications.",
    description:
      "A token-based enterprise design system created to improve consistency, accelerate delivery, and provide reusable foundations across complex digital products.",
    role: "Lead/Senior Designer",
    platform: "Design/Product",
    users: "Product Designers · Developers · Product teams",
    pdfSrc: "/documents/design-system-case-study.pdf",
    pdfDownloadName: "design-system-case-study.pdf",
    pdfLabel: "DESIGN_SYSTEM_CASE_STUDY.PDF",
    overview:
      "A structured, multi-platform design language and code-backed component library built for rapid, cohesive product development across enterprise and SaaS systems.",
    challengeIntro:
      "Fragmented design libraries created massive engineering debt and brand drift.",
    challengeBullets: [
      "Inconsistent user experiences across 14 separate web portals.",
      "Hardcoded styles slowed down development and prevented dynamic theming.",
      "Accessibility standards (WCAG 2.1 AA) were consistently missed.",
    ],
    solutionIntro:
      "An architecture-led token library mapping colors, fonts, shadows, and grid tokens, backed by a comprehensive component library matching exactly in Figma and React.",
    solutionBullets: [
      "Scalable JSON structure for multi-brand and dark/light dynamic themes.",
      "Solid atomic structure from basic primitives up to complex composite cards.",
      "A highly optimized responsive typographic scale with strict tracking rules.",
      "Built with color pairings that natively enforce strict WCAG accessibility ratios.",
    ],
    decisions: [
      {
        numeral: "I",
        title: "Design Tokens Architecture",
        body: "Scalable JSON structure for multi-brand and dark/light dynamic themes.",
      },
      {
        numeral: "II",
        title: "Component Library Structure",
        body: "Solid atomic structure from basic primitives up to complex composite cards.",
      },
      {
        numeral: "III",
        title: "Typography System",
        body: "A highly optimized responsive typographic scale with strict tracking rules.",
      },
      {
        numeral: "IV",
        title: "Color Architecture",
        body: "Built with color pairings that natively enforce strict WCAG accessibility ratios.",
      },
      {
        numeral: "V",
        title: "Scalable Foundations",
        body: "Component-level flexibility rules ensuring high customizability without detachment.",
      },
    ],
    contribution: [
      "UX Strategy",
      "Design Tokens",
      "Component Library",
      "Typography System",
      "Color Architecture",
      "Accessibility Standards",
      "Documentation",
    ],
    outcomeIntro: [
      "Accelerated product engineering cycles by 3x and achieved 100% WCAG compliance on all new feature deployments within two quarters.",
    ],
    prev: {
      label: "← DISHA",
      href: "/work/disha",
      tone: "primary",
    },
    next: { label: "(LAST PROJECT)" },
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
