"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { faqData } from "@/data/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container
} from "@/components/ui";

const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-section-lg">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-20">
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.58, ease: "easeOut" }}
          >
            <div className="max-w-xl space-y-6 lg:max-w-md">
              <h2 className="font-heading text-heading-2 leading-[1.2] font-normal tracking-[-0.06em] text-foreground sm:leading-none">
                Frequently Asked Questions
              </h2>

              <p className="max-w-sm text-[1.08rem] leading-8 text-muted-foreground text-pretty">
                Everything you need to know before starting your project.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-md border border-border/70 bg-card shadow-xs lg:rounded-[0.54rem]"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
          >
            <Accordion type="single" collapsible defaultValue="faq-01">
              {faqData.map((item) => (
                <motion.div
                  key={item.id}
                  className="border-b border-border/70 last:border-b-0"
                  variants={itemReveal}
                >
                  <AccordionItem
                    value={item.id}
                    className="border-b-0 px-6 sm:px-8 lg:px-10"
                  >
                    <AccordionTrigger className="cursor-pointer py-6 font-heading text-[1.15rem] leading-tight font-normal tracking-[-0.035em] text-foreground transition-colors duration-300 hover:text-secondary hover:no-underline sm:text-[1.3rem] [&>svg]:mt-0.5 [&>svg]:size-4 [&>svg]:text-foreground/45 [&>svg]:transition-all [&>svg]:duration-300">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-2xl pb-7 text-[0.98rem] leading-7 text-muted-foreground sm:pr-12">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
