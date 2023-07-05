import styled from "styled-components";

interface Props {
  breakpoint?: string;
  children: React.ReactNode;
}

const Mobile = ({ breakpoint, children }: Props) => {
  return <Wrapper breakpoint={breakpoint}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ breakpoint?: string }>`
  display: block;

  ${(p) =>
    p.breakpoint
      ? `
      @media (min-width: ${p.breakpoint}) {
        display: none;
      }    
      `
      : `
      @media (min-width: 1000px) {
        display: none;
      }
  `}
`;

export default Mobile;
