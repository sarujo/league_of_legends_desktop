import React from 'react';
import { Box, styled, Typography } from '@material-ui/core';

export function PatchMark() {
  return (
    <StyledBox>
      <Typography variant={'body1'} color={'primary'}>
        Patch 10.21
      </Typography>
    </StyledBox>
  );
}

const StyledBox = styled(Box)({
  bottom: 0,
  right: 0,
  position: 'absolute',
  padding: '8px',
});
