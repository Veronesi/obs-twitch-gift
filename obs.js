import OBSWebSocket from 'obs-websocket-js';
import configs from './configs.js';
import lib from './lib.js';

const OBS = {
  client: null,
  connect: async (password) => {
    try {
      if (!password) {
        throw new Error('Por favor, ingresa la contraseña de obs .env en OBS_PASSWORD');
      }
      lib.console.obs('Conectando...');
      OBS.client = new OBSWebSocket();
      await OBS.client.connect(configs.obs.host, password);

      lib.console.obs('Conexion exitosa');
    } catch (error) {
      if (/ECONNREFUSED/.test(error.message)) {
        lib.console.obs('Verifica que tienes activado WebSocket Server. https://github.com/obsproject/obs-websocket/releases');
      } else if (/Authentication\sfailed/.test(error.message)) {
        lib.console.obs('Contraseña incorrecta');
      } else {
        lib.console.obs(error.message);
      }
      process.exit();
    }
  },
  clear: () => {
    OBS.client.call(
      'SetInputSettings',
      {
        inputName: 'obs-twitch-gift',
        inputSettings: {
          text: ``,
        },
      },
      (err, data) => {
        /* Error message and data. */
        console.error('Using call SetInputSettings:', err, data);
      }
    );
  },
  write: (text) => {
    OBS.client.call(
      'SetInputSettings',
      {
        inputName: 'obs-twitch-gift',
        inputSettings: {
          text,
        },
      },
      (err, data) => {
        /* Error message and data. */
        console.error('Using call SetInputSettings:', err, data);
      }
    );
  },
};

export default OBS;
