// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  invoke: (channel: string, ...args: any[]) =>
    ipcRenderer.invoke(channel, ...args),
  send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args),
  on: (channel: string, cb: (...args: any[]) => void) =>
    ipcRenderer.on(channel, (event, ...args) => cb(...args)),
  off: (channel: string, cb: (...args: any[]) => void) =>
    ipcRenderer.removeListener(channel, cb),
});
