import React, { useState, useEffect } from "react";
import { pokemonApi } from "../../services";
import seasons from "./seasons";

export default function useSeasonCard({ season = 1 }) {
  const initialsPokemonsId = seasons[season];
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setPokemons([]);
    setSearch(true);
    return () => {};
  }, []);

  useEffect(() => {
    if (search)
      initialsPokemonsId.forEach((el) => {
        pokemonApi
          .getPokemonInfo({ id: el })
          .then((res) =>
            setPokemons((pokemon) =>
              [...pokemon, res].sort((a, b) => a.id - b.id)
            )
          );
      });
    return () => {};
  }, [search]);

  return { pokemons };
}
