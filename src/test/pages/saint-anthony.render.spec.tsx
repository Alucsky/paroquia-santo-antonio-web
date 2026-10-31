import { screen } from "@testing-library/react";
import SaintAnthonyPage from "@/pages/saint-anthony";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Saint Anthony page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<SaintAnthonyPage />, { pathname: "/saint-anthony" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Santo Antônio de Pádua",
    );
  });

  it("should be able to tell the life of the saint with the credited portrait", () => {
    renderWithProviders(<SaintAnthonyPage />);

    expect(screen.getAllByTestId("saint-timeline-item")).toHaveLength(10);
    expect(screen.getAllByTestId("painting-symbols-card")).toHaveLength(4);
    expect(screen.getAllByTestId("devotions-item")).toHaveLength(4);
    expect(screen.getByRole("link", { name: "Ver fonte" })).toHaveAttribute(
      "href",
      expect.stringContaining("commons.wikimedia.org"),
    );
  });
});
