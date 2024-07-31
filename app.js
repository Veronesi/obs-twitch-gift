import fs from 'node:fs';
import { exec } from 'node:child_process';
import http from 'node:http';
import axios from 'axios';
import twitchClient from './twitch.js';
import obsClient from './obs.js';
import DiscordClient from './discord.js';
import lib from './lib.js';

import jeffimage from './public/jeff-bezos-random.js';

import WebDropSubsToday from './web/index.js';
import WebHome from './web/home.js';
import WebDropMassiveConfig from './web/dropmasiveconfig.js';
import WebDropMassive from './web/WebDropMassive.js';

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
  // list of participants
  users: new Map(),
  // list of keys to dropped
  keys: [],
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
  // Map of username twitch : username discord
  discordNames: new Map(),
  // autosend keys or after send !drop in a channel
  autoSendKeys: true,
  // Discord cache users
  discordUsersCache: new Map(),
  IsStartDropsKeysSubsToday: false,

  start: async () => {
    // clear OBS
    obsClient.clear();
    DiscordClient.listenMessages(App.messageDiscord);

    App.HTTPServer = http.createServer((req, res) => {
      const { url, params } = lib.parseUrl(req.url);
      try {
        if (req.method === 'GET' && req.url === '/favicon.ico') {
          res.statusCode = 200;
          // res.setHeader('Content-Type', 'image/png');
          const image = fs.readFileSync('./public/favicon.ico');
          res.end(image);
          return;
        }

        if (req.method === 'GET' && url === '/drop-massive-keys') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(WebDropMassive());
          return;
        }

        if (req.method === 'GET' && url === '/add-user') {
          const { username = '', numbershares = '1' } = params;
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          if (!params.username) {
            res.end({});
            return;
          }

          App.WriteDropLog(`El baito dijo que ${username} participa`, username, +numbershares, 'onforce');
          App.addUser(username, +numbershares, null);
          res.end({});
          return;
        }

        if (req.method === 'GET' && url === '/drop-massive-keys-start') {
          if (process.env.OBS_ENABLE) {
            if (params.CANTIDAD_PARTICIPANTES) {
              App.textToShow.push('CANTIDAD_PARTICIPANTES');
            }
            if (params.MESES_SYBSCRIPTO) {
              App.textToShow.push('MESES_SYBSCRIPTO');
            }
            if (params.PROBABILIDAD) {
              App.textToShow.push('PROBABILIDAD');
            }
            if (params.KEYS_RESTANTES) {
              App.textToShow.push('KEYS_RESTANTES');
            }
          }

          App.dropsMinutes = Number(params.dropsMinutes);
          App.ponderate = params.ponderate;
          App.clearListSelecction = params.clearListSelecction !== 'NUNCA_BORRAR';
          if (params.clearListSelecction === 'BORRAR_TIEMPO') {
            App.clearAfterXDrops = Number(params.clearAfterXDrops);
          }
          App.startAutoDrop();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end('true');
          return;
        }

        if (req.method === 'GET' && url === '/drop-massive-keys-config') {
          App.startDropsKeysSubsToday();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(WebDropMassiveConfig());
          return;
        }

        if (req.method === 'GET' && url === '/drop-keys-subs-today') {
          App.startDropsKeysSubsToday();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(WebDropSubsToday());
          return;
        }

        if (req.method === 'GET' && url === '/') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(WebHome());
          return;
        }

        if (req.method === 'GET' && url === '/reload-table') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              users: [...App.users]
                .map((user) => ({ username: user[0], numberOfShares: user[1].numberOfShares }))
                .reverse()
                .sort((a, b) => (a.numberOfShares > b.numberOfShares ? -1 : 1)),
              logs: App.onceDropLog
                .split('\n')
                .reverse()
                .filter((e) => e),
            })
          );
          return;
        }
        if (req.method === 'GET' && url === '/drop-key') {
          // App.runOnceDrop = false;
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

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(winners));
          return;
        }

        if (req.method === 'GET' && req.url === '/image.png') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'image/png');
          const image = fs.readFileSync('./public/image.png');
          res.end(image);
          return;
        }

        if (req.method === 'GET' && req.url === '/jeff-bezos.png') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'image/png');
          const image = fs.readFileSync('./public/jeff-bezos.png');
          res.end(image);
          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('404 not found');
      } catch (error) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('404 not found');
      }
    });

    try {
      App.HTTPServer.listen(App.interactiveWebPort, 'localhost', () => {
        lib.console.web(`Servidor corriendo en: http://localhost:${App.interactiveWebPort}/`);
        try {
          let command = '';
          const url = `http://localhost:${App.interactiveWebPort}/`;
          switch (process.platform) {
            case 'darwin': // macOS
              command = `open ${url}`;
              break;
            case 'win32': // Windows
              command = `start ${url}`;
              break;
            case 'linux': // Linux
              command = `xdg-open ${url}`;
              break;
            default:
              console.log('Unsupported platform');
          }
          exec(command, (error) => {
            if (error) {
              lib.console.web(`error' ${error}`);
            }
          });
        } catch (error) {
          lib.console.web(`error' ${error.message}`);
        }
      });
    } catch (error) {
      lib.console.web(`error' ${error.message}`);
    }
  },

  startAutoDrop: () => {
    // read the keys
    const fileKeys = fs.readFileSync('./keys.txt', 'utf8');

    // init the keys object
    App.keys = fileKeys.split('\n').map((key) => ({
      // code of key
      code: key,
      // winner's Twitch username
      usernameTwitch: null,
      // winner's Discord username
      usernameDiscord: null,
      // the winner's claimed the key
      claimed: false,
      droped: false,
    }));

    // init the loop of the function who will drop keys
    if (!App.nIntervId) App.nIntervId = setInterval(App.dropKey, App.dropsMinutes * 1000 * 60);

    App.nextDrop = Date.now() + App.dropsMinutes * 1000 * 60;
    App.listentMessagesInTwitch();
    twitchClient.onSubscription(({ username, userstate }) => {
      App.users.set(username, lib.getMonthsSubscribed(userstate));
    });
  },

  startDropsKeysSubsToday: () => {
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

    // twitchClient.onMessage(({ tags }) => {
    //   App.addUser(tags.username, 1, null);
    // });
  },

  WriteDropLog: (msg, name, month, type) => {
    let message = '';
    lib.console.participant(msg);
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

    // console.log(message);
    App.onceDropLog += `${message}\n`;
  },
  addUser: async (username, month, id, isRandom = false) => {
    if (!App.runOnceDrop) return;

    const user = App.users.get(username);
    if (!user) {
      App.users.set(username, {
        numberOfShares: month,
        ids: id ? [id] : [],
      });
      return;
    }

    // check if is this gift is a GiftRandomSubscription content
    if (id && !isRandom && user.ids.includes(id)) return;

    // remove the "single subscription"
    if (id && isRandom && user.ids.includes(id)) {
      user.numberOfShares -= 1;
    }

    user.numberOfShares += month;
    if (id) {
      user.ids.push(id);
    }
    App.users.set(username, user);
  },
  connectOBS: async (password) => {
    await obsClient.connect(password);
  },
  connectTwitch: async (chanel, username, password) => {
    await twitchClient.connect(chanel, username, password);
  },
  connectDiscord: async (token, channel) => {
    await DiscordClient.connect(token, channel);
  },
  // drop the next key
  dropKey: async () => {
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

    // get the next key unassigned
    const getLastUnlinkedKey = App.keys.findIndex((key) => !key.dropped);

    const discordUsername = App.discordNames.get(users[rand]);
    const discordID = App.discordUsersCache.get(discordUsername);
    let claimed = false;
    if (discordUsername && discordID) {
      claimed = true;
      const message = `Código: ${App.keys[getLastUnlinkedKey].code}`;
      DiscordClient.sendMessage(discordID, message);
    }

    if (process.env.WEB_TOKEN && process.env.WEB_URL) {
      axios.post(process.env.WEB_URL, {
        key: App.keys[getLastUnlinkedKey].code,
        username: users[rand],
        hash: process.env.WEB_TOKEN,
      });
    }

    // update the key
    App.keys[getLastUnlinkedKey] = {
      // data not updated
      ...App.keys[getLastUnlinkedKey],
      // username in Twitch
      usernameTwitch: users[rand],
      // username in Discord
      usernameDiscord: App.discordNames.get(users[rand]) ?? null,
      dropped: true,
      claimed,
    };

    App.keysDropped += 1;
    App.lastWin = users[rand];

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
    fs.writeFileSync('./winners.txt', lib.renderWinners(App.keys));

    // update OBS message
    App.writeOBS(probabilty, participants);

    // finish proccess
    if (App.keysDropped === App.keys.length) {
      clearInterval(App.nIntervId);
      App.showMenu();
    }
  },
  // listen a new message in the Discord chanel
  messageDiscord: (msg) => {
    try {
      // get a username: somename#1234
      const usernameDiscord = `${msg.author.username}#${msg.author.discriminator}`;

      // check if the user has an unclaimed key
      // const keyIndex = App.keys.findIndex((key) => key.usernameDiscord === usernameDiscord && !key.claimed);
      const keys = App.keys.filter((key) => key.usernameDiscord === usernameDiscord && !key.claimed);

      // the user hasn't won any keys or hasn't linked their Discord account with a Twitch user
      if (!keys.length) {
        App.discordUsersCache.set(usernameDiscord, msg.author.id);
        msg.reply(
          // eslint-disable-next-line max-len, prettier/prettier
          `Si has ganado una clave por favor ve a https://www.twitch.tv/${process.argv[2] ?? process.env.TWITCH_CHANNEL} y escribe en el chat **!link ${usernameDiscord}**`
        );
        return;
      }

      // response the message in the chanel
      msg.reply(`VAMOOOOOOOOOOOOO\n Felicidades @${keys[0].usernameTwitch}`);

      // send a key via DM in Discord
      msg.author.send(keys.reduce((acc, key) => `${acc}Código: ${key.code}\n`, ''));

      // set the key claimed
      App.keys.forEach((key, index) => {
        if (key.usernameDiscord === usernameDiscord) {
          App.keys[index].claimed = true;
        }
      });
    } catch (error) {
      console.log('messageDiscord: ', error.message);
    }
  },
  writeOBS: async (probabilty, participants) => {
    const points = App.users.get(App.lastWin);
    let text = '';
    if (App.textToShow.includes('NOMBRE_GANADOR')) text += `Ultimo ganador: "${App.lastWin}"`;

    if (App.textToShow.includes('MESES_SYBSCRIPTO'))
      // eslint-disable-next-line no-nested-ternary
      text += ` (${App.lastWin ? (points > 1 ? `${points - 1} Meses` : 'Plebe') : ''})`;

    if (App.textToShow.includes('KEYS_RESTANTES')) text += ` [Drops: ${App.keysDropped}/${App.keys.length}]`;

    if (App.textToShow.includes('PROBABILIDAD')) text += ` ${probabilty}%`;

    if (App.textToShow.includes('CANTIDAD_PARTICIPANTES')) text += ` Cantidad de participantes: ${participants}`;

    obsClient.write(text);
  },
  listentMessagesInTwitch: () => {
    App.updateConsole();
    twitchClient.onMessage(({ tags, message }) => {
      // add the user in the participants list
      if (!App.users.has(tags.username)) App.users.set(tags.username, lib.getMonthsSubscribed(tags));

      // if (/^!drop/.test(message))
      //   twitchClient.sendMessage(channel, `@${tags.username} proximo drop en ${lib.getNextDrop(App.nextDrop)} (${App.users.size} participando)`);

      // command to link the Twitch username with Discord username
      const match = message.match(/!link\s(\w+#\d+)/);

      if (match) {
        const [, usernameDiscord] = match;
        App.discordNames.set(tags.username, usernameDiscord);
        // check if exist in cache
        const id = App.discordUsersCache.get(usernameDiscord);

        // update all keys who has win this user
        App.keys.forEach((key, i) => {
          if (key.usernameTwitch === tags.username) {
            App.keys[i].usernameDiscord = usernameDiscord;
          }
        });

        const keys = App.keys.filter((key) => key.usernameDiscord === usernameDiscord && !key.claimed);
        if (id && keys.length) {
          // get all keys
          const message = keys.reduce((acc, key) => `${acc}Código: ${key.code}\n`, '');
          App.keys.forEach((key, index) => {
            if (key.usernameDiscord === usernameDiscord) {
              App.keys[index].claimed = true;
            }
          });
          DiscordClient.sendMessage(id, message);
        }
      }
      App.updateConsole();
    });
  },
  updateConsole: () => {
    console.log(`Participantes: ${App.users.size}, Keys dropeadas: ${App.keysDropped}/${App.keys.length}`);
  },
  showMenu: async () => {
    const stdin = process.openStdin();
    stdin.addListener('data', () => {
      console.log(App.users);
    });
  },
};

export default App;
