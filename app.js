import fs from 'node:fs';
import twitchClient from './twitch.js';
import obsClient from './obs.js';
import Server from './server.js';
import lib from './lib.js';
import jeffimage from './public/jeff-bezos-random.js';

const App = {
  sources: {
    svg: {
      gift:
        // eslint-disable-next-line max-len
        '<svg  width="20" height="25" viewBox="0 0 20 20" aria-hidden="true"><path stroke="#00d6d6" stroke-width="1" fill="#028383" fill-rule="evenodd" d="M16 6h2v6h-1v6H3v-6H2V6h2V4.793c0-2.507 3.03-3.762 4.803-1.99.131.131.249.275.352.429L10 4.5l.845-1.268a2.81 2.81 0 0 1 .352-.429C12.969 1.031 16 2.286 16 4.793V6zM6 4.793V6h2.596L7.49 4.341A.814.814 0 0 0 6 4.793zm8 0V6h-2.596l1.106-1.659a.814.814 0 0 1 1.49.451zM16 8v2h-5V8h5zm-1 8v-4h-4v4h4zM9 8v2H4V8h5zm0 4H5v4h4v-4z" clip-rule="evenodd"></path></svg>',
      prime:
        // eslint-disable-next-line max-len
        '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#4185f3" fill-rule="evenodd" d="M18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z" clip-rule="evenodd"></path></svg>',
      sub:
        // eslint-disable-next-line max-len
        '<svg width="20" height="20" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" data-a-selector="tw-core-button-icon" aria-hidden="true" class="ScIconSVG-sc-1q25cff-1 jpczqG"><g><path fill="#9047ff" d="M8.944 2.654c.406-.872 1.706-.872 2.112 0l1.754 3.77 4.2.583c.932.13 1.318 1.209.664 1.853l-3.128 3.083.755 4.272c.163.92-.876 1.603-1.722 1.132L10 15.354l-3.579 1.993c-.846.47-1.885-.212-1.722-1.132l.755-4.272L2.326 8.86c-.654-.644-.268-1.723.664-1.853l4.2-.583 1.754-3.77z"></path></g></svg>',
      // eslint-disable-next-line no-undef
      force: `<img height="20" width="20" src="${jeffimage}" />`,
    },
  },
  // Lista de participantes
  users: new Map(),
  // number of keys dropped
  keysDropped: 0,
  lastWin: '-',
  nIntervId: null,
  // PORT for interactive web
  interactiveWebPort: null,
  HTTPServer: null,
  // onceDrop
  onceDropLog: '',
  winners: [],
  winnersMassive: [],
  runOnceDrop: true,
  // drop after X time
  timeToDrop: null,
  // interval in minutes to drop keys
  dropsMinutes: null,
  // type of ponderation to win key
  ponderate: null,
  // clear participants after some event
  clearListSelecction: false,
  // clear participants after x drops
  clearAfterXDrops: 1,
  // use to clear participant after x drops
  countDrops: 0,
  textToShow: [],
  nextDrop: 0,
  IsStartDropsKeysSubsToday: false,

  start: async () => {
    try {
      // limpiamos OBS
      obsClient.clear();
      obsClient.write('Aún no hay ningún ganador');

      // inicializamos el servidor HTTP
      App.HTTPServer = Server;
      App.HTTPServer.handlers.addUser = App.handlersHTTP.addUser;
      App.HTTPServer.handlers.dropMassiveKeyStart = App.handlersHTTP.dropMassiveKeyStart;
      App.HTTPServer.handlers.startDropsKeysSubsToday = App.handlersHTTP.startDropsKeysSubsToday;
      App.HTTPServer.handlers.reloadTable = App.handlersHTTP.reloadTable;
      App.HTTPServer.handlers.reloadTableMassive = App.handlersHTTP.reloadTableMassive;
      App.HTTPServer.handlers.dropKey = App.handlersHTTP.dropKey;
      App.HTTPServer.connect(App.interactiveWebPort);
    } catch (error) {
      lib.console.server(error.message);
    }
  },

  startDropsKeysSubsToday: () => {
    try {
      // verificamos si ya se inicializo el dropeo de claves
      if (App.IsStartDropsKeysSubsToday) return;
      App.IsStartDropsKeysSubsToday = true;

      lib.console.web('Esperando subscripciones...');

      twitchClient.onSubscription(({ username, userstate }) => {
        App.WriteDropLog(userstate['system-msg'], username, 1, 'onSubscription');
        App.addUser(username, 1, null);
      });

      twitchClient.onGiftSubscription(({ username, tags }) => {
        App.WriteDropLog(tags['system-msg'], username, 1, 'onGiftSubscription');
        App.addUser(username, 1, tags['msg-param-origin-id']);
      });

      twitchClient.onGiftRandomSubscription(({ username, streakMonths, methods }) => {
        App.WriteDropLog(methods['system-msg'], username, streakMonths, 'onGiftRandomSubscription');
        App.addUser(username, streakMonths, methods['msg-param-origin-id'], true);
      });

      twitchClient.onReSubscription(({ username, tags }) => {
        App.WriteDropLog(tags['system-msg'], username, 1, 'onReSubscription');
        App.addUser(username, 1, null);
      });
    } catch (error) {
      lib.console.server(error.message);
    }
  },

  WriteDropLog: (msg, name, month, type) => {
    try {
      let message = '';
      lib.console.twitch(msg);
      switch (type) {
        case 'onSubscription':
          if (msg.includes('Prime.')) {
            message = `${App.sources.svg.prime}${name} se subscribió con el Prime`;
          } else {
            message = `${App.sources.svg.sub}${name} se subscribió`;
          }
          break;
        case 'onGiftSubscription':
          if (msg.match(/(?:sub\sto\s(\w+)!(?:\s.*!)*$)/)) {
            message = `${App.sources.svg.gift}${name} regaló una sub a ${msg.match(/(?:sub\sto\s(\w+)!(?:\s.*!)*$)/)[1]}`;
          } else {
            message = `${App.sources.svg.gift}${name} regaló una sub`;
          }
          break;
        case 'onGiftRandomSubscription':
          if (msg.match(/gifting\s(\d+)\s/)) {
            message = `${App.sources.svg.gift}${name} regaló ${msg.match(/gifting\s(\d+)\s/)[1]} subs`;
          } else {
            message = `${App.sources.svg.gift}${name} regaló unas subs`;
          }
          break;
        case 'onReSubscription':
          if (msg.includes('Prime.')) {
            message = `${App.sources.svg.prime}${name} se resubscribió con el Prime`;
          } else {
            message = `${App.sources.svg.sub}${name} se resubscribió`;
          }
          break;
        case 'onforce':
          message = `${App.sources.svg.force} El baito dijo que ${name} participa`;
          break;
        default:
          message = `${name} está participando`;
          break;
      }

      App.onceDropLog += `${message}\n`;
    } catch (error) {
      lib.console.server(error.message);
    }
  },
  addUser: async (username, month, id, isRandom = false) => {
    try {
      if (!App.runOnceDrop) return;

      const user = App.users.get(username);

      // es un viewer nuevo
      if (!user) {
        App.users.set(username, {
          numberOfShares: month,
          ids: id ? [id] : [],
        });
        return;
      }

      // Verificamos si esa sub es una regalada
      if (id && !isRandom && user.ids.includes(id)) return;

      // Verificamos si es una sub random regalada
      if (id && isRandom && user.ids.includes(id)) user.numberOfShares -= 1;

      user.numberOfShares += month;
      if (id) {
        user.ids.push(id);
      }
      App.users.set(username, user);
    } catch (error) {
      lib.console.server(error.message);
    }
  },
  connectOBS: async (password) => {
    await obsClient.connect(password);
  },
  connectTwitch: async (chanel, username, password) => {
    await twitchClient.connect(chanel, username, password);
  },
  // drop the next key
  dropKey: async () => {
    try {
      // calculate the time when will have a new drop
      App.nextDrop = Date.now() + App.dropsMinutes * 1000 * 60;

      let users = [];

      // calculate ponderations
      switch (App.ponderate) {
        case 'COMUNISTA':
          App.users.forEach((_, k) => {
            users = users.concat(k);
          });
          break;
        case 'CAPITALISTA':
          App.users.forEach((v, k) => {
            users = users.concat(v > 1 ? [k, k] : [k]);
          });
          break;
        case 'OLIGARQUIA':
          App.users.forEach((v, k) => {
            users = users.concat(new Array(v).fill(k));
          });
          break;
        default:
          process.exit();
      }

      // get a random index to get a new winner
      const rand = lib.randomIntFromInterval(0, users.length - 1);

      const lastWin = users[rand];
      App.lastWin = lastWin;

      // update the key
      App.winnersMassive.push(lastWin);

      App.keysDropped += 1;

      const participants = App.users.size;
      const probabilty = (100 * (App.users.get(App.lastWin) / users.length)).toFixed(2);
      App.countDrops += 1;

      // check if need it clear the list of participants
      if (App.clearListSelecction && App.countDrops >= App.clearAfterXDrops) {
        App.countDrops = 0;
        App.users = new Map();
      }
      App.updateConsole();

      // update the file with the winners
      fs.appendFileSync('./winners.txt', `\n${lastWin}`);
      lib.console.participant(`"${lastWin}" ganó una clave`);

      // update OBS message
      App.writeOBS(probabilty, participants);
    } catch (error) {
      lib.console.server(error.message);
    }
  },
  writeOBS: async (probabilty, participants) => {
    try {
      const points = App.users.get(App.lastWin);
      let text = '';
      text += `Ultimo ganador: "${App.lastWin}"`;

      if (App.textToShow.includes('MESES_SYBSCRIPTO'))
        // eslint-disable-next-line no-nested-ternary
        text += ` (${App.lastWin ? (points > 1 ? `${points - 1} Meses` : 'Plebe') : ''})`;

      if (App.textToShow.includes('PROBABILIDAD')) text += ` ${probabilty}%`;

      if (App.textToShow.includes('CANTIDAD_PARTICIPANTES')) text += ` Cantidad de participantes: ${participants}`;

      obsClient.write(text);
    } catch (error) {
      lib.console.server(error.message);
    }

  },
  listentMessagesInTwitch: () => {
    try {
      App.updateConsole();
      twitchClient.onMessage(({ tags, message }) => {
        // add the user in the participants list
        let numberOfShares = 1;
        // calculate ponderations
        switch (App.ponderate) {
          case 'COMUNISTA':
            numberOfShares = 1;
            break;
          case 'CAPITALISTA':
            numberOfShares = 2;
            break;
          case 'OLIGARQUIA':
            numberOfShares = lib.getMonthsSubscribed(tags)
            break;
          default:
            process.exit();
        }

        if (!App.users.has(tags.username)) App.users.set(tags.username, {
          numberOfShares,
          ids: [1],
        });
        App.updateConsole();
      });
    } catch (error) {
      lib.console.server(error.message);
    }
  },
  updateConsole: () => {
    // console.log(`Participantes: ${App.users.size}, Keys dropeadas: ${App.keysDropped}`);
  },
  showMenu: async () => {
    try {
      const stdin = process.openStdin();
      stdin.addListener('data', () => {
        lib.console.server(`Cantidad de participantes: ${App.users.size}`);
      });
    } catch (error) {
      lib.console.server(error.message);
    }
  },
  handlersHTTP: {
    addUser: (username, numbershares) => {
      try {
        App.WriteDropLog(`El baito dijo que ${username} participa`, username, +numbershares, 'onforce');
        App.addUser(username, +numbershares, null);
      } catch (error) {
        lib.console.web(error.message);
      }
    },
    dropMassiveKeyStart: ({ textToShow, dropsMinutes, ponderate, clearListSelecction, clearAfterXDrops }) => {
      try {
        App.textToShow = textToShow;
        App.dropsMinutes = dropsMinutes;
        App.ponderate = ponderate;
        App.clearListSelecction = clearListSelecction;
        App.clearAfterXDrops = clearAfterXDrops;

        fs.appendFileSync('./winners.txt', `\n${new Date()}`);

        // inicializamos el loop para el dropeo
        if (!App.nIntervId) App.nIntervId = setInterval(App.dropKey, App.dropsMinutes * 1000 * 60);

        App.nextDrop = Date.now() + App.dropsMinutes * 1000 * 60;
        App.listentMessagesInTwitch();
      } catch (error) {
        lib.console.web(error.message);
      }
    },
    startDropsKeysSubsToday: () => {
      try {
        App.startDropsKeysSubsToday();
      } catch (error) {
        lib.console.web(error.message);
      }

    },
    reloadTableMassive: () => ({
      users: App.users,
      winners: App.winnersMassive,
    }),
    reloadTable: () => ({
      users: App.users,
      onceDropLog: App.onceDropLog,
    }),
    dropKey: () => {
      try {
        const winners = [];
        let users = [];
        App.users.forEach((v, k) => {
          users = users.concat(new Array(v.numberOfShares).fill(k));
        });
        users = users.filter((e) => !App.winners.includes(e));
        while (winners.length < 2 && users.length > 0) {
          const rand = lib.randomIntFromInterval(0, users.length - 1);
          winners.push(users[rand]);
          App.winners.push(users[rand]);
          // eslint-disable-next-line no-loop-func
          users = users.filter((e) => e !== users[rand]);
        }
        lib.console.participant(`"${winners[0]}" Ganó la primera clave. Suplente: "${winners[1]}"`);
        return winners;
      } catch (error) {
        lib.console.web(error.message);
        return [];
      }
    },
  },
};

export default App;
