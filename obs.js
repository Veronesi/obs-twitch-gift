import OBSWebSocket from 'obs-websocket-js';
import configs from './configs.js';

const OBS = {
  connect: async (password) => {
    console.log('OBS: Conectando...');
    const obs = new OBSWebSocket();
    await obs.connect(configs.obs.host, password);
    console.log('OBS: Conexion exitosa!');
    return obs;
  },
};

export default OBS;
