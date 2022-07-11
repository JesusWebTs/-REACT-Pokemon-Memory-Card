import React, { useContext } from "react";
import "./styles.css";
import { CardsContext } from "../../context/cardContext";
function DifficultyButtons() {
  const { difficulty, setDifficulty } = useContext(CardsContext);
  return (
    <div className="difficulty-button__container">
      <button
        className={`difficulty-button__difficulty-button ${
          difficulty === 4 ? "difficulty-button__difficulty-button--active" : ""
        } `}
        onClick={(e) => {
          setDifficulty(4);
        }}
      >
        <span>E</span>
      </button>
      <button
        className={`difficulty-button__difficulty-button ${
          difficulty === 8 ? "difficulty-button__difficulty-button--active" : ""
        } `}
        onClick={(e) => {
          setDifficulty(8);
        }}
      >
        <span>M</span>
      </button>
      <button
        className={`difficulty-button__difficulty-button ${
          difficulty === 16 ? "difficulty-button__difficulty-button--active" : ""
        } `}
        onClick={(e) => {
          setDifficulty(16);
        }}
      >
        <span>H</span>
      </button>
      <button
        className={`difficulty-button__difficulty-button ${
          difficulty === 14 ? "difficulty-button__difficulty-button--active" : ""
        } `}
        onClick={(e) => {
            setDifficulty(32);
        }}
      >
        <span>H+</span>
      </button>
    </div>
  );
}

export default DifficultyButtons;
