import { screen } from "@testing-library/react";
import ParishPage from "@/pages/paroquia";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Parish page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<ParishPage />, { pathname: "/paroquia" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Uma história que começou com a fé de quem chegou primeiro.",
    );
  });

  it("should be able to show the parish milestones and numbers", () => {
    renderWithProviders(<ParishPage />);

    expect(screen.getAllByTestId("parish-milestone")).toHaveLength(4);
    expect(screen.getAllByTestId("parish-stat")[1]).toHaveTextContent("22");
  });
});
