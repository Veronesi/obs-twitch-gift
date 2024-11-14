import { createServer } from "node:http";
import { Server as SocketServer } from "socket.io";

class Server {
  http;
  io: SocketServer;
  constructor() {
    this.http = createServer();
    this.io = new SocketServer(this.http, {
      // options
    });
  }

  start = () => {
    this.io.on("connection", (socket) => {
      // ...
      console.log(socket.id)
    });

    this.http.listen(3001);
  }
}

export const server = new Server();

