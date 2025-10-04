import OfferType from "@/types/offer";
import { valueToCurreny } from "@/utils/monetary";
import { Box, Typography } from "@mui/material";

export default function CardOfferPresential({ offer }: { offer: OfferType }) {
  return (
    <>
      <Typography
        sx={{
          fontWeight: "500px",
          fontStyle: "Medium",
          fontSize: "16px",
          leadingTrim: "NONE",
          lineHeight: "114.99999999999999%",
          letterSpacing: "0%",
        }}
      >
        De{" "}
        <Box
          component="span"
          sx={{
            textDecoration: "line-through",
          }}
        >
          {valueToCurreny(offer.originalPrice)}
        </Box>{" "}
        por até
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Typography
          sx={{
            opacity: 1,
            gap: "8px",
            paddingRight: "2px",
            paddingBottom: "2px",
          }}
        >
          {offer.installments[offer.installments.length - 1]?.deadline}x de
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontStyle: "SemiBold",
            fontSize: "40px",
            leadingTrim: "NONE",
            lineHeight: "114.99999999999999%",
            letterSpacing: "0%",
          }}
        >
          {valueToCurreny(
            offer.installments[offer.installments.length - 1]?.value
          )}
        </Typography>
      </Box>
      <Typography
        sx={{
          opacity: 1,
          gap: "8px",
          paddingRight: "2px",
          paddingBottom: "2px",
        }}
      >
        à vista {valueToCurreny(offer.withDiscountPrice)}
      </Typography>
    </>
  );
}
