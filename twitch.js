import tmi from 'tmi.js';

const twitch = {
  connect: async (chanel, username, password) => {
    try {
      console.log('Conect twitch...');
      const client = new tmi.Client({
        options: { debug: false },
        connection: {
          secure: true,
          reconnect: true
        },
        identity: {
          username: username,
          password
        },
        channels: [chanel]
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