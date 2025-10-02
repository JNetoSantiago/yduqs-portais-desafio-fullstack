import OfferType from "@/types/offer";

type OfferContextType = {
  offers: OfferType[];
  setOffers: (offers: OfferType[]) => void;

  selectedOffer: OfferType | undefined;
  setSelectedOffer: (offer: OfferType | undefined) => void;
};

export default OfferContextType;
