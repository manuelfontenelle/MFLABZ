"use client";

import { useSyncExternalStore } from "react";
import { ChevronRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";

import { Button, Container, SectionHeader } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { testimonialsData } from "@/data/testimonials-data";
import type { TestimonialItem } from "@/data/testimonials-data";
import { cn } from "@/lib/utils";

import { ContactDialog } from "./contact-dialog";

const clientCountryFlags = ["US", "CA", "GB", "AU", "DE", "FR", "NL"];
const avatarColors = ["#2150dc", "#ec3f91", "#f07a24", "#6d5efc", "#0f9f8f", "#e23b4a", "#3d7aed"];

function shuffle<T>(items: T[]) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

// The server snapshot keeps the source order (stable HTML); the client snapshot shuffles
// once per page load, after hydration, so the order changes on every visit.
let clientOrder: TestimonialItem[] | null = null;

function getServerOrder() {
  return testimonialsData;
}

function getClientOrder() {
  if (!clientOrder) {
    clientOrder = shuffle(testimonialsData);
  }

  return clientOrder;
}

function subscribeToNothing() {
  return () => {};
}

function getClientInitials(name: string) {
  const parts = name
    .split(/[\s_]+/)
    .map((part) => part.replace(/[^\p{L}\p{N}]/gu, ""))
    .filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase();
  }

  return (parts[0] ?? name).replace(/[^\p{L}\p{N}]/gu, "").slice(0, 2).toUpperCase();
}

function avatarColor(name: string) {
  let hash = 0;

  for (const char of name) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return avatarColors[hash % avatarColors.length];
}

function TestimonialCard({
  testimonial,
  ratingLabel,
  featured
}: {
  testimonial: TestimonialItem;
  ratingLabel: string;
  featured: boolean;
}) {
  return (
    <article
      className={cn(
        "break-inside-avoid rounded-md p-5 lg:rounded-[0.54rem] lg:p-[1.35rem]",
        featured
          ? "bg-secondary text-white shadow-[0_30px_60px_-30px_rgba(33,80,220,0.55)]"
          : "bg-white text-foreground shadow-[0_0_0_1px_var(--color-stone)]"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn("flex items-center gap-0.5", featured ? "text-white" : "text-foreground")}
          role="img"
          aria-label={ratingLabel}
        >
          {Array.from({ length: Math.min(5, Math.round(testimonial.rating)) }).map((_, index) => (
            <Star key={index} className="size-3.5 fill-current" strokeWidth={0} />
          ))}
        </span>
      </div>

      <p
        className={cn(
          "mt-3 text-[0.94rem] leading-[1.55] font-normal",
          featured ? "text-white/80" : "text-[#51515a]"
        )}
      >
        {testimonial.review.trim()}
      </p>

      <div className="mt-4 flex items-center gap-2.5">
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-full text-[0.72rem] font-medium text-white"
          style={{ backgroundColor: avatarColor(testimonial.name) }}
          aria-hidden="true"
        >
          {getClientInitials(testimonial.name)}
        </span>
        <span className="min-w-0">
          <span
            className={cn(
              "block truncate text-sm leading-tight font-medium tracking-[-0.02em]",
              featured ? "text-white" : "text-foreground"
            )}
          >
            {testimonial.name}
          </span>
          <span
            className={cn(
              "mt-0.5 block text-[0.72rem] leading-tight",
              featured ? "text-white/75" : "text-[#8a8a94]"
            )}
          >
            {testimonial.country}
          </span>
        </span>
      </div>
    </article>
  );
}

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const tHero = useTranslations("Hero");
  const tTrust = useTranslations("Trust");
  const orderedTestimonials = useSyncExternalStore(
    subscribeToNothing,
    getClientOrder,
    getServerOrder
  );
  const visibleTestimonials = orderedTestimonials.slice(0, 15);

  return (
    <section id="testimonials" className="overflow-x-clip bg-muted py-section text-foreground">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <SectionHeader
            align="center"
            size="lg"
            title={t("title")}
            description={t("description")}
          />

          <div className="mt-7 inline-flex items-center gap-2.5 text-[16px] font-medium text-foreground">
            <span className="flex items-center gap-0.5 text-secondary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-[17.67px] fill-current sm:size-[19.67px]" />
              ))}
            </span>
            <span>
              <span className="font-semibold">{tTrust("ratedPrefix")} </span>
              <span className="font-semibold text-secondary">4.9/5</span> {tTrust("ratedFrom")}{" "}
              <span className="font-semibold">{tTrust("clientReviews")}</span>
            </span>
          </div>

          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">4000+</span> {t("projectsDelivered")}
            </span>
            <span className="text-foreground/25" aria-hidden="true">
              ·
            </span>
            <span>
              <span className="font-semibold text-foreground">25+</span> {t("industriesServed")}
            </span>
            <span className="text-foreground/25" aria-hidden="true">
              ·
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="flex items-center gap-1.5" aria-hidden="true">
                {clientCountryFlags.map((countryCode) => (
                  <span
                    key={countryCode}
                    className="inline-flex h-[0.7rem] w-[1.225rem] items-center justify-center overflow-hidden"
                  >
                    <ReactCountryFlag
                      countryCode={countryCode}
                      svg
                      className="block"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </span>
                ))}
              </span>
              {t("clientsFromCountries")}
            </span>
          </p>
        </div>

        <div className="mt-10 md:hidden">
          <div className="flex snap-x snap-mandatory gap-3.5 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${testimonial.country}-slide-${index}`}
                className="w-[calc(100%-2.75rem)] shrink-0 snap-start"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  ratingLabel={t("starRating", { rating: testimonial.rating })}
                  featured={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 hidden gap-3.5 md:block md:columns-2 lg:mt-12 lg:columns-3 [&>article]:mb-3.5">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.country}-${index}`}
              testimonial={testimonial}
              ratingLabel={t("starRating", { rating: testimonial.rating })}
              featured={index === 0}
            />
          ))}
        </div>

        <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row">
            <ContactDialog
              trigger={
                <Button
                  type="button"
                  variant="premium"
                  size="lg"
                  className="group w-full cursor-pointer bg-foreground text-background shadow-none hover:bg-foreground/90 hover:shadow-none sm:w-auto"
                >
                  {tHero("startProject")}
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
                {tHero("visitFiverr")}
                <ChevronRight className="ml-0 size-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
              </a>
            </Button>
        </div>
      </Container>
    </section>
  );
}
