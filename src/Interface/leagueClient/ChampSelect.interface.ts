export interface ChampSelect {
  myTeam: TeamItem[];
  myTeamBans: number[];
  theirTeam: TeamItem[];
  theirTeamBans: number[];
}

export interface TeamItem {
  champion: Champion;
  summonerId: number;
  teamSide: TeamSide;
}

export interface Champion {
  id: number;
  name: string;
  imageFull: string;
}

export type TeamSide = 1 | 2;
