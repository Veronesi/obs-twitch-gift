import configs from './configs.js';
import OBSWebSocket from 'obs-websocket-js';

const OBS = {
  connect: async (password) => {
    console.log('Conect obs...');
    const obs = new OBSWebSocket();

    await obs.connect(configs.obs.host, password)
      .then(() => {
        console.log('OBS is connected!');
      }).catch(err => {
        console.error('Failed to connect to OBS');
        console.error(err);
      });

      return obs;
  }
}

export default OBS;