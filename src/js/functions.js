const { ipcRenderer, shell } = require('electron')
const ipc = ipcRenderer;

/* ============================= Discord ============================= */
const devBtn = document.getElementById("devBtn")

devBtn.addEventListener("click", (e) => {
    e.preventDefault();
    shell.openExternal("https://discord.com/developers/applications");
})

/* Minimize Application*/
minimizeBtn.addEventListener('click', () => {
    ipc.send('minimizeApp')
})

/* Close Application*/
closeBtn.addEventListener('click', () => {
    ipc.send('closeApp')
})