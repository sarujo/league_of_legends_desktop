const { app, ipcMain: ipc } = require('electron');

const Window = require('./window');
const Backend = require('./src/server/Backend');

// Global Variables
let appWindowInstance;
const window = new Window();
const backend = new Backend();

// Business callback flow
backend.on('summonerNameChanged', (name) => {
  appWindowInstance.webContents.send('summonerNameChanged', name);
});
backend.on('champSelectStateChange', (data) => {
  appWindowInstance.webContents.send('champSelectStateChange', data);
});

// React Callback flow
ipc.on('ready', () => backend.start());

// Electron Callback flow
app.on('ready', initializeWindow);
app.on('window-all-closed', closeWindow);

function initializeWindow() {
  appWindowInstance = window.create();

  appWindowInstance.once('ready-to-show', () => {
    appWindowInstance.show();
  });

  appWindowInstance.on('minimize', function (event) {
    event.preventDefault();
    appWindowInstance.hide();
    window.createTray();
  });

  appWindowInstance.on('restore', function (event) {
    appWindowInstance.show();
    window.destroyTray();
  });
}

function closeWindow() {
  app.quit();
}
