class AutoAccept {
  constructor(backend) {
    this.backend = backend;
  }

  observe() {
    if (!this.backend.settings.get('autoAccept')) return;

    this.backend.wsClient.observe(
      '/lol-matchmaking/v1/ready-check',
      this.onMessageReceived.bind(this)
    );
  }

  onMessageReceived(response) {
    if (
      response.eventType === 'Update' &&
      response.data.playerResponse === 'None' &&
      response.data.state === 'InProgress'
    ) {
      this.backend.httpClient
        .acceptMatch()
        .then((resp) => {
          console.log('Match accepted');
        })
        .catch((err) => console.log('Match accepting failed: ', err));
    }
  }
}

module.exports = AutoAccept;
