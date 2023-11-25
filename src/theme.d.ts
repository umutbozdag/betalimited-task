import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface IPaletteCustomLayoutOptions {
    layout: {
      home: {
        bgColor: string;
      };
      common: {
        primary: string;
        secondary: string;
        tertiary: string;
        danger: string;
        white: string;
      };
    };
  }
  interface Palette extends IPaletteCustomLayoutOptions {}

  interface PaletteOptions extends IPaletteCustomLayoutOptions {}
}
