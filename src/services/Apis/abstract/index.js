class Request {
  _url;
  _baseURL;
  _headers;
  _request;
  constructor({ url = "", baseURL = "", headers = "" } = {}) {
    this._url = url;
    this._headers = headers;
    this._baseURL = baseURL;
  }

  async _request({ method = "GET", data = null, url = "" }) {
    return fetch(`${this._baseURL}${this._url}${url}`, {
      method,
      headers: this._headers,
      body: data ? JSON.stringify(data) : null,
      mode: "cors",
    })
      .then((el) => {
        return el.json();
      })
      .then((json) => json)
      .catch((err) => {
        console.log(err);
      });
  }

  async get({ endPoint = "" }) {
    return this._request({
      url: endPoint,
      method: "GET",
    }).then((res) => {
      return res;
    });
  }
  async getOne({ id = "", endPoint = "" }) {
    return this._request({
      url: `${endPoint}/${id}`,
      method: "GET",
    }).then((res) => {
      return res;
    });
  }
  async getAllFiltered({ endPoint = "", query = "" }) {
    console.log(endPoint);
    return this._request({
      url: `${endPoint}${query}`,
      method: "GET",
    }).then((res) => {
      return res;
    });
  }
  async post({ value, endPoint }) {
    return this._request({
      url: `${endPoint}`,
      data: value,
      method: "POST",
    }).then((res) => {
      return res;
    });
  }
  async put({ value, id, endPoint = "" }) {
    return this._request({
      url: `${endPoint}/${id}`,
      data: value,
      method: "PUT",
    }).then((res) => {
      return res;
    });
  }
  async delete({ uuid }) {
    return this._request({
      url: `${this._url}`,
      data: { uuid },
      method: "DELETE",
    }).then((res) => {
      return res;
    });
  }
}
export default Request;
