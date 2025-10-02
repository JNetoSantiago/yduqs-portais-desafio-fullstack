import CardInfo from "@/components/cardInfo";
import DrawerInstallments from "@/components/drawerInstallments";
import Footer from "@/components/footer";
import Header from "@/components/header";

import OfferList from "@/components/offerList";

export default async function Home() {
  return (
    <>
      <Header />
      <CardInfo />
      <OfferList />
      <DrawerInstallments />
      <Footer />
    </>
  );
}
