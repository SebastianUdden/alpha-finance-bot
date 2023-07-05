import { ComponentStory, ComponentMeta } from "@storybook/react";
import StocksPage from "./StocksPage";

export default {
  title: "Pages/Stocks page",
  component: StocksPage,
  argTypes: {},
} as ComponentMeta<typeof StocksPage>;

const Template: ComponentStory<typeof StocksPage> = (args) => {
  return <StocksPage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Stocks",
  stocks: [
    {
      company: "Avanza",
      dailyPrices: [
        {
          date: "2023-04-04",
          open: 170,
          low: 150,
          high: 175,
          close: 155,
        },
        {
          date: "2023-04-04",
          open: 170,
          low: 150,
          high: 175,
          close: 155,
        },
        {
          date: "2023-04-04",
          open: 170,
          low: 150,
          high: 175,
          close: 155,
        },
        {
          date: "2023-04-03",
          open: 170,
          low: 150,
          high: 175,
          close: 155,
        },
        {
          date: "2023-04-02",
          open: 170,
          low: 150,
          high: 175,
          close: 155,
        },
      ],
      description: "Online banking, made easy!",
      market: "First north",
      ticker: "AVZ",
    },
  ],
};
