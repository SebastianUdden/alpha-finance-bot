import { ComponentStory, ComponentMeta } from "@storybook/react";
import { uuidv4 } from "../../utils";
import Wireframes from "../../wireframe/Wireframes";
import AccountPage from "./AccountPage";

export default {
  title: "Pages/Account page",
  component: AccountPage,
  argTypes: {},
} as ComponentMeta<typeof AccountPage>;

const Template: ComponentStory<typeof AccountPage> = (args) => {
  return <AccountPage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Account transactions",
  text: "98609712379",
  value: 8676.88,
  transactions: [
    {
      id: uuidv4(),
      title: "Alphadev Payroll",
      date: "2021-06-25",
      value: 20000,
    },
    {
      id: uuidv4(),
      title: "Poke bowl",
      date: "2022-06-12",
      value: -143.5,
    },
    {
      id: uuidv4(),
      title: "Alphadev Payroll",
      date: "2021-06-25",
      value: 42000,
    },
    {
      id: uuidv4(),
      title: "Mortgage",
      date: "2022-06-26",
      value: -5000,
    },
    {
      id: uuidv4(),
      title: "Hamburger",
      date: "2022-06-26",
      value: -160,
    },
    {
      id: uuidv4(),
      title: "Vacuum cleaner",
      date: "2022-06-28",
      value: -10000,
    },
    {
      id: uuidv4(),
      title: "Electricity",
      date: "2022-06-27",
      value: -105,
    },
    {
      id: uuidv4(),
      title: "Papa Johns",
      date: "2022-06-28",
      value: -350,
    },
    {
      id: uuidv4(),
      title: "Laserdome",
      date: "2022-06-28",
      value: -700,
    },
    {
      id: uuidv4(),
      title: "Gocart",
      date: "2022-07-02",
      value: -300,
    },
    {
      id: uuidv4(),
      title: "Popeyes",
      date: "2022-07-03",
      value: -105,
    },
    {
      id: uuidv4(),
      title: "Don Corleone",
      date: "2022-07-05",
      value: -95,
    },
  ],
};

export const SimpleAccount = Template.bind({});
SimpleAccount.args = {
  id: uuidv4(),
  title: "Car Savings 1",
  text: "000000005678",
  value: 8676.88,
  transactions: [
    { id: uuidv4(), title: "Setup account", date: "2021-06-10", value: 0 },
    {
      id: uuidv4(),
      title: "Paycheck",
      date: new Date(Date.now() - 104800000),
      value: 11000,
    },
    {
      id: uuidv4(),
      title: "ICA",
      date: new Date(Date.now() - 104800000),
      value: -500,
    },
    {
      id: uuidv4(),
      title: "ICA 2",
      date: new Date(Date.now() - 64800000),
      value: -350,
    },
    {
      id: uuidv4(),
      title: "ICA 3",
      date: new Date(Date.now() - 104800000),
      value: -220,
    },
  ],
};

export const Wireframe: ComponentStory<typeof AccountPage> = () => {
  return <Wireframes type="account-page" />;
};
