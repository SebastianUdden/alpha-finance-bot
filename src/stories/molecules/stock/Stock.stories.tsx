import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stock from "./Stock";

export default {
  title: "Molecules/Stock",
  component: Stock,
  argTypes: {},
} as ComponentMeta<typeof Stock>;

const Template: ComponentStory<typeof Stock> = (args) => {
  return <Stock {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ticker: "AVZ",
  company: "Avanza",
  description: "Online banking, made easy",
  market: "First north",
  dailyPrices: [
    {
      date: "2023-03-20",
      open: 180,
      high: 250,
      low: 180,
      close: 220,
    },
    {
      date: "2023-03-21",
      open: 220,
      high: 250,
      low: 130,
      close: 240,
    },
    {
      date: "2023-03-22",
      open: 240,
      high: 280,
      low: 200,
      close: 250,
    },
    {
      date: "2023-03-23",
      open: 180,
      high: 250,
      low: 180,
      close: 220,
    },
  ],
};

export const ShowCandles = Template.bind({});
ShowCandles.args = {
  showCandles: true,
  ticker: "AVZ",
  company: "Avanza",
  description: "Online banking, made easy",
  market: "First north",
  dailyPrices: [
    {
      date: "2023-03-20",
      open: 180,
      high: 190,
      low: 160,
      close: 190,
    },
    {
      date: "2023-03-21",
      open: 190,
      high: 210,
      low: 160,
      close: 200,
    },
    {
      date: "2023-03-22",
      open: 200,
      high: 225,
      low: 180,
      close: 220,
    },
    {
      date: "2023-03-23",
      open: 220,
      high: 240,
      low: 180,
      close: 230,
    },
  ],
};

export const NegativeCandles = Template.bind({});
NegativeCandles.args = {
  showCandles: true,
  ticker: "AVZ",
  company: "Avanza",
  description: "Online banking, made easy",
  market: "First north",
  dailyPrices: [
    {
      date: "2023-03-20",
      open: 180,
      high: 250,
      low: 160,
      close: 170,
    },
    {
      date: "2023-03-21",
      open: 170,
      high: 190,
      low: 120,
      close: 150,
    },
    {
      date: "2023-03-22",
      open: 150,
      high: 200,
      low: 120,
      close: 140,
    },
    {
      date: "2023-03-23",
      open: 140,
      high: 160,
      low: 80,
      close: 100,
    },
    {
      date: "2023-03-24",
      open: 100,
      high: 120,
      low: 60,
      close: 80,
    },
    {
      date: "2023-03-25",
      open: 80,
      high: 100,
      low: 50,
      close: 60,
    },
  ],
};

export const MixedUpDownUpDownCandles = Template.bind({});
MixedUpDownUpDownCandles.args = {
  showCandles: true,
  ticker: "AVZ",
  company: "Avanza",
  description: "Online banking, made easy",
  market: "First north",
  dailyPrices: [
    {
      date: "2023-03-20",
      open: 180,
      high: 250,
      low: 160,
      close: 190,
    },
    {
      date: "2023-03-21",
      open: 190,
      high: 190,
      low: 120,
      close: 150,
    },
    {
      date: "2023-03-22",
      open: 150,
      high: 200,
      low: 120,
      close: 170,
    },
    {
      date: "2023-03-23",
      open: 170,
      high: 160,
      low: 80,
      close: 100,
    },
  ],
};

export const MixedCandles = Template.bind({});
MixedCandles.args = {
  showCandles: true,
  ticker: "AVZ",
  company: "Avanza",
  description: "Online banking, made easy",
  market: "First north",
  dailyPrices: [
    {
      date: "2023-03-20",
      open: 180,
      high: 250,
      low: 160,
      close: 190,
    },
    {
      date: "2023-03-21",
      open: 190,
      high: 190,
      low: 120,
      close: 150,
    },
    {
      date: "2023-03-22",
      open: 150,
      high: 200,
      low: 120,
      close: 170,
    },
    {
      date: "2023-03-23",
      open: 170,
      high: 160,
      low: 80,
      close: 100,
    },
    {
      date: "2023-03-24",
      open: 100,
      high: 240,
      low: 80,
      close: 200,
    },
    {
      date: "2023-03-25",
      open: 200,
      high: 270,
      low: 180,
      close: 250,
    },
    {
      date: "2023-03-26",
      open: 250,
      high: 290,
      low: 230,
      close: 280,
    },
    {
      date: "2023-03-27",
      open: 280,
      high: 290,
      low: 130,
      close: 170,
    },
  ],
};
