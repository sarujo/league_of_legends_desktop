const https = require('https');
const btoa = require('btoa');
const axios = require('axios');

class HttpClient {
  constructor({ address, port, username, password, protocol }) {
    this.address = address;
    this.port = port;
    this.username = username;
    this.password = password;
    this.protocol = protocol;

    this.instance = this.createHTTPInstance();
  }

  getCurrentSummoner() {
    return this.instance.get('/lol-summoner/v1/current-summoner').then((resp) => {
      return resp.data.displayName;
    });
  }

  acceptMatch() {
    return this.instance.post('/lol-matchmaking/v1/ready-check/accept', {});
  }

  createHTTPInstance() {
    const baseUrl = `${this.protocol}://${this.address}:${this.port}`;
    const headers = {
      Accept: 'application/json',
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
    };
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });

    return axios.create({
      baseURL: baseUrl,
      timeout: 1000,
      headers: headers,
      httpsAgent: httpsAgent,
    });
  }
}

module.exports = HttpClient;
