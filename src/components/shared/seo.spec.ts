import { localizedUrl } from "@/components/shared/seo";

describe("localizedUrl", () => {
  it("should be able to build URLs without a prefix for the default locale", () => {
    expect(localizedUrl("pt", "/")).toBe("http://localhost:3000");
    expect(localizedUrl("pt", "/horarios")).toBe(
      "http://localhost:3000/horarios",
    );
  });

  it("should be able to prefix other locales", () => {
    expect(localizedUrl("en", "/")).toBe("http://localhost:3000/en");
    expect(localizedUrl("es", "/santo-antonio")).toBe(
      "http://localhost:3000/es/santo-antonio",
    );
  });
});
