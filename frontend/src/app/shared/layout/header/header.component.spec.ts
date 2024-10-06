import { render, RenderResult, screen } from "@testing-library/angular";
import { HeaderComponent } from "./header.component";

describe("AppComponent", () => {
  let renderResult: RenderResult<HeaderComponent>;
  beforeEach(async () => {
    renderResult = await render(HeaderComponent);
  });

  test("should have the title with link", () => {
    expect(screen.getByText("VeloCard")).toBeInTheDocument();
    expect(screen.getByText("VeloCard")).toHaveAttribute("href", "#");
  });
});

