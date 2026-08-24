"use client";

import { scrollToPageTop } from "@/lib/conversation";
import { cn } from "@/lib/cn";

export const footerActionClass =
  "font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] transition-colors duration-200 hover:text-[var(--text-primary)]";

export function BackToTop({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={scrollToPageTop}
      className={cn(
        footerActionClass,
        "text-[var(--text-muted)]",
        className,
      )}
    >
      {label}
    </button>
  );
}
