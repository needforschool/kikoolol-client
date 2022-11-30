import styled from "styled-components";
import PlayerPicker from "./PlayerPicker";
import RegionPicker from "./RegionPicker";

interface Props {
  region: string;
  setSearchRegion: (region: string) => void;
  suggestions: string[];
}

const Search: React.FC<Props> = ({
  region,
  setSearchRegion,
  suggestions,
}: Props) => {
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
