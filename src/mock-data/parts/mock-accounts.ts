import { uuidv4 } from "../../stories/utils";

export const MOCK_ACCOUNTS = [
  {
    id: uuidv4(),
    title: "Salary account",
    text: "000000001234",
    value: 49127,
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
        title: "Alphadev Payroll",
        date: "2021-05-25",
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
        value: 160,
      },
      {
        id: uuidv4(),
        title: "Vacuum cleaner",
        date: new Date(Date.now() - 504800000),
        value: 10000,
      },
      {
        id: uuidv4(),
        title: "El5tricity",
        date: new Date(Date.now() - 504800000),
        value: -105,
      },
      {
        id: uuidv4(),
        title: "Papa Johns",
        date: new Date(Date.now() - 504800000),
        value: -350,
      },
      {
        id: uuidv4(),
        title: "Laserdome",
        date: new Date(Date.now() - 504800000),
        value: -700,
      },
      {
        id: uuidv4(),
        title: "Gocart",
        date: new Date(Date.now() - 404800000),
        value: -300,
      },
      {
        id: uuidv4(),
        title: "Popeyes",
        date: new Date(Date.now() - 304800000),
        value: -105,
      },
      {
        id: uuidv4(),
        title: "Don Corleone",
        date: new Date(Date.now() - 204800000),
        value: -95,
      },
      {
        id: uuidv4(),
        title: "Michelangelo",
        date: new Date(Date.now() - 104800000),
        value: -915,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Car savings",
    text: "000000005678",
    value: 8676.88,
    transactions: [
      { id: uuidv4(), title: "Setup account", date: "2021-06-10", value: 0 },
      {
        id: uuidv4(),
        title: "Don Corleone",
        date: new Date(Date.now() - 204800000),
        value: 595,
      },
      {
        id: uuidv4(),
        title: "Michelangelo",
        date: new Date(Date.now() - 104800000),
        value: 915,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Vacations",
    text: "000000001234",
    value: 987.48,
    transactions: [{ title: "Setup account", date: "2021-06-10", value: 0 }],
  },
  {
    id: uuidv4(),
    title: "Home savings",
    text: "000000001234",
    value: 0,
    transactions: [{ title: "Setup account", date: "2021-06-10", value: 0 }],
  },
  {
    id: uuidv4(),
    title: "Moonshot",
    text: "0234000001234",
    value: 0,
    transactions: [{ title: "Setup account", date: "2021-06-10", value: 0 }],
  },
];
