import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { BackToTop, footerActionClass } from "@/components/ui/BackToTop";
import { Container } from "@/components/ui/Container";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { aboutPage } from "@/content/about";
import { cn } from "@/lib/cn";

function AboutIcon({
  name,
  box,
  inset = "12.5%",
}: {
  name: string;
  box: number;
  inset?: string;
}) {
  return (
    <span
      className="relative shrink-0 overflow-hidden"
      style={{ width: box, height: box }}
    >
      <span className="absolute" style={{ inset }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/icons/about/${name}.svg`}
          alt=""
          width={box}
          height={box}
          className="size-full max-w-none"
          aria-hidden="true"
        />
      </span>
    </span>
  );
}

function ProcessTag({
  icon,
  label,
  accent,
  inset,
  className,
}: {
  icon: string;
  label: string;
  accent: boolean;
  inset?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-9 items-center gap-2.5 rounded-full bg-[#212324] px-2.5",
        className,
      )}
    >
      <AboutIcon name={icon} box={16} inset={inset} />
      <span
        className={cn(
          "font-sans text-[10px] font-normal leading-[1.2] whitespace-nowrap",
          accent ? "text-[var(--text-primary)]" : "text-[var(--text-white)]",
        )}
      >
        {label}
      </span>
    </span>
  );
}

export function AboutPage() {
  return (
    <PageShell>
      <Container className="flex flex-col gap-[var(--space-section)]">
        <section className="flex flex-col gap-[var(--space-marker-to-heading)]">
          <SectionMarker
            number={aboutPage.sectionNumber}
            label={aboutPage.sectionLabel}
          />
          <h1 className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[40px] lg:text-[length:var(--fs-h1)]">
            {aboutPage.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </section>

        <section className="flex flex-col gap-[var(--space-section)] lg:flex-row lg:items-stretch">
          <article className="flex w-full flex-col gap-12 rounded-[20px] bg-[#111111] p-6 lg:max-w-[545px] lg:flex-1">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-sans text-[length:var(--fs-h4)] font-semibold leading-[1.2] text-[var(--text-white)]">
                {aboutPage.introLabel}
              </h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={aboutPage.objectSrc}
                alt={aboutPage.objectAlt}
                width={134}
                height={143}
                className="h-[143px] w-[134px] shrink-0 object-contain"
              />
            </div>
            <div className="flex flex-col gap-8 font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-white)]">
              {aboutPage.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="flex min-w-0 w-full flex-col rounded-[20px] bg-[#111111] p-6 lg:flex-1">
            <div className="flex flex-col gap-2">
              <h2 className="font-sans text-[length:var(--fs-h4)] font-semibold leading-[1.2] text-[var(--text-white)]">
                {aboutPage.processEyebrow}
              </h2>
              <p className="font-sans text-[length:var(--fs-body-1)] font-normal leading-[1.2] text-[var(--text-muted)]">
                {aboutPage.processSupporting}
              </p>
            </div>

            <div className="-mx-2 overflow-x-auto pt-6">
              <div className="flex min-w-[593px] flex-col gap-2.5 px-2">
                <div className="flex items-center gap-[61px]">
                  {aboutPage.processStages.map((stage) => (
                    <div
                      key={stage.index}
                      className="flex flex-1 flex-col items-center justify-center gap-2.5 p-2.5"
                    >
                      <span className="flex size-[34px] items-center justify-center rounded-[17px] bg-[var(--surface-primary)]">
                        <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-default)]">
                          {stage.index}
                        </span>
                      </span>
                      <p className="text-center font-sans text-[length:var(--fs-body-2)] font-semibold leading-[1.2] text-[var(--text-white)]">
                        {stage.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/about/process-line.svg"
                  alt=""
                  width={455}
                  height={18}
                  className="mx-auto h-[18px] w-[455px] max-w-full"
                />

                <div className="flex items-center gap-[60px]">
                  {aboutPage.processStages.map((stage) => (
                    <p
                      key={stage.body}
                      className="w-[157px] shrink-0 px-2.5 text-center font-sans text-[length:var(--fs-caption)] font-normal leading-[1.2] text-[#6b7280]"
                    >
                      {stage.body}
                    </p>
                  ))}
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/about/process-brackets.svg"
                  alt=""
                  width={573}
                  height={14}
                  className="mx-auto h-[13.5px] w-[573px] max-w-full"
                />

                <div className="flex items-start justify-center gap-[83px] pt-1">
                  <div className="flex w-24 flex-col items-center gap-5">
                    <ProcessTag
                      icon={aboutPage.processTags[0].icon}
                      label={aboutPage.processTags[0].label}
                      accent={aboutPage.processTags[0].accent}
                      inset={aboutPage.processTags[0].inset}
                      className="w-full"
                    />
                    <ProcessTag
                      icon={aboutPage.processTags[1].icon}
                      label={aboutPage.processTags[1].label}
                      accent={aboutPage.processTags[1].accent}
                      inset={aboutPage.processTags[1].inset}
                    />
                  </div>
                  <div className="grid w-[189px] grid-cols-2 gap-x-2.5 gap-y-5">
                    <ProcessTag
                      icon={aboutPage.processTags[2].icon}
                      label={aboutPage.processTags[2].label}
                      accent={aboutPage.processTags[2].accent}
                      inset={aboutPage.processTags[2].inset}
                    />
                    <ProcessTag
                      icon={aboutPage.processTags[3].icon}
                      label={aboutPage.processTags[3].label}
                      accent={aboutPage.processTags[3].accent}
                      inset={aboutPage.processTags[3].inset}
                    />
                    <ProcessTag
                      icon={aboutPage.processTags[4].icon}
                      label={aboutPage.processTags[4].label}
                      accent={aboutPage.processTags[4].accent}
                      inset={aboutPage.processTags[4].inset}
                      className="col-span-2 justify-center"
                    />
                  </div>
                  <div className="flex w-[84px] flex-col items-center gap-3.5">
                    <ProcessTag
                      icon={aboutPage.processTags[5].icon}
                      label={aboutPage.processTags[5].label}
                      accent={aboutPage.processTags[5].accent}
                      inset={aboutPage.processTags[5].inset}
                      className="w-full"
                    />
                    <ProcessTag
                      icon={aboutPage.processTags[6].icon}
                      label={aboutPage.processTags[6].label}
                      accent={aboutPage.processTags[6].accent}
                      inset={aboutPage.processTags[6].inset}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)]">
              {aboutPage.capabilitiesEyebrow}
            </p>
            <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] lg:text-[length:var(--fs-h4)]">
              {aboutPage.capabilitiesHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
            {aboutPage.capabilities.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6"
              >
                <div className="flex items-center gap-2.5">
                  <AboutIcon name={item.icon} box={24} inset={item.inset} />
                  <h3 className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-white)]">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-[length:var(--fs-body-2)] font-normal leading-[1.2] text-[var(--text-muted)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-[var(--space-section)] lg:flex-row lg:items-stretch">
          <article className="flex w-full flex-col gap-12 rounded-[20px] bg-[#111111] p-6 lg:flex-1">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
                {aboutPage.thinkEyebrow}
              </p>
              <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] lg:text-[length:var(--fs-h4)]">
                {aboutPage.thinkHeading}
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
              {aboutPage.pillars.map((pillar) => (
                <article
                  key={pillar.index}
                  className="flex min-w-0 flex-1 flex-col gap-3 overflow-hidden rounded-[10px] bg-[var(--surface-card)] p-3.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[length:var(--fs-body-2)] font-semibold leading-[1.2] text-[var(--text-primary)]">
                      {pillar.index}
                    </span>
                    <span className="font-sans text-[length:var(--fs-body-2)] font-semibold leading-[1.2] text-[var(--text-muted)]">
                      {pillar.label}
                    </span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/about/pillar-rule.svg"
                    alt=""
                    width={124}
                    height={1}
                    className="h-px w-full"
                  />
                  <div className="flex flex-col gap-3.5">
                    <h3 className="font-sans text-[length:var(--fs-body-2)] font-semibold leading-[1.2] text-[var(--text-white)]">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[10px] font-normal leading-[1.2] text-[var(--text-muted)]">
                      {pillar.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="flex w-full flex-col gap-12 rounded-[20px] bg-[#111111] p-6 lg:flex-1">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
                {aboutPage.problemsEyebrow}
              </p>
              <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] lg:text-[length:var(--fs-h4)]">
                {aboutPage.problemsHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-[34px] gap-y-[34px] sm:grid-cols-2">
              {aboutPage.problems.map((problem) => (
                <article
                  key={problem.index}
                  className="flex flex-col gap-3 border-b border-[var(--border-subtle)] pb-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)]">
                      {problem.index}
                    </span>
                    <h3 className="font-sans text-[length:var(--fs-body-1)] font-semibold leading-[1.2] text-[var(--text-white)]">
                      {problem.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[length:var(--fs-body-2)] font-normal leading-[1.2] text-[var(--text-muted)]">
                    {problem.body}
                  </p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] py-12">
          <Link
            href={aboutPage.footer.backHref}
            className={`${footerActionClass} text-[var(--text-muted)]`}
          >
            {aboutPage.footer.back}
          </Link>
          <BackToTop label={aboutPage.footer.top} />
          <Link
            href={aboutPage.footer.nextHref}
            className={`${footerActionClass} text-[var(--text-primary)]`}
          >
            {aboutPage.footer.next}
          </Link>
        </footer>
      </Container>
    </PageShell>
  );
}
