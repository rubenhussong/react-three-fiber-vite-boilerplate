import { render, screen } from "@testing-library/react";
import SunIcon from "../ui/SunIcon";

describe("App", async () => {
  it("renders the app component", async () => {
    render(<SunIcon />);
    const svgElement = screen.getByAltText("Sun");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("src", "/sun.svg");
  });
});
