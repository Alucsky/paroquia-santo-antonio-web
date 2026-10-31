import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config";
import routeMap from "./src/content/routes.json";

const localizedRoutes = Object.values(routeMap);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: __dirname,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react", "react-icons"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  i18n: { ...i18n, localeDetection: false },
  async rewrites() {
    return localizedRoutes.map(({ page, path }) => ({
      source: path,
      destination: page,
    }));
  },
  async redirects() {
    return localizedRoutes.map(({ page, path }) => ({
      source: page,
      destination: path,
      permanent: true,
    }));
  },
};

export default nextConfig;
