import configs from './configs.js';
import tmi from 'tmi.js';

const twitch = {
  connect: async (password) => {
    try {
      console.log('Conect twitch...');
      const client = new tmi.Client({
        options: { debug: false },
        connection: {
          secure: true,
          reconnect: true
        },
        identity: {
          username: configs.twitch.username,
          password
        },
        channels: [configs.twitch.chanel]
      });
      
      await client.connect();
      return client;
    } catch (error) {
      console.error(error);
      process.exit();
    }
  }
}

export default twitch;