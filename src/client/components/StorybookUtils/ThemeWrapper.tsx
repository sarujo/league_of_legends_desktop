import * as React from 'react';
import { ReactNode } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { indigo, teal } from '@material-ui/core/colors';

interface OwnProps {
  children: ReactNode | ReactNode[];
}

export function ThemeWrapper({ children }: OwnProps): JSX.Element {
  const theme = createMuiTheme({
    palette: {
      primary: indigo,
      secondary: teal,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
