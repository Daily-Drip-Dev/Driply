import { style } from "@vanilla-extract/css";
import { colors } from "src/vanilla-extract/theme.css";

const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 12px",
  width: "100%",
});

const iconWrapper = style({
  padding: "0px 16px",
});

const rightButton = style({
  color: colors.base.black,
});

const styles = { container, iconWrapper, rightButton };

export default styles;
