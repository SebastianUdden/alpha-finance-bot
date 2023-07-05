import { ComponentStory, ComponentMeta } from "@storybook/react";
import Path from "./PathChart";

export default {
  title: "Molecules/Path chart",
  component: Path,
  argTypes: {},
} as ComponentMeta<typeof Path>;

const Template: ComponentStory<typeof Path> = (args) => {
  return <Path {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  dots: [
    { value: 110 },
    { value: 187 },
    { value: 145 },
    { value: 125 },
    { value: 190 },
    { value: 163 },
    { value: 500 },
    { value: 170 },
    { value: 127 },
    { value: 115 },
    { value: 124 },
    { value: 183 },
  ],
};

export const DynamicMinValue = Template.bind({});
DynamicMinValue.args = {
  isDynamicMinValue: true,
  dots: [
    { value: 110 },
    { value: 187 },
    { value: 145 },
    { value: 125 },
    { value: 190 },
    { value: 163 },
    { value: 500 },
    { value: 170 },
    { value: 127 },
    { value: 115 },
    { value: 124 },
    { value: 700 },
  ],
};
