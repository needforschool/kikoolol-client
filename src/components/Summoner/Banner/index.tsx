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
      <div></div>
      <Info>
        <SummonerName>{summoner.summonerName}</SummonerName>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 140px;
  background-color: #1a282b;
  border: 2px solid #212f32;
  border-radius: 10px;
  padding: 25px;
`;

const Info = styled.div``;

const SummonerName = styled.h1``;

export default SummonerBanner;
