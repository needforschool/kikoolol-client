import requester from "@services/requester";
import { Response } from "@typeDefs/response";
import { Summoner } from "@typeDefs/summoner";

export const searchSummoner = async (
  summonerName: string,
  region: string
): Promise<Response<Summoner[]>> => {
  return await requester<Summoner[]>().get(
    `/summoners/search/${region}/${summonerName}`
  );
};
