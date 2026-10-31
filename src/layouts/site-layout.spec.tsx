import { screen } from "@testing-library/react";
import { SiteLayout } from "@/layouts/site-layout";
import { renderWithProviders } from "@/test/render-with-providers";

describe("SiteLayout", () => {
  it("should be able to wrap the page with header, footer and quick actions", () => {
    renderWithProviders(
      <SiteLayout>
        <p>conteúdo</p>
      </SiteLayout>,
    );

    expect(
      screen.getByRole("link", { name: "Pular para o conteúdo" }),
    ).toHaveAttribute("href", "#main-content");
    expect(screen.getByRole("main")).toHaveTextContent("conteúdo");
    expect(screen.getByTestId("site-header")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-action-bar")).toBeInTheDocument();
  });
});
