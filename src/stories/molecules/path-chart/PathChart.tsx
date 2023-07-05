import styled from "styled-components";

type DotProps = {
  value: number;
};

interface Props {
  dots: DotProps[];
  isDynamicMinValue?: boolean;
}

const getX = (length: number, index: number) =>
  Math.floor((100 / (length - 1)) * index);

const getY = (value: number, min: number, max: number) => {
  const base = 100;
  const minusMin = value - min;
  const maximum = max - min;
  const divided = minusMin / maximum;
  const multiplier = 100;
  const result = base - divided * multiplier;
  return Math.floor(result);
};

const PathChart = ({ dots, isDynamicMinValue }: Props) => {
  const highest = Math.max(...dots.map((v) => v.value)) + 20;
  const lowest = Math.min(...dots.map((v) => v.value)) - 20;
  let points = dots
    .map((dot, i) => {
      const x = getX(dots.length, i);
      const y = getY(dot.value, isDynamicMinValue ? lowest : 0, highest);
      return `S ${x - 5} ${y}, ${x} ${y}`;
    })
    .join(" ");
  return (
    <Wrapper>
      <Overlay />
      <SVG viewBox="0 0 100 100">
        <path d={`M 0 100 ${points} L 150 110 L 0 110`} stroke-width="1" />
      </SVG>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: ${(p) => p.theme.colors.interactiveDarkGrey};
  border-radius: 12px;
`;
const Overlay = styled.div`
  grid-row: 1;
  grid-column: 1;
  border: ${(p) => `5px solid ${p.theme.colors.interactiveDarkGrey}`};
  z-index: 9;
  border-radius: 12px;
`;
const SVG = styled.svg`
  padding: 10px 0 0;
  grid-row: 1;
  grid-column: 1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 12px;
  path {
    stroke: ${(p) => p.theme.colors.primary};
    fill: ${(p) => p.theme.colors.background};
  }
`;

export default PathChart;
