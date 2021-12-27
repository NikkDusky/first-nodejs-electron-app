const { ipcRenderer } = require('electron')
const ipc = ipcRenderer
const mySidebar = document.getElementById('mySidebar')
var isLeftMenuActive = true

minimizeBtn.addEventListener('click', () => {
    ipc.send('minimizeApp')
})

maximizeBtn.addEventListener('click', () => {
    ipc.send('maximizeApp')
})

closeBtn.addEventListener('click', () => {
    ipc.send('closeApp')
})

showHideMenus.addEventListener('click', () => {
    if(isLeftMenuActive){
        mySidebar.style.width = '0px'
        isLeftMenuActive = false
    } else {
        mySidebar.style.width = '280px'
        isLeftMenuActive = true
    }
})