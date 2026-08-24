import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { ProjectPdfViewerLazy } from "@/components/work/ProjectPdfViewerLazy";
import type { ProjectCaseStudy } from "@/content/projects";
import { cn } from "@/lib/cn";

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-primary)]">
        {number}
      </span>
      <span
        className="h-px w-4 bg-[var(--text-primary)]"
        aria-hidden="true"
      />
      <h2 className="font-sans text-[length:var(--fs-h5)] font-bold leading-[1.2] text-[var(--text-white)]">
        {title}
      </h2>
    </div>
  );
}

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-primary)]">
        •
      </span>
      <span className="font-sans text-[length:var(--fs-body-1)] font-normal leading-[1.2] text-[var(--text-muted)]">
        {children}
      </span>
    </li>
  );
}

function NavItem({
  item,
  align,
}: {
  item: ProjectCaseStudy["prev"];
  align?: "start" | "end";
}) {
  const className = cn(
    "font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] transition-colors duration-200",
    align === "end" && "text-right",
    item.tone === "primary"
      ? "text-[var(--text-primary)]"
      : item.href
        ? "text-[var(--text-white)]"
        : "text-[var(--text-muted)]",
    item.href && "hover:text-[var(--text-primary)]",
  );

  if (item.href) {
    return (
      <Link href={item.href} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <span className={className} aria-disabled="true">
      {item.label}
    </span>
  );
}

export function ProjectCaseStudyPage({ project }: { project: ProjectCaseStudy }) {
  return (
    <PageShell>
      <Container className="flex flex-col gap-[60px]">
        <header className="flex flex-col gap-6">
          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-2 font-sans text-[length:var(--fs-caption)] leading-[1.2]"
          >
            <span className="font-bold text-[var(--text-primary)]">←</span>
            <span className="font-semibold text-[var(--text-muted)]">
              BACK TO WORK
            </span>
          </Link>
          <p className="font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-primary)]">
            {project.eyebrow}
          </p>
          <h1 className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[40px] lg:text-[length:var(--fs-h1)]">
            {project.title}
          </h1>
          <p className="max-w-[1240px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
            {project.summary}
          </p>
          <div className="flex flex-col gap-6 border-y border-[var(--border-subtle)] py-5 sm:flex-row sm:items-start sm:gap-6">
            {[
              { label: "Role", value: project.role },
              { label: "Platform", value: project.platform },
              { label: "Users", value: project.users },
            ].map((item, index) => (
              <div key={item.label} className="flex min-w-0 flex-1">
                {index > 0 ? (
                  <div
                    className="mr-6 hidden h-10 w-px bg-[var(--border-subtle)] sm:block"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="flex flex-col gap-1.5">
                  <p className="font-sans text-[10px] font-bold leading-[1.2] text-[var(--text-muted)]">
                    {item.label}
                  </p>
                  <p className="font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-white)]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </header>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex w-full max-w-[500px] flex-col gap-8">
            <section className="flex flex-col gap-4 border-b border-[var(--border-subtle)] pb-8">
              <SectionHeading number="01" title="Overview" />
              <p className="font-sans text-[length:var(--fs-body-1)] font-normal leading-[1.2] text-[var(--text-muted)]">
                {project.overview}
              </p>
            </section>

            <section className="flex flex-col gap-4 border-b border-[var(--border-subtle)] pb-8">
              <SectionHeading number="02" title="The Challenge" />
              <p className="font-sans text-[length:var(--fs-body-1)] font-normal leading-[1.2] text-[var(--text-muted)]">
                {project.challengeIntro}
              </p>
              <ul className="flex flex-col gap-2">
                {project.challengeBullets.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4 border-b border-[var(--border-subtle)] pb-8">
              <SectionHeading number="03" title="The Solution" />
              <p className="font-sans text-[length:var(--fs-body-1)] font-normal leading-[1.2] text-[var(--text-muted)]">
                {project.solutionIntro}
              </p>
              <ul className="flex flex-col gap-2">
                {project.solutionBullets.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4 border-b border-[var(--border-subtle)] pb-8">
              <SectionHeading number="04" title="Design Decisions" />
              <div className="flex flex-col gap-4">
                {project.decisions.map((decision) => (
                  <article key={decision.title} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)]">
                        {decision.numeral}
                      </span>
                      <h3 className="font-sans text-[length:var(--fs-body-1)] font-bold leading-[1.2] text-[var(--text-white)]">
                        {decision.title}
                      </h3>
                    </div>
                    <p className="font-sans text-[length:var(--fs-body-2)] font-normal leading-[1.2] text-[var(--text-muted)]">
                      {decision.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-4 border-b border-[var(--border-subtle)] pb-8">
              <SectionHeading number="05" title="My Contribution" />
              <div className="flex flex-wrap gap-2">
                {project.contribution.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[4px] bg-[#f7f7f7] px-3 py-1.5 font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-4 border-b border-[var(--border-subtle)] pb-8">
              <SectionHeading number="06" title="Outcome" />
              {project.outcomeIntro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-sans text-[length:var(--fs-body-1)] font-normal leading-[1.2] text-[var(--text-muted)]"
                >
                  {paragraph}
                </p>
              ))}
              {project.outcomeBullets ? (
                <ul className="flex flex-col gap-2">
                  {project.outcomeBullets.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              ) : null}
            </section>
          </div>

          <div className="w-full min-w-0 flex-1 lg:sticky lg:top-[120px] lg:max-w-[700px]">
            <ProjectPdfViewerLazy
              src={project.pdfSrc}
              label={project.pdfLabel}
              downloadName={project.pdfDownloadName}
            />
          </div>
        </div>

        <nav
          className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-10"
          aria-label="Project"
        >
          <NavItem item={project.prev} />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-sans text-[length:var(--fs-caption)] leading-[1.2] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
          >
            <span className="font-bold">←</span>
            <span className="font-semibold">BACK TO WORK</span>
          </Link>
          <NavItem item={project.next} align="end" />
        </nav>
      </Container>
    </PageShell>
  );
}
