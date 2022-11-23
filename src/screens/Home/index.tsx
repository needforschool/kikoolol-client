import Header from "@components/Header";
import MainContainer from "@components/Layout/MainContainer";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Container>{"Home Screen"}</Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default Home;
