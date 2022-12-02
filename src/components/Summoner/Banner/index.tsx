import React from "react";
import styled from "styled-components";

import type { Summoner } from "@typeDefs/summoner";

interface Props {
  summoner: Summoner;
  className?: string;
}

const SummonerBanner: React.FC<Props> = ({ summoner, className }: Props) => {
  return (
    <Container className={className}>
      <Info>
        <SummonerName>{summoner.summonerName}</SummonerName>
        <Text color={"#B3B3B3"}>
          Rank <Highlight>55</Highlight> (5% meilleurs joueurs)
        </Text>
        <Text color={"#6A6A6A"}>{"Dernière mise à jour : 12 heures"}</Text>
      </Info>
      <Stats>
        <Subject>{"All time"}</Subject>
        <Text color={"#B3B3B3"}>
          KDA (<Highlight color={"#58D755"}>4.6</Highlight>/
          <Highlight color={"#C23D35"}>2.3</Highlight>/
          <Highlight color={"#D3AE29"}>7.6</Highlight>)
        </Text>
        <Text color={"#B3B3B3"}>272 parties jouées</Text>
        <Text color={"#6A6A6A"}>Win Rate 50% | 100V 100D</Text>
      </Stats>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 140px;
  background-color: #1a282b;
  border: 2px solid #212f32;
  border-radius: 10px;
  padding: 25px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SummonerName = styled.h1`
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Highlight = styled.span<{ color?: string }>`
  color: ${({ color }) => color || "#0076cc"};
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Subject = styled.h2`
  font-size: 15px;
  font-weight: 700;
`;

const Text = styled.div<{ color?: string }>`
  font-size: 15px;
  color: ${({ color }) => color || "#ffffff"};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export default SummonerBanner;
