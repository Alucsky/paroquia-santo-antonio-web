import {
  toEmailLink,
  toMapsLink,
  toPhoneLink,
  toWazeLink,
  toWhatsappLink,
} from "@/utils/contact-links";

describe("contact links", () => {
  it("should be able to build a WhatsApp link with the Brazilian country code", () => {
    expect(toWhatsappLink("(46) 98814-8964")).toBe(
      "https://wa.me/5546988148964",
    );
  });

  it("should be able to build a WhatsApp link with an encoded message", () => {
    expect(toWhatsappLink("(46) 98814-8964", "Olá, tudo bem?")).toBe(
      "https://wa.me/5546988148964?text=Ol%C3%A1%2C%20tudo%20bem%3F",
    );
  });

  it("should be able to build a phone link", () => {
    expect(toPhoneLink("(46) 3536-1108")).toBe("tel:+554635361108");
  });

  it("should be able to build e-mail links with and without subject", () => {
    expect(toEmailLink("a@b.com")).toBe("mailto:a@b.com");
    expect(toEmailLink("a@b.com", "Batizado")).toBe(
      "mailto:a@b.com?subject=Batizado",
    );
  });

  it("should be able to build map and Waze links from coordinates", () => {
    expect(toMapsLink(-25.7, -53.05)).toBe(
      "https://www.google.com/maps/search/?api=1&query=-25.7,-53.05",
    );
    expect(toWazeLink(-25.7, -53.05)).toBe(
      "https://waze.com/ul?ll=-25.7,-53.05&navigate=yes",
    );
  });
});
