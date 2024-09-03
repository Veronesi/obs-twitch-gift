import http from 'node:http';
import { FunctionRouter, Router } from "./Router";
import { terminal } from '../helper/terminal';

export class Application extends Router {
  http: http.Server;

  constructor() {
    super();
  }

  use = (path: string, router: Router) => {
    [...router.routes.entries()].forEach(route => {
      this.routes.set(`/${path}/${route[0]}`, route[1]);
    })
  }

  requestManager: FunctionRouter = (req, res) => {
    try {
      if (!req.url) throw new Error("url not found");
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