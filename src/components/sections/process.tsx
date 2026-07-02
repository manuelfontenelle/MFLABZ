"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Container } from "@/components/ui";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  label: string;
  items: string[];
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Brief",
    description:
      "We begin by exploring your business, goals, audience and requirements together, establishing a clear creative direction before any design begins.",
    label: "What We Cover",
    items: [
      "Business Understanding",
      "Project Goals",
      "Target Audience",
      "Design Preferences"
    ]
  },
  {
    number: "02",
    title: "Research & Design",
    description:
      "From the brief, I research creative directions and craft refined concepts tailored to your brand and objectives.",
    label: "What We Cover",
    items: [
      "Creative Research",
      "Concept Development",
      "Brand Alignment",
      "Professional Execution"
    ]
  },
  {
    number: "03",
    title: "Revisions & Refinement",
    description:
      "We review the concepts together and refine every detail until the result aligns perfectly with your vision and business needs.",
    label: "What We Cover",
    items: [
      "Client Feedback",
      "Design Adjustments",
      "Fine-Tuning",
      "Final Approval"
    ]
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Once approved, I deliver all final files, fully organized and ready to use across digital and print.",
    label: "Deliverables",
    items: [
      "Editable Source Files (AI, EPS, PSD)",
      "High-Resolution Exports (PNG, JPG, PDF)",
      "Print-Ready Files",
      "Social Media & Brand Assets (if applicable)"
    ]
  }
];

const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11
    }
  }
};

const stepReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: "easeOut"
    }
  }
};

const numberReveal: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut"
    }
  }
};

export function Process() {
  return (
    <section id="process" className="bg-muted/45 py-section-lg">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-20">
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.32 }}
            transition={{ duration: 0.58, ease: "easeOut" }}
          >
            <div className="max-w-xl space-y-8 lg:max-w-md">
              <div className="space-y-5">
                <p className="text-caption font-semibold tracking-[0.16em] text-secondary uppercase">
                  Collaboration Workflow
                </p>
                <h2 className="font-heading text-heading-2 leading-[1.2] font-medium tracking-[-0.06em] text-foreground sm:leading-none">
                  A Thoughtful Creative Process
                </h2>
              </div>

              <p className="text-[1.08rem] leading-8 text-muted-foreground text-pretty">
                A structured and collaborative approach designed to keep your
                project clear, focused and creatively aligned from start to
                finish.
              </p>

            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-md border border-border/70 bg-card lg:rounded-[0.54rem]"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {processSteps.map((step) => (
              <motion.article
                key={step.number}
                className="grid gap-6 border-b border-border/70 p-6 last:border-b-0 sm:p-8 md:grid-cols-[9rem_minmax(0,1fr)] lg:p-10"
                variants={stepReveal}
              >
                <motion.div
                  className="font-heading text-[clamp(3rem,7vw,5.25rem)] leading-none font-normal tracking-[-0.08em] text-secondary"
                  variants={numberReveal}
                >
                  {step.number}
                </motion.div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-heading text-[clamp(1.55rem,2.8vw,2.25rem)] leading-[1.02] font-medium tracking-[-0.055em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="max-w-2xl text-[0.98rem] leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      {step.label}
                    </p>
                    <ul className="grid gap-x-4 gap-y-2 sm:grid-cols-2">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-6 text-foreground"
                        >
                          <span
                            className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-secondary"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
