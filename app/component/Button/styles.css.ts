import { style } from "@vanilla-extract/css";
import { colors } from "src/vanilla-extract/theme.css";

const button = style({
  backgroundColor: colors.blueScale[500],
  color: colors.warmGray[100],

  borderRadius: "4px",
  padding: "12px 8px",
});

const highlight = style({
  backgroundColor: colors.base.primary,
});

const disabled = style({
  backgroundColor: colors.warmGray[200],
});

const styles = { button, highlight, disabled };

export default styles;
