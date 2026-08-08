"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui";
import {
  handleSectionNavClick,
  sectionHref,
  sectionNavItems
} from "@/lib/section-nav";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-[80] bg-background/95 pt-4">
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
          {sectionNavItems.map((item) => (
            <Link
              key={item.id}
              href={sectionHref(item.id)}
              onClick={(event) => handleSectionNavClick(event, item.id)}
              className="relative font-heading text-[0.96rem] font-semibold uppercase leading-none tracking-[1px] text-foreground transition-colors after:absolute after:left-0 after:top-[calc(100%+0.22rem)] after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-secondary after:transition-transform after:duration-700 after:ease-out hover:text-secondary hover:after:scale-x-100 sm:text-[1.03rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <motion.button
          type="button"
          className="group ml-auto inline-flex size-10 cursor-pointer items-center justify-center rounded-md bg-background/90 text-foreground backdrop-blur transition-colors hover:bg-muted focus-visible:ring-ring/30 focus-visible:ring-[4px] focus-visible:outline-none md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          whileTap={{ scale: 0.96 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 12, scale: 0.9 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-[90] cursor-pointer bg-primary/35 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.aside
              id="mobile-navigation"
              className="fixed top-0 right-0 z-[100] flex h-dvh w-[min(86vw,360px)] flex-col border-l border-border/80 bg-background p-6 shadow-lg backdrop-blur-xl md:hidden"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/images/mflabz-logo.svg"
                  alt=""
                  width={88}
                  height={48}
                  className="h-[2.4rem] w-auto"
                />
                <button
                  type="button"
                  className="group inline-flex size-10 cursor-pointer items-center justify-center rounded-md bg-background text-foreground transition-colors hover:bg-muted focus-visible:ring-ring/30 focus-visible:ring-[4px] focus-visible:outline-none"
                  aria-label="Close navigation menu"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="size-6" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col" aria-label="Mobile navigation links">
                {sectionNavItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{
                      duration: 0.26,
                      delay: index * 0.045,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <Link
                      href={sectionHref(item.id)}
                      className="group block border-b border-border/70 py-5 font-heading text-[1.05rem] font-semibold uppercase leading-none tracking-[1px] text-foreground transition-colors hover:text-secondary"
                      onClick={(event) => {
                        handleSectionNavClick(event, item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className="block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
