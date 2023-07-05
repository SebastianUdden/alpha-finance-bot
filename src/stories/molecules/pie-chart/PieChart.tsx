import styled from "styled-components";
import Icon from "../../atoms/icon/Icon";
import { getConicGradient } from "../../utils";

interface Props {
  title?: string;
  ratios: any[];
  sumText: any;
  colors: string[];
}

const PieChart = ({ colors, title, ratios, sumText }: Props) => (
  <Wrapper conicGradient={getConicGradient(colors, ratios)}>
    <InnerCircle>
      <SmallTitle>{title}</SmallTitle>
      <Sum>{sumText}</Sum>
      <IconWrapper>
        <Icon type="info" />
      </IconWrapper>
    </InnerCircle>
  </Wrapper>
);

const Wrapper = styled.div<{ conicGradient: string }>`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #555;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: ${(p) => p.conicGradient};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InnerCircle = styled.div`
  width: 96%;
  height: 96%;
  background-color: ${(p) => p.theme.colors.elevatedBackground};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Sum = styled.h2`
  margin: 10px 0;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
const SmallTitle = styled.p`
  margin: -40px 0 24px;
  font-size: 14px;
  opacity: 0.9;
`;
const IconWrapper = styled.div`
  margin: 30px 0 -45px;
  opacity: 0.7;
`;

export default PieChart;
