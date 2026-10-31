import { localizedUrl } from "@/components/shared/seo";

describe("localizedUrl", () => {
  it("should be able to build URLs without a prefix for the default locale", () => {
    expect(localizedUrl("pt", "/")).toBe(
      "https://www.paroquiasantoantoniodv.com.br",
    );
    expect(localizedUrl("pt", "/horarios")).toBe(
      "https://www.paroquiasantoantoniodv.com.br/horarios",
    );
  });

  it("should be able to prefix other locales", () => {
    expect(localizedUrl("en", "/")).toBe(
      "https://www.paroquiasantoantoniodv.com.br/en",
    );
    expect(localizedUrl("es", "/santo-antonio")).toBe(
      "https://www.paroquiasantoantoniodv.com.br/es/santo-antonio",
    );
  });
});
