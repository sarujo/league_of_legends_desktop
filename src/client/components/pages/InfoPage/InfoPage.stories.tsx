import React from 'react';

import { StoryWrapper } from '../../StorybookUtils';
import { InfoPage } from './InfoPage';

export default {
  title: 'Components|InfoPage',
  component: InfoPage,
};

export const Default = () => (
  <StoryWrapper>
    <InfoPage />
  </StoryWrapper>
);
