import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPage } from "@/components/sections/legal-page";
import { localeLanguageAlternates } from "@/i18n/seo";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const legal = await getTranslations({ locale, namespace: "Legal.privacy" });

  return {
    title: t("privacyTitle"),
    description: legal("description"),
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: localeLanguageAlternates("/privacy")
    }
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalPage pageKey="privacy" />;
}
