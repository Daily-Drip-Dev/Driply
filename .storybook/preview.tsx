import type { Preview } from "@storybook/react";
import React from "react";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "../src/apollo/client";
import handlers from "../src/mocks/handlers.ts";
import { initialize, mswDecorator } from "msw-storybook-addon";

import { defaultTheme } from "../src/vanilla-extract/theme.css";
import "../src/vanilla-extract/globalStyles.css";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers,
    },
  },
  decorators: [
    mswDecorator,
    (Story) => (
      <ApolloProvider client={apolloClient}>
        <div className={defaultTheme}>
          <Story />
        </div>
      </ApolloProvider>
    ),
  ],
};

export default preview;
