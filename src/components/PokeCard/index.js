import React from "react";
import "./styles.css";

function PokeCard({ pokeInfo }) {
  const { id, name, img, types, color } = pokeInfo;
  return (
    <div className="poke-card__container">
      <div className="poke-card__header">
        <h2 className="poke-card__title">
          #{id} {name}
        </h2>
        <span className="poke-card__stats"></span>
        <span className="poke-card__types"></span>
      </div>
      <img src="" className="poke-card__image" />
      <div className="poke-card__body"></div>
      <div className="poke-card__footer"></div>
    </div>
  );
}

export default PokeCard;
