import { screen } from "@testing-library/react";
import SacramentsPage from "@/pages/sacramentos";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Sacraments page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<SacramentsPage />, { pathname: "/sacramentos" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Os momentos mais importantes da sua vida de fé.",
    );
  });

  it("should be able to show baptism and marriage checklists", () => {
    renderWithProviders(<SacramentsPage />);

    expect(
      screen.getByTestId("document-checklist-baptism-progress"),
    ).toHaveTextContent("0 de 5");
    expect(
      screen.getByTestId("document-checklist-marriage-progress"),
    ).toHaveTextContent("0 de 10");
    expect(screen.getAllByTestId("other-sacrament")).toHaveLength(4);
  });
});
