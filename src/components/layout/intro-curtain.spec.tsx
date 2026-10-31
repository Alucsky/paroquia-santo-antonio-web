import { screen } from "@testing-library/react";
import {
  INTRO_DURATION_MS,
  IntroCurtain,
} from "@/components/layout/intro-curtain";
import { renderWithProviders } from "@/test/render-with-providers";

describe("IntroCurtain", () => {
  it("should be able to show the parish name without exposing it to screen readers", () => {
    renderWithProviders(<IntroCurtain />);

    const curtain = screen.getByTestId("intro-curtain");
    expect(curtain).toHaveAttribute("aria-hidden", "true");
    expect(curtain).toHaveTextContent("Santo Antônio");
    expect(curtain).toHaveTextContent("Dois Vizinhos · PR");
  });
});

describe("IntroCurtain timing", () => {
  afterEach(() => {
    vi.useRealTimers();
    document.documentElement.classList.remove("intro-seen");
  });

  it("should be able to mark the intro as seen once it finishes", () => {
    vi.useFakeTimers();
    renderWithProviders(<IntroCurtain />);

    expect(document.documentElement).not.toHaveClass("intro-seen");
    vi.advanceTimersByTime(INTRO_DURATION_MS);
    expect(document.documentElement).toHaveClass("intro-seen");
  });
});
