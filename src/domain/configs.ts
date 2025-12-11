import { Log } from "src/libs/log";
import { Category } from "../apps/game-awards.application";
import { FileSystem } from "../libs/file-system";
import { OBS } from "../libs/OBS";
import { Twitch } from "../libs/Twitch";
import { container, singleton } from "tsyringe";

@singleton()
export class Configs {
  userDataPath: string = "";
  // twitch
  twitch: {
    username: string;
    oauth: string;
    channels: string;
  } = {
    username: "fanaes",
    oauth: "",
    channels: "baitybait",
  };

  obs: {
    host: string;
    password: string;
    color1: string;
    color2: string;
  } = {
    host: "ws://127.0.0.1:4455",
    password: "ru8qNitRPP4Gw7BC",
    color1: "#ff0000",
    color2: "#ffbb00",
  };

  gameAwards: { categories: Category[] } = {
    categories: [
      {
        name: "Game of the Year",
        id: "game-of-the-year",
        voted: false,
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/expedition33.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-1.jpg",
            name: "Death Stranding 2: On The Beach",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/donkey_kong_banaza-1.jpg",
            name: "Donkey Kong Bananza",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hades_2.jpg",
            name: "Hades II",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hollow_knight_silksong-2.jpg",
            name: "Hollow Knight: Silksong",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/kcd2.jpg",
            name: "Kingdom Come: Deliverance II",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "Best Game Direction",
        id: "best-game-direcction",
        voted: false,
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/expedition33.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-2.jpg",
            name: "Death Stranding 2: On The Beach",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/ghost_yotei-2.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hades_2.jpg",
            name: "Hades II",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/split_fiction-2.jpg",
            name: "Split Fiction",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best narrative",
        voted: false,
        id: "best-narrative",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/expedition33-3.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-4.jpg",
            name: "Death Stranding 2: On The Beach",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/ghost_yotei-2.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/kcd2.jpg",
            name: "Kingdom Come: Deliverance II",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/silent_hill_f.jpg",
            name: "Silent Hill f",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best art direction",
        voted: false,
        id: "best-art-direction",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/death_stranding_2.jpg",
            name: "Death Stranding 2: On The Beach",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ghost_yotei.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hades_2.jpg",
            name: "Hades II",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hollow_knight_silksong-1.jpg",
            name: "Hollow Knight: Silksong",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best score and music",
        voted: false,
        id: "best-score-and-music",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hollow_knight_silksong.jpg",
            name: "Christopher Larkin",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hades_2-4.jpg",
            name: "Darren Korb",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33-2.jpg",
            name: "Lorien Testard",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ghost_yotei.jpg",
            name: "Toma Otowa",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/death_stranding_2.jpg",
            name: "Woodkid and Ludvig Forssell",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best audio design",
        voted: false,
        id: "best-audio-design",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/battlefield6.jpg",
            name: "Battlefield 6",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33-2.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-2.jpg",
            name: "Death Stranding 2: On the Beach",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ghost_yotei.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/silent_hill_f.jpg",
            name: "Silent Hill f",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best performance",
        voted: false,
        id: "best-performance",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/tga25_benstarr.png",
            name: "Ben Starr",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/tga25_charliecox.png",
            name: "Charlie Cox",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/erika_ishii.jpg",
            name: "Erika Ishii",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/tga25_jenniferenglish.png",
            name: "Jennifer English",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/konatsu_kato.jpg",
            name: "Konatsu Kato",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/troy_baker-1.jpg",
            name: "Troy Baker",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "innovation in accessibility",
        voted: false,
        id: "innovation-in-accessibility",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/assassins_creed_shadows.jpg",
            name: "Assassin’s Creed Shadows",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/atomfall.jpg",
            name: "Atomfall",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/doom_dark_ages-1.jpg",
            name: "Doom: The Dark Ages",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/eafc_26-1.jpg",
            name: "EA Sports FC 26",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/south_of_midnight-1.jpg",
            name: "South of Midnight",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "games for impact",
        voted: false,
        id: "games-for-impact",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/consume_me.jpg",
            name: "Consume Me",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/despelote-1.jpg",
            name: "Despelote",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/lost_records.jpg",
            name: "Lost Records: Bloom & Rage",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/south_of_midnight-1.jpg",
            name: "South of Midnight",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/wanderstop.jpg",
            name: "Wanderstop",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best ongoing",
        voted: false,
        id: "best-ongoing",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/final_fantasy_xiv-2.jpg",
            name: "Final Fantasy XIV",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/fortnite.jpg",
            name: "Fortnite",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/helldivers2-3.jpg",
            name: "Helldivers 2",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/marvel_rivals.jpg",
            name: "Marvel Rivals",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/nomanssky.jpg",
            name: "No Man’s Sky",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best community support",
        voted: false,
        id: "best-community-support",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/09/baldurs-gate-3.jpg",
            name: "Baldur’s Gate 3",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/final_fantasy_xiv-2.jpg",
            name: "Final Fantasy XIV",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/fortnite.jpg",
            name: "Fortnite",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/helldivers_2.jpg",
            name: "Helldivers 2",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/nomanssky-1.jpg",
            name: "No Man’s Sky",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best independent game",
        voted: false,
        id: "best-independent-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/absoolum.jpg",
            name: "Absolum",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ballxpit.jpg",
            name: "Ball x Pit",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/blue_prince-1.jpg",
            name: "Blue Prince",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hades_2.jpg",
            name: "Hades II",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hollow_knight_silksong.jpg",
            name: "Hollow Knight: Silksong",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "best debut indie game",
        voted: false,
        id: "best-debut-indie-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/blue_prince.jpg",
            name: "Blue Prince",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/expedition33-3.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/despelote.jpg",
            name: "Despelote",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/dispatch.jpg",
            name: "Dispatch",
            votes: 0,
            option: "D",
          },
        ],
      },
      {
        name: "best mobile game",
        voted: false,
        id: "best-mobile-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/destiny_rising.jpg",
            name: "Destiny: Rising",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/persona5_phantomx.jpg",
            name: "Persona 5: The Phantom X",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/sonic_rumble.jpg",
            name: "Sonic Rumble",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/umumusume.jpg",
            name: "Umamusume: Pretty Derby",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/wuthering_waves.jpg",
            name: "Wuthering Waves",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best vr ar",
        voted: false,
        id: "best-vr-ar",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/alien_rogue_incursion.jpg",
            name: "Alien: Rogue Incursion",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/arken_age.jpg",
            name: "Arken Age",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ghost_town.jpg",
            name: "Ghost Town",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/deadpool_vr.jpg",
            name: "Marvel’s Deadpool VR",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/the_midnight_walk.jpg",
            name: "The Midnight Walk",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best action",
        voted: false,
        id: "best-action",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/battlefield6.jpg",
            name: "Battlefield 6",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/doom_dark_ages.jpg",
            name: "Doom: The Dark Ages",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hades_2-4.jpg",
            name: "Hades II",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/ninja_gaiden_4.jpg",
            name: "Ninja Gaiden 4",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/shinobi.jpg",
            name: "Shinobi: Art of Vengeance",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best action adventure",
        voted: false,
        id: "best-action-adventure",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-4.jpg",
            name: "Death Stranding 2: On the Beach",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/ghost_yotei-1.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hollow_knight_silksong.jpg",
            name: "Hollow Knight: Silksong",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/indiana_jones.jpg",
            name: "Indiana Jones and the Great Circle",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/split_fiction.jpg",
            name: "Split Fiction",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best role playing",
        voted: false,
        id: "best-role-playing",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/avowed.jpg",
            name: "Avowed",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33-1.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/kcd2.jpg",
            name: "Kingdom Come: Deliverance II",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/monster_hunter_wilds-1.jpg",
            name: "Monster Hunter Wilds",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/outer_worlds_2.jpg",
            name: "The Outer Worlds 2",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best fighting",
        voted: false,
        id: "best-fighting",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/2xko.jpg",
            name: "2XKO",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/capcom_fighting.jpg",
            name: "Capcom Fighting Collection 2",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/fatal_fury.jpg",
            name: "Fatal Fury: City of the Wolves",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/mortal_kombat_legacy.jpg",
            name: "Mortal Kombat: Legacy Kollection",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/virtua_fighter_5.jpg",
            name: "Virtua Fighter 5 R.E.V.O. World Stage",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best family",
        voted: false,
        id: "best-family",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/donkey_kong_banaza-1.jpg",
            name: "Donkey Kong Bananza",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/lego_party.jpg",
            name: "LEGO Party!",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/lego_voyagers.jpg",
            name: "LEGO Voyagers",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/mario_kart_world.jpg",
            name: "Mario Kart World",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/sonic_racing_crossworlds.jpg",
            name: "Sonic Racing: CrossWorlds",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/split_fiction.jpg",
            name: "Split Fiction",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "best sim strategy",
        voted: false,
        id: "best-sim-strategy",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/final_fantasy_tactics.jpg",
            name: "FINAL FANTASY TACTICS – The Ivalice Chronicles",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/jurassic_world_evolution.jpg",
            name: "Jurassic World Evolution 3",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/civilization_7.jpg",
            name: "Sid Meier’s Civilization VII",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/tempest_rising.jpg",
            name: "Tempest Rising",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/the_alters.jpg",
            name: "The Alters",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/two_point_museum.jpg",
            name: "Two Point Museum",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "best sports racing",
        voted: false,
        id: "best-sports-racing",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/eafc_26.jpg",
            name: "EA Sports FC 26",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/f1_25.jpg",
            name: "F1 25",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/mario_kart_world.jpg",
            name: "Mario Kart World",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/rematch.jpg",
            name: "Rematch",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/sonic_racing_crossworlds.jpg",
            name: "Sonic Racing: CrossWorlds",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best multiplayer",
        voted: false,
        id: "best-multiplayer",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/arc_raiders.jpg",
            name: "Arc Raiders",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/battlefield6.jpg",
            name: "Battlefield 6",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/elden_ring_nightreign.jpg",
            name: "Elden Ring Nightreign",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/peak.jpg",
            name: "Peak",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/split_fiction.jpg",
            name: "Split Fiction",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best adaptation",
        voted: false,
        id: "best-adaptation",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/a_minecraft_movie.jpg",
            name: "A Minecraft Movie",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/devil_may_cry.jpg",
            name: "Devil May Cry",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/splinter_cell.jpg",
            name: "Splinter Cell: Deathwatch",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/tlou_season2.jpg",
            name: "The Last of Us: Season 2",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/until_dawn.jpg",
            name: "Until Dawn",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "most anticipated game",
        voted: false,
        id: "most-anticipated-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/007_first_light.jpg",
            name: "007 First Light",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/gta6.jpg",
            name: "Grand Theft Auto VI",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/wolverine.jpg",
            name: "Marvel’s Wolverine",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/resident_evil_requiem.jpg",
            name: "Resident Evil Requiem",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/witcher_4.jpg",
            name: "The Witcher IV",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "content creator of the year",
        voted: false,
        id: "content-creator-of-the-year",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/caedrel.jpg",
            name: "Caedrel",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/kaicenat.jpg",
            name: "Kai Cenat",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/moistcritical.jpg",
            name: "MoistCr1TiKaL",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/sakura_miko.jpg",
            name: "Sakura Miko",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/content-creator-of-the-year-the-burnt-peanut.jpg",
            name: "THE BURNT PEANUT",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best esports game",
        voted: false,
        id: "best-esports-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/counter_strike_2.jpg",
            name: "Counter-Strike 2",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/dota_2.jpg",
            name: "DOTA 2",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/league_of_legends.jpg",
            name: "League of Legends",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/mobile_legends.jpg",
            name: "Mobile Legends: Bang Bang",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/valorant.jpg",
            name: "Valorant",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best esports athlete",
        voted: false,
        id: "best-esports-athlete",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/brawk.jpg",
            name: "brawk – Brock Somerhalder",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/chovy.jpg",
            name: "Chovy – Jeong Ji-hoon",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/forsaken.jpg",
            name: "f0rsakeN – Jason Susanto",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/kakeru.jpg",
            name: "Kakeru – Kakeru Watanabe",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/menard.jpg",
            name: "MenaRD – Saul Leonardo",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/zywoo.jpg",
            name: "Zyw0o – Mathieu Herbaut",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "best esports team",
        voted: false,
        id: "best-esports-team",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/gen-g.jpg",
            name: "Gen.G",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/nrg.jpg",
            name: "NRG",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/falcons.jpg",
            name: "Team Falcons",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/team_liquid_ph.jpg",
            name: "Team Liquid PH",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/teamvitalty.jpg",
            name: "Team Vitality",
            votes: 0,
            option: "E",
          },
        ],
      },
    ],
  };

  // auto-drops
  autoDrop: {
    dropInterval: number;
  } = {
    dropInterval: 5 * 60 * 1000,
  };

  init() {
    const data = container.resolve(FileSystem).read("conf.json");
    const path = container.resolve(FileSystem).path();
    if (!data) {
      // inicialize with defaults
      container.resolve(FileSystem).write(JSON.stringify(this), "conf.json");
      return;
    }
    this.userDataPath = path;
    try {
      const parsed = JSON.parse(data);
      Object.assign(this, parsed);
    } catch (error) {
      container
        .resolve(Log)
        .emit(
          `Hubo un problema a la hora de guardar la configuración: ${error.message}`
        );
    }
  }

  update(data: Partial<Configs>) {
    Object.assign(this, data);
    container.resolve(FileSystem).write(JSON.stringify(this), "conf.json");
    if (data.twitch) {
      container.resolve(Twitch).reconnect();
    }
    if (data.obs?.host || data.obs?.password) {
      container
        .resolve(OBS)
        .reconnect()
        .then(
          (valid) =>
            valid && container.resolve(Log).emit("OBS se conectó con éxito!")
        );
    }

    if (data.obs?.color1 || data.obs?.color2) {
      container.resolve(OBS).updateInputCooldownColors();
    }
  }

  toJSON() {
    return {
      twitch: this.twitch,
      obs: this.obs,
      autoDrop: this.autoDrop,
      gameAwards: this.gameAwards,
      userDataPath: this.userDataPath,
    };
  }
}
