import CardInfo from "@/components/cardInfo";
import DrawerInstallments from "@/components/drawerInstallments";
import Footer from "@/components/footer";
import Header from "@/components/header";

import OfferList from "@/components/offerList";
import { Box } from "@mui/material";

export default async function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <CardInfo
        title="Vamos começar, escolha as opções do seu curso"
        subtitle="Use os filtros para saber o preço do seu curso e fazer sua inscrição."
      />
      <OfferList />
      <DrawerInstallments />

      <Box sx={{ flexGrow: 1 }} />
      <Footer />
    </Box>
  );
}
