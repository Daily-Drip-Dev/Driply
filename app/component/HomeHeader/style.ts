import { styled } from "src/stitches";

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 12px",
  width: "100%",
});

const IconWrapper = styled("div", {
  padding: "0px 16px",
});

const RightButton = styled("button", {
  color: "$black",

  "& > svg": {
    verticalAlign: "middle",
  },
});

const S = { Container, IconWrapper, RightButton };

export default S;
