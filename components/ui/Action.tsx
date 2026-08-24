import Link from "next/link";
import { cn } from "@/lib/cn";

type ActionProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  download?: boolean | string;
  variant?: "primary" | "primarySm" | "text" | "nav";
};

const variants = {
  primary:
    "inline-flex h-12 items-center justify-center gap-2.5 rounded-[4px] bg-[var(--buttons-primary)] px-2.5 font-sans text-[length:var(--fs-body-1)] font-bold leading-[1.2] text-[var(--surface-black)]",
  primarySm:
    "inline-flex h-10 items-center justify-center gap-2.5 rounded-[4px] bg-[var(--surface-primary)] px-2.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-default)]",
  text: "inline-flex h-12 items-center justify-center gap-2.5 rounded-[4px] px-2.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-primary)] underline underline-offset-4",
  nav: "font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] tracking-normal text-[var(--text-muted)]",
};

export function Action({
  children,
  className,
  href,
  download,
  variant = "primary",
}: ActionProps) {
  const classes = cn(variants[variant], className);

  if (href) {
    if (download) {
      return (
        <a href={href} download={download} className={classes}>
          {children}
        </a>
      );
    }

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    if (href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <span className={classes} aria-disabled="true">
      {children}
    </span>
  );
}
