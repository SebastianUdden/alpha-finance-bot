import styled from "styled-components";

interface Props {
  breakpoint?: string;
  children: React.ReactNode;
}

const Desktop = ({ breakpoint, children }: Props) => {
  return <Wrapper breakpoint={breakpoint}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ breakpoint?: string }>`
  width: 100%;
  display: none;
  ${(p) =>
    p.breakpoint
      ? `
      @media (min-width: ${p.breakpoint}) {
        display: block;
      }    
      `
      : `
      @media (min-width: 1000px) {
        display: block;
      }
  `}
`;
export default Desktop;
