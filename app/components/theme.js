import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#005852",
      dark: "#4056A1",
      beige: "#DCD9D5",
      beige2: "#EFE9E6",
      green: "#00D779",
      black: '#000000'
    },
    text: {
      dark: "#4056A1",
      white: "#FFFFFF",
      light: "#F1F0EB",
      black: "#000000",
      green: "#00D779",
    },
    background: {
      gradient:
        "radial-gradient(circle, rgba(173,216,230,0.7) 0%, rgba(221,160,221,0.7) 100%)",
    },
  },

  typography: {
    fontFamily: "Anton, Montserrat, Arial, sans-serif",
    h1: {
      fontFamily: "Anton",
    },
    h2: {
      fontFamily: "Anton",
    },
    h3: {
      fontFamily: "Anton",
    },
    h4: {
      fontFamily: "Anton",
    },
    h5: {
      fontFamily: "Anton",
    },
    h6: {
      fontFamily: "Anton",
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "24px",
    },
  },
});

export default Theme;
