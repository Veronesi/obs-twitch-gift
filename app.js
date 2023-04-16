import fs from 'node:fs';
import twitchClient from './twitch.js';
import obsClient from './obs.js';
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
  renderWinners: () => {
    return App.keys.reduce((acc, e, i) => `${acc}${e}${App.winners[i] ? ` => ${App.winners[i]}` : ''}\n`, '');
  },
  randomIntFromInterval: (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dropKey: async () => {
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
  start: async ({ passwordOBS, passwordTwitch }) => {
    const fileKeys = await fs.readFileSync('./keys.txt', 'utf8');
    App.keys = fileKeys.split('\n');
    App.twitch = await twitchClient.connect(App.chanel, App.username, passwordTwitch);
    App.obs = await obsClient.connect(passwordOBS);
    App.clearOBS();

    App.twitch.on('message', (channel, tags) => {
      if (!App.nIntervId) App.nIntervId = setInterval(App.dropKey, App.dropsMinutes * 1000 * 60);

      if (!App.users.has(tags.username)) App.users.set(tags.username, App.getEnries(tags));

      console.clear();
      console.log(
        `Participantes: ${App.users.size} ~ Ultimo ganador: "${App.lastWin}" (${App.users.get(App.lastWin)}) [Drops: ${App.winners.length}/${
          App.keys.length
        }]`
      );

      if (App.winners.length === App.keys.length) process.exit();
    });

    App.twitch.on('subscription', (channel, username, method, message, userstate) => {
      App.users.set(username, Number(userstate['badge-info']?.subscriber) || 1);
    });
  },
};

export default App;
