import { normalizeText } from "@/utils/normalize-text";

describe("normalizeText", () => {
  it("should be able to remove accents, case and surrounding spaces", () => {
    expect(normalizeText("  São Brás ")).toBe("sao bras");
    expect(normalizeText("IBIAÇÁ")).toBe("ibiaca");
  });
});
