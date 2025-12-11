import React, { useEffect, useState } from "react";
import { TemplateComponent } from "./template.component";
import { Core } from "../core";
import { Category } from "../../src/apps/game-awards.application";
import { Timer } from "../../src/libs/Timer";

export const GameAwardsComponent = ({
  onClose = () => {},
}: {
  onClose?: () => void;
}) => {
  const [awards, setAwards] = useState<
    {
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
    }[]
  >([]);

  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [isVoting, setIsVoting] = useState<boolean>(false);
  const [showCount, setShowCount] = useState<boolean>(true);
  const [counting, setCounting] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  useEffect(() => {
    Core.gameAwards.getCategories().then((categories) => {
      setAwards(categories);
    });
    Core.gameAwards.subscribeToVotes(
      "GameAwards",
      (data: { categories: Category[] }) => {
        setAwards(data.categories);
      }
    );
    Core.gameAwards.subscribeToWin(
      "GameAwards",
      (data: { categories: Category[] }) => {
        setAwards(data.categories);
      }
    );
    Core.gameAwards.isVoting().then((categoryId) => {
      if (categoryId) {
        setCategorySelected(categoryId);
        setIsVoting(!!categoryId);
        return;
      }
      setIsVoting(false);
    });
  }, []);

  const startVote = async (caetegoryId: string) => {
    const result = await Core.gameAwards.startVoting(caetegoryId);
    console.log("startVote", result);
    setIsVoting(true);
    const id = setInterval(() => {
      setCounting((prev) => prev + 1);
    }, 1000);
    setIntervalId(id as unknown as number);
  };

  const stopVote = async () => {
    const result = await Core.gameAwards.stopVoting();
    console.log("stopVote", result);
    setIsVoting(false);
    setCounting(0);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <TemplateComponent onClose={onClose} title="🧀 dorito's.exe">
      <div>
        <div
          style={{
            display: "flex",
            gap: ".6em",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {awards.map((award) => (
            <div
              onClick={() =>
                !isVoting &&
                (categorySelected === award.id
                  ? setCategorySelected(null)
                  : setCategorySelected(award.id))
              }
              style={{
                backgroundColor: "black",
                height: "7em",
                width: "8.2em",
                border: `solid 1px ${categorySelected === award.id ? "#ff0000" : award.voted ? "gold" : "white"}`,
                borderRadius: ".2em",
                display: "flex",
                cursor: "pointer",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                backgroundImage: award.voted
                  ? `url(${award.games.find((g) => g.wins)?.uri})`
                  : "",
                backgroundSize: "cover",
                padding: ".2em",
                backgroundPosition: "center",
              }}
              key={award.id}
            >
              <h5 style={{ backgroundColor: "#00000099" }}>
                {award.name.toUpperCase()}
              </h5>
              <p style={{ backgroundColor: "#00000099" }}>
                {award.voted ? award.games.find((g) => g.wins)?.name : ""}
              </p>
            </div>
          ))}
        </div>
        <div>
          {categorySelected && (
            <div
              style={{
                textAlign: "center",
                paddingBottom: "1em",
                paddingTop: "1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1em",
              }}
            >
              <span
                style={{
                  fontSize: "2em",
                  fontWeight: 100,
                }}
              >
                {categorySelected.replaceAll("-", " ").toUpperCase()}
              </span>
              {isVoting ? (
                <>
                  <button onClick={() => stopVote()}>PARAR</button>
                </>
              ) : (
                <button onClick={() => startVote(categorySelected)}>
                  Votar
                </button>
              )}
              <button onClick={() => setShowCount(!showCount)}>
                {showCount ? "Ocultar Conteo" : "Mostrar Conteo"}
              </button>
              {isVoting && counting !== null && (
                <b>
                  {Timer.toDigitalClock({
                    seconds: counting,
                    display: "minute",
                  })}
                </b>
              )}
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "2em",
              gap: "1em",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {categorySelected &&
              awards
                .find((a) => a.id === categorySelected)
                ?.games.map((game) => (
                  <div
                    key={game.option}
                    style={{
                      width: "8em",
                      border: `${game.wins ? "solid 1px gold" : ""}`,
                    }}
                  >
                    <img
                      src={game.uri}
                      alt={game.name}
                      style={{ height: "8em", width: "8em" }}
                    />
                    <div style={{ textAlign: "center" }}>
                      <b>opción: {game.option.toUpperCase()}</b>
                      <div>
                        <span style={{ fontWeight: "bold" }}>
                          Votos: {showCount ? game.votes : "🐄🐄"}
                        </span>
                      </div>
                      <p>{game.name}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </TemplateComponent>
  );
};
