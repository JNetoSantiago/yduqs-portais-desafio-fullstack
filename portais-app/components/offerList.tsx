"use client";

import CardOffer from "@/components/cardOffer";
import { useOffer } from "@/contexts/offerContext";
import OfferType from "@/types/offer";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function OfferList() {
  const { offers } = useOffer();

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
