import PokeInfoDTO from "../../../DTO/PokeInfo.DTO";
import Request from "../abstract";

class Pokemon extends Request {
  constructor({ url = "", baseURL = "", headers = "" } = {}) {
    super({ url, baseURL, headers });
  }

  async getPokemonInfo({ id = 1 }) {
    const pokeInfo = await Promise.all([
      this.getOne({ endPoint: "/pokemon", id }),
      this.getOne({ endPoint: "/pokemon-species", id }),
    ]);
    return new PokeInfoDTO({
      pokeInfo,
    });
  }

  async getAllPokemonInfo({ ids = [] }) {
    let promises = ids.map((id) => this.getPokemonInfo({ id }));
    return await Promise.all(promises).then((el) => el);
  }
}
export default Pokemon;
