import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      placeholder="Enter value here"
    />
  );
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Value = Template.bind({});
Value.args = {
  value: "Entered value",
};

export const Placeholder = Template.bind({});
Value.args = {
  placeholder: "A placeholder",
};
