import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/App";
import { storyBookTheme } from "../src/themes/storybookTheme";

export const decorators = [
  (Story) => (
    <div>
      <ThemeProvider theme={storyBookTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
