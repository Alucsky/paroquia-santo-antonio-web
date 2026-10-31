const productionHost = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (productionHost
    ? `https://${productionHost}`
    : "https://www.paroquiasantoantoniodv.com.br")
).replace(/\/$/, "");

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
