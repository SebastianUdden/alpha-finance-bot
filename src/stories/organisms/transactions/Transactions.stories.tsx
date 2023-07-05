import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import Transactions from "./Transactions";

export default {
  title: "Organisms/Transactions",
  component: Transactions,
  argTypes: {},
} as ComponentMeta<typeof Transactions>;

const Template: ComponentStory<typeof Transactions> = (args) => {
  return <Transactions {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Transactions",
  values: [
    {
      title: "Poke bowl",
      date: "2022-06-12",
      value: -143.5,
    },
    {
      title: "Alphadev Payroll",
      date: "2021-06-15",
      value: 42000,
    },
    {
      title: "Hamburger",
      date: "2022-06-13",
      value: -160,
    },
  ],
};

export const Wireframe: ComponentStory<typeof Transactions> = (args) => {
  return <Wireframes type="Transactions" />;
};
