import { hero, site } from "@/content/site";

export const contactPage = {
  sectionNumber: "06",
  sectionLabel: "CONTACT",
  availability: "OPEN TO NEW OPPORTUNITIES",
  headline: ["LET'S BUILD", "SOMETHING USEFUL."],
  supporting:
    "I'm open to Senior Product Design, Lead UX, and enterprise product design opportunities where complex problems need clearer systems, stronger workflows, and better experiences.",
  primaryCta: "Start a Conversation",
  resumeLabel: "DOWNLOAD RESUME",
  resumeHref: hero.resumeHref,
  email: "mdalikhan1986@gmail.com",
  linkedinHref: hero.linkedinHref,
  linkedinName: site.name,
  form: {
    number: "01",
    label: "START A CONVERSATION",
    heading: "Have Something in Mind?",
    supporting:
      "Whether you're hiring for a product design role or building a complex product, I'd be happy to talk.",
    illustration: {
      src: "/images/contact/form-illustration.png",
      width: 314,
      height: 272,
    },
    nameLabel: "YOUR NAME",
    namePlaceholder: "Enter your name",
    emailLabel: "WORK EMAIL",
    emailPlaceholder: "Enter your email",
    messageLabel: "WHAT ARE YOU WORKING ON?",
    messagePlaceholder: "Tell me a little about the opportunity or project...",
    submit: "Submit Form",
    submitting: "Sending…",
    sendAnother: "Send another message",
    successTitle: "Message sent successfully.",
    successBody:
      "Thanks for reaching out. I'll get back to you as soon as possible.",
    failure:
      "Your message could not be sent right now. Please try again or contact me directly by email.",
    subject: "Portfolio Opportunity / Design Collaboration",
  },
  direct: {
    number: "02",
    label: "DIRECT",
    heading: "Other Ways to Connect",
    emailLabel: "EMAIL",
    emailCta: "EMAIL ME",
    linkedinLabel: "LINKEDIN",
    linkedinCta: "VIEW PROFILE",
    locationLabel: "LOCATION",
    location: "Hyderabad, India",
    timezone: "GMT +5:30",
  },
  footer: {
    copyright: "© 2026 MAHABOOB ALI KHAN",
    top: "BACK TO TOP ↑",
    linkedin: "LINKEDIN ↗",
  },
} as const;
