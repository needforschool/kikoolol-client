import React from "react";

import Info from "@components/Info";
import Leaderboard from "@components/Leaderboard";
import styled from "styled-components";
import Page from "@components/Page";

const Home: React.FC = () => {
  return (
    <Page withSearch>
      <Info />
      <LeaderboardContainer>
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
      </LeaderboardContainer>
    </Page>
  );
};

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
