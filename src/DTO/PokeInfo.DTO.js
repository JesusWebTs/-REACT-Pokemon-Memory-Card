class PokeInfoDTO {
  id = null;
  name = "";
  img = "";
  color = "";
  types = [];
  constructor({ pokeInfo }) {
    this.id = pokeInfo[0].id;
    this.name = this._formatText({ text: pokeInfo[0].name });
    this.img = pokeInfo[0].sprites.other["official-artwork"].front_default;
    this.types = pokeInfo[0].types.map((type) => type.type.name);
    this.color = pokeInfo[1].color.name;
  }

  _formatText({ text }) {
    return text[0].toUpperCase() + text.substring(1);
  }
}

export default PokeInfoDTO;
