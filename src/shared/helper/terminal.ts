export const terminal = {
  server: (msg: string) => console.log(`\x1b[30m\x1b[1m  SERVER  \x1b[0m ${msg}`),
  twitch: (msg: string) => console.log(`\x1b[45m\x1b[1m  Twitch  \x1b[0m ${msg}`),
  obs: (msg: string) => console.log(`\x1b[30m\x1b[1m    OBS   \x1b[0m ${msg}`),
  discord: (msg: string) => console.log(`\x1b[46m\x1b[1m Discord  \x1b[0m ${msg}`),
  web: (msg: string) => console.log(`\x1b[44m\x1b[1m  CPANEL  \x1b[0m ${msg}`),
  participant: (msg: string) => console.log(`\x1b[42m\x1b[1m   DROP   \x1b[0m ${msg}`),
}