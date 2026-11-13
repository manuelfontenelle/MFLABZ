"use client";

import type { ReactNode } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { handleSectionNavClick, sectionHref } from "@/lib/section-nav";

export function TrustRatingLink({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <Link
      href={sectionHref("testimonials")}
      onClick={(event) => handleSectionNavClick(event, "testimonials", pathname)}
      className="mb-7 inline-flex max-w-full items-center gap-3 rounded-button border border-border bg-muted py-2 pr-5 pl-3 outline-none transition-opacity hover:opacity-80 focus-visible:ring-ring/30 focus-visible:ring-[3px] sm:mb-8 sm:py-2.5 sm:pr-6 sm:pl-4"
    >
      {children}
    </Link>
  );
}
