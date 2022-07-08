import Pokemon from "./Apis/Pokemon";

const headers = {
  "Content-Type": "application/json",
};

const pokemonApi = new Pokemon({
  baseURL: "https://pokeapi.co",
  url: "/api/v2",
  headers,
});

export { pokemonApi };
