import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

import { MotionProvider } from "@/components/providers/motion-provider";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import { localeLanguageAlternates } from "@/i18n/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#ffffff"
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const keywords = t.raw("keywords") as string[];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: t("titleTemplate")
    },
    description: t("description"),
    keywords,
    authors: [
      { name: siteConfig.founderName, url: siteConfig.url },
      { name: siteConfig.creator, url: siteConfig.url }
    ],
    creator: siteConfig.founderName,
    alternates: {
      canonical: `/${locale}`,
      languages: localeLanguageAlternates()
    },
    verification: {
      google: "ny7XZKq-xfYroMjabtSvbWA_UOeigRhfA3Du-7Mckkk"
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: `${siteConfig.url}/${locale}`,
      title: t("title"),
      description: t("description"),
      siteName: siteConfig.creator,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt")
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/opengraph-image",
          alt: t("ogImageAlt")
        }
      ]
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>{children}</MotionProvider>
          <Toaster richColors position="bottom-right" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
