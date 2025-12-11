"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  invoke: (channel, ...args) => electron.ipcRenderer.invoke(channel, ...args),
  send: (channel, ...args) => electron.ipcRenderer.send(channel, ...args),
  on: (channel, cb) => electron.ipcRenderer.on(channel, (event, ...args) => cb(...args)),
  off: (channel, cb) => electron.ipcRenderer.removeListener(channel, cb)
});
