import history from './appHistory';

export function navigateTo(url: string) {
  history.push(url);
}
