import { ComponentStory, ComponentMeta } from "@storybook/react";
import { alertCalculation } from "./alert-calculations";
import Alerts from "../Alerts";
import { ONE_DAY } from "../../../time";

export default {
  title: "Organisms/Alerts/Calculations/Bill",
  component: Alerts,
  argTypes: {},
} as ComponentMeta<typeof Alerts>;

const Template: ComponentStory<any> = (args) => {
  const alerts = alertCalculation(args.accounts, args.bills, args.budgets);
  // @ts-ignore
  return <Alerts alerts={alerts} title="Alert testing" />;
};

export const DueToday = Template.bind({});
DueToday.args = {
  accounts: [],
  bills: [{ title: "Test bill", date: new Date() }],
  budgets: [],
};

export const DueTomorrow = Template.bind({});
DueTomorrow.args = {
  accounts: [],
  bills: [
    { title: "Test bill", date: new Date(new Date().getTime() + ONE_DAY) },
  ],
  budgets: [],
};

export const Overdue = Template.bind({});
Overdue.args = {
  accounts: [],
  bills: [
    { title: "Test bill", date: new Date(new Date().getTime() - ONE_DAY) },
    {
      title: "Test bill 2",
      date: new Date(new Date().getTime() - ONE_DAY - ONE_DAY),
    },
  ],
  budgets: [],
};
