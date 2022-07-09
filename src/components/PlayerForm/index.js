import React from "react";
import "./styles.css";
import pokemonLogo from "./assets/imgs/logo.png";
import PokebalLoader from "../PokebalLoader";
import usePlayerForm from "./usePlayerForm";
import formatText from "../../helpers/formatText";
function PlayerForm({ onSubmit }) {
  const {
    player1,
    player2,
    setPlayer,
    setSubmited,
    player1E,
    player2E,
    submited,
  } = usePlayerForm();
  return (
    <div className="player-form__container">
      <form
        className="player-form__form"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmited(true);
          if (player1E || player2E) return;
          onSubmit({ players: { player1, player2 } });
        }}
      >
        <div className="player-form__image">
          <img src={pokemonLogo} />
        </div>
        <span>
          Player 1
          <input
            className={`player-form__input ${
              player1E && submited ? "player-form__input--error" : ""
            }`}
            type="text"
            placeholder="Player 1"
            value={player1}
            onChange={(e) =>
              setPlayer({
                player: 1,
                value: formatText({ text: e.target.value }),
              })
            }
          />
        </span>
        <span>
          Player 2
          <input
            className={`player-form__input ${
              player2E && submited ? "player-form__input--error" : ""
            }`}
            type="text"
            placeholder="Player 2"
            value={player2}
            onChange={(e) =>
              setPlayer({
                player: 2,
                value: formatText({ text: e.target.value }),
              })
            }
          />
        </span>
        <div className="player-form__submit">
          <div className="player-form__decorator">
            <PokebalLoader />
          </div>
          <input type="submit" value="Play" />
        </div>
      </form>
    </div>
  );
}

export default PlayerForm;
