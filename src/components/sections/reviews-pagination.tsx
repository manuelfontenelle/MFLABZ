"use client";

import { useLayoutEffect } from "react";

import { Link } from "@/i18n/navigation";
import { highRatedReviewPageCount } from "@/data/high-rated-reviews";
import { cn } from "@/lib/utils";

const LIST_ID = "liste";
const SCROLL_FLAG = "mflabz-reviews-list";

function pageHref(page: number) {
  if (page <= 1) {
    return "/reviews" as const;
  }

  return { pathname: "/reviews" as const, query: { page: String(page) } };
}

function visiblePages(current: number, total: number) {
  const pages = new Set<number>([1, total, current - 1, current, current + 1]);

  return [...pages].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b);
}

function markListScroll() {
  sessionStorage.setItem(SCROLL_FLAG, "1");
}

function alignList() {
  document.getElementById(LIST_ID)?.scrollIntoView({ block: "start" });
}

export function ReviewsListScroll({ page }: { page: number }) {
  useLayoutEffect(() => {
    if (sessionStorage.getItem(SCROLL_FLAG) !== "1") {
      return;
    }

    sessionStorage.removeItem(SCROLL_FLAG);
    alignList();
    const frame = window.requestAnimationFrame(alignList);
    const timer = window.setTimeout(alignList, 50);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [page]);

  return null;
}

export function ReviewsPagination({
  page,
  label,
  previousLabel,
  nextLabel
}: {
  page: number;
  label: string;
  previousLabel: string;
  nextLabel: string;
}) {
  const total = highRatedReviewPageCount;
  const pages = visiblePages(page, total);
  const linkClass =
    "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm font-medium text-foreground transition-colors hover:bg-white";

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2" aria-label={label}>
      {page > 1 ? (
        <Link href={pageHref(page - 1)} scroll={false} onClick={markListScroll} className={linkClass}>
          {previousLabel}
        </Link>
      ) : (
        <span className={cn(linkClass, "pointer-events-none text-[#8a8a94]")}>{previousLabel}</span>
      )}

      {pages.map((pageNumber, index) => {
        const previous = pages[index - 1];
        const showGap = previous !== undefined && pageNumber - previous > 1;

        return (
          <span key={pageNumber} className="contents">
            {showGap ? (
              <span className="px-1 text-sm text-[#8a8a94]" aria-hidden="true">
                …
              </span>
            ) : null}
            {pageNumber === page ? (
              <span
                className="inline-flex h-9 min-w-9 items-center justify-center rounded-md bg-foreground px-3 text-sm font-medium text-background"
                aria-current="page"
              >
                {pageNumber}
              </span>
            ) : (
              <Link
                href={pageHref(pageNumber)}
                scroll={false}
                onClick={markListScroll}
                className={linkClass}
              >
                {pageNumber}
              </Link>
            )}
          </span>
        );
      })}

      {page < total ? (
        <Link href={pageHref(page + 1)} scroll={false} onClick={markListScroll} className={linkClass}>
          {nextLabel}
        </Link>
      ) : (
        <span className={cn(linkClass, "pointer-events-none text-[#8a8a94]")}>{nextLabel}</span>
      )}
    </nav>
  );
}
