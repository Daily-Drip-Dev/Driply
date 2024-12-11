import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const colors = createThemeContract({
  base: {
    primary: null,
    black: null,
    white: null,
  },
  warmGray: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  blueScale: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
});

export const defaultTheme = createTheme(colors, {
  base: {
    primary: "#DE4B18",
    black: "#12100E",
    white: "#F7F6F4",
  },
  warmGray: {
    100: "#EFEDEA",
    200: "#D9D5CE",
    300: "#C4BDB2",
    400: "#AFA597",
    500: "#998D7B",
    600: "#766F69",
    700: "#655B4E",
    800: "#494238",
    900: "#2E2923",
  },
  blueScale: {
    100: "#D9E4ED",
    200: "#B3C9DB",
    300: "#8CADC8",
    400: "#6692B6",
    500: "#4077A4",
    600: "#35658D",
    700: "#2A5376",
    800: "#204260",
    900: "#153049",
  },
});
