import { DefaultTheme } from "styled-components";
import { Brand } from "../types/config";
import { DarkTheme } from "./dark";

const themes: { [key in Brand]: DefaultTheme } = {
  [Brand.Dark]: DarkTheme,
};

export const theme: DefaultTheme = themes[window.BRAND];
