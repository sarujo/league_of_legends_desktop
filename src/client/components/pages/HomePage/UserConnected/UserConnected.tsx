import * as React from 'react';
import { Box, Typography } from '@material-ui/core';

interface OwnProps {
  summonerName: string;
}

export function UserConnected({ summonerName }: OwnProps) {
  return (
    <Box display={'flex'} flexDirection={'column'} width={'100%'}>
      <Typography variant={'h5'} color={'primary'}>
        Hello {summonerName}!
      </Typography>
      <Typography variant={'h5'} color={'secondary'}>
        Lets go!
      </Typography>
    </Box>
  );
}
