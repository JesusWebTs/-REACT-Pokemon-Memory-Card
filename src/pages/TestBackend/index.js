import React from "react";
import { backendApi } from "../../services";

function TestBackend() {
  const data = {
    _id: null,
    date: 1657473812438,
    winner: "123456",
    players: [
      { name: "Richard", uuid: "123456", cards: [1, 2, 3], points: 3 },
      { name: "Jesus", uuid: "789456", cards: [4, 5, 6], points: 3 },
    ],
  };

  const sendData = () => {
    backendApi
      .post({ endPoint: "/game/base", value: data })
      .then((el) => console.log(el))
      .catch((err) => console.log(err));
  };

  const getAllData = () => {
    return backendApi
      .get({ endPoint: "/game/base" })
      .then((el) => {
        console.log(el);
        return el.payload;
      })
      .catch((err) => console.log(err));
  };

  const deleteAll = () => {
    getAllData().then((el) => {
      el.forEach((el) => {
        backendApi.delete({ id: el._id, endPoint: "/game/base" });
      });
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        color: "white",
      }}
    >
      <button onClick={sendData}>Send Data</button>
      <button onClick={getAllData}>Get Data</button>
      <button onClick={deleteAll}>Delete Data</button>
      <p>Data</p>
      <div>
        <p>_id {data._id}</p>
        <p>date {data.date}</p>
        <p>winner {data.winner}</p>
        <div>
          players
          {data.players.map((player) => (
            <div key={player.uuid}>
              <p>points {player.points}</p>
              <p>uuid {player.uuid}</p>
              <p>name {player.name}</p>
              <ul>
                {player.cards.map((card) => (
                  <li key={card}>card</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestBackend;
