import tmi from 'tmi.js';

const twitch = {
  connect: async (chanel, username, password) => {
    try {
      console.log('Twitch: Conectando...');
      const client = new tmi.Client({
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
      await client.connect();
      console.log('Twitch: ', username, 'conectado exitosamente');
      return client;
    } catch (error) {
      console.error('Twitch:', error);
      process.exit();
      return null;
    }
  },
};

export default twitch;
