import http from 'node:http';

export type FunctionRouter = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => void;
export class Router {
  routes: Map<string, FunctionRouter> = new Map([]);
  get = (path: string, fn: FunctionRouter) => {
    this.routes.set(path, fn);
  }
}