// Responsible for watching when LOL app starts.

const LCUConnector = require('lcu-connector');

class LeagueProcessHandler {
  constructor({ onConnect, onDisconnect }) {
    this.instance = new LCUConnector();

    this.instance.on('connect', (params) => {
      setTimeout(() => {
        onConnect(params);
      }, 10_000);
    });
    this.instance.on('disconnect', onDisconnect);
  }

  start() {
    this.instance.start();
  }
}

module.exports = LeagueProcessHandler;
