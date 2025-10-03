"use client";

import OfferContextType from "@/types/context/offerContext";
import InstallmentType from "@/types/installment";
import OfferType from "@/types/offer";
import { createContext, ReactNode, useContext, useState } from "react";

export const OfferContext = createContext<OfferContextType>({
  offers: [],
  setOffers: () => {},
  selectedOffer: undefined,
  setSelectedOffer: () => {},
  selectedInstallment: undefined,
  setSelectedInstallment: () => {},
  loadOffers: () => {},
});

export function OfferProvider({ children }: { children: ReactNode }) {
  const [offers, setOffers] = useState<OfferType[]>([]);
  const [selectedInstallment, setSelectedInstallment] = useState<
    InstallmentType | undefined
  >();
  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>();

  const loadOffers = (offers: OfferType[]) => {
    setOffers(offers);
  };

  return (
    <OfferContext.Provider
      value={{ offers, setOffers, selectedOffer, setSelectedOffer, loadOffers, selectedInstallment, setSelectedInstallment }}
    >
      {children}
    </OfferContext.Provider>
  );
}

export function useOffer() {
  const context = useContext(OfferContext);
  if (!context)
    throw new Error("useOffer deve ser usado dentro de OfferProvider");
  return context;
}
