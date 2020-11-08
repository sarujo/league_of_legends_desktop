import React from 'react';
import { Box, Typography } from '@material-ui/core';

export function UserNotConnected() {
  return (
    <Box width={'100%'}>
      <Typography variant={'h5'} color={'primary'}>
        In order to start getting use of this application, please open League of Legends client!
      </Typography>
    </Box>
  );
}
