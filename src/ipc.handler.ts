import { ipcMain } from "electron";
import { container } from "tsyringe";
import { AutoDrop } from "./apps/auto-drop.application";
import { BrowserWindow } from "electron";
import { SubsDrop } from "./apps/subs-drop.application";
import { Configs } from "./domain/configs";
import { GameAwardsApplication } from "./apps/game-awards.application";
import { Log } from "./libs/log";

// ~~~~~~~~~~~~~~~~~~~~ IPC AUTO-DROP ~~~~~~~~~~~~~~~~~~~~~

ipcMain.handle("ipc-autodrop-start", async (event, arg = 1) => {
  const app = container.resolve(AutoDrop);
  app.setDropInterval(arg);
  app.start();
  app.unSubscribeToDrop({ observer: "AutoDropComponent", update() {} });
  const window = BrowserWindow.getAllWindows()[0];

  if (!window) return { reply: app.isEnabled() };

  app.subscribeToDrop({
    observer: "AutoDropComponent",
    update({ username }) {
      window.webContents.send(
        "ipc-autodrop-subscribe-new-participant",
        username
      );
    },
  });

  return { reply: app.isEnabled() };
});

ipcMain.handle("ipc-autodrop-stop", async (event, arg) => {
  const app = container.resolve(AutoDrop);
  app.stop();
  return { reply: app.isEnabled() };
});

ipcMain.handle("ipc-autodrop-is-enabled", async (event, arg) => {
  const app = container.resolve(AutoDrop);
  return { reply: app.isEnabled() };
});

ipcMain.handle("ipc-autodrop-get-interval", async (event, arg) => {
  const app = container.resolve(AutoDrop);
  return { reply: app.getDropInterval() };
});

ipcMain.handle("ipc-autodrop-get-participants", async (event, arg) => {
  const app = container.resolve(AutoDrop);
  return { reply: app.getParticipants() };
});

ipcMain.handle("ipc-autodrop-get-winners", async (event, arg) => {
  const app = container.resolve(AutoDrop);
  return { reply: app.getWinners() };
});

// ~~~~~~~~~~~~~~~~~~~~ IPC SUBS-DROP ~~~~~~~~~~~~~~~~~~~~~

ipcMain.handle("ipc-subsdrop-start", async (event, arg) => {
  const app = container.resolve(SubsDrop);
  app.start();
  app.unSubscribeToDrop({ observer: "SubsDropComponent", update() {} });
  app.unSubscribeToNewParticipant({
    observer: "SubsDropComponent",
    update() {},
  });
  const window = BrowserWindow.getAllWindows()[0];

  if (!window) return { reply: app.isEnabled() };

  app.subscribeToNewParticipant({
    observer: "SubsDropComponent",
    update(participant) {
      window.webContents.send(
        "ipc-subsdrop-subscribe-new-participant",
        participant
      );
    },
  });

  app.subscribeToDrop({
    observer: "SubsDropComponent",
    update(data) {
      window.webContents.send("ipc-subsdrop-subscribe-drop", data);
    },
  });

  return { reply: app.isEnabled() };
});

ipcMain.handle("ipc-subsdrop-stop", async (event, arg) => {
  const app = container.resolve(SubsDrop);
  app.stop();
  return { reply: app.isEnabled() };
});

ipcMain.handle("ipc-subsdrop-is-enabled", async (event, arg) => {
  const app = container.resolve(SubsDrop);
  return { reply: app.isEnabled() };
});

ipcMain.handle("ipc-subsdrop-get-participants", async (event, arg) => {
  const app = container.resolve(SubsDrop);
  return { reply: app.getSubscriptionsHistory() };
});

ipcMain.handle("ipc-subsdrop-get-winners", async (event, arg) => {
  const app = container.resolve(SubsDrop);
  return { reply: app.getWinners() };
});

ipcMain.handle("ipc-subsdrop-drop-key", async (event, arg) => {
  const app = container.resolve(SubsDrop);
  app.dropKey();
  return { reply: true };
});

ipcMain.handle("ipc-subsdrop-add-participant", async (event, arg) => {
  const app = container.resolve(SubsDrop);
  app.addParticipant(arg);
  return { reply: true };
});

// ~~~~~~~~~~~~~~~~~~~~~~ IPC CONF ~~~~~~~~~~~~~~~~~~~~~~~~

ipcMain.handle("ipc-conf-values", async (event, arg) => {
  const app = container.resolve(Configs);
  return { reply: app.toJSON() };
});

ipcMain.handle("ipc-conf-update", async (event, arg) => {
  const app = container.resolve(Configs);
  app.update(arg);
  return { reply: true };
});

ipcMain.handle("ipc-main", async (event, arg) => {
  const app = container.resolve(Log);
  app.unSubscribe({ observer: "App", update() {} });

  const window = BrowserWindow.getAllWindows()[0];
  if (!window) return { reply: true };
  app.subscribe({
    observer: "App",
    update(message) {
      window.webContents.send("ipc-conf-subscribe-log", {
        message,
      });
    },
  });
  return { reply: true };
});

// ~~~~~~~~~~~~~~~~~~~~ IPC GAME AWARDS ~~~~~~~~~~~~~~~~~~~
ipcMain.handle("ipc-gameawards-get-categories", async (event, arg) => {
  const app = container.resolve(GameAwardsApplication);

  return { reply: app.categories };
});

ipcMain.handle("ipc-gameawards-subscribe-votes", async (event, arg) => {
  const app = container.resolve(GameAwardsApplication);
  app.unSubscribeToVotes({ observer: "GameAwards", update() {} });

  const window = BrowserWindow.getAllWindows()[0];
  if (!window) return { reply: true };
  app.subscribeToVotes({
    observer: "GameAwards",
    update({ categories }) {
      window.webContents.send("ipc-gameawards-subscribe-votes", {
        categories,
      });
    },
  });
  return { reply: true };
});

ipcMain.handle("ipc-gameawards-unsubscribe-votes", async (event, arg) => {
  const app = container.resolve(GameAwardsApplication);
  app.unSubscribeToVotes({ observer: "GameAwards", update() {} });
  return { reply: true };
});

ipcMain.handle("ipc-gameawards-start-vote", async (event, arg) => {
  const app = container.resolve(GameAwardsApplication);
  app.unSubscribeToVotes({ observer: "GameAwards", update() {} });
  app.unSubscribeToWin({ observer: "GameAwards", update() {} });

  const window = BrowserWindow.getAllWindows()[0];
  if (!window) return { reply: true };
  app.subscribeToVotes({
    observer: "GameAwards",
    update({ categories }) {
      window.webContents.send("ipc-gameawards-subscribe-votes", {
        categories,
      });
    },
  });
  app.subscribeToWin({
    observer: "GameAwards",
    update({ categories }) {
      window.webContents.send("ipc-gameawards-subscribe-win", { categories });
    },
  });
  app.startVoting(arg);
  return { reply: true };
});

ipcMain.handle("ipc-gameawards-end-vote", async (event, arg) => {
  const app = container.resolve(GameAwardsApplication);
  app.stopVoting();
  return { reply: true };
});

ipcMain.handle("ipc-gameawards-is-voting", async (event, arg) => {
  const app = container.resolve(GameAwardsApplication);
  return { reply: app.categorySelected ?? null };
});
