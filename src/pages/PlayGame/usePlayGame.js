import React, { useContext, useEffect } from "react";
import { CardsContext } from "../../context/cardContext";
import { PlayersContext } from "../../context/playersContext";
function usePlayGame() {
  const { turnCard, resetCards, setFlipedList, targets, targetsIds } =
    useContext(CardsContext);
  const { addPlayerCard, changeTurn, playerTurn, nextTurn } =
    useContext(PlayersContext);

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

  return { turnCard };
}

export default usePlayGame;
