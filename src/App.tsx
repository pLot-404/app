/* eslint-disable import/extensions */
import React from 'react';
import Game from './modules/Game';

const App: React.VFC = () => (
  <div>
    <Game height={1000} width={1500} />
  </div>
);

export default App;
