import type { Preview } from "@storybook/react";
import { globalStyles } from "../src/stitches";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Stroy) => {
      globalStyles();
      return <Stroy />;
    },
  ],
};

export default preview;
