import * as React from 'react';
import { Box, Card, CardContent, Grid, Theme, Typography, withTheme } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import { TeamSide } from 'Interface/leagueClient/ChampSelect.interface';

import { Colors, Sizings } from '../../constants';

interface OwnProps {
  championName: string;
  imageFull: string;
  teamSide: TeamSide;
}

export function SummonerItem({ championName, teamSide, imageFull }: OwnProps): JSX.Element {
  let championImgSrc = '';

  try {
    championImgSrc = require('../../assets/img/champion/' + imageFull);
  } catch (e) {
    championImgSrc = require('../../assets/img/profileicon/29.png');
  }

  return (
    <Grid item>
      <SummonerCard teamSide={teamSide}>
        <Box textAlign={'center'}>
          <CardContent>
            <Typography gutterBottom color={'primary'}>
              {championName}
            </Typography>
            <img width={'120px'} alt={championName} src={championImgSrc} />
          </CardContent>
        </Box>
      </SummonerCard>
    </Grid>
  );
}

const SummonerCard = styled(withTheme(Card))((props: { theme: Theme; teamSide: number }) => ({
  background: props.teamSide === 1 ? Colors.TEAM_BLUE_BG : Colors.TEAM_RED_BG,
  width: Sizings.SUMMONER_ITEM_WIDTH,
}));
