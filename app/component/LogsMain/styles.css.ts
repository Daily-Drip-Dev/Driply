import { style } from "@vanilla-extract/css";

const fallback_container = style({
  padding: "100px 32px",
});

const fallback_content = style({
  textAlign: "center",
});

const styles = { fallback_container, fallback_content };

export default styles;
