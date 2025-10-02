"use client";

import { OfferProvider } from "@/contexts/offerContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <OfferProvider>{children}</OfferProvider>;
}
