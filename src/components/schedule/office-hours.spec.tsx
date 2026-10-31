import { screen } from "@testing-library/react";
import { OfficeHours } from "@/components/schedule/office-hours";
import { renderWithProviders } from "@/test/render-with-providers";

describe("OfficeHours", () => {
  it("should be able to show the office and priests schedules", () => {
    renderWithProviders(<OfficeHours />);

    const container = screen.getByTestId("office-hours");
    expect(
      screen.getByRole("heading", { name: "Secretaria paroquial" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Atendimento dos padres" }),
    ).toBeInTheDocument();
    expect(container).toHaveTextContent("segunda-feira – sexta-feira");
    expect(container).toHaveTextContent("8:00 – 11:45");
    expect(container).toHaveTextContent("quarta-feira");
    expect(container).toHaveTextContent("14:00 – 17:00");
  });
});
