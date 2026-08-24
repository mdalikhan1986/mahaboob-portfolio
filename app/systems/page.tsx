import type { Metadata } from "next";
import { SystemsPage } from "@/components/systems/SystemsPage";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "I build flexible design systems that turn visual decisions into reusable foundations, components, and patterns across products.",
};

export default function SystemsRoute() {
  return <SystemsPage />;
}
