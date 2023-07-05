const createFontFace = (
  name: string,
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700,
  fonts: { format: string; url: string }[]
) => `
      @font-face {
          font-family: '${name}';
          src: ${fonts
            .map((f) => `url(${f.url}) format('${f.format}')`)
            .join(",")};
          font-weight: ${weight};
          font-display: swap;
      }
  `;

export const ClanFontName = "Clan";

const lightFont = createFontFace(ClanFontName, 300, [
  {
    format: "woff2",
    url: "https://assets.nobiadigital.com/raw/upload/v1660218971/HTH/fonts/ClanforHTHW01-Book.woff2",
  },
  {
    format: "woff",
    url: "https://assets.nobiadigital.com/raw/upload/v1660218971/HTH/fonts/ClanforHTHW01-Book.woff",
  },
]);
const normalFont = createFontFace(ClanFontName, 400, [
  {
    format: "woff2",
    url: "https://assets.nobiadigital.com/raw/upload/v1660218971/HTH/fonts/ClanforHTHW01-News.woff2",
  },
  {
    format: "woff",
    url: "https://assets.nobiadigital.com/raw/upload/v1660218971/HTH/fonts/ClanforHTHW01-News.woff",
  },
]);
const boldFont = createFontFace(ClanFontName, 700, [
  {
    format: "woff2",
    url: "https://assets.nobiadigital.com/raw/upload/v1660218971/HTH/fonts/ClanforHTHW01-Bold.woff2",
  },
  {
    format: "woff",
    url: "https://assets.nobiadigital.com/raw/upload/v1660218971/HTH/fonts/ClanforHTHW01-Bold.woff",
  },
]);

export const ClanFonts = [lightFont, normalFont, boldFont];
