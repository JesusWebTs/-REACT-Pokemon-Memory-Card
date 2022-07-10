import React from "react";
import useScores from "./useScores";
import "./styles.css";
function Scores() {
  const {} = useScores();
  return (
    <div className="scores__container">
      <ul></ul>
    </div>
  );
}

export default Scores;
