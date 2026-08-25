import type { Metadata } from "next";
import { ExperiencePage } from "@/components/experience/ExperiencePage";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Senior product designer focused on complex enterprise SaaS, scalable design systems, and workflows that turn operational complexity into usable products.",
};

export default function ExperienceRoute() {
  return <ExperiencePage />;
}
