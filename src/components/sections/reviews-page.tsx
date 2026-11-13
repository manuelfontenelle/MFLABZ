import { Star } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui";
import {
  highRatedReviewPageCount,
  highRatedReviews,
  reviewsForPage
} from "@/data/high-rated-reviews";
import { testimonialsData, type TestimonialItem } from "@/data/testimonials-data";
import { keepExclamationWithWord } from "@/lib/utils";

import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ReviewsListScroll, ReviewsPagination } from "./reviews-pagination";
import { TestimonialCard } from "./testimonial-card";

type ReviewsPageContentProps = {
  locale: string;
  page: number;
};

function formatReviewDate(date: string, locale: string) {
  if (!date) {
    return "";
  }

  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(parsed);
}

function featuredReviewFor(locale: string) {
  const match =
    locale === "fr"
      ? {
          name: "yoann_boand",
          start: "Un excellent travail du début à la fin"
        }
      : {
          name: "charliecates",
          start: "Thank you so much for creating such a beautiful trifold"
        };

  return (
    testimonialsData.find(
      (item) => item.name === match.name && item.review.startsWith(match.start)
    ) ?? highRatedReviews[0]
  );
}

function clientInitials(name: string) {
  const parts = name
    .split(/[\s_]+/)
    .map((part) => part.replace(/[^\p{L}\p{N}]/gu, ""))
    .filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0]?.charAt(0) ?? ""}${parts[1]?.charAt(0) ?? ""}`.toUpperCase();
  }

  return (parts[0] ?? name).replace(/[^\p{L}\p{N}]/gu, "").slice(0, 2).toUpperCase();
}

function FeaturedReview({
  testimonial,
  ratingLabel
}: {
  testimonial: TestimonialItem;
  ratingLabel: string;
}) {
  return (
    <blockquote className="relative mx-auto flex max-w-5xl flex-col gap-6 overflow-hidden rounded-md bg-secondary px-6 py-8 text-white shadow-[0_30px_60px_-30px_rgba(33,80,220,0.55)] sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:rounded-[0.54rem] lg:px-10 lg:py-10">
      <Image
        src="/images/blue_background4.jpg"
        alt=""
        fill
        sizes="(min-width: 1024px) 64rem, 100vw"
        className="pointer-events-none object-cover"
      />
      <div className="relative z-10 min-w-0 flex-1">
        <span className="flex items-center gap-0.5" role="img" aria-label={ratingLabel}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="size-4 fill-current" strokeWidth={0} />
          ))}
        </span>
        <p className="mt-5 font-heading text-xl leading-snug font-semibold tracking-[-0.03em] text-pretty sm:text-2xl">
          “{keepExclamationWithWord(testimonial.review.trim())}”
        </p>
      </div>
      <footer className="relative z-10 flex shrink-0 items-center gap-3 lg:w-40 lg:flex-col lg:gap-3 lg:text-center">
        <span
          className="flex size-14 items-center justify-center rounded-full bg-white text-base font-medium text-foreground lg:size-20 lg:text-xl"
          aria-hidden="true"
        >
          {clientInitials(testimonial.name)}
        </span>
        <span>
          <span className="block text-sm font-medium">{testimonial.name}</span>
          <span className="mt-0.5 block text-sm text-white/75">{testimonial.country}</span>
        </span>
      </footer>
    </blockquote>
  );
}

export async function ReviewsPageContent({ locale, page }: ReviewsPageContentProps) {
  const t = await getTranslations("Reviews");
  const reviews = reviewsForPage(page);
  const featured = featuredReviewFor(locale);
  const stats = [
    { value: t("stats.ratingValue"), label: t("stats.ratingLabel") },
    { value: t("stats.reviewsValue"), label: t("stats.reviewsLabel") },
    { value: t("stats.projectsValue"), label: t("stats.projectsLabel") },
    { value: t("stats.countriesValue"), label: t("stats.countriesLabel") }
  ];

  return (
    <>
      <Navbar />
      <section className="bg-background pt-16 pb-16 text-foreground sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <Container>
          <header className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-[clamp(2.01rem,4.49vw,4.03rem)] leading-[1.2] font-semibold tracking-[-0.06em] text-balance">
              {t("title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-body-sm leading-6 text-muted-foreground sm:text-base">
              {t("description")}
            </p>
          </header>

          <dl className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md bg-muted px-4 py-5 text-center lg:rounded-[0.54rem]"
              >
                <dt className="font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <main className="min-h-screen bg-muted pt-14 pb-8 text-foreground sm:pt-16">
        <Container>
          {featured ? (
            <FeaturedReview
              testimonial={featured}
              ratingLabel={t("starRating", { rating: featured.rating })}
            />
          ) : null}

          <ReviewsListScroll page={page} />
          <div
            id="liste"
            className="mx-auto mt-16 mb-8 flex max-w-3xl scroll-mt-6 flex-col items-center gap-2 text-center"
          >
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              {t("wallTitle")}
            </h2>
            <p className="text-sm font-medium text-foreground">
              {t("count", { count: highRatedReviews.length })}
              <span className="text-muted-foreground"> · </span>
              {t("pageStatus", { page, total: highRatedReviewPageCount })}
            </p>
          </div>

          <div className="columns-1 gap-3.5 md:columns-2 lg:columns-3 [&>article]:mb-3.5">
            {reviews.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.date}-${index}`}
                testimonial={testimonial}
                ratingLabel={t("starRating", { rating: testimonial.rating })}
                dateLabel={formatReviewDate(testimonial.date, locale)}
                scoreLabel={
                  testimonial.rating < 5
                    ? testimonial.rating.toLocaleString(locale, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                      })
                    : undefined
                }
              />
            ))}
          </div>

          <div className="mt-8">
            <ReviewsPagination
              page={page}
              label={t("pagination")}
              previousLabel={t("previous")}
              nextLabel={t("next")}
            />
          </div>
        </Container>
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}
