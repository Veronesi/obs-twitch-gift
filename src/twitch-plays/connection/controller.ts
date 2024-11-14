
import fs from 'fs';
import { terminal } from "src/shared/helper/terminal";
import { FunctionRouter } from "../../shared/domain/Router";
import { SubscribeTwitch } from "../../twitch/application/Subscribe";
import { OnMessageProps } from "../../twitch/domain/TwitchRepository";
import { HttpController } from "src/shared/domain/HttpController";

type Strategy =
  // cualquiera que haya participado
  "RANDOM" |
  // subs que participaron
  "SUBS" |
  // crear una pool para ver quienes quieren participar
  "USE_POOL" |
  // solo participan los que fueron la opcion mas votada
  "WIN_MOST_POPULAR" |
  // solo participan los que dijeron una palabra clave
  "WIN_ACCEPTABLE";
type User = {
  isSub: boolean;
  messages: string[];
}

export class TwitchPlaysController extends HttpController {
  keywords = ["AFFAIR", "AVENTURA", "ARGUMENT", "DISCUSION", "ARREST", "ARRESTO", "ASK", "PREGUNTAR", "ATTIC", "ATICO", "BABY", "BEBE", "BAGS", "BOLSAS", "BAR", "BAR", "BEDROOM", "DORMITORIO", "BIRTHDAY", "CUMPLEAÑOS", "BLONDE", "RUBIA", "RUBIO", "BLOOD", "SANGRE", "BONE", "HUESO", "BROKEN", "ROTO", "BRUISE", "MORETON", "CAT FLAP", "GATERA", "CAR", "AUTO", "COCHE", "CELLAR", "SOTANO", "CHILDREN", "NIÑOS", "CLIMB", "TREPAR", "ESCALAR", "COFFEE", "CAFE", "CONFERENCE", "CONFERENCIA", "CONFESS", "CONFESAR", "COOKING", "COCINAR", "CRASH", "ACCIDENTE", "CHOQUE", "CRAZY", "LOCO LOCA", "DAD", "PAPA", "DEAD", "MUERTO", "MUERTA", "DEATH CAPS", "AMANITAS", "HONGOS VENENOSOS,", "DIANE", "DIANA", "DIARY", "DIARIO", "DIVORCE", "DIVORCIO", "DOLLHOUSE", "CASA DE MUÑECAS", "DOUG", "DOUG", "DREAMS", "SUEÑOS", "DRIVING", "CONDUCCION", "DROVE", "CONDUJE", "CONDUJO", "ELEANOR", "ELEONOR", "ELIMINATE", "ELIMINAR", "ERIC", "ERIC", "EVE", "EVA", "EXPENSE", "GASTO", "FAIRY", "HADA", "FAMILY", "FAMILIA", "FIGHT", "PELEA", "LUCHAR", "FINGERPRINTS", "HUELLAS DACTILARES", "FLORENCE", "FLORENCIA", "FRIDAY", "VIERNES", "FRIEND", "AMIGO", "AMIGA", "GIFT", "REGALO", "GLASGOW", "GLASGOW", "GLASS", "VIDRIO", "CRISTAL", "GLASSES", "GAFAS", "LENTES", "GLAZIER", "VIDRIERO", "VIDRIERA", "GONE", "DESAPARECIDO", "DESAPARECIDA", "GUITAR", "GUITARRA", "HAIR", "CABELLO", "PELO", "HANNAH", "HANNA", "HIT", "GOLPEAR", "HOUSE", "CASA", "HOTEL", "HOTEL", "HUSBAND", "ESPOSO", "ILL", "ENFERMO", "ENFERMA", "IMPORTANT", "IMPORTANTE", "INFERTILE", "INFERTIL", "INNOCENT", "INOCENTE", "KILL", "MATAR", "KNOCK CODE", "CODIGO DE GOLPETEO", "LAWYER", "ABOGADO", "ABOGADA", "LIE DETECTOR", "DETECTOR DE MENTIRAS", "LIFE", "VIDA", "LOCK", "CERRADURA", "LOVE", "AMOR", "MORNING", "MAÑANA", "MAGIC", "MAGIA", "MAGICAL", "MAGICO", "MAGICA", "MARRIED", "CASADO", "CASADA", "MARRIAGE", "MATRIMONIO", "MATCH", "CERILLO", "FOSFORO", "MIRROR", "ESPEJO", "MOTHER", "MADRE", "MURDER", "ASESINATO", "MUSHROOM", "HONGO", "SETA", "NAME", "NOMBRE", "NICE", "AGRADABLE", "NURSERY", "GUARDERIA", "PAGE", "PAGINA", "PARENTS", "PADRES", "POLICE", "POLICIA", "POISON", "VENENO", "PREGNANT", "EMBARAZADA", "PRINCE", "PRINCIPE", "PRINCESS", "PRINCESA", "PUB", "TABERNA", "BAR", "RAPUNZEL", "RAPUNZEL", "REFLECTION", "REFLEXION", "REFLEJO", "REMEMBER", "RECORDAR", "RULES", "REGLAS", "SECRET", "SECRETO", "SEVENTEEN", "DIECISIETE", "SEX", "SEXO", "SHARE", "COMPARTIR", "SIMON", "SIMON", "SING", "CANTAR", "SISTER", "HERMANA", "SLEEP", "DORMIR", "SOUND", "SONIDO", "STORY", "HISTORIA", "STREET", "CALLE", "STRONG", "FUERTE", "SUSPECT", "SOSPECHOSO. SOSPECHOSA", "SUSPICIOUS", "SOSPECHOSO", "SOSPECHOSA", "SYNC", "SINCRONIZAR", "TATTOO", "TATUAJE", "TAXI", "TAXI", "TEA", "TE", "THROAT", "GARGANTA", "THIN", "DELGADO ,DELGADA", "TICKET", "BOLETO", "TICKET", "TIN", "LATA", "TRAPPED", "ATRAPADO", "ATRAPADA", "TRY", "INTENTAR", "TWIN", "GEMELO", "GEMELA", "WATCH", "RELOJ", "MIRAR", "WEDDING", "BODA", "WEIRD", "RARO", "RARA", "WIFE", "ESPOSA", "WIG", "PELUCA", "WITCH", "BRUJA", "WOMAN", "MUJER", "KEKRO", "CARL", "DIANE", "DOMINO", "DOUG", "ELEANOR", "ERIC", "EVE", "FLORENCE", "HANNAH", "HELEN", "PETER", "SARAH", "SIMON", "VANAL"];
  connected = false;
  // datos de los participantes
  users: Map<string, User> = new Map();
  // estrategia a utilizar para elegir al que participara para ganar una vida
  strategySelected: Strategy = "RANDOM";
  // Cantidad de participantes para ganar una vida
  maxParticipants = 1;
  // utilizar buffer para ir borrando los mensjaes mas antiguos
  isBufferEnable = false;
  // lista de participantes con su respectivo mensaje
  listOfParticipants = new Map<string, string>([]);
  // maximo de participaciones en una sesión
  maxMessagesPerUser = 1;
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
  interval: NodeJS.Timeout;
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
        this.listOfParticipants.clear();
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

      // verificamos si esta activado el sistema de buffer de mensajes
      if (!this.isBufferEnable) {
        this.json(res, { error: false, message: 'twitch-plays inicializado correctamente' });
        return;
      }

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
    this.listOfParticipants.clear();
  }

  restart: FunctionRouter = (req, res) => {
    this.enable = true;
    // verificamos si esta activado el sistema de buffer de mensajes
    if (!this.isBufferEnable) {
      this.json(res, { success: true });
      return;
    }

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

  selectStrategy: FunctionRouter = (req, res) => {
    const { strategy = "RANDOM" } = req.body ?? {};
    this.strategySelected = strategy;
    this.json(res, { success: true });
  }

  selectParticipants: FunctionRouter = (req, res) => {
    let participants: string[] = [];

    if (this.strategySelected === "RANDOM") {
      participants = [...this.listOfParticipants.keys()];
    }

    if (this.strategySelected === "SUBS") {
      participants = [...this.listOfParticipants.keys()].filter(participant => this.users.get(participant)?.isSub);
    }

    if (this.strategySelected === "WIN_MOST_POPULAR") {
      const messages = [...this.bufferMessages, ...this.messages.flat()];
      const messagesSet = new Set(messages);
      const [popular, ..._] = [...messagesSet].map((message) => ({
        message,
        counter: messages.filter(msg => msg == message).length
      })).sort((a, b) => b.counter > a.counter ? 1 : -1)

      participants = [...this.listOfParticipants.keys()].filter(participant => this.listOfParticipants.get(participant) === popular.message);
    }

    if (this.strategySelected === "WIN_ACCEPTABLE") {
      participants = [...this.listOfParticipants.keys()].filter(participant => this.keywords.includes(this.listOfParticipants.get(participant) ?? ''));
    }

    const participantsSelected: string[] = [];
    let isSelecting = true;

    while (isSelecting && participantsSelected.length < this.maxParticipants) {
      if (participants.length <= this.maxParticipants) {
        participantsSelected.push(...participants);
        isSelecting = false;
      }

      let winner = Math.random() * participants.length;
      // en el caso de que de 1 para no tener un overflow
      winner = participants.length - 1;

      // verificamos si ya fue elegido 
      if (!participantsSelected.includes(participants[winner])) {
        participantsSelected.push(participants[winner]);
      }
    }

    this.json(res, { participants: participantsSelected });
  }

  private HandleGetMessage = ({ message, tags }: OnMessageProps) => {
    if (!this.enable) return;
    const username = tags["display-name"];
    if (!username) return;

    // verificamos si ya esta participando
    if (this.listOfParticipants.has(username)) return;

    // limpiamos el mensaje
    const msg = message.trim().slice(0, 20).toLocaleUpperCase();

    // verificamos si es la primmera vez que participa
    if (!this.users.has(username)) {
      this.users.set(username, { isSub: !!tags.subscriber, messages: [msg] })
    } else {
      const user = this.users.get(username) as User;
      this.users.set(username, { isSub: !!tags.subscriber, messages: [...user.messages, msg] })
    }

    this.listOfParticipants.set(username, msg);

    this.bufferMessages.push(msg);
  }
}