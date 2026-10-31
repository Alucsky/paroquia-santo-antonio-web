import { toIntlLocale } from "@/lib/i18n";

describe("toIntlLocale", () => {
  it("should be able to map each supported locale to an Intl locale", () => {
    expect(toIntlLocale("pt")).toBe("pt-BR");
    expect(toIntlLocale("en")).toBe("en-US");
    expect(toIntlLocale("es")).toBe("es-ES");
  });

  it("should be able to fall back to Portuguese", () => {
    expect(toIntlLocale(undefined)).toBe("pt-BR");
    expect(toIntlLocale("fr")).toBe("pt-BR");
  });
});
