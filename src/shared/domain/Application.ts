import http from 'node:http';
import fs from 'node:fs';
import { FunctionRouter, Router } from "./Router";
import { terminal } from '../helper/terminal';

export class Application extends Router {
  http: http.Server;

  constructor() {
    super();
  }

  use = (path: string, router: Router) => {
    [...router.routes.entries()].forEach(route => {
      if (path && route[0]) {
        this.routes.set(`/${path}/${route[0]}`, route[1]);
        return
      }
      if (path) {
        this.routes.set(`/${path}`, route[1]);
        return;
      }
      if (route[0]) {
        this.routes.set(`/${route[0]}`, route[1]);
        return;
      }
      this.routes.set(`/`, route[1]);
    })
  }

  readFileFile(res: http.ServerResponse<http.IncomingMessage>, file: string) {
    try {
      if (!fs.existsSync(decodeURI('src' + file))) {
        throw new Error("File not exist");
      }
      var s = fs.createReadStream(decodeURI('src' + file));
      s.on('open', function () {
        res.setHeader('Content-Type', 'image/png');
        s.pipe(res);
      });
    } catch (e) {
      console.log(e);
    }
  }

  requestManager: FunctionRouter = (req, res) => {
    try {
      if (!req.url) throw new Error("url not found");
      if (req.url.startsWith('/public')) {
        this.readFileFile(res, req.url);
        return;
      }

      const handler = this.routes.get(req.url);
      if (!handler) throw new Error("path not exist");
      handler(req, res);
    } catch (error: any) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: true, message: error.message }));
    }
  }

  listen = (port: number) => {
    this.http = http.createServer(this.requestManager);
    this.http.listen(port, 'localhost', () => {
      terminal.web(`Server stated, http://localhost:${port}`);
    });
  }
}