"use client";

import { useSyncExternalStore } from "react";
import { ChevronRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";

import { Button, Container, SectionHeader } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { testimonialsData } from "@/data/testimonials-data";
import type { TestimonialItem } from "@/data/testimonials-data";
import { Link } from "@/i18n/navigation";

import { ContactDialog } from "./contact-dialog";
import { TestimonialCard } from "./testimonial-card";

const clientCountryFlags = ["US", "CA", "GB", "AU", "DE", "FR", "NL"];

// Homepage wall: detailed 5-star reviews only. Short lines and repeat clients stay in the data.
const showcaseReviews: Array<[string, string]> = [
  ["arron285", "I have used Manuel a few times now"],
  ["apiconcept", "The packaging for our product"],
  ["numelek", "travail réalisé par Manuel sur mes flyers"],
  ["yoann_boand", "Un excellent travail du début à la fin"],
  ["pedrodemesquita", "Brief parfaitement compris et respecté"],
  ["majiin_sixk", "Le bifold correspond parfaitement"],
  ["waykenfr", "futures cartes de visite"],
  ["bsi_25jahre", "It was a real pleasure working with Manuel"],
  ["naikagabriel", "identité visuelle élégante"],
  ["vaness_immo35", "Première fois que je fais appel à un graphiste"],
  ["ema_alsh", "Great experience overall"],
  ["reflectionsbym", "Manuel was great to work with"],
  ["madetoform", "banner for my upcoming trade show"],
  ["charliecates", "beautiful trifold for my business"],
  ["austinaves", "the third project"],
  ["ayoubrother", "absolument ravi de mon nouveau logo"],
  ["hypnokacee", "designed my brochures"],
  ["amberatdigital", "Communication went very smoothly"],
  ["yann_prou", "création de trois logos"],
  ["spherity_comms", "roll-up banner design"],
  ["jrm_lr", "logo conçu par Manuel"],
  ["mango_studio_be", "flyer for my yoga studio"],
  ["fredsharp", "chemise A4"],
  ["jaymegamache", "unique and impactful design"],
  ["kawasemist", "logo with a short turnaround"],
  ["emmanuelbenna", "Les cartes sont impeccables"],
  ["seyaarette", "deux logos créés"],
  ["petitmagnolia", "notre logo très rapidement"],
  ["kylecassady", "First time using Fiverr"],
  ["christophe_ta", "stratégie de marque"]
];

const showcaseTestimonials = testimonialsData.filter((testimonial) =>
  showcaseReviews.some(
    ([name, excerpt]) => testimonial.name === name && testimonial.review.includes(excerpt)
  )
);

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
  return showcaseTestimonials;
}

function getClientOrder() {
  if (!clientOrder) {
    clientOrder = shuffle(showcaseTestimonials);
  }

  return clientOrder;
}

function subscribeToNothing() {
  return () => {};
}

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const tHero = useTranslations("Hero");
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

          <div
            className="mt-6 inline-flex items-center gap-2 rounded-button border border-border/70 bg-background px-3 py-1.5 text-[0.8rem] font-semibold text-foreground shadow-xs"
            role="img"
            aria-label={t("averageRating")}
          >
            <span className="flex items-center gap-0.5 text-secondary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-[0.85rem] fill-current" />
              ))}
            </span>
            <span>
              {t("score")}/5
              <span className="mx-1.5 font-medium text-foreground/25" aria-hidden="true">
                ·
              </span>
              <span className="font-medium text-muted-foreground">{t("scoreCount")}</span>
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
          </p>

          <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
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

        <div className="mt-8 grid items-center gap-4 sm:mt-10 sm:grid-cols-[1fr_auto_1fr]">
          <div className="hidden sm:block" aria-hidden="true" />
          <div className="order-2 flex w-full flex-col items-center justify-center gap-3 sm:order-none sm:w-auto sm:flex-row">
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
          <Link
            href="/reviews"
            className="group order-1 inline-flex items-center justify-self-center text-base font-semibold text-foreground sm:order-none sm:justify-self-end"
          >
            {t("viewAllReviews")}
            <ChevronRight className="ml-1 size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
