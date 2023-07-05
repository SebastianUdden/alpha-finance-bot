import styled from "styled-components";

interface Props {
  size?: string;
}

const Logo = ({ size }: Props) => {
  return (
    <Wrapper size={size}>
      <Grid>
        <UpperLeft />
        <LowerLeft />
        <UpperRight />
        <LowerRight />
      </Grid>
      <Circle />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size?: string }>`
  width: ${(p) => p.size || "200px"};
  height: ${(p) => p.size || "200px"};
  border-radius: 50% 25px 50% 50%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`;
const Circle = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;
const Grid = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50% 25px 50% 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  grid-column: 1 / 2;
`;
const UpperLeft = styled.div`
  background-color: ${(p) => p.theme.colors.secondaryDarkGreen};
`;
const LowerLeft = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
`;
const UpperRight = styled.div`
  background-color: ${(p) => p.theme.colors.quartenaryDarkGreen};
`;
const LowerRight = styled.div`
  background-color: ${(p) => p.theme.colors.tertiaryBrightGreen};
`;

export default Logo;
