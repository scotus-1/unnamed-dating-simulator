const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
      width: 1300,
      height: 760,
      resizable: false,
      icon: 'favicon.ico'
    })
  
    win.loadFile('index.html')
    win.setMenu(null);

    win.once('ready-to-show', () => {
      win.show()
    })
};



app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});
