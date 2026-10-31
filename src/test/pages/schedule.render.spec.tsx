import { screen, within } from "@testing-library/react";
import SchedulePage from "@/pages/schedule";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Schedule page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<SchedulePage />, { pathname: "/schedule" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Quando celebramos juntos.",
    );
  });

  it("should be able to list the monthly celebrations", () => {
    renderWithProviders(<SchedulePage />);

    expect(screen.getAllByTestId("monthly-celebration")).toHaveLength(2);
    expect(screen.getByTestId("office-hours")).toBeInTheDocument();
  });

  it("should be able to point to the weekly announcements and the parish office", () => {
    renderWithProviders(<SchedulePage />);

    const notice = within(screen.getByTestId("schedule-notice"));
    expect(
      notice.getByRole("link", { name: "Ver avisos no Instagram" }),
    ).toHaveAttribute("href", expect.stringContaining("instagram.com"));
    expect(
      notice.getByRole("link", { name: "Falar com a secretaria" }),
    ).toHaveAttribute("href", expect.stringContaining("wa.me"));
  });
});
