import { createGlobalStyle, ThemeProvider } from "styled-components";
import StartPage from "./stories/pages/all-pages/AllPages";
import { theme } from "./themes";

export const GlobalStyle = createGlobalStyle`
  ${(p) => p.theme.fontFaces.join("")}

  body {
    margin: 0;
    font-family: ${(p) => p.theme.fonts[p.theme.body.font]};
    background: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.white};
  }
`;

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
);
