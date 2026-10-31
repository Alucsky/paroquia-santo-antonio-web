import { screen, within } from "@testing-library/react";
import { SiteFooter } from "@/components/layout/site-footer";
import { renderWithProviders } from "@/test/render-with-providers";

describe("SiteFooter", () => {
  it("should be able to credit the developer with a link to the profile", () => {
    renderWithProviders(<SiteFooter />);

    const credit = screen.getByTestId("site-footer-credit");
    expect(credit).toHaveTextContent("Desenvolvido por Samuel Molinari");
    expect(
      within(credit).getByRole("link", { name: "Samuel Molinari" }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/samuel-molinari/");
  });

  it("should be able to reach the parish by phone, WhatsApp and e-mail", () => {
    renderWithProviders(<SiteFooter />);

    const footer = screen.getByTestId("site-footer");
    expect(
      within(footer).getByRole("link", { name: "(46) 3536-1108" }),
    ).toHaveAttribute("href", "tel:+554635361108");
    expect(
      within(footer).getByRole("link", { name: /WhatsApp/ }),
    ).toHaveAttribute("href", "https://wa.me/5546988148964");
    expect(
      within(footer).getByRole("link", { name: "Instagram da paróquia" }),
    ).toHaveAttribute(
      "href",
      "https://www.instagram.com/paroquiasantoantoniodv",
    );
  });
});
