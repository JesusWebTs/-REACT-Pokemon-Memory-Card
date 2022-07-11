import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    getAllData();
    return () => {};
  }, [location]);

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
