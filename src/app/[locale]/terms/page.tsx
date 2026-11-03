import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPage } from "@/components/sections/legal-page";
import { localeLanguageAlternates } from "@/i18n/seo";

type TermsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const legal = await getTranslations({ locale, namespace: "Legal.terms" });

  return {
    title: t("termsTitle"),
    description: legal("description"),
    alternates: {
      canonical: `/${locale}/terms`,
      languages: localeLanguageAlternates("/terms")
    }
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalPage pageKey="terms" />;
}
