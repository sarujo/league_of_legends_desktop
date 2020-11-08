const Store = require('../Store');

const champions = new Store({ configName: 'champions', defaults: {} });

class Champion {
  constructor(id) {
    this.id = id;
    this.assignAttributesFromConfig();
  }

  assignAttributesFromConfig() {
    let championData = champions.get(this.id);
    this.name = this.id > 0 ? championData.name : 'NOT SELECTED';
    this.imageFull = this.id > 0 ? championData.image.full : null;
  }
}

module.exports = Champion;
