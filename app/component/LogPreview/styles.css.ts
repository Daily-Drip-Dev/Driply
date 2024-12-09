import { style } from "@vanilla-extract/css";
import { colors } from "src/vanilla-extract/theme.css";

const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "14px 20px",
  width: "100%",
  height: "90px",
  borderBottom: `1px solid ${colors.warmGray[300]}`,
});

const infoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

const place = style({
  color: colors.warmGray[700],
});

const imageContainer = style({
  width: "60px",
  height: "60px",
  borderRadius: "2px",
  overflow: "hidden",
});

const styles = {
  container,
  infoContainer,
  place,
  imageContainer,
};

export default styles;
