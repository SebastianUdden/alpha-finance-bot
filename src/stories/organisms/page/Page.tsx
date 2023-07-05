import styled from "styled-components";

interface Props {
  children: any;
}

const Page = ({ children }: Props) => {
  return (
    <Wrapper>
      <Children>{children}</Children>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 20vw;
    margin: 0 auto 0;
  }
`;
const Children = styled.div``;

export default Page;
