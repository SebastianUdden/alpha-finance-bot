import { ComponentStory, ComponentMeta } from "@storybook/react";
import { alertCalculation } from "./alert-calculations";
import Alerts from "../Alerts";

export default {
  title: "Organisms/Alerts/Calculations/Budget",
  component: Alerts,
  argTypes: {},
} as ComponentMeta<typeof Alerts>;

const Template: ComponentStory<any> = (args) => {
  const alerts = alertCalculation(args.accounts, args.bills, args.budgets);
  // @ts-ignore
  return <Alerts alerts={alerts} title="Alert testing" />;
};

export const Depleted = Template.bind({});
Depleted.args = {
  accounts: [],
  bills: [],
  budgets: [
    {
      title: "Test budget",
      budget: 100,
      value: 110,
    },
  ],
};

export const Used90Percent = Template.bind({});
Used90Percent.args = {
  accounts: [],
  bills: [],
  budgets: [
    {
      title: "Test budget",
      budget: 100,
      value: 90,
    },
    {
      title: "Test budget 2",
      budget: 100,
      value: 95,
    },
  ],
};

// ONLY SHOW ON LAST DAY OF MONTH
export const Held = Template.bind({});
Held.args = {
  accounts: [],
  bills: [],
  budgets: [
    {
      title: "Test budget",
      budget: 100,
      value: 50,
    },
  ],
};
