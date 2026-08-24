export const site = {
  name: "Mahaboob Ali Khan",
  wordmark: "MAHABOOB ALI KHAN",
  title: "Senior Product Designer",
  description:
    "Senior Product Designer with 12+ years of experience designing enterprise and SaaS products, complex workflows, and scalable design systems.",
} as const;

export const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "CASE STUDIES", href: "/work" },
  { label: "DESIGN SYSTEMS", href: "/systems" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const hero = {
  sectionNumber: "01",
  sectionLabel: "INTRODUCTION",
  eyebrow: "Senior Product Designer · 12+ Years Experience",
  headline: ["I DESIGN COMPLEX", "PRODUCTS INTO", "SIMPLE EXPERIENCES."],
  bio: "Senior Product Designer with 12+ years of experience designing enterprise and SaaS products, complex workflows, and scalable design systems. I combine UX strategy, product thinking, and AI-assisted design to turn complex problems into clear, usable experiences.",
  primaryCta: "VIEW CASE STUDIES →",
  primaryHref: "/work",
  resumeLabel: "DOWNLOAD RESUME",
  resumeHref: "/Resume/MD_Mahaboobali_Khan_Resume_A.pdf",
  credentials: [
    { metric: "12+", label: "Years Experience" },
    { metric: "Enterprise", label: "Product Design" },
    { metric: "SaaS", label: "Digital Products" },
    { metric: "Systems", label: "Design Systems" },
  ],
  linkedinHref: "https://www.linkedin.com/in/mahaboobali-khan-69084855",
  footer: {
    copyright: "© 2026 MAHABOOB ALI KHAN",
    email: "mdalikhan1986@gmail.com",
    emailLabel: "MDALIKHAN1986@GMAIL.COM",
    location: "HYDERABAD, INDIA · GMT +5:30",
    linkedin: "LINKEDIN ↗",
  },
  capabilitiesTitle: "Capabilities",
  capabilities: [
    { icon: "cap-ux", label: "Product & UX Design", level: "Expert" },
    { icon: "cap-systems", label: "Design systems", level: "Advanced" },
    { icon: "cap-prototyping", label: "Prototyping", level: "Advanced" },
    { icon: "cap-ai", label: "AI-Assisted Design", level: "Advanced" },
  ],
  toolkitTitle: "Tool Kit",
  toolkit: [
    { icon: "brand-figma", label: "Figma" },
    { icon: "brand-sketch", label: "Sketch" },
    { icon: "brand-framer", label: "Framer" },
    { icon: "brand-adobe", label: "Adobe Tools" },
  ],
} as const;
