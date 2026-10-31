import { screen } from "@testing-library/react";
import { IntroCurtain } from "@/components/layout/intro-curtain";
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
