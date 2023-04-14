import twitchClient from './twitch.js';
import fs from 'node:fs';
import inquirer from 'inquirer';
import obsClient from './obs.js';
import configs from './configs.js';

const App = {
  users: new Map(),
  keys: [],
  winners: [],
  lastWin: "-",
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
  renderWinners: () => {
    return App.keys.reduce((acc, e, i) => acc + `${e}${App.winners[i] ? ` => ${App.winners[i]}` : ''}\n`, '');
  },
  randomIntFromInterval: (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  },
  dropKey: async () => {
    let users = [];
    switch (App.ponderate) {
      case configs.i18n.COMUNISTA:
        App.users.forEach((v) => {
          users = users.concat(k);
        })
        break;
      case configs.i18n.CAPITALISTA:
        App.users.forEach((v, k) => {
          users = users.concat(v > 1 ? [k, k] : [k]);
        })
        break;
      case configs.i18n.OLIGARQUIA:
        App.users.forEach((v, k) => {
          users = users.concat(new Array(v).fill(k))
        })
        break;
      default:
        process.exit();
    }

    const rand = App.randomIntFromInterval(0, users.length - 1);
    App.winners.push(users[rand]);
    App.lastWin = users[rand];

    App.countDrops += 1;
    if (App.clearListSelecction && App.countDrops >= App.clearAfterXDrops) {
      App.countDrops = 0;
      App.users.clear();
    }

    fs.writeFileSync('./winners.txt', App.renderWinners());
    App.writeOBS();
  },
  writeOBS: async () => {
    const points = App.users.get(App.lastWin);

    App.obs.call('SetInputSettings', {
      'inputName': 'obs-twitch-gift',
      'inputSettings': {
        'text': `Ultimo ganador: "${App.lastWin}" (${App.lastWin ? (points > 1 ? `${points - 1} Meses` : 'Plebe') : ''}) [Drops: ${App.winners.length}/${App.keys.length}]`
      }
    }, (err, data) => {
      /* Error message and data. */
      console.error('Using call SetInputSettings:', err, data);
    });
  },
  clearOBS: async () => {
    App.obs.call('SetInputSettings', {
      'inputName': 'obs-twitch-gift',
      'inputSettings': {
        'text': ``
      }
    }, (err, data) => {
      /* Error message and data. */
      console.error('Using call SetInputSettings:', err, data);
    });
  },
  getEnries: (tags) => {
    if (!tags.subscriber)
      return 1;

    if (tags['badge-info']?.subscriber) {
      return Number(tags['badge-info'].subscriber);
    }

    return 2;
  },
  start: async ({ passwordOBS, passwordTwitch }) => {
    const fileKeys = await fs.readFileSync('./keys.txt', 'utf8');
    App.keys = fileKeys.split('\n');
    App.twitch = await twitchClient.connect(App.chanel, App.username,passwordTwitch);
    App.obs = await obsClient.connect(passwordOBS);
    App.clearOBS();

    App.twitch.on('message', (channel, tags, message, self) => {
      if (!App.nIntervId)
        App.nIntervId = setInterval(App.dropKey, App.dropsMinutes * 1000 * 60);

      if (!App.users.has(tags.username))
        App.users.set(tags.username, App.getEnries(tags));


      console.clear();
      console.log(`Participantes: ${App.users.size} ~ Ultimo ganador: "${App.lastWin}" (${App.users.get(App.lastWin)}) [Drops: ${App.winners.length}/${App.keys.length}]`);

      if (App.winners.length === App.keys.length)
        process.exit();
    });

    App.twitch.on('subscription', (channel, username, method, message, userstate) => {
      App.users.set(username, Number(userstate['badge-info']?.subscriber) || 1)
    });
  },
};


(async () => {
  const passwordOBS = await inquirer
    .prompt([
      {
        type: 'password',
        name: 'pwd',
        message: 'Por favor, ingresa la constraseña del servidor del OBS',
      },
    ]);

    const username = await inquirer
    .prompt([
      {
        type: 'text',
        name: 'value',
        default: 'fanaes',
        message: 'Nombre de usuario del bot?:',
      },
    ]);
  App.username = username.value;

  const passwordTwitch = await inquirer
    .prompt([
      {
        type: 'password',
        name: 'pwd',
        message: 'Por favor, ingresa la el OAuth de Twitch',
      },
    ]);

    const chanel = await inquirer
    .prompt([
      {
        type: 'text',
        name: 'value',
        default: 'BaityBait',
        message: 'Cual es el nombre de tu canal?:',
      },
    ]);
  App.chanel = chanel.value;

  const dropsMinutes = await inquirer
    .prompt([
      {
        type: 'number',
        name: 'value',
        message: 'Cada cuantos minutos se hará el drop?:',
        default: 20,
      },
    ]);
  App.dropsMinutes = dropsMinutes.value;

  const ponderate = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'value',
        message: 'Utilizar ponderacion?:',
        choices: [
          configs.i18n.COMUNISTA, configs.i18n.CAPITALISTA, configs.i18n.OLIGARQUIA
        ],
      },
    ]);
  App.ponderate = ponderate.value;

  const clearList = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'value',
        message: 'Actualizar la lista de participantes:',
        choices: [
          configs.i18n.NUNCA_BORRAR, configs.i18n.BORRAR_TIEMPO, configs.i18n.BORRAR_POR_CADA_DROP,
        ],
      },
    ]);
  App.clearListSelecction = clearList.value !== configs.i18n.NUNCA_BORRAR;
  if (clearList.value === configs.i18n.BORRAR_TIEMPO) {
    const clearAfterXDrops = await inquirer
      .prompt([
        {
          type: 'number',
          name: 'value',
          default: 2,
          message: 'Cada cuantos drops se limpiara la lista de participantes?:',
        },
      ]);
    App.clearAfterXDrops = clearAfterXDrops.value;
  }

  App.start({ passwordOBS: passwordOBS.pwd, passwordTwitch: passwordTwitch.pwd });
})();