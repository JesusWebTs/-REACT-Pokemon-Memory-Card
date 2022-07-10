import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardsContext } from "../../context/cardContext";
import { PlayersContext } from "../../context/playersContext";
function usePlayGame({ pokemons }) {
  let navigate = useNavigate();
  const {
    turnCard,
    resetCards,
    setFlipedList,
    targets,
    targetsIds,
    flippedList,
  } = useContext(CardsContext);
  const { addPlayerCard, changeTurn, playerTurn, nextTurn, availableToPlay } =
    useContext(PlayersContext);

  useEffect(() => {
    //if (!availableToPlay) navigate("/");
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
      setTimeout(() => navigate("/game-over"), 1000);
    }

    return () => {};
  }, [flippedList, pokemons]);

  return { turnCard };
}

export default usePlayGame;
