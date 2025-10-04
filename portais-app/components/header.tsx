import Box from "@mui/material/Box";
import Image from "next/image";

export default function Header() {
  return (
    <Box
      sx={{
        opacity: 1,
        gap: "238px",
        paddingTop: { xs: "16px", md: "24px" },
        paddingRight: { xs: "16px", md: "88px" },
        paddingBottom: { xs: "16px", md: "24px" },
        paddingLeft: { xs: "16px", md: "88px" },
      }}
      color="transparent"
    >
      <Box
        sx={{
          width: { xs: "99.78px", md: "158.33px" },
          height: { xs: "32px", md: "40px" },
          position: "relative",
        }}
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
}
