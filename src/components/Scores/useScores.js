import React, { useEffect, useState } from "react";
import { backendApi } from "../../services";
function useScores() {
  const [mathGames, setMathGames] = useState();

  useEffect(() => {
    getAllData();
    return () => {};
  }, []);

  const getAllData = () => {
    return backendApi
      .get({ endPoint: "/game/base" })
      .then((data) => {
        setMathGames(data);
      })
      .catch((err) => console.log(err));
  };

  return { mathGames };
}

export default useScores;
