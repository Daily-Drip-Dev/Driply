import { keyframes } from "@stitches/react";
import { styled } from "src/stitches";

const skeletonAnimation = keyframes({
  "0%": { backgroundPosition: "200% 0" },
  "100%": { backgroundPosition: "-200% 0" },
});

const Image = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",

  variants: {
    isLoading: {
      true: {
        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
        backgroundSize: "200% 100%",
        animation: `${skeletonAnimation} 1.5s infinite`,
        opacity: 0.5,
      },
      false: {
        background: "none",
        opacity: 1,
      },
    },
  },
});

const S = { Image };

export default S;
