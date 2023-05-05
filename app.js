import fs from 'node:fs';
import twitchClient from './twitch.js';
import obsClient from './obs.js';
import DiscordClient from './discord.js';
import configs from './configs.js';

const App = {
  users: new Map(),
  keys: [],
  winners: [],
  lastWin: '-',
  nIntervId: null,
  dropsMinutes: 0.5,
  twitch: null,
  obs: null,
  ponderate: null,
  clearListSelecction: false,
  clearAfterXDrops: 1,
  countDrops: 0,
  chanel: '',
  username: '',
  textToShow: [],
  nextDrop: 0,
  discordNames: new Map(),
  renderWinners: () => {
    return App.keys.reduce((acc, e, i) => `${acc}${e}${App.winners[i] ? ` => ${App.winners[i]}` : ''}\n`, '');
  },
  randomIntFromInterval: (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dropKey: async () => {
    App.nextDrop = Date.now() + App.dropsMinutes * 1000 * 60;
    let users = [];
    switch (App.ponderate) {
      case configs.i18n.COMUNISTA:
        App.users.forEach((_, k) => {
          users = users.concat(k);
        });
        break;
      case configs.i18n.CAPITALISTA:
        App.users.forEach((v, k) => {
          users = users.concat(v > 1 ? [k, k] : [k]);
        });
        break;
      case configs.i18n.OLIGARQUIA:
        App.users.forEach((v, k) => {
          users = users.concat(new Array(v).fill(k));
        });
        break;
      default:
        process.exit();
    }

    const rand = App.randomIntFromInterval(0, users.length - 1);
    App.winners.push(users[rand]);
    App.lastWin = users[rand];
    const participants = App.users.size;
    const probabilty = (100 * (App.users.get(App.lastWin) / users.length)).toFixed(2);
    App.countDrops += 1;
    if (App.clearListSelecction && App.countDrops >= App.clearAfterXDrops) {
      App.countDrops = 0;
      App.users.clear();
    }

    fs.writeFileSync('./winners.txt', App.renderWinners());
    App.writeOBS(probabilty, participants);
  },
  messageDiscord: (msg) => {
    try {
      const user = App.discordNames.get(`${msg.author.username}#${msg.author.discriminator}`);
      if (!user) {
        msg.reply(
          // eslint-disable-next-line max-len
          `Si has ganado una clave por favor ve a https://www.twitch.tv/${process.env.TWITCH_CHANNEL} y escribe en el chat **!drop ${msg.author.username}#${msg.author.discriminator}**`
        );
        return;
      }
      // check if win
      const winnerPostion = App.winners.findIndex((e) => e === user);
      if (winnerPostion > -1) {
        msg.reply(`VAMOOOOOOOOOOOOO\n Felicidades @${user}`);
        msg.author.send(`Código: ${App.keys[winnerPostion]}`);
        return;
      }

      msg.reply(
        // eslint-disable-next-line max-len
        `Si has ganado una clave por favor ve a https://www.twitch.tv/${process.env.TWITCH_CHANNEL} y escribe en el chat **!drop ${msg.author.username}#${msg.author.discriminator}**`
      );
    } catch (error) {
      console.log(error);
    }
  },
  writeOBS: async (probabilty, participants) => {
    const points = App.users.get(App.lastWin);
    let text = '';
    if (App.textToShow.includes(configs.i18n.show.NOMBRE_GANADOR)) text += `Ultimo ganador: "${App.lastWin}"`;

    if (App.textToShow.includes(configs.i18n.show.MESES_SYBSCRIPTO))
      // eslint-disable-next-line no-nested-ternary
      text += ` (${App.lastWin ? (points > 1 ? `${points - 1} Meses` : 'Plebe') : ''})`;

    if (App.textToShow.includes(configs.i18n.show.KEYS_RESTANTES)) text += ` [Drops: ${App.winners.length}/${App.keys.length}]`;

    if (App.textToShow.includes(configs.i18n.show.PROBABILIDAD)) text += ` ${probabilty}%`;

    if (App.textToShow.includes(configs.i18n.show.CANTIDAD_PARTICIPANTES)) text += ` Cantidad de participantes: ${participants}`;

    App.obs.call(
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
  clearOBS: async () => {
    App.obs.call(
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
  getEnries: (tags) => {
    if (!tags.subscriber) return 1;

    if (tags['badge-info']?.subscriber) {
      return Number(tags['badge-info'].subscriber);
    }

    return 2;
  },
  start: async () => {
    const fileKeys = await fs.readFileSync('./keys.txt', 'utf8');
    App.keys = fileKeys.split('\n');
    App.clearOBS();
    App.discord.listenMessages(App.messageDiscord);
    if (!App.nIntervId) App.nIntervId = setInterval(App.dropKey, App.dropsMinutes * 1000 * 60);

    App.nextDrop = Date.now() + App.dropsMinutes * 1000 * 60;
    console.log('Esperando mensajes...');
    App.twitch.on('message', (channel, tags, message) => {
      if (!App.users.has(tags.username)) App.users.set(tags.username, App.getEnries(tags));

      if (/^!drop/.test(message)) App.twitch.say(channel, `@${tags.username} proximo drop en ${App.getNextDrop()}`);
      if (/^!win/.test(message)) App.twitch.whisper(tags.username, `proximo drop.`);
      // console.clear();
      console.log(
        `Participantes: ${App.users.size} ~ Ultimo ganador: "${App.lastWin}" (${App.users.get(App.lastWin)}) [Drops: ${App.winners.length}/${
          App.keys.length
        }]`
      );
      const match = message.match(/!link\s(\w+#\d+)/);

      if (match) {
        App.discordNames.set(match[1], tags.username);
      }

      if (App.winners.length === App.keys.length) process.exit();
    });

    App.twitch.on('subscription', (channel, username, method, message, userstate) => {
      App.users.set(username, Number(userstate['badge-info']?.subscriber) || 1);
    });
  },
  connectOBS: async (password) => {
    try {
      const obs = await obsClient.connect(password);
      App.obs = obs;
    } catch (error) {
      if (/ECONNREFUSED/.test(error.message)) {
        console.log('OBS: Verifica que tienes activado WebSocket Server. https://github.com/obsproject/obs-websocket/releases');
      }

      if (/Authentication\sfailed/.test(error.message)) {
        console.log('OBS: Contraseña incorrecta');
      }
      process.exit();
    }
  },
  connectTwitch: async (password) => {
    try {
      const twitch = await twitchClient.connect(App.chanel, App.username, password);
      App.twitch = twitch;
    } catch (error) {
      process.exit();
    }
  },
  connectDiscord: async (token, channel) => {
    try {
      await DiscordClient.connect(token, channel);
      App.discord = DiscordClient;
    } catch (error) {
      process.exit();
    }
  },
  getNextDrop: () => {
    const time = App.nextDrop - Date.now();
    if (time < 60 * 1000) return `${(time / 1000).toFixed(0)} segundos`;
    const seconds = Number((time / 1000).toFixed(0)) % 60;
    return `${(seconds / (60 * 1000)).toFixed(0)} minutos y ${seconds % 60} segundos`;
  },
};

export default App;
