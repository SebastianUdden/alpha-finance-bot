import styled from "styled-components";

interface Props {
  title: string;
  buttonText: string;
  onClick: any;
}

const Banner = ({ title, onClick, buttonText }: Props) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Button onClick={onClick}>{buttonText}</Button>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: ${(p) => `2px solid ${p.theme.colors.background}`};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${(p) => p.theme.colors.elevatedBackground};
`;
const Title = styled.div``;
const Button = styled.button`
  text-transform: uppercase;
  border: none;
  background-color: inherit;
  color: inherit;
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

export default Banner;
