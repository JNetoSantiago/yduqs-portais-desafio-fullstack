"use client";

import OfferType from "@/types/offer";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import CardOfferEad from "@/components/cardOfferEad";
import CardOfferPresential from "@/components/cardOfferPresential";
import { DrawerContext } from "@/contexts/drawerContext";
import { OfferContext } from "@/contexts/offerContext";
import { useContext } from "react";

export default function CardOffer({ offer }: { offer: OfferType }) {
  const { setSelectedOffer } = useContext(OfferContext);
  const { setOpen } = useContext(DrawerContext);

  const handleSelectOffer = (offer: OfferType) => {
    setSelectedOffer(offer);
    setOpen(true);
  };

  return (
    <Card
      sx={{
        borderColor: "primary.main",
        borderRadius: "8px",
        borderWidth: "1px",
        borderStyle: "solid",
        m: 0,
        p: 0,
        width: "100%",
        maxWidth: { xs: "288px", sm: "288px", md: "381px" },
      }}
      elevation={0}
    >
      <CardContent
        sx={{
          p: 0,
          "&:last-child": { pb: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "288px", sm: "288px", md: "381px" },
            boxSizing: "border-box",
            opacity: 1,
            gap: "8px",
            paddingTop: "8px",
            paddingRight: "24px",
            paddingBottom: "8px",
            paddingLeft: "24px",
            borderBottomWidth: "1px",
            backgroundColor: "primary.dark",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            px: "24px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "135%",
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
            width: "100%",
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
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              height: "40px",
              borderRadius: "8px",
              verticalAlign: "middle",
              marginTop: "24px",
            }}
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
              fontWeight: 500,
              fontSize: "14px",
              leadingTrim: "NONE",
              lineHeight: "135%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              color: "#121212",
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
              textTransform: "uppercase",
              color: "#3D3D3D",
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
