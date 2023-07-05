import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  MOCK_DATA,
  MOCK_DATA_INITIAL,
  MOCK_DATA_ONE_ACCOUNT,
} from "../../../mock-data/mock-data";
import { uuidv4 } from "../../utils";
import AllPages from "./AllPages";

export default {
  title: "Pages/All pages",
  component: AllPages,
  argTypes: {},
} as ComponentMeta<typeof AllPages>;

const Template: ComponentStory<typeof AllPages> = (args) => {
  return <AllPages {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  accounts: {
    title: "Accounts",
    values: [
      {
        id: uuidv4(),
        title: "Salary account",
        text: "000000001234",
        value: 42000,
        fields: [
          { label: "Annual Percentage Yield", value: "0.10%" },
          { label: "Annual interest", value: "1 676 " },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
        transactions: [
          {
            id: uuidv4(),
            title: "Setup account",
            date: "2021-06-10",
            value: 0,
          },
          {
            id: uuidv4(),
            title: "Alphadev Payroll",
            date: new Date(Date.now() - 604800000),
            value: 42000,
          },
          {
            id: uuidv4(),
            title: "Partial paycheck",
            date: new Date(Date.now() - 602800000),
            value: -30000,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Transactions account",
        text: "000000001234",
        value: 2215.13,
        fields: [
          { label: "Annual Percentage Yield", value: "0.10%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
        transactions: [
          {
            id: uuidv4(),
            title: "Setup account",
            date: "2021-06-10",
            value: 0,
          },
          {
            id: uuidv4(),
            title: "Partial paycheck",
            date: new Date(Date.now() - 602800000),
            value: 30000,
          },
          {
            id: uuidv4(),
            title: "Mortgage",
            date: new Date(Date.now() - 504800000),
            value: -5000,
          },
          {
            id: uuidv4(),
            title: "Hamburger",
            date: new Date(Date.now() - 504800000),
            value: -160,
          },
          {
            id: uuidv4(),
            title: "Vacuum cleaner",
            date: new Date(Date.now() - 404800000),
            value: -10000,
          },
          {
            id: uuidv4(),
            title: "Electricity",
            date: new Date(Date.now() - 404800000),
            value: -105,
          },
          {
            id: uuidv4(),
            title: "Papa Johns",
            date: new Date(Date.now() - 304800000),
            value: -350,
          },
          {
            id: uuidv4(),
            title: "Laserdome",
            date: new Date(Date.now() - 304800000),
            value: -700,
          },
          {
            id: uuidv4(),
            title: "Gocart",
            date: new Date(Date.now() - 204800000),
            value: -300,
          },
          {
            id: uuidv4(),
            title: "Popeyes",
            date: new Date(Date.now() - 204800000),
            value: -105,
          },
          {
            id: uuidv4(),
            title: "Don Corleone",
            date: new Date(Date.now() - 104800000),
            value: -95,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Car Savings",
        text: "000000005678",
        value: 8676.88,
        transactions: [
          {
            id: uuidv4(),
            title: "Setup account",
            date: "2021-06-10",
            value: 0,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Vacations",
        text: "000000001234",
        value: 9987.48,
        transactions: [
          {
            id: uuidv4(),
            title: "Setup account",
            date: "2021-06-10",
            value: 0,
          },
        ],
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
      {
        id: uuidv4(),
        title: "Rent 2",
        date: "2023-01-28",
        value: 235,
      },
      {
        id: uuidv4(),
        title: "Car insurance 2",
        date: "2023-02-17",
        value: 120,
      },
      {
        id: uuidv4(),
        title: "Vacation insurance 2",
        date: "2023-03-14",
        value: 370,
      },
      {
        id: uuidv4(),
        title: "Vacation insurance 3",
        date: "2023-03-14",
        value: 2870,
      },

      {
        id: uuidv4(),
        title: "Mastery tax",
        date: "2023-04-01",
        value: 9870,
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
  stocks: { title: "Stocks", stocks: [] },
};

export const MockData = Template.bind({});
MockData.args = {
  ...MOCK_DATA,
};

export const MockDataInitial = Template.bind({});
MockDataInitial.args = {
  ...MOCK_DATA_INITIAL,
};

export const MockDataOneAccount = Template.bind({});
MockDataOneAccount.args = {
  ...MOCK_DATA_ONE_ACCOUNT,
};
