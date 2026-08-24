import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "I'm open to Senior Product Design, Lead UX, and enterprise product design opportunities where complex problems need clearer systems, stronger workflows, and better experiences.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
