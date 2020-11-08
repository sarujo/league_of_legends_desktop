const WebSocket = require('ws');
const btoa = require('btoa');

class LeagueWSClient {
  constructor({ address, port, username, password }) {
    this.wsAddress = address;
    this.wsPort = port;
    this.wsUsername = username;
    this.wsPassword = password;

    this.instance = this.createWSInstance();
    this.observedChannels = new Set();
    this.observerResponders = {};
  }

  observe(path, callbackFn) {
    this.observerResponders[path] = callbackFn;
    this.observedChannels.add(path);
  }

  unobserve(path) {
    this.observerResponders[path] = null;
    this.observedChannels.delete(path);
  }

  subscribe() {
    this.instance.on('open', () => {
      this.instance.send(JSON.stringify([5, 'OnJsonApiEvent']));
    });

    this.instance.on('message', (response) => {
      if (response.length === 0) return;

      const payload = JSON.parse(response);

      if (payload.length !== 3) return;

      if (payload[0] !== 8 || payload[1] !== 'OnJsonApiEvent') return;

      this.onMessageReceived(payload[2]);
    });
  }

  unsubscribe() {
    // TODO: Implement
  }

  createWSInstance() {
    const url = `wss://riot:${this.wsPassword}@localhost:${this.wsPort}`;
    const headers = { Authorization: `Basic ${btoa(`${this.wsUsername}:${this.wsPassword}`)}` };

    return new WebSocket(url, { headers, rejectUnauthorized: false });
  }

  onMessageReceived(data) {
    if (this.observedChannels.has(data['uri'])) {
      this.observerResponders[data['uri']](data);
    }
  }
}

module.exports = LeagueWSClient;
