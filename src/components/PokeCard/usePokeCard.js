import React, { useContext, useEffect, useState } from "react";
import { CardsContext } from "../../context/cardContext";
import { PlayersContext } from "../../context/playersContext";
function usePokeCard({ id, uuid }) {
  const { targets, setTargets, flippedList, setTargetsIds } =
    useContext(CardsContext);
  const { player1, player2, currentPlayer } = useContext(PlayersContext);

  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const [fliped, setFliped] = useState(false);

  const verifyAndTurn = () => {
    if (targets.length < 2) {
      setTargets((prev) => [...prev, uuid]);
      setTargetsIds((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    if (player1.cards.includes(id)) setUser(player1.name);
    else if (player2.cards.includes(id)) setUser(player2.name);
    else {
      setUser(currentPlayer.name);
    }
    return () => {};
  }, [targets]);

  return {
    user,
    setUser,
    loader,
    setLoader,
    fliped,
    setFliped,
    verifyAndTurn,
    targets,
    flippedList,
  };
}

export default usePokeCard;
