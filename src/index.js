const { app, BrowserWindow, ipcMain, Tray } = require('electron');
const remoteMain = require('@electron/remote/main')
const path = require('path');
const ipc = ipcMain

remoteMain.initialize();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: "CustomRPC | v1.0",
    width: 900,
    height: 850,
    resizable: false,
    frame: false,
    icon: path.join(__dirname, "icons/icon.png"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      devTools: false,
    },
    hasShadow: true,
    roundedCorners: true,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'app/index.html'));

  // Close The Application
  ipc.on('closeApp', () => {
    console.log("[CustomRPC] Clicked on Close Button")
    mainWindow.hide();
  })

  tray = new Tray(path.join(__dirname, "icons/icon.png"));
  tray.setToolTip("CustomRPC | v1.0");
  tray.on("click", (e) => {
    if(!mainWindow.isVisible()) {
      mainWindow.show();
    } else {
      tray.destroy();
    }
  })

  // Minimize App
  ipc.on('minimizeApp', () => {
    console.log("[CustomRPC] Clicked on Minimize Button");
    mainWindow.minimize();
  })

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
