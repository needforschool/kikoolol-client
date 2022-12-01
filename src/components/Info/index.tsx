import styled from "styled-components";

const Info: React.FC = () => {
  return (
    <Container>
      <Text>
        <Title>
          Tracker, analyser & enregistrer les stats League of Legends
        </Title>
        <Description>
          Base de données permettant le tracking des joueurs League of Legends à
          travers le monde entier.
        </Description>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 2px solid #212f32;
  border-radius: 10px;
  width: 100%;
  padding: 50px 40px;
  position: relative;
  background: #1a282b url("/static/images/info.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: auto 100%;
`;

const Text = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
`;

export default Info;
