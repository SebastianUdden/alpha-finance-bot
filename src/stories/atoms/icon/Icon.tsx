import styled from "styled-components";
import { featherSvgs, featherSvgTypes } from "./featherSvgs";

interface Props {
  type: featherSvgTypes;
  size?: string;
}

const Icon = ({ type, size = "18px" }: Props) => (
  <Wrapper size={size}>{featherSvgs[type]}</Wrapper>
);
const Wrapper = styled.span<{ size: string }>`
  display: inline-block;
  svg {
    height: ${(p) => p.size};
    width: ${(p) => p.size};
  }
`;

export default Icon;
