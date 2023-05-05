import { Client, GatewayIntentBits } from 'discord.js';

const Discord = {
  client: null,
  channel: null,
  connect: async (token, channel) => {
    try {
      console.log('Discord: Conectando...');
      Discord.channel = channel;
      Discord.client = new Client({
        intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
      });

      Discord.client.login(token);

      return new Promise((resolve) => {
        Discord.client.on('ready', async () => {
          console.log(`Discord: ${Discord.client.user.tag} logeado correctamente\n`);
          resolve();
        });
      });
    } catch (error) {
      console.log(error.message);
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
      // msg.reply(`Si has ganado una clave por favor ve a https://www.twitch.tv/${process.env.TWITCH_CHANNEL} y escribe en el chat **!drop ${msg.author.username}#${msg.author.discriminator}**`);
      // msg.reply('VAMOOOOOOOOOOOOO\n Felicidades @fanaes');
      // msg.author.send('Código: IGJO4IJG-43509-43OFM-34FMO4O');
    });
  },
};

export default Discord;
