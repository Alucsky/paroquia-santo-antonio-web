import { screen } from "@testing-library/react";
import NotFoundPage from "@/pages/404";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Not found page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<NotFoundPage />, { pathname: "/404" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Página não encontrada",
    );
  });
});
