import { style } from "@vanilla-extract/css";

export const typography = {
  heading1: style({
    fontSize: "32px",
    lineHeight: "140%",
    fontWeight: 900,
  }),
  heading2: style({
    fontSize: "26px",
    lineHeight: "130%",
    fontWeight: 700,
  }),
  heading3: style({
    fontSize: "22px",
    lineHeight: "120%",
    fontWeight: 500,
  }),
  heading4: style({
    fontSize: "20px",
    lineHeight: "130%",
    fontWeight: 500,
  }),
  heading5: style({
    fontSize: "18px",
    lineHeight: "130%",
    fontWeight: 500,
  }),
  base: style({
    fontSize: "16px",
    lineHeight: "130%",
    fontWeight: 400,
  }),
  small: style({
    fontSize: "14px",
    lineHeight: "130%",
    fontWeight: 400,
  }),
  xSmall: style({
    fontSize: "12px",
    lineHeight: "130%",
    fontWeight: 400,
  }),
};
