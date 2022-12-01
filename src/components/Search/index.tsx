import Button from "@components/Button";
import API_REGIONS from "@constants/api";
import { searchSummoner } from "@stores/summoners";
import { Summoner } from "@typeDefs/summoner";
import { useRouter } from "next/router";
import React from "react";

import styled from "styled-components";
import PlayerPicker from "./PlayerPicker";
import RegionPicker from "./RegionPicker";

const Search: React.FC = () => {
  const router = useRouter();

  const [region, setRegion] = React.useState<string>(API_REGIONS.EUW1.platform);
  const [search, setSearch] = React.useState<string>("");
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const canSearch = React.useMemo(() => {
    return search.length > 0;
  }, [search]);

  const fetchSearchSuggestions = async (searchTerm: string) => {
    const response = await searchSummoner(searchTerm, region);

    if (response.success && response.data) {
      setSuggestions(
        response.data.map((summoner: Summoner) => summoner.summonerName)
      );
    }
  };

  React.useEffect(() => {
    if (search.length > 0) {
      setSuggestions([]);
    }

    const timeoutId = setTimeout(() => {
      if (search.length > 0) {
        fetchSearchSuggestions(search);
      }
    }, 0.5 * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearch = (summoner: string = search) => {
    setSuggestions([]);

    if (summoner && summoner.length > 0) {
      router.push(`/summoner/${region}/${summoner}`);
    }

    //TODO: Add search to historic
  };

  return (
    <Container>
      <RegionPicker region={region} setRegion={setRegion} />
      <PlayerPicker
        search={search}
        setSearch={setSearch}
        suggestions={suggestions}
        handleSearch={handleSearch}
      />
      {canSearch && (
        <SearchButton onClick={() => handleSearch(search)}>
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
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchButton = styled(Button)``;

export default Search;
