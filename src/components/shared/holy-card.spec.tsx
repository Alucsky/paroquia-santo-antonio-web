import { screen } from "@testing-library/react";
import { HolyCard, tiltFor } from "@/components/shared/holy-card";
import { renderWithProviders } from "@/test/render-with-providers";

describe("HolyCard", () => {
  it("should be able to alternate the tilt of neighbouring cards", () => {
    expect(tiltFor(0)).toBeLessThan(0);
    expect(tiltFor(1)).toBeGreaterThan(0);
    expect(tiltFor(6)).toBe(tiltFor(0));
  });

  it("should be able to render the title, eyebrow, description and footer", () => {
    renderWithProviders(
      <HolyCard
        eyebrow="01"
        title="Batizado"
        description="Datas e documentos"
        footer={<span data-testid="holy-card-footer">Ver mais</span>}
        tilt={false}
        data-testid="holy-card"
      />,
    );

    expect(
      screen.getByRole("heading", { level: 3, name: "Batizado" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("holy-card")).toHaveTextContent("— 01 —");
    expect(screen.getByTestId("holy-card")).toHaveTextContent(
      "Datas e documentos",
    );
    expect(screen.getByTestId("holy-card-footer")).toHaveTextContent(
      "Ver mais",
    );
  });
});
