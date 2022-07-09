import React, { useContext, useEffect } from "react";
import "./styles.css";
import usePokemon from "../..//hooks/usePokemon";
import { PokeCard } from "../../components";
import usePlayGame from "./usePlayGame";
import { CardsContext } from "../../context/cardContext";
import { PlayersContext } from "../../context/playersContext";

function PlayGame() {
  const { pokemons } = usePokemon();
  const {} = usePlayGame();

  const { player1, player2, currentPlayer, setPlayerTurn, turn, resetAll } =
    useContext(PlayersContext);
  useEffect(() => {
    setPlayerTurn(1);

    return () => {};
  }, []);

  return (
    <div className="page-play-game__container">
      <div className="page-play-game__info">
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
