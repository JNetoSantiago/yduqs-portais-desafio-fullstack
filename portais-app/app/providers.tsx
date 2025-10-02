"use client";

import { DrawerProvider } from "@/contexts/drawerContext";
import { OfferProvider } from "@/contexts/offerContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OfferProvider>
      <DrawerProvider>{children}</DrawerProvider>
    </OfferProvider>
  );
}
