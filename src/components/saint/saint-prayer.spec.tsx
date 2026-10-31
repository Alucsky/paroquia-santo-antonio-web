import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SaintPrayer } from "@/components/saint/saint-prayer";
import { renderWithProviders } from "@/test/render-with-providers";

describe("SaintPrayer", () => {
  afterEach(() => {
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
    const user = userEvent.setup();
    const writeText = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue(undefined);
    renderWithProviders(<SaintPrayer />);

    await user.click(screen.getByTestId("saint-prayer-share"));

    expect(writeText).toHaveBeenCalledWith(
      expect.stringContaining("Glorioso Santo Antônio"),
    );
    expect(screen.getByTestId("saint-prayer-share")).toHaveTextContent(
      "Oração copiada",
    );
  });
});
