import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import SelectedValue from "./SelectedValue";

export default {
  title: "Molecules/Selected value",
  component: SelectedValue,
  argTypes: {},
} as ComponentMeta<typeof SelectedValue>;

const Template: ComponentStory<typeof SelectedValue> = (args) => {
  return <SelectedValue {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Home Savings 1",
  value: 3940,
  fields: [
    { label: "Annual Percentage Yield", value: "0.10%" },
    { label: "Annual interest", value: "1 676 kr" },
    { label: "Interest YTD", value: "81 kr" },
    { label: "Account Owner", value: "John Doe" },
  ],
};

export const Wireframe: ComponentStory<typeof SelectedValue> = (args) => {
  return <Wireframes type="value" />;
};
