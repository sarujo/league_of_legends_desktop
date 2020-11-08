import React from 'react';
import { AppBar, Box, Button, IconButton, styled, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { LeagueClientIcon } from '../../assets/icons';
import { navigateTo } from '../../utils';
import { ApplicationPageKeys, ApplicationPages } from '../../paths';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export enum NavBarActiveState {
  Info = 'Info',
  Home = 'Home',
  ActiveGame = 'ActiveGame',
}

interface OwnProps {
  activeState: NavBarActiveState;
}

export function NavBar({ activeState }: OwnProps) {
  const classes = useStyles();

  function getButtonVariant(activeState: NavBarActiveState, menuItem: NavBarActiveState) {
    return activeState === menuItem ? 'contained' : 'outlined';
  }

  return (
    <Box marginTop={1}>
      <AppBar position={'static'}>
        <Toolbar>
          <IconButton
            disabled
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <StyledLeagueClientIcon size={'extraLarge'} />
          </IconButton>
          <MenuButtonsContainer>
            <MenuButton
              color="secondary"
              variant={getButtonVariant(activeState, NavBarActiveState.Info)}
              onClick={() => navigateTo(ApplicationPages[ApplicationPageKeys.Info])}
            >
              News
            </MenuButton>
            <MenuButton
              color="secondary"
              variant={getButtonVariant(activeState, NavBarActiveState.Home)}
              onClick={() => navigateTo(ApplicationPages[ApplicationPageKeys.Home])}
            >
              Summoner Info
            </MenuButton>
            <MenuButton
              color="secondary"
              variant={getButtonVariant(activeState, NavBarActiveState.ActiveGame)}
              onClick={() => navigateTo(ApplicationPages[ApplicationPageKeys.ActiveGame])}
            >
              Active game
            </MenuButton>
          </MenuButtonsContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const MenuButtonsContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

const MenuButton = styled(Button)({
  minWidth: '150px',
  margin: '8px',
});

const StyledLeagueClientIcon = styled(LeagueClientIcon)({
  minWidth: '5rem !important',
  marginLeft: '8px',
});
