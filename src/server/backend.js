const { EventEmitter } = require('events');

const LeagueProcessHandler = require('./league_process_handler');
const LeagueWSClient = require('./league_ws_client');
const LeagueHTTPClient = require('./league_http_client');

const Store = require('./Store');

const AutoAcceptObserver = require('./observers/auto_accept');
const ChampSelectObserver = require('./observers/champ_select');
const CoreFilesLoader = require('./core_files_loader');

class Backend extends EventEmitter {
  constructor() {
    super();

    this.leagueHandler = new LeagueProcessHandler({
      onConnect: this.onLeagueProcessStart,
      onDisconnect: this.onLeagueProcessEnd,
    });

    this.wsClient = null;
    this.httpClient = null;
    this.settings = new Store({
      configName: 'user-preferences',
      defaults: { autoAccept: true },
    });
  }

  start() {
    this.ensureCoreFilesExists().then(() => {
      this.leagueHandler.start();
    });
  }

  onLeagueProcessStart = (credentials) => {
    this.wsClient = new LeagueWSClient(credentials);
    this.wsClient.subscribe();

    this.httpClient = new LeagueHTTPClient(credentials);
    this.httpClient
      .getCurrentSummoner()
      .then((resp) => this.emit('summonerNameChanged', resp))
      .catch((err) => console.log(err));
    this.startObservers();
  };

  onLeagueProcessEnd = () => {
    this.wsClient.unsubscribe();
    this.wsClient = null;
  };

  startObservers = () => {
    new AutoAcceptObserver(this).observe();
    new ChampSelectObserver(this).observe();
  };

  ensureCoreFilesExists = () => {
    return new CoreFilesLoader().load();
  };
}

module.exports = Backend;
