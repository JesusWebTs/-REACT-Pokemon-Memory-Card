import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SeasonCard, PokebalLoader, Scores } from "../../components";
import "./styles.css";
import useGameOver from "./useGameOver";
const seasons = [1, 2, 3, 4, 5, 6, 7, 8];
function GameOver() {
  const navigate = useNavigate();
  const navigateToPlayGame = () => {
    if (isScorePage) navigate("/");
    else if (!isScorePage) navigate("/play");
  };
  const { winner, score } = useGameOver({});
  const location = useLocation();
  const [isScorePage, setIsScorePage] = useState(false);

  useEffect(() => {
    if (location.pathname === "/game-over") setIsScorePage(false);
    else if (location.pathname === "/scores") setIsScorePage(true);
    return () => {};
  }, []);

  return (
    <div className="page-game-over__container">
      <div className="page-game-over__left">
        <div className="page-game-over__info">
          {isScorePage ? (
            <></>
          ) : (
            <>
              <h2 className="page-game-over__title">{winner}</h2>
              <p className="page-game-over__sub-title">Score: {score}</p>
            </>
          )}
          <div className="page-game-over__navigate">
            <div className="page-game-over__decorator">
              <PokebalLoader />
            </div>
            <button onClick={navigateToPlayGame}>
              {isScorePage ? "Menu" : "Play again"}.
            </button>
          </div>
        </div>
        <div className="page-game-over__down">
          <Scores />
        </div>
      </div>
      <div className="page-game-over__season">
        <h2>Generations</h2>
        {seasons.map((season) => (
          <React.Fragment key={season}>
            <SeasonCard season={season} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default GameOver;
