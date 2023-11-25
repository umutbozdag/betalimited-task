import { common, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fdfdfd",
    },
    secondary: {
      main: "#f44336",
    },
    layout: {
      home: {
        bgColor: grey["50"],
      },
      common: {
        primary: grey["800"],
        secondary: grey["500"],
        tertiary: grey["100"],
        danger: '#bd4f54',
        white: common["white"],
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: "transparent",
      },
    },
  },
});

export default theme;
