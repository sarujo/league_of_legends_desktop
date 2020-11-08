import React, { useEffect, useState } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ipcRenderer as ipc } from 'electron';

import history from './appHistory';
import { ThemeWrapper } from './components/StorybookUtils';
import { ScrollToTop } from './components/ScrollToTop';
import { InfoPage } from './components/pages/InfoPage';
import { ActiveGamePage } from './components/pages/ActiveGamePage';
import { HomePage } from './components/pages/HomePage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { ApplicationPageKeys, ApplicationPages } from './paths';
import { navigateTo } from './utils';

function App(): JSX.Element {
  const [name, setName] = useState('');
  const [activeGameData, setActiveGameData] = useState(null);

  useEffect(() => {
    ipc.send('ready');
  }, []);

  useEffect(() => {
    ipc.on('summonerNameChanged', function (_evt, name) {
      setName(name);
    });

    return function cleanup() {
      ipc.removeAllListeners('summonerNameChanged');
    };
  });

  useEffect(() => {
    ipc.on('champSelectStateChange', function (_evt, data) {
      setActiveGameData(data);
    });

    return function cleanup() {
      ipc.removeAllListeners('champSelectStateChange');
    };
  });

  useEffect(() => {
    if (name) {
      navigateTo(ApplicationPages[ApplicationPageKeys.Home]);
    }

    if (activeGameData) {
      navigateTo(ApplicationPages[ApplicationPageKeys.ActiveGame]);
    }
  }, [name, activeGameData]);

  return (
    <ThemeWrapper>
      <CssBaseline />
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <Route path={ApplicationPages[ApplicationPageKeys.NotFound]}>
              <NotFoundPage />
            </Route>
            <Route path={ApplicationPages[ApplicationPageKeys.Root]}>
              <ApplicationRoutes name={name} champSelectData={activeGameData} />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </ThemeWrapper>
  );
}

interface ApplicationProps {
  name: string;
  champSelectData: any;
}

function ApplicationRoutes({ name, champSelectData }: ApplicationProps) {
  return (
    <Switch>
      <Route exact path={ApplicationPages[ApplicationPageKeys.Root]}>
        <Redirect to={ApplicationPages[ApplicationPageKeys.Info]} />
      </Route>
      <Route exact path={ApplicationPages[ApplicationPageKeys.Home]}>
        <HomePage summonerName={name} />
      </Route>
      <Route exact path={ApplicationPages[ApplicationPageKeys.ActiveGame]}>
        <ActiveGamePage champSelectData={champSelectData} />
      </Route>
      <Route exact path={ApplicationPages[ApplicationPageKeys.Info]}>
        <InfoPage />
      </Route>
      <Redirect to={ApplicationPages[ApplicationPageKeys.NotFound]} />
    </Switch>
  );
}

export default App;
