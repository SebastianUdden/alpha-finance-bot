import styled from "styled-components";

type DotProps = {
  value: number;
};

interface Props {
  dots: DotProps[];
}

const getX = (length: number, index: number) =>
  Math.floor((100 / (length - 1)) * index);

const getY = (value: number, max: number) =>
  Math.floor(100 - (value / max) * 100);

const LineChart = ({ dots }: Props) => {
  const highest = 100;
  let points = dots
    .map((dot, i) => `${getX(dots.length, i)},${getY(dot.value, highest)}`)
    .join(" ");

  return (
    <SVG viewBox="0 0 100 100">
      <polyline fill="none" stroke="#0074d9" stroke-width="1" points={points} />
    </SVG>
  );
};

const SVG = styled.svg`
  max-width: 30vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default LineChart;
