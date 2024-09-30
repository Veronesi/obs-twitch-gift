import { exec } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import lib from './lib.js';

// views
import WebDropMassive from './web/WebDropMassive.js';
import WebHome from './web/home.js';
import WebDropMassiveConfig from './web/dropmasiveconfig.js';
import WebDropSubsToday from './web/index.js';

const subIcon = '<svg width="20" height="20" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" data-a-selector="tw-core-button-icon" aria-hidden="true" class="ScIconSVG-sc-1q25cff-1 jpczqG"><g><path fill="#9047ff" d="M8.944 2.654c.406-.872 1.706-.872 2.112 0l1.754 3.77 4.2.583c.932.13 1.318 1.209.664 1.853l-3.128 3.083.755 4.272c.163.92-.876 1.603-1.722 1.132L10 15.354l-3.579 1.993c-.846.47-1.885-.212-1.722-1.132l.755-4.272L2.326 8.86c-.654-.644-.268-1.723.664-1.853l4.2-.583 1.754-3.77z"></path></g></svg>';

const Server = {
  http: null,
  router: new Map([]),
  get: (route, cb = () => { }) => {
    Server.router.set(route, cb);
    return Server;
  },
  resources: {
    favicon: (req, res) => {
      res.statusCode = 200;
      const image = fs.readFileSync('./public/favicon.ico');
      res.end(image);
    },
    image: (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/png');
      const image = fs.readFileSync('./public/image.png');
      res.end(image);
    },
    startButton: (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/png');
      const image = fs.readFileSync('./public/start-button.png');
      res.end(image);
    },
  },
  views: {
    home: (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(WebHome());
    },
    dropMassiveKeys: (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(WebDropMassive());
    },
    WebDropMassiveConfig: (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(WebDropMassiveConfig());
    },
    dropSubsKeyToday: (req, res) => {
      Server.handlers.startDropsKeysSubsToday();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(WebDropSubsToday());
    },
  },
  methods: {
    addUser: (req, res) => {
      const { params } = lib.parseUrl(req.url);
      const { username = '', numbershares = '1' } = params;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      if (!params.username) {
        res.end({});
        return;
      }

      Server.handlers.addUser(username, numbershares);
      res.end({});
    },
    dropMassiveKeyStart: (req, res) => {
      const { params } = lib.parseUrl(req.url);
      const textToShow = [];

      if (process.env.OBS_ENABLE) {
        if (params.CANTIDAD_PARTICIPANTES) textToShow.push('CANTIDAD_PARTICIPANTES');
        if (params.MESES_SYBSCRIPTO) textToShow.push('MESES_SYBSCRIPTO');
        if (params.PROBABILIDAD) textToShow.push('PROBABILIDAD');
        if (params.KEYS_RESTANTES) textToShow.push('KEYS_RESTANTES');
      }

      const dropsMinutes = Number(params.dropsMinutes);
      const { ponderate } = params;
      const clearListSelecction = params.clearListSelecction !== 'NUNCA_BORRAR';
      let clearAfterXDrops = 1;
      if (params.clearListSelecction === 'BORRAR_TIEMPO') clearAfterXDrops = Number(params.clearAfterXDrops);

      Server.handlers.dropMassiveKeyStart({ textToShow, dropsMinutes, ponderate, clearListSelecction, clearAfterXDrops });

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end('true');
    },
    reloadTable: (req, res) => {
      const { users, onceDropLog } = Server.handlers.reloadTable();

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      const body = {
        users: [],
        logs: [],
      };

      body.users = [...users]
        .map((user) => ({ username: user[0], numberOfShares: user[1].numberOfShares }))
        .reverse()
        .sort((a, b) => (a.numberOfShares > b.numberOfShares ? -1 : 1));

      body.logs = onceDropLog
        .split('\n')
        .reverse()
        .filter((e) => e);

      res.end(JSON.stringify(body));
    },

    reloadTableMassive: (req, res) => {
      const { users, winners } = Server.handlers.reloadTableMassive();

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      const body = {
        users: [],
        logs: [],
      };

      body.users = [...users]
        .map((user) => ({ username: user[0] }))
        .reverse();

      body.logs = [...winners].map(e => `${subIcon} ${e}`)
        .reverse();

      res.end(JSON.stringify(body));
    },

    dropKey: (req, res) => {
      const winners = Server.handlers.dropKey();

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(winners));
    },
  },
  handlers: {
    addUser: () => { },
    dropMassiveKeyStart: () => { },
    startDropsKeysSubsToday: () => { },
    reloadTableMassive: () => { },
    reloadTable: () => { },
    dropKey: () => { },
  },
  connect: (interactiveWebPort) => {
    Server.get('/', Server.views.home)
      .get('/favicon.ico', Server.resources.favicon)
      .get('/image.png', Server.resources.image)
      .get('/drop-massive-keys', Server.views.dropMassiveKeys)
      .get('/add-user', Server.methods.addUser)
      .get('/drop-massive-keys-start', Server.methods.dropMassiveKeyStart)
      .get('/drop-massive-keys-config', Server.views.WebDropMassiveConfig)
      .get('/drop-keys-subs-today', Server.views.dropSubsKeyToday)
      .get('/drop-key', Server.methods.dropKey)
      .get('/reload-table-massive', Server.methods.reloadTableMassive)
      .get('/reload-table', Server.methods.reloadTable)
      .get('/start-button.png', Server.resources.startButton);

    Server.http = http.createServer((req, res) => {
      const { url } = lib.parseUrl(req.url);
      try {
        const fn = Server.router.get(url);
        if (fn) {
          fn(req, res);
          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('401 not found');
      } catch (error) {
        lib.console.web(error.message);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('402 not found');
      }
    });

    Server.http.listen(interactiveWebPort, 'localhost', () => {
      lib.console.web(`Servidor corriendo en: http://localhost:${interactiveWebPort}/`);
      try {
        let command = '';
        const url = `http://localhost:${interactiveWebPort}/`;
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
            lib.console.server('Unsupported platform');
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
  },
};

export default Server;
