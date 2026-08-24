import type { Metadata } from "next";
import { ExperiencePage } from "@/components/experience/ExperiencePage";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My career evolved through different forms of visual problem-solving — from technical drawings and visual design to digital interfaces, enterprise products, and design leadership.",
};

export default function ExperienceRoute() {
  return <ExperiencePage />;
}
