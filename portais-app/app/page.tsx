import CardInfo from "@/components/cardInfo";
import CardOffer from "@/components/cardOffer";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { getAllOffers } from "@/actions/offers";

export default async function Home() {
  const offers = await getAllOffers();

  return (
    <>
      <Header />
      <CardInfo />
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
            2 opções encontradas
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          {offers.map((offer: any) => (
            <CardOffer key={offer.id} offer={offer} />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
