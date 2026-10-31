import { withTranslations } from "@/lib/static-translations";

describe("withTranslations", () => {
  it("should be able to load common and page namespaces for the requested locale", async () => {
    const result = await withTranslations(["saint"])({
      locale: "en",
      locales: ["pt", "en", "es"],
      defaultLocale: "pt",
    });

    expect(result).toHaveProperty("props._nextI18Next.initialLocale", "en");
    expect(result).toHaveProperty("props._nextI18Next.ns", ["common", "saint"]);
  });

  it("should be able to fall back to the default locale", async () => {
    const result = await withTranslations()({});

    expect(result).toHaveProperty("props._nextI18Next.initialLocale", "pt");
  });
});
