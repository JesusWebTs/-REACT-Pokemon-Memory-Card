import React, { useEffect, useState, useContext } from "react";
import { CardsContext } from "../../context/cardContext";
import PokebalLoader from "../PokebalLoader";
import "./styles.css";
import useSeasonCard from "./useSeasonCard";

function SeasonCard({ season = 1 }) {
  const { pokemons } = useSeasonCard({ season });
  const { seasonFilter, filterSeason } = useContext(CardsContext);

  const toggleSelected = () => {
    filterSeason({ season });
  };

  return (
    <div
      className={`season-card__container ${
        seasonFilter.includes(season) ? "season-card__container--active" : ""
      }`}
      onClick={toggleSelected}
    >
      <div className="season-card__background-effect" />
      <div
        className={`season-card__selector ${
          seasonFilter.includes(season) ? "season-card__selector--active" : ""
        }`}
      >
        <PokebalLoader />
      </div>
      <span className="season-card__season-indicator">#{season}</span>
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="season-card__img"
          style={{
            backgroundImage: `url(${pokemon.img})`,
          }}
        >
          <img src={pokemon.img} />
        </div>
      ))}
    </div>
  );
}

export default SeasonCard;
