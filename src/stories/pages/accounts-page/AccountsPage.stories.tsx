import { ComponentStory, ComponentMeta } from "@storybook/react";
import { uuidv4 } from "../../utils";
import Wireframes from "../../wireframe/Wireframes";
import AccountsPage from "./AccountsPage";

export default {
  title: "Pages/Accounts page",
  component: AccountsPage,
  argTypes: {},
} as ComponentMeta<typeof AccountsPage>;

const Template: ComponentStory<typeof AccountsPage> = (args) => {
  return <AccountsPage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  values: {
    showLarge: true,
    title: "Summa",
    values: [
      {
        id: uuidv4(),
        title: "Home Savings",
        text: "000000001234",
        value: 2215.13,
        fields: [
          { label: "Annual Percentage Yield", value: "0.20%" },
          { label: "Annual interest", value: "4 676 kr" },
          { label: "Interest YTD", value: "181 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Car Savings",
        text: "000000005678",
        value: 8676.88,
        fields: [
          { label: "Annual Percentage Yield", value: "0.10%" },
          { label: "Annual interest", value: "2 276 kr" },
          { label: "Interest YTD", value: "1 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Vacations",
        text: "000000001234",
        value: 987.48,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
    ],
  },
};

export const FifteenAccounts = Template.bind({});
FifteenAccounts.args = {
  values: {
    showLarge: true,
    title: "Summa",
    values: [
      {
        id: uuidv4(),
        title: "Home Savings 1",
        text: "000000001234",
        value: 2215.13,
        fields: [
          { label: "Annual Percentage Yield", value: "0.20%" },
          { label: "Annual interest", value: "4 676 kr" },
          { label: "Interest YTD", value: "181 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Car Savings 1",
        text: "000000005678",
        value: 8676.88,
        fields: [
          { label: "Annual Percentage Yield", value: "0.10%" },
          { label: "Annual interest", value: "2 276 kr" },
          { label: "Interest YTD", value: "1 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Vacations 1",
        text: "000000001234",
        value: 987.48,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Home Savings 2",
        text: "000000001234",
        value: 1215.13,
        fields: [
          { label: "Annual Percentage Yield", value: "0.10%" },
          { label: "Annual interest", value: "2 276 kr" },
          { label: "Interest YTD", value: "1 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Car Savings 2",
        text: "000000005678",
        value: 7676.88,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Vacations 2",
        text: "000000001234",
        value: 487.48,
        fields: [
          { label: "Annual Percentage Yield", value: "0.20%" },
          { label: "Annual interest", value: "4 676 kr" },
          { label: "Interest YTD", value: "181 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Home Savings 3",
        text: "000000001234",
        value: 4215.13,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Car Savings 3",
        text: "000000005678",
        value: 12676.88,
        fields: [
          { label: "Annual Percentage Yield", value: "0.30%" },
          { label: "Annual interest", value: "1 176 kr" },
          { label: "Interest YTD", value: "96 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Vacations 3",
        text: "000000001234",
        value: 1987.48,
        fields: [
          { label: "Annual Percentage Yield", value: "0.20%" },
          { label: "Annual interest", value: "4 676 kr" },
          { label: "Interest YTD", value: "181 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Home Savings 4",
        text: "000000001234",
        value: 215.13,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Car Savings 4",
        text: "000000005678",
        value: 676.88,
        fields: [
          { label: "Annual Percentage Yield", value: "0.20%" },
          { label: "Annual interest", value: "4 676 kr" },
          { label: "Interest YTD", value: "181 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Vacations 4",
        text: "000000001234",
        value: 87.48,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Home Savings 5",
        text: "000000001234",
        value: 15.13,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Car Savings 5",
        text: "000000005678",
        value: 76.88,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Vacations 5",
        text: "000000001234",
        value: 7.48,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
    ],
  },
};

export const OpenAccountsPage = Template.bind({});
OpenAccountsPage.args = {
  openAccountPage: () => null,
  values: {
    showLarge: true,
    title: "Summa",
    values: [
      {
        id: uuidv4(),
        title: "Home Savings",
        text: "000000001234",
        value: 2215.13,
        fields: [
          { label: "Annual Percentage Yield", value: "0.20%" },
          { label: "Annual interest", value: "4 676 kr" },
          { label: "Interest YTD", value: "181 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Car Savings",
        text: "000000005678",
        value: 8676.88,
        fields: [
          { label: "Annual Percentage Yield", value: "0.10%" },
          { label: "Annual interest", value: "2 276 kr" },
          { label: "Interest YTD", value: "1 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Vacations",
        text: "000000001234",
        value: 987.48,
        fields: [
          { label: "Annual Percentage Yield", value: "0.50%" },
          { label: "Annual interest", value: "1 676 kr" },
          { label: "Interest YTD", value: "81 kr" },
          { label: "Account Owner", value: "John Doe" },
        ],
      },
    ],
  },
};

export const Wireframe: ComponentStory<typeof AccountsPage> = () => {
  return <Wireframes type="account-page" />;
};
