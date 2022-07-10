import React, { useState, useEffect, useContext } from "react";
import pokeSeasons from "../assets/mooks/pokemonSeasons";
import { CardsContext } from "../context/cardContext";
import { pokemonApi } from "../services";
import generateArrayRandom from "../helpers/generateArrayRandom";
import shuffleArray from "../helpers/shuffleArray";
function usePokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(false);
  const { seasonFilter } = useContext(CardsContext);
  const [pokemonIds, setPokemonsIds] = useState([]);
  const [randomPokemonIds, setRandomPokemonIds] = useState([]);
  const [amount, setAmount] = useState(2);

  useEffect(() => {
    setSearch(true);
    setPokemons([]);
    setPokemonsIds([]);

    return () => {};
  }, []);

  useEffect(() => {
    if (search) getPokemonsIdsFiltered();
  }, [search]);

  useEffect(() => {
    let ids = [];
    let keys = generateArrayRandom({ max: pokemonIds.length, amount: amount });
    if (keys) {
      keys.forEach((key) => (ids = [...ids, pokemonIds[key]]));
      ids = ids.map((el) => [el, el]).flat();
      ids = shuffleArray(ids);
      setRandomPokemonIds(ids);
    }

    return () => {};
  }, [pokemonIds]);

  useEffect(() => {
    if (search)
      randomPokemonIds.forEach((el) => {
        pokemonApi
          .getPokemonInfo({ id: el })
          .then((res) => setPokemons((pokemon) => [...pokemon, res]));
      });
    return () => {};
  }, [randomPokemonIds]);

  const getPokemonsIdsFiltered = () => {
    let ids = [];
    seasonFilter.forEach((el) => {
      ids.push(pokeSeasons[el]);
    });
    ids = ids.flat(2);
    ids = setPokemonsIds(ids);
  };

  useEffect(() => {
    /* console.log(...new Set(pokemons.map((el) => el.types).flat(10))); */
    return () => {};
  }, [pokemons]);

  return { pokemons };
}

export default usePokemon;
