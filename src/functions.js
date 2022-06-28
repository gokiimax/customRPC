var { ipcRenderer } = require('electron')
var ipc = ipcRenderer;

/* Minimize Application*/
minimizeBtn.addEventListener('click', () => {
    ipc.send('minimizeApp')
})

/* Close Application*/
closeBtn.addEventListener('click', () => {
    sendNotification("The Application is now running in the system Tray!")

    ipc.send('closeApp')
})

var sendNotification = (text) => {
    const title = "CustomRPC | Beta"

    const notification = new Notification(title, {
        body: text,
        requireInteraction: false,
        icon: "icons/icon.png",                
    })
}