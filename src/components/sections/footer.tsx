"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { Container } from "@/components/ui";
import { siteConfig } from "@/config/site";
import {
  handleSectionNavClick,
  sectionHref,
  sectionNavItems
} from "@/lib/section-nav";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Legal Notice", href: "/legal" }
];

const socialLinks = [
  { label: "Fiverr", href: siteConfig.links.fiverr, icon: "fiverr" },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: "linkedin" },
  { label: "Behance", href: siteConfig.links.behance, icon: "behance" },
  { label: "Instagram", href: siteConfig.links.instagram, icon: "instagram" }
] as const;

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

  if (icon === "linkedin") {
    return (
      <svg
        className="size-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }

  return (
    <span className="font-heading text-[0.78rem] leading-none font-semibold tracking-[-0.04em]">
      {icon === "behance" ? "Be" : "fi"}
    </span>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/45 pt-[3.2rem] pb-16 sm:pt-16 lg:pt-[4.8rem]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.8fr_0.8fr] lg:gap-14">
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
            <p className="mb-2 text-sm font-medium text-foreground">
              {siteConfig.creator} - Studio by {siteConfig.founderName}
            </p>
            <p className="mb-[1.0625rem] max-w-sm text-body-sm leading-6 text-muted-foreground">
              Graphic Designer specializing in branding, logo design and visual
              identities for businesses worldwide.
            </p>

            <div className="space-y-4">
              <div className="inline-flex max-w-full flex-nowrap items-center gap-1.5 whitespace-nowrap rounded-button border border-border px-2.5 py-[0.3375rem] text-[10.5px] font-medium text-foreground shadow-xs sm:w-fit sm:gap-[0.45rem] sm:px-[0.85rem] sm:text-[11.7px]">
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
                  <span className="font-semibold">Rated </span>
                  <span className="font-semibold text-secondary">4.9/5</span>
                  {" from "}
                  <span className="font-semibold">2500+ Client Reviews</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:contents">
            <nav className="space-y-4" aria-label="Footer navigation">
              <p className="text-[1.05rem] font-semibold text-foreground">
                Navigation
              </p>
              <div className="flex flex-col items-start gap-3">
                {sectionNavItems.map((link) => (
                  <Link
                    key={link.id}
                    href={sectionHref(link.id)}
                    onClick={(event) => handleSectionNavClick(event, link.id)}
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
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <nav
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
            aria-label="Legal"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs font-medium text-muted-foreground sm:text-right">
            © {currentYear} <span className="text-foreground">MFlabz</span>. All
            Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
