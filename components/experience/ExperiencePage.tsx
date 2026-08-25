import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { BackToTop, footerActionClass } from "@/components/ui/BackToTop";
import { Container } from "@/components/ui/Container";
import { SectionMarker } from "@/components/ui/SectionMarker";
import {
  experienceCompanies,
  experiencePage,
  type ExperienceRole,
} from "@/content/experience";
import { contactConversationHref } from "@/lib/conversation";
import { cn } from "@/lib/cn";

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/experience-bullet.svg"
        alt=""
        width={4}
        height={4}
        className="size-1 shrink-0"
      />
      <span className="font-sans text-[length:var(--fs-body-2)] font-light leading-[1.2] text-[var(--text-secondary)]">
        {children}
      </span>
    </li>
  );
}

function RoleBlock({
  role,
  compact,
}: {
  role: ExperienceRole;
  compact?: boolean;
}) {
  const left = role.bullets.slice(0, Math.ceil(role.bullets.length / 2));
  const right = role.bullets.slice(Math.ceil(role.bullets.length / 2));
  const isLead = role.emphasis === "lead";

  return (
    <article
      className={cn(
        "flex flex-col gap-6 border-t border-[var(--border-subtle)] lg:flex-row lg:gap-[50px]",
        compact ? "py-6" : "py-10",
      )}
    >
      <div className="flex w-full shrink-0 flex-col gap-2 lg:w-[150px]">
        <p className="font-sans text-[length:var(--fs-h4)] font-bold leading-[1.2] text-[var(--text-primary)]">
          {role.duration}
        </p>
        <p className="font-sans text-[length:var(--fs-caption)] font-light leading-[1.2] text-[var(--text-muted)]">
          {role.phase}
        </p>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-5">
        <div className="flex flex-col gap-1">
          <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
            {role.category}
          </p>
          <h3
            className={cn(
              "font-sans font-semibold leading-[1.2] text-[var(--text-white)]",
              isLead
                ? "text-[28px] sm:text-[length:var(--fs-h2)]"
                : "text-[28px] sm:text-[length:var(--fs-h3)]",
            )}
          >
            {role.role}
          </h3>
        </div>
        <p className="font-sans text-[length:var(--fs-body-1)] font-light leading-[1.2] text-[var(--text-muted)]">
          {role.description}
        </p>
        {role.bullets.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-10 gap-y-2.5 md:grid-cols-2">
            <ul className="flex flex-col gap-2.5">
              {left.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
            <ul className="flex flex-col gap-2.5">
              {right.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function PrincipleIcon({
  name,
  inset,
}: {
  name: string;
  inset: string;
}) {
  return (
    <span className="flex size-[34px] shrink-0 items-start rounded-[10px] bg-[#182c5a] p-[5px]">
      <span className="relative size-6 overflow-hidden">
        <span className="absolute" style={{ inset }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/icons/experience/${name}.svg`}
            alt=""
            width={24}
            height={24}
            className="size-full max-w-none"
            aria-hidden="true"
          />
        </span>
      </span>
    </span>
  );
}

export function ExperiencePage() {
  return (
    <PageShell className="pb-0">
      <Container className="flex flex-col">
        <section className="relative flex flex-col gap-12 border-b border-[var(--border-subtle)] pb-[var(--space-section)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={experiencePage.heroIllustration.src}
            alt=""
            width={experiencePage.heroIllustration.width}
            height={experiencePage.heroIllustration.height}
            className="pointer-events-none absolute top-0 right-[calc(-1*var(--space-page-x))] hidden h-[260px] w-[623px] max-w-none min-[1440px]:block"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col gap-[var(--space-marker-to-heading)]">
            <SectionMarker
              number={experiencePage.sectionNumber}
              label={experiencePage.sectionLabel}
            />
            <div className="flex flex-col gap-[var(--space-heading-to-copy)]">
              <h1 className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[40px] lg:text-[length:var(--fs-h1)]">
                {experiencePage.headline}
              </h1>
              <p className="max-w-[760px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
                {experiencePage.supporting}
              </p>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={experiencePage.heroIllustration.src}
            alt=""
            width={experiencePage.heroIllustration.width}
            height={experiencePage.heroIllustration.height}
            className="relative z-10 h-auto w-full max-w-[623px] self-end min-[1440px]:hidden"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col gap-6 pt-6">
            <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
              {experiencePage.disciplinesEyebrow}
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-between">
              {experiencePage.disciplines.map((item) => (
                <div
                  key={item.label}
                  className="flex w-full flex-col gap-2 sm:w-[200px] sm:max-w-[200px]"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      item.current ? "size-2" : "h-2 w-full max-w-[196px]",
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        item.current
                          ? "/icons/experience-flow-dot.svg"
                          : "/icons/experience-flow-line.svg"
                      }
                      alt=""
                      width={item.current ? 8 : 196}
                      height={8}
                      className={cn(
                        "absolute inset-0 max-w-none",
                        item.current ? "size-2" : "h-2 w-full",
                      )}
                    />
                  </div>
                  <p
                    className={cn(
                      "font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2]",
                      item.current
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-white)]",
                    )}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 border-b border-[var(--border-subtle)] py-[var(--space-section)]">
          <SectionMarker
            number={experiencePage.foundation.number}
            label={experiencePage.foundation.label}
          />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-6">
            <div className="flex w-full max-w-[325px] shrink-0 flex-col gap-2">
              <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h2)]">
                {experiencePage.foundation.heading}
              </h2>
              <p className="font-sans text-[length:var(--fs-body-1)] font-light leading-[1.2] text-[var(--text-muted)]">
                {experiencePage.foundation.body}
              </p>
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-7">
              {experiencePage.foundation.cards.map((card, index) => (
                <div key={card.title} className="contents">
                  {index > 0 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/icons/experience/principle-arrow.svg"
                      alt=""
                      width={39}
                      height={12}
                      className="hidden h-[12px] w-[39px] shrink-0 sm:block"
                      aria-hidden="true"
                    />
                  ) : null}
                  <article className="flex h-auto min-h-[180px] w-full flex-1 flex-col gap-4 rounded-lg bg-[#111828] p-6 sm:h-[180px]">
                    <PrincipleIcon name={card.icon} inset={card.inset} />
                    <h3 className="font-sans text-[length:var(--fs-body-2)] font-bold leading-[1.2] text-[var(--text-white)]">
                      {card.title}
                    </h3>
                    <p className="font-sans text-[length:var(--fs-body-2)] font-normal leading-[1.2] text-[#6b7280]">
                      {card.body}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-14 border-b border-[var(--border-subtle)] py-[var(--space-section)]">
          <div className="flex flex-col gap-14">
            <SectionMarker
              number={experiencePage.timeline.number}
              label={experiencePage.timeline.label}
            />
            <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h2)]">
              {experiencePage.timeline.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-12">
            {experienceCompanies.map((company) => (
              <div key={company.name} className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-sans text-[length:var(--fs-h4)] font-bold leading-[1.2] text-[var(--text-white)]">
                      {company.name}
                    </h3>
                    {company.badge ? (
                      <span className="rounded-[4px] bg-[#1d222f] px-2 py-1 font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-primary)]">
                        {company.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="font-sans text-[length:var(--fs-caption)] font-light leading-[1.2] text-[var(--text-muted)]">
                    {company.tenure}
                  </p>
                </div>

                <div>
                  {company.roles.map((role) => (
                    <RoleBlock
                      key={role.role}
                      role={role}
                      compact={role.emphasis === "compact"}
                    />
                  ))}
                </div>

                {company.scope ? (
                  <div className="flex flex-col gap-6 rounded-[4px] border-t border-[#1d222f] bg-[#12141c] p-6">
                    <p className="font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-white)]">
                      {company.scope.title}
                    </p>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <p className="font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-primary)]">
                          {company.scope.domainsLabel}
                        </p>
                        <p className="font-sans text-[length:var(--fs-body-2)] font-light leading-[1.2] text-[var(--text-muted)]">
                          {company.scope.domains}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-primary)]">
                          {company.scope.complexityLabel}
                        </p>
                        <p className="font-sans text-[length:var(--fs-body-2)] font-light leading-[1.2] text-[var(--text-muted)]">
                          {company.scope.complexity}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-14 border-b border-[var(--border-subtle)] py-[var(--space-section)]">
          <div className="flex flex-col gap-14">
            <SectionMarker
              number={experiencePage.toolkit.number}
              label={experiencePage.toolkit.label}
            />
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h2)]">
                {experiencePage.toolkit.heading}
              </h2>
              <p className="max-w-[760px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
                {experiencePage.toolkit.body}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {experiencePage.toolkit.columns.map((column) => (
              <article
                key={column.title}
                className="flex flex-col gap-3 rounded-lg bg-[#121212] p-5"
              >
                <p className="font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-primary)]">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {column.tools.map((tool) => (
                    <li
                      key={tool}
                      className="font-sans text-[length:var(--fs-title)] font-semibold leading-[1.2] text-[var(--text-white)]"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-[var(--space-heading-to-copy)] border-b border-[var(--border-subtle)] py-[var(--space-section)]">
          <div className="flex items-center gap-3">
            <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)]">
              {experiencePage.next.eyebrow}
            </span>
            <span className="h-px w-10 bg-[var(--text-primary)]" aria-hidden="true" />
          </div>
          <div className="flex items-start justify-between gap-4">
            <p className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h1)]">
              {experiencePage.next.title}
            </p>
            <span
              className="shrink-0 font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-primary)] sm:text-[length:var(--fs-h1)]"
              aria-hidden="true"
            >
              →
            </span>
          </div>
          <p className="max-w-[640px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
            {experiencePage.next.body}
          </p>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 py-12">
          <Link
            href={experiencePage.footer.backHref}
            className={`${footerActionClass} text-[var(--text-muted)]`}
          >
            {experiencePage.footer.back}
          </Link>
          <BackToTop label={experiencePage.footer.top} />
          <Link
            href={contactConversationHref}
            className={`${footerActionClass} text-[var(--text-primary)]`}
          >
            {experiencePage.footer.next}
          </Link>
        </footer>
      </Container>
    </PageShell>
  );
}
