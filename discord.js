import { Client, GatewayIntentBits } from 'discord.js';
import lib from './lib.js';

const Discord = {
  client: null,
  channel: null,
  connect: async (token, channel) => {
    try {
      if (!token) {
        throw new Error('Por fabor ingresa el token del BOT en el archivo .env en DISCORD_TOKEN');
      }

      if (!channel) {
        throw new Error('Por fabor ingresa el id del canal el archivo .env en DISCORD_CHANNEL_ID');
      }
      lib.console.discord('Conectando...');
      Discord.channel = channel;
      Discord.client = new Client({
        intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
      });

      Discord.client.login(token).catch((error) => {
        lib.console.discord(error.message);
        process.exit();
      });

      return new Promise((resolve) => {
        Discord.client.on('ready', async () => {
          lib.console.discord(`${Discord.client.user.tag} logeado correctamente\n`);
          resolve();
        });
      });
    } catch (error) {
      lib.console.discord();
      lib.console.discord(error.message);
      process.exit();
      return null;
    }
  },
  listenMessages: (fn = () => {}) => {
    Discord.client.on('messageCreate', (msg) => {
      if (msg.author.bot) {
        return;
      }

      if (msg.channelId !== Discord.channel) return;
      fn(msg);
    });
  },
};

export default Discord;
