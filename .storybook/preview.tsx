import type { Preview } from "@storybook/react";
import React from "react";
import { defaultTheme } from "../src/vanilla-extract/theme.css";
import "../src/vanilla-extract/globalStyles.css";

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
    (Story) => (
      <div className={defaultTheme}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
