import { getAllOffers } from "@/actions/offers";
import OfferList from "@/components/offerList";
import { OfferContext } from "@/contexts/offerContext";
import mockOffers from "@/tests/mocks/mockOffers";
import OfferType from "@/types/offer";
import { render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";

jest.mock("@/actions/offers", () => ({
  getAllOffers: jest.fn(),
}));

jest.mock("@/components/cardOffer", () => {
  return ({ offer }: { offer: OfferType }) => (
    <div data-testid="card-offer">
      {offer.modality} - {offer.shift}
    </div>
  );
});

describe("OfferList", () => {
  it("renderiza ofertas e textos corretamente", async () => {
    (getAllOffers as jest.Mock).mockResolvedValue(mockOffers);

    const TestWrapper = () => {
      const [offers, setOffers] = useState<OfferType[]>([]);

      const loadOffers = (data: OfferType[]) => {
        setOffers(data);
      };

      const contextValue = {
        offers,
        loadOffers,
        setOffers,
        selectedOffer: undefined,
        setSelectedOffer: jest.fn(),
        selectedInstallment: undefined,
        setSelectedInstallment: jest.fn(),
      };

      return (
        <OfferContext.Provider value={contextValue}>
          <OfferList />
        </OfferContext.Provider>
      );
    };

    render(<TestWrapper />);

    await waitFor(() => {
      expect(getAllOffers).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(screen.getByText("2 opções encontradas")).toBeInTheDocument();
    });

    const cards = screen.getAllByTestId("card-offer");
    expect(cards.length).toBe(2);
  });
});
