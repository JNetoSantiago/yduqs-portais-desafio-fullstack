import Image from "next/image";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        justifyContent: "space-between",
        opacity: 1,
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.light",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          opacity: 1,
          paddingTop: { xs: "16px", md: "24px" },
          paddingRight: { xs: "24px", md: "88px" },
          paddingBottom: { xs: "16px", md: "24px" },
          paddingLeft: { xs: "24px", md: "88px" },
          gap: { xs: "24px", md: "0px" },
        }}
      >
        <Image
          src="/whiteLogo.svg"
          width={158.33}
          height={40}
          alt="Picture of the author"
        />
        <Box
          sx={{
            display: "flex",
            gap: { xs: "24px", md: "56px" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src="/phoneIcon.svg"
              alt="Phone icon"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                leadingTrim: "NONE",
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              0800 771 5055
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src="/whattsapp.svg"
              alt="whattsapp icon"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                leadingTrim: "NONE",
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              Precisa de ajuda?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
