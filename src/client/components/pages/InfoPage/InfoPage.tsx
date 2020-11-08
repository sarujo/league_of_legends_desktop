import React from 'react';
import { Typography } from '@material-ui/core';

import { ContentContainer } from '../../ContentContainer';
import { NavBar, NavBarActiveState } from '../../NavBar';
import { PageContainer } from '../../PageContainer/PageContainer';

export function InfoPage(): JSX.Element {
  return (
    <>
      <PageContainer>
        <NavBar activeState={NavBarActiveState.Info} />
        <ContentContainer>
          <Typography variant={'h5'} color={'primary'}>
            Possibly some generic, meaningful League of Legends related stuff
          </Typography>
        </ContentContainer>
      </PageContainer>
    </>
  );
}
