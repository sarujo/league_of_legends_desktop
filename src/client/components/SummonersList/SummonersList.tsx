import * as React from 'react';
import { Grid } from '@material-ui/core';

import { ChampSelect } from 'Interface/leagueClient';
import { Nullable } from 'utils/Types';

import { SummonerItem } from '../SummonerItem';

interface OwnProps {
  data: Nullable<ChampSelect>;
}

export function SummonersList({ data }: OwnProps): JSX.Element {
  return (
    <Grid container direction={'column'} spacing={5}>
      <Grid container item direction={'row'} wrap={'nowrap'} spacing={3}>
        {data?.myTeam.map((item, i) => {
          return (
            <SummonerItem
              key={i}
              championName={item.champion.name}
              imageFull={item.champion.imageFull}
              teamSide={item.teamSide}
            />
          );
        })}
      </Grid>
      <Grid container item direction={'row'} wrap={'nowrap'} spacing={3}>
        {data?.theirTeam.map((item, i) => {
          return (
            <SummonerItem
              key={i}
              championName={item.champion.name}
              imageFull={item.champion.imageFull}
              teamSide={item.teamSide}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
