import styled from "styled-components";
import Icon from "../icon/Icon";

interface Props {
  toggleChecked?: (value: boolean) => void;
  checked: boolean;
  label?: string;
}

const Checkbox = ({ toggleChecked, checked, label }: Props) => (
  <Wrapper>
    <DummyInputVisual>
      <Sizer checked={checked}>
        <Icon type="check" size="100%" />
      </Sizer>
    </DummyInputVisual>
    <Input
      type="checkbox"
      onChange={() => toggleChecked && toggleChecked(!checked)}
      checked={checked}
    />
    <Span>{label}</Span>
  </Wrapper>
);

const Wrapper = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
`;
const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
`;
const DummyInputVisual = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 3px;
  border: ${(p) => `1px solid ${p.theme.colors.fadedGrey}`};
  transition: background-color 150ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Sizer = styled.div<{ checked: boolean }>`
  display: flex;
  transform: scale(0);
  transition: transform 250ms ease-out;
  svg {
    stroke-width: 4px;
  }
  ${(p) =>
    p.checked &&
    `
    transform: scale(0.8);
  `}
`;
const Span = styled.span`
  font-weight: 300;
  margin-left: 10px;
  font-size: 16px;
  line-height: 28px;
`;

export default Checkbox;
