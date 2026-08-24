"use client";

import { usePathname } from "next/navigation";
import { Action } from "@/components/ui/Action";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { contactConversationHref, scrollToConversation } from "@/lib/conversation";

export function LetsTalkCta({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const pathname = usePathname();
  const sizeClass = compact ? "h-9 px-3 text-[13px]" : undefined;
  const iconClass = compact ? "size-4" : "size-5";

  if (pathname === "/contact") {
    return (
      <button
        type="button"
        onClick={scrollToConversation}
        className={cn(
          "inline-flex h-10 items-center justify-center gap-2.5 rounded-[4px] bg-[var(--surface-primary)] px-2.5 font-sans text-[length:var(--fs-body-2)] font-medium leading-[1.2] text-[var(--text-default)]",
          sizeClass,
          className,
        )}
      >
        Lets Talk
        <Icon name="mail" className={iconClass} />
      </button>
    );
  }

  return (
    <Action
      href={contactConversationHref}
      variant="primarySm"
      className={cn(sizeClass, className)}
    >
      Lets Talk
      <Icon name="mail" className={iconClass} />
    </Action>
  );
}
