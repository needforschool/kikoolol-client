import React from "react";

import Header from "@components/Header";
import Info from "@components/Info";
import MainContainer from "@components/Layout/MainContainer";
import Leaderboard from "@components/Leaderboard";
import Search from "@components/Search";
import styled from "styled-components";
import { searchSummoner } from "@stores/summoners";
import API_REGIONS from "@constants/api";
import { Summoner } from "@typeDefs/summoner";

const Home: React.FC = () => {
  const [searchRegion, setSearchRegion] = React.useState<string>(
    API_REGIONS.EUW1.platform
  );
  const [searchSuggestions, setSearchSuggestions] = React.useState<string[]>(
    []
  );

  const fetchSearchSuggestions = async (searchTerm: string) => {
    const response = await searchSummoner(searchTerm, searchRegion);

    if (response.success) {
      setSearchSuggestions(
        response.data.map((summoner: Summoner) => summoner.summonerName)
      );
    }
  };

  return (
    <MainContainer>
      <Header />
      <Container>
        <Search
          region={searchRegion}
          setSearchRegion={setSearchRegion}
          suggestions={searchSuggestions}
        />
        <Info />
        <LeaderboardContainer>
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
        </LeaderboardContainer>
      </Container>
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

const LeaderboardContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: -10px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Home;
