"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { siteConfig } from "@/config/site";

export function FiverrIdentity() {
  return (
    <section
      aria-label="MFLABZ Fiverr profile"
      className="relative left-1/2 flex min-h-[clamp(300px,38vw,500px)] w-screen -translate-x-1/2 items-center overflow-hidden bg-secondary px-container py-16 text-secondary-foreground"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-heading text-[clamp(8rem,28vw,24rem)] leading-none font-black tracking-[-0.11em] text-white/[0.045]"
        aria-hidden="true"
      >
        2500+
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[min(92rem,100%)] flex-col items-center gap-8 text-center sm:gap-10"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 rounded-button border border-white/18 bg-white/[0.08] px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-white/82 uppercase">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Available on Fiverr
        </div>

        <p className="font-heading text-[clamp(3.28rem,14.8vw,12.4rem)] leading-[0.78] font-black tracking-[-0.11em] text-white uppercase whitespace-nowrap">
          @MFLABZ
        </p>

        <p className="max-w-3xl text-[clamp(1rem,1.45vw,1.25rem)] leading-[1.45] font-medium tracking-[-0.035em] text-white/78 text-balance">
          2500+ verified reviews and thousands of completed design projects
          worldwide.
        </p>

        <div className="inline-flex max-w-full rounded-button border border-white/18 bg-white/[0.08] px-4 py-2.5 text-center shadow-xs sm:px-5">
          <div className="flex items-center gap-2 text-white" aria-label="4.9 out of 5 average rating">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-3 fill-current sm:size-3.5" />
              ))}
            </span>
            <span className="text-[0.7rem] font-semibold tracking-[-0.01em] sm:text-xs">
              4.9/5 Average Rating
            </span>
          </div>
        </div>

        <a
          href={siteConfig.links.fiverr}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center gap-3 rounded-button border border-white bg-white px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] text-secondary transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span>View Fiverr Profile</span>
          <span
            className="text-secondary transition-transform duration-300 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}
