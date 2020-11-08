const fs = require('fs');
const path = require('path');
const electron = require('electron');
const axios = require('axios');

class CoreFilesLoader {
  load() {
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');
    const filePath = path.join(userDataPath, 'champions.json');

    if (fs.existsSync(filePath)) {
      return Promise.resolve();
    }

    const result = {};

    return axios
      .get('http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion.json')
      .then((response) => {
        Object.values(response.data.data).forEach((champion) => {
          result[champion.key] = champion;
        });

        fs.writeFileSync(filePath, JSON.stringify(result));
      });
  }
}

module.exports = CoreFilesLoader;
