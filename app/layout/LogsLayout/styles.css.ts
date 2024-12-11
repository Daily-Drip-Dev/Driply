import { style } from "@vanilla-extract/css";

const logsContainer = style({
  position: "relative",

  display: "flex",
  flexDirection: "column",
  gap: "4px",
  height: "100vh",
});

const logsHeader = style({});

const logsMain = style({
  overflowY: "auto",
  flex: "1",
});

const styles = { logsContainer, logsHeader, logsMain };

export default styles;
