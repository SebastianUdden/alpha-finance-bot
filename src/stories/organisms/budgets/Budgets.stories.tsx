import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import Budgets from "./Budgets";

export default {
  title: "Organisms/Budgets",
  component: Budgets,
  argTypes: {},
} as ComponentMeta<typeof Budgets>;

const Template: ComponentStory<typeof Budgets> = (args) => {
  return <Budgets {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  showLarge: true,
  title: "Budgets",
  budgets: [
    {
      id: "1",
      title: "Coffee Shops",
      budget: 1000,
      value: 900,
    },
    {
      id: "2",
      title: "Groceries",
      budget: 1000,
      value: 700,
    },
    {
      id: "3",
      title: "Restaurants",
      budget: 3000,
      value: 100,
    },
  ],
  colors: ["#ff00ff", "#00ffff", "#ffff00"],
};

export const Wireframe: ComponentStory<typeof Budgets> = (args) => {
  return <Wireframes type="budgets" />;
};
