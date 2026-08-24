import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "For 12+ years, I’ve designed enterprise and SaaS products that simplify complex workflows, data-heavy interfaces, and operational systems.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
