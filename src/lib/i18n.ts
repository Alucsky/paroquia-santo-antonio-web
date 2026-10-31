export const DEFAULT_LOCALE = "pt";

export const SUPPORTED_LOCALES = ["pt", "en", "es"] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const INTL_LOCALES: Record<SupportedLocale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
};

export function toIntlLocale(locale: string | undefined): string {
  return (
    INTL_LOCALES[(locale ?? DEFAULT_LOCALE) as SupportedLocale] ??
    INTL_LOCALES.pt
  );
}
