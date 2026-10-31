import { screen, within } from "@testing-library/react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { renderWithProviders } from "@/test/render-with-providers";

describe("LanguageSwitcher", () => {
  it("should be able to offer every language for the current page", () => {
    renderWithProviders(<LanguageSwitcher />, {
      pathname: "/saint-anthony",
      locale: "en",
    });

    const nav = screen.getByRole("navigation", { name: "Language" });
    const links = within(nav).getAllByRole("link");

    expect(links).toHaveLength(3);
    expect(within(nav).getByRole("link", { name: "English" })).toHaveAttribute(
      "aria-current",
      "true",
    );
    expect(within(nav).getByRole("link", { name: "Español" })).toHaveAttribute(
      "lang",
      "es",
    );
  });
});
