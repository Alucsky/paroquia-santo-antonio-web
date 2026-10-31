import { screen } from "@testing-library/react";
import { UpcomingCelebrations } from "@/components/schedule/upcoming-celebrations";
import { renderWithProviders } from "@/test/render-with-providers";

describe("UpcomingCelebrations", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be able to list the next celebrations with relative day labels", () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-10-31T12:00:00Z"));

    renderWithProviders(<UpcomingCelebrations limit={3} />);

    const items = screen.getAllByTestId("upcoming-celebrations-item");
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent("8:30");
    expect(items[0]).toHaveTextContent("Missa dominical");
    expect(items[0]).toHaveTextContent("Amanhã");
    expect(items[2]).toHaveTextContent("Missa da Saúde");
    expect(items[2]).toHaveTextContent("Quarta-feira, 4 de novembro");
  });

  it("should be able to label a celebration happening today", () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-11-04T12:00:00Z"));

    renderWithProviders(<UpcomingCelebrations limit={1} />, { locale: "en" });

    const [item] = screen.getAllByTestId("upcoming-celebrations-item");
    expect(item).toHaveTextContent("7:00 PM");
    expect(item).toHaveTextContent("Mass for the Sick");
    expect(item).toHaveTextContent("Today");
  });
});
