import * as React from 'react';
import { ReactNode } from 'react';
import { Box, Container, styled } from '@material-ui/core';

import { ThemeWrapper } from './ThemeWrapper';

interface OwnProps {
  children: ReactNode | ReactNode[];
}

export function StoryWrapper({ children }: OwnProps): JSX.Element {
  return (
    <ThemeWrapper>
      <StyledContainer>
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
          {children}
        </Box>
      </StyledContainer>
    </ThemeWrapper>
  );
}

const StyledContainer = styled(Container)({
  marginTop: '32px',
  padding: '64px',
  border: '1px solid #e5e5e5;',
  display: 'flex',
  justifyContent: 'center',
});
