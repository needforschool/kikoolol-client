import { Match } from "@typeDefs/match";
import React from "react";
import styled from "styled-components";

interface Props {
  match: Match;
}

const SummonerMatchCard: React.FC<Props> = ({ match }: Props) => {
  return <Container>{match.gameInfo.id}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  background-color: #1a282b;
  border: 2px solid #212f32;
  border-radius: 10px;
`;

export default SummonerMatchCard;
