
import { terminal } from "src/shared/helper/terminal";
import { FunctionRouter } from "../../shared/domain/Router";
import { SubscribeTwitch } from "../../twitch/application/Subscribe";
import { OnMessageProps } from "../../twitch/domain/TwitchRepository";
import { HttpController } from "src/shared/domain/HttpController";

export class TwitchPlaysController extends HttpController {
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
  constructor(SubscribeTwitch: SubscribeTwitch) {
    super();
    this.SubscribeTwitch = SubscribeTwitch;
  }

  start: FunctionRouter = (req, res) => {
    try {
      if (this.enable) throw new Error("El servidor ya se encuentra inicializado");
      this.SubscribeTwitch.listenMessage(this.HandleGetMessage);
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
        this.messages.shift();
        // agregamos el buffer a los mensajes
        // this.messages.push(this.bufferMessages);
        // this.bufferMessages = [];
      }, this.timeBuffer * 1000);
      terminal.server('start twitch-plays successfully');
      this.json(res, { error: false, message: 'twitch-plays inicializado correctamente' });
    } catch (error: any) {
      terminal.server(error.message);
      this.json(res, { error: true, message: error.message, messages: [] });
    }
  }

  getMessages: FunctionRouter = (req, res) => {
    try {
      const messages = [...this.bufferMessages, ...this.messages.flat()];
      const messagesSet = new Set(messages);
      const body = [...messagesSet].map((message) => ({
        message,
        counter: messages.filter(msg => msg === message).length
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

  stop = () => {
    this.enable = false;
    clearInterval(this.interval);
  }

  renderHome: FunctionRouter = (req, res) => {
    this.html(res, 'src/public/html/twitch-plays/home.html');
  }

  private HandleGetMessage = ({ message }: OnMessageProps) => {
    if (!this.enable) return;
    this.bufferMessages.push(message.slice(0, 20).toLocaleUpperCase());
  }
}