import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import LoginPage from "./LoginPage";

export default {
  title: "Pages/Login page",
  component: LoginPage,
  argTypes: {},
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => {
  return <LoginPage />;
};

export const Default = Template.bind({});
Default.args = {};

export const Wireframe: ComponentStory<typeof LoginPage> = (args) => {
  return <Wireframes type="login-page" />;
};
