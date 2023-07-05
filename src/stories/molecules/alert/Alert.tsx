import styled from "styled-components";
import Icon from "../../atoms/icon/Icon";

const formatEmphasize = (text: string) => {
  const split = text.split("*");
  if (split.length !== 3) return text;
  return (
    <>
      {split[0]}
      <Em>{split[1]}</Em>
      {split[2]}
    </>
  );
};
const formatBold = (text: string) => {
  const split = text.split("**");
  if (split.length !== 3) return formatEmphasize(text);
  return (
    <>
      {formatEmphasize(split[0])}
      <Strong>{split[1]}</Strong>
      {formatEmphasize(split[2])}
    </>
  );
};

const formatText = (text: string) => {
  return formatBold(text);
};

export interface AlertProps {
  text: string;
}

const Alert = ({ text }: AlertProps) => {
  const formattedText = formatText(text);
  return (
    <Wrapper>
      <Text>{formattedText}</Text>
      <IconWrapper>
        <Icon type="alignLeft" size="28px" />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.elevatedBackground};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 1px;
`;
const IconWrapper = styled.div`
  margin-top: -5px;
  color: ${(p) => p.theme.colors.fadedGrey};
`;
const Text = styled.p`
  margin: 0;
  max-width: 80%;
`;
const Strong = styled.strong`
  color: ${(p) => p.theme.colors.secondaryOrange};
`;
const Em = styled.strong`
  color: ${(p) => p.theme.colors.quartenaryBrightestBlue};
`;

export default Alert;
