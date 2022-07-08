import PokeInfoDTO from "../../../DTO/PokeInfo.DTO";
import Request from "../abstract";

class Articles extends Request {
  constructor({ url = "", baseURL = "", headers = "" } = {}) {
    super({ url, baseURL, headers });
  }

  getPokemonInfo({ id = 1 }) {
    return Promise.all([
      this.getOne({ endPoint: "/pokemon", id }),
      this.getOne({ endPoint: "/pokemon-species", id }),
    ]).then((pokeInfo) => {
      return new PokeInfoDTO({
        pokeInfo,
      });
    });
  }
}
export default Articles;
