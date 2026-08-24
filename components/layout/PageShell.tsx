import { cn } from "@/lib/cn";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div
      className={cn(
        "pt-[var(--space-header-to-marker)] pb-[var(--space-page-bottom)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
