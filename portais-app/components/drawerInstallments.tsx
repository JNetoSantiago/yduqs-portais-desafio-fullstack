"use client";

import OfferType from "@/types/offer";
import { Drawer } from "@mui/material";

export default function DrawerInstallments({
  isOpen,
  offer,
}: {
  isOpen?: boolean;
  offer?: OfferType;
}) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => {}}>
      {offer && <div>SIM</div>}
    </Drawer>
  );
}
