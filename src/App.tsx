/* eslint-disable import/extensions */
import React from "react";
import styles from "./App.module.scss";
import Game from "./modules/Game";

const App: React.VFC = () => {
  return (
    <div>
      <Game />
    </div>
  );
};

export default App;
