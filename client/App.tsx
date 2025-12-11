import React, { useEffect } from "react";
import "./App.css";
import { SubsDropComponent } from "./components/subs-drops.component";
import { AutoDropComponent } from "./components/auto-drop.component";
import { useState } from "react";
import { ConfigsComponent } from "./components/configs.component";
import { GameAwardsComponent } from "./components/game-awards.component";
import imageExe from "./assets/executable-0.png";
import ImageUsersKey from "./assets/users_key-4.png";
import ImageDefrag from "./assets/defragment-0.png";
import ImageSetting from "./assets/settings-32x32.png";
import { Core } from "./core";

function App() {
  const [load, setLoad] = useState(true);
  const [showAutoDrop, setShowAutoDrop] = useState(false);
  const [showSubsDrop, setShowSubsDrop] = useState(false);
  const [showConfigs, setShowConfigs] = useState(false);
  const [showDoritos, setShowDoritos] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      Core.configs.subscribeToLogs("Confg", (msg) => alert(msg));
    }, 3700 * 0.1);
  }, []);

  if (load) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          color: "white",
          fontFamily: "monospace",
        }}
      >
        <div className="container-glitch">
          <div className="glitch"></div>
          <div className="glitch"></div>
          <div className="glitch"></div>
        </div>
        <h1>CLASSISM STUDIOS</h1>
        <div
          style={{
            backgroundColor: "#111",
            marginTop: "1em",
            padding: ".5em 1em",
          }}
        >
          <p>
            Made with 🐮 by <span style={{ color: "#cb90ffff" }}>@Fanaes</span>{" "}
            v1.0.0
          </p>
        </div>
        <div className="typewriter" style={{ marginTop: "0.9em" }}>
          <h1 style={{ fontFamily: "monospace", fontSize: "0.9em" }}>
            Hackeando billetera de Jeff Bezos... [✅]
          </h1>
        </div>
      </div>
    );
  }

  return (
    <main
      className="container"
      style={{
        position: "relative",
        display: "grid",
        gridTemplateRows: "2em 1fr 2em",
        gridTemplateColumns: "1fr",
        height: "100vh",
        width: "100vw",
        padding: 0,
        margin: 0,
      }}
    >
      <div></div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "8em",
            gridTemplateRows: "5em",
            gap: "2em",
          }}
        >
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
              gap: "0.5em",
            }}
            onClick={() => setShowAutoDrop((prev) => !prev)}
          >
            <img height={48} width={48} src={imageExe} alt="" />
            <span>sorteo para eventos.exe</span>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
              gap: "0.5em",
            }}
            onClick={() => setShowSubsDrop((prev) => !prev)}
          >
            <img height={48} width={48} src={ImageUsersKey} alt="" />
            <span>Claves.exe</span>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
              gap: "0.5em",
            }}
            onClick={() => setShowDoritos((prev) => !prev)}
          >
            <img src={ImageDefrag} alt="" />
            <span>Game Awards.exe</span>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
              gap: "0.5em",
            }}
            onClick={() => setShowConfigs((prev) => !prev)}
          >
            <img
              src={ImageSetting}
              alt="settings"
              style={{ cursor: "pointer" }}
              height={48}
              width={48}
            />
            <span>Msconfig.exe</span>
          </div>
        </div>
        <div>
          {showAutoDrop && (
            <AutoDropComponent onClose={() => setShowAutoDrop(false)} />
          )}
          {showSubsDrop && (
            <SubsDropComponent onClose={() => setShowSubsDrop(false)} />
          )}
          {showConfigs && (
            <ConfigsComponent onClose={() => setShowConfigs(false)} />
          )}
          {showDoritos && (
            <GameAwardsComponent onClose={() => setShowDoritos(false)} />
          )}
        </div>
      </div>
      <div style={{ textAlign: "end", paddingRight: "1em", color: "silver" }}>
        <i>BaityOS v1.0.0</i>
      </div>
    </main>
  );
}

export default App;
