import { ComponentStory, ComponentMeta } from "@storybook/react";
import { uuidv4 } from "../../utils";
import Wireframes from "../../wireframe/Wireframes";
import BudgetPage from "./BudgetPage";

export default {
  title: "Pages/Budget page",
  component: BudgetPage,
  argTypes: {},
} as ComponentMeta<typeof BudgetPage>;

const Template: ComponentStory<typeof BudgetPage> = (args) => {
  return <BudgetPage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  budgets: {
    showLarge: true,
    title: "Budgets",
    budgets: [
      {
        id: uuidv4(),
        title: "Coffee Shops",
        budget: 1000,
        value: 1000,
      },
      {
        id: uuidv4(),
        title: "Groceries",
        budget: 1000,
        value: 1000,
      },
      {
        id: uuidv4(),
        title: "Something else",
        budget: 1000,
        value: 1000,
      },
    ],
  },
};

export const Wireframe: ComponentStory<typeof BudgetPage> = (args) => {
  return <Wireframes type="budget-page" />;
};
