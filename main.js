const {app, BrowserWindow, ipcMain} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
  // mainWindow.openDevTools();
});

ipcMain.on('block1', (event) => {
  setTimeout(() => {
    event.returnValue = '';
  }, 0);
  const bigNum = 149999;
  for(var i = 0; i < bigNum; i++)
    for(var j = 0; j < bigNum; j++)
      ;
});

ipcMain.on('block2', (event) => {
  setTimeout(() => {
    event.returnValue = '';
  }, 5000);
});
