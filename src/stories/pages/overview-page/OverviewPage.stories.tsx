import { ComponentStory, ComponentMeta } from "@storybook/react";
import { uuidv4 } from "../../utils";
import Wireframes from "../../wireframe/Wireframes";
import OverviewPage from "./OverviewPage";

export default {
  title: "Pages/Overview page",
  component: OverviewPage,
  argTypes: {},
} as ComponentMeta<typeof OverviewPage>;

const Template: ComponentStory<typeof OverviewPage> = (args) => {
  return <OverviewPage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  alerts: {
    title: "Alerts",
    alerts: [
      "Heads up, you've used up **90%** of your Shopping budget this month.",
      "You've spent **1 200 kr** this week.",
      "Your subscription fees have passed **1 000 kr** per month!",
      "Some info about finance!",
      "Even more stuff that's good to know.",
      "Your *home account* is almost empty...",
      "The budget for *rent* is depleted, you should oversee it for next month.",
    ],
  },
  accounts: {
    title: "Accounts",
    values: [
      {
        id: uuidv4(),
        title: "Home Savings",
        text: "000000001234",
        value: 2215.13,
      },
      {
        id: uuidv4(),
        title: "Car Savings",
        text: "000000005678",
        value: 8676.88,
      },
      {
        id: uuidv4(),
        title: "Vacations",
        text: "000000001234",
        value: 987.48,
      },
    ],
  },
  bills: {
    title: "Bills",
    values: [
      {
        id: uuidv4(),
        title: "Rent",
        date: "2023-01-28",
        value: 1235,
      },
      {
        id: uuidv4(),
        title: "Car insurance",
        date: "2023-02-17",
        value: 600,
      },
      {
        id: uuidv4(),
        title: "Vacation insurance",
        date: "2023-03-14",
        value: 870,
      },
    ],
  },
  budgets: {
    title: "Budgets",
    budgets: [
      {
        id: uuidv4(),
        title: "Coffee Shops",
        budget: 1000,
        value: 900,
      },
      {
        id: uuidv4(),
        title: "Groceries",
        budget: 1000,
        value: 700,
      },
      {
        id: uuidv4(),
        title: "Restaurants",
        budget: 3000,
        value: 2500,
      },
    ],
  },
};

export const Wireframe: ComponentStory<typeof OverviewPage> = (args) => {
  return <Wireframes type="overview-page" />;
};
