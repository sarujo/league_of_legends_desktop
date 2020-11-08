const Champion = require('../league/Champion');

class ChampSelect {
  constructor(backend) {
    this.backend = backend;
  }

  observe() {
    this.backend.wsClient.observe(
      '/lol-champ-select/v1/session',
      this.onMessageReceived.bind(this)
    );
  }

  onMessageReceived(response) {
    if (response.eventType === 'Update') {
      const myTeam = response.data.myTeam.map((item) => {
        return {
          champion: new Champion(item.championId),
          summonerId: item.summonerId,
          teamSide: item.team,
        };
      });
      const theirTeam = response.data.theirTeam.map((item) => {
        return {
          champion: new Champion(item.championId),
          summonerId: item.summonerId,
          teamSide: item.team,
        };
      });

      const myTeamBans = Object.values(response.data.bans.myTeamBans);
      const theirTeamBans = Object.values(response.data.bans.theirTeamBans);

      this.backend.emit('champSelectStateChange', { myTeam, theirTeam, myTeamBans, theirTeamBans });
    } else if (response.eventType === 'Delete') {
      this.backend.emit('champSelectStateChange', null);
    }
  }
}

module.exports = ChampSelect;
