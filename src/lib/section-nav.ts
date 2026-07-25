import type { MouseEvent } from "react";

export const sectionNavItems = [
  { label: "Portfolio", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "FAQ", id: "faq" }
] as const;

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
  id: string
) {
  if (window.location.pathname === "/") {
    if (scrollToSection(id)) {
      event.preventDefault();
    }
    return;
  }

  // Full navigation so the hash is reliably applied from legal pages.
  event.preventDefault();
  window.location.assign(sectionHref(id));
}
