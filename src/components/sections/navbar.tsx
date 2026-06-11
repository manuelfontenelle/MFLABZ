"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-40 bg-background/95 pt-4">
      <Container className="flex h-10 items-center">
        <Link
          href="/"
          className="inline-flex items-center"
          onClick={() => setIsMenuOpen(false)}
          aria-label="MFLABZ Studio"
        >
          <Image
            src="/images/mflabz-logo.svg"
            alt=""
            width={88}
            height={48}
            className="h-[2.4rem] w-auto sm:h-[2.7rem]"
            priority
          />
        </Link>

        <nav
          className="ml-auto hidden items-center justify-end gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[0.9rem] font-medium uppercase leading-none tracking-[-0.035em] text-foreground after:absolute after:left-0 after:top-[calc(100%+0.22rem)] after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-700 after:ease-out hover:after:scale-x-100 sm:text-[0.97rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex size-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:border-foreground/25 hover:bg-muted focus-visible:ring-ring/30 focus-visible:ring-[4px] focus-visible:outline-none md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {isMenuOpen && (
        <Container className="md:hidden">
          <nav
            id="mobile-navigation"
            className="mt-3 overflow-hidden rounded-md border border-border/70 bg-background shadow-sm"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-b border-border/70 px-4 py-4 text-[0.92rem] font-medium uppercase leading-none tracking-[-0.035em] text-foreground transition-colors last:border-b-0 hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      )}
    </header>
  );
}
