import MainContainer from "@components/Layout/MainContainer";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Container>
      <MainContainer>footer</MainContainer>
    </Container>
  );
};

const Container = styled.footer`
  margin-top: 50px;
  background: #040c0e;
  padding: 30px;
`;

export default Footer;
