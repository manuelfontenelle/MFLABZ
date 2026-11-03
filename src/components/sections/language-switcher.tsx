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
        "inline-flex items-center gap-1 font-heading text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
        compact && "text-[0.9rem] tracking-[1px]",
        className
      )}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((item, index) => (
        <span key={item} className="inline-flex items-center gap-1">
          {index > 0 && (
            <span className="text-border" aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => switchLocale(item)}
            className={cn(
              "cursor-pointer transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-ring/30 focus-visible:ring-[3px]",
              locale === item ? "text-foreground" : "text-muted-foreground"
            )}
            aria-label={t("switchTo", { locale: item.toUpperCase() })}
            aria-pressed={locale === item}
          >
            {t(item)}
          </button>
        </span>
      ))}
    </div>
  );
}
