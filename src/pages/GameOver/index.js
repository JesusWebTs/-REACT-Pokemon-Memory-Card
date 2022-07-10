import React from "react";
import { useNavigate } from "react-router-dom";
import { SeasonCard, PokebalLoader, Scores } from "../../components";
import "./styles.css";
import useGameOver from "./useGameOver";
const seasons = [1, 2, 3, 4, 5, 6, 7, 8];
function GameOver() {
  const navigate = useNavigate();
  const navigateToPlayGame = () => {
    navigate("/play");
  };
  const { winner, score } = useGameOver({});

  return (
    <div className="page-game-over__container">
      <div className="page-game-over__left">
        <div className="page-game-over__info">
          <h2 className="page-game-over__title">{winner}</h2>
          <p className="page-game-over__sub-title">Score: {score}</p>
          <div className="page-game-over__submit">
            <div className="page-game-over__decorator">
              <PokebalLoader />
            </div>
            <button onClick={navigateToPlayGame}>Play again.</button>
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
