import styled from "styled-components";
import Transaction, {
  TransactionProps,
} from "../../molecules/transaction/Transaction";

export interface TransactionsProps {
  showLarge?: boolean;
  title?: string;
  values: TransactionProps[];
}

interface Props extends TransactionsProps {
  selected?: TransactionProps;
  onShowPage?: (title?: string) => void;
  onSelect?: (value: TransactionProps) => void;
}

const Transactions = ({
  showLarge = true,
  title,
  values,
  selected,
  onSelect,
  onShowPage,
}: Props) => {
  const showValues = showLarge ? values : values.slice(0, 5);
  return (
    <Wrapper>
      {showValues &&
        showValues.map((value, i) => (
          <Transaction
            {...value}
            isSelected={selected?.id === value.id}
            onSelect={onSelect}
          />
        ))}
      {!showLarge && onShowPage && (
        <SeeAll onClick={() => onShowPage(title)}>See all</SeeAll>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.elevatedBackground};
`;
const SeeAll = styled.button`
  text-transform: uppercase;
  border: none;
  width: 100%;
  background-color: inherit;
  color: inherit;
  padding: 20px;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :active {
    opacity: 0.4;
  }
`;

export default Transactions;
