"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BadgeCheck, Megaphone, PenTool, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge, Card, CardContent, CardHeader, CardTitle, Container, SectionHeader } from "@/components/ui";
import type { ServiceId } from "@/data/services-data";
import { servicesData } from "@/data/services-data";

const serviceIcons: Record<ServiceId, LucideIcon> = {
  "logo-design": PenTool,
  "brand-identity": BadgeCheck,
  "social-media-design": Share2,
  "marketing-materials": Megaphone
};

const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut"
    }
  }
};

export function Services() {
  return (
    <section id="services" className="bg-background pt-[2.56rem] pb-section-lg">
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
            title="Design Services"
            description="Premium design solutions tailored to help your brand stand out and grow with confidence."
          />
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:gap-6"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.id];

            return (
              <motion.div key={service.id} variants={cardReveal}>
                <Card className="group h-full gap-8 overflow-hidden rounded-md border-border/70 bg-card px-2 py-8 shadow-xs hover:-translate-y-1 hover:border-foreground/15 hover:shadow-md lg:rounded-[0.54rem] lg:px-4 lg:py-10">
                  <CardHeader className="flex items-center gap-4 px-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-border/70 bg-muted text-foreground transition-colors duration-300 group-hover:border-secondary/20 group-hover:bg-secondary/10 group-hover:text-secondary">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </div>
                    <CardTitle className="text-[1.55rem] leading-[1.05] tracking-[-0.045em]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 px-6">
                    <p className="text-[0.98rem] leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {service.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="outline"
                          className="border-secondary/15 bg-secondary/5 px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.07em] text-secondary transition-colors duration-300 hover:border-secondary/30 hover:bg-secondary/10"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
