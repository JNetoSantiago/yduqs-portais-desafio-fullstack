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
    <Drawer
      anchor="right"
      open={open}
      onClose={clearContext}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", md: "600px" },
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          },
        },
      }}
    >
      {selectedOffer?.modality == "PRESENCIAL" && (
        <OfferPrentialDrawerContent
          offer={selectedOffer}
          clearContext={clearContext}
        />
      )}
      {selectedOffer?.modality == "EAD" && (
        <OfferEadDrawerContent
          offer={selectedOffer}
          clearContext={clearContext}
        />
      )}
    </Drawer>
  );
}
