"use client";

import OfferType from "@/types/offer";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import CardOfferEad from "@/components/cardOfferEad";
import CardOfferPresential from "@/components/cardOfferPresential";
import { DrawerContext } from "@/contexts/drawerContext";
import { OfferContext } from "@/contexts/offerContext";
import { useContext } from "react";

export default function CardOffer({ offer }: { offer: OfferType }) {
  const { offers, setSelectedOffer } = useContext(OfferContext);
  const { setOpen } = useContext(DrawerContext);

  const handleSelectOffer = (offer: OfferType) => {
    setSelectedOffer(offer);
    setOpen(true);
  };

  return (
    <Card
      sx={{
        borderColor: "primary.main",
        borderWidth: "1px",
        borderStyle: "solid",
        width: "381px",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box
          sx={{
            width: "381px",
            height: "38px",
            opacity: 1,
            gap: "8px",
            paddingTop: "8px",
            paddingRight: "24px",
            paddingBottom: "8px",
            paddingLeft: "24px",
            borderBottomWidth: "1px",
            backgroundColor: "primary.dark",
            color: "#FFFFFF",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "150%",
              letterSpacing: 0,
            }}
          >
            {offer.modality === "PRESENCIAL"
              ? `Presencial | ${offer.shift}`
              : "EAD"}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "381px",
            height: "209px",
            opacity: 1,
            gap: "24px",
            padding: "24px",
            backgroundColor: "primary.main",
            color: "#FFFFFF",
          }}
        >
          {offer.modality == "PRESENCIAL" ? (
            <CardOfferPresential offer={offer} />
          ) : (
            <CardOfferEad offer={offer} />
          )}
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleSelectOffer(offer)}
          >
            Avançar
          </Button>
        </Box>
        <Box
          sx={{
            opacity: 1,
            gap: "24px",
            padding: "24px",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontStyle: "Medium",
              fontSize: "14px",
              leadingTrim: "NONE",
              lineHeight: "135%",
              letterSpacing: "0%",
            }}
          >
            {offer.address.city.name} - {offer.address.neighborhood}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontStyle: "Regular",
              fontSize: "14px",
              leadingTrim: "NONE",
              lineHeight: "114.99999999999999%",
              letterSpacing: "0%",
            }}
          >
            {offer.address.street}, Nº {offer.address.number} -{" "}
            {offer.address.neighborhood} - {offer.address.city.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
