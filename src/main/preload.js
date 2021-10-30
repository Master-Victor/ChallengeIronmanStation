const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    read_json_ipc() {
      ipcRenderer.send('send-json-evaluations', 'datos');
    },
    filter_json_ipc(data) {
      ipcRenderer.send('filter-json-evaluations', data);
    },         
    on(channel, func) {
      const validChannels = ['ipc-example', 'send-json-evaluations', 'filter-json-evaluations'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example', 'send-json-evaluations', 'filter-json-evaluations'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
