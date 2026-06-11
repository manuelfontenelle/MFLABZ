"use client";

import type * as React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

import { Container, Separator } from "@/components/ui";

const navigationLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" }
];

const socialLinks = [
  { label: "Fiverr", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Instagram", href: "#" }
];

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
  return (
    <footer className="border-t border-border bg-background pt-[3.2rem] pb-10 sm:pt-16 lg:pt-[4.8rem]">
      <Container className="space-y-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.75fr_1fr] lg:gap-14">
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-flex font-heading text-2xl font-medium tracking-[-0.06em] text-foreground transition-colors hover:text-foreground/80"
            >
              Brand
            </Link>
            <p className="max-w-sm text-body-sm leading-6 text-muted-foreground">
              Graphic Designer specializing in branding, logo design and visual
              identities for businesses worldwide.
            </p>
          </div>

          <nav className="space-y-4" aria-label="Footer navigation">
            <h2 className="text-sm font-semibold text-foreground">
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
            <h2 className="text-sm font-semibold text-foreground">
              Social Links
            </h2>
            <div className="flex flex-col items-start gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground">Contact</h2>
            <Link
              href="mailto:contact@email.com"
              className="inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              contact@email.com
            </Link>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="inline-flex w-fit items-center gap-2 rounded-button bg-secondary/10 px-3 py-1.5 text-[13px] font-semibold text-foreground shadow-xs">
            <span
              className="flex items-center gap-0.5 text-secondary"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-muted-foreground">
              <span className="text-foreground">Rated 4.9/5</span> from{" "}
              <span className="text-foreground">2500+ Client Reviews</span>
            </span>
          </div>

          <p className="text-sm font-medium text-muted-foreground">
            © 2025 <span className="text-foreground">Your Name</span>. All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
