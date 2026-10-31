import { screen } from "@testing-library/react";
import { isActivePath, NavLink } from "@/components/layout/nav-link";
import { renderWithProviders } from "@/test/render-with-providers";

describe("NavLink", () => {
  it("should be able to detect the active path", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/horarios", "/")).toBe(false);
    expect(isActivePath("/comunidades/x", "/comunidades")).toBe(true);
    expect(isActivePath("/contato", "/comunidades")).toBe(false);
  });

  it("should be able to mark the current page link", () => {
    renderWithProviders(
      <>
        <NavLink href="/horarios">Horários</NavLink>
        <NavLink href="/contato">Contato</NavLink>
      </>,
      { pathname: "/horarios" },
    );

    expect(screen.getByRole("link", { name: "Horários" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Contato" })).not.toHaveAttribute(
      "aria-current",
    );
  });
});
