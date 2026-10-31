import { screen } from "@testing-library/react";
import { WeeklySchedule } from "@/components/schedule/weekly-schedule";
import { renderWithProviders } from "@/test/render-with-providers";

describe("WeeklySchedule", () => {
  it("should be able to show every weekday with its masses", () => {
    renderWithProviders(<WeeklySchedule />);

    const days = screen.getAllByTestId("weekly-schedule-day");
    expect(days).toHaveLength(7);
    expect(days[0]).toHaveTextContent("domingo");
    expect(days[0]).toHaveTextContent("8:30");
    expect(days[0]).toHaveTextContent("19:00");
    expect(days[1]).toHaveTextContent("Sem missa na Matriz");
    expect(days[3]).toHaveTextContent("Missa da Saúde");
  });
});
