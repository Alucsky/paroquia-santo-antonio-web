import { renderHook } from "@testing-library/react";
import { routes } from "@/content/routes";
import { usePublicPath } from "@/hooks/use-public-path";
import { routerState } from "@/test/router-state";

describe("usePublicPath", () => {
  it("should be able to translate a page into its public path", () => {
    routerState.pathname = "/schedule";

    expect(renderHook(() => usePublicPath()).result.current).toBe(
      routes.schedule,
    );
  });

  it("should be able to keep paths without a public alias", () => {
    routerState.pathname = "/404";

    expect(renderHook(() => usePublicPath()).result.current).toBe("/404");
  });
});
