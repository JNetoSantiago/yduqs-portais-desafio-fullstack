import OfferType from "@/types/offer";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { Typography } from "@mui/material";

export default function CardOfferEad({ offer }: { offer: OfferType }) {
  return (
    <>
      <InfoOutlineIcon />
      <Typography
        sx={{
          fontWeight: "400px",
          fontSize: "14px",
          leadingTrim: "NONE",
          lineHeight: "133%",
          letterSpacing: "0%",
        }}
      >
        Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!
      </Typography>
    </>
  );
}
