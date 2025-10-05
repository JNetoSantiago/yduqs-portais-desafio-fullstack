import Footer from "@/components/footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("should render logo", () => {
    render(<Footer />);

    const logo = screen.getByAltText("Picture of the author");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/whiteLogo.svg");

    const phoneText = screen.getByText("0800 771 5055");
    expect(phoneText).toBeInTheDocument();

    const phoneIcon = screen.getByAltText("Phone icon");
    expect(phoneIcon).toBeInTheDocument();
    expect(phoneIcon).toHaveAttribute("src", "/phoneIcon.svg");

    const phoneWhattsapp = screen.getByText("Precisa de ajuda?");
    expect(phoneWhattsapp).toBeInTheDocument();

    const whattsappIcon = screen.getByAltText("whattsapp icon");
    expect(whattsappIcon).toBeInTheDocument();
    expect(whattsappIcon).toHaveAttribute("src", "/whattsapp.svg");
  });
});
