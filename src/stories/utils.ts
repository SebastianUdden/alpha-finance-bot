export const getPages = (pageLength: number, array: string[]) => {
  const pages = [];
  const pageCount = array.length / pageLength;
  for (let i = 0; i < pageCount; i++) {
    pages.push(array.slice(i, i + pageLength));
  }
  return pages;
};

export const uuidv4 = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (x) => {
    const random = (Math.random() * 16) | 0;
    const value = x === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });

export const formatCurrency = (currency: number) => {
  return `${currency.toLocaleString("SV-se")} kr`;
};

export const getPercentageHex = (ratio: number) => {
  const p = ratio * 100;
  const percent = Math.max(0, Math.min(100, p));
  const intValue = Math.round((percent / 100) * 255);
  const hexValue = intValue.toString(16);
  return hexValue.padStart(2, "0").toUpperCase();
};

export const getConicGradient = (colors: string[], ratios: number[]) => {
  const gradients: any = ratios.reduce(
    (a: any, b: any) => {
      return { sum: a.sum + b, list: [...a.list, [a.sum, a.sum + b]] };
    },
    { sum: 0, list: [] }
  );
  const conicGradients = gradients.list
    .map((x: any, i: number) => {
      return `${colors[i]} ${x[0] * 100}%${
        i === ratios.length - 1 ? "" : ` ${x[1] * 100}%`
      }`;
    })
    .join(", ");
  return `conic-gradient(
      ${conicGradients}
    );`;
};

const randomFromInterval = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const createColors = (length: number, colors: string[]): string[] => {
  if (colors.length === length) return colors;
  if (colors.length > length) return colors.slice(0, length);
  let newColors = [];
  if (colors.length < length) {
    let count = 0;
    let percentageHex = "FF";
    for (let i = 0; i < length; i++) {
      if (colors[count]) {
        newColors.push(`${colors[count]}${percentageHex}`);
        count++;
      } else {
        count = 0;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        percentageHex = getPercentageHex(randomFromInterval(0.5, 0.8));
        newColors.push(`${randomColor}${percentageHex}`);
        percentageHex = getPercentageHex(randomFromInterval(0.3, 0.95));
      }
    }
  }
  return newColors;
};
