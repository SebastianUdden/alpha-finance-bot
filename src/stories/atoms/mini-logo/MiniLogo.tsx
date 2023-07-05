import styled from "styled-components";

const MiniLogo = () => {
  return (
    <Wrapper>
      <Grid>
        <UpperLeft />
        <UpperRight />
        <LowerRight />
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  position: relative;
`;
const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3px;
  overflow: hidden;
  grid-column: 1 / 2;
`;
const UpperLeft = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  grid-row: 1 / span 2;
`;
const UpperRight = styled.div`
  background-color: ${(p) => p.theme.colors.white};
`;
const LowerRight = styled.div`
  background-color: ${(p) => p.theme.colors.white};
`;

export default MiniLogo;
