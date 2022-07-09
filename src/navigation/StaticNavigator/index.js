import React from "react";
import { PlayersLogIn, PlayGame } from "../../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function StaticNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayersLogIn />} />
        <Route path="/login" element={<PlayersLogIn />} />
        <Route path="/play" element={<PlayGame />} />
        <Route path="/score" element={<div>Score</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default StaticNavigator;
