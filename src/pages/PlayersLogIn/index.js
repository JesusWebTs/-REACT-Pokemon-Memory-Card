import React, { useContext, useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { PlayerForm } from "../../components";
import { SeasonCard } from "../../components";
import { PlayersContext } from "../../context/playersContext";

const seasons = [1, 2, 3, 4, 5, 6, 7, 8];
function PlayersLogIn() {
  const { setPlayerInfo, addPlayerCard, resetAll } = useContext(PlayersContext);
  let navigate = useNavigate();

  useEffect(() => {
    resetAll();
    return () => {};
  }, []);

  const navigateToPlayGame = ({ players }) => {
    setPlayerInfo({ players });
    navigate("/play");
  };
  return (
    <div className="page-login__container">
      <div className="page-login__form">
        <PlayerForm onSubmit={navigateToPlayGame} />
      </div>
      <div className="page-login__season">
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

export default PlayersLogIn;
