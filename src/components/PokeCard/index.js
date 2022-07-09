import React, { useEffect, useState } from "react";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";

import usePokeCard from "./usePokeCard";

import { PokebalLoader } from "../";
import colors from "./styles/colors";
import ReactCardFlip from "react-card-flip";
import { Dorso, TypeTag } from "./components";

function PokeCard({ pokeInfo }) {
  const { id, name, img, types, color, uuid } = pokeInfo;
  const {
    user,
    setUser,
    loader,
    setLoader,
    fliped,
    setFliped,
    flipCard,
    verifyAndTurn,
    targets,
    flippedList,
  } = usePokeCard({ id, uuid });

  [].find((el) => el.uuid);

  const [turn, setTurn] = useState(true);

  useEffect(() => {
    setTimeout(() => setTurn(false), 5000);
    return () => {};
  }, []);

  return (
    <div className="poke-card__root">
      <ReactCardFlip
        isFlipped={targets.includes(uuid) || flippedList.includes(id) || turn}
      >
        <div onClick={verifyAndTurn}>
          <Dorso />
        </div>
        <div
          className="poke-card__container"
          style={{
            "--poke-card-color-1": colors[color][1],
            "--poke-card-color-2": colors[color][2],
            "--poke-card-color-3": colors[color][3],
          }}
        >
          <div className="poke-card__back-ground">
            <div className="poke-card__back-ground-blur"></div>
          </div>
          <div className="poke-card__header">
            <h2 className="poke-card__title">
              #{id} {name}
            </h2>
            <span className="poke-card__stats"></span>
          </div>
          <div className="poke-card__image">
            <img src={img} onLoad={() => setLoader(false)} alt={name} />

            <div
              className={`poke-card__image-loader ${
                loader ? "poke-card__image-loader--show" : ""
              }`}
            >
              <PokebalLoader />
            </div>
          </div>
          <div className="poke-card__body">
            <div className="poke-card__types">
              {types.map((type) => (
                <TypeTag type={type} key={`${id}-${type}`} />
              ))}
            </div>
          </div>
          <div className="poke-card__footer">
            <p>Revealed by: {user}</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default PokeCard;
