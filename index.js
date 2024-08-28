// @ts-ignore
import { config } from 'dotenv';
import fs from 'node:fs';
import App from './app.js';
import lib from './lib.js';

config();

(async () => {
  const existEnv = fs.existsSync('./.env');
  if (!existEnv) {
    lib.console.server('Creando archivo de configuracion .env ...');
    fs.writeFileSync(
      './.env',
      `
TWITCH_CHANNEL = ""
TWITCH_USERNAME = ""
TWITCH_OAUTH = ""
 
OBS_ENABLE = ""
OBS_PASSWORD = ""

DISCORD_ENABLE = ""
DISCORD_TOKEN = ""
DISCORD_GUILD_ID = ""
DISCORD_CHANNEL_ID = ""
    `
    );
    lib.console.server('Completa el archivo .env y vuelve a ejecutar la aplicación');
  }
  await App.connectTwitch(process.argv[2] ?? process.env.TWITCH_CHANNEL, process.env.TWITCH_USERNAME, process.env.TWITCH_OAUTH);
  await App.connectOBS(process.env.OBS_PASSWORD);

  App.interactiveWebPort = process.env.INTERACTIVE_PORT || 3000;
  App.start();
})();
