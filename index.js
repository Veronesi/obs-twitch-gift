import inquirer from 'inquirer';
import { config } from 'dotenv';
import fs from 'node:fs';
import App from './app.js';
import configs from './configs.js';

config();

(async () => {
  const existEnv = await fs.existsSync('./.env');
  if (!existEnv) {
    console.log('Creando archivo de configuracion .env ...');
    fs.writeFileSync(
      './.env',
      `
TWITCH_CHANNEL = ""
TWITCH_USERNAME = ""
TWITCH_OAUTH = ""
                
OBS_PASSWORD = ""

DISCORD_TOKEN = ""
DISCORD_GUILD_ID = ""
DISCORD_CHANNEL_ID = ""
    `
    );
  }

  await App.connectTwitch(process.env.TWITCH_CHANNEL, process.env.TWITCH_USERNAME, process.env.TWITCH_OAUTH);
  await App.connectOBS(process.env.OBS_PASSWORD);
  await App.connectDiscord(process.env.DISCORD_TOKEN, process.env.DISCORD_CHANNEL_ID);

  const textToShow = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'value',
      message: 'Que datos mostrar en OBS?:',
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

  App.start();
})();
