import { createContext, useEffect, useState } from "react";

const initialState = {
  card1: {
    id: null,
  },
  card2: {
    id: null,
  },
};
const CardsContext = createContext(initialState);

function CardsProvider({ children }) {
  const [cards, setCards] = useState(initialState);
  const [targets, setTargets] = useState([]);
  const [targetsIds, setTargetsIds] = useState([]);
  const [flippedList, setFlipedList] = useState([]);
  const [seasonFilter, setSeasonFilter] = useState([1]);

  const filterSeason = ({ season }) => {
    if (seasonFilter.includes(season)) {
      setSeasonFilter(seasonFilter.filter((el) => el !== season));
    } else {
      setSeasonFilter((prev) => [...prev, season]);
    }
  };

  const resetCards = () => {
    setTargetsIds([]);
    setTargets([]);
  };

  return (
    <CardsContext.Provider
      value={{
        cards,
        setCards,
        flippedList,
        setFlipedList,
        seasonFilter,
        filterSeason,
        resetCards,
        targets,
        setTargets,
        targetsIds,
        setTargetsIds,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}

export { CardsContext, CardsProvider };
