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
      showPercentage: true,
      dailyPrices: [
        {
          date: "2023-04-04",
          price: 170,
        },
        {
          date: "2023-04-04",
          price: 140,
        },
        {
          date: "2023-04-04",
          price: 150,
        },
        {
          date: "2023-04-03",
          price: 110,
        },
        {
          date: "2023-04-02",
          price: 100,
        },
      ],
      description: "Online banking, made easy!",
      market: "First north",
      ticker: "AVZ",
    },
  ],
};
