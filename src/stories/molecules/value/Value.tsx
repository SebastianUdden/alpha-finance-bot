import styled from "styled-components";
import Icon from "../../atoms/icon/Icon";
import { formatCurrency } from "../../utils";
import { FieldProps } from "../selected-value/SelectedValue";
import { TransactionProps } from "../transaction/Transaction";

export interface ValueProps {
  id: string;
  title?: string;
  text: string;
  date?: Date | string;
  value: number;
  isSelected?: boolean;
  fields?: FieldProps[];
  transactions?: TransactionProps[];
}
interface Props extends ValueProps {
  color: string;
  onSelect?: (value: ValueProps) => void;
}

const Value = ({
  id,
  title,
  text,
  date,
  value,
  isSelected,
  color,
  fields,
  transactions,
  onSelect,
}: Props) => {
  const isAccountNumber = !isNaN(Number(text));
  const dotCount = text ? Array.from(Array(text.length - 4).keys()) : 0;
  return (
    <Wrapper
      isSelected={isSelected}
      onClick={() =>
        onSelect &&
        onSelect({ id, title, text, date, value, fields, transactions })
      }
    >
      <Flex color={color}>
        <Title>{title}</Title>
        <Text>
          {isAccountNumber ? (
            <>
              <Dots>{dotCount && dotCount.map(() => <Dot />)}</Dots>
              {text.slice(text.length - 4)}
            </>
          ) : (
            text
          )}
        </Text>
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
const Flex = styled.div<{ color: string }>`
  max-width: 80%;
  border-left: ${(p) => `5px solid ${p.color}`};
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

export default Value;
