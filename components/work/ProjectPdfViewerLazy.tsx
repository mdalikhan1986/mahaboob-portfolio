"use client";

import dynamic from "next/dynamic";

export const ProjectPdfViewerLazy = dynamic(
  () =>
    import("@/components/work/ProjectPdfViewer").then(
      (mod) => mod.ProjectPdfViewer,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(813px,calc(100vh-140px))] w-full flex-col overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[#121212]">
        <div className="border-b border-[var(--border-subtle)] bg-[#1a1a1a] p-5">
          <p className="font-sans text-[length:var(--fs-caption)] text-[var(--text-muted)]">
            Loading case study…
          </p>
        </div>
        <div className="flex-1 bg-[#0f111a]" />
      </div>
    ),
  },
);
