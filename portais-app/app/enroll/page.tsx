import CardInfo from "@/components/cardInfo";
import EnrolForm from "@/components/enrollForm";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default async function Home() {
  return (
    <>
      <Header />
      <CardInfo title="Queremos saber um pouco mais sobre você" subtitle="" />
      <EnrolForm />
      <Footer />
    </>
  );
}
