import React from 'react';

import { StoryWrapper } from '../../StorybookUtils';
import { ActiveGamePage } from './ActiveGamePage';

export default {
  title: 'Components|ActiveGamePage',
  component: ActiveGamePage,
};

export const Default = () => (
  <StoryWrapper>
    <ActiveGamePage champSelectData={null} />
  </StoryWrapper>
);
