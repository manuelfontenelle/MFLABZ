"use client";

import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
};

export function LanguageSwitcher({
  className,
  compact = false
}: LanguageSwitcherProps) {
  const t = useTranslations("Language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: AppLocale) {
    if (nextLocale === locale) {
      return;
    }

    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-button bg-muted p-0.5 font-heading text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
        compact && "text-[0.82rem] tracking-[1px]",
        className
      )}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => switchLocale(item)}
          className={cn(
            "cursor-pointer rounded-button px-2.5 py-1 leading-none transition-colors focus-visible:outline-none focus-visible:ring-ring/30 focus-visible:ring-[3px]",
            compact && "px-3 py-1.5",
            locale === item
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label={t("switchTo", { locale: item.toUpperCase() })}
          aria-pressed={locale === item}
        >
          {t(item)}
        </button>
      ))}
    </div>
  );
}
