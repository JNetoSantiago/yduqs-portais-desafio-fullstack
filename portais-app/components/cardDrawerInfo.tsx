import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function CardDrawerInfo({ title }: { title: string }) {
  return (
    <Box
      sx={{
        opacity: 1,
        gap: "16px",
        borderRadius: "8px",
        borderWidth: "1px",
        padding: "24px",
        borderStyle: "solid",
        borderColor: "#E0E0E0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography>{title}</Typography>
      <Add />
    </Box>
  );
}
