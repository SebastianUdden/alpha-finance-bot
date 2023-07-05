import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      {...args}
      toggleChecked={(value) => setChecked(value)}
      checked={checked}
    />
  );
};

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "Checked",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  label: "Unchecked",
};
