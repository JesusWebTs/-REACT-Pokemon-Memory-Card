import React, { useEffect, useState } from "react";
import { backendApi } from "../../services";

const initData = {
  _id: "",
  date: "",
  winner: "",
  players: [
    {
      uuid: "",
      name: "",
      points: 0,
      cards: [],
    },
    {
      uuid: "",
      name: "",
      points: 0,
      cards: [],
    },
  ],
};

function useScores() {
  const [mathGames, setMathGames] = useState([]);

  useEffect(() => {
    getAllData();
    return () => {};
  }, []);

  const getAllData = () => {
    return backendApi
      .get({ endPoint: "/game/base" })
      .then((data) => {
        setMathGames(data.payload ?? []);
      })
      .catch((err) => console.log(err));
  };

  return { mathGames };
}

export default useScores;
