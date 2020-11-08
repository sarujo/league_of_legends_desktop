import * as React from 'react';

import { ContentContainer } from '../../ContentContainer';
import { NavBar, NavBarActiveState } from '../../NavBar';
import { PageContainer } from '../../PageContainer/PageContainer';
import { UserConnected } from './UserConnected';
import { UserNotConnected } from './UserNotConnected';

interface OwnProps {
  summonerName: string;
}

export function HomePage({ summonerName }: OwnProps): JSX.Element {
  return (
    <>
      <PageContainer>
        <NavBar activeState={NavBarActiveState.Home} />
        <ContentContainer>
          {summonerName ? <UserConnected summonerName={summonerName} /> : <UserNotConnected />}
        </ContentContainer>
      </PageContainer>
    </>
  );
}
