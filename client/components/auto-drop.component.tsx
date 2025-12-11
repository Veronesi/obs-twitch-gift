import React, { useEffect, useState } from "react";
import { TemplateComponent } from "./template.component";
import { Core } from "../core";
import { Prime } from "../assets/Primte";

export function AutoDropComponent({
  onClose = () => {},
}: {
  onClose?: () => void;
}) {
  const [interval, setInterval] = useState<number>(0);
  const [participans, setParticipants] = useState<number>(0);
  const [winners, setWinners] = useState<string[]>([]);
  const [enable, setEnable] = useState<boolean>(false);

  useEffect(() => {
    Core.autoDrop.isEnabled().then((isEnabled) => {
      setEnable(isEnabled);
    });
    Core.autoDrop.getDropInterval().then((dropInterval) => {
      setInterval(dropInterval / (1000 * 60));
    });
    Core.autoDrop.getParticipants().then((participants) => {
      setParticipants(participants);
    });
    Core.autoDrop.getWinners().then((winnersList) => {
      setWinners(winnersList);
    });

    Core.autoDrop.subscribeToParticipants(
      "AutoDropComponent",
      (username: string) => {
        setWinners((prev) => [...prev, username]);
      }
    );
  }, []);

  const start = async () => {
    const isEnabled = await Core.autoDrop.start(interval * 1000 * 60);
    setEnable(isEnabled);
  };

  const updateParticipants = () => {
    Core.autoDrop.getParticipants().then((participants) => {
      setParticipants(participants);
    });
  };

  const stop = async () => {
    const isEnabled = await Core.autoDrop.stop();
    setEnable(isEnabled);
  };

  return (
    <TemplateComponent onClose={onClose} title="sorteo para eventos.exe">
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
            <label htmlFor="">Cada cuanto minutos se dropean Keys:</label>
            <input
              style={{ display: "block" }}
              type="number"
              value={interval}
              onChange={(e) => setInterval(Number(e.target.value))}
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
            {enable ? (
              <button onClick={stop}>Detener</button>
            ) : (
              <button onClick={start}>VAMOOO</button>
            )}
          </div>
        </div>

        {enable && (
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
                <label htmlFor="">Cantidad de participantes:</label>
                <input
                  style={{ display: "block" }}
                  type="number"
                  value={participans}
                  disabled
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
                <label htmlFor="">Claves Sorteadas:</label>
                <input
                  style={{ display: "block" }}
                  type="number"
                  value={winners.length}
                  disabled
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
                <button onClick={updateParticipants}>↻ refrescar</button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {winners.map((winner, index) => (
                <label
                  key={index}
                  style={{ fontSize: "1em" }}
                  className="label-participant label-participant-winner"
                >
                  <Prime color={"#ff7f30ff"} />
                  <span style={{ paddingLeft: ".3em" }}>{winner}</span>
                </label>
              ))}
              {winners.length === 0 && <p>No hay ganadores aun...</p>}
            </div>
          </div>
        )}
        <p
          style={{
            textAlign: "center",
            maxWidth: "30em",
            margin: "auto",
            marginTop: "2em",
          }}
        >
          Sortear claves cada X minutos, ideam para eventos. Para cambiar el
          estilo del contador de OBS, ve a <i>Msconfig.exe</i>
        </p>
      </div>
    </TemplateComponent>
  );
}
