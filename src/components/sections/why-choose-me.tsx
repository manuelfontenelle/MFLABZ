"use client";

import Image from "next/image";
import { BadgeCheck, Clock3, Globe2, Handshake, Palette, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Card, CardContent, Container, SectionHeader } from "@/components/ui";
import { siteConfig } from "@/config/site";

type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    title: "2500+ Verified Reviews",
    description: "A 4.9/5 average rating earned across thousands of completed client projects.",
    icon: Star
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery without cutting corners, backed by a clear and reliable workflow.",
    icon: Clock3
  },
  {
    title: "Custom Design Approach",
    description: "Every project is designed from scratch around your brand, audience and goals.",
    icon: Palette
  },
  {
    title: "Direct Collaboration",
    description: "You work directly with the designer at every step, from first concept to final files.",
    icon: Handshake
  },
  {
    title: "Worldwide Experience",
    description: "Trusted by startups, entrepreneurs and established brands across the globe.",
    icon: Globe2
  },
  {
    title: "Professional Quality",
    description: "Polished, consistent design built to strengthen credibility and support real growth.",
    icon: BadgeCheck
  }
];

const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="bg-background py-section">
      <Container className="space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionHeader
            align="center"
            className="[&_p]:max-w-none md:[&_p]:whitespace-nowrap"
            title="Why Clients Choose Me"
            description="Trusted by thousands of businesses for professional graphic design and branding services."
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-10">
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-md border border-border/70 bg-card shadow-xs lg:rounded-[0.54rem]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                <Image
                  src="/images/IMG_5930.JPEG"
                  alt={`${siteConfig.founderName}, freelance graphic designer and founder of MFLABZ`}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 p-6 sm:p-7">
                <div className="space-y-1">
                  <p className="font-heading text-[1.3rem] leading-tight font-normal tracking-[-0.04em] text-foreground">
                    {siteConfig.founderName}
                  </p>
                  <p className="text-[0.82rem] font-medium tracking-[0.02em] text-muted-foreground">
                    Founder &amp; Graphic Designer · MFLABZ
                  </p>
                </div>
                <p className="text-[0.95rem] leading-7 text-muted-foreground">
                  Hi, I&apos;m Manuel - the designer behind MFLABZ. I help brands
                  stand out with thoughtful, modern design built to last.
                </p>
                <div
                  className="inline-flex items-center gap-2 rounded-button border border-border/70 px-3 py-1.5 text-[0.8rem] font-semibold text-foreground shadow-xs"
                  role="img"
                  aria-label="4.9 out of 5 average rating from 2500+ reviews"
                >
                  <span className="flex items-center gap-0.5 text-secondary" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-[0.85rem] fill-current" />
                    ))}
                  </span>
                  <span>4.9/5 · 2500+ reviews</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:gap-6"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
          >
            {reasons.map(({ title, description, icon: Icon }) => (
              <motion.div key={title} variants={cardReveal}>
                <Card className="group h-full gap-0 border-border/70 bg-card p-0 shadow-xs hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-sm">
                  <CardContent className="flex h-full gap-5 p-7 sm:p-8">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-muted text-foreground transition-colors duration-300 group-hover:border-secondary/20 group-hover:bg-secondary/10 group-hover:text-secondary">
                      <Icon className="size-5" strokeWidth={1.7} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading text-[1.35rem] leading-tight font-normal tracking-[-0.04em] text-foreground">
                        {title}
                      </h3>
                      <p className="max-w-xl text-[0.98rem] leading-7 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
