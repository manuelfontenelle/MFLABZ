import type { MouseEvent } from "react";

export const sectionNavItems = [
  { id: "portfolio", labelKey: "portfolio" },
  { id: "services", labelKey: "services" },
  { id: "testimonials", labelKey: "reviews" },
  { id: "why-choose-me", labelKey: "about" },
  { id: "process", labelKey: "process" },
  { id: "faq", labelKey: "faq" }
] as const;

export type SectionNavLabelKey = (typeof sectionNavItems)[number]["labelKey"];

export const SECTION_SCROLL_OFFSET = 88;

export function sectionHref(id: string) {
  return `/#${id}`;
}

export function scrollToSection(id: string) {
  const target = document.getElementById(id);

  if (!target) {
    return false;
  }

  const top =
    target.getBoundingClientRect().top + window.scrollY - SECTION_SCROLL_OFFSET;

  window.scrollTo({ top, behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);

  return true;
}

export function handleSectionNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
  pathname: string
) {
  if (pathname === "/" || pathname === "") {
    if (scrollToSection(id)) {
      event.preventDefault();
    }
    return;
  }

  // Use the locale-prefixed href already rendered by next-intl Link.
  event.preventDefault();
  window.location.assign(event.currentTarget.href);
}
