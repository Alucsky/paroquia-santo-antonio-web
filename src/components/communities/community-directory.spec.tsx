import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CommunityDirectory } from "@/components/communities/community-directory";
import { communities } from "@/content/communities";
import { renderWithProviders } from "@/test/render-with-providers";

describe("CommunityDirectory", () => {
  it("should be able to list every community by default", () => {
    renderWithProviders(<CommunityDirectory />);

    expect(screen.getAllByTestId("community-card")).toHaveLength(
      communities.length,
    );
    expect(screen.getByTestId("community-directory-count")).toHaveTextContent(
      `${communities.length} resultados`,
    );
  });

  it("should be able to filter only neighborhoods", async () => {
    const user = userEvent.setup();
    renderWithProviders(<CommunityDirectory />);

    await user.click(screen.getByRole("button", { name: "Bairros" }));

    const cards = screen.getAllByTestId("community-card");
    expect(cards).toHaveLength(
      communities.filter((item) => item.kind === "neighborhood").length,
    );
    for (const card of cards) {
      expect(within(card).getByTestId("community-card-kind")).toHaveTextContent(
        "Bairro",
      );
    }
    expect(screen.getByRole("button", { name: "Bairros" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("should be able to search by patron ignoring accents", async () => {
    const user = userEvent.setup();
    renderWithProviders(<CommunityDirectory />);

    await user.type(
      screen.getByRole("searchbox", { name: "Buscar comunidade ou padroeiro" }),
      "sao jose",
    );

    const names = screen
      .getAllByTestId("community-card-name")
      .map((node) => node.textContent);
    expect(names).toEqual([
      "São José do Canoas",
      "Volta Grande",
      "Jardim da Colina",
    ]);
  });

  it("should not be able to find a community that does not exist", async () => {
    const user = userEvent.setup();
    renderWithProviders(<CommunityDirectory />);

    await user.type(
      screen.getByRole("searchbox", { name: "Buscar comunidade ou padroeiro" }),
      "inexistente",
    );

    expect(screen.queryAllByTestId("community-card")).toHaveLength(0);
    expect(screen.getByTestId("community-directory-empty")).toHaveTextContent(
      "Nenhuma comunidade encontrada",
    );
    expect(screen.getByTestId("community-directory-count")).toHaveTextContent(
      "Nenhum resultado",
    );
  });

  it("should be able to reveal the story of a community", async () => {
    const user = userEvent.setup();
    renderWithProviders(<CommunityDirectory />);

    const [firstCard] = screen.getAllByTestId("community-card");
    const toggle = within(firstCard).getByTestId("community-card-toggle");
    expect(toggle).toHaveTextContent("Ver história");

    await user.click(toggle);

    expect(toggle).toHaveTextContent("Ocultar história");
    expect(firstCard).toHaveTextContent("Julio Kosiske");
    expect(
      within(firstCard).getByTestId("community-card-arrival"),
    ).toHaveTextContent("1973");
  });
});
