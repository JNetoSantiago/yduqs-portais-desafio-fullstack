import CardOffer from "@/components/cardOffer";
import mockEadOffer from "@/tests/mocks/mockEadOffer";
import mockPresentialOffer from "@/tests/mocks/mockPresentialOffer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("@/components/cardOfferPresential", () => () => (
  <div data-testid="card-presential" />
));
jest.mock("@/components/cardOfferEad", () => () => (
  <div data-testid="card-ead" />
));

describe("CardInfo component", () => {
  it("render offer modality", () => {
    render(<CardOffer offer={mockEadOffer} />);
    expect(screen.getByText("EAD")).toBeInTheDocument();
  });

  it("render buton for next page", () => {
    render(<CardOffer offer={mockEadOffer} />);

    const button = screen.getByRole("button", { name: /Avançar/i });
    expect(button).toBeInTheDocument();
  });

  it("render address", () => {
    render(<CardOffer offer={mockEadOffer} />);
    const addressCity = screen.queryByText("Teresina - Centro");
    expect(addressCity).toBeInTheDocument();

    const fullAddress = screen.queryByText(
      "Rua Exemplo, Nº 123 - Centro - Teresina"
    );
    expect(fullAddress).toBeInTheDocument();
  });

  it("render card component by modality", () => {
    render(<CardOffer offer={mockEadOffer} />);

    expect(screen.getByTestId("card-ead")).toBeInTheDocument();
  });

  it("render card component by modality", () => {
    render(<CardOffer offer={mockPresentialOffer} />);

    expect(screen.getByTestId("card-presential")).toBeInTheDocument();
  });
});
