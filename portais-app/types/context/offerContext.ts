import OfferType from "@/types/offer";
import InstallmentType from "../installment";

type OfferContextType = {
  offers: OfferType[];
  setOffers: (offers: OfferType[]) => void;

  selectedOffer: OfferType | undefined;
  setSelectedOffer: (offer: OfferType | undefined) => void;

  selectedInstallment: InstallmentType | undefined;
  setSelectedInstallment: (installment: InstallmentType | undefined) => void;

  loadOffers: (offers: OfferType[]) => void;
};

export default OfferContextType;
