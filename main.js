const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const ipc = ipcMain

function createWindow () {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 940,
        minHeight: 560,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.removeMenu();
    win.loadFile(__dirname + '/src/index.html')
    win.setBackgroundColor("#343B48")

    ipc.on('minimizeApp', () => {
        win.minimize()
    })

    ipc.on('maximizeApp', () => {
        if(win.isMaximized()){
            win.restore()
        } else {
            win.maximize()
        }
    })

    ipc.on('closeApp', () => {
        win.close()
    })

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})