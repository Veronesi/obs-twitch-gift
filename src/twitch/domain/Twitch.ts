export interface Badges {
  admin?: string | undefined;
  bits?: string | undefined;
  broadcaster?: string | undefined;
  partner?: string | undefined;
  global_mod?: string | undefined;
  moderator?: string | undefined;
  vip?: string | undefined;
  subscriber?: string | undefined;
  staff?: string | undefined;
  turbo?: string | undefined;
  premium?: string | undefined;
  founder?: string | undefined;
  ["bits-leader"]?: string | undefined;
  ["sub-gifter"]?: string | undefined;
  [other: string]: string | undefined;
}

export interface BadgeInfo {
  subscriber?: string | undefined;
  [other: string]: string | undefined;
}

export interface CommonUserstate {
  badges?: Badges | undefined;
  "badge-info"?: BadgeInfo | undefined;
  color?: string | undefined;
  "display-name"?: string | undefined;
  emotes?: { [emoteid: string]: string[] } | undefined;
  id?: string | undefined;
  mod?: boolean | undefined;
  turbo?: boolean | undefined;
  "emotes-raw"?: string | undefined;
  "badges-raw"?: string | undefined;
  "badge-info-raw"?: string | undefined;
  "room-id"?: string | undefined;
  subscriber?: boolean | undefined;
  "user-type"?: "" | "mod" | "global_mod" | "admin" | "staff" | undefined;
  "user-id"?: string | undefined;
  "tmi-sent-ts"?: string | undefined;
  flags?: string | undefined;
  [paramater: string]: any;
}

export type SubMethod = "Prime" | "1000" | "2000" | "3000";

export interface SubMethods {
  prime?: boolean | undefined;
  plan?: SubMethod | undefined;
  planName?: string | undefined;
}

export interface UserNoticeState extends CommonUserstate {
  login?: string | undefined;
  message?: string | undefined;
  "system-msg"?: string | undefined;
}

export interface CommonSubUserstate extends UserNoticeState {
  "msg-param-sub-plan"?: SubMethod | undefined;
  "msg-param-sub-plan-name"?: string | undefined;
}

export interface SubUserstate extends CommonSubUserstate {
  "message-type"?: "sub" | "resub" | undefined;
  "msg-param-cumulative-months"?: string | boolean | undefined;
  "msg-param-should-share-streak"?: boolean | undefined;
  "msg-param-streak-months"?: string | boolean | undefined;
}

export interface ChatUserstate extends CommonUserstate {
  "message-type"?: "chat" | "action" | "whisper" | undefined;
  username?: string | undefined;
  bits?: string | undefined;
}

export interface CommonGiftSubUserstate extends CommonSubUserstate {
  "msg-param-recipient-display-name"?: string | undefined;
  "msg-param-recipient-id"?: string | undefined;
  "msg-param-recipient-user-name"?: string | undefined;
  "msg-param-months"?: boolean | string | undefined;
}

export interface SubGiftUserstate extends CommonGiftSubUserstate {
  "message-type"?: "subgift" | undefined;
  "msg-param-sender-count"?: string | boolean | undefined;
  "msg-param-origin-id": string;
}

export interface SubMysteryGiftUserstate extends CommonSubUserstate {
  "message-type"?: "submysterygift" | undefined;
  "msg-param-sender-count"?: string | boolean | undefined;
  "msg-param-origin-id": string;
}

export class Twitch {

}