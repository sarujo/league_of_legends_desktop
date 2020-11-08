const path = require('path');
const url = require('url');
const { BrowserWindow, Tray, Menu } = require('electron');
const contextMenu = require('electron-context-menu');

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

// Enables Inspect on right-click
contextMenu({});

class Window {
  constructor(width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
    this.width = width;
    this.height = height;
    this.tray = null;
  }

  create() {
    this.assignWindow();
    this.assignIndexPath();

    this.instance.removeMenu();
    this.instance.setResizable(false);
    this.instance.loadURL(this.indexPath);

    return this.instance;
  }

  createTray() {
    this.tray = this.moveWindowToTray();
  }

  destroyTray() {
    this.tray.destroy();
  }

  // private below

  assignWindow() {
    this.instance = new BrowserWindow({
      width: this.width,
      height: this.height,
      show: false,
      webPreferences: {
        nodeIntegration: true,
      },
    });
  }

  assignIndexPath() {
    this.indexPath = this.isDevelopment() ? this.devIndexPath() : this.prodIndexPath();
  }

  devIndexPath() {
    return url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true,
    });
  }

  prodIndexPath() {
    return url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true,
    });
  }

  isDevelopment() {
    const devEnv =
      process.defaultApp ||
      /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
      /[\\/]electron[\\/]/.test(process.execPath);
    const devArgs = process.argv.indexOf('--noDevServer') === -1;

    return devEnv && devArgs;
  }

  moveWindowToTray() {
    const appIcon = new Tray(path.join(__dirname, '/src/server/assets/icon.png'));
    const window = this.instance;
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Show',
        click: function () {
          window.show();
        },
      },
    ]);

    appIcon.on('double-click', function (event) {
      window.show();
    });

    appIcon.setToolTip('LEAGUE');
    appIcon.setContextMenu(contextMenu);

    return appIcon;
  }
}

module.exports = Window;
