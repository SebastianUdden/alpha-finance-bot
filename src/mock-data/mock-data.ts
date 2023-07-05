import { uuidv4 } from "../stories/utils";
import { MOCK_ACCOUNTS } from "./parts/mock-accounts";
import { MOCK_BILLS } from "./parts/mock-bills";
import { MOCK_BUDGETS } from "./parts/mock-budgets";

export const MOCK_DATA = {
  accounts: { title: "Accounts", values: MOCK_ACCOUNTS },
  bills: { title: "Bills", values: MOCK_BILLS },
  budgets: { title: "Budgets", showLarge: false, budgets: MOCK_BUDGETS },
  stocks: [],
};

export const MOCK_DATA_INITIAL = {
  accounts: { title: "Accounts", values: [] },
  bills: { title: "Bills", values: [] },
  budgets: { title: "Budgets", showLarge: false, budgets: [] },
  stocks: [],
};

export const MOCK_DATA_ONE_ACCOUNT = {
  accounts: {
    title: "Accounts",
    values: [
      {
        id: uuidv4(),
        title: "Car Savings 1",
        text: "000000005678",
        value: 8676.88,
        transactions: [
          {
            id: uuidv4(),
            title: "Setup account",
            date: "2021-06-10",
            value: 0,
          },
          {
            id: uuidv4(),
            title: "Paycheck",
            date: new Date(Date.now() - 104800000),
            value: 11000,
          },
          {
            id: uuidv4(),
            title: "ICA",
            date: new Date(Date.now() - 204800000),
            value: -100,
          },
          {
            id: uuidv4(),
            title: "ICA 2",
            date: new Date(Date.now() - 304800000),
            value: -350,
          },
          {
            id: uuidv4(),
            title: "ICA 3",
            date: new Date(Date.now() - 404800000),
            value: -720,
          },
        ],
      },
    ],
  },
  bills: { title: "Bills", values: [] },
  budgets: { title: "Budgets", showLarge: false, budgets: [] },
  stocks: [],
};
