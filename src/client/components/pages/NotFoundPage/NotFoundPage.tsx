import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { PageContainer } from '../../PageContainer/PageContainer';

export function NotFoundPage() {
  return (
    <PageContainer>
      <Box>
        <Typography variant={'h5'} color={'secondary'}>
          404 - Page does not exist
        </Typography>
      </Box>
    </PageContainer>
  );
}
