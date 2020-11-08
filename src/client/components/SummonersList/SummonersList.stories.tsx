import React from 'react';

import { ChampSelect } from 'Interface/leagueClient/ChampSelect.interface';

import { StoryWrapper } from '../StorybookUtils/StoryWrapper';
import { SummonersList } from './SummonersList';

export default {
  title: 'Components|SummonersList',
  component: SummonersList,
};

const mockData: ChampSelect = {
  myTeam: [
    { champion: { name: 'Amumu', id: 0, imageFull: 'Amumu.png' }, summonerId: 0, teamSide: 1 },
    { champion: { name: 'Graves', id: 0, imageFull: 'Graves.png' }, summonerId: 0, teamSide: 1 },
  ],
  myTeamBans: [0, 1, 2],
  theirTeam: [
    { champion: { name: 'Ahri', id: 1, imageFull: 'Ahri.png' }, summonerId: 1, teamSide: 2 },
    { champion: { name: 'Kayle', id: 1, imageFull: 'Kayle.png' }, summonerId: 1, teamSide: 2 },
  ],
  theirTeamBans: [3, 4, 5],
};

export const Default = () => (
  <StoryWrapper>
    <SummonersList data={mockData} />
  </StoryWrapper>
);
