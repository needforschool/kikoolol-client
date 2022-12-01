export interface Match {
  id: string;
  metadata: MatchMetadata;
  gameInfo: MatchGameInfo;
  participants: MatchParticipant[];
}

export interface MatchGameInfo {
  id: number;
  name: string;
  mode: string;
  type: string;
  creation: number;
  duration: number;
  startTimestamp: number;
  endTimestamp: number;
  version: string;
  mapId: number;
  platformId: string;
  queueId: number;
  tournamentCode: string;
}

export interface MatchMetadata {
  dataVersion: string;
  matchId: string;
  participants: string[];
}

export interface MatchParticipant {
  puuid: string;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  championId: number;
  championName: string;
  champExperience: number;
  champLevel: number;
  individualPosition: string;
  lane: string;
  killingSprees: number;
  kills: number;
  assists: number;
  deaths: number;
  dragonKills: number;
  baronKills: number;
  bountyLevel: number;
  items: Item[];
  itemsPurchased: number;
  consumablesPurchased: number;
  goldEarned: number;
  goldSpent: number;
  firstBloodKill: boolean;
  firstBloodAssist: boolean;
  firstTowerKill: boolean;
  firstTowerAssist: boolean;
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;
  nexusKills: number;
  nexusLost: number;
  nexusTakedowns: number;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
}

export interface Item {
  id: number;
  position: number;
}
