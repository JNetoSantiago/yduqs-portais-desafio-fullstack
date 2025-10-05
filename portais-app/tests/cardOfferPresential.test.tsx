import CardOfferPresential from "@/components/cardOfferPresential";
import mockPresentialOffer from "@/tests/mocks/mockPresentialOffer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("CardOfferPresential component", () => {
  it("render promotion text", () => {
    render(<CardOfferPresential offer={mockPresentialOffer} />);
    expect(screen.getByText("R$ 1.000,00")).toBeInTheDocument();
  });

  it("render installments amount", () => {
    render(<CardOfferPresential offer={mockPresentialOffer} />);
    expect(screen.getByText("1x de")).toBeInTheDocument();
  });

  it("render installments value", () => {
    render(<CardOfferPresential offer={mockPresentialOffer} />);
    expect(screen.getByText("R$ 8,00")).toBeInTheDocument();
  });
});
