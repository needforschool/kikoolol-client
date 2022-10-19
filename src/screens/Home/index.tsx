import styled from "styled-components";

const Home: React.FC = () => {
  return <Container>{"Home Screen"}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default Home;
