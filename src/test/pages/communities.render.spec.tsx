import { screen } from "@testing-library/react";
import CommunitiesPage from "@/pages/communities";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Communities page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<CommunitiesPage />, { pathname: "/communities" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "22 comunidades, uma só família.",
    );
  });
});
