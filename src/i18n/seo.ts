import { routing } from "./routing";

/** Relative language alternates for Next metadata `alternates.languages`. */
export function localeLanguageAlternates(path = "") {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `/${locale}${path}`])
  );

  return {
    ...languages,
    "x-default": `/en${path}`
  };
}
