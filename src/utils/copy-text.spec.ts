import { copyText } from "@/utils/copy-text";

describe("copyText", () => {
  const execCommand = vi.fn();
  const writeText = vi.fn();

  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    Object.defineProperty(document, "execCommand", {
      configurable: true,
      value: execCommand,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    execCommand.mockReset();
    writeText.mockReset();
    Reflect.deleteProperty(navigator, "clipboard");
    Reflect.deleteProperty(window, "isSecureContext");
  });

  it("should be able to use the clipboard API on secure pages", async () => {
    Object.defineProperty(window, "isSecureContext", {
      configurable: true,
      value: true,
    });
    writeText.mockResolvedValue(undefined);

    await expect(copyText("Amém")).resolves.toBe(true);
    expect(writeText).toHaveBeenCalledWith("Amém");
    expect(execCommand).not.toHaveBeenCalled();
  });

  it("should be able to fall back to a text selection on insecure pages", async () => {
    Object.defineProperty(window, "isSecureContext", {
      configurable: true,
      value: false,
    });
    execCommand.mockReturnValue(true);

    await expect(copyText("Amém")).resolves.toBe(true);
    expect(execCommand).toHaveBeenCalledWith("copy");
    expect(document.querySelector("textarea")).toBeNull();
  });

  it("should be able to report when nothing could be copied", async () => {
    Object.defineProperty(window, "isSecureContext", {
      configurable: true,
      value: false,
    });
    execCommand.mockReturnValue(false);

    await expect(copyText("Amém")).resolves.toBe(false);
  });

  it("should be able to fall back when the clipboard API is refused", async () => {
    Object.defineProperty(window, "isSecureContext", {
      configurable: true,
      value: true,
    });
    writeText.mockRejectedValue(new Error("denied"));
    execCommand.mockReturnValue(true);

    await expect(copyText("Amém")).resolves.toBe(true);
    expect(execCommand).toHaveBeenCalledWith("copy");
  });
});
