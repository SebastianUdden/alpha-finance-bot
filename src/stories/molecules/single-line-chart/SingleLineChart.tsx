import styled from "styled-components";

interface Props {
  showBackground?: boolean;
  title?: string;
  ratios: any[];
  sumText: any;
  colors: string[];
}

const SingleLineChart = ({
  showBackground,
  colors,
  title,
  ratios,
  sumText,
}: Props) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    <Sum>{sumText}</Sum>
    <Lines showBackground={showBackground}>
      {ratios.map((ratio, i) => (
        <Line ratio={ratio} color={colors[i]} />
      ))}
    </Lines>
  </Wrapper>
);

const Wrapper = styled.div``;
const Title = styled.div``;
const Sum = styled.div`
  margin: 10px 0;
  font-size: 38px;
`;
const Lines = styled.div<{ showBackground?: boolean }>`
  display: flex;
  height: 1.5px;

  ${(p) =>
    p.showBackground &&
    `
    background-color: ${p.theme.colors.interactiveDarkGrey};
  `}
`;
const Line = styled.div<{ color: string; ratio: number }>`
  height: 100%;
  margin-right: 3px;
  width: ${(p) => p.ratio * 100}%;
  background-color: ${(p) => p.color};
`;

export default SingleLineChart;
