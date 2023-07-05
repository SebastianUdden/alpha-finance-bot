import { ComponentStory, ComponentMeta } from "@storybook/react";
import AverageTrueRange from "./AverageTrueRange";

export default {
  title: "Molecules/AverageTrueRange",
  component: AverageTrueRange,
  argTypes: {},
} as ComponentMeta<typeof AverageTrueRange>;

const Template: ComponentStory<typeof AverageTrueRange> = (args) => {
  return (
    <>
      <h2>ATR - Average True Range</h2>
      <p>
        ATR indicates the volatility of a financial asset over time. It is used
        to determine the best placement of a stop-loss order and gauge
        profitability of a trade.
      </p>
      <p>
        To enter a long position (2 days) you may consider using 2*ATR from your
        entry point as stop-loss.
      </p>
      <p>Current ATR = (Prior ATR * 13 + Current TR) / 14</p>
      <AverageTrueRange {...args} />
    </>
  );
};

export const LinearTrend = Template.bind({});
LinearTrend.args = {
  period: 14,
  prices: [
    { open: 10, low: 8, high: 12, close: 9 },
    { open: 15, low: 12, high: 18, close: 16 },
    { open: 20, low: 19, high: 23, close: 22 },
    { open: 25, low: 24, high: 28, close: 25 },
    { open: 30, low: 28, high: 32, close: 29 },
    { open: 35, low: 32, high: 38, close: 36 },
    { open: 40, low: 36, high: 42, close: 39 },
    { open: 45, low: 42, high: 48, close: 46 },
    { open: 50, low: 46, high: 52, close: 50 },
    { open: 55, low: 52, high: 58, close: 55 },
    { open: 60, low: 58, high: 62, close: 61 },
    { open: 65, low: 62, high: 68, close: 65 },
    { open: 70, low: 68, high: 74, close: 70 },
    { open: 75, low: 72, high: 78, close: 74 },
    { open: 80, low: 76, high: 82, close: 80 },
    { open: 85, low: 82, high: 88, close: 85 },
    { open: 90, low: 86, high: 92, close: 89 },
    { open: 95, low: 92, high: 98, close: 94 },
    { open: 100, low: 96, high: 102, close: 100 },
    { open: 105, low: 102, high: 108, close: 105 },
  ],
};

export const ExponentialTrend = Template.bind({});
ExponentialTrend.args = {
  period: 14,
  prices: [
    { open: 10, low: 8, high: 12, close: 9 },
    { open: 15, low: 12, high: 16, close: 16 },
    { open: 20, low: 19, high: 22, close: 22 },
    { open: 25, low: 24, high: 29, close: 29 },
    { open: 30, low: 28, high: 35, close: 35 },
    { open: 35, low: 32, high: 44, close: 44 },
    { open: 40, low: 36, high: 56, close: 56 },
    { open: 45, low: 42, high: 72, close: 72 },
    { open: 50, low: 46, high: 93, close: 93 },
    { open: 55, low: 52, high: 120, close: 120 },
    { open: 60, low: 58, high: 155, close: 155 },
    { open: 65, low: 62, high: 200, close: 200 },
    { open: 70, low: 68, high: 257, close: 257 },
    { open: 75, low: 72, high: 330, close: 330 },
    { open: 80, low: 76, high: 424, close: 424 },
    { open: 85, low: 82, high: 545, close: 545 },
    { open: 90, low: 86, high: 702, close: 702 },
    { open: 95, low: 92, high: 905, close: 905 },
    { open: 100, low: 96, high: 1165, close: 1165 },
    { open: 105, low: 102, high: 1502, close: 1502 },
  ],
};
