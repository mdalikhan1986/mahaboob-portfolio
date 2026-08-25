import Link from "next/link";
import type { ReactNode } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { BackToTop, footerActionClass } from "@/components/ui/BackToTop";
import { Container } from "@/components/ui/Container";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { systemsPage } from "@/content/systems";
import { cn } from "@/lib/cn";

type Capability = (typeof systemsPage.capabilities)[number];

const captionMuted =
  "font-sans text-[length:var(--fs-caption)] font-medium leading-[1.2] text-[var(--text-muted)]";

function SystemsIcon({
  name,
  inset,
}: {
  name: string;
  inset: string;
}) {
  return (
    <span className="relative size-6 shrink-0 overflow-hidden">
      <span className="absolute" style={{ inset }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/icons/systems/${name}.svg`}
          alt=""
          width={24}
          height={24}
          className="size-full max-w-none"
          aria-hidden="true"
        />
      </span>
    </span>
  );
}

function ArtifactShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-auto flex w-full flex-col gap-4 rounded-lg border border-[var(--border-subtle)] bg-[#0b0b0b] p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ArtifactBadge({ children }: { children: string }) {
  return (
    <span className="shrink-0 rounded-[4px] bg-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] px-2 py-1 font-sans text-[length:var(--fs-caption)] font-medium leading-[1.2] text-[var(--text-primary)]">
      {children}
    </span>
  );
}

function FoundationsArtifact() {
  const swatches = [
    { label: "surface", className: "border border-[var(--border-subtle)] bg-[#0f0f0f]" },
    { label: "primary", className: "bg-[var(--surface-primary)]" },
    { label: "text", className: "bg-white" },
    { label: "border", className: "bg-[var(--border-subtle)]" },
  ] as const;

  return (
    <ArtifactShell>
      <div className="flex items-center justify-between gap-3">
        <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
          Token Reference
        </p>
        <ArtifactBadge>Semantic</ArtifactBadge>
      </div>
      <div className="flex flex-wrap gap-3">
        {swatches.map((swatch) => (
          <div key={swatch.label} className="flex flex-col items-center gap-1.5">
            <span className={cn("size-6 rounded-[4px]", swatch.className)} />
            <span className={captionMuted}>{swatch.label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 text-[var(--text-muted)]">
        <p className={captionMuted}>Type scale</p>
        <div className="flex flex-col gap-0.5 font-sans font-normal leading-normal">
          <p className="text-[12px]">Caption / 12px</p>
          <p className="text-[14px]">Body / 14px</p>
          <p className="text-[18px]">Title / 18px</p>
        </div>
      </div>
    </ArtifactShell>
  );
}

function ComponentsArtifact() {
  return (
    <ArtifactShell>
      <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
        Component States
      </p>
      <div className="flex flex-col gap-2">
        <p className={captionMuted}>Buttons</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <span className="rounded-[4px] bg-[var(--buttons-primary)] px-2.5 py-1.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[#0a0a0a]">
              Button
            </span>
            <span className={captionMuted}>Default</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="rounded-[4px] border border-white bg-[var(--buttons-primary)] px-2.5 py-1.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[#0a0a0a]">
              Button
            </span>
            <span className={captionMuted}>Hover</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="rounded-[4px] bg-[var(--border-subtle)] px-2.5 py-1.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-muted)]">
              Button
            </span>
            <span className={captionMuted}>Disabled</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className={captionMuted}>Inputs</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <span className="rounded-[4px] border border-[var(--border-subtle)] bg-[#0f0f0f] px-2.5 py-1.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-muted)]">
              Email
            </span>
            <span className={captionMuted}>Default</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="rounded-[4px] border border-[var(--border-primary)] bg-[#0f0f0f] px-2.5 py-1.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-white)]">
              Email
            </span>
            <span className={captionMuted}>Focus</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="rounded-[4px] border border-[#ff453a] bg-[#0f0f0f] px-2.5 py-1.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-white)]">
              Email
            </span>
            <span className={captionMuted}>Error</span>
          </div>
        </div>
      </div>
    </ArtifactShell>
  );
}

function ThemingArtifact() {
  return (
    <ArtifactShell>
      <div className="flex items-center justify-between gap-3">
        <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
          Theme Modes
        </p>
        <ArtifactBadge>Semantic Tokens</ArtifactBadge>
      </div>
      <div className="grid grid-cols-1 gap-4 min-[380px]:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] p-3">
          <div className="flex flex-col gap-2 rounded-md border border-[#e5e7eb] bg-white p-3">
            <p className="font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[#111827]">
              Light Mode
            </p>
            <span className="w-fit rounded-[4px] bg-[var(--buttons-primary)] px-2.5 py-1.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[#0a0a0a]">
              Action
            </span>
          </div>
          <p className="font-sans text-[12px] font-normal leading-normal text-[#6b7280]">
            surface: #FFFFFF
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-lg border border-[var(--border-subtle)] bg-[#0f0f0f] p-3">
          <div className="flex flex-col gap-2 rounded-md border border-[var(--border-subtle)] bg-[#111827] p-3">
            <p className="font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-white)]">
              Dark Mode
            </p>
            <span className="w-fit rounded-[4px] bg-[var(--buttons-primary)] px-2.5 py-1.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[#0a0a0a]">
              Action
            </span>
          </div>
          <p className="font-sans text-[12px] font-normal leading-normal text-[var(--text-muted)]">
            surface: #0F0F0F
          </p>
        </div>
      </div>
    </ArtifactShell>
  );
}

function DocumentationArtifact() {
  const items = [
    "Overview",
    "Getting Started",
    "Components",
    "Usage",
    "Accessibility",
  ] as const;

  return (
    <ArtifactShell className="gap-3">
      <div className="flex items-center justify-between gap-3">
        <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
          Documentation Structure
        </p>
        <ArtifactBadge>Preview</ArtifactBadge>
      </div>
      <div className="flex w-full flex-col gap-2 rounded-md border border-[var(--border-subtle)] bg-[#0f0f0f] p-3">
        {items.map((item) => {
          const selected = item === "Components";
          return (
            <div
              key={item}
              className={cn(
                "px-2.5 py-2 font-sans text-[length:var(--fs-caption)] font-medium leading-[1.2]",
                selected
                  ? "rounded-[4px] border border-[var(--border-primary)] bg-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] text-[var(--text-primary)]"
                  : "text-[var(--text-muted)]",
              )}
            >
              {item}
            </div>
          );
        })}
      </div>
    </ArtifactShell>
  );
}

function AccessibilityArtifact() {
  return (
    <ArtifactShell className="gap-3">
      <div className="flex items-center justify-between gap-3">
        <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
          Accessibility Checks
        </p>
        <ArtifactBadge>Pass</ArtifactBadge>
      </div>
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <p className={captionMuted}>Contrast</p>
            <p className={captionMuted}>4.8:1 (AA Pass)</p>
          </div>
          <p className="shrink-0 font-sans text-[length:var(--fs-caption)] font-medium leading-[1.2] text-[var(--text-primary)]">
            ✓ Pass
          </p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <p className={captionMuted}>Focus State</p>
            <p className={captionMuted}>Visible</p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="rounded-[4px] border border-[var(--border-primary)] bg-[#0f0f0f] px-2 py-1 font-sans text-[length:var(--fs-caption)] font-medium leading-[1.2] text-[var(--text-white)]">
              Button
            </span>
            <span className="font-sans text-[length:var(--fs-caption)] font-medium leading-[1.2] text-[var(--text-primary)]">
              ✓
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <p className={captionMuted}>Labels</p>
            <p className={captionMuted}>Accessible</p>
          </div>
          <p className="shrink-0 font-sans text-[length:var(--fs-caption)] font-medium leading-[1.2] text-[var(--text-primary)]">
            ✓ Pass
          </p>
        </div>
      </div>
    </ArtifactShell>
  );
}

function CapabilityArtifact({ icon }: { icon: Capability["icon"] }) {
  switch (icon) {
    case "palette":
      return <FoundationsArtifact />;
    case "category":
      return <ComponentsArtifact />;
    case "sun":
      return <ThemingArtifact />;
    case "book":
      return <DocumentationArtifact />;
    case "accessible":
      return <AccessibilityArtifact />;
    default:
      return null;
  }
}

function CapabilityCard({ card }: { card: Capability }) {
  return (
    <article className="flex h-full flex-col gap-6 rounded-xl border border-[var(--border-subtle)] bg-[#0f0f0f] p-8">
      <SystemsIcon name={card.icon} inset={card.inset} />
      <div className="flex items-center gap-2 font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-white)]">
        <span>{card.index}</span>
        <span>{card.label}</span>
      </div>
      <h2 className="font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-white)]">
        {card.title}
      </h2>
      <p className="font-sans text-[length:var(--fs-body-1)] font-normal leading-[1.2] text-[var(--text-muted)]">
        {card.body}
      </p>
      <CapabilityArtifact icon={card.icon} />
    </article>
  );
}

export function SystemsPage() {
  const topRow = systemsPage.capabilities.slice(0, 3);
  const bottomRow = systemsPage.capabilities.slice(3);

  return (
    <PageShell className="pb-0">
      <Container className="flex flex-col">
        <section className="flex flex-col gap-10 border-b border-[var(--border-subtle)] pb-16 sm:pb-24">
          <div className="flex flex-col gap-[var(--space-marker-to-heading)]">
            <SectionMarker
              number={systemsPage.sectionNumber}
              label={systemsPage.sectionLabel}
            />
            <div className="flex max-w-[1240px] flex-col gap-6">
              <h1 className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[40px] lg:text-[length:var(--fs-h1)]">
                {systemsPage.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="max-w-[760px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
                {systemsPage.supporting}
              </p>
            </div>
          </div>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2]">
            {systemsPage.tags.map((tag, index) => (
              <span key={tag} className="flex items-center gap-4">
                {index > 0 ? (
                  <span className="text-[var(--text-muted)]" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <span className="text-[var(--text-primary)]">{tag}</span>
              </span>
            ))}
          </p>
        </section>

        <section className="flex flex-col gap-12 border-b border-[var(--border-subtle)] py-6">
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topRow.map((card) => (
              <CapabilityCard key={card.index} card={card} />
            ))}
          </div>
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
            {bottomRow.map((card) => (
              <CapabilityCard key={card.index} card={card} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 border-b border-[var(--border-subtle)] py-16 sm:py-24">
          <div className="flex items-center gap-3">
            <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)]">
              {systemsPage.next.eyebrow}
            </span>
            <span className="h-px w-10 bg-[var(--text-primary)]" aria-hidden="true" />
          </div>
          <h2 className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h1)]">
            {systemsPage.next.title}
          </h2>
          <Link
            href={systemsPage.next.href}
            className="w-fit font-sans text-[length:var(--fs-body-1)] font-semibold leading-[1.2] text-[var(--text-primary)] transition-opacity duration-150 hover:opacity-80"
          >
            {systemsPage.next.cta}
          </Link>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 py-12">
          <Link
            href={systemsPage.footer.backHref}
            className={`${footerActionClass} text-[var(--text-muted)]`}
          >
            {systemsPage.footer.back}
          </Link>
          <BackToTop label={systemsPage.footer.top} />
          <Link
            href="/experience"
            className={`${footerActionClass} text-[var(--text-primary)]`}
          >
            {systemsPage.footer.next}
          </Link>
        </footer>
      </Container>
    </PageShell>
  );
}
