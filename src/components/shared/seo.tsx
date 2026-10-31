import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, toIntlLocale } from "@/lib/i18n";
import { GOOGLE_SITE_VERIFICATION, SITE_URL } from "@/lib/site";

type Props = {
  title?: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown>;
};

export function localizedUrl(locale: string, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  const suffix = path === "/" ? "" : path;
  return `${SITE_URL}${prefix}${suffix}`;
}

export function Seo({
  title,
  description,
  image = "/images/igreja/fachada-banner-1.jpg",
  noIndex = false,
  jsonLd,
}: Props) {
  const { t } = useTranslation("common");
  const { asPath, locale = DEFAULT_LOCALE } = useRouter();
  const path = asPath.split(/[?#]/)[0] || "/";
  const siteName = t("brand.fullName");
  const fullTitle = title ? `${title} · ${siteName}` : siteName;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const canonical = localizedUrl(locale, path);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noIndex ? "noindex, follow" : "index, follow, max-image-preview:large"
        }
      />
      {GOOGLE_SITE_VERIFICATION ? (
        <meta
          name="google-site-verification"
          content={GOOGLE_SITE_VERIFICATION}
        />
      ) : null}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Dois Vizinhos" />
      <link rel="canonical" href={canonical} />
      {SUPPORTED_LOCALES.map((alternate) => (
        <link
          key={alternate}
          rel="alternate"
          hrefLang={toIntlLocale(alternate)}
          href={localizedUrl(alternate, path)}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={localizedUrl(DEFAULT_LOCALE, path)}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={siteName} />
      <meta
        property="og:locale"
        content={toIntlLocale(locale).replace("-", "_")}
      />
      {SUPPORTED_LOCALES.filter((alternate) => alternate !== locale).map(
        (alternate) => (
          <meta
            key={alternate}
            property="og:locale:alternate"
            content={toIntlLocale(alternate).replace("-", "_")}
          />
        ),
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </Head>
  );
}
