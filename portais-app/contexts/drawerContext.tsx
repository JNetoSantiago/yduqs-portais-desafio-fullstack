"use client";

import DrawerContextType from "@/types/context/drawerContext";
import { createContext, ReactNode, useContext, useState } from "react";

export const DrawerContext = createContext<DrawerContextType>({
  open: false,
  setOpen: () => {},
});

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (!context)
    throw new Error("useDrawer deve ser usado dentro de OfferProvider");
  return context;
}
