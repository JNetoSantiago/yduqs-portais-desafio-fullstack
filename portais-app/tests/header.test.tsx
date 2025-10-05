import Header from "@/components/header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("should render logo", () => {
    render(<Header />);

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/logo.svg");
  });
});
