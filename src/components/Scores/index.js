import React from "react";
import useScores from "./useScores";
import "./styles.css";
function Scores() {
  const { mathGames } = useScores();
  return (
    <div className="scores__container">
      <ul className="scores__list">
        {mathGames.map((game) => (
          <li key={game.id} className="scores__item">
            <div className="scores__item-container">
              {game.players.map((player) => (
                <div className="scores__item-player">
                  <h2>{player.name}</h2>
                  <span>{player.points}</span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scores;
