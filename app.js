import fs from 'node:fs';
import twitchClient from './twitch.js';
import obsClient from './obs.js';
import DiscordClient from './discord.js';
import configs from './configs.js';
import lib from './lib.js';
import axios from 'axios';

const App = {
  // list of participants
  users: new Map(),
  // list of keys to dropped
  keys: [],
  // number of keys dropped
  keysDropped: 0,
  lastWin: '-',
  nIntervId: null,
  // interval in minutes to drop keys
  dropsMinutes: 0.5,
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

  start: async () => {
    // read the keys
    const fileKeys = await fs.readFileSync('./keys.txt', 'utf8');

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

    // clear OBS
    obsClient.clear();
    DiscordClient.listenMessages(App.messageDiscord);

    // init the loop of the function who will drop keys
    if (!App.nIntervId) App.nIntervId = setInterval(App.dropKey, App.dropsMinutes * 1000 * 60);

    App.nextDrop = Date.now() + App.dropsMinutes * 1000 * 60;
    App.listentMessagesInTwitch();
    twitchClient.onSubscription(({ username, userstate }) => {
      App.users.set(username, lib.getMonthsSubscribed(userstate));
    });
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
          // eslint-disable-next-line max-len
          `Si has ganado una clave por favor ve a https://www.twitch.tv/${process.env.TWITCH_CHANNEL} y escribe en el chat **!link ${usernameDiscord}**`
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
    if (App.textToShow.includes(configs.i18n.show.NOMBRE_GANADOR)) text += `Ultimo ganador: "${App.lastWin}"`;

    if (App.textToShow.includes(configs.i18n.show.MESES_SYBSCRIPTO))
      // eslint-disable-next-line no-nested-ternary
      text += ` (${App.lastWin ? (points > 1 ? `${points - 1} Meses` : 'Plebe') : ''})`;

    if (App.textToShow.includes(configs.i18n.show.KEYS_RESTANTES)) text += ` [Drops: ${App.keysDropped}/${App.keys.length}]`;

    if (App.textToShow.includes(configs.i18n.show.PROBABILIDAD)) text += ` ${probabilty}%`;

    if (App.textToShow.includes(configs.i18n.show.CANTIDAD_PARTICIPANTES)) text += ` Cantidad de participantes: ${participants}`;

    obsClient.write(text);
  },
  listentMessagesInTwitch: () => {
    App.updateConsole();
    twitchClient.onMessage(({ channel, tags, message }) => {
      // add the user in the participants list
      if (!App.users.has(tags.username)) App.users.set(tags.username, lib.getMonthsSubscribed(tags));

      if (/^!drop/.test(message))
        twitchClient.sendMessage(channel, `@${tags.username} proximo drop en ${lib.getNextDrop(App.nextDrop)} (${App.users.size} participando)`);

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
    stdin.addListener('data', () => { });
  },
};

export default App;
