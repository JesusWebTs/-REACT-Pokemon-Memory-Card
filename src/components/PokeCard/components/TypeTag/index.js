import React from "react";
import "./styles.css";
import formatText from "../../../../helpers/formatText";
import colors from "./styles/colors";
function TypeTag({ type }) {
  return (
    <div
      className="type-tag__container"
      style={{
        "--type-tag-color": colors[type],
        "--type-tag-color__modal":`${colors[type]}88`,
      }}
    >
      <p className="type-tag__text">{formatText({ text: type })}</p>
    </div>
  );
}

export default TypeTag;
