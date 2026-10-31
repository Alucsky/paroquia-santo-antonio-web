export const routerState = {
  pathname: "/",
  asPath: "/",
  locale: "pt",
  locales: ["pt", "en", "es"],
  defaultLocale: "pt",
  query: {},
  push: vi.fn(),
  replace: vi.fn(),
  prefetch: vi.fn(() => Promise.resolve()),
  events: { on: vi.fn(), off: vi.fn(), emit: vi.fn() },
};
