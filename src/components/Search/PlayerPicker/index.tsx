import styled from "styled-components";

const PlayerPicker: React.FC = () => {
  return (
    <Container>
      <Field placeholder="Nom du joueur" />
      <Icon className="ri-search-line" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  background: #1a282b;
  border: 2px solid #212f32;
  border-radius: 10px;
  padding: 10px 12px;
  align-items: center;
  position: relative;
`;

const Icon = styled.i`
  font-size: 20px;
  vertical-align: middle;
`;

const Field = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  padding: 0 10px;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  padding-left: 40px;
`;

export default PlayerPicker;
