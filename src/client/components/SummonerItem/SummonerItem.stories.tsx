import React from 'react';

import { StoryWrapper } from '../StorybookUtils';
import { SummonerItem } from './SummonerItem';

export default {
  title: 'Components|SummonerItem',
  component: SummonerItem,
};

export const Olaf = () => (
  <StoryWrapper>
    <SummonerItem key={1} championName={'Olaf'} imageFull={'Olaf.png'} teamSide={1} />
  </StoryWrapper>
);

export const NotSelected = () => (
  <StoryWrapper>
    <SummonerItem key={1} championName={'NOT SELECTED'} imageFull={'NOT SELECTED'} teamSide={2} />
  </StoryWrapper>
);
