import React, { useState, useEffect } from "react";

const nameExp =
  /[A-ZÄËÏÖÜÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙ][a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/;

function usePlayerForm() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1E, setPlayer1E] = useState(true);
  const [player2E, setPlayer2E] = useState(true);
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    if (!nameExp.test(player1)) {
      setPlayer1E(true);
    } else {
      setPlayer1E(false);
    }
    if (!nameExp.test(player2)) {
      setPlayer2E(true);
    } else {
      setPlayer2E(false);
    }
    return () => {};
  }, [player1, player2, submited]);

  const setPlayer = ({ player, value }) => {
    if (player === 1) {
      setPlayer1(value);
    }
    if (player === 2) {
      setPlayer2(value);
    }
  };
  return {
    player1,
    player2,
    player1E,
    player2E,
    submited,
    setPlayer,
    setSubmited,
  };
}

export default usePlayerForm;
