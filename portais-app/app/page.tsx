import CardInfo from "@/components/cardInfo";
import Footer from "@/components/footer";
import Header from "@/components/header";

import { getAllOffers } from "@/actions/offers";
import OfferList from "@/components/offerList";
import { OfferProvider } from "@/contexts/offerContext";

export default async function Home() {
  const offers = await getAllOffers();

  return (
    <>
      <Header />
      <CardInfo />
      <OfferProvider initialOffers={offers}>
        <OfferList />
      </OfferProvider>
      {/* <DrawerInstallments /> */}
      <Footer />
    </>
  );
}
