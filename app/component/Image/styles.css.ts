import { keyframes, style } from "@vanilla-extract/css";

const skeletonAnimation = keyframes({
  "0%": { backgroundPosition: "200% 0" },
  "100%": { backgroundPosition: "-200% 0" },
});

export const errorContainer = style({
  height: "100%",
  aspectRatio: "1/1",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",

  background: "none",
  opacity: 1,
});

export const loading = style({
  background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
  backgroundSize: "200% 100%",
  animation: `${skeletonAnimation} 1.5s infinite`,
  opacity: 0.5,
});
