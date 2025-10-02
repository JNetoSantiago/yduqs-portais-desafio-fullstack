"use client";

import OfferEadDrawerContent from "@/components/offerEadDrawerContent";
import OfferPrentialDrawerContent from "@/components/offerPresentialDrawerContent";
import { DrawerContext } from "@/contexts/drawerContext";
import { OfferContext } from "@/contexts/offerContext";
import { Drawer } from "@mui/material";
import { useContext } from "react";

export default function DrawerInstallments() {
  const { selectedOffer, setSelectedOffer } = useContext(OfferContext);
  const { open, setOpen } = useContext(DrawerContext);

  const clearContext = () => {
    setSelectedOffer(undefined);
    setOpen(false);
  };

  return (
    <Drawer anchor="right" open={open} onClose={clearContext}>
      {selectedOffer?.modality == "PRESENCIAL" ? (
        <OfferPrentialDrawerContent offer={selectedOffer} />
      ) : (
        <OfferEadDrawerContent />
      )}
    </Drawer>
  );
}
