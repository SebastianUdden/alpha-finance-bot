import styled from "styled-components";

type BarProps = {
  value: number;
};

interface Props {
  bars: BarProps[];
}

const BarChart = ({ bars }: Props) => {
  const highest = 100;
  return (
    <Wrapper>
      {bars.map((bar) => {
        const percentage = (bar.value / highest) * 100;
        return <Bar value={percentage} columns={bars.length} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50vh;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  align-items: flex-end;
`;

const Bar = styled.div<{ value: number; columns: number }>`
  width: calc(100% / 4);
  height: ${(p) => p.value}%;
  background-color: magenta;
  margin: 1px;
`;

export default BarChart;
