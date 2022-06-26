// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const AutoLaunch = require("auto-launch")
const autoLaunch = new AutoLaunch({name: "CustomRPC | v1.0"})

// autoLaunch.isEnabled().then(function(isEnabled) {
//   if(isEnabled)
//     return

//   autoLaunch.enable();
// }).catch((err) => console.error(err))