"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { LetsTalkCta } from "@/components/layout/LetsTalkCta";
import { navItems, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--surface-black)]">
      <Container>
        <div className="flex items-center justify-between py-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="min-w-0 shrink font-sans text-[18px] font-medium leading-[1.2] text-[var(--text-white)] sm:text-[22px] lg:text-[length:var(--fs-h4)]"
          >
            {site.wordmark}
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2]",
                    isActive ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <LetsTalkCta />
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <LetsTalkCta compact />
            <button
              type="button"
              className="flex size-10 flex-col items-center justify-center gap-1.5"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={cn(
                  "h-px w-5 bg-[var(--text-white)] transition-transform",
                  open && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-[var(--text-white)]",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-[var(--text-white)] transition-transform",
                  open && "-translate-y-[4px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-x-0 bottom-0 top-[88px] z-40 overflow-y-auto bg-[var(--surface-black)] lg:hidden"
        >
          <nav
            className="flex flex-col gap-8 px-[var(--space-page-x)]"
            aria-label="Mobile"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-sans text-[length:var(--fs-body-1)] font-semibold uppercase leading-[1.2]",
                    isActive ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <span onClick={() => setOpen(false)}>
              <LetsTalkCta className="w-fit" />
            </span>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
