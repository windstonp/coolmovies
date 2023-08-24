import { responsiveFontSizes, createTheme } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#2c96e8",
        dark: "#1263a1",
        light: "#75bbf0",
      },
      info: {
        main: "#888888",
        dark: "#444444",
        light: "#aaaaaa",
      },
    },
    typography: {
      h1: {
        marginTop: 16,
        fontSize: "2.75rem",
        textAlign: "center",
      },
      body1: {
        fontWeight: 300,
        textAlign: "center",
        maxWidth: 600,
        margin: "24px 0",
      },
    },
  })
);
