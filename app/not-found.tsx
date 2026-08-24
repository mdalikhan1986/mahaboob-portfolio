import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-[var(--space-page-x)] py-24">
      <p className="font-sans text-[length:var(--fs-caption)] font-semibold text-[var(--text-primary)]">
        404
      </p>
      <h1 className="mt-4 font-sans text-[length:var(--fs-h2)] font-semibold text-[var(--text-white)]">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 inline-block font-sans text-[length:var(--fs-body-2)] font-medium text-[var(--text-primary)] underline"
      >
        Back to home
      </Link>
    </div>
  );
}
