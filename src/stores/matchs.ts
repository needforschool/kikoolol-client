import requester from "@services/requester";
import { Match } from "@typeDefs/match";
import { Response } from "@typeDefs/response";

export const getMatchs = async (
  summonerName: string,
  region: string,
  limit?: number
): Promise<Response<Match[]>> => {
  return await requester<Match[]>().get(`/matchs/${region}/${summonerName}`, {
    limit,
  });
};
