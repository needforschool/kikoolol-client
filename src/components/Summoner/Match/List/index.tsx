import { Match } from "@typeDefs/match";
import React from "react";
import styled from "styled-components";
import SummonerMatchCard from "../Card";

interface Props {
  matchs: Match[];
}

const SummonerMatchList: React.FC<Props> = ({ matchs }: Props) => {
  return (
    <Container>
      <MatchList>
        {matchs.map((match: Match) => (
          <MatchItem key={match.gameInfo.id}>
            <SummonerMatchCard match={match} />
          </MatchItem>
        ))}
      </MatchList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

const MatchList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const MatchItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default SummonerMatchList;
