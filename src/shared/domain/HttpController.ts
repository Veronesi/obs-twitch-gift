import fs from 'node:fs';
import http from 'node:http';

export abstract class HttpController {
  html = (res: http.ServerResponse<http.IncomingMessage>, html: string) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    this.readModuleFile(html, (data: string) => {
      res.end(data);
    })
  }

  json(res: http.ServerResponse<http.IncomingMessage>, json: Object) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json));
  }

  readModuleFile(path: string, cb: Function) {
    try {
      var filename = require.resolve(path);
      fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
        if (err) throw new Error(err.message);
        cb(data);
      });
    } catch (e) {
      cb(e);
    }
  }

  image(res: http.ServerResponse<http.IncomingMessage>, name: string) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    this.readModuleFile('src/public/' + name, (data: string) => {
      res.end(data);
    })
  }
}