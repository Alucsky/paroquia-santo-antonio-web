import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DocumentChecklist } from "@/components/sacraments/document-checklist";
import { renderWithProviders } from "@/test/render-with-providers";

describe("DocumentChecklist", () => {
  it("should be able to track the documents already gathered", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <DocumentChecklist id="baptism" items={["Certidão", "Comprovante"]} />,
    );

    const progress = screen.getByTestId("document-checklist-baptism-progress");
    expect(progress).toHaveTextContent("0 de 2");

    const [first] = screen.getAllByRole("checkbox");
    await user.click(first);
    expect(progress).toHaveTextContent("1 de 2");
    expect(first).toBeChecked();

    await user.click(first);
    expect(progress).toHaveTextContent("0 de 2");
  });

  it("should be able to render an empty checklist", () => {
    renderWithProviders(<DocumentChecklist id="empty" items={[]} />);

    expect(
      screen.getByTestId("document-checklist-empty-progress"),
    ).toHaveTextContent("0 de 0");
    expect(screen.queryAllByRole("checkbox")).toHaveLength(0);
  });
});
