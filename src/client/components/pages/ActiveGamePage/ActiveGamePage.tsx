import React from 'react';
import { Typography } from '@material-ui/core';

import { SummonersList } from '../../SummonersList';
import { ContentContainer } from '../../ContentContainer';
import { NavBar, NavBarActiveState } from '../../NavBar';
import { PageContainer } from '../../PageContainer/PageContainer';

interface OwnProps {
  champSelectData: any;
}

export function ActiveGamePage({ champSelectData }: OwnProps): JSX.Element {
  return (
    <>
      <PageContainer>
        <NavBar activeState={NavBarActiveState.ActiveGame} />
        <ContentContainer>
          {champSelectData ? (
            <SummonersList data={champSelectData} />
          ) : (
            <Typography variant={'h5'} color={'primary'}>
              Currently there is no active game!
            </Typography>
          )}
        </ContentContainer>
      </PageContainer>
    </>
  );
}
