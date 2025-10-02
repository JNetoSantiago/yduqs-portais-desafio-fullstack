import OfferType from "@/types/offer";
import { Typography } from "@mui/material";

export default function CardOfferEad({ offer }: { offer: OfferType }) {
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
        Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!
      </Typography>
    </>
  );
}
