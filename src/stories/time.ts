export const ONE_DAY = 86400000;
export const dateString = (date: Date) =>
  date.toLocaleDateString().split("/").reverse().join("-");
