"use client";

import OfferContextType from "@/types/context/offerContext";
import OfferType from "@/types/offer";
import { createContext, ReactNode, useContext, useState } from "react";

const OfferContext = createContext<OfferContextType | undefined>(undefined);

export function OfferProvider({
  children,
  initialOffers = [],
}: {
  children: ReactNode;
  initialOffers?: OfferType[];
}) {
  const [offers, setOffers] = useState<OfferType[]>(initialOffers);
  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>();

  return (
    <OfferContext.Provider
      value={{ offers, setOffers, selectedOffer, setSelectedOffer }}
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
