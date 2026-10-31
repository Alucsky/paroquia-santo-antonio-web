import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SaintPrayer } from "@/components/saint/saint-prayer";
import { renderWithProviders } from "@/test/render-with-providers";
import * as clipboard from "@/utils/copy-text";

describe("SaintPrayer", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    Reflect.deleteProperty(navigator, "share");
  });

  it("should be able to show the prayer with the portrait of the patron", () => {
    renderWithProviders(<SaintPrayer />);

    expect(
      screen.getByRole("heading", { name: "Oração a Santo Antônio" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Padroeiro de Dois Vizinhos")).toBeInTheDocument();
    expect(
      screen.getByText("Santo Antônio, rogai por nós!"),
    ).toBeInTheDocument();
  });

  it("should be able to share the prayer through the device share sheet", async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", {
      configurable: true,
      value: share,
    });
    renderWithProviders(<SaintPrayer />);

    await userEvent.click(screen.getByTestId("saint-prayer-share"));

    expect(share).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Oração a Santo Antônio",
        text: expect.stringContaining("rogai por nós"),
      }),
    );
  });

  it("should be able to copy the prayer when sharing is not available", async () => {
    const copy = vi.spyOn(clipboard, "copyText").mockResolvedValue(true);
    renderWithProviders(<SaintPrayer />);

    await userEvent.click(screen.getByTestId("saint-prayer-share"));

    expect(copy).toHaveBeenCalledWith(
      expect.stringContaining("Glorioso Santo Antônio"),
    );
    expect(screen.getByTestId("saint-prayer-share")).toHaveTextContent(
      "Oração copiada",
    );
  });

  it("should be able to keep the share label when copying fails", async () => {
    vi.spyOn(clipboard, "copyText").mockResolvedValue(false);
    renderWithProviders(<SaintPrayer />);

    await userEvent.click(screen.getByTestId("saint-prayer-share"));

    expect(screen.getByTestId("saint-prayer-share")).toHaveTextContent(
      "Compartilhar oração",
    );
  });

  it("should be able to copy the prayer when the share sheet is refused", async () => {
    Object.defineProperty(navigator, "share", {
      configurable: true,
      value: vi
        .fn()
        .mockRejectedValue(new DOMException("blocked", "NotAllowedError")),
    });
    const copy = vi.spyOn(clipboard, "copyText").mockResolvedValue(true);
    renderWithProviders(<SaintPrayer />);

    await userEvent.click(screen.getByTestId("saint-prayer-share"));

    expect(copy).toHaveBeenCalled();
  });
});
