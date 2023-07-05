import { ComponentStory, ComponentMeta } from "@storybook/react";
import { alertCalculation } from "./alert-calculations";
import Alerts from "../Alerts";

export default {
  title: "Organisms/Alerts/Calculations/Account",
  component: Alerts,
  argTypes: {},
} as ComponentMeta<typeof Alerts>;

const Template: ComponentStory<any> = (args) => {
  const alerts = alertCalculation(args.accounts, args.bills, args.budgets);
  // @ts-ignore
  return <Alerts alerts={alerts} title="Alert testing" />;
};

export const Empty = Template.bind({});
Empty.args = {
  accounts: [
    {
      title: "Test account",
      value: 0,
    },
  ],
  bills: [],
  budgets: [],
};

export const AlmostEmpty = Template.bind({});
AlmostEmpty.args = {
  accounts: [
    {
      title: "Test account",
      value: 900,
    },
  ],
  bills: [],
  budgets: [],
};

export const AverageSpendingThisWeek = Template.bind({});
AverageSpendingThisWeek.args = {
  accounts: [
    {
      title: "Test account",
      value: 1101,
      transactions: [
        { title: "Setup account", date: "2021-06-10", value: 0 },
        {
          title: "Loanshark",
          date: new Date(Date.now() - 504800000),
          value: -110,
        },
      ],
    },
  ],
  bills: [],
  budgets: [],
};

export const AverageIncomeThisWeek = Template.bind({});
AverageIncomeThisWeek.args = {
  accounts: [
    {
      title: "Test account",
      value: 1101,
      transactions: [
        { title: "Setup account", date: "2021-06-10", value: 0 },
        {
          title: "Payday",
          date: new Date(Date.now() - 504800000),
          value: 110,
        },
      ],
    },
  ],
  bills: [],
  budgets: [],
};

export const DroppedByNPercent = Template.bind({});
DroppedByNPercent.args = {
  accounts: [
    {
      title: "Test account",
      value: 1001,
      transactions: [
        { title: "Setup account", date: "2021-06-10", value: 0 },
        {
          title: "Loanshark",
          date: new Date(Date.now() - 504800000),
          value: -110,
        },
      ],
    },
  ],
  bills: [],
  budgets: [],
};

export const IncreasedByNPercent = Template.bind({});
IncreasedByNPercent.args = {
  accounts: [
    {
      title: "Test account",
      value: 1001,
      transactions: [
        { title: "Setup account", date: "2021-06-10", value: 0 },
        {
          title: "Payday",
          date: new Date(Date.now() - 504800000),
          value: 110,
        },
      ],
    },
  ],
  bills: [],
  budgets: [],
};
