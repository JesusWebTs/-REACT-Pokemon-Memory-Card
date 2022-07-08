import React, { useState, useEffect } from "react";

import { pokemonApi } from "../services";
function usePokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setSearch(true);
    setPokemons([]);
    return () => {};
  }, []);

  useEffect(() => { 
    if (search)
      pokemonApi
        .getPokemonInfo({ id: 1 })
        .then((res) => setPokemons((pokemon) => [...pokemon, res]));
    return () => {};
  }, [search]);

  useEffect(() => {
    console.log(pokemons);
    return () => {};
  }, [pokemons]);

  return { pokemons };
}

export default usePokemon;
