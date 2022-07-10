import Pokemon from "./Apis/Pokemon";
import BackEnd from "./Apis/Backend";

const headers = {
  "Content-Type": "application/json",
};

const pokemonApi = new Pokemon({
  baseURL: "https://pokeapi.co",
  url: "/api/v2",
  headers,
});
const backendApi = new BackEnd({
  baseURL: "http://localhost:5500",
  url: "/api",
  headers,
});

export { pokemonApi, backendApi };
