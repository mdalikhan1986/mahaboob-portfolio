import { Container } from "@/components/ui/Container";
import { hero } from "@/content/site";

export function SiteLegalFooter() {
  return (
    <footer className="w-full border-t border-[var(--border-subtle)]">
      <Container>
        <div className="flex flex-col gap-5 pt-8 pb-10 md:flex-row md:flex-wrap md:items-center md:justify-between lg:flex-nowrap">
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
      </Container>
    </footer>
  );
}
