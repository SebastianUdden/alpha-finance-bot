import { ComponentStory, ComponentMeta } from "@storybook/react";
import { uuidv4 } from "../../utils";
import Wireframes from "../../wireframe/Wireframes";
import BillsPage from "./BillsPage";

export default {
  title: "Pages/Bills page",
  component: BillsPage,
  argTypes: {},
} as ComponentMeta<typeof BillsPage>;

const Template: ComponentStory<typeof BillsPage> = (args) => {
  return <BillsPage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  bills: {
    title: "Bills",
    showLarge: true,
    values: [
      {
        id: uuidv4(),
        title: "Rent",
        date: "Due Jan 28",
        value: 1235,
        fields: [
          { label: "Company", value: "Spotify" },
          { label: "Recurring", value: "Monthly" },
          { label: "Liable", value: "John Doe" },
        ],
      },
      {
        id: uuidv4(),
        title: "Car insurance",
        date: "Due Feb 17",
        value: 600,
      },
      {
        id: uuidv4(),
        title: "Vacation insurance",
        date: "Due Mar 14",
        value: 870,
      },
      {
        id: uuidv4(),
        title: "Rent 2",
        date: "Due Jan 28",
        value: 235,
      },
      {
        id: uuidv4(),
        title: "Car insurance 2",
        date: "Due Feb 17",
        value: 120,
      },
      {
        id: uuidv4(),
        title: "Vacation insurance 2",
        date: "Due Mar 14",
        value: 370,
      },
      {
        id: uuidv4(),
        title: "Vacation insurance 3",
        date: "Due Mar 14",
        value: 2870,
      },

      {
        id: uuidv4(),
        title: "Mastery tax",
        date: "Due Apr 1",
        value: 99870,
      },
    ],
  },
};

export const Wireframe: ComponentStory<typeof BillsPage> = (args) => {
  return <Wireframes type="Bills-page" />;
};
