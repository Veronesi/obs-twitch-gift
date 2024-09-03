import { TwitchPlaysRouter } from "./twitch-plays/connection/router";
import { Application } from "./shared/domain/Application";
import { TwitchTmiRepository } from "./twitch/infrastructure/TwitchTmiRepository";
import { SubscribeTwitch } from "./twitch/application/Subscribe";
import { GiftSubsRouter } from "./gift-subs/connection/router";

const app = new Application();
const twitchRepository = new TwitchTmiRepository();
const subscribeTwitch = new SubscribeTwitch(twitchRepository);
const twitchPlaysRouter = new TwitchPlaysRouter(subscribeTwitch);

const giftSubsRouter = new GiftSubsRouter(subscribeTwitch);

twitchRepository.connect("jynxzi", "fanaes", "oauth:t3tb3xahwz6px81r3bn171bnx4gq8d");
subscribeTwitch.connect();

app.use('twitch-plays', twitchPlaysRouter);
app.use('gift-subs', giftSubsRouter);
app.listen(3000);