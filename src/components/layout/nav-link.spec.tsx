import { screen } from "@testing-library/react";
import { isActivePath, NavLink } from "@/components/layout/nav-link";
import { routes } from "@/content/routes";
import { renderWithProviders } from "@/test/render-with-providers";

describe("NavLink", () => {
  it("should be able to detect the active path", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath(routes.schedule, "/")).toBe(false);
    expect(isActivePath(`${routes.communities}/x`, routes.communities)).toBe(
      true,
    );
    expect(isActivePath(routes.contact, routes.communities)).toBe(false);
  });

  it("should be able to mark the current page link", () => {
    renderWithProviders(
      <>
        <NavLink href={routes.schedule}>Horários</NavLink>
        <NavLink href={routes.contact}>Contato</NavLink>
      </>,
      { pathname: "/schedule" },
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
