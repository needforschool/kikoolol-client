import styled from "styled-components";
import PlayerPicker from "./PlayerPicker";
import RegionPicker from "./RegionPicker";

const Search: React.FC = () => {
  return (
    <Container>
      <RegionPicker />
      <PlayerPicker />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export default Search;
