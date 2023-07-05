import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import Alert from "./Alert";

export default {
  title: "Molecules/Alert",
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
  return <Alert {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: "You've exceeded your budget by 500 kr!",
};

export const Wireframe: ComponentStory<typeof Alert> = (args) => {
  return <Wireframes type="alert" />;
};
