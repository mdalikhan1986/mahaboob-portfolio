"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { contactPage } from "@/content/contact";
import { CONVERSATION_ID } from "@/lib/conversation";
import { sendContactMessage } from "@/lib/sendContactMessage";
import { cn } from "@/lib/cn";

const fieldClass =
  "contact-field w-full rounded-[4px] border bg-[#0b0c0e] px-2.5 py-2.5 font-sans text-[length:var(--fs-body-2)] font-normal leading-[1.2] text-[var(--text-white)] placeholder:text-[#6b7280]";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function FieldLabel({
  htmlFor,
  label,
}: {
  htmlFor: string;
  label: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center font-sans text-[length:var(--fs-caption)] font-normal leading-[1.2]"
    >
      <span className="text-[var(--text-white)]">{label}</span>
      <span className="text-[#e53e3e]" aria-hidden="true">
        *
      </span>
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="font-sans text-[length:var(--fs-caption)] text-[#e53e3e]">
      {message}
    </p>
  );
}

export function ContactForm() {
  const errorId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "failure">(
    "idle",
  );

  useEffect(() => {
    if (window.location.hash === `#${CONVERSATION_ID}`) {
      document.getElementById("contact-name")?.focus();
    }
  }, []);

  function validate() {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Work email is required.";
    else if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!message.trim()) next.message = "Please tell me what you are working on.";
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = nextErrors.name
        ? "contact-name"
        : nextErrors.email
          ? "contact-email"
          : "contact-message";
      document.getElementById(first)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await sendContactMessage({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("failure");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex w-full max-w-[720px] flex-col gap-4"
        role="status"
        aria-live="polite"
      >
        <p className="font-sans text-[length:var(--fs-h5)] font-semibold leading-[1.2] text-[var(--text-primary)]">
          {contactPage.form.successTitle}
        </p>
        <p className="font-sans text-[length:var(--fs-body-1)] font-normal leading-[1.2] text-[var(--text-muted)]">
          {contactPage.form.successBody}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex h-12 w-fit items-center justify-center rounded-[4px] bg-[var(--buttons-primary)] px-2.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-default)] transition-opacity duration-150 hover:opacity-85"
        >
          {contactPage.form.sendAnother}
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      className="flex w-full max-w-[720px] flex-col gap-8"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="flex flex-col gap-0.5">
        <FieldLabel htmlFor="contact-name" label={contactPage.form.nameLabel} />
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={contactPage.form.namePlaceholder}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${errorId}-name` : undefined}
          className={cn(
            fieldClass,
            "h-11",
            errors.name ? "border-[#e53e3e]" : "border-[#3b445b]",
          )}
        />
        <FieldError id={`${errorId}-name`} message={errors.name} />
      </div>

      <div className="flex flex-col gap-0.5">
        <FieldLabel htmlFor="contact-email" label={contactPage.form.emailLabel} />
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={contactPage.form.emailPlaceholder}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${errorId}-email` : undefined}
          className={cn(
            fieldClass,
            "h-11",
            errors.email ? "border-[#e53e3e]" : "border-[#3b445b]",
          )}
        />
        <FieldError id={`${errorId}-email`} message={errors.email} />
      </div>

      <div className="flex flex-col gap-1">
        <FieldLabel
          htmlFor="contact-message"
          label={contactPage.form.messageLabel}
        />
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={contactPage.form.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${errorId}-message` : undefined}
          className={cn(
            fieldClass,
            "h-[140px] resize-y p-3",
            errors.message ? "border-[#e53e3e]" : "border-[#3b445b]",
          )}
        />
        <FieldError id={`${errorId}-message`} message={errors.message} />
      </div>

      {status === "failure" ? (
        <p role="alert" className="font-sans text-[length:var(--fs-body-2)] leading-[1.2] text-[#e53e3e]">
          {contactPage.form.failure}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="inline-flex h-12 w-fit items-center justify-center rounded-[4px] bg-[var(--buttons-primary)] px-2.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-default)] transition-opacity duration-150 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? contactPage.form.submitting : contactPage.form.submit}
      </button>
    </form>
  );
}
