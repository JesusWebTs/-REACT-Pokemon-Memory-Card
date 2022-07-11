import React, { useState, useEffect, useContext } from "react";
import pokeSeasons from "../assets/mooks/pokemonSeasons";
import { CardsContext } from "../context/cardContext";
import { pokemonApi } from "../services";
import generateArrayRandom from "../helpers/generateArrayRandom";
import shuffleArray from "../helpers/shuffleArray";
import PokeInfoDTO from "../DTO/PokeInfo.DTO";
function usePokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(false);
  const { seasonFilter } = useContext(CardsContext);
  const [pokemonIds, setPokemonsIds] = useState([]);
  const [randomPokemonIds, setRandomPokemonIds] = useState([]);
  const [amount, setAmount] = useState(8);

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
      setRandomPokemonIds(keys);
    }

    return () => {};
  }, [pokemonIds]);

  useEffect(() => {
    if (search)
      pokemonApi
        .getAllPokemonInfo({ ids: randomPokemonIds })
        .then((pokemons) => {
          const duppedPokemons = pokemons
            .map((pokemon) => [pokemon, new PokeInfoDTO({ pokeInfo: pokemon })])
            .flat(2);
          setPokemons(shuffleArray(duppedPokemons));
        });
    return () => {};
  }, [randomPokemonIds]);

  useEffect(() => {
    pokemonApi
      .getAllPokemonInfo({ ids: [1, 2, 3, 4] })
      .then((res) => console.log(res));
    return () => {};
  }, []);

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
