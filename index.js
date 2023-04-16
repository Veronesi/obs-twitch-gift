import inquirer from 'inquirer';
import App from './app.js';
import configs from './configs.js';

(async () => {
  const textToShow = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'value',
      message: 'Utilizar ponderación?:',
      default: [configs.i18n.show.NOMBRE_GANADOR, configs.i18n.show.MESES_SYBSCRIPTO],
      choices: [
        configs.i18n.show.CANTIDAD_PARTICIPANTES,
        configs.i18n.show.KEYS_RESTANTES,
        configs.i18n.show.PROBABILIDAD,
        configs.i18n.show.NOMBRE_GANADOR,
        configs.i18n.show.MESES_SYBSCRIPTO,
      ],
    },
  ]);
  App.textToShow = textToShow.value;

  const passwordOBS = await inquirer.prompt([
    {
      type: 'password',
      name: 'pwd',
      message: 'Por favor, ingresa la constraseña del servidor del OBS',
    },
  ]);

  const username = await inquirer.prompt([
    {
      type: 'text',
      name: 'value',
      default: 'fanaes',
      message: 'Nombre de usuario del bot?:',
    },
  ]);
  App.username = username.value;

  const passwordTwitch = await inquirer.prompt([
    {
      type: 'password',
      name: 'pwd',
      message: 'Por favor, ingresa el OAuth de Twitch',
    },
  ]);

  const chanel = await inquirer.prompt([
    {
      type: 'text',
      name: 'value',
      default: 'BaityBait',
      message: 'Cual es el nombre de tu canal?:',
    },
  ]);
  App.chanel = chanel.value;

  const dropsMinutes = await inquirer.prompt([
    {
      type: 'number',
      name: 'value',
      message: 'Cada cuantos minutos se hará el drop?:',
      default: 20,
    },
  ]);
  App.dropsMinutes = dropsMinutes.value;

  const ponderate = await inquirer.prompt([
    {
      type: 'list',
      name: 'value',
      message: 'Utilizar ponderación?:',
      choices: [configs.i18n.COMUNISTA, configs.i18n.CAPITALISTA, configs.i18n.OLIGARQUIA],
    },
  ]);
  App.ponderate = ponderate.value;

  const clearList = await inquirer.prompt([
    {
      type: 'list',
      name: 'value',
      message: 'Actualizar la lista de participantes:',
      choices: [configs.i18n.NUNCA_BORRAR, configs.i18n.BORRAR_TIEMPO, configs.i18n.BORRAR_POR_CADA_DROP],
    },
  ]);
  App.clearListSelecction = clearList.value !== configs.i18n.NUNCA_BORRAR;
  if (clearList.value === configs.i18n.BORRAR_TIEMPO) {
    const clearAfterXDrops = await inquirer.prompt([
      {
        type: 'number',
        name: 'value',
        default: 2,
        message: 'Cada cuantos drops se limpiará la lista de participantes?:',
      },
    ]);
    App.clearAfterXDrops = clearAfterXDrops.value;
  }

  App.start({ passwordOBS: passwordOBS.pwd, passwordTwitch: passwordTwitch.pwd });
})();
