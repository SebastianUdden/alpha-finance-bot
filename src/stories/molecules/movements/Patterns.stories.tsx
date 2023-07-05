import { ComponentStory, ComponentMeta } from "@storybook/react";
import Movements from "./Movements";

export default {
  title: "Molecules/Movement patterns",
  component: Movements,
  argTypes: {},
} as ComponentMeta<typeof Movements>;

const A382Can: ComponentStory<typeof Movements> = (args) => {
  return (
    <>
      <p>
        A 38.2% candle means that the <strong>open and close</strong> happens in
        the <strong>top 38.2% for bulls</strong> and{" "}
        <strong>bottom 38.2% for bears</strong>.
      </p>
      <Movements {...args} />
    </>
  );
};
export const A382Candle = A382Can.bind({});
A382Candle.args = {
  showCandles: true,
  prices: [
    {
      open: 180,
      high: 200,
      low: 90,
      close: 190,
    },
    {
      open: 120,
      high: 200,
      low: 90,
      close: 110,
    },
  ],
};

const BearEngulCand: ComponentStory<typeof Movements> = (args) => {
  return (
    <>
      <p>
        A bearish engulfing candle means that candle color moves from green to
        red, then the open and close of the red candle covers the full height of
        the green one. This represents a day in which bulls controlled the price
        of the stock in the morning only to have bears decisively take over by
        the end of the day.
      </p>
      <Movements {...args} />
    </>
  );
};
export const BearishEngulfingCandle = BearEngulCand.bind({});
BearishEngulfingCandle.args = {
  showCandles: true,
  prices: [
    {
      open: 100,
      high: 160,
      low: 90,
      close: 150,
    },
    {
      open: 160,
      high: 170,
      low: 70,
      close: 90,
    },
  ],
};

const BullEngulCand: ComponentStory<typeof Movements> = (args) => {
  return (
    <>
      <p>
        A bullish engulfing candle means that candle color moves from red to
        green, then the open and close of the green candle covers the full
        height of the red one. This represents a day in which bears controlled
        the price of the stock in the morning only to have bulls decisively take
        over by the end of the day.
      </p>
      <Movements {...args} />
    </>
  );
};
export const BullishEngulfingCandle = BullEngulCand.bind({});
BullishEngulfingCandle.args = {
  showCandles: true,
  prices: [
    {
      open: 210,
      high: 220,
      low: 150,
      close: 170,
    },
    {
      open: 160,
      high: 240,
      low: 140,
      close: 220,
    },
  ],
};

const CloseAboveCan: ComponentStory<typeof Movements> = (args) => {
  return (
    <>
      <p>
        A close above candle means that the a green candle closes above the
        latest high wick. This shows buying pressure.
      </p>
      <Movements {...args} />
    </>
  );
};
export const CloseAboveCandle = CloseAboveCan.bind({});
CloseAboveCandle.args = {
  showCandles: true,
  prices: [
    {
      open: 230,
      high: 240,
      low: 180,
      close: 195,
    },
    {
      open: 200,
      high: 260,
      low: 180,
      close: 250,
    },
  ],
};

const CloseBelowCan: ComponentStory<typeof Movements> = (args) => {
  return (
    <>
      <p>
        A close below candle means that the a red candle closes below the latest
        low wick. This shows selling pressure.
      </p>
      <Movements {...args} />
    </>
  );
};
export const CloseBelowCandle = CloseBelowCan.bind({});
CloseBelowCandle.args = {
  showCandles: true,
  prices: [
    {
      open: 210,
      high: 280,
      low: 200,
      close: 250,
    },
    {
      open: 230,
      high: 240,
      low: 180,
      close: 195,
    },
  ],
};
