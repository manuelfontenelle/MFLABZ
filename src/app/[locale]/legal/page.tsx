import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPage } from "@/components/sections/legal-page";
import { localeLanguageAlternates } from "@/i18n/seo";

type LegalNoticePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: LegalNoticePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const legal = await getTranslations({ locale, namespace: "Legal.notice" });

  return {
    title: t("legalTitle"),
    description: legal("description"),
    alternates: {
      canonical: `/${locale}/legal`,
      languages: localeLanguageAlternates("/legal")
    }
  };
}

export default async function LegalNoticePage({ params }: LegalNoticePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalPage pageKey="notice" />;
}
