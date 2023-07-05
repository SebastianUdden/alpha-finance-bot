import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Stocks from "./Stocks";

export default {
  title: "Organisms/Stocks",
  component: Stocks,
  argTypes: {},
} as ComponentMeta<typeof Stocks>;

const Template: ComponentStory<typeof Stocks> = (args) => {
  const [selected, setSelected] = useState(args.stocks[0]);
  return (
    <Stocks {...args} selected={selected} onSelect={(s) => setSelected(s)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Stocks",
  stocks: [
    {
      company: "Tesla",
      showCandles: true,
      dailyPrices: [
        {
          date: "2023-03-20",
          open: 174,
          high: 180,
          low: 170,
          close: 178,
        },
        {
          date: "2023-03-21",
          open: 178,
          high: 190,
          low: 140,
          close: 185,
        },
        {
          date: "2023-03-22",
          open: 185,
          high: 220,
          low: 180,
          close: 200,
        },
        {
          date: "2023-03-23",
          open: 200,
          high: 220,
          low: 140,
          close: 150,
        },
        {
          date: "2023-03-24",
          open: 150,
          high: 240,
          low: 80,
          close: 180,
        },
        {
          date: "2023-03-25",
          open: 180,
          high: 270,
          low: 170,
          close: 230,
        },
        {
          date: "2023-03-26",
          open: 230,
          high: 290,
          low: 225,
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
      description: "Electric cars done great!",
      market: "First north",
      ticker: "TSL",
    },
    {
      company: "Avanza",
      showCandles: true,
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
      description: "Banking done great!",
      market: "First north",
      ticker: "AVZ",
    },
    {
      company: "Uber",
      showCandles: true,
      dailyPrices: [
        {
          date: "2023-03-20",
          open: 180,
          high: 190,
          low: 160,
          close: 170,
        },
        {
          date: "2023-03-21",
          open: 170,
          high: 180,
          low: 120,
          close: 130,
        },
        {
          date: "2023-03-22",
          open: 130,
          high: 200,
          low: 100,
          close: 105,
        },
        {
          date: "2023-03-23",
          open: 105,
          high: 120,
          low: 50,
          close: 60,
        },
        {
          date: "2023-03-24",
          open: 60,
          high: 70,
          low: 30,
          close: 40,
        },
        {
          date: "2023-03-25",
          open: 40,
          high: 80,
          low: 20,
          close: 70,
        },
        {
          date: "2023-03-26",
          open: 70,
          high: 95,
          low: 6,
          close: 10,
        },
        {
          date: "2023-03-27",
          open: 10,
          high: 15,
          low: 4,
          close: 2,
        },
      ],
      description: "Taxi cars done great!",
      market: "First north",
      ticker: "UBR",
    },
  ],
};
