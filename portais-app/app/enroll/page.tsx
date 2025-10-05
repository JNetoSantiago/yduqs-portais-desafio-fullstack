import CardInfo from "@/components/cardInfo";
import EnrolForm from "@/components/enrollForm";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box } from "@mui/material";

export default async function Enroll() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <CardInfo title="Queremos saber um pouco mais sobre você" subtitle="" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          px: { xs: 2, md: 6 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "660px",
          }}
        >
          <EnrolForm />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
