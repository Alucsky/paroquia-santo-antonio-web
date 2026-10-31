import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const routeMap = JSON.parse(
  fs.readFileSync(path.join(root, "src/content/routes.json"), "utf8"),
);
const publicDir = path.join(root, "public");

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

const locales = ["pt", "en", "es"];
const defaultLocale = "pt";
const hrefLang = { pt: "pt-BR", en: "en-US", es: "es-ES" };
const localizedUrl = (locale, route) =>
  `${siteUrl}${locale === defaultLocale ? "" : `/${locale}`}${route === "/" ? "" : route}` || siteUrl;

const routes = ["/", ...Object.values(routeMap).map(({ path }) => path).sort()];
const weeklyRoutes = new Set(["/", routeMap.schedule.path]);
const lastModified = new Date().toISOString().slice(0, 10);

const urls = routes.flatMap((route) =>
  locales.map((locale) => {
    const alternates = [
      ...locales.map(
        (alternate) =>
          `    <xhtml:link rel="alternate" hreflang="${hrefLang[alternate]}" href="${localizedUrl(alternate, route)}" />`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(defaultLocale, route)}" />`,
    ].join("\n");
    return [
      "  <url>",
      `    <loc>${localizedUrl(locale, route)}</loc>`,
      `    <lastmod>${lastModified}</lastmod>`,
      `    <changefreq>${weeklyRoutes.has(route) ? "weekly" : "monthly"}</changefreq>`,
      `    <priority>${route === "/" ? "1.0" : locale === defaultLocale ? "0.8" : "0.6"}</priority>`,
      alternates,
      "  </url>",
    ].join("\n");
  }),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

const isProduction = (process.env.VERCEL_ENV ?? "production") === "production";
const robots = isProduction
  ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\nHost: ${siteUrl}\n`
  : "User-agent: *\nDisallow: /\n";

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

console.log(`SEO files generated for ${siteUrl}: ${routes.length} routes × ${locales.length} locales`);
