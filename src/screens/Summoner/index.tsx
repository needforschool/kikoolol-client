import Page from "@components/Page";
import SummonerBanner from "@components/Summoner/Banner";
import { getSummoner } from "@stores/summoners";
import { Summoner } from "@typeDefs/summoner";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const SummonerScreen: NextPage = () => {
  const router = useRouter();
  const { region, summonerName } = router.query;

  const [summoner, setSummoner] = React.useState<Summoner | undefined>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();

  React.useEffect(() => {
    const fetchSummoner = async () => {
      const response = await getSummoner(
        region as string,
        summonerName as string
      );

      if (response.success) {
        setSummoner(response.data);
      } else {
        setError(response.message);
      }
    };

    setLoading(true);

    if (region && summonerName) {
      fetchSummoner().finally(() => {
        setLoading(false);
      });
    }
  }, [region, summonerName]);

  return (
    <Page withSearch>
      {!loading ? (
        error ? (
          <Error>{error}</Error>
        ) : (
          summoner && <SummonerBanner summoner={summoner} />
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
