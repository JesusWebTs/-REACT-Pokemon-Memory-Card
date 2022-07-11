import React from "react";
import "./styles.css";
import { SeasonCard } from "../";
const seasons = new Array(8).fill(null).map((_, i) => i + 1);
function SeasonCards() {
  return (
    <div className="season-cards__container">
      <h2>Generations</h2>
      <div className="season-cards__cards">
        {seasons.map((season) => (
          <React.Fragment key={season}>
            <SeasonCard season={season} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SeasonCards;
