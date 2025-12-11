import React, { useEffect, useState } from "react";
// import { Configs } from "src/domain/configs";
import { TemplateComponent } from "./template.component";
import { Core } from "../core";

export const ConfigsComponent = ({
  onClose = () => {},
}: {
  onClose?: () => void;
}) => {
  const [twitchChannels, setTwitchChannels] = useState("");
  const [twitchUsername, setTwitchUsername] = useState("");
  const [twitchOAuth, setTwitchOAuth] = useState("");
  const [obsHost, setObsHost] = useState("");
  const [obsPassword, setObsPassword] = useState("");
  const [colo1, setColor1] = useState("#000000");
  const [colo2, setColor2] = useState("#000000");
  const [userDataPath, setUserDataPath] = useState("");

  useEffect(() => {
    Core.configs.getValues().then((conf) => {
      setTwitchChannels(conf.twitch.channels);
      setTwitchUsername(conf.twitch.username);
      setTwitchOAuth(conf.twitch.oauth);
      setObsHost(conf.obs.host);
      setObsPassword(conf.obs.password);
      setColor1(conf.obs.color1);
      setColor2(conf.obs.color2);
      console.log(conf);
      setUserDataPath(conf.userDataPath);
    });
  }, []);

  const handleUpdate = async () => {
    const conf = await Core.configs.getValues();
    const updateProps: Partial<{
      twitch: { username: string; oauth: string; channels: string };
      obs: { host: string; password: string; color1: string; color2: string };
      autoDrop: { dropInterval: number };
    }> = {};
    if (
      conf.twitch.channels !== twitchChannels ||
      conf.twitch.username !== twitchUsername ||
      conf.twitch.oauth !== twitchOAuth
    ) {
      updateProps.twitch = {
        username: twitchUsername,
        oauth: twitchOAuth,
        channels: twitchChannels,
      };
    }
    if (
      conf.obs.host !== obsHost ||
      conf.obs.password !== obsPassword ||
      conf.obs.color1 !== colo1 ||
      conf.obs.color2 !== colo2
    ) {
      updateProps.obs = {
        host: obsHost,
        password: obsPassword,
        color1: colo1,
        color2: colo2,
      };
    }
    // conf.twitch.channels = twitchChannels;
    // conf.twitch.username = twitchUsername;
    // conf.twitch.oauth = twitchOAuth;
    // conf.obs.host = obsHost;
    // conf.obs.password = obsPassword;
    Core.configs.update(updateProps).then(() => console.log("Updated!"));
  };

  return (
    <TemplateComponent onClose={onClose} title="Msconfig.exe">
      <div
        style={{
          maxWidth: "40em",
          margin: "auto",
        }}
      >
        <div
          style={{
            marginBottom: "1em",
            display: "flex",
            flexDirection: "column",
            marginTop: "1em",
          }}
        >
          <label htmlFor="">User Data Path</label>
          <input
            style={{ display: "block" }}
            type="text"
            defaultValue={userDataPath}
            disabled
          />
        </div>
        <h2 style={{ textAlign: "center" }}>Twitch</h2>
        <div
          style={{
            marginBottom: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="">Canal</label>
          <input
            style={{ display: "block" }}
            type="text"
            defaultValue={twitchChannels}
            onChange={(e) => {
              setTwitchChannels(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            marginBottom: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="">Usuario (BOT)</label>
          <input
            style={{ display: "block" }}
            type="text"
            value={twitchUsername}
            onChange={(e) => {
              setTwitchUsername(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            marginBottom: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="">OAuth</label>
          <input
            style={{ display: "block" }}
            type="password"
            value={twitchOAuth}
            onChange={(e) => setTwitchOAuth(e.target.value)}
          />
        </div>
        <h2 style={{ textAlign: "center" }}>OBS</h2>
        <div
          style={{
            marginBottom: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="">Host</label>
          <input
            style={{ display: "block" }}
            type="text"
            value={obsHost}
            onChange={(e) => setObsHost(e.target.value)}
          />
        </div>
        <div
          style={{
            marginBottom: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="">Password</label>
          <input
            style={{ display: "block" }}
            type="password"
            value={obsPassword}
            onChange={(e) => setObsPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <input
              type={"color"}
              value={colo1}
              style={{ padding: 0 }}
              onChange={(e) => setColor1(e.target.value)}
            />
            <input
              type={"color"}
              value={colo2}
              style={{ padding: 0 }}
              onChange={(e) => setColor2(e.target.value)}
            />
          </div>
          <p
            style={{
              fontFamily: "Helvetica",
              fontWeight: "500",
              fontSize: "30px",
              backgroundImage: `linear-gradient(to bottom, ${colo1}, ${colo2})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              padding: 0,
              WebkitFontSmoothing: "none",
            }}
          >
            03:00
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button style={{ marginTop: "1em" }} onClick={handleUpdate}>
            Guardar
          </button>
        </div>
      </div>
    </TemplateComponent>
  );
};
