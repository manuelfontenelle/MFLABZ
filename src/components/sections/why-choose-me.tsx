"use client";

import { BadgeCheck, Clock3, Globe2, Handshake, Palette, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Card, CardContent, Container, SectionHeader } from "@/components/ui";

type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    title: "2500+ Verified Reviews",
    description: "Built through thousands of successful projects and long-term client satisfaction.",
    icon: Star
  },
  {
    title: "Fast Turnaround",
    description: "Efficient workflow and clear communication throughout every project.",
    icon: Clock3
  },
  {
    title: "Custom Design Approach",
    description: "Every design is created specifically for the client's brand and goals.",
    icon: Palette
  },
  {
    title: "Direct Collaboration",
    description: "Work directly with the designer from concept to final delivery.",
    icon: Handshake
  },
  {
    title: "Worldwide Experience",
    description: "Experience working with startups, entrepreneurs and businesses around the world.",
    icon: Globe2
  },
  {
    title: "Professional Quality",
    description: "Design solutions focused on credibility, consistency and business growth.",
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
            title="Why Clients Choose Me"
            description="Trusted by thousands of businesses for professional graphic design and branding services."
          />
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:gap-6"
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
                    <h3 className="font-heading text-[1.35rem] leading-tight font-medium tracking-[-0.04em] text-foreground">
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
      </Container>
    </section>
  );
}
