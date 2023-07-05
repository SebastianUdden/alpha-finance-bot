import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import Budget from "./Budget";

export default {
  title: "Molecules/Budget",
  component: Budget,
  argTypes: {},
} as ComponentMeta<typeof Budget>;

const Template: ComponentStory<typeof Budget> = (args) => {
  return <Budget {...args} color="magenta" />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Restaurants",
  budget: 3000,
  value: 100,
};

export const MetBudget = Template.bind({});
MetBudget.args = {
  title: "Strawberries",
  budget: 300,
  value: 300,
};

export const ExceededBudget = Template.bind({});
ExceededBudget.args = {
  title: "Chocolate",
  budget: 300,
  value: 500,
};

export const Wireframe: ComponentStory<typeof Budget> = (args) => {
  return <Wireframes type="budget" />;
};
