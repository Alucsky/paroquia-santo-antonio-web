import { screen } from "@testing-library/react";
import { NextCelebration } from "@/components/home/next-celebration";
import { routes } from "@/content/routes";
import { renderWithProviders } from "@/test/render-with-providers";

describe("NextCelebration", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be able to announce the next Mass as a sentence", () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-10-31T12:00:00Z"));

    renderWithProviders(<NextCelebration />);

    expect(screen.getByTestId("next-celebration-headline")).toHaveTextContent(
      "Amanhã,às 8h30.",
    );
    expect(screen.getByTestId("next-celebration-details")).toHaveTextContent(
      "Missa dominical. Depois, amanhã às 19h e quarta-feira às 19h, Missa da Saúde.",
    );
    expect(
      screen.getByRole("link", { name: /Todos os horários/ }),
    ).toHaveAttribute("href", routes.schedule);
  });

  it("should be able to say today and use the locale time format", () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-11-04T12:00:00Z"));

    renderWithProviders(<NextCelebration />, { locale: "en" });

    expect(screen.getByTestId("next-celebration-headline")).toHaveTextContent(
      "Today,at 7:00 PM.",
    );
  });

  it("should be able to name a date when the next Mass is a week away", () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-11-01T23:30:00Z"));

    renderWithProviders(<NextCelebration />);

    expect(screen.getByTestId("next-celebration-headline")).toHaveTextContent(
      "Quarta-feira,às 19h.",
    );
  });
});
