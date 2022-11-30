import Button from "@components/Button";
import API_REGIONS from "@constants/api";
import { searchSummoner } from "@stores/summoners";
import { Summoner } from "@typeDefs/summoner";
import React from "react";

import styled from "styled-components";
import PlayerPicker from "./PlayerPicker";
import RegionPicker from "./RegionPicker";

const Search: React.FC = () => {
  const [region, setRegion] = React.useState<string>(API_REGIONS.EUW1.platform);
  const [search, setSearch] = React.useState<string>("");
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const canSearch = React.useMemo(() => {
    return search.length > 0;
  }, [search]);

  const fetchSearchSuggestions = async (searchTerm: string) => {
    const response = await searchSummoner(searchTerm, region);

    if (response.success) {
      setSuggestions(
        response.data.map((summoner: Summoner) => summoner.summonerName)
      );
    }
  };

  const handleSearch = () => {
    fetchSearchSuggestions(search);
  };

  return (
    <Container>
      <RegionPicker region={region} setRegion={setRegion} />
      <PlayerPicker
        search={search}
        setSearch={setSearch}
        suggestions={suggestions}
      />
      {canSearch && (
        <SearchButton onClick={handleSearch}>
          {"Lancer la recherche"}
        </SearchButton>
      )}
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

const SearchButton = styled(Button)``;

export default Search;
