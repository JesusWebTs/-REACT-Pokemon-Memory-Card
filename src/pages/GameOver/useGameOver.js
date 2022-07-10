import React, { useContext, useEffect, useState } from "react";
import { CardsContext } from "../../context/cardContext";
import { PlayersContext } from "../../context/playersContext";

function useGameOver() {
  const {
    turnCard,
    resetCards,
    setFlipedList,
    targets,
    targetsIds,
    flippedList,
  } = useContext(CardsContext);
  const {
    addPlayerCard,
    changeTurn,
    playerTurn,
    nextTurn,
    availableToPlay,
    player1,
    player2,
  } = useContext(PlayersContext);

  const [winner, setWinner] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (player1.cards.length > player2.cards.length) {
      setWinner(`${player1.name} Win!`);
      setScore(player1.cards.length);
    } else if (player1.cards.length < player2.cards.length) {
      setWinner(`${player2.name} Win!`);
      setScore(player2.cards.length);
    } else if (player1.cards.length === player2.cards.length) {
      setWinner("Draw");
      setScore(player1.cards.length);
    }
    return () => {};
  }, []);

  return { winner, score };
}

export default useGameOver;
