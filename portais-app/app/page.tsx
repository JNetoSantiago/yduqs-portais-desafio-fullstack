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
        subtitle="Use os filtros para saber o preço do seu curso e fazer sua inscrição."
      />
      <OfferList />
      <DrawerInstallments />
      <Footer />
    </>
  );
}
