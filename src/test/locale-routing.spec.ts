import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";

describe("locale routing", () => {
  it("serves Portuguese by default regardless of the browser language", () => {
    expect(nextConfig.i18n?.defaultLocale).toBe("pt");
    expect(nextConfig.i18n?.localeDetection).toBe(false);
  });
});
