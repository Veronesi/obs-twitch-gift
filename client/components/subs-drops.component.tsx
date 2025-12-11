import React, { useEffect, useState } from "react";
import { TemplateComponent } from "./template.component";
import { Gift } from "../assets/Gift";
import { Prime } from "../assets/Primte";
import { Sub } from "../assets/Sub";
import { Unknown } from "../assets/Unknown";
import { Core } from "../core";

export function SubsDropComponent({
  onClose = () => {},
}: {
  onClose?: () => void;
}) {
  const [participants, setParticipants] = useState<
    {
      username: string;
      timestamp: number;
      winner: boolean;
      method: "prime" | "gift" | "mystery" | "sub" | "unknown";
      shares: number;
    }[]
  >([]);
  const [enable, setEnable] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [shares, setShares] = useState<number>(1);
  const [winners, setWinners] = useState<
    { winner: string; substitute: string }[]
  >([]);

  useEffect(() => {
    Core.subsDrop.isEnabled().then((isEnabled) => {
      setEnable(isEnabled);
    });
    Core.subsDrop.getParticipants().then((p) => {
      setParticipants(p.reverse());
    });
    Core.subsDrop.getWinners().then((winnersList) => {
      setWinners(winnersList);
    });
    Core.subsDrop.subscribeToParticipants(
      "SubsDropComponent",
      (participant: any) => {
        setParticipants((prev) => [participant, ...prev]);
      }
    );
    Core.subsDrop.subscribeToDrop(
      "SubsDropComponent",
      (data: { winner: string; substitute: string }) => {
        setWinners((prev) => [...prev, data]);
      }
    );
  }, []);

  const start = () => {
    Core.subsDrop.start().then((isEnabled) => {
      setEnable(isEnabled);
    });
  };

  const dropKey = () => {
    Core.subsDrop.dropKey();
  };

  const getIcon = (method: string) => {
    switch (method) {
      case "gift":
        return <Gift />;
      case "mystery":
        return <Gift />;
      case "prime":
        return <Prime />;
      case "sub":
        return <Sub />;
      default:
        return <Unknown />;
    }
  };

  const stop = () => {
    Core.subsDrop.stop().then((isEnabled) => {
      setEnable(isEnabled);
    });
  };

  const addParticipant = () => {
    if (username.trim() === "") return;
    Core.subsDrop
      .addParticipant({ username: username.trim(), shares: shares })
      .then(() => {
        setUsername("");
        setShares(1);
      });
  };

  return (
    <TemplateComponent onClose={onClose} title="Claves.exe">
      <div>
        <div style={{ margin: "auto", maxWidth: "30em" }}>
          <div
            style={{
              marginBottom: "1em",
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
            }}
          >
            {enable ? (
              <>
                <button onClick={stop}>PARAR DE ESCANEAR</button>
              </>
            ) : (
              <button onClick={start}>VAMOOOO</button>
            )}
          </div>
          {enable && (
            <>
              <div
                style={{
                  marginBottom: "1em",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1em",
                }}
              >
                <label htmlFor="">Agregar participante:</label>
                <input
                  style={{ display: "block" }}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div
                style={{
                  marginBottom: "1em",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1em",
                }}
              >
                <label htmlFor="">Cantidad de participaciones:</label>
                <input
                  style={{ display: "block" }}
                  type="number"
                  value={shares}
                  onChange={(e) => setShares(Number(e.target.value))}
                />
              </div>
              <div
                style={{
                  marginBottom: "1em",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1em",
                }}
              >
                <button onClick={addParticipant}>agregar</button>
              </div>
            </>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "space-between",
            gap: "1em",
          }}
        >
          {participants.length > 0 ? (
            <button onClick={dropKey}>Drop Key</button>
          ) : (
            <></>
          )}
        </div>

        <ul style={{ textAlign: "center", marginBottom: "2em" }}>
          {winners.map(({ winner, substitute }, index) => (
            <li key={index}>
              <label className="label-participant label-participant-winner">
                <Prime color={"#ff7f30ff"} />
                <span style={{ paddingLeft: ".3em" }}>
                  {winner}
                  <i
                    style={{
                      fontWeight: 100,
                      paddingLeft: ".3em",
                      fontSize: "0.8em",
                    }}
                  >
                    (Ganador)
                  </i>
                </span>
              </label>
              <label className="label-participant label-participant-supplier">
                <Prime color={"#ff7f30ff"} />
                <span style={{ paddingLeft: ".3em", fontWeight: 300 }}>
                  {substitute}
                  <i
                    style={{
                      fontWeight: 100,
                      paddingLeft: ".3em",
                      fontSize: "0.8em",
                    }}
                  >
                    (Suplente)
                  </i>
                </span>
              </label>
            </li>
          ))}
        </ul>
        <div>
          <div>
            <div style={{ textAlign: "center" }}>
              {participants.length === 0 && <p>Aun no hay participantes</p>}
              {participants.map((p) => (
                <label
                  className={`label-participant label-participant-${p.method}`}
                  key={p.username}
                >
                  <span style={{ paddingRight: ".3em" }}>{p.username}</span>
                  {getIcon(p.method)}
                  {p.shares > 1 ? `x${p.shares}` : ""}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TemplateComponent>
  );
}
