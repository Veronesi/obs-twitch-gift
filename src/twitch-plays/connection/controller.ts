
import fs from 'fs';
import { terminal } from "src/shared/helper/terminal";
import { FunctionRouter } from "../../shared/domain/Router";
import { SubscribeTwitch } from "../../twitch/application/Subscribe";
import { OnMessageProps } from "../../twitch/domain/TwitchRepository";
import { HttpController } from "src/shared/domain/HttpController";

export class TwitchPlaysController extends HttpController {
  connected = false;
  // mensajes obtenidos en el ultimo intervalo
  bufferMessages: string[] = [];
  // lista de mensajes agrupados por intervalo de tiempo
  messages: string[][] = [];
  // tiempo que limpiar el buffer en segundos
  timeBuffer = 10;
  // cantidad de buffers maximos almacenados
  MaxSizebuffer = 5;
  // flag para guardar o no los mensajes
  enable: boolean = false;
  SubscribeTwitch: SubscribeTwitch;
  // bucle para el buffer
  interval: NodeJS.Timer;
  sourcesReads: string[] = [];
  constructor(SubscribeTwitch: SubscribeTwitch) {
    super();
    this.SubscribeTwitch = SubscribeTwitch;
  }

  start: FunctionRouter = (req, res) => {
    try {
      if (this.enable) {
        this.bufferMessages = [];;
        this.messages = [];
        this.json(res, { error: false, message: 'El servidor ya se encuentra inicializado' });
        return;
      };

      // verificamos que solo una vez se subscriba a los mensajes
      if (!this.connected) {
        this.SubscribeTwitch.listenMessage(this.HandleGetMessage);
        terminal.server('start twitch-plays successfully');
      }
      this.connected = true;

      this.bufferMessages = [];;
      this.messages = [];
      this.enable = true;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.messages.length != this.MaxSizebuffer + 1) {
          this.messages.push(this.bufferMessages);
          this.bufferMessages = [];
          return;
        }

        // borramos el buffer mas antiguo
        // this.messages.shift();

        // agregamos el buffer a los mensajes
        // this.messages.push(this.bufferMessages);
        // this.bufferMessages = [];
      }, this.timeBuffer * 1000);
      this.json(res, { error: false, message: 'twitch-plays inicializado correctamente' });
    } catch (error: any) {
      terminal.server(error.message);
      this.json(res, { error: true, message: error.message, messages: [] });
    }
  }

  getRandomFile: FunctionRouter = (req, res) => {
    try {
      const folder = fs.readdirSync('src/public/her-story/').filter(e => !this.sourcesReads.includes(e));
      if (!folder.length) throw new Error("No se encontraron mas retos, por favor agregar mas en la carpeta public/her-story");
      let link = '';
      let t = '0';
      const position = Number.parseInt(String(Math.random() * folder.length));
      const source = folder[position];
      this.sourcesReads.push(source);

      if (source.includes('.music')) {
        link = fs.readFileSync(`src/public/her-story/${source}`, { encoding: 'utf-8' });

        // verificamos si es de tipo: https://www.youtube.com/watch?v=
        let match = link.match(/\/watch\?v\=/);
        if (match) {
          const [, match1] = link.split(/watch\?/);
          const options = match1.split('&') ?? [];
          link = options.find(e => e.includes('v='))?.replace('v=', '') ?? '';
          t = options.find(e => e.includes('t='))?.replace('t=', '') ?? '0';
        } else {
          // es de tipo youtu.be
          match = link.match(/youtu\.be\/(.*\?.*$)/);
          if (match && match[1].includes('?')) {
            const [_link, options] = match[1].split(/\?/);
            link = _link;
            t = options.split('&').find(e => e.includes('t='))?.replace('t=', '') ?? '0';
          } else if (match) {
            link = match[1];
          } else {
          }
        }
      }

      this.json(res, { source, format: source.includes('.music') ? 'music' : 'image', name: source.split('.')[0], link, t });
    } catch (error: any) {
      this.json(res, { error: true, message: error.message, source: null, format: null });
    }
  }

  getMessages: FunctionRouter = (req, res) => {
    try {
      const messages = [...this.bufferMessages, ...this.messages.flat()];
      const messagesSet = new Set(messages);
      const body = [...messagesSet].map((message) => ({
        message,
        counter: messages.filter(msg => msg == message).length
      })).sort((a, b) => b.counter > a.counter ? 1 : -1).slice(0, 25);
      this.json(res, { error: false, messages: body });
    } catch (error: any) {
      this.json(res, { error: true, message: error.message, messages: [] });
    }
  }

  clear = () => {
    this.bufferMessages = [];;
    this.messages = [];
  }

  restart: FunctionRouter = (req, res) => {
    this.enable = true;
    this.interval = setInterval(() => {
      if (this.messages.length != this.MaxSizebuffer + 1) {
        this.messages.push(this.bufferMessages);
        this.bufferMessages = [];
        return;
      }
    }, this.timeBuffer * 1000);
    this.json(res, { success: true });
  }

  stop: FunctionRouter = (req, res) => {
    this.enable = false;
    clearInterval(this.interval);
    this.json(res, { success: true });
  }

  renderHome: FunctionRouter = (req, res) => {
    this.html(res, 'src/public/html/twitch-plays/home.html');
  }

  renderHerStory: FunctionRouter = (req, res) => {
    this.html(res, 'src/public/html/her-story/home.html');
  }

  private HandleGetMessage = ({ message }: OnMessageProps) => {
    if (!this.enable) return;
    this.bufferMessages.push(message.trim().slice(0, 20).toLocaleUpperCase());
  }
}