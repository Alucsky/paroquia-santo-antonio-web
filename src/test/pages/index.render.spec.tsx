import { screen } from "@testing-library/react";
import { routes, sacramentLink } from "@/content/routes";
import HomePage from "@/pages/index";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Home page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<HomePage />, { pathname: "/" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Paróquia Santo Antônio de Pádua",
    );
  });

  it("should be able to reach the main tasks from the home page", () => {
    renderWithProviders(<HomePage />);

    expect(
      screen.getByRole("link", { name: "Horários de missa" }),
    ).toHaveAttribute("href", routes.schedule);
    expect(screen.getByRole("link", { name: "Batizado" })).toHaveAttribute(
      "href",
      sacramentLink("baptism"),
    );
    expect(screen.getAllByTestId("communities-feature-stat")).toHaveLength(3);
  });
});
