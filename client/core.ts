export type Category = {
  name: string;
  id: string;
  voted: boolean;
  games: {
    name: string;
    uri: string;
    votes: number;
    option: string;
    wins?: boolean;
  }[];
  updatedAt: number;
};

export class CoreClass {
  constructor() {
    const api = (window as any).electronAPI;
    if (!api || !api.invoke) {
      alert("electronAPI.invoke not available");
      return;
    }
  }
  gameAwards = {
    async isVoting(): Promise<string | null> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return null;
      }
      try {
        const res = await api.invoke("ipc-gameawards-is-voting");
        return res?.reply ?? null;
      } catch (e) {
        return null;
      }
    },
    async getCategories(): Promise<
      {
        name: string;
        id: string;
        voted: boolean;
        games: { name: string; uri: string; votes: number; option: string }[];
      }[]
    > {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return [];
      }
      try {
        const res = await api.invoke("ipc-gameawards-get-categories");
        return res?.reply ?? [];
      } catch (e) {
        return [];
      }
    },
    subscribeToVotes(
      observer: string,
      callback: (data: { categories: Category[] }) => void
    ) {
      console.log("subscribeToVotes called");
      try {
        const api = (window as any).electronAPI;
        if (!api || !api.on) {
          alert("electronAPI.on not available");
          return;
        }

        api.on(
          "ipc-gameawards-subscribe-votes",
          (data: { categories: Category[] }) => {
            callback(data);
          }
        );
      } catch (error) {
        console.error("Error in subscribeToVotes:", error);
      }
    },
    async unSubscribeToVotes(observer: string): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-gameawards-unsubscribe-votes");
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
    subscribeToWin(
      observer: string,
      callback: (data: { categories: Category[] }) => void
    ) {
      console.log("subscribeToWin called");
      try {
        const api = (window as any).electronAPI;
        if (!api || !api.on) {
          alert("electronAPI.on not available");
          return;
        }

        api.on(
          "ipc-gameawards-subscribe-win",
          (data: { categories: Category[] }) => {
            callback(data);
          }
        );
      } catch (error) {
        console.error("Error in subscribeToWin:", error);
      }
    },
    async unSubscribeToWin(observer: string): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-gameawards-unsubscribe-win");
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
    async startVoting(categoryId: string): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-gameawards-start-vote", categoryId);
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
    async stopVoting(): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-gameawards-end-vote");
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
  };
  autoDrop = {
    async subscribeToParticipants(
      observer: string,
      callback: (username: string) => void
    ) {
      const api = (window as any).electronAPI;
      if (!api || !api.on) {
        alert("electronAPI.on not available");
        return;
      }
      api.on("ipc-autodrop-subscribe-new-participant", (username: string) => {
        callback(username);
      });
    },
    async start(interval: number): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-autodrop-start", interval);
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
    async stop(): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-autodrop-stop");
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
    async isEnabled(): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-autodrop-is-enabled");
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
    async getDropInterval(): Promise<number> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return 0;
      }
      try {
        const res = await api.invoke("ipc-autodrop-get-interval");
        return res?.reply ?? 0;
      } catch (e) {
        return 0;
      }
    },
    async getParticipants(): Promise<number> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return 0;
      }
      try {
        const res = await api.invoke("ipc-autodrop-get-participants");
        return res?.reply?.length ?? 0;
      } catch (e) {
        return 0;
      }
    },
    async getWinners(): Promise<string[]> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return [];
      }
      try {
        const res = await api.invoke("ipc-autodrop-get-winners");
        return res?.reply ?? [];
      } catch (e) {
        return [];
      }
    },
  };

  subsDrop = {
    async subscribeToParticipants(
      observer: string,
      callback: (user: {
        username: string;
        timestamp: number;
        winner: boolean;
        method: "prime" | "gift" | "mystery" | "sub" | "unknown";
        shares: number;
      }) => void
    ) {
      const api = (window as any).electronAPI;
      if (!api || !api.on) {
        alert("electronAPI.on not available");
        return;
      }
      api.on(
        "ipc-subsdrop-subscribe-new-participant",
        (user: {
          username: string;
          timestamp: number;
          winner: boolean;
          method: "prime" | "gift" | "mystery" | "sub" | "unknown";
          shares: number;
        }) => {
          callback(user);
        }
      );
    },
    async subscribeToDrop(
      observer: string,
      callback: (user: { winner: string; substitute: string }) => void
    ) {
      const api = (window as any).electronAPI;
      if (!api || !api.on) {
        alert("electronAPI.on not available");
        return;
      }
      api.on(
        "ipc-subsdrop-subscribe-drop",
        (data: { winner: string; substitute: string }) => {
          callback(data);
        }
      );
    },
    async start(): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-subsdrop-start");
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
    async stop(): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-subsdrop-stop");
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
    async isEnabled(): Promise<boolean> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return false;
      }
      try {
        const res = await api.invoke("ipc-subsdrop-is-enabled");
        return res?.reply ?? false;
      } catch (e) {
        return false;
      }
    },
    async getParticipants(): Promise<
      {
        username: string;
        timestamp: number;
        winner: boolean;
        method: "prime" | "gift" | "mystery" | "sub" | "unknown";
        shares: number;
      }[]
    > {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return [];
      }
      try {
        const res = await api.invoke("ipc-subsdrop-get-participants");
        return res?.reply ?? [];
      } catch (e) {
        return [];
      }
    },
    async getWinners(): Promise<{ winner: string; substitute: string }[]> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return [];
      }
      try {
        const res = await api.invoke("ipc-subsdrop-get-winners");
        return res?.reply ?? [];
      } catch (e) {
        return [];
      }
    },
    async dropKey(): Promise<void> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return;
      }
      try {
        await api.invoke("ipc-subsdrop-drop-key");
      } catch (e) {
        return;
      }
    },
    async addParticipant({
      username,
      shares = 1,
    }: {
      username: string;
      shares: number;
    }) {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return;
      }
      try {
        await api.invoke("ipc-subsdrop-add-participant", {
          username,
          shares,
          method: "unknown",
        });
      } catch (e) {
        return;
      }
    },
  };
  configs = {
    async getValues(): Promise<{
      twitch: { username: string; oauth: string; channels: string };
      obs: { host: string; password: string; color1: string; color2: string };
      autoDrop: { dropInterval: number };
      userDataPath: string;
    }> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return null;
      }
      try {
        const res = await api.invoke("ipc-conf-values");
        return res?.reply ?? null;
      } catch (e) {
        return null;
      }
    },
    async update(
      updateProps: Partial<{
        twitch: { username: string; oauth: string; channels: string };
        obs: { host: string; password: string; color1: string; color2: string };
        autoDrop: { dropInterval: number };
      }>
    ): Promise<void> {
      const api = (window as any).electronAPI;
      if (!api || !api.invoke) {
        alert("electronAPI.invoke not available");
        return;
      }
      try {
        await api.invoke("ipc-conf-update", updateProps);
      } catch (e) {
        return;
      }
    },
    async subscribeToLogs(
      observer: string,
      callback: (message: string) => void
    ) {
      const api = (window as any).electronAPI;
      if (!api || !api.on) {
        alert("electronAPI.on not available");
        return;
      }
      await api.invoke("ipc-main");
      api.on("ipc-conf-subscribe-log", ({ message }: { message: string }) => {
        callback(message);
      });
    },
  };
}

export const Core = new CoreClass();
