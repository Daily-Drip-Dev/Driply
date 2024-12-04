import { createStitches, globalCss } from "@stitches/react";

export const { styled, css, getCssText } = createStitches({
  theme: {
    colors: {
      primary: "#DE4B18",
      black: "#12100E",
      white: "#F7F6F4",

      warmGray50: "#F7F6F4",
      warmGray100: "#EFEDEA",
      warmGray200: "#D9D5CE",
      warmGray300: "#C4BDB2",
      warmGray400: "#AFA597",
      warmGray500: "#998D7B",
      warmGray600: "#766F69",
      warmGray700: "#655B4E",
      warmGray800: "#494238",
      warmGray900: "#2E2923",
      warmGray950: "#12100E",
    },
  },
});

export const globalStyles = globalCss({
  body: {
    fontFamily: "Noto Sans KR, sans-serif",
    color: "$black",
  },
  "h1, .heading1": {
    fontSize: "32px",
    lineHeight: "140%",
    fontWeight: 900,
  },
  "h2, .heading2": {
    fontSize: "26px",
    lineHeight: "130%",
    fontWeight: 700,
  },
  "h3, .heading3": {
    fontSize: "22px",
    lineHeight: "120%",
    fontWeight: 500,
  },
  "h4, .heading4": {
    fontSize: "20px",
    lineHeight: "130%",
    fontWeight: 500,
  },
  "h5, .heading5": {
    fontSize: "18px",
    lineHeight: "130%",
    fontWeight: 500,
  },
  "p, .font-base": {
    fontSize: "16px",
    lineHeight: "130%",
    fontWeight: 400,
  },
  ".font-small": {
    fontSize: "14px",
    lineHeight: "130%",
    fontWeight: 400,
  },
  ".font-xsmall": {
    fontSize: "12px",
    lineHeight: "130%",
    fontWeight: 400,
  },
});
