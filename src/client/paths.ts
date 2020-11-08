export enum ApplicationPageKeys {
  Root = 'Root',
  Home = 'Home',
  Info = 'Info',
  ActiveGame = 'ActiveGame',
  NotFound = 'NotFound',
}

export const ApplicationPages = {
  [ApplicationPageKeys.Root]: '/',
  [ApplicationPageKeys.Info]: '/summoner-info',
  [ApplicationPageKeys.Home]: '/home',
  [ApplicationPageKeys.ActiveGame]: '/active-game',
  [ApplicationPageKeys.NotFound]: '/404',
};
