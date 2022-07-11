import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import usePokemon from "../..//hooks/usePokemon";
import { PokebalLoader, PokeCard } from "../../components";
import usePlayGame from "./usePlayGame";

import { PlayersContext } from "../../context/playersContext";

function PlayGame() {
  const { pokemons } = usePokemon();
  const { turnCard } = usePlayGame({ pokemons });
  const [showPlayerInfo, setShowPlayerInfo] = useState(false);

  const {
    player1,
    player2,
    currentPlayer,
    setPlayerTurn,
    turn,
    availableToPlay,
  } = useContext(PlayersContext);
  useEffect(() => {
    setPlayerTurn(1);
    return () => {};
  }, []);

  return (
    <div className="page-play-game__container">
      <div className={`page-play-game__info ${showPlayerInfo ? "page-play-game__info--active" : ""}`}>
        <div className="page-play-game__turn">
          <h2 className="page-play-game__title">Turno #{turn}</h2>
          <p>{currentPlayer.name}</p>
        </div>
        <div className="page-play-game__players-info">
          <h2 className="page-play-game__title">Players</h2>
          <div className="page-play-game__players">
            <div className="page-play-game__player-info">
              <h3 className="page-play-game__player-name">{player1.name}</h3>
              <p>
                Score <span>{player1.cards.length}</span>
              </p>
            </div>
            <div className="page-play-game__player-info">
              <h3 className="page-play-game__player-name">{player2.name}</h3>
              <p>
                Score <span>{player2.cards.length}</span>
              </p>
            </div>
          </div>
          <button
            className="page-play-game__player-info__button"
            onClick={() => setShowPlayerInfo((prev) => !prev)}
          >
            <PokebalLoader />
          </button>
        </div>
      </div>
      <div className="page-play-game__cards">
        {pokemons
          /* .sort((a, b) => a.id - b.id) */
          .map((pokeInfo) => (
            <PokeCard
              key={`${pokeInfo.id}-${pokeInfo.uuid}`}
              pokeInfo={pokeInfo}
            />
          ))}
      </div>
    </div>
  );
}

export default PlayGame;
