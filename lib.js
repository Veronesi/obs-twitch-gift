const lib = {
  randomIntFromInterval: (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getMonthsSubscribed: (tags) => {
    if (!tags.subscriber) return 1;

    if (tags['badge-info']?.subscriber) {
      return Number(tags['badge-info'].subscriber);
    }
    return 2;
  },
  getNextDrop: (nextDrop) => {
    const time = nextDrop - Date.now();
    if (time < 60 * 1000) return `${(time / 1000).toFixed(0)} segundos`;
    const seconds = Number((time / 1000).toFixed(0)) % 60;
    return `${(seconds / (60 * 1000)).toFixed(0)} minutos y ${seconds % 60} segundos`;
  },
  // return a table with some information of keys and winners
  renderWinners: (keys = []) => {
    return keys.reduce(
      (acc, key) => `${acc}${key.code}${key.dropped ? ` | @${key.usernameTwitch} | ${key.claimed} | ${key.usernameDiscord}` : ''} \n`,
      ''
    );
  },
  console: {
    twitch: (msg) => console.log(`\x1b[45m\x1b[1m Twitch  \x1b[0m ${msg}`),
    obs: (msg) => console.log(`\x1b[30m\x1b[1m   OBS   \x1b[0m ${msg}`),
    discord: (msg) => console.log(`\x1b[46m\x1b[1m Discord \x1b[0m ${msg}`),
  },
};

export default lib;
