"use client";

import { Action } from "@/components/ui/Action";
import { Icon } from "@/components/ui/Icon";
import { contactPage } from "@/content/contact";
import { scrollToConversation } from "@/lib/conversation";

export function ContactHeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={scrollToConversation}
        className="inline-flex h-12 items-center justify-center gap-2.5 rounded-[4px] bg-[var(--buttons-primary)] px-2.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-default)] transition-opacity duration-150 hover:opacity-85"
      >
        {contactPage.primaryCta}
        <Icon name="mail" className="size-5" />
      </button>
      <Action
        href={contactPage.resumeHref}
        download="Mahaboob_Ali_Khan_Resume.pdf"
        variant="text"
        className="h-8 text-white"
      >
        {contactPage.resumeLabel}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/contact-download.svg"
          alt=""
          width={20}
          height={20}
          className="size-5 object-contain"
        />
      </Action>
    </div>
  );
}
