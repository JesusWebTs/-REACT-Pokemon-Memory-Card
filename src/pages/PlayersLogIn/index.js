import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { PlayerForm, PokebalLoader } from "../../components";
import { SeasonCards } from "../../components";
import { PlayersContext } from "../../context/playersContext";
import DifficultyButtons from "../../components/DifficultyButtons";

function PlayersLogIn() {
  const { setPlayerInfo, resetAll } = useContext(PlayersContext);

  const [showRightMenu, setShowRightMenu] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    resetAll();
    return () => {};
  }, []);

  const navigateToPlayGame = ({ players }) => {
    setPlayerInfo({ players });
    navigate("/play");
  };
  const navigateToScore = () => {
    navigate("/scores");
  };
  return (
    <div className="page-login__container">
      <div className="page-login__form">
        <PlayerForm onSubmit={navigateToPlayGame} />
      </div>
      <div
        className={`page-login__season ${
          showRightMenu ? "page-login__season--show" : ""
        }`}
      >
        <DifficultyButtons />
        <div className="page-login__cards">
          <SeasonCards />
        </div>
        <button className="page-login__scores" onClick={navigateToScore}>
          Scores
        </button>
        <button
          className="page-login__buttom-season-show"
          onClick={() => setShowRightMenu((prev) => !prev)}
        >
          <PokebalLoader />
        </button>
      </div>
    </div>
  );
}

export default PlayersLogIn;
