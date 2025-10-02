"use client";

import { getAllOffers } from "@/actions/offers";
import CardOffer from "@/components/cardOffer";
import { OfferContext } from "@/contexts/offerContext";
import OfferType from "@/types/offer";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useContext, useEffect } from "react";

export default function OfferList() {
  const { offers, loadOffers } = useContext(OfferContext);

  useEffect(() => {
    async function fetchOffers() {
      const data = await getAllOffers();
      loadOffers(data);
    }
    if (offers.length === 0) {
      fetchOffers();
    }
  }, []);

  return (
    <Box
      sx={{
        opacity: 1,
        gap: "24px",
        paddingRight: "88px",
        paddingBottom: "56px",
        paddingLeft: "88px",
      }}
    >
      <Box
        sx={{
          opacity: 1,
          paddingTop: "32px",
          paddingBottom: "16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "14px",
            leadingTrim: "NONE",
            lineHeight: "133%",
            letterSpacing: "0%",
          }}
        >
          {offers.length} opções encontradas
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        {offers.map((offer: OfferType) => (
          <CardOffer key={offer.id} offer={offer} />
        ))}
      </Box>
    </Box>
  );
}
