import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHeroActions } from "@/components/contact/ContactHeroActions";
import { PageShell } from "@/components/layout/PageShell";
import { BackToTop, footerActionClass } from "@/components/ui/BackToTop";
import { Container } from "@/components/ui/Container";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { contactPage } from "@/content/contact";
import { CONVERSATION_ID } from "@/lib/conversation";

function DirectLabel({
  label,
  icon,
  inset,
  png,
}: {
  label: string;
  icon: string;
  inset?: string;
  png?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      {png ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon}
          alt=""
          width={24}
          height={24}
          className="size-6 shrink-0 object-contain"
          aria-hidden="true"
        />
      ) : (
        <span className="relative size-6 shrink-0 overflow-hidden">
          <span className="absolute" style={{ inset: inset ?? "16.67%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={icon}
              alt=""
              width={24}
              height={24}
              className="size-full max-w-none"
              aria-hidden="true"
            />
          </span>
        </span>
      )}
      <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
        {label}
      </p>
    </div>
  );
}

export function ContactPage() {
  const mailto = `mailto:${contactPage.email}?subject=${encodeURIComponent(contactPage.form.subject)}`;

  return (
    <PageShell>
      <style>{`
        @keyframes contact-avail-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .contact-avail-blink {
          animation: contact-avail-blink 3.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-avail-blink {
            animation: none;
          }
        }
      `}</style>
      <Container className="flex flex-col">
        <section className="flex flex-col gap-[var(--space-marker-to-heading)] border-b border-[var(--border-subtle)] pb-[var(--space-section)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionMarker
              number={contactPage.sectionNumber}
              label={contactPage.sectionLabel}
            />
            <p className="contact-avail-blink inline-flex items-center gap-2 rounded-[20px] border border-[var(--border-subtle)] px-3 py-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/contact-dot.svg"
                alt=""
                width={8}
                height={8}
                className="size-2 shrink-0"
              />
              <span className="font-sans text-[10px] font-bold leading-[1.2] text-[var(--text-primary)]">
                {contactPage.availability}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-[var(--space-heading-to-copy)]">
            <h1 className="font-sans text-[32px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[40px] lg:text-[length:var(--fs-h1)]">
              {contactPage.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-[720px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
              {contactPage.supporting}
            </p>
          </div>

          <ContactHeroActions />
        </section>

        <section
          id={CONVERSATION_ID}
          className="flex scroll-mt-[104px] flex-col gap-14 border-b border-[var(--border-subtle)] py-[var(--space-section)]"
        >
          <div className="flex flex-col gap-4">
            <SectionMarker
              number={contactPage.form.number}
              label={contactPage.form.label}
            />
            <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h2)]">
              {contactPage.form.heading}
            </h2>
            <p className="max-w-[720px] font-sans text-[length:var(--fs-title)] font-normal leading-[1.2] text-[var(--text-muted)]">
              {contactPage.form.supporting}
            </p>
          </div>
          <div className="relative w-full">
            <ContactForm />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={contactPage.form.illustration.src}
              alt=""
              width={contactPage.form.illustration.width}
              height={contactPage.form.illustration.height}
              className="pointer-events-none mx-auto mt-10 h-[272px] w-[314px] object-contain lg:absolute lg:top-14 lg:right-10 lg:mx-0 lg:mt-0"
              aria-hidden="true"
            />
          </div>
        </section>

        <section className="flex flex-col gap-[34px] border-b border-[var(--border-subtle)] py-[var(--space-section)]">
          <div className="flex flex-col gap-4">
            <SectionMarker
              number={contactPage.direct.number}
              label={contactPage.direct.label}
            />
            <h2 className="font-sans text-[28px] font-semibold leading-[1.2] text-[var(--text-white)] sm:text-[length:var(--fs-h2)]">
              {contactPage.direct.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <article className="flex flex-col gap-4 rounded-lg border border-[var(--border-subtle)] bg-[#0b0c0e] p-8">
              <DirectLabel
                label={contactPage.direct.emailLabel}
                icon="/icons/contact/google.png"
                png
              />
              <a
                href={mailto}
                className="break-all font-sans text-[length:var(--fs-h5)] font-bold leading-[1.2] text-[var(--text-white)] transition-opacity duration-150 hover:opacity-80"
              >
                {contactPage.email}
              </a>
              <a
                href={mailto}
                className="inline-flex h-8 w-fit items-center gap-2.5 rounded-[4px] px-2.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-primary)] underline underline-offset-4 transition-opacity duration-150 hover:opacity-80"
              >
                {contactPage.direct.emailCta}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/contact-mail.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 object-contain"
                />
              </a>
            </article>

            <article className="flex flex-col gap-4 rounded-lg border border-[var(--border-subtle)] bg-[#0b0c0e] p-8">
              <DirectLabel
                label={contactPage.direct.linkedinLabel}
                icon="/icons/contact/brand-linkedin.svg"
                inset="16.67%"
              />
              <p className="font-sans text-[length:var(--fs-h5)] font-bold leading-[1.2] text-[var(--text-white)]">
                {contactPage.linkedinName}
              </p>
              <a
                href={contactPage.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-fit items-center gap-2.5 rounded-[4px] px-2.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-primary)] underline underline-offset-4 transition-opacity duration-150 hover:opacity-80"
              >
                {contactPage.direct.linkedinCta}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/contact-eye.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 object-contain"
                />
              </a>
            </article>

            <article className="flex flex-col gap-4 rounded-lg border border-[var(--border-subtle)] bg-[#0b0c0e] p-8">
              <DirectLabel
                label={contactPage.direct.locationLabel}
                icon="/icons/contact/map-pin.svg"
                inset="12.5% 16.67% 10.48% 16.67%"
              />
              <p className="font-sans text-[length:var(--fs-h5)] font-bold leading-[1.2] text-[var(--text-white)]">
                {contactPage.direct.location}
              </p>
              <p className="font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-muted)]">
                {contactPage.direct.timezone}
              </p>
            </article>
          </div>
        </section>

        <footer className="grid grid-cols-3 items-center gap-4 py-[var(--space-footer-y)]">
          <span />
          <BackToTop label={contactPage.footer.top} />
          <Link
            href="/"
            className={`${footerActionClass} justify-self-end text-[var(--text-primary)]`}
          >
            Home →
          </Link>
        </footer>
      </Container>
    </PageShell>
  );
}
