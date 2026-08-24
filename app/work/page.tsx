import type { Metadata } from "next";
import { WorkIndex } from "@/components/work/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected enterprise SaaS platforms, mobile experiences, and design systems by Mahaboob Ali Khan.",
};

export default function WorkPage() {
  return <WorkIndex />;
}
