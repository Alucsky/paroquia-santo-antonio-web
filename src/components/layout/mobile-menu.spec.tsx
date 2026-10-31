import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { renderWithProviders } from "@/test/render-with-providers";

describe("MobileMenu", () => {
  it("should be able to open the full navigation", async () => {
    const user = userEvent.setup();
    renderWithProviders(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    const content = await screen.findByTestId("mobile-menu-content");
    const nav = within(content).getByRole("navigation", {
      name: "Navegação principal",
    });
    expect(within(nav).getAllByRole("link")).toHaveLength(8);
    expect(
      within(content).getByRole("link", { name: /Falar com a secretaria/ }),
    ).toHaveAttribute("href", "https://wa.me/5546988148964");
  });
});
