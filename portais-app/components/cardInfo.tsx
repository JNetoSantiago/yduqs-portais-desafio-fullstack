import { Card, CardContent, Typography } from "@mui/material";

export default function CardInfo({
  title,
  subtitle,
}: {
  title: String;
  subtitle: String;
}) {
  return (
    <Card
      sx={{
        width: "100%",
        height: 150,
        opacity: 1,
        p: "40px 88px",
        gap: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "primary.main",
        borderRadius: 0,
        color: "#FFFFFF",
      }}
      elevation={0}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            fontSize: 32,
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
      </CardContent>
    </Card>
  );
}
