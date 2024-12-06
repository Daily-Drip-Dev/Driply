import { styled } from "src/stitches";

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "14px 20px",
  width: "100%",
  height: "90px",
  borderBottom: "1px solid $warmGray300",
});

const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

const Place = styled("p", {});

const Title = styled("h3", {});

const ImageContainer = styled("div", {
  width: "60px",
  height: "60px",
  borderRadius: "2px",
  overflow: "hidden",
});

const S = { Container, InfoContainer, Place, Title, ImageContainer };

export default S;
