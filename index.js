import twitchClient from './twitch.js';
import fs from 'node:fs';
import inquirer from 'inquirer';
import obsClient from './obs.js';

const App = {
  users: [],
  keys: [],
  winners: [],
  lastWin: "init",
  nIntervId: null,
  dropsMinutes: 0.5,
  twitch: null,
  obs: null,
  renderWinners: () => {
    return App.keys.reduce((acc, e, i) => acc + `${e}${App.winners[i] ? ` => ${App.winners[i]}` : ''}\n`, '');
  },
  randomIntFromInterval: (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  },
  dropKey: async () => {
    const rand = App.randomIntFromInterval(0, App.users.length - 1);
    App.winners.push(App.users[rand]);
    console.log(App.users[rand]);
    App.lastWin = App.users[rand];
    fs.writeFileSync('./winners.txt', App.renderWinners());
    App.writeOBS();
  },
  writeOBS: async () => {
    App.obs.call('SetInputSettings', {
      'inputName': 'Example Title',
      'inputSettings': {
        'text': `${App.winners.length} - ${App.lastWin}`
      }
    }, (err, data) => {
      /* Error message and data. */
      console.log('Using call SetInputSettings:', err, data);
    });
  },
  clearOBS: async () => {
    App.obs.call('SetInputSettings', {
      'inputName': 'Example Title',
      'inputSettings': {
        'text': ``
      }
    }, (err, data) => {
      /* Error message and data. */
      console.log('Using call SetInputSettings:', err, data);
    });
  },
  start: async ({passwordOBS, passwordTwitch}) => {
    const fileKeys = await fs.readFileSync('./keys.txt', 'utf8');
    App.keys = fileKeys.split('\n');
    App.twitch = await twitchClient.connect(passwordTwitch);
    App.obs = await obsClient.connect(passwordOBS);
    App.twitch.on('message', (channel, tags, message, self) => {
      if (!App.nIntervId) {
        App.nIntervId = setInterval(App.dropKey, App.dropsMinutes * 1000 * 60);
      }

      if (!App.users.includes(tags.username))
        App.users.push(tags.username);

      if (App.winners.length === App.keys.length)
        process.exit();
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

  const passwordTwitch = await inquirer
  .prompt([
    {
      type: 'password',
      name: 'pwd',
      message: 'Por favor, ingresa la el OAuth de Twitch',
    },
  ]);
  App.start({passwordOBS: passwordOBS.pwd, passwordTwitch: passwordTwitch.pwd});
})();





// import inquirer from 'inquirer';
// (async () => {
//   const answer1 = await inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'reptiles',
//       message: 'Reinicio de la lista de participantes:',
//       choices: [
//         'Desde que se empezo a correr el programa', 'Reiniciar la lista luego de cada clave sorteada', 'Reiniciar la lista cada 1 hora',
//       ],
//     },
//   ]);

//   const answer2 = await inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'reptiles',
//       message: 'Quienes participaran en el sorteo?',
//       choices: [
//         'Todos', 'Subscriptores',
//       ],
//     },
//   ]);

//   if(answer.reptiles == 'Desde que se empezo a correr el programa') {
//     console.log('ok');
//   }
//   console.log('corriendo...');
// })();