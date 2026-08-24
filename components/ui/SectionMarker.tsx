import { cn } from "@/lib/cn";

type SectionMarkerProps = {
  number: string;
  label: string;
  className?: string;
};

export function SectionMarker({ number, label, className }: SectionMarkerProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)]">
        {number}
      </span>
      <span
        className="h-px w-4 bg-[var(--text-primary)]"
        aria-hidden="true"
      />
      <span className="font-sans text-[length:var(--fs-caption)] font-medium uppercase leading-[1.2] text-[var(--text-muted)]">
        {label}
      </span>
    </div>
  );
}
