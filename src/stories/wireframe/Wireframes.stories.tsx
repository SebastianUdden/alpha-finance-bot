import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import Wireframes, { wireframeTypes } from "./Wireframes";

export default {
  title: "Wireframes",
  component: Wireframes,
} as ComponentMeta<typeof Wireframes>;

const Template: ComponentStory<typeof Wireframes> = () => {
  const types = Object.keys(wireframeTypes);
  return (
    <Flex>
      {types.map((wireframeType: any) => (
        <Wireframes type={wireframeType} />
      ))}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Default = Template.bind({});
Default.args = {};
