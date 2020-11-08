import React, { ReactNode } from 'react';
import styled from '@material-ui/core/styles/styled';
import { indigo } from '@material-ui/core/colors';
import { Container } from '@material-ui/core';
import { PatchMark } from '../PatchMark';

interface OwnProps {
  children: ReactNode;
}

export function PageContainer({ children }: OwnProps) {
  return (
    <StyledContainer>
      {children}
      <PatchMark />
    </StyledContainer>
  );
}

export const StyledContainer = styled(Container)({
  height: '100vh',
  overflowY: 'hidden',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: indigo[100],
  position: 'relative',
});
