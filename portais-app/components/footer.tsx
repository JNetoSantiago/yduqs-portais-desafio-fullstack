import Image from "next/image";

import { Box } from "@mui/material";

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
          justifyContent: "space-between",
          opacity: 1,
          paddingTop: "24px",
          paddingRight: "88px",
          paddingBottom: "24px",
          paddingLeft: "88px",
        }}
      >
        <Image
          src="/logo.svg"
          width={158.33}
          height={40}
          alt="Picture of the author"
        />
      </Box>
    </Box>
  );
}
