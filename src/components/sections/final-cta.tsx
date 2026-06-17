"use client";

import { ChevronRight } from "lucide-react";

import { Button, Container } from "@/components/ui";
import { ContactDialog } from "./contact-dialog";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-background pt-[4.2rem] pb-section">
      <Container size="lg">
        <div className="overflow-hidden rounded-md border border-border bg-muted/60 px-6 py-16 shadow-sm sm:px-10 sm:py-20 lg:rounded-[0.54rem] lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
            <span className="text-caption font-semibold uppercase text-secondary">
              Let&apos;s create something memorable
            </span>
            <h2 className="max-w-2xl font-heading text-heading-2 leading-[1.2] font-normal sm:leading-[1]">
              Ready to Elevate Your Brand?
            </h2>
            <p className="max-w-2xl text-body-lg text-muted-foreground">
              Whether you need a logo, a complete brand identity, social media
              content or marketing materials, I&apos;d love to hear about your
              project.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row">
              <ContactDialog
                trigger={
                  <Button
                    type="button"
                    variant="premium"
                    size="lg"
                    className="w-full cursor-pointer bg-secondary text-secondary-foreground shadow-none hover:bg-secondary/95 hover:shadow-none sm:w-auto"
                  >
                    Start Project
                    <ChevronRight className="ml-0 size-4" />
                  </Button>
                }
              />

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="w-full cursor-pointer border border-solid !border-[#1bc16f] bg-transparent text-[#0a8043] hover:!border-[#1bc16f] hover:bg-[#1bc16f]/5 hover:text-[#0a8043] sm:w-auto"
              >
                <a
                  href="https://www.fiverr.com/mflabz"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Fiverr
                  <ChevronRight className="ml-0 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
