import OfferType from "@/types/offer";

type OfferContextType = {
  offers: OfferType[];
  setOffers: (offers: OfferType[]) => void;

  selectedOffer: OfferType | undefined;
  setSelectedOffer: (offer: OfferType | undefined) => void;

  loadOffers: (offers: OfferType[]) => void;
};

export default OfferContextType;
