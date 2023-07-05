import styled from "styled-components";
import SingleLineChart from "../../molecules/single-line-chart/SingleLineChart";
import PieChart from "../../molecules/pie-chart/PieChart";
import Value, { ValueProps } from "../../molecules/value/Value";
import { formatCurrency } from "../../utils";
import Banner from "../../molecules/banner/Banner";

export interface ValuesProps {
  showLarge?: boolean;
  title?: string;
  values: ValueProps[];
}

interface Props extends ValuesProps {
  colors: string[];
  selected?: ValueProps;
  onShowPage?: (title?: string) => void;
  onSelect?: (value: ValueProps) => void;
}

const Values = ({
  colors,
  showLarge,
  title,
  values,
  selected,
  onSelect,
  onShowPage,
}: Props) => {
  const sum = values.reduce((a, b) => a + b.value, 0);
  const ratios = values.map((account) => account.value / sum);
  const chart = {
    colors,
    ratios,
    sumText: formatCurrency(sum),
    title,
  };
  const showValues = showLarge ? values : values.slice(0, 5);
  return values.length > 0 ? (
    <Wrapper>
      <Header>
        {showLarge ? <PieChart {...chart} /> : <SingleLineChart {...chart} />}
      </Header>
      {showValues &&
        showValues.map((value, i) => (
          <Value
            {...value}
            color={colors[i]}
            isSelected={selected?.id === value.id}
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

export default Values;
