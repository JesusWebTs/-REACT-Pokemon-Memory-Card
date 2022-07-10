import Pokemon from "./Apis/Pokemon";
import BackEnd from "./Apis/Backend";
import config from "../eviroments";

const headers = {
  "Content-Type": "application/json",
};

const pokemonApi = new Pokemon({
  baseURL: "https://pokeapi.co",
  url: "/api/v2",
  headers,
});
const backendApi = new BackEnd({
  baseURL: config.API.url,
  url: "/api",
  headers,
});

export { pokemonApi, backendApi };
