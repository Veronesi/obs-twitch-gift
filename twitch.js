import tmi from 'tmi.js';
import lib from './lib.js';

const twitch = {
  client: null,
  connect: async (chanel, username, password) => {
    try {
      if (!chanel) {
        throw new Error('Por favor, ingresa un canal en el archivo .env en TWITCH_CHANNEL');
      }

      if (!username) {
        throw new Error('Por favor, ingresa un username en el archivo .env en TWITCH_USERNAME');
      }

      if (!password) {
        throw new Error('Por favor, ingresa el token de oauth en el archivo .env en TWITCH_OAUTH');
      }
      lib.console.twitch('Conectando...');
      twitch.client = new tmi.Client({
        options: { debug: false },
        connection: {
          secure: true,
          reconnect: true,
        },
        identity: {
          username,
          password,
        },
        channels: [chanel],
      });
      await twitch.client.connect();

      lib.console.twitch(`@${username} conectado exitosamente al canal /${chanel}`);
    } catch (error) {
      lib.console.twitch(error.message);
      process.exit();
    }
  },
  onSubscription: (fn = () => { }) => {
    twitch.client.on('subscription', (channel, username, method, message, userstate) => {
      fn({ channel, username, method, message, userstate });
    });
  },
  onGiftSubscription: (fn = () => { }) => {
    twitch.client.on('subgift', (channel, username, streakMonths, recipient, methods, tags) => {
      fn({ channel, username, methods, recipient, streakMonths, tags });
    });
  },
  onGiftRandomSubscription: (fn = () => { }) => {
    twitch.client.on('submysterygift', (channel, username, streakMonths, recipient, methods, tags) => {
      fn({ channel, username, methods, recipient, streakMonths, tags });
    });
  },
  onReSubscription: (fn = () => { }) => {
    twitch.client.on('resub', (channel, username, streakMonths, msg, tags, methods) => {
      fn({ channel, username, streakMonths, msg, tags, methods });
    });
  },
  onMessage: (fn = () => { }) => {
    twitch.client.on('message', (channel, tags, message) => {
      fn({ channel, tags, message });
    });
  },
  sendMessage: (channel = '', message = '') => {
    twitch.client.say(channel, message);
  },
};

export default twitch;
