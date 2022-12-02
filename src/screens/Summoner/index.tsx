import Page from "@components/Page";
import SummonerBanner from "@components/Summoner/Banner";
import SummonerMatchList from "@components/Summoner/Match/List";
import { getMatchs } from "@stores/matchs";
import { getSummoner } from "@stores/summoners";
import { Match } from "@typeDefs/match";
import { Summoner } from "@typeDefs/summoner";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const SummonerScreen: NextPage = () => {
  const router = useRouter();
  const { region, summonerName } = router.query;

  const [summoner, setSummoner] = React.useState<Summoner | undefined>();
  const [matchs, setMatchs] = React.useState<Match[] | undefined>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();

  React.useEffect(() => {
    const fetchSummoner = async () => {
      const response = await getSummoner(
        summonerName as string,
        region as string
      );

      if (response.success) {
        setSummoner(response.data);
      } else {
        setError(response.message);
      }
    };

    const fetchSummonerMatchs = async () => {
      const response = await getMatchs(
        summonerName as string,
        region as string,
        5
      );

      if (response.success && response.data) {
        setMatchs(response.data);
      } else {
        setError(response.message);
      }
    };

    setLoading(true);

    if (region && summonerName) {
      fetchSummoner().finally(() => {
        fetchSummonerMatchs().finally(() => {
          setLoading(false);
        });
      });
    }
  }, [region, summonerName]);

  return (
    <Page withSearch>
      {!loading ? (
        error ? (
          <Error>{error}</Error>
        ) : (
          <>
            {summoner && <SummonerBanner summoner={summoner} />}

            {matchs && <SummonerMatchList matchs={matchs} />}
          </>
        )
      ) : (
        <div>Loading...</div>
      )}
    </Page>
  );
};

const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #c23d35;
  border: 2px solid #4a0e0b;
  border-radius: 10px;
  font-size: 14px;
`;

export default SummonerScreen;
