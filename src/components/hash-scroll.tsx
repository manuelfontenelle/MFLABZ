"use client";

import { useEffect } from "react";

import { scrollToSection } from "@/lib/section-nav";

export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");

    if (!hash) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      scrollToSection(hash);
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}
