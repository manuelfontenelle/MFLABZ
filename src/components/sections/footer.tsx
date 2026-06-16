"use client";

import type * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { Container } from "@/components/ui";

const navigationLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" }
];

const socialLinks = [
  { label: "Fiverr", href: "https://www.fiverr.com/mflabz", icon: "fiverr" },
  { label: "Behance", href: "https://www.behance.net/mflabz", icon: "behance" },
  { label: "Instagram", href: "https://www.instagram.com/mflabzdesign/", icon: "instagram" }
];

type SocialIconName = (typeof socialLinks)[number]["icon"];

function SocialIcon({ icon }: { icon: SocialIconName }) {
  if (icon === "instagram") {
    return (
      <svg
        className="size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="16" height="16" x="4" y="4" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.7 7.3h.01" />
      </svg>
    );
  }

  return (
    <span className="font-heading text-[0.78rem] leading-none font-semibold tracking-[-0.04em]">
      {icon === "behance" ? "Be" : "fi"}
    </span>
  );
}

function handleSmoothScroll(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  const targetId = href.replace("#", "");
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  event.preventDefault();
  const offset = 88;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });
  window.history.pushState(null, "", href);
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/45 pt-[3.2rem] pb-16 sm:pt-16 lg:pt-[4.8rem]">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.8fr] lg:gap-14">
          <div className="flex flex-col">
            <Link
              href="/"
              className="mb-5 inline-flex items-center"
              aria-label="MFLABZ Studio"
            >
              <Image
                src="/images/mflabz-logo.svg"
                alt=""
                width={88}
                height={48}
                className="h-[2.7rem] w-auto"
              />
            </Link>
            <p className="mb-[1.0625rem] max-w-sm text-body-sm leading-6 text-muted-foreground">
              Graphic Designer specializing in branding, logo design and visual
              identities for businesses worldwide.
            </p>

            <div className="space-y-4">
              <div className="inline-flex max-w-full flex-nowrap items-center gap-1.5 whitespace-nowrap rounded-button border border-border px-2.5 py-[0.3375rem] text-[10.5px] font-semibold text-foreground shadow-xs sm:w-fit sm:gap-[0.45rem] sm:px-[0.85rem] sm:text-[11.7px]">
                <span
                  className="flex items-center gap-0.5 text-secondary"
                  aria-hidden="true"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="size-3 fill-current sm:size-[0.895rem]"
                    />
                  ))}
                </span>
                <span className="text-[10.5px] text-foreground sm:text-[12.1px]">
                  Rated 4.9/5
                </span>
                <span className="text-[10.5px] text-muted-foreground sm:text-[12.1px]">
                  from
                </span>
                <span className="text-[10.5px] text-foreground sm:text-[12.1px]">
                  2500+ Client Reviews
                </span>
              </div>
            </div>
          </div>

          <nav className="space-y-4" aria-label="Footer navigation">
            <h2 className="text-[1.05rem] font-semibold text-foreground">
              Navigation
            </h2>
            <div className="flex flex-col items-start gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleSmoothScroll(event, link.href)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="space-y-4">
            <div className="flex flex-col items-start gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span
                    className="inline-flex size-5 items-center justify-center text-current"
                    aria-hidden="true"
                  >
                    <SocialIcon icon={link.icon} />
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="pt-8 text-xs font-medium text-muted-foreground">
              © {currentYear} <span className="text-foreground">MFlabz</span>. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
