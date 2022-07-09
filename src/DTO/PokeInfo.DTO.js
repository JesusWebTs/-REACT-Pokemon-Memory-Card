import formatText from "../helpers/formatText";
import { v4 as uuidv4 } from "uuid";
class PokeInfoDTO {
  id = null;
  name = "";
  img = "";
  color = "";
  types = [];
  uuid = "";
  constructor({ pokeInfo }) {
    this.id = pokeInfo[0].id;
    this.name = formatText({ text: pokeInfo[0].name });
    this.img = pokeInfo[0].sprites.other["official-artwork"].front_default;
    this.types = pokeInfo[0].types.map((type) => type.type.name);
    this.color = pokeInfo[1].color.name;
    this.uuid = uuidv4();
  }

  __getUuid() {
    this.uuid = uuidv4();
  }
}

export default PokeInfoDTO;
