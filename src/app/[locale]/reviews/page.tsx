import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ReviewsPageContent } from "@/components/sections/reviews-page";
import { highRatedReviewPageCount } from "@/data/high-rated-reviews";
import { redirect } from "@/i18n/navigation";
import { localeLanguageAlternates } from "@/i18n/seo";

type ReviewsRouteProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

function requestedPage(value: string | undefined) {
  if (!value) {
    return 1;
  }

  if (!/^\d+$/.test(value)) {
    return null;
  }

  const page = Number(value);

  if (!Number.isSafeInteger(page) || page < 1) {
    return null;
  }

  return page;
}

export async function generateMetadata({
  params,
  searchParams
}: ReviewsRouteProps): Promise<Metadata> {
  const { locale } = await params;
  const { page: pageParam } = await searchParams;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const page = requestedPage(pageParam) ?? 1;
  const canonicalPath = page > 1 ? `/reviews?page=${page}` : "/reviews";

  return {
    title: t("reviewsTitle"),
    description: t("reviewsDescription"),
    alternates: {
      canonical: `/${locale}${canonicalPath}`,
      languages: localeLanguageAlternates("/reviews")
    }
  };
}

export default async function ReviewsRoute({ params, searchParams }: ReviewsRouteProps) {
  const { locale } = await params;
  const { page: pageParam } = await searchParams;
  const page = requestedPage(pageParam);

  setRequestLocale(locale);

  if (page === null || page > highRatedReviewPageCount || (page === 1 && pageParam)) {
    redirect({ href: "/reviews", locale });
  }

  if (page === null) {
    return null;
  }

  return <ReviewsPageContent locale={locale} page={page} />;
}
