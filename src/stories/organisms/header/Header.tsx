import styled from "styled-components";
import Desktop from "../../atoms/desktop/Desktop";
import { featherSvgTypes } from "../../atoms/icon/featherSvgs";
import Icon from "../../atoms/icon/Icon";
import Logo from "../../atoms/logo/Logo";
import MiniLogo from "../../atoms/mini-logo/MiniLogo";

export const HEADER_WIDTH = "200px";

export type TabText =
  | "Overview"
  | "Accounts"
  | "Bills"
  | "Budgets"
  | "Account"
  | "Settings"
  | "Stocks"
  | "Login";

export type Tab = {
  type: featherSvgTypes;
  text: TabText;
};

interface Props {
  tabs: Tab[];
  selectedTabIndex: number;
  onChange: (tab: Tab) => void;
}

const Header = ({ tabs, selectedTabIndex, onChange }: Props) => {
  const handleSelect = (index: number) => {
    window.scrollTo(0, 0);
    onChange(tabs[index]);
    localStorage.setItem("selectedTabIndex", index.toString());
  };
  return (
    <Wrapper>
      <Desktop>
        <Logo size="80px" />
      </Desktop>
      <Tabs>
        {tabs.map((tab, index) => (
          <IconButton
            selected={selectedTabIndex === index}
            onClick={() => handleSelect(index)}
          >
            {tab.type !== "home" ? (
              <Icon type={tab.type} size="20px" />
            ) : (
              <MiniLogo />
            )}
            {selectedTabIndex === index && <Title>{tab.text}</Title>}
          </IconButton>
        ))}
      </Tabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 100;
  background-color: ${(p) => p.theme.colors.interactiveDarkGrey};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 5px 15px;
  @media (min-width: 1000px) {
    padding: 40px 5px 5px;
    bottom: 0;
    max-width: ${HEADER_WIDTH};
    width: 100%;
  }
`;
const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1000px) {
    margin-top: 50px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const Title = styled.h1`
  font-size: 11px;
  letter-spacing: 2.2px;
  margin: 0 0 0 10px;
  text-transform: uppercase;
  @media (min-width: 500px) {
    font-size: 16px;
  }
`;
const IconButton = styled.button<{ selected?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: inherit;
  color: ${(p) => p.theme.colors.fadedGrey};
  border: none;
  cursor: pointer;
  transition: color 150ms ease, opacity 150ms ease;
  opacity: 0.5;
  :hover {
    opacity: 1;
    color: ${(p) => p.theme.colors.white};
  }
  :active {
    opacity: 0.4;
  }
  ${(p) =>
    p.selected &&
    `
    opacity: 1;
    color: ${p.theme.colors.white};
  `}

  padding: 5px;
  @media (min-width: 500px) {
    padding: 10px;
    :first-of-type {
      margin-right: 10vw;
    }
  }
  @media (min-width: 1000px) {
    :first-of-type {
      margin-right: 0;
      margin-bottom: 3vh;
    }
    h1 {
      margin-top: 20px;
    }
    flex-direction: column;
    height: 90px;
    width: 150px;
    justify-content: center;
    margin-bottom: 20px;
    ${(p) =>
      p.selected &&
      `
      margin-top: 20px;
      margin-bottom: -20px;
      + * {
        margin-top: 20px;
      }
  `}
  }
`;
export default Header;
