"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { cn } from "@/lib/cn";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const INTERPRETER_PDF_SRC = "/documents/interpreter-case-study.pdf";
const INTERPRETER_PROTOTYPE_TEXT = "Interpreter Application Prototype Link";
const INTERPRETER_PROTOTYPE_HREF =
  "https://www.figma.com/proto/dblKRF2s22IphYdADTjSeR/Design-File-1?page-id=&node-id=141-5138&viewport=-894%2C-361%2C0.1&t=CBnskR81a6SCq2sz-1&scaling=contain&content-scaling=fixed&starting-point-node-id=141%3A5138&show-proto-sidebar=1";

type ProjectPdfViewerProps = {
  src: string;
  label: string;
  downloadName: string;
};

function padPage(value: number) {
  return String(value).padStart(2, "0");
}

function getFocusable(root: HTMLElement) {
  return [
    ...root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  ].filter(
    (node) =>
      !node.hasAttribute("disabled") &&
      node.getAttribute("aria-hidden") !== "true" &&
      node.tabIndex !== -1,
  );
}

export function ProjectPdfViewer({
  src,
  label,
  downloadName,
}: ProjectPdfViewerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pageRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageWidth, setPageWidth] = useState(620);
  const [expanded, setExpanded] = useState(false);
  const hasOpened = useRef(false);

  const measure = useCallback(() => {
    const node = scrollRef.current;
    if (!node) return;
    const next = Math.max(Math.floor(node.clientWidth - 32), 240);
    setPageWidth(next);
  }, []);

  useEffect(() => {
    measure();
    const node = scrollRef.current;
    if (!node) return;
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [measure, expanded]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node || numPages === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const page = Number(visible.target.getAttribute("data-page"));
        if (page) setCurrentPage(page);
      },
      { root: node, threshold: [0.35, 0.55, 0.75] },
    );

    pageRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [numPages, pageWidth, expanded]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setExpanded(false);
        return;
      }

      if (event.key !== "Tab") return;
      const root = overlayRef.current;
      if (!root) return;
      const items = getFocusable(root);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !root.contains(active)) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last || !root.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    closeRef.current?.focus();
    document.addEventListener("keydown", onKey);

    const html = document.documentElement;
    const locked = [
      document.querySelector<HTMLElement>('a[href="#main"]'),
      document.querySelector("header"),
      document.getElementById("main"),
    ].filter((node): node is HTMLElement => Boolean(node));

    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    locked.forEach((node) => node.setAttribute("inert", ""));

    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = "";
      document.body.style.overflow = "";
      locked.forEach((node) => node.removeAttribute("inert"));
    };
  }, [expanded]);

  useEffect(() => {
    if (expanded) {
      hasOpened.current = true;
      return;
    }
    if (hasOpened.current) {
      triggerRef.current?.focus();
    }
  }, [expanded]);

  function openFullscreen() {
    setExpanded(true);
  }

  function closeFullscreen() {
    setExpanded(false);
  }

  const isInterpreter = src === INTERPRETER_PDF_SRC;

  const viewer = (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[#121212]",
        expanded && "relative z-[80] h-full max-h-full w-full max-w-[1100px]",
        !expanded &&
          isInterpreter &&
          "h-[min(560px,calc(100vh-200px))] max-h-[min(560px,calc(100vh-200px))]",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] bg-[#1a1a1a] p-5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="font-sans text-[length:var(--fs-caption)] font-bold leading-[1.2] text-[var(--text-primary)]">
            ●
          </span>
          <p className="truncate font-sans text-[length:var(--fs-body-1)] font-semibold leading-[1.2] text-[var(--text-white)]">
            {label}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            ref={triggerRef}
            type="button"
            onClick={expanded ? closeFullscreen : openFullscreen}
            aria-label={expanded ? "Close fullscreen" : "Open fullscreen"}
            className="font-sans text-[10px] font-bold leading-[1.2] text-[var(--text-muted)]"
          >
            {expanded ? "CLOSE" : "↗ FULLSCREEN"}
          </button>
          <a
            href={src}
            download={downloadName}
            className="font-sans text-[10px] font-bold leading-[1.2] text-[var(--text-primary)]"
          >
            ↓ DOWNLOAD PDF
          </a>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={cn(
          "overflow-y-auto overflow-x-hidden bg-[#0f111a]",
          expanded || isInterpreter
            ? "min-h-0 h-0 flex-1"
            : "h-[min(700px,calc(100vh-240px))] max-h-[700px]",
        )}
      >
        <Document
          file={src}
          loading={
            <p className="p-10 text-center font-sans text-[length:var(--fs-caption)] text-[var(--text-muted)]">
              Loading case study…
            </p>
          }
          error={
            <p className="p-10 text-center font-sans text-[length:var(--fs-caption)] text-[var(--text-muted)]">
              Unable to load the PDF.
            </p>
          }
          onLoadSuccess={({ numPages: next }) => {
            setNumPages(next);
            setCurrentPage(1);
          }}
        >
          <div className="flex flex-col items-center gap-4 px-4 py-4">
            {Array.from({ length: numPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <div
                  key={pageNumber}
                  data-page={pageNumber}
                  ref={(el) => {
                    if (el) pageRefs.current.set(pageNumber, el);
                    else pageRefs.current.delete(pageNumber);
                  }}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={pageWidth}
                    renderAnnotationLayer
                    renderTextLayer
                    className="max-w-full overflow-hidden bg-white shadow-none"
                  />
                </div>
              );
            })}
          </div>
        </Document>
      </div>
      {isInterpreter ? (
        <div className="flex shrink-0 flex-wrap items-center gap-2 border-t border-[var(--border-subtle)] bg-[#14171e] px-5 py-5">
          <span className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
            Prototype Link:
          </span>
          <a
            href={INTERPRETER_PROTOTYPE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)] underline"
          >
            {INTERPRETER_PROTOTYPE_TEXT}
          </a>
        </div>
      ) : null}

      <div className="flex shrink-0 items-center justify-between border-t border-[var(--border-subtle)] p-5">
        <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-muted)]">
          PAGE {padPage(currentPage)} / {padPage(numPages || 1)}
        </p>
        <p className="font-sans text-[length:var(--fs-caption)] font-semibold leading-[1.2] text-[var(--text-primary)]">
          SCROLL TO EXPLORE ↓
        </p>
      </div>
    </div>
  );

  if (!expanded) {
    return viewer;
  }

  return (
    <>
      <div
        className="h-[min(813px,calc(100vh-140px))] w-full"
        aria-hidden="true"
      />
      {createPortal(
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Case study PDF fullscreen"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/80"
            onClick={closeFullscreen}
          />
          <button
            ref={closeRef}
            type="button"
            title="Close fullscreen"
            aria-label="Close fullscreen"
            onClick={closeFullscreen}
            className="absolute right-3 top-3 z-[220] flex size-11 items-center justify-center rounded-[4px] bg-[#121212] text-white outline-none ring-1 ring-white/25 hover:ring-white/50 focus-visible:ring-2 focus-visible:ring-white sm:right-5 sm:top-5"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="relative z-[105] flex h-full w-full max-w-[1100px] flex-col">
            {viewer}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
