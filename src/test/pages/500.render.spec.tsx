import { screen } from "@testing-library/react";
import ServerErrorPage from "@/pages/500";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Server error page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<ServerErrorPage />, { pathname: "/500" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Algo deu errado",
    );
  });
});
