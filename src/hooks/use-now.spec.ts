import { act, renderHook } from "@testing-library/react";
import { useNow } from "@/hooks/use-now";

describe("useNow", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be able to provide the current date after mount and refresh it", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-31T12:00:00Z"));

    const { result } = renderHook(() => useNow(1000));
    expect(result.current?.toISOString()).toBe("2026-10-31T12:00:00.000Z");

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current?.toISOString()).toBe("2026-10-31T12:00:01.000Z");
  });
});
