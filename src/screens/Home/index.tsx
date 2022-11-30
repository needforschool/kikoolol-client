import React from "react";

import Header from "@components/Header";
import Info from "@components/Info";
import MainContainer from "@components/Layout/MainContainer";
import Leaderboard from "@components/Leaderboard";
import Search from "@components/Search";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Container>
        <Search />
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
