import styled from "styled-components";
import Icon from "../../atoms/icon/Icon";
import { dateString } from "../../time";
import { formatCurrency } from "../../utils";

export interface TransactionProps {
  id: string;
  title?: string;
  date: string | Date;
  value: number;
  fields?: any;
}

interface Props extends TransactionProps {
  isSelected?: boolean;
  onSelect?: (value: TransactionProps) => void;
}

const Transaction = ({
  id,
  title,
  date,
  value,
  isSelected,
  onSelect,
}: Props) => {
  const d = new Date(date);
  return (
    <Wrapper
      isSelected={isSelected}
      onClick={() => onSelect && onSelect({ id, title, date, value })}
    >
      <Flex>
        <Title>{title}</Title>
        <Text>{dateString(d)}</Text>
      </Flex>
      <Currency>{formatCurrency(value)}</Currency>
      <IconWrapper>
        <Icon type="chevronRight" size="28px" />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.button<{ isSelected?: boolean }>`
  color: inherit;
  width: 100%;
  border: none;
  background-color: ${(p) => p.theme.colors.elevatedBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 1px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :active {
    opacity: 0.4;
  }
  ${(p) =>
    p.isSelected &&
    `
    background-color: ${p.theme.colors.background};
  `}
`;
const IconWrapper = styled.div`
  margin-top: -5px;
  color: ${(p) => p.theme.colors.fadedGrey};
`;
const Flex = styled.div`
  max-width: 80%;
  padding-left: 14px;
  padding-top: 5px;
`;
const Title = styled.p`
  font-size: 16px;
  text-align: left;
  margin: 0;
  letter-spacing: 2px;
`;
const Text = styled.p`
  margin: 10px 0 0;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.fadedGrey};
  letter-spacing: 2px;
`;
const Dots = styled.div`
  display: flex;
`;
const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${(p) => p.theme.colors.fadedGrey};
  :last-of-type {
    margin-right: 3px;
  }
`;
const Currency = styled.span`
  margin: -7px 10px 0 auto;
  font-size: 18px;
`;

export default Transaction;
