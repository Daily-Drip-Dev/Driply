import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const colors = createThemeContract({
  base: {
    primary: null,
    black: null,
    white: null,
  },
  warmGray: {
    50: null,
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
    950: null,
  },
});

export const defaultTheme = createTheme(colors, {
  base: {
    primary: "#DE4B18",
    black: "#12100E",
    white: "#F7F6F4",
  },
  warmGray: {
    50: "#F7F6F4",
    100: "#EFEDEA",
    200: "#D9D5CE",
    300: "#C4BDB2",
    400: "#AFA597",
    500: "#998D7B",
    600: "#766F69",
    700: "#655B4E",
    800: "#494238",
    900: "#2E2923",
    950: "#12100E",
  },
});
