import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Action } from "@/components/ui/Action";
import { BackToTop, footerActionClass } from "@/components/ui/BackToTop";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionMarker } from "@/components/ui/SectionMarker";
import {
  marketProducts,
  selectedProjects,
  workPage,
} from "@/content/work";
import { cn } from "@/lib/cn";

export function WorkIndex() {
  return (
    <PageShell>
      <Container className="flex flex-col gap-[var(--space-section-index)]">
        <section className="flex flex-col gap-[var(--space-marker-to-heading)]">
          <SectionMarker
            number={workPage.sectionNumber}
            label={workPage.sectionLabel}
          />
          <div className="flex flex-col gap-[var(--space-heading-to-copy)]">
            <h1 className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[40px] lg:text-[length:var(--fs-h1)]">
              {workPage.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-[1240px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
              {workPage.supporting}
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <p className="font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] text-[var(--text-muted)]">
            {workPage.selectedHeading}
          </p>
          <div>
            {selectedProjects.map((project, index) => (
              <article
                key={project.title}
                className={cn(
                  "flex flex-col gap-6 border-t border-[var(--border-subtle)] py-10 lg:flex-row lg:items-start lg:justify-between",
                  index === selectedProjects.length - 1 && "border-b",
                )}
              >
                <p className="w-20 shrink-0 font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-primary)] lg:text-[length:var(--fs-h3)]">
                  {project.index}
                </p>
                <div className="flex w-full max-w-[760px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] text-[var(--text-muted)]">
                      {project.category}
                    </p>
                    <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h2)]">
                      {project.title}
                    </h2>
                  </div>
                  <p className="font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                  <p className="font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] text-[var(--text-secondary)]">
                    {project.tags}
                  </p>
                </div>
                <Action
                  href={project.href}
                  variant="text"
                  className="h-8 px-2.5 lg:ml-auto"
                >
                  {project.cta}
                  <Icon name="arrow" className="h-[8px] w-[13px] object-contain" />
                </Action>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] text-[var(--text-muted)]">
              {workPage.marketEyebrow}
            </p>
            <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h2)]">
              {workPage.marketHeading}
            </h2>
            <p className="font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
              {workPage.marketSupporting}
            </p>
          </div>
          <div>
            {marketProducts.map((product, index) => (
              <div
                key={product.title}
                className={cn(
                  "flex flex-col gap-3 border-t border-[var(--border-subtle)] py-6 sm:flex-row sm:items-center sm:justify-between",
                  index === marketProducts.length - 1 && "border-b",
                )}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)]">
                    {product.index}
                  </span>
                  <h3 className="font-sans text-[length:var(--fs-h5)] font-semibold uppercase leading-[1.2] text-[var(--text-white)]">
                    {product.title}
                  </h3>
                  <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
                    · {product.platform}
                  </span>
                </div>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={product.ctaLabel}
                  className="font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] text-[var(--text-primary)]"
                >
                  {product.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <Link
          href="/systems"
          className="flex flex-col gap-8 border-t border-[var(--border-subtle)] pt-[var(--space-footer-pad-top)]"
        >
          <div className="flex items-center gap-3">
            <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)]">
              {workPage.nextEyebrow}
            </span>
            <span className="h-px w-10 bg-[var(--text-primary)]" aria-hidden="true" />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h1)]">
              {workPage.nextTitle}
            </p>
            <span
              className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-primary)] sm:text-[length:var(--fs-h1)]"
              aria-hidden="true"
            >
              →
            </span>
          </div>
          <p className="max-w-[640px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-secondary)]">
            {workPage.nextBody}
          </p>
        </Link>

        <footer className="flex flex-wrap items-center justify-between gap-4 py-12">
          <Link
            href={workPage.footer.backHref}
            className={`${footerActionClass} text-[var(--text-muted)]`}
          >
            {workPage.footer.back}
          </Link>
          <BackToTop label={workPage.footer.top} />
          <Link
            href={workPage.footer.nextHref}
            className={`${footerActionClass} text-[var(--text-primary)]`}
          >
            {workPage.footer.next}
          </Link>
        </footer>
      </Container>
    </PageShell>
  );
}
