import styled from "styled-components";
import loginPage from "./wireframes/login-page-wireframe.png";
import overviewPage from "./wireframes/overview-page-wireframe.png";
import accountsPage from "./wireframes/accounts-page-wireframe.png";
import accountPage from "./wireframes/account-page-wireframe.png";
import accountPageIpad from "./wireframes/accounts-page-wireframe-ipad.png";
import overviewPageIpad from "./wireframes/overview-page-wireframe-ipad.png";
import overviewPageIpad2 from "./wireframes/overview-page-wireframe-ipad-2.png";

export const wireframeTypes: any = {
  "login-page": loginPage,
  "overview-page": overviewPage,
  "accounts-page": accountsPage,
  "account-page": accountPage,
  "overview-page-ipad": overviewPageIpad,
  "overview-page-ipad-2": overviewPageIpad2,
  "account-page-ipad": accountPageIpad,
};

interface Props {
  type: string;
}

const Wireframes = ({ type }: Props) => {
  return (
    <Wrapper>
      <Title>{type}</Title>
      <Image src={wireframeTypes[type]} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.h1`
  margin: 50px 0px 20px;
  text-transform: uppercase;
`;
const Image = styled.img`
  max-height: 70vh;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default Wireframes;
