import { screen } from "@testing-library/react";
import SchedulePage from "@/pages/horarios";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Schedule page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<SchedulePage />, { pathname: "/horarios" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Quando celebramos juntos.",
    );
  });

  it("should be able to list the monthly celebrations", () => {
    renderWithProviders(<SchedulePage />);

    expect(screen.getAllByTestId("monthly-celebration")).toHaveLength(2);
    expect(screen.getByTestId("office-hours")).toBeInTheDocument();
  });
});
