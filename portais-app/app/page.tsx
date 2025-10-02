import CardInfo from "@/components/cardInfo";
import DrawerInstallments from "@/components/drawerInstallments";
import Footer from "@/components/footer";
import Header from "@/components/header";

import OfferList from "@/components/offerList";

export default async function Home() {
  return (
    <>
      <Header />
      <CardInfo
        title="Vamos começar, escolha as opções do seu curso"
        subtitle="Selecione o curso que deseja e clique em avançar"
      />
      <OfferList />
      <DrawerInstallments />
      <Footer />
    </>
  );
}
