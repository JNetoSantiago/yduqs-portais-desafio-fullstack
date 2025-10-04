import { Box, Typography } from "@mui/material";

export default function CardInfo({
  title,
  subtitle,
}: {
  title: String;
  subtitle: String;
}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 191, md: 150 },
        opacity: 1,
        p: { xs: "24px", md: "40px 88px" },
        gap: { xs: "16px", md: 2 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "primary.main",
        borderRadius: 0,
        color: "#FFFFFF",
      }}
    >
      <Box sx={{ xs: 0, md: 0 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            fontSize: { xs: 24, md: 32 },
            lineHeight: "120%",
            letterSpacing: 0,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "150%",
              letterSpacing: 0,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
