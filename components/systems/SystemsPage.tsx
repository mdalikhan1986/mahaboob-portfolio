import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { BackToTop, footerActionClass } from "@/components/ui/BackToTop";
import { Container } from "@/components/ui/Container";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { systemsPage } from "@/content/systems";

type Capability = (typeof systemsPage.capabilities)[number];

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

function CapabilityCard({ card }: { card: Capability }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-[var(--border-subtle)] bg-[#0f0f0f] p-8">
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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topRow.map((card) => (
              <CapabilityCard key={card.index} card={card} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
