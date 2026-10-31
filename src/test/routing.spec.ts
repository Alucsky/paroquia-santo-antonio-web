import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import routeMap from "@/content/routes.json";
import nextConfig from "../../next.config";

const localizedRoutes = Object.values(routeMap);

describe("routing", () => {
  it("serves Portuguese by default regardless of the browser language", () => {
    expect(nextConfig.i18n?.defaultLocale).toBe("pt");
    expect(nextConfig.i18n?.localeDetection).toBe(false);
  });

  it("backs every public path with an existing page", () => {
    for (const { page } of localizedRoutes) {
      expect(fs.existsSync(path.join("src/pages", `${page}.tsx`))).toBe(true);
    }
  });

  it("serves each page from its Portuguese path and redirects the internal one", async () => {
    const rewrites = await nextConfig.rewrites?.();
    const redirects = await nextConfig.redirects?.();

    for (const { page, path: publicPath } of localizedRoutes) {
      expect(rewrites).toContainEqual({
        source: publicPath,
        destination: page,
      });
      expect(redirects).toContainEqual({
        source: page,
        destination: publicPath,
        permanent: true,
      });
    }
  });
});
