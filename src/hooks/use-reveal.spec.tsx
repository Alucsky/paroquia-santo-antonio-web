import { render, screen } from "@testing-library/react";
import { useReveal } from "@/hooks/use-reveal";

function Probe() {
  const [ref, visible] = useReveal<HTMLDivElement>();
  return <div ref={ref} data-testid="probe" data-visible={String(visible)} />;
}

describe("useReveal", () => {
  it("should be able to mark the element as visible once it enters the viewport", () => {
    render(<Probe />);

    expect(screen.getByTestId("probe")).toHaveAttribute("data-visible", "true");
  });

  it("should be able to show content when IntersectionObserver is unavailable", () => {
    const original = window.IntersectionObserver;
    Reflect.deleteProperty(window, "IntersectionObserver");

    render(<Probe />);

    expect(screen.getByTestId("probe")).toHaveAttribute("data-visible", "true");
    window.IntersectionObserver = original;
  });
});
