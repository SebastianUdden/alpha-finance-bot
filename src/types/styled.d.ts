import "styled-components";

declare module "styled-components" {
  export interface Colors {
    primary: string;
    secondaryDarkGreen: string;
    quartenaryDarkGreen: string;
    tertiaryBrightGreen: string;
    secondaryRed: string;
    tertiaryBrightRed: string;
    quarternaryBrightestRed: string;
    secondaryOrange: string;
    tertiaryYellow: string;
    quartenaryBrightYellow: string;
    secondaryPurple: string;
    tertiaryBrightPurple: string;
    quartenaryBrightestPurple: string;
    secondaryBlue: string;
    tertiaryBrightBlue: string;
    quartenaryBrightestBlue: string;
    background: string;
    elevatedBackground: string;
    white: string;
    fadedGrey: string;
    interactiveDarkGrey: string;
  }

  export interface Fonts {
    primary: string;
    secondary: string;
  }
  export interface DefaultTheme {
    colors: Colors;
    body: {
      font: keyof Fonts;
      color: keyof Colors;
      backgroundColor: keyof Colors;
    };
    fontFaces: string[];
    fonts: Fonts;
    palettes: {
      green: string[];
      red: string[];
      orange: string[];
      purple: string[];
      blue: string[];
    };
  }
}
