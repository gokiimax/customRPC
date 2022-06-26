var { ipcRenderer } = require('electron')
var ipc = ipcRenderer;

/* Minimize Application*/
minimizeBtn.addEventListener('click', () => {
    ipc.send('minimizeApp')
})

/* Close Application*/
closeBtn.addEventListener('click', () => {
    ipc.send('closeApp')
})