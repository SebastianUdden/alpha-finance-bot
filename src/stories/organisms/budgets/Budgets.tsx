import styled from "styled-components";
import Budget, { BudgetProps } from "../../molecules/budget/Budget";
import SingleLineChart from "../../molecules/single-line-chart/SingleLineChart";
import PieChart from "../../molecules/pie-chart/PieChart";
import { formatCurrency } from "../../utils";
import Banner from "../../molecules/banner/Banner";

export interface BudgetsProps {
  showLarge?: boolean;
  title?: string;
  budgets: BudgetProps[];
}
interface Props extends BudgetsProps {
  colors: string[];
  selected?: BudgetProps;
  onShowPage?: (title?: string) => void;
  onSelect?: (value?: BudgetProps) => void;
}

const Budgets = ({
  colors,
  showLarge,
  title,
  selected,
  budgets,
  onSelect,
  onShowPage,
}: Props) => {
  const sum = budgets.reduce((a, b) => a + b.value, 0);
  const budgetSum = budgets.reduce((a, b) => a + b.budget, 0);
  const ratios = budgets.map((value) => value.value / budgetSum);
  const pieText = (
    <>
      <span>
        {formatCurrency(budgetSum - sum)} <Mini>Left</Mini>
      </span>
      <Grey>
        <Desktop>/ </Desktop>
        {formatCurrency(budgetSum)} <Mini>Total</Mini>
      </Grey>
    </>
  );
  const lineText = (
    <>
      <span>
        {formatCurrency(budgetSum - sum)} <Mini>Left</Mini>
      </span>
      <Grey>
        / {formatCurrency(budgetSum)} <Mini>Total</Mini>
      </Grey>
    </>
  );
  return budgets.length > 0 ? (
    <Wrapper>
      <Header>
        {showLarge ? (
          <PieChart
            colors={colors}
            ratios={ratios}
            sumText={pieText}
            title={title}
          />
        ) : (
          <SingleLineChart
            showBackground
            colors={colors}
            ratios={ratios}
            sumText={lineText}
            title={title}
          />
        )}
      </Header>
      {budgets &&
        budgets.map((value, i) => (
          <Budget
            {...value}
            isSelected={selected?.id === value.id}
            color={colors[i]}
            onSelect={onSelect}
          />
        ))}
      {!showLarge && onShowPage && (
        <SeeAll onClick={() => onShowPage(title)}>See all</SeeAll>
      )}
    </Wrapper>
  ) : (
    <Banner
      title={`No ${title?.toLowerCase()} found`}
      buttonText="Add"
      onClick={() => alert("CLick")}
    />
  );
};

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.elevatedBackground};
`;
const Header = styled.div`
  padding: 20px;
`;
const Grey = styled.span`
  opacity: 0.2;
`;
const Mini = styled.span`
  font-size: 12px;
  margin-right: 10px;
`;
const Desktop = styled.span`
  display: none;
  @media (min-width: 1000px) {
    display: inline;
  }
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

export default Budgets;
