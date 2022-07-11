import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardsContext } from "../../context/cardContext";
import { PlayersContext } from "../../context/playersContext";
import { backendApi } from "../../services";
function usePlayGame({ pokemons }) {
  let navigate = useNavigate();
  const {
    turnCard,
    resetCards,
    setFlipedList,
    targets,
    targetsIds,
    flippedList,
    resetGame,
  } = useContext(CardsContext);
  const {
    addPlayerCard,
    changeTurn,
    playerTurn,
    nextTurn,
    player1,
    player2,
    newGame,
    availableToPlay,
  } = useContext(PlayersContext);
  useEffect(() => {
    if (!availableToPlay) navigate("/");
    resetGame();
    newGame();

    return () => {};
  }, []);

  useEffect(() => {
    if (targets.length === 2) {
      if (targetsIds[0] === targetsIds[1]) {
        setFlipedList((prev) => [...prev, targetsIds[0]]);
        addPlayerCard({ player: playerTurn, cardid: targetsIds[0] });
        resetCards();
      } else {
        setTimeout(() => {
          nextTurn();
          resetCards();
          changeTurn();
        }, 500);
      }
    }
    return () => {};
  }, [targets]);

  useEffect(() => {
    if (pokemons.length === 0) return;

    if (flippedList.length * 2 >= pokemons.length) {
      setTimeout(() => {
        sendData({
          _id: null,
          date: Date.now(),
          winner:
            player1.cards.length > player2.cards.length
              ? player1.uuid
              : player1.cards.length < player2.cards.length
              ? player2.uuid
              : "DRAW",
          players: [
            {
              name: player1.name,
              uuid: player1.uuid,
              cards: player1.cards,
              points: player1.cards.length,
            },
            {
              name: player2.name,
              uuid: player2.uuid,
              cards: player2.cards,
              points: player2.cards.length,
            },
          ],
        }).then(() => navigate("/game-over"));
      }, 1000);
    }
    return () => {};
  }, [flippedList, pokemons]);

  const sendData = async (data) => {
    try {
      const el = await backendApi.post({ endPoint: "/game/base", value: data });
      return el;
    } catch (err) {
      return console.log(err);
    }
  };

  return { turnCard };
}

export default usePlayGame;
