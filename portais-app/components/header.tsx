import Box from "@mui/material/Box";
import Image from "next/image";

export default function Header() {
  return (
    <Box
      sx={{
        opacity: 1,
        gap: "238px",
        paddingTop: "28px",
        paddingRight: "88px",
        paddingBottom: "28px",
        paddingLeft: "88px",
      }}
      color="transparent"
    >
      <Image
        src="/logo.svg"
        width={158.33}
        height={40}
        alt="Picture of the author"
      />
    </Box>
  );
}
