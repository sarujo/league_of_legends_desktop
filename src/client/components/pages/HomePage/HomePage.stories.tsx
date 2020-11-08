import React from 'react';

import { StoryWrapper } from '../../StorybookUtils';
import { HomePage } from './HomePage';

export default {
  title: 'Components|HomePage',
  component: HomePage,
};

export const Default = () => (
  <StoryWrapper>
    <HomePage summonerName={''} />
  </StoryWrapper>
);

export const UserConnected = () => (
  <StoryWrapper>
    <HomePage summonerName={'Greiciu deze'} />
  </StoryWrapper>
);
