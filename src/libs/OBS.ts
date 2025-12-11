import OBSWebSocket, { OBSWebSocketError } from "obs-websocket-js";
import { Configs } from "../domain/configs";
import { container, singleton } from "tsyringe";
import { Log } from "./log";

@singleton()
export class OBS {
  client: OBSWebSocket;
  isConnected: boolean = false;
  host = "ws://127.0.0.1:4455";
  inputMessageName = "TWITCH_GIFT_INPUT_MESSAGE_NAME";
  inputCooldownName = "TWITCH_GIFT_INPUT_COOLDOWN_NAME";
  sceneName = "TWITCH_GIFT_SCENE";
  password = "";
  constructor() {
    const configs = container.resolve(Configs).obs;
    this.host = configs.host;
    this.password = configs.password;
    this.client = new OBSWebSocket();
  }

  async connect(): Promise<boolean> {
    if (this.isConnected) return true;

    const configs = container.resolve(Configs).obs;
    this.host = configs.host;
    this.password = configs.password;
    this.client = new OBSWebSocket();

    return this.client
      .connect(this.host, this.password)
      .then(async () => {
        this.isConnected = true;

        // creamos la escena si no existe
        const sceneList = await this.client.call("GetSceneList");
        const sceneExists = sceneList.scenes.some(
          (scene) => scene.sceneName === this.sceneName
        );

        if (!sceneExists) {
          await this.client.call("CreateScene", { sceneName: this.sceneName });
        }

        // creamos la fuente si no existe
        const inputList = await this.client.call("GetInputList");

        const inputMessageNameExists = inputList.inputs.some(
          (input) => input.inputName === this.inputMessageName
        );
        if (!inputMessageNameExists) {
          await this.client.call("CreateInput", {
            sceneName: this.sceneName,
            inputName: this.inputMessageName,
            inputKind: "text_ft2_source_v2",
            inputSettings: {
              text: "",
              font: {
                face: "Helvetica",
                size: 30,
              },
            },
          });
        } else {
          this.writeText("");
        }

        const inputCooldownNameExists = inputList.inputs.some(
          (input) => input.inputName === this.inputCooldownName
        );
        if (!inputCooldownNameExists) {
          await this.createInputCooldown();
        } else {
          this.writeCooldown("");
        }
        return true;
      })
      .catch((error) => {
        if (error && error.stack) console.error(error.stack);
        if (error && /ECONNREFUSED/.test(error.message)) {
          container
            .resolve(Log)
            .emit(
              "Verifica que tienes activado WebSocket Server en OBS. https://github.com/obsproject/obs-websocket/releases"
            );
          return false;
        }
        if (error && /Authentication\sfailed/.test(error.message)) {
          container
            .resolve(Log)
            .emit("Contraseña incorrecta para OBS WebSocket");
          return false;
        }
        if (error instanceof OBSWebSocketError) {
          // GOTO: https://github.com/Veronesi/obs-twitch-gift?tab=readme-ov-file#conexi%C3%B3n-con-obs
          container
            .resolve(Log)
            .emit(
              "Verifica que tengas OBS abierto y el WebSocket Server activado"
            );
          return false;
        }

        return false;
      });
  }

  async updateInputCooldownColors() {
    const configs = container.resolve(Configs).obs;
    const [_, r1, r2, g1, g2, b1, b2] = [...configs.color1];
    const [__, r21, r22, g21, g22, b21, b22] = [...configs.color2];

    const colo1Hexa = `#${b1}${b2}${g1}${g2}${r1}${r2}`.replace("#", "0xff");
    const colo2Hexa = `#${b21}${b22}${g21}${g22}${r21}${r22}`.replace(
      "#",
      "0xff"
    );

    await this.client.call("SetInputSettings", {
      inputName: this.inputCooldownName,
      inputSettings: {
        color1: parseInt(colo1Hexa),
        color2: parseInt(colo2Hexa),
        outline: true,
      },
    });
  }

  async reconnect() {
    await this.disconnect();
    return await this.connect();
  }

  async createInputCooldown() {
    const configs = container.resolve(Configs).obs;
    const [_, r1, r2, g1, g2, b1, b2] = [...configs.color1];
    const [__, r21, r22, g21, g22, b21, b22] = [...configs.color2];

    const colo1Hexa = `#${b1}${b2}${g1}${g2}${r1}${r2}`.replace("#", "0xff");
    const colo2Hexa = `#${b21}${b22}${g21}${g22}${r21}${r22}`.replace(
      "#",
      "0xff"
    );

    await this.client.call("CreateInput", {
      sceneName: this.sceneName,
      inputName: this.inputCooldownName,
      inputKind: "text_ft2_source_v2",
      inputSettings: {
        text: "",
        color1: parseInt(colo1Hexa),
        color2: parseInt(colo2Hexa),
        outline: true, // Activar borde para que color2 se vea
        font: {
          face: "Helvetica",
          size: 60,
          style: "Bold",
        },
      },
    });

    // obtenemos el sceneItemId de la fuente creada
    const sceneItemList = await this.client.call("GetSceneItemList", {
      sceneName: this.sceneName,
    });

    const sceneItemCooldown = sceneItemList.sceneItems.find(
      (item) => item.sourceName === this.inputCooldownName
    );
    if (sceneItemCooldown) {
      // movemos la fuente a una posicion especifica

      await this.client.call("SetSceneItemTransform", {
        sceneName: this.sceneName,
        sceneItemId: sceneItemCooldown.sceneItemId as number,
        sceneItemTransform: {
          positionX: 20,
          positionY: 930,
        },
      });
    }

    const sceneItemMessage = sceneItemList.sceneItems.find(
      (item) => item.sourceName === this.inputMessageName
    );
    if (sceneItemMessage) {
      // movemos la fuente a una posicion especifica

      await this.client.call("SetSceneItemTransform", {
        sceneName: this.sceneName,
        sceneItemId: sceneItemMessage.sceneItemId as number,
        sceneItemTransform: {
          positionX: 20,
          positionY: 1000,
        },
      });
    }
  }

  async disconnect() {
    if (!this.isConnected) return;
    this.isConnected = false;

    // eliminamos la escena junto con las fuentes creadas
    const sceneList = await this.client.call("GetSceneList");
    const sceneExists = sceneList.scenes.some(
      (scene) => scene.name === this.sceneName
    );
    if (sceneExists) {
      await this.client.call("RemoveScene", { sceneName: this.sceneName });
    }

    // eliminamos las fuentes creadas
    const inputList = await this.client.call("GetInputList");
    const inputMessageNameExists = inputList.inputs.some(
      (input) => input.name === this.inputMessageName
    );
    if (inputMessageNameExists) {
      await this.client.call("RemoveInput", {
        inputName: this.inputMessageName,
      });
    }

    const inputCooldownNameExists = inputList.inputs.some(
      (input) => input.name === this.inputCooldownName
    );
    if (inputCooldownNameExists) {
      await this.client.call("RemoveInput", {
        inputName: this.inputCooldownName,
      });
    }

    await this.client.disconnect();
  }

  clearScene() {
    if (!this.isConnected) return;
    this.client.call("SetInputSettings", {
      inputName: this.inputCooldownName,
      inputSettings: {
        text: "",
      },
    });

    this.client.call("SetInputSettings", {
      inputName: this.inputMessageName,
      inputSettings: {
        text: "",
      },
    });
  }

  writeCooldown(text: string) {
    if (!this.isConnected) return;
    this.client.call("SetInputSettings", {
      inputName: this.inputCooldownName,
      inputSettings: {
        text,
      },
    });
  }

  writeText(text: string) {
    if (!this.isConnected) return;
    this.client.call("SetInputSettings", {
      inputName: this.inputMessageName,
      inputSettings: {
        text,
      },
    });
  }
}
