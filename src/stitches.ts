import { createStitches } from "@stitches/react";

export const { styled, css, getCssText, globalCss } = createStitches({
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
  h1: {
    fontSize: "32px",
    lineHeight: "140%",
    fontWeight: 900,
  },
  h2: {
    fontSize: "26px",
    lineHeight: "130%",
    fontWeight: 700,
  },
  h3: {
    fontSize: "22px",
    lineHeight: "120%",
    fontWeight: 500,
  },
  h4: {
    fontSize: "20px",
    lineHeight: "130%",
    fontWeight: 500,
  },
  h5: {
    fontSize: "18px",
    lineHeight: "130%",
    fontWeight: 500,
  },
  p: {
    fontSize: "16px",
    lineHeight: "130%",
    fontWeight: 400,
  },
});

export const font = {
  heading1: css({
    fontSize: "32px",
    lineHeight: "140%",
    fontWeight: 900,
  }),
  heading2: css({
    fontSize: "26px",
    lineHeight: "130%",
    fontWeight: 700,
  }),
  heading3: css({
    fontSize: "22px",
    lineHeight: "120%",
    fontWeight: 500,
  }),
  heading4: css({
    fontSize: "20px",
    lineHeight: "130%",
    fontWeight: 500,
  }),
  heading5: css({
    fontSize: "18px",
    lineHeight: "130%",
    fontWeight: 500,
  }),
  base: css({
    fontSize: "16px",
    lineHeight: "130%",
    fontWeight: 400,
  }),
  small: css({
    fontSize: "14px",
    lineHeight: "130%",
    fontWeight: 400,
  }),
  xSmall: css({
    fontSize: "12px",
    lineHeight: "130%",
    fontWeight: 400,
  }),
};
