import styled from "styled-components";
import Desktop from "../../atoms/desktop/Desktop";
import Mobile from "../../atoms/mobile/Mobile";
import { formatCurrency } from "../../utils";
import { FieldProps } from "../selected-value/SelectedValue";

export interface BudgetProps {
  id: string;
  title?: string;
  budget: number;
  value: number;
  isSelected?: boolean;
  fields?: FieldProps[];
}
interface Props extends BudgetProps {
  color: string;
  onSelect?: (value: BudgetProps) => void;
}

const Budget = ({
  id,
  title,
  budget,
  value,
  color,
  fields,
  isSelected,
  onSelect,
}: Props) => {
  return (
    <Wrapper
      isSelected={isSelected}
      onClick={() => onSelect && onSelect({ id, title, budget, value, fields })}
    >
      <Flex>
        <Column>
          <Title>{title}</Title>
          <Text>
            {formatCurrency(value)} / {formatCurrency(budget)}
          </Text>
        </Column>
        <Desktop>
          <WrapperLine>
            <Line color={color} width={(value / budget) * 100} />
          </WrapperLine>
        </Desktop>
        <Right>
          {budget - value} kr
          <Grey>{budget - value < 0 ? "Exceeded" : "Left"}</Grey>
        </Right>
      </Flex>
      <Mobile>
        <WrapperLine>
          <Line color={color} width={(value / budget) * 100} />
        </WrapperLine>
      </Mobile>
    </Wrapper>
  );
};

const Wrapper = styled.button<{ isSelected?: boolean }>`
  color: inherit;
  width: 100%;
  border: none;
  background-color: ${(p) => p.theme.colors.elevatedBackground};
  margin: 1px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :active {
    opacity: 0.4;
  }
  padding-bottom: 20px;
  ${(p) =>
    p.isSelected &&
    `
    background-color: ${p.theme.colors.background};
  `}
  @media (min-width: 1000px) {
    padding-bottom: 0;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const Line = styled.div<{
  color: string;
  width: number;
}>`
  background-color: ${(p) => p.color};
  height: 100%;
  width: ${(p) => p.width}%;
  max-width: 100%;
`;
const WrapperLine = styled.div`
  box-sizing: border-box;
  height: 4px;
  background-color: ${(p) => p.theme.colors.interactiveDarkGrey};
  width: calc(100% - 40px);
  @media (min-width: 1000px) {
    width: calc(100% - 60px);
  }
  margin: 0 auto;
`;
const Title = styled.p`
  font-size: 16px;
  text-align: left;
  margin: 0;
  letter-spacing: 2px;
`;
const Text = styled.p`
  margin: 10px 0 0;
  letter-spacing: 2px;
  white-space: nowrap;
  opacity: 0.3;
`;
const Right = styled.p`
  font-size: 14px;
  letter-spacing: 2px;
  white-space: nowrap;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Grey = styled.span`
  opacity: 0.2;
  margin: 5px 5px 5px 10px;
  font-size: 11px;
`;

export default Budget;
