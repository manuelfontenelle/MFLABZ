"use client";

import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button, Container } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { ContactDialog } from "./contact-dialog";

export function FinalCTA() {
  const t = useTranslations("FinalCTA");

  return (
    <section id="contact" className="bg-muted py-16 sm:py-20 lg:py-24">
      <Container size="lg">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-4 text-center sm:px-10 lg:px-16">
          <span className="text-caption font-semibold uppercase text-secondary">
            {t("eyebrow")}
          </span>
          <h2 className="w-full max-w-2xl font-heading text-heading-2 leading-[1.32] font-semibold tracking-[-0.06em] sm:leading-[1.1]">
            <span className="inline-block whitespace-nowrap">{t("titleLine1")}</span>
            <span className="block">{t("titleLine2")}</span>
          </h2>
          <p className="max-w-2xl text-body-lg text-muted-foreground">
            {t("description")}
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row">
            <ContactDialog
              trigger={
                <Button
                  type="button"
                  variant="premium"
                  size="lg"
                  className="group w-full cursor-pointer bg-foreground text-background shadow-none hover:bg-foreground/90 hover:shadow-none sm:w-auto"
                >
                  {t("startProject")}
                  <ChevronRight className="ml-0 size-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                </Button>
              }
            />

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="group w-full cursor-pointer border border-solid !border-[#1bc16f] bg-transparent text-[#0a8043] hover:!border-[#1bc16f] hover:bg-[#1bc16f]/5 hover:text-[#0a8043] sm:w-auto"
            >
              <a href={siteConfig.links.fiverr} target="_blank" rel="noreferrer">
                {t("visitFiverr")}
                <ChevronRight className="ml-0 size-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
