import Image from "next/image";
import { HeroCapabilities } from "@/components/home/HeroCapabilities";
import { Action } from "@/components/ui/Action";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { hero } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative flex min-h-dvh flex-col">
      <Container className="flex min-h-0 flex-1 flex-col pt-[var(--space-header-to-marker)]">
        <SectionMarker
          number={hero.sectionNumber}
          label={hero.sectionLabel}
        />

        <div className="mt-[var(--space-marker-to-heading-hero)] flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          <div className="flex w-full max-w-[720px] flex-col">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span
                    className="size-2 shrink-0 rounded-full bg-[var(--text-primary)]"
                    aria-hidden="true"
                  />
                  <p className="font-sans text-[length:var(--fs-body-1)] font-bold leading-[1.2] text-[var(--text-muted)]">
                    {hero.eyebrow}
                  </p>
                </div>
                <h1 className="font-sans text-[32px] font-medium leading-[1.2] text-[var(--text-white)] sm:text-[40px] lg:text-[length:var(--fs-h1)]">
                  {hero.headline.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
              </div>

              <p className="max-w-[640px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
                {hero.bio}
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Action href={hero.primaryHref} variant="primary">
                  {hero.primaryCta}
                </Action>
                <Action
                  href={hero.resumeHref}
                  download="Mahaboob_Ali_Khan_Resume.pdf"
                  variant="text"
                >
                  {hero.resumeLabel}
                  <Icon name="link" className="size-5" />
                </Action>
              </div>
            </div>

            <div className="mt-[var(--space-section-index)] flex w-full flex-wrap gap-y-6 border-t border-[var(--border-subtle)] pt-8">
              {hero.credentials.map((item, index) => (
                <div key={item.label} className="flex min-w-[50%] flex-1 sm:min-w-0">
                  {index > 0 ? (
                    <div
                      className="mx-5 hidden h-10 w-px bg-[var(--divider)] sm:block"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="flex flex-col gap-1">
                    <p className="font-sans text-[length:var(--fs-h5)] font-semibold leading-[1.2] text-[var(--text-white)]">
                      {item.metric}
                    </p>
                    <p className="font-sans text-[length:var(--fs-caption)] font-medium leading-[1.2] text-[var(--text-muted)]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Portrait />
        </div>

        <HeroCapabilities />

        <footer className="mt-14 w-full border-t border-[var(--border-subtle)] pt-8 pb-10">
          <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:items-center md:justify-between lg:flex-nowrap">
            <p className="font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-[var(--text-muted)] lg:flex-1">
              {hero.footer.copyright}
            </p>
            <span
              className="hidden h-3 w-px shrink-0 bg-[var(--border-subtle)] lg:block"
              aria-hidden="true"
            />
            <a
              href={`mailto:${hero.footer.email}`}
              className="font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-[var(--text-primary)] transition-opacity duration-150 hover:opacity-80 md:text-right lg:flex-1 lg:text-center"
            >
              {hero.footer.emailLabel}
            </a>
            <span
              className="hidden h-3 w-px shrink-0 bg-[var(--border-subtle)] lg:block"
              aria-hidden="true"
            />
            <p className="font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-[var(--text-muted)] lg:flex-1 lg:text-center">
              {hero.footer.location}
            </p>
            <span
              className="hidden h-3 w-px shrink-0 bg-[var(--border-subtle)] lg:block"
              aria-hidden="true"
            />
            <a
              href={hero.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[length:var(--fs-caption)] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-[var(--text-primary)] transition-opacity duration-150 hover:opacity-80 md:text-right lg:flex-1 lg:text-right"
            >
              {hero.footer.linkedin}
            </a>
          </div>
        </footer>
      </Container>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto h-[360px] w-[280px] overflow-hidden rounded-[300px] sm:h-[440px] sm:w-[360px] lg:mx-0 lg:h-[520px] lg:w-[440px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
      <div className="absolute -left-16 top-[22px] h-[542px] w-[511px] max-lg:left-[-18%] max-lg:top-[4%] max-lg:h-[108%] max-lg:w-[130%]">
        <Image
          src="/images/brand/portrait.png"
          alt="Mahaboob Ali Khan"
          fill
          priority
          sizes="(min-width: 1024px) 440px, 360px"
          className="object-cover object-[center_top]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_91%,rgba(0,0,0,0.8)_100%)]"
        aria-hidden="true"
      />
    </div>
  );
}
