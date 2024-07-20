// @ts-ignore
// import inquirer from 'inquirer';
import { config } from 'dotenv';
import fs from 'node:fs';
import App from './app.js';
// import configs from './configs.js';

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
 
OBS_ENABLE = ""
OBS_PASSWORD = ""

DISCORD_ENABLE = ""
DISCORD_TOKEN = ""
DISCORD_GUILD_ID = ""
DISCORD_CHANNEL_ID = ""
    `
    );
    console.log('Completa el archivo .env y vuelve a ejecutar la aplicaciòn');
  }
  await App.connectTwitch(process.argv[2] ?? process.env.TWITCH_CHANNEL, process.env.TWITCH_USERNAME, process.env.TWITCH_OAUTH);
  await App.connectOBS(process.env.OBS_PASSWORD);
  await App.connectDiscord(process.env.DISCORD_TOKEN, process.env.DISCORD_CHANNEL_ID);

  App.interactiveWebPort = process.env.INTERACTIVE_PORT || 3000;
  App.start();
})();
