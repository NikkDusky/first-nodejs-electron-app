const { ipcRenderer } = require('electron')
const ipc = ipcRenderer
const mySidebar = document.getElementById('mySidebar')
const linksBar = document.getElementById('linksBar')
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
        setTimeout(function(){linksBar.style.display = 'none'}, 15);
        mySidebar.style.opacity = '0%'
        mySidebar.style.width = '0px'
        isLeftMenuActive = false
    } else {
        setTimeout(function(){linksBar.style.display = 'inline-block'}, 150);
        mySidebar.style.opacity = '100%'
        mySidebar.style.width = '280px'
        isLeftMenuActive = true
    }
})