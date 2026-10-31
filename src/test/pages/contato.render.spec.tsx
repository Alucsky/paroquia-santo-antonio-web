import { screen } from "@testing-library/react";
import ContactPage from "@/pages/contato";
import { renderWithProviders } from "@/test/render-with-providers";

describe("Contact page", () => {
  it("should be able to render the main heading", () => {
    renderWithProviders(<ContactPage />, { pathname: "/contato" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Fale com a gente.",
    );
  });

  it("should be able to list every contact channel", () => {
    renderWithProviders(<ContactPage />);

    expect(screen.getAllByTestId("contact-channel")).toHaveLength(6);
  });
});
