import { style } from "@vanilla-extract/css";
import { colors } from "src/vanilla-extract/theme.css";

const homeMain = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  height: "100vh",
  padding: "32px",
});

const logoContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "4px",
  height: "45vh",
});

const logo = style({
  width: "66%",
  aspectRatio: "2.57/1",

  maxWidth: "300px",
  marginRight: "20px",
});

const buttonContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});

const buttonDescription = style({
  color: colors.warmGray[800],
});

const kakaoButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  backgroundColor: "#FEE500",
  color: colors.base.black,

  height: "47px",
  padding: "0px 14px",
  width: "100%",
  borderRadius: "6px",
});

const kakaoText = style({
  textAlign: "center",
  flex: "1",
  whiteSpace: "nowrap",
});

const styles = { homeMain, logoContainer, logo, buttonContainer, buttonDescription, kakaoButton, kakaoText };

export default styles;
