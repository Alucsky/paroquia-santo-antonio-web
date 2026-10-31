import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config";

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
  i18n,
};

export default nextConfig;
