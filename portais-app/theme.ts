"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
  },
  palette: {
    primary: {
      main: "#144BC8",
      dark: "#001F66",
      light: "#FFFFFF1A",
    },
    secondary: {
      main: "#EE325D",
    },
    background: {
      default: "#FFFFFF",
      paper: "#fff",
    },
  },
});

export default theme;
