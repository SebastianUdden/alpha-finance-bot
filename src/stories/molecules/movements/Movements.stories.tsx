import { ComponentStory, ComponentMeta } from "@storybook/react";
import Movements from "./Movements";

export default {
  title: "Molecules/Movements",
  component: Movements,
  argTypes: {},
} as ComponentMeta<typeof Movements>;

const Template: ComponentStory<typeof Movements> = (args) => {
  return <Movements {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  showPercentage: true,
  prices: [
    {
      open: 200,
      high: 200,
      low: 200,
      close: 200,
    },
    { open: 190, high: 190, low: 190, close: 190 },
    { open: 300, high: 300, low: 300, close: 300 },
    { open: 400, high: 400, low: 400, close: 400 },
    { open: 100, high: 100, low: 100, close: 100 },
  ],
};

export const OnePricePoint = Template.bind({});
OnePricePoint.args = {
  prices: [
    {
      open: 200,
      high: 200,
      low: 200,
      close: 200,
    },
  ],
};

export const TwoPricePointsTrendDown = Template.bind({});
TwoPricePointsTrendDown.args = {
  showPercentage: true,
  prices: [
    {
      open: 200,
      high: 200,
      low: 200,
      close: 200,
    },
    { open: 190, high: 190, low: 190, close: 190 },
  ],
};

export const ThreePricePointsTrendUp = Template.bind({});
ThreePricePointsTrendUp.args = {
  showPercentage: true,
  prices: [
    {
      open: 100,
      high: 100,
      low: 100,
      close: 100,
    },
    {
      open: 150,
      high: 150,
      low: 150,
      close: 150,
    },
    {
      open: 200,
      high: 200,
      low: 200,
      close: 200,
    },
  ],
};

export const ThreePricePointsTrendUpCandles = Template.bind({});
ThreePricePointsTrendUpCandles.args = {
  showPercentage: true,
  showCandles: true,
  prices: [
    {
      open: 100,
      high: 160,
      low: 90,
      close: 150,
    },
    {
      open: 150,
      high: 220,
      low: 150,
      close: 200,
    },
    {
      open: 200,
      high: 300,
      low: 170,
      close: 300,
    },
  ],
};

export const FourPricePointsTrendUpDownUp = Template.bind({});
FourPricePointsTrendUpDownUp.args = {
  showPercentage: true,
  prices: [
    {
      open: 100,
      high: 100,
      low: 100,
      close: 100,
    },
    {
      open: 150,
      high: 150,
      low: 150,
      close: 150,
    },
    {
      open: 100,
      high: 100,
      low: 100,
      close: 100,
    },
    {
      open: 200,
      high: 200,
      low: 200,
      close: 200,
    },
  ],
};

export const FourPricePointsTrendUpDownUpWithCandles = Template.bind({});
FourPricePointsTrendUpDownUpWithCandles.args = {
  showPercentage: true,
  showCandles: true,
  prices: [
    {
      open: 100,
      high: 120,
      low: 90,
      close: 110,
    },
    {
      open: 110,
      high: 152,
      low: 108,
      close: 150,
    },
    {
      open: 150,
      high: 160,
      low: 107,
      close: 120,
    },
    {
      open: 120,
      high: 220,
      low: 110,
      close: 205,
    },
  ],
};
