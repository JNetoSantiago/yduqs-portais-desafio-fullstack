import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Success() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          p: { xs: "14px", md: "56px" },
        }}
      >
        <Image
          src="/success.svg"
          alt="Logo"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: 24, md: 32 },
            lineHeight: "120%",
            letterSpacing: 0,
            marginTop: "24px",
          }}
        >
          Recebemos sua matrícula
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, md: 16 },
            lineHeight: "120%",
            letterSpacing: 0,
            marginTop: "12px",
            textAlign: "center",
          }}
        >
          Agora aguarde enquanto analisamos, em breve entraremos em contato.
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Footer />
    </Box>
  );
}
