import { DefaultTheme } from "styled-components";

const colors = {
  primary: "#1EB980",
  secondaryDarkGreen: "#0E5D56",
  quartenaryDarkGreen: "#107D51",
  tertiaryBrightGreen: "#37EFBA",
  secondaryRed: "#FA6859",
  tertiaryBrightRed: "#FB857C",
  quarternaryBrightestRed: "#FDD7D0",
  secondaryOrange: "#FAAC11",
  tertiaryYellow: "#FBCF44",
  quartenaryBrightYellow: "#FBDC78",
  secondaryPurple: "#A932FF",
  tertiaryBrightPurple: "#B15DFF",
  quartenaryBrightestPurple: "#DECAF7",
  secondaryBlue: "#3682FB",
  tertiaryBrightBlue: "#72DEFF",
  quartenaryBrightestBlue: "#B2F2FF",
  background: "#32333D",
  interactiveDarkGrey: "#2A2931",
  // elevatedBackground: "#373740",
  elevatedBackground: "#f73740",
  white: "#FFFFFF",
  fadedGrey: "#838489",
};

export const BaseTheme: DefaultTheme = {
  colors,
  fonts: {
    primary: "",
    secondary: "",
  },
  fontFaces: [],
  body: {
    font: "primary",
    color: "white",
    backgroundColor: "background",
  },
  palettes: {
    green: [
      colors.quartenaryDarkGreen,
      colors.secondaryDarkGreen,
      colors.primary,
      colors.tertiaryBrightGreen,
    ],
    red: [
      colors.secondaryRed,
      colors.tertiaryBrightRed,
      colors.quarternaryBrightestRed,
    ],
    orange: [
      colors.secondaryOrange,
      colors.tertiaryYellow,
      colors.quartenaryBrightYellow,
    ],
    purple: [
      colors.secondaryPurple,
      colors.tertiaryBrightPurple,
      colors.quartenaryBrightestPurple,
    ],
    blue: [
      colors.secondaryBlue,
      colors.tertiaryBrightBlue,
      colors.quartenaryBrightestBlue,
    ],
  },
};
