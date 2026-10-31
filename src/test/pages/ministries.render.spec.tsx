import { screen } from "@testing-library/react";
import MinistriesPage from "@/pages/ministries";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Ministries page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<MinistriesPage />, { pathname: "/ministries" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "20 jeitos de servir.",
    );
  });

  it("should be able to group every ministry", () => {
    renderWithProviders(<MinistriesPage />);

    expect(screen.getAllByTestId("ministry-card")).toHaveLength(20);
    expect(
      screen.getByRole("link", { name: /Quero participar/ }),
    ).toHaveAttribute("href", expect.stringContaining("wa.me/5546988148964"));
  });
});
