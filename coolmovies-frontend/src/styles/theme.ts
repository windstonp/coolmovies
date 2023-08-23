import { responsiveFontSizes, createTheme } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#0943b8",
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
