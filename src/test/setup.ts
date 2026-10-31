import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { routerState } from "@/test/router-state";

vi.mock("next/router", () => ({
  useRouter: () => routerState,
}));

class IntersectionObserverStub {
  private readonly callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    this.callback(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}

class ResizeObserverStub {
  observe() {}

  unobserve() {}

  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverStub,
});

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: ResizeObserverStub,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

Object.defineProperty(window, "scrollTo", { writable: true, value: () => {} });

afterEach(() => {
  cleanup();
  routerState.pathname = "/";
  routerState.asPath = "/";
  routerState.locale = "pt";
});
