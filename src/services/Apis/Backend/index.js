import PokeInfoDTO from "../../../DTO/PokeInfo.DTO";
import Request from "../abstract";

class BackEnd extends Request {
  constructor({ url = "", baseURL = "", headers = "" } = {}) {
    super({ url, baseURL, headers });
  }
}
export default BackEnd;
